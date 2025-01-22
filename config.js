const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=rZ0hBIRJ#MbvH4nMqU1N5wLN9lCOi-QqZrPQDbRhRpHAGyN3-cyc' : process.env.SESSION_ID,
    OWNER_NUMBER: '94775128716',
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

