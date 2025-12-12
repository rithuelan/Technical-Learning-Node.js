import Joi from "joi";

export const validateRegister = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  next();
};
