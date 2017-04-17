module.exports = function buildConfig(env){
  return require(`./config/${env}.js`)(env)
}
