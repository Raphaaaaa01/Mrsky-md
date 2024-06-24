//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://od.lk/d/NzhfNTk5OTc4MjVf/Mrsky.mp3";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ptechtanzania015@gmail.com";
global.location = "Arusha,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/mrsky-cyber/Mrsky-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/HJgOTkcWL0BBqpsMm5cT6T";
global.website = process.env.GURL || "https://chat.whatsapp.com/HJgOTkcWL0BBqpsMm5cT6T";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4fa390402db6abe4c35af.jpg";
global.devs = "2557530333342";
global.sudo = process.env.SUDO || "2557530333342";
global.owner = process.env.OWNER_NUMBER || "255742695219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlOYkNKaXNKbGs3VTJnVHJSc0dKc0lONWlROHdjdm9mbUlpUFNXdnBWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWxJNmpadmlaNjAzQmJFd0JsN2dYQ2ZqK0FycUROU1NCckV6MnNWcVpYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRUY2QldscWZRUkp5ZTdIVm4vdjZKYkRZVGVyM1hjaUNKamZHU0J3d1hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvcXp4QldqVEZTTENRTGNHMHFFQXV2S0hCdFBlRThLM0ZGQlN6YXE4ZHdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDWHozcFEwNEJSVE5KaWtPOG5HWTZsa29mdmxrMEhxdXhsM3FoRHdkRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMUWlGWEU5Uk55L29vRVNVZllsMyt2bG9IaGNnOGJKUUdhdWlGbVlQU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU83T3k5dy9kZ2psV05nS1Q5YXA4SWJlaElDOWlVN1hSQk9DdG9xa2Uwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk1VQ29leVdJRlJNeHRVRWpPbXJLUjloMkl1ZGNkVTF3ZjRRSXZaaHNoVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpvZ04zcXJhTWIycmJEc1hoS3JVVmI0OXFwUlhNaTdIeStCZENuajBBVlFscFVZdDRLbXM3WkFvbjhDNS9ldkpJelowazA2VG9Cc3RSTzhQbEk1bGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiU2YxSzg2c2ZNcjB1Zy9FR013Vnk0V1ZaeXhPck5tYmYvQngyeUdPT2VLRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicFdkanhIMEhTdGVSbWplTTBBSmhQUSIsInBob25lSWQiOiI0NTY4MjNkMS04YzMwLTQ0MzAtYjQ0MC1hYmZjYjhjMjYzODIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmNEVjJ6ekQ2aERkV1JFTjc3Q1pOVDFHcUVrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhJZUUxS1dreW1XS2hONnJCMm81NnR0dWFwUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXWFpWRDRWMSIsIm1lIjp7ImlkIjoiMjU1NzQyNjk1MjE5OjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2SnhQZ0hFUHpVNTdNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFSZ29LR3phNVJvamFIMkx4WWRhbUJGZWk2dmRqVC8xTHZESGpncHBlMms9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdIL0FyS3pJTVBMV0RhYVhLMmkwaU9DbGdCRkV0VTI5b1RvcUtadmlUOUVKaUdvMVRtYlJqWmtpYWl6bjFNZjg5b2taYXIva2ZkcjlvNDg1aFlJaUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2OHV0bkpmQ0tXODdPWWpNWllLNFVNT0RkbWRwcXpIeGFEaERvbkdzRDhUZWs4U0dEVFRNaEd6V3YreDZXaWRkUW1JenZCK3NnS1Q5bk1BdXd6MGJqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc0MjY5NTIxOTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFrWUtDaHMydVVhSTJoOWk4V0hXcGdSWG91cjNZMC85Uzd3eDQ0S2FYdHAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkyNjU5MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFU5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "m",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " _Mrsky-Md-Whatsapp-Bot_ ",
  author: process.env.PACK_AUTHER || "MRSKY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRSKY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "RAPHAA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "http://,www.goog.com,https://,https://chat.whatsapp.com/,wa.me/,https://cutt.ly/,www.googl.cu,",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "MRSKY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
