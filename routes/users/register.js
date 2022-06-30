import Joi from 'joi';
import { Router } from 'express';
const router = Router();

/* POST */

router.post('/', (req, res, next) => {
  const { body } = req;

  const reqSchema = Joi.object({
    username: Joi.string().max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(60).required(),
  });

  const respSchema = Joi.object({
    id: Joi.number().integer().min(1).strict(),
    username: Joi.string().max(15).required(),
    email: Joi.string().email().required(),
  });

  const reqError = reqSchema.validate(body).error;
  if (reqError) {
    return res.status(400).json(reqError.message);
  }


});
