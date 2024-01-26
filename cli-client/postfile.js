const fs = require('fs');
const axios = require('axios');

function post_file(path,file) {
    const formData = {
        file: fs.createReadStream(file)
    }
    const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
            }
        };
    axios
        .post(path,formData,config)
        .then(res => console.log(res.data))
        .catch(err => {
            console.error(err.message)
            if(err.response.data)
                console.log(err.response.data.error.code)
            
        });
}
module.exports = post_file