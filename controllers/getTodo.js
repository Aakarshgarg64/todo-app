const Todo=require("../models/Todo");

exports.getTodo=async(req,res)=>
{
    try{
      const todos =await Todo.find({});

      res.status(200)
            .json({
                success:true,
                data:todos,
                message:"todos fetched",
            })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success:false,
                data:"internal server error",
                message:err.essage,
            })
        
    

    }
}