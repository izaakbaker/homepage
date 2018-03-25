module.exports = {
    apps: [{
      name: 'homepage',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-217-42-71.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/homepage.pem',
        ref: 'origin/master',
        repo: 'git@github.com:nicepangolin/homepage.git',
        path: '/home/ubuntu/homepage',
        'post-deploy': 'yarn install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }