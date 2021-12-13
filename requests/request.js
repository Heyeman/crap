const axios = require('axios');
const { response } = require('express');
const fs = require('fs');


async function requester(){
    const optionCountries = {
        method: 'GET',
        url: datas.url+'/v1/countries/1/live/en',
        headers: {
          package: datas.key}
      };
      const optionTournaments = {
        method: 'GET',
        url: datas.url+'/v1/tournaments/1/0/live/en',
        headers: {
          package: datas.key}
      };    
const countries = await axios.request(optionCountries);
const champs = await axios.request(optionTournaments);
const res = {countries: countries.data.body,
tournaments: champs.data.body}
//console.log(countries.data);
/*fs.appendFile('responses.js', response.data, (err) => {
    if(err) throw err;
    console.log('***\n***\n***************************file created **********');

}) */
return res
}


module.exports=  {requester}