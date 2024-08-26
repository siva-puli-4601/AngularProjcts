const {insertEmployee,checkEmp}=require('../services/userService');
const addEmployee=async (req,res)=>
{
    console.log("hello");
    try{
    const data=req.body;
    console.log("controller",data)
    const result=await insertEmployee(data);
    console.log(result);
    return res.status(201).json({message:result});
    }catch(err){
        return res.status(404).json({message: err.message});
    }
}
const checkEmployee=async (req,res)=>
{
    try{
        console.log("hello");
  const data=req.body;
  const result=await checkEmp(data);
  console.log("control",result);
  return res.status(200).json({message:result});
    } catch(err)
    {
        return res.status(404).json({message: err.message});
    }
}

module.exports={addEmployee,checkEmployee};