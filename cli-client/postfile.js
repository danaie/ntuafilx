const fs = require('fs');
const axios = require('axios');

const token_path = __dirname+'/.token'

function post_file(path,file) {
    const formData = {
        file: fs.createReadStream(file)
    }
    const token = fs.readFileSync(token_path, "utf8");
    const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'X-OBSERVATORY-AUTH': token
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