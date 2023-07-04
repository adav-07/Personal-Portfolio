const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
// import './models/data';

const UserModel=require('./models/data')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://krithik_adav:krithikadav@cluster0.zwsazx4.mongodb.net/portfolio?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.get('/read', async (req,res)=>{
    // const user=new UserModel('')
    // $where:{_id:"641bd93436545e5799eba8fa"}
    UserModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})

app.post('/insert',async(req,res)=>{
    try{
    const name=req.body.name;
    const email=req.body.email;
    const mobile=req.body.phone;
    const designation=req.body.designation;
    const github_url=req.body.git_url;
    const linkedin_url=req.body.linkedin_url;
    const skills=req.body.skills;
    const Projects=req.body.projects;
    const experience=req.body.exps;
    const id=req.body.id;
    // const id="1";
    const user=new UserModel({name:name,email:email,mobile:mobile,designation:designation,github_url:github_url,linkedin_url:linkedin_url,skills:skills,Projects:Projects,experience:experience,user_id:id});
   
    await user.save();
    res.send("inserted data");
   } 
   catch(err){
    console.log(err);
   }
});

app.listen(3001,()=>{
    console.log('server running');
})