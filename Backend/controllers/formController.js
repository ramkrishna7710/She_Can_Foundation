const Contact=
require("../models/Contact");

exports.submitForm=
async(req,res)=>{

try{

const {
name,
email,
message
}=req.body;

if(
!name ||
!email ||
!message
){

return res.status(400)
.json({

message:
"All fields required"

})

}

await Contact.create({

name,
email,
message

});

res.json({

success:true,

message:
"Form Submitted Successfully"

})

}

catch(err){

res.status(500)
.json(err)

}

}