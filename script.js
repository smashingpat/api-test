const axios = require('axios');

axios.get('http://assessments.wearetriple.com/api.php').then(response => {
    console.log(response)
})
