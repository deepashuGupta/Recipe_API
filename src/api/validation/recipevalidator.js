const Joi = require('joi');


exports.recipeValidator = (body)=>{

    const joiSchema = Joi.object({
      dish : Joi.string().min(6).required()
        .messages({
          'string.base': `"dish" should be a type of 'text'`,
          'string.empty': `"dish" cannot be an empty field`,
          'string.min': `"dish" should have a minimum length of {#limit}`,
          'any.required': `"dish" is a required field`
        }),
        chef : Joi.string().min(4).required()
        .messages({
          'string.base': `"chef" should be a type of 'text'`,
          'string.empty': `"chef" cannot be an empty field`,
          'string.min': `"chef" should have a minimum length of {#limit}`,
          'any.required': `"chef" is a required field`
        }),
        description : Joi.string().min(10).required()
        .messages({
          'string.base': `"description" should be a type of 'text'`,
          'string.empty': `"description" cannot be an empty field`,
          'string.min': `"description" should have a minimum length of {#limit}`,
          'any.required': `"description" is a required field`
        }),
        image : Joi.string().required(),
        ingredients : Joi.string().required()
        
      })

    return joiSchema.validate(body,{abortEarly : false})
}
