const { default: axios } = require('axios');
const { response } = require('express');
const express = require('express');
const router = express.Router();
const {requester} = require('../requests/request');
 const samp = {"da" : "dataum"};
 const {datas}  = require('../config/config')
const options = {
    method: 'GET',
    url: datas.url+'/v1/sports/live/en',
    headers: {
      package: datas.key}
  };
router.get('/', (req,res) => {
requester().then((response) => {
   // const jso = JSON.stringify(response);
   console.log("*******made a request**");
       res.json(response);
}

).catch((error) => {
res.send(error)
})
    
});


module.exports = router;