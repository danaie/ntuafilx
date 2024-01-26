#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const axios = require('axios');
var FormData = require('form-data');

const base_url = 'http://localhost:9876/ntuaflix_api'

const post_file = require('./postfile.js')

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
    });

program 
    .command('resetall')
    .alias('r')
    .description('Reset database')
    .action(() => {
        axios
            .post(base_url+'/admin/resetall')
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message))
    });   

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
        post_file((base_url+'/admin/upload/titlebasics'), options.filename);
      });

program
    .command('newakas')
    .alias('na')
    .description('Upload a tsv to update titleaka')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
            console.error('Error: Please provide a file using the -f or --filename option.');
            return;
          }
        post_file((base_url+'/admin/upload/titleakas'), options.filename);
      });

program
    .command('newnames')
    .alias('nn')
    .description('Upload a tsv to update namebasics')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
            console.error('Error: Please provide a file using the -f or --filename option.');
            return;
          }
        post_file((base_url+'/admin/upload/namebasics'), options.filename);
      });

program
    .command('newcrew')
    .alias('nc')
    .description('Upload a tsv to update titlecrew')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
            console.error('Error: Please provide a file using the -f or --filename option.');
            return;
          }
        post_file((base_url+'/admin/upload/titlecrew'), options.filename);
      });

program
    .command('newepisode')
    .alias('ne')
    .description('Upload a tsv to update titleepisode')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
            console.error('Error: Please provide a file using the -f or --filename option.');
            return;
          }
        post_file((base_url+'/admin/upload/titleepisode'), options.filename);
      });

program
    .command('newprincipals')
    .alias('np')
    .description('Upload a tsv to update titleprincipals')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
            console.error('Error: Please provide a file using the -f or --filename option.');
            return;
          }
        post_file((base_url+'/admin/upload/titleprincipals'), options.filename);
      });

program
    .command('newratings')
    .alias('nr')
    .description('Upload a tsv to update titleratings')
    .option('-f, --filename <path>', 'Specify the path to the file')
    .action((options) => {
        if (!options.filename) {
            console.error('Error: Please provide a file using the -f or --filename option.');
            return;
          }
        post_file((base_url+'/admin/upload/titleratings'), options.filename);
      });
program.parse(process.argv)