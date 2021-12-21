module.exports.profile= function(req,res){

    return res.render('users',{  //this home here is for home.ejs
        title:"Shubham"
    });


    // return res.end('<h1>User Profile!</h1>');
}

console.log('profile loaded');