const express = require('express');

const app = express();

app.use((_req,res)=>{

  res.json('hello world123');

});

app.listen(9999, ()=>{
  console.log(`server start in 9999`);
})

