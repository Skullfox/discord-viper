
# discord-viper

![alt text](https://i.imgur.com/d22Y3sI.png"Logo")

ArmA 3 Discord Bot for managing mission files

##
**currently only tested on windows !!!**
##
# Install

 1. clone repo    
 2. npm install    
 3. adjust `config/system.example.json` and rename it to **system.json**
 4. start via `node index.js`

https://discordapp.com/oauth2/authorize?client_id=[yourclientID]&scope=bot&permissions=67632192

## Roles
Create the following roles on your server:
Default:
 - viper-admin
 - viper-uploader

**Do not change these in the roles.json !!! except u know what u doing**

## Commands
*[Default prefix]*

 - `!gh` link to Github Repo
 - `!rm | !remove [string]` delete pbo
 - `!ls | !list` list all pbo`s

## Upload
If the settings are correct, users with the role **viper-admin** & **viper-uploader** can drop a pbo in the assigned channel and the upload will start.

## Notes
If ArmA is accessing a pbo during runtime you **CANNOT** *delete* or *overwrite* it, you need to close ArmA.
