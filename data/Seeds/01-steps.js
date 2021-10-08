const steps = [
    {   recipe_id: 1,
        step_num: 1,
        instruction: 'whisk together some eggs and butter'}
]

exports.steps = steps

exports.seed = function(knex){
    return knex('steps').insert(steps)
}