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
global.owner = process.env.OWNER_NUMBER || "+255 742 695 219";
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
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJXemt5aTJ3QVBiMGdQc1pHL29yamloNnZvaUc0ZytqOGcvaGdxd0JIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlp6OHFtNDlXRkRVY3REV2FiNmlCNXMvRVI3Z0w4NUtDYzZuamFKZ2psdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTjg3bUVsakt2TGNLVitNUi84ekpYMnNzSFBQTXFsbWR5QTNJMTYvNVZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UjUwUS9XWGtVT3Ruc1VGNGZyOS9DalB5ZVdNcWloZ2xnUTIrVmhDZmlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDMlN0WHg2TXlaajBacjZENFpQMXdqMU1MbjZLMnJtNkQyem9lZWpGR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncyZ1FacWVMb2VhYnY1RmYxUHVBNGF4Zm1uOTg4eGJUa285b2UyKytqVEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFzYk5waXFNZ1A4NUZJWkx3RmpmMmtISXo5blZ2ZkdhTi8vdjg5bEgyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiampGRzlOcTFIMU1OQW41WWdHWVV5bVQ2NkdhNDBscm9iMjlDNnJaemtuND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR3SzNUQ0ZiaWsxMUFETGxiMWtJUU1tM2xWYzhIMHNNd2RHU1U2cW9WZk9Tb2k2K3hwai9YaTJNa21NNk1NOUxlUzFOSzE1bXNwSmRjd29ZRktpL2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IkR5amZtWHZKbko2MFYzRGdyQWVGOXh0bUJWQzNzeVZBaXNLWndxU1RNekE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlUwYTdLMmZoUnZxbjlPb1N2N3dYRmciLCJwaG9uZUlkIjoiYzk1NzVhM2EtYjAwYy00YzI3LTgxMGQtYTUyZjMyZGYwZTI4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlvN3AyWXlTd3pPS2wvblVyM3AwZDJFRlNaUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSUFoaW1pZlpBU2c2L2VBS0NWUmxDS3Y2VjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1RMOE1FNFYiLCJtZSI6eyJpZCI6IjI1NTc0MjY5NTIxOTo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQMkp4UGdIRUpDUzU3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxUmdvS0d6YTVSb2phSDJMeFlkYW1CRmVpNnZkalQvMUx2REhqZ3BwZTJrPSIsImFjY291bnRTaWduYXR1cmUiOiJ4cDgwWXNjN05tbEJmbjZEUkZ3U3RDYUdpZ0s2WTBKN1VwbjhCZlAyK2hVSnYvM01BTUtIcUhQeG5DSFUwWWFOeGNKU2phWlIrQjNpdGxVTWdGQXFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVVQwRnNreFo4L0V1M2hFUlhDYVZ4a2NBT2FqZjFRVi9MNlJoUk41ekZVNG1ZcWNYTVVPWlE5bXV2TXJENkhqWHp5VlFackh5cFJ3THkwUlRHL012aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NDI2OTUyMTk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJha1lLQ2hzMnVVYUkyaDlpOFdIV3BnUlhvdXIzWTAvOVM3d3g0NEthWHRwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MjU3Mzc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBVOSJ9"
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
