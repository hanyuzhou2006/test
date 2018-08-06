module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'TEST',
      script    : 'index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
 
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      
      user : 'root',
      ssh_options: "StrictHostKeyChecking=no",
      host : '64.137.164.206',
      ref  : 'origin/master',
      repo : 'https://github.com/hanyuzhou2006/test.git',
      path : '~/projects/test/',
      'pre-setup': 'git --version',
      'post-setup': "ls -la",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
