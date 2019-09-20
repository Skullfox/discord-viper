global.viper.on("ready", () => {
  console.log("---------------------------------------------------");
  console.log(
    "Logged in as %s - %s",
    global.viper.user.username,
    global.viper.user.id
  );
  console.log("---------------------------------------------------");


  console.log("Serverlist:")
  global.viper.user.setPresence({ game: { name: global.config.system.prefix +'help' }, status: 'online' })
    .then()
    .catch(console.error);

});
