const { defaults } = require("pg");
const knex = require("../Config/knexfile");


exports.registerUser = async (req,res)=>{
    try {
        const user = {
            name : req.body.name,
            mail: req.body.mail,
            phone: req.body.phone,
            plan : req.body.plan,
            addons : req.body.addons
        }
        
    } catch (error) {
        
    }

}