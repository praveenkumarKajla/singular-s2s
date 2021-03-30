import Joi from 'joi';
import { Platform } from './@typeroot/singular';

export const SCHEMA = Joi.object().keys({
  n: Joi.string().min(1).required().error(new Error('Event Name is required!')),
  e: Joi.string().error(new Error('Event Data is required!')),
  p: Joi.string().valid(Platform.ANDROID, Platform.IOS).required().error(new Error('App Platform is required!')),
  i: Joi.string().required().error(new Error('Package Name or Bundle ID  is required!')),
  ip: Joi.string().required(),
  // aifa: Joi.string()
  //   .when("p",
  //     {
  //       is: Platform.ANDROID,
  //       then: Joi.string().lowercase().required().error(new Error("aifa ID required")),
  //     }),
  andi: Joi.string().when('p', {
    is: Platform.ANDROID,
    then: Joi.string().lowercase().required().error(new Error('andi ID required')),
  }),
  // idfa: Joi.string()
  //   .when("p",
  //     {
  //       is: Platform.IOS,
  //       then: Joi.string().uppercase().required().error(new Error("idfa ID required")),
  //     }),
  idfv: Joi.string().when('p', {
    is: Platform.IOS,
    then: Joi.string().uppercase().required().error(new Error('idfv ID required')),
  }),
  utime: Joi.number(),
  umilisec: Joi.number(),
  // eslint-disable-next-line @typescript-eslint/camelcase
  custom_user_id: Joi.string(),
});
