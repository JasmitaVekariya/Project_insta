const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const methodoverride = require("method-override");
const path = require("path");
const {v4 : uuidv4 } = require('uuid');
const multer = require("multer"); //for img

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"/views"));
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//handle uploaded images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password(),
    ];
  }


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root' ,
    database : 'insta_app',
    password : 'Jasmita@2503',
});

// let q1 = "insert into user (id,name,email,password) values (? ,? ,? ,?)";
// let user = getRandomUser();
// let u = ["123","123_name","asd@gmail.com","asd"];

// let q2 = "insert into user (id,name,email,password) values ?";
// let users = [];
// for(let i=0;i<10;i++)
// {
//     users.push(getRandomUser())
// }

// try{
//     connection.query(q1,u,(error,result) => {
//         if(error) throw error;
//         console.log(result);
//     })
// }
// catch(error){
//     console.log(error);
// }

// connection.end(); 

// home page 
app.get("/",(req,res) => {
    let count = "select count(*) from user";
    try{
        connection.query(count,(error,result) => {
            if(error) throw error;
            let count = result[0]["count(*)"];
            res.render("home.ejs" , {count});
        })
        }
        catch(error){
            console.log(error);
        }    
});

//view all users
app.get("/user" ,(req,res) =>{

    let q = "select id,name,email from user ";
    try{
        connection.query(q,(error,result) => {
            if(error) throw error;
            let users = result;
            res.render("show.ejs",{users});
        })
    }
    catch(error){
        console.log(error);
    }

} )

//create new user

app.get("/user/add" , (req,res) => {
    res.render("add.ejs");
});

app.post("/user",(req,res) => {
    let user = req.body;
    console.log(req.body);
    user.id = uuidv4();
    console.log(user);

    let q1 = `insert into user (id,name,email,password) values ('${user.id}','${user.username}' ,'${user.email}' ,'${user.password}')`;

        try{
            connection.query(q1,(error,result) => {
                if(error) throw error;
                console.log(result);
            })
        }
        catch(error){
            console.log(error);
        }

    res.redirect("/user");
});

//update username
app.get("/user/:id/edit" , (req,res) => {
    let { id } = req.params;
    let q = "select * from user where id = ?";
    console.log(id);
    try{
        connection.query(q,id,(error,result) => {
        if(error) throw error;
        let user = result[0];
        res.render("edit.ejs" , {user});
    })
    }
    catch(error){
        console.log(error);
    }
});

app.patch("/user/:id",(req,res) => {
    let { id } = req.params;
    let edited = req.body;
    let q = "select * from user where id = ?";
    try{
        connection.query(q,id,(error,result) => {
        if(error) throw error;
        let user = result[0];

        if(user.password !== edited.password)
        {
            res.render("edit.ejs",{user});
        }

        let q = `update user set name = '${edited.name}' where id = '${id}'`;
        try{
            connection.query(q,(error,result) => {
            if(error) throw error;
            let user = result[0];
            res.redirect("/user");
        })
        }
        catch(error){
            console.log(error);
        }
    })
    }
    catch(error){
        console.log(error);
    }
});

//add post in perticular id

app.get("/user/:id/post/add" , (req,res) => {
    let { id } = req.params;
    let q = "select * from user where id = ?";
    try{
        connection.query(q,id,(error,result) => {
        if(error) throw error;
        let user = result[0];
        res.render("postAdd.ejs" , {user});
    })
    }
    catch(error){
        console.log(error);
    }
});
app.post("/user/:id/post", upload.single("image"), (req, res) => {
    let { id } = req.params;
    let postId = uuidv4();
    let { content, time } = req.body;
    let img = req.file ? req.file.filename : null;

    let q = `INSERT INTO post (id, user_id, img, content, created_at)
             VALUES (?, ?, ?, ?, ?)`;

    let values = [postId, id, img, content, time];

    try {
        connection.query(q, values, (error, result) => {
            if (error) throw error;
            console.log("Post added:", result);
            res.redirect("/user");
        });
    } catch (error) {
        console.log(error);
        res.send("Error inserting post");
    }
});

// View all posts by a specific user
app.get("/user/:id/posts", (req, res) => {
    let { id } = req.params;

    let q = `
        SELECT post.id, post.img, post.content, post.created_at, user.name 
        FROM post 
        JOIN user ON post.user_id = user.id 
        WHERE user.id = ? 
        ORDER BY post.created_at DESC
    `;

    try {
        connection.query(q, [id], (error, results) => {
            if (error) throw error;

            res.render("show_post.ejs", { posts: results });
        });
    } catch (error) {
        console.log(error);
        res.send("Error retrieving posts");
    }
});


//user delete with all their post

//delete post 

app.listen(port , () => {
    console.log("serever is listening to 8080");
});

