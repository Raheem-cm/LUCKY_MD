const util = require('util');
const fs = require('fs-extra');
const { Raheem } = require(__dirname + "/../Raheem-cm/18");
const { format } = require(__dirname + "/../Raheem-cm/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

ezra({ nomCom: "sc", categorie: "My Contact" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../fredi//ezra");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une >heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
❂━━━════──⊷──════━━━❂
   *INFORMATION ABOUT ME* 
▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
❂━━━➳════⊷════➳━━━━❂

*GITHUB LINK*
> https://github.com/Raheem-cm

*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r 

*FOR MORE INFO TAP ON THE LINK BELOW*
> https://github.com/Raheem-cm/RAHEEM_XMD
╭──━━━━═════════━━━━⦿
┃ ❂━━━════➳════━━━━❂
┃▓▒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃▓▒ *DEV* : *RAHEEM BOT*
┃ ❂━━━════➳════━━━━❂
⁠⁠⁠⁠╰──━━━━═════════━━━━⦿ 
  `;
    
let menuMsg = `
     ╭──━━━━══⊷══━━━━⦿
     ┃ ❂━━━━━━━━━━━━❂
     ┃▓ RAHEEM XMD
     ┃ ❂━━━━━━━━━━━━❂
     ╰──━━━━══⊷══━━━━⦿
❂━━━━═════⊷═════━━━━❂
▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
❂━━━════──➳──════━━━❂`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *Lucky Md*, Developed By Fredie Sir" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *LUCKY MD V7*, Developed By Fredie Sir" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
