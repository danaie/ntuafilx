#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const axios = require('axios');

const base_url = 'http://localhost:9876/ntuaflix_api'

program
    .version('1.0.0')
    .alias('v')
    .description('A cli for ntuaflix')

program
    .command('healthchek')
    .alias('hc')
    .description('Perform a health check to database / server')
    .action(() => {
        axios
            .get(base_url+'/admin/healthcheck')
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message))
    })

program 
    .command('resetall')
    .alias('r')
    .description('Reset database')
    .action(() => {
        axios
            .post(base_url+'/admin/resetall')
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message))
    })

program
    .command('newtitles')
    .alias('nt')
    .description('Upload a tsv to update titlebasics')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
          console.error('Error: Please provide a file using the -f or --filename option.');
          return;
        }
        console.log(options.filename)
        const fileStream = fs.createReadStream(options.filename);
        axios
            .post(base_url+'/admin/upload/titlebasics',options.filename)
            .then(res => console.log(res.data))
            .catch(err => console.error(err.message,'(',err.response.data,')'));
          
      })

program.parse(process.argv)