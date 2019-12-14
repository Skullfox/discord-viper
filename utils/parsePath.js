/**
 * Parse upload folder based on OS
 */
function parsePath() {

  var path = global.UPATH.normalize(global.utils.getEnv("uploadFolder"))

  global._uploadFolder =  path.slice(-1) == "/" ? path : global.PATH.join(path,global.PATH.sep);
  console.log(global._uploadFolder);
}

module.exports = parsePath;
