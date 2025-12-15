// pm2.config.js
module.exports = {
  apps: [{
    name: "chat-app",
    script: "cluster.js",
    instances: "max",
    exec_mode: "cluster"
  }]
};
