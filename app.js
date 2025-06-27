const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');

const path = require("path");



const methodOverride = require("method-override");




app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set ("views" ,path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));



let posts = [
{
id :uuidv4(),
  content:"hi my name is gaurav mehra"

}

]



app.get("/add",(req,res)=>{
    res.render("./add.ejs")
})


app.post("/player/add",(req,res)=>{
  
  res.send("helloo")

})




app.get("/posts",(req,res)=>{
    res.render("./index.ejs",{posts})
})



app.post("/posts",(req,res)=>{

    let {content} =req.body;

    let id = uuidv4();

    posts.push({id,content});

    console.log(content);
  
    res.redirect("/posts")
 
  
})

// app.delete("/posts/:id",(req,res)=>{
//     let {id} = req.params;
//      posts = posts.filter((p) => id != p.id);

// console.log(posts)
// //    res.redirect("/")
// })


app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    posts = posts.filter((p) => id != p.id);
     
    res.redirect("/posts");
})


app.listen("3000",()=>{
    console.log("app is listening on port 3000");
})