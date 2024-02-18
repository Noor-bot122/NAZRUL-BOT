const axios = require('axios');
const path = require('path');
const fs = require('fs');

module.exports.config = {
  name: "album",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto x romim",
  description: "Displays album options for selection.",
  usePrefix: false,
  commandCategory: "Media",
  usages: "Only or add [cartoon/photo/lofi/sad/islamic/funny/horny/anime/aesthetic/cat/lyrics/love/sigma]",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args}) {
  if (!args[0]){
    { api.setMessageReaction("🤍", event.messageID, (err) => {}, true);
    }
  const albumOptions = [
    "𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼",
     "𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼",
     "𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼",
     "𝗔𝗻𝗶𝗺𝗲 𝘃𝗶𝗱𝗲𝗼",
     "𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼",
     "𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼",
     "𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼",
     "𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼",
     "𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 𝗩𝗶𝗱𝗲𝗼",
    "𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼",
     "𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲",
    "𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼",
    "𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼"
  ];
  const message = "❤️‍🩹 𝗖𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻𝘀 𝗕𝗮𝗯𝘆 <💝\n"+"✿━━━━━━━━━━━━━━━━━━━━━━━✿\n"+ albumOptions.map((option, index) => `${index + 1}. ${option} 🤍`).join("\n")+"\n✿━━━━━━━━━━━━━━━━━━━━━━━✿";

  await api.sendMessage({body: message,},event.threadID,(error, info) => {
  global.client.handleReply.push({
    name: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: albumOptions
  })},event.messageID);
}
//------------Video Add--------------//
const validCommands = ['cartoon', 'photo', 'lofi', 'sad', 'islamic','funny','horny','anime','love','baby','lyrics','sigma','photo','aesthetic','cat'];
  { api.setMessageReaction("👀", event.messageID, (err) => {}, true);
  }
  if (args[0] === 'list'){
 try {
   const lRes = await axios.get(`https://y44zj2-3000.csb.app/data?list=dipto`);
const data = lRes.data;
     api.sendMessage(`🖤 𝗧𝗼𝘁𝗮𝗹 𝘃𝗶𝗱𝗲𝗼 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗶𝗻 𝗮𝗹𝗯𝘂𝗺 🩵\n\n${data.data}`, event.threadID, event.messageID);
 } catch (error) {
api.sendMessage(`${error}`,event.threadID,event.messageID)
 }
  }
    if (!args[1] || !validCommands.includes(args[1])) return;
    if (!event.messageReply || !event.messageReply.attachments) return;
    const attachment = event.messageReply.attachments[0].url;
    const URL = attachment;
    let query;
    switch (args[1]) {
        case 'cartoon':
            query = 'addVideo';
            break;
        case 'photo':
            query = 'addPhoto';
            break;
        case 'lofi':
            query = 'addLofi';
            break;
        case 'sad':
            query = 'addSad';
            break;
        case 'funny':
            query = 'addFunny';
            break;
        case 'islamic':
            query = 'addIslamic';
            break;
        case 'horny':
            query = 'addHorny';
            break;
        case 'anime':
            query = 'addAnime';
            break;
        case 'love':
            query = 'addLove';
            break;
        case 'lyrics':
            query = 'addLyrics';
            break;
        case 'baby':
            query = 'addBaby';
            break;
        case 'photo':
            query = 'addPhoto';
            break;
        case 'sigma':
            query = 'addSigma';
            break;
      case 'aesthetic':
        query = 'addAesthetic';
        break;
      case 'cat':
        query = 'addCat';
        break;
        default:
            break;
    }
    try {
        const response = await axios.get(`https://d1p-imgur.onrender.com/dip?url=${encodeURIComponent(URL)}`);
        const imgurLink = response.data.data;
        const fileExtension = path.extname(imgurLink);
   let query2;
        if (fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png') {query2 = 'addPhoto';} 
else if (fileExtension === '.mp4') {
  query2 = query;} else {
            api.sendMessage('Invalid file format.', event.threadID, event.messageID);
            return;
        }
        const svRes = await axios.get(`https://y44zj2-3000.csb.app/data?${query2}=${imgurLink}`);
const data = svRes.data;
     //   console.log(data);
        api.sendMessage(`✅ | ${data.data}\n\n🔰 | ${data.data2}`, event.threadID, event.messageID);
    } catch (error) {console.error('Error:', error);api.sendMessage(`Failed to convert image.\n${error}`, event.threadID, event.messageID);
}
};
module.exports.handleReply = async function ({ api, event, handleReply }) {
  api.unsendMessage(handleReply.messageID);
  if (event.type == "message_reply") {
  const reply = parseInt(event.body);
  if (isNaN(reply)) {
    return api.sendMessage("Please reply with either 1 - 13", event.threadID, event.messageID);
  }
  let query;
  let cp;
  if (reply === 1) {
    query = "funny";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ 𝗙𝘂𝗻𝗻𝘆 ভিঁডিঁও<🤣";
  } else if (reply === 2) {
    query = "islamic";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗜𝘀𝗹𝗮𝗺𝗶𝗰 ভিঁডিঁও <😇";
  }else if (reply === 3) {
      query = "sad";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗦𝗮𝗱 ভিঁডিঁও <🥺";
    }else if (reply === 4) {
      query = "anime";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  Anime ভিঁডিঁও <♣️";
    }else if (reply === 5) {
      query = "video";
    cp = "এঁইঁজেঁ পোঁলাঁপাঁনঁ তোঁমাঁরঁ 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 ভিঁডিঁও<👾";
    }else if (reply === 6) {
      query = "lofi";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗟𝗼𝗳𝗶 ভিঁডিঁও <🤍";
    }
    else if (reply === 7) {
    query = "horny";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗛𝗼𝗿𝗻𝘆 ভিঁডিঁও <🥵";
    }
    else if (reply === 8) {
    query = "love";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗟𝗼𝘃𝗲 ভিঁডিঁও <💫";
    }
    else if (reply === 9) {
    query = "baby";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 ভিঁডিঁও <💝";
    }
    else if (reply === 10) {
    query = "aesthetic";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 ভিঁডিঁও <😙";
       }
    else if (reply === 11) {
    query = "sigma";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗦𝗶𝗴𝗺𝗮 ভিঁডিঁও <🗿";
    }
    else if (reply === 12) {
    query = "lyrics";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ 𝗟𝘆𝗿𝗶𝗰𝘀 ভিঁডিঁও <😊";
    }
    else if (reply === 13) {
    query = "cat";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ  𝗖𝗮𝘁 ভিঁডিঁও <😺";
      }
    else if (reply === 14) {
    query = "photo";
    cp = "এঁইঁজেঁ ভাঁইঁ তোঁমাঁরঁ ছঁবিঁ <🌺";
    }
  //console.log(query);
  try {
    const res = await axios.get(`https://y44zj2-3000.csb.app/data?type=${query}`);
    const imgUrl = res.data.data;
    const imgRes = await axios.get(imgUrl, { responseType: 'arraybuffer' });

    const filename = __dirname + '/cache/d1p.mp4';
    fs.writeFileSync(filename, Buffer.from(imgRes.data, 'binary'));

    api.sendMessage({
        body: cp,
        attachment: fs.createReadStream(filename),
      },
      event.threadID,
      () => fs.unlinkSync(filename), event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while fetching the media.', event.threadID, event.messageID);
  }
  }
};