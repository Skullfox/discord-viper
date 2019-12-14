require("./constants/constants.js");

global._env = require('dotenv').config()

global._configs = global.PATH.join(__dirname, 'configs');
global._root = __dirname;
global.config = {};
global.utils = {};
global.TEMP = {};
global.GHLINK = "https://github.com/Skullfox/discord-viper";

for (let file of global.FS.readdirSync(global.PATH.join(__dirname, "utils"))) {
  global.utils[file.replace(".js", "")] = require(global.PATH.join(
    __dirname,
    "utils",
    file
  ));
}

global.viper = new Commando.Client({
    owner: global.utils.getEnv("owner"),
    commandPrefix : global.utils.getEnv("prefix"),
    unknownCommandResponse: global.utils.getEnv("unknownCommandResponse")
});

global.viper.registry
    // Registers your custom command groups
    .registerGroups([
        ['admin', 'Admin commands']
    ])
    .registerDefaults()
    .registerCommandsIn(global.PATH.join(__dirname, 'commands'));

global.viper.setProvider(
    global.SQLITE.open(global.PATH.join(__dirname, 'settings.sqlite3')).then(db => new global.Commando.SQLiteProvider(db))
).catch(console.error);


for (const file of global.FS.readdirSync(
  global.PATH.join(__dirname, "events")
)) {
  require(global.PATH.join(__dirname, "events", file));
}

/*
global.viper.on('error', console.error)
global.viper.on('warn', console.warn)
global.viper.on('debug', console.log)
*/

global.viper.on('commandError', (cmd, err) => {
  if(err instanceof commando.FriendlyError) return;
  console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
})


global.viper.on('error', error => {
    console.log('>>> error >>> ' + error);
});
global.viper.on('reconnecting', () => {
    console.log('reconnecting');
});

global.utils.parsePath();
global.viper.login(global.utils.getEnv("discord_token"));
