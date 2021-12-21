// exporting an action
module.exports.home= function(req,res){

    return res.render('home',{  //this home here is for home.ejs
        title:"Home"
    });
    
    // return res.end('<h1>Express is up for codeial!!</h1>');

}

