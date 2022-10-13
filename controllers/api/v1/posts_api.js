//  connect mongose post Schema
const Post  = require('../../../models/post');
// this is controller 
module.exports.index = async (req , res )=>{
    
    
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments', 
        populate: {
            path: 'users'
        }
    })
    
    
    
    return res.json(200, { 
        message : " list of Question C:\Users\Sweety\Desktop\PROJECTS\Polling System Api\controllers\api\v1\posts_api.js"
        , posts : posts

    })
}

