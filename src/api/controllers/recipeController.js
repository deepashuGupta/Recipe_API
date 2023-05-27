const { recipeValidator } = require('../validation/recipevalidator');
const {
    createRecipeService,
    singleRecipeService,
    multiRecipeService,
    updateRecipeService,
    deleteRecipeService
} = require('../services/recipeService')


exports.createNewRecipeController = (req,res,next) =>{
    const {value, error} = recipeValidator(req.body);
    if(error) return res.status(401).json({error : error.details.map(m => m.message)})

    // res.json({value,error})
    createRecipeService(req.body)
    .then( recipe => res.status(200).json({message : 'Recipe has been Created', recipe}))
    .catch(err => res.status(501).json({message : 'Somethig went wrong',err}))
}


exports.singleRecipeController = (req,res,next) =>{
    singleRecipeService(req.params.id)
    .then( recipe => res.status(200).json({message : 'Single Recipe has been found', recipe}))
    .catch(err => res.status(501).json({message : 'Somethig went wrong',err}))
}

exports.multiRecipeController = (req,res,next)=>{
    multiRecipeService()
    .then(recipies => res.status(200).json({message : 'All Recipies has been found',recipies}))
    .catch(err => res.status(501).json({message : 'Somethig went wrong',err}))
}

exports.updateRecipeController = (req,res,next) =>{
    // Validation for the recieved value
    const {value, error} = recipeValidator(req.body);
    if(error) return res.status(401).json({error : error.details.map(m => m.message)})

    // Calling the service to update on databse
    updateRecipeService(req.params.id, req.body)
    .then(foundedRecipe => res.status(200).json({message : 'Recipe has been Updated',foundedRecipe}))
    .catch(err => res.status(501).json({message : 'Somethig went wrong',err}))
}

exports.deleteRecipeController = (req,res,next) => {
    deleteRecipeService(req.params.id)
    .then(recipeDelete => res.status(200).json({message : 'Successfull Deleted ', recipeDelete}))
    .catch(err => res.status(501).json({message : 'Something went Wrong' , err}))
}