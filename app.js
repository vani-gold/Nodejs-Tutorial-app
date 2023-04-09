const express = require("express");
const NodejsTutorialApp = express();


NodejsTutorialApp.get("/", function(req, res){
return response.send("Hello World");
});

NodejsTutorialApp.get("/user",(req, res)=>{
    res.json({
        name: "vani gold",
        age: 28,
        sex: "female"
    });
});



NodejsTutorialApp.listen(3000, function() {
    console.log(
        "The server has started on port 3000"
    );
});