const Recipe = require('../models/recipeSchema');

exports.createRecipeService = (body) =>{
    const { dish,chef, image, description, ingredients } = body;

    const newRecipe = new Recipe({dish,chef, image, description, ingredients});

    return new Promise((res,rej) => {
        Recipe.findOne({dish})
        .then( existedRecipe => {
            if(existedRecipe) return rej('Recipe already existed !');
            newRecipe.save()
            .then(newRecipe => {res(newRecipe)})
            .catch(err => rej(err))
        }).catch(err => rej(err))
        // res(newRecipe)
    })
}

exports.singleRecipeService = (id) =>{
    return new Promise((res,rej) => {
        Recipe.findOne({_id : id})
        .then(foundedRecipe => res(foundedRecipe))
        .catch (err => rej(err))
    })

}

exports.multiRecipeService = () =>{
    return new Promise((res,rej) => {
        Recipe.find()
        .then(recipies => res(recipies))
        .catch(err => rej(err))
    })
}

exports.updateRecipeService = (id,body) =>{
    const { dish,chef, image, description, ingredients } = body;
    const updateRecipe = { dish,chef, image, description, ingredients }
    return new Promise((res,rej) => {
        Recipe.updateOne({_id : id},{$set : updateRecipe}, {new : true})
        .then(updatedRecipe => res(updatedRecipe))
        .catch(err => rej(err))
    })
}

exports.deleteRecipeService = (id) => {
    return new Promise((res,rej) => {
        Recipe.findOneAndDelete({_id : id}).
        then(recipeDelete => res(recipeDelete))
        .catch(err => rej(err))

    })
}