const db = require('../database/db');
require('dotenv').config(); 

const insertEmployee=async (data)=>
{
    
    try{
        const {username,password,role,address,email,imageUrl}=data;
        console.log(data);
        insertQuery="insert into users(username,password,role,address,email,profile) values(?,?,?,?,?,?)";
        const [results]=await db.query(insertQuery,[username,password,role,JSON.stringify(address),email,imageUrl]);
        console.log(results);
        return results.insertId;

    }catch(err)
    {
        throw new Error(`failed to insert ${err.message}`);
    }
}
const checkEmp=async (data)=>
{
    try
    {
     const {email,password}=data;
     console.log(data);
     checkQuery="select * from users where email=? and password=?";
     const [results]=await db.query(checkQuery,[email,password]);
     if(results.length>0)
     {
        
        getRole="select role,username,profile from users where email=? and password=?";
        const [results]=await db.query(checkQuery,[email,password]);
        const x={role:results[0].role,username:results[0].username,profile:results[0].profile}
        console.log(x);
        return {role:results[0].role,username:results[0].username,profile:results[0].profile};

     }
     else
     {
        throw new Error(`employee not exists`);
     }
     
    }catch(err)
    {
      throw new Error(`failed to get data`);
    }
}
module.exports={insertEmployee,checkEmp};