const stepsIngredients = [
    {   step_id: 1,
        quantity: '2',
        ingredient_id: 1
    },{
        step_id: 1,
        quantity: '2tbs',
        ingredient_id: 2
    }
]

exports.stepsIngredients = stepsIngredients

exports.seed = function(knex){
    return knex('stepsIngredients').insert(stepsIngredients)
}