/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "natural Video",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Romim",
  description: " Natural VEDIO",
  usePrefix: true,
  commandCategory: "Hình ảnh",
  usages: "natural vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝗡𝗔𝗧𝗨𝗥𝗔𝗟 𝗩𝗜𝗗𝗘𝗢 𝗕𝗬 𝗥𝟰𝗠!𝗠"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/file/d/1ISFV43XuMKo7fgzn6kKPBAtcEZ2Xop-m/view?usp=drivesdk"

  ];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
