module.exports = class removeCommand extends global.Commando.Command {
	constructor(client) {
		super(client, {
			name: 'remove',
			aliases: ['rm'],
			group: 'admin',
			memberName: 'remove',
			description: 'Deletes a mission',
			details: 'Deletes a mission',
      guildOnly : true,
      args: [
                {
                    key: 'pbo',
                    prompt: 'mission file',
                    type: 'string'
                }
            ]
		});
	}

  hasPermission(msg) {
		if( this.client.isOwner(msg.author) || global.utils.hasRole(msg,global.config.roles.admin) ){
			return true
		}else{
			return false
		}
  }

  async run(msg,{pbo}) {

    if (global.FS.existsSync(global._uploadFolder + pbo)) {
      console.log('The file exists.');

      var ext = global.PATH.extname(global._uploadFolder + pbo);
      if(ext != ".pbo"){
        msg.reply("only .pbo can be deleted");
        return new Promise((resolve) => true)
      }


			global.FS.rename(global._uploadFolder + pbo, global._uploadFolder + pbo + ".old", (err) => {
				if (err) {
          console.error(err)
          msg.reply( err.toString() );
					msg.reply( global.utils.strHighlight( pbo ) + " cannot be deleted, maybe its locked by ArmA");
				}else{

					global.FS.unlink(global._uploadFolder + pbo + ".old", (err) => {
						if (err) {
							console.error(err)
							msg.reply( err.toString() );
						}else{
							msg.reply(global.utils.strHighlight( pbo ) + " was deleted");
						}
					})

				}
			});
    }else{
      msg.reply(global.utils.strHighlight( pbo ) + " dont exist in ``" + global._uploadFolder + "``");
    }
  }
};
