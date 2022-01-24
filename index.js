const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const req = require('express/lib/request');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');


app.use(session({
    name:'codeial',
    secret:'blahsomething',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl:'mongodb://localhost/codeial_development'
        },
        function(err){
            console.log(err||'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);

// extract style and scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



// use express router
app.use('/',require('./routes'));

//set up our view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running express: ${err}`);
    }

    console.log(`server is running successfully on port: ${port}`);
});