module.exports = {
  apps : [
    {
      name: "EGAT-Server",
      script: "D:/NodeVue/EGAT-Server/src/app.js",
    },
    {
      name: "EGAT-Dashboard",
      script: "D:/NodeVue/EGAT-Dashboard/node_modules/@vue/cli-service/bin/vue-cli-service.js",
      args: "serve",
    //   watch: '.',
    //   env: {
    //     "COMMON_VARIABLE": "true"
    //   },
    //   "env_production" : {
    //     "NODE_ENV": "production"
    //   },
    //   "env_develpomemt" : {
    //     "NODE_ENV": "development"
    //   }
    }
    // {
    //   name: "EGAT-Dashboard",
    //   script: "D:/NodeVue/EGAT-Dashboard/node_modules/@vue/cli-service/bin/vue-cli-service.js",
    //   args: "serve",
    //   watch: '.',
    //   env: {
    //     "COMMON_VARIABLE": "true"
    //   },
    //   "env_production" : {
    //     "NODE_ENV": "production"
    //   },
    //   "env_develpomemt" : {
    //     "NODE_ENV": "development"
    //   }
    // },
  ]

  //deploy : {
  //  production : {
  //    user : 'SSH_USERNAME',
  //    host : 'SSH_HOSTMACHINE',
  //    ref  : 'origin/master',
  //    repo : 'GIT_REPOSITORY',
  //    path : 'DESTINATION_PATH',
  //    'pre-deploy-local': '',
  //    'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //    'pre-setup': ''
  //  }
  //}
};
