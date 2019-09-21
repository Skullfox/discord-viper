global.viper.on("message", message => {


  if( global.config.system.channelID == message.channel.id ){

    if( global.utils.hasRole(message,global.config.roles.admin) ||  global.utils.hasRole(message,global.config.roles.upload) || global.utils.isOwner(message.channel.guild,message.author) ){

      message.attachments.forEach(function(attachment,id) {
        console.log(attachment.filename);

        if( attachment.filename.substr(attachment.filename.lastIndexOf('.') + 1 ) != 'pbo'){
          if(global.config.system.nonPBOwarningUpload){
            message.reply(":warning: You can only upload PBOs with Viper, upload was ignored");
          }
          return false;
        };

        const options = {
          url: attachment.url,
          encoding: null
        };

        global.RP.get(options)
          .then(function (res) {

            message.channel.send(":white_check_mark: Requesting: " + global.utils.strHighlight(attachment.filename) );
            const buffer = Buffer.from(res, 'utf8');
            global.FS.writeFileSync(global._root + "/temp/" + attachment.filename, buffer);
            message.channel.send(":white_check_mark: Downloaded: " + global.utils.strHighlight(attachment.filename) );
            global.FS.copyFile(global._root + "/temp/" + attachment.filename,global.config.system.mpmissions + attachment.filename , (err) => {
              if (err) {
                message.channel.send(err.toString());
              }else{

                message.channel.send(":white_check_mark: " + global.utils.strHighlight(attachment.filename) + " moved to " + global.utils.strHighlight(global.config.system.mpmissions) );

                global.FS.unlink(global._root + "/temp/" + attachment.filename, (err) => {
                  if (err) {
                    console.error(err)
                    message.channel.send( err.toString() );
                  }else{
                    message.channel.send(":white_check_mark: " + global.utils.strHighlight( attachment.filename ) + " temp file deleted");
                    message.channel.send(":white_check_mark: " + "Done :ok_hand:");
                  };
                })

              }
            });

          });

      });

    };
  };
});