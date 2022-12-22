const bodyParser = require("body-parser");
const express=require("express");

const app=express();
let items=[];
let workitems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    let today=new Date();
    // var day="";
    // var currentday=today.getDay();
    // switch(currentday){
    //     case 0:
    //         day="sunday";
    //         break;
    //     case 1:
    //         day="monday";
    //         break;
    //     case 2:
    //         day="tuesday";
    //         break;
    //     case 3:
    //         day="wednesday";
    //         break;
    //     case 4:
    //         day="thursday";
    //         break;
    //      case 5:
    //         day="friday";
    //         break;
    //     case 6:
    //         day="saturday";
    //         break;
    //     default:
    //         console.log("error");
    // }
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day=today.toLocaleDateString("hi-IN",options);

    res.render("list",{
        listtitle: day,newitem: items
    });
});

app.post("/",function(req,res){
         let item=req.body.newitem;
         if(req.body.list==="work"){
            workitems.push(item);
            res.redirect("/work");
         }
         else{
         items.push(item);
      res.redirect("/");
         }
    });
// app.post("/work",function(req,res){
//     let item= res.body.newitem;
//     workitems.push(item);
//     res.redirect("/work");
// })
app.get("/work",function(req,res){
    res.render("list",{
        listtitle: "work List",newitem: workitems
    });
});
app.listen("3000",function(res,req){
    console.log("server started on port 3000");
})