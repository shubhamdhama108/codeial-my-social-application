const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

// extract style and scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));

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