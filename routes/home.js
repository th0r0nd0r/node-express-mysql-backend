import { Router } from 'express';
const router = Router();

/* GET */

router.get('/', (req, res) => {
  res.json({ greeting: 'Hello World!' });
});

export default router;
