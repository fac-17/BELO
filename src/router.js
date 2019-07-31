const handlers=require('./handler');

const router = (req,res)=>{
 const url = req.url;
 if (url.startsWith('/public')){
     handlers.staticAssets(req,res);
 } else {
     handlers.notFound(req,res);
 }
}

module.exports = router;