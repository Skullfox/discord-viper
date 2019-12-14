/**
 * Parse upload folder based on OS
 */
function parsePath() {

  var opsys = global.OS.platform;
  if (opsys == "darwin") {
      opsys = "MacOS";
  } else if (opsys == "win32" || opsys == "win64") {
      opsys = "Windows";
  } else if (opsys == "linux") {
      opsys = "Linux";
  }
  console.log(opsys)

  global.config.system.mpmissions

}

module.exports = parsePath;
