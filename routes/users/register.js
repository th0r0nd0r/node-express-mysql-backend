import Joi from 'joi';
import UserModel from '../../models/User.js';
import { Op } from 'sequelize';
import { Router } from 'express';
const router = Router();

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const passwordError = new Error(
  'Password must be at least 8 characters, contain uppercase + lowercase letters, a number, and a symbol.'
);
const confirmPasswordError = new Error('Passwords must match');

/* POST */

router.post('/', (req, res, next) => {
  const { body } = req;

  const reqSchema = Joi.object({
    username: Joi.string().max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .max(60)
      .regex(passwordRegex)
      .error(passwordError)
      .required(),
    confirmPassword: Joi.string()
      .min(8)
      .max(60)
      .ref('password')
      .error(confirmPasswordError)
      .required(),
  });

  const respSchema = Joi.object({
    id: Joi.number().integer().min(1).strict().required(),
    username: Joi.string().max(15).required(),
    email: Joi.string().email().required(),
  });

  const reqError = reqSchema.validate(body).error;
  if (reqError) {
    return res.status(400).json(reqError.message);
  }

  const { username, email, password, confirmPassword } = body;

  UserModel.findOne({ where: { [Op.or]: [{ email, username }] } }).then(
    (user) => {
      if (user) {
        // TODO:
        // if (user.email === body.email && hash(body.password) !== user.password)
        //    return res.status(400).json('Incorrect email and password combination');
        // else
        //    redirect to login page

        if (username === user.username) {
          return res.status(409).json('Username already exists');
        }
      } else {
        if (password !== confirmPassword) {
          return res.status(400).json('Passwords do not match');
        }

        UserModel.create({ username, email, password }).then((newUser) => {
          const { id, username, email } = newUser;
          const resp = { id, username, email };

          const { value, error } = Joi.validate(resp, respSchema);
          if (error) return res.status(500).json(error);

          return res.status(201).json(value);
        });
      }
    }
  );
});
