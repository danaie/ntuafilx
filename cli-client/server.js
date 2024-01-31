#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const axios = require('axios');
var FormData = require('form-data');
const https = require('https');

const base_url = 'http://localhost:9876/ntuaflix_api';

const post_file = require('./postfile.js');

program
    .version('1.0.0')
    .alias('v')
    .description('A cli for ntuaflix')

program
    .command('healthchek')
    .alias('hc')
    .description('Perform a health check to database / server')
    .action(() => {
      var config = {
        method: 'get',
        url: base_url+'/admin/healthcheck',
        headers: {
          'requested-by-cli': fs.readFileSync(".token", "utf8")
      },
      };
      axios(config)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err.message))
    });

program 
    .command('resetall')
    .alias('r')
    .description('Reset database')
    .action(() => {
      var config = {
        method: 'post',
        url: base_url+'/admin/resetall',
        headers: {
          'requested-by-cli': fs.readFileSync(".token", "utf8")
      },
      };
      axios(config)
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

program
  .command('login')
  .description('Login as admin')
  .option('-n, --username <name>','Username')
  .option('-p, --passw <password>','Password')
  .action((options) => {
    if (!options.username || !options.passw){
      console.error('Error: Please provide a username using the -n or --username option and a password using the -p or --passw option');
      return;
    }
    const credentials = {
      username:options.username,
      password:options.passw
    }
    axios
      .post(base_url+'/login',credentials)
      .then((res) => {
        fs.writeFile('.token', res.data.token, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          //console.log(fs.readFileSync(".token", "utf8"));
          console.log('Login Succseful')
        });
      })
      .catch((err) => {
      console.log(err.message)
      if(err.response != undefined)
        console.log(err.response.data.error)  
    })
  });

program
  .command('logout')
  .action(() => {
    fs.writeFile('.token', '', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Logout succseful')
      //console.log(fs.readFileSync(".token", "utf8"));
    });
  });

  program
  .command('user')
  .description('Returs info about the user')
  .option('-n, --username <name>','Username')
  .action((options) => {
    if (!options.username) {
      console.error('Error: Please provide a username using the -n or --username option.')
      return;
    }
    var config = {
      method: 'get',
      url: base_url+`/admin/users/${options.username}`,
      headers: {
        'requested-by-cli': fs.readFileSync(".token", "utf8")
    },
    };
    axios(config)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err.message)
          if(err.response != undefined)
            console.log(err.response.data.error)  
        })
  });

  program
  .command('adduser')
  .description('Login as admin')
  .option('-n, --username <name>','Username')
  .option('-p, --passw <password>','Password')
  .action((options) => {
    if (!options.username || !options.passw){
      console.error('Error: Please provide a username using the -n or --username option and a password using the -p or --passw option');
      return;
    }
    var config = {
      method: 'post',
      url: base_url+`/admin/usermod/${options.username}/${options.passw}`,
      headers: {
        'requested-by-cli': fs.readFileSync(".token", "utf8")
    },
    };
    axios(config)
      .then((res) => console.log(res.data))
      .catch((err) => {
      console.log(err.message)
      if(err.response != undefined)
        console.log(err.response.data.error)  
      })
  });

program.parse(process.argv)