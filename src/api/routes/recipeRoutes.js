const router = require('express').Router();
const {
    createNewRecipeController,
    singleRecipeController,
    multiRecipeController,
    updateRecipeController,
    deleteRecipeController
} = require('../controllers/recipeController')



/**
 * @routes POST /recipe/create/
 * @description It'll create the new recipe
 * @access public
 */

router.post('/create',createNewRecipeController)

/**
 * @routes GET /recipe/singlerecipe/:id
 * @description Fetch only one recipe
 * @access PUBLIC
 */

router.get('/singlerecipe/:id',singleRecipeController)


/**
 * @routes GET /recipe/allrecipe
 * @description Fetch all recipies
 * @access PUBLIC
 */

router.get('/allrecipe',multiRecipeController)


/**
 * @routes PATCH /recipe/updaterecipe/:id
 * @description Update a particular recipe
 * @access PUBLIC
 */

router.patch('/updaterecipe/:id',updateRecipeController)


/**
 * @routes DELETE /recipe/deleterecipe/:id
 * @description Delete that particular Recipe
 * @access PUBLIC
 */

router.delete('/deleterecipe/:id',deleteRecipeController)

module.exports = router