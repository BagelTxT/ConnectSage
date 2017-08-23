var express  = require('express');
var app      = express();                            
var mongoose = require('mongoose');                     
var bodyParser = require('body-parser');    
var cors = require('cors');
 
mongoose.connect('mongodb://localhost/ConnectSage');
 
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(cors());

app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
var Major = mongoose.model('Major', {
    major: String,
    image: String
});

var Mentor = mongoose.model('Mentor',{
    age: Number,
    bio: String,
    dream_career: String,
    education: String,
    first_name: String,
    job_position: String,
    last_name: String,
    major: String,
    password: String,
    phone_number: String,
    username: String,
    pic: String,
    path: String
})

var Mentee = mongoose.model('Mentee',{
        // acceptedMentors:[],
        age: Number,
        bio: String,
        dream_career: String,
        education: String,
        first_name: String,
        last_name: String,
        password: String,
        // "pendingMentors":[],
        phone_number: String,
        username: String,
        pic: String
})
 
// Routes
 
    app.get('/api/majors', function(req, res) {
        console.log("fetching majors");
 

        Major.find(function(err, majors) {
 

            if (err)
                res.send(err)
 
            res.json(majors); 
        });
    });

    app.get('/api/mentors', function(req, res) {
        
               console.log("fetching mentors");
        
               Mentor.find(function(err, mentors) {
        
                  if (err)
                       res.send(err)
        
                   res.json(mentors); 
               });
           });
 
    app.get('/api/mentees', function(req, res){
        console.log("fetching mentees");

        Mentee.find(function(err, mentees){
            
            if(err)
                res.send(err)

            res.json(mentees);
        })
    });

    app.post('/api/majors', function(req, res) {
 
        console.log("creating major");
 
        Major.create({
            major : req.body.major,
            image : req.body.image
        }, function(err, major) {
            if (err)
                res.send(err);
 
            Major.find(function(err, major) {
                if (err)
                    res.send(err)
                res.json(major);
            });
        });
 
    });

    app.post('/api/mentors', function(req, res) {
        
               console.log("creating mentor");
        

               Mentor.create({
                   acceptedMentees: [],
                   age: req.body.age,
                   bio: req.body.bio,
                   dream_career: req.body.dream_career,
                   education: req.body.education,
                   first_name: req.body.first_name,
                   job_position: req.body.job_position,
                   last_name: req.body.last_name,
                   major: req.body.major,
                   password: req.body.password,
                   pendingMentees: [],
                   phone_number: req.body.phone_number,
                   username: req.body.username,
                   pic: req.body.pic,
                   path: req.body.path
               }, function(err, mentor) {
                   if (err)
                       res.send(err);
        

                   Mentor.find(function(err, mentor) {
                       if (err)
                           res.send(err)
                       res.json(mentor);
                   });
               });
        
           });

    app.post('/api/mentees', function(req, res) {
    
            console.log("creating mentees");

            
    

            Mentee.create({
                acceptedMentees: [],
                age: req.body.age,
                bio: req.body.bio,
                dream_career: req.body.dream_career,
                education: req.body.education,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
                pendingMentors: [],
                phone_number: req.body.phone_number,
                username: req.body.username,
                pic: req.body.pic
            }, function(err, mentee) {
                if (err)
                    res.send(err);
    

                Mentee.find(function(err, mentee) {
                    if (err)
                        res.send(err)
                    res.json(mentee);
                });
            });
    
               });           
 
 

app.listen(3000);
console.log("App listening on port 3000");
