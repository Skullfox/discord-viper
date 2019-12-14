global.viper.on("message", message => {


  if( global.utils.getEnv("channelID") == message.channel.id ){

    if( global.utils.hasRole(message,global.utils.getEnv("roleAdmin")) ||  global.utils.hasRole(message,global.utils.getEnv("roleUpload")) || global.utils.isOwner(message.channel.guild,message.author) ){

      message.attachments.forEach(function(attachment,id) {

        if( attachment.filename.substr(attachment.filename.lastIndexOf('.') + 1 ) != 'pbo'){
          if(global.utils.getEnv("nonPBOwarningUpload")){
            message.reply(":warning: You can only upload PBOs with Viper, upload was ignored");
          }
          return false;
        }

        console.log(`Requesting file url: ${attachment.url}`);

        const options = {
          url: attachment.url,
          encoding: null
        };

        global.RP.get(options)
          .then(function (res) {

            message.channel.send(":white_check_mark: Requesting: " + global.utils.strHighlight(attachment.filename) );
            const buffer = Buffer.from(res, 'utf8');
            global.FS.writeFileSync(global._tempUploadFolder + attachment.filename, buffer);
            console.log(`Save file in: ${global._tempUploadFolder}`);
            message.channel.send(":white_check_mark: Downloaded: " + global.utils.strHighlight(attachment.filename) );

            console.log(global._tempUploadFolder + attachment.filename,global.utils.getEnv("uploadFolder") + attachment.filename);

            global.FS.copyFile(global._tempUploadFolder + attachment.filename,global._uploadFolder + attachment.filename , (err) => {
              if (err) {
                message.channel.send(err.toString());
              }else{

                message.channel.send(":white_check_mark: " + global.utils.strHighlight(attachment.filename) + " moved to " + global.utils.strHighlight(global._uploadFolder) );

                global.FS.unlink(global._tempUploadFolder + attachment.filename, (err) => {
                  if (err) {
                    console.error(err)
                    message.channel.send( err.toString() );
                  }else{
                    message.channel.send(":white_check_mark: " + global.utils.strHighlight( attachment.filename ) + " temp file deleted");
                    message.channel.send(":white_check_mark: " + "Done :ok_hand:");
                  }
                })
              }
            });
          });
      });
    }
  }
});
