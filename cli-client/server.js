#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const axios = require('axios');
var FormData = require('form-data');
const https = require('https');

const base_url = 'http://localhost:9876/ntuaflix_api';

const post_file = require('./postfile.js');
const token_path = __dirname+'/.token'

program
    .version('1.0.0')
    .alias('v')
    .description('A cli for ntuaflix')

program
    .command('healthchek')
    .alias('hc')
    .description('Perform a health check to database / server')
    .action(() => {
<<<<<<< HEAD
=======
      const token = fs.readFileSync(token_path, "utf8");
>>>>>>> 6dd0cb0 (cli)
      console.log(fs.readFileSync(token_path, "utf8"));
      var config = {
        method: 'get',
        url: base_url+'/admin/healthcheck',
        headers: {
          'X-OBSERVATORY-AUTH': token
        }
      };
      console.log(token);
      axios(config)
          .then((res) => console.log(res.data))
          .catch((err) => {
            console.log(err.message)
            if(err.response != undefined)
              console.log(err.response.data.error)  
          })
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
          'X-OBSERVATORY-AUTH': fs.readFileSync(token_path, "utf8")
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
          //console.log(fs.readFileSync(token_path, "utf8"));
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
      //console.log(fs.readFileSync(token_path, "utf8"));
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
        'X-OBSERVATORY-AUTH': fs.readFileSync(token_path, "utf8")
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
        'X-OBSERVATORY-AUTH': fs.readFileSync(token_path, "utf8")
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
  .command('title')
  .description('Returns info of the title with the given titleID')
  .requiredOption('-t, --titleID <titleID>', 'Title ID to fetch information for')
  .action(async (options) => {
    const titleID = options.titleID;
    try {
      const response = await axios.get(base_url+`/title/${titleID}`);
      console.log('Title information:', response.data);
    } catch (error) {
      console.error('Error fetching title information:', error.message);
    }
  });

  program
  .command('searchtitle')
  .description('Returns the title given a title part')
  .requiredOption('-tp, --titlepart <titlepart>', 'Title part to search titles')
  .action(async (options) => {
    const titlepart = options.titlepart;
    try {
      const response = await axios.get(`${base_url}/searchtitle`, {
        params: {
          titlePart: titlepart,
        },
      });
      console.log('Search Results:', response.data);
    } catch (error) {
      console.error('Error fetching title information:', error.message);
    }
  });

  program
  .command('bygenre')
  .description('Returns titles by genre')
  .requiredOption('-g, --qgenre <genre>', 'Genre')
  .requiredOption('-mr, --min <min>', 'Minimum Rating')
  .option('-fy, --from <from>', 'From Year')
  .option('-ty, --to <to>', 'To Year')
  .action(async (options) => {
    const qgenre = options.qgenre;
    const min = options.min;
    const from = options.from;
    const to = options.to;
    try {
      const response = await axios.get(`${base_url}/bygenre`, {
        params: {
          qgenre : qgenre,
          minrating : min,
          yrFrom : from,
          toyrTo : to
        },
      });
      console.log('Search Results:', response.data);
    } catch (error) {
      console.error('Error fetching title information:', error.message);
    }
  });

  program
  .command('name')
  .description('Returns info of the name with the given nameID')
  .requiredOption('-n, --nameID <nameID>', 'Name ID to fetch information for')
  .action(async (options) => {
    const nameID = options.nameID;
    try {
      const response = await axios.get(base_url+`/name/${nameID}`);
      console.log('Name information:', response.data);
    } catch (error) {
      console.error('Error fetching title information:', error.message);
    }
  });

  program
  .command('searchname')
  .description('Returns the name given a name part')
  .requiredOption('-np, --namepart <namepart>', 'Name part to search names')
  .action(async (options) => {
    const namepart = options.namepart;
    try {
      const response = await axios.get(`${base_url}/searchname`, {
        params: {
          namePart: namepart,
        },
      });
      console.log('Search Results:', response.data);
    } catch (error) {
      console.error('Error fetching name information:', error.message);
    }
  });


program.parse(process.argv)