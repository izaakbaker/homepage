module.exports = {
    apps: [{
      name: 'homepage',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ize.mba',
        key: '~/.ssh/homepage.pem',
        ref: 'origin/master',
        repo: 'git@github.com:nicepangolin/homepage.git',
        path: '/home/ubuntu/homepage',
        'post-deploy': 'pwd && npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
