module.exports = {
  apps : [{
    name   : "server",
    script: 'npm start'
  }],

  deploy : {
    production : {
      key  : 'arthur.pem',
      user : 'ubuntu',
      host : '54.67.32.188',
      ref  : 'origin/master',
      repo : 'git@github.com:codecallogic/avp-arch-api.git',
      path : '/home/ubuntu/server',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};