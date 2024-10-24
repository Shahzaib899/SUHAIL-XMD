const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "file-Ye2xpHzSdrXEfqFBmpXDMth5 (1) (1).jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_19_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjc1k2RWZlejM4aEpjWXl2UFova2x2K2dSU3cwQXpSRnBrOGdqdEJIdklRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ3ODM1MTg5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzAzQzAwQUUwNTQ4QjlCRDJDM0NGN0IwMUZENjE1NjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NzM2MzkzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDc4MzUxODk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNkY0MUUyOTU3QzhCNkE4QTZFMjI0MzhFRTk5RTFFNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk3MzYzOTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM25MdmUtSG9TczJubGhNRWZISEF5UVwiLFxuICBcInBob25lSWRcIjogXCIyMTI0OGQzYy1hOWE1LTQxYTMtYjdmZi1mZDAxNDVhMTcxZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDczLFxuICAgICAgMTg5LFxuICAgICAgMTI3LFxuICAgICAgMTUzLFxuICAgICAgNjIsXG4gICAgICAyMjEsXG4gICAgICAxNDAsXG4gICAgICAxNTUsXG4gICAgICAwLFxuICAgICAgOSxcbiAgICAgIDYxLFxuICAgICAgNTgsXG4gICAgICAxNDUsXG4gICAgICAxNjAsXG4gICAgICAxMjMsXG4gICAgICAxNjksXG4gICAgICA1MyxcbiAgICAgIDE0OSxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDEzNSxcbiAgICAgIDIxMCxcbiAgICAgIDE3NCxcbiAgICAgIDcxLFxuICAgICAgMTE4LFxuICAgICAgOTYsXG4gICAgICAxNyxcbiAgICAgIDIwNyxcbiAgICAgIDE0NSxcbiAgICAgIDUyLFxuICAgICAgMTUwLFxuICAgICAgMTQ3LFxuICAgICAgMTY5LFxuICAgICAgNixcbiAgICAgIDcwLFxuICAgICAgNjcsXG4gICAgICAxMTYsXG4gICAgICAxNjUsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkZBS04zS1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ3ODM1MTg5OToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlYgTyBSIFQgRSAgUyBUIE8gUiBFXCIsXG4gICAgXCJsaWRcIjogXCIxNDYxNDEwNjA1NzUyNjU6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpxMytzR0VML2Q1cmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJncituRUx3VUFFTEVsN1pkYllsdDNoZTlqckNndVFrR1BISStGNkNGbGlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInptWk9ydm5vWURhVkRVdDM4Z1U0ckFxSjZ0ekJxK2ZFTitPYVpPSEtKQUxSRTdyeVRSR0wwKzR5WlRLallJeFRzUGNJNGpKVUpnOEppSm9Oem5FR0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh0REIvWDBlVlBSZmlRYTV3WllxSUNwSzdNTStpbXhZWkFMRjFJUlNBTWxucERTVytPb20reVNza0V4Q01OU0VzNHpDKzExK2UxUlB4dHFXMy9VbEN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3ODM1MTg5OToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTczNjM4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxZMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGp6R0R5VGhNS21LUis2dUFzUGNVRk13NlEwN1d5VWZKT3YwUFY1UFVRND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODM2NTc4MTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk3MzYzOTM3ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VORTEX -XMD",
  ownername:process.env.OWNER_NAME|| "VORTEX -X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "VORTEX "  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
