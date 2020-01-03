module.exports = class listCommand extends global.Commando.Command {
	constructor(client) {
		super(client, {
			name: 'list',
			aliases: ['ls'],
			group: 'admin',
			memberName: 'list',
			description: 'List all missions',
			details: 'List all missions',
      guildOnly : true
		});
	}

  hasPermission(msg) {
    return true;
  }

  async run(msg) {

    var missions = [];
    var list = "\n";

    global.FS.readdir(global._uploadFolder, async (err, files) => {
      files.forEach(file => {

        var ext = global.PATH.extname(file);

        if(ext == ".pbo"){

          var fileStats = global.FS.statSync(global._uploadFolder + file);

          var mtime = new Date(fileStats.mtime);
          var rtime = global.DATE.format(mtime, 'DD/MM HH:mm');
          var size = (fileStats.size / 1000000 ).toFixed(2);

          //embed.addField("```" + file + "```", ":arrows_clockwise: " + rtime + " :floppy_disk: " + size +"MB  ", false)
          list = list + "``" + file + "`` | "+ rtime + " | " + size +"MB\n";
          missions.push(file);
        }

      });

      msg.say(list, { split: true });

    });


  }
  };
