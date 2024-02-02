const fs = require('fs');
const axios = require('axios');

function post_file(path,file) {
    const formData = {
        file: fs.createReadStream(file)
    }
    const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'requested-by-cli': fs.readFileSync(".token", "utf8")
            }
        };
    axios
        .post(path,formData,config)
        .then(res => console.log(res.data))
        .catch(err => {
            console.error(err.message)
            if(err.response != undefined)
                console.log(err.response.data.error.code)
            
        });
}
module.exports = post_file