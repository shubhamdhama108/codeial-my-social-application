module.exports.posts= function(req,res){
    return res.render('posts',{  //this home here is for home.ejs
        title:"My Posts"
    });
    // return res.end('<h1>My Postsssss!</h1>');
}