

# discord-viper

![alt text](https://i.imgur.com/d22Y3sI.png"Logo")

ArmA 3 Discord Bot for managing mission files

##
**Tested:**   
Windows 10   
OSX Mojave   

##
# Install

 1. clone repo    
 2. npm install    
 3. adjust `.env.example` and rename it to `.env`
 4. start via `node index.js`

https://discordapp.com/oauth2/authorize?client_id=[yourclientID]&scope=bot&permissions=67632192

## .env

owner=`id of the serverowner`   
discord_token=`discord api token`   
prefix=!!   
unknownCommandResponse=false   
mpmissions=`upload folder path`   
nonPBOwarningUpload=true   
channelID=`channel id in which the bot will "watch" for uploads`  

roleAdmin=viper-admin   
roleUpload=viper-upload


## Roles
Create the roles in your server based on the .env file.   

## Commands
*[Default prefix]*

 - `!gh` link to Github Repo
 - `!rm | !remove [string]` delete pbo
 - `!ls | !list` list all pbo`s

## Upload
Users with the defined roles from the .env ** can now drop a pbo in the assigned channel and the upload will start.

## Notes
If ArmA is accessing a pbo during runtime you **CANNOT** *delete* or *overwrite* it, you need to close ArmA.
