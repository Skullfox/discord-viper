global.viper.on("ready", () => {
  console.log("---------------------------------------------------");
  console.log(
    "Logged in as %s - %s",
    global.viper.user.username,
    global.viper.user.id
  );
  console.log("---------------------------------------------------");

  global.viper.user.setActivity('CTRG Group 15', { type: 'WATCHING',url : "https://github.com/Skullfox/discord-viper" })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    .catch(console.error);

});