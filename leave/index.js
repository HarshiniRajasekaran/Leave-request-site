import express from "express";
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("login.ejs");
});

app.get("/home",(req,res)=>{
  res.render("home.ejs");
});

app.get("/status",(req,res)=>{
  res.render("status.ejs");
});

app.post("/login",(req,res)=>{
  console.log(req.body);
  res.render("applyform.ejs");
});

app.post("/status",(req,res)=>{
  console.log(req.body);
  const rand = Math.floor(Math.random()*10);
  const isApproved =  rand % 2 === 0 ? 'Approved' : 'Declined';
  res.render("status.ejs",{
    fname: req.body.fname,
    lname: req.body.lname,
    empid: req.body.empid,
    start: req.body.start,
    end: req.body.end,
    manager: req.body.manager,
    status:isApproved,
  })
})

app.listen(port ,() =>{
  console.log(`Port ${port} is active`);
});