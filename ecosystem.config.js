module.exports = {
  apps: [{
    name: 'homepage',
    script: './dist/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ize.mba',
      key: '~/.ssh/homepage.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nicepangolin/homepage.git',
      path: '/home/ubuntu/homepage',
      'post-deploy': 'pwd && npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
