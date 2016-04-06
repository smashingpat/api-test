const $ = require('jquery');
const axios = require('axios');

let api = axios.get('http://assessments.wearetriple.com/api.php');

api.then(response => {
    console.log(response)
})
