/**
 * Return .env config
 */
function getEnv(c) {
  return c in global._env.parsed ?  global._env.parsed[c] : Error("Undifined .env key");
}

module.exports = getEnv;
