const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=zZ8QjBIY#O8-A4jxFixSwfISUxBHlbsW1P7qGf_8z9eCuIKT60WE' : process.env.SESSION_ID,
    OWNER_NUMBER: '94719357076',
   // Put news sender jid below you need to send news
    hiru: '120363368525589650@g.us',
    lankadeepa: '120363368525589650@g.us',
    itn: '120363368525589650@g.us',
    bbc: '120363368525589650@g.us',
    gossiplankanews: '120363368525589650@g.us',
    dasathalankanews: '120363368525589650@g.us',
    siyatha: '120363368525589650@g.us',
    derana: '120363368525589650@g.us'
};

