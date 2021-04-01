import registration from '../Comman/Registration';

export const AddData = (req, res) => {
   registration.create(req.body, (err, result) => {
     if (err) {
       res.send(err);
     } else {
       res.send(result);
     }
  });
}

export const GetData=(req,res)=>{
 
  registration.find({"userName":req.body.userName,"Password":req.body.Password},(err,result)=>{
    if(err){  
      res.send(err);
     
     
    }else{
      console.log("enter correct details");
      res.send(result);
    }
  })
}

export const Updatedata =(req,res)=>{
  registration.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
}

export const DeleteData=(req,res) =>{

  registration.findByIdAndRemove(req.params.id,(err,result)=>{
   
     if(err){
       res.send(err);
     }else{
       res.send(result);
     }
  
  })
}







