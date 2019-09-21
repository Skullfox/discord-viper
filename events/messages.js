global.viper.on("message", message => {


  message.attachments.forEach(function(attachment,id) {
    console.log(attachment.url);

    const options = {
      url: attachment.url,
      encoding: null
    };

    global.RP.get(options)
      .then(function (res) {
        console.log(message);
        message.channel.send("-> Requesting: " + attachment.filename);
        const buffer = Buffer.from(res, 'utf8');
        global.FS.writeFileSync(global._root + "/temp/" + attachment.filename, buffer);
        message.channel.send("-> Downloaded: " + attachment.filename);
        global.FS.copyFile(global._root + "/temp/" + attachment.filename,global.config.system.mpmissions + attachment.filename , (err) => {
          if (err) {
            message.channel.send(err.toString());
          }else{

            message.channel.send("-> ``" + attachment.filename + "`` moved to ``" + global.config.system.mpmissions + "``");

            global.FS.unlink(global._root + "/temp/" + attachment.filename, (err) => {
              if (err) {
                console.error(err)
                message.channel.send( err.toString() );
              }else{
                message.channel.send("-> ``" + attachment.filename + "`` temp file deleted");
              };
            })

          }
        });

      });

  });

});
