//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://od.lk/d/NzhfNTk5OTc4MjVf/Mrsky.mp3";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ptechtanzania015@gmail.com";
global.location = "Iringa,Tanzania.";
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
global.owner = process.env.OWNER_NUMBER || "255753033342";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZjZ0I4VXExN2FlUHUzY3M1NkwwWjZNS0JnT3pvSlcxTUpvbHdIWlExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiampMNVRORmdvSXU2eDVBREpoRUlZM0VIL1VNYitUUlNjamEyMHBaeThDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTmJlbGxFYzYzZGYzZHkyNnl0QTJBblZyKzRpcnpsZnRaMjJtYVU0TEdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4WWs2L2dTMytmeHNyZHJhTS8xZjdJanRqaXF2Ui95Wml6ODVkSysvUURVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPS3cvaVQzZTV3RlN1ZDV5TE1pZVA5STdZYTA2TGYzYlk1akhWdEd5VVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFiOWQxMnNhZDNac3YwZ3FBOGlYOTB3V1d0SURUMEwxc0JvRG5YWjVERDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU095ZU5MUW1sb0JWM3dmY2owektZbytsTGlmRnZSRGFRSzVaeVFDOElWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREczSTJEWFNjRXAvTVBFM1pjbmR5dUlXWXVlMVJBdml1Q0g2YjVuZS9SVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpXLzVmdWwyUHNmNzlMTkYvQVc2UXRwYlIyOC9EQmJpamJkVGVtaGVhVmZsNTNJNVNXdTJQakJwTWduei9ZQ0hpSDhYSTBMdis4bFBuWVNyWFoyckN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJ3TEp1aURpUkRnaWc4WWgvWDZWSldNVkpETHNZWS9hZjBjU3dUNW9SUWVBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc0MjY5NTIxOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MDZENDJGMkE1RTU0M0EyQjRFMzJERkIzMDYwNEVFMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5MzM1NzQzfV0sIm5leHRQcmVLZXlJZCI6NDEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo0MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0MWs3T1BZclJEeWJBUUtLZmUwNllBIiwicGhvbmVJZCI6ImY4NzYzY2M5LTI0OWEtNGNlOC1hMDZmLTk1ZDQ5YTMyYjlmMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6enlSTTZsNlNDckNQdFJxQVk1OUJsNGhTN0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWtWQlVIWUlDQmcrSWE3WTFSN0wrRHg2UW9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNDQTVSRlJSIiwibWUiOnsiaWQiOiIyNTU3NDI2OTUyMTk6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicmFwaGFh8J+MniJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUNLeFBnSEVLZjI2N01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicVJnb0tHemE1Um9qYUgyTHhZZGFtQkZlaTZ2ZGpULzFMdkRIamdwcGUyaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2ZieXdmRUduR0dCM1ExSXhKZVAwc3FtNzlzbHBQTUwzM0ZDTzlORGdiYjZLMlZXN1JZNDFkVVN2RlcrRVlpVVY4NjZ3T1p4VkZ6UnduWDVWTm5nQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjA2Tmt3YVdhbnJUM2gwb08wUGpTbEZsK1VJS0dUcUl0cGw5U0RqVFZBcUV3aWpyL2xGbE9IV1BSVVFJV2JvTEZJclFuQ3hrMXVBUkE5NzhJcDAvMUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQyNjk1MjE5OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFrWUtDaHMydVVhSTJoOWk4V0hXcGdSWG91cjNZMC85Uzd3eDQ0S2FYdHAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkzMzU5MjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFU5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "m",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " _Mrsky-Md-Whatsapp-Bot_ ",
  author: process.env.PACK_AUTHER || "MRSKY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRSKY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MRSKY",
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
