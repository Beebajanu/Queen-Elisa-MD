/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['923137393724'] // Owner number , (https://wa.me/message/4ZUBE7RPDCKRD1 )
global.pemilik = ['923137393724'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['923137393724'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '*☞✮⃝🅬⸽̳⭕ғᷩғᷪɪᷪᴄᷩɪᷲᴀʟ👑✮⃝☜*' // Your name ඔබේ නම 
global.botnma = '*☞  ⃝•🅬⸽̳_ᷩ_ⷷ₇ⷷ₂ᷩ₄ᷧ❍͟Ғ͟ғ͟🄲༏ᥲᥧ ☜*' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '♡ ͢͢*🅬⸽̳𝖇𝖊𝖊𝖇₳♥🄾ᴏꜰꜰɪᴄɪᴀʟ☜*' //ownernama,ownername
global.packname = '*☞  ⃝•🅬⸽̳_ᷩ_ⷷ₇ⷷ₂ᷩ₄ᷧ❍͟Ғ͟ғ͟🄲༏ᥲᥧ ☜* Sticker' // Sticker package name
global.author = '*🂡্᭄͜͡𝄞•❥︎✰"᧒ᴀنᴀᴍ"✰👑•❥𝄞🂡্᭄͜͡*' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`*•√ᏰϵϵB͠ᴀ¤MúGHĄ£√•*
*☞❥⏤͟͟͞♥⃝ ᷞ ͦ ͮ ͤᏰϵϵB͠ᴀ☜*
°⌣♥️
⊱✿⊰❥ 𝙄 𝙣ə𝙫ə𝙧 𝙥𝙧❍𝙫ə 𝙩❍ 𝙗ə 𝙜❍❍𝙙 𝙚𝙣❍𝙪𝙜𝙝 𝙛❍𝙧 𝙚𝙫ə𝙧𝙮❍𝙣ə_! ✨🌸
     ✰°𝘽𝙪𝙩..࿐
⊱✿⊰❥ 𝙄 𝙖𝙢 𝙩𝙝ə 𝙗ə𝙨𝙩 𝙛❍𝙧 𝙩𝙝ə𝙢 𝙬𝙝❍ 𝙪𝙣𝙙ə𝙧𝙨𝙩𝙖𝙣𝙙 𝙢ə. ✌️🌼
https://wa.me/message/4ZUBE7RPDCKRD1
  𝄟≛⃝🂡্᭄͜͡𝄞•❥︎✰"᧒ᴀنᴀᴍ"✰💍👑•❥𝄞🂡্᭄͜͡  ♬ヅʜᵉᵃʳᵗ ʜᵃᶜᵏᵉʳ(｡♥‿♥｡)♔♡⁩
*~_🎀!...※...!🎀_~*
*☞✮⃝•🅬⸽̳⭕ғᷩғᷪɪᷪᴄᷩɪᷲᴀʟ👑✮⃝☜*
*┅•※ ͜✤♡♡♡✤͜ ※•┅ *
      *┊ ┊ ┊   ┊*
      *┊ ┊ ┊  ❣*
      *┊ ┊   ❣ 💚*
      *┊    ❣ 💛*
      ❣ 💙
      💜
Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
🌀 Thanks Fro using sl zim bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `kick`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 *•√𝐵𝛯𝛯𝐵𝛥¤𝛭𝑈𝐺𝛨𝛥𝐿√•*`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
