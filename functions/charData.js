const functions = require('firebase-functions');
const axios = require('axios');
const cheerio = require('cheerio');



exports.loadCharData = functions.https.onCall(async (data, context) => {

    const url = encodeURI(`https://lostark.game.onstove.com/Profile/Character/${data.charName}`);

    try {

        const $ = await loadHTML(url);

        // TODO: check no character 
        // TODO: check maintenance

        const charData = {
            charName: $('.profile-character-info__name').text(),
            server: $('.profile-character-info__server').text().split('@')[1],
            class: $('.profile-character-info__img').attr('alt'),
            charLevel: $('.profile-character-info__lv').text(),
            iLevel: $('.level-info2__expedition').text().split('Lv.')[1],
        }

        return charData;

    } catch (err) {

        console.error('[loadCharData] Error: ' + err);
        throw new functions.https.HttpsError('unknown', 'Failed to load character data.');
    }

});



// helpers

async function loadHTML(url) {
    try {
        let res = await axios(url);
        console.log()
        return cheerio.load(res.data);
    } catch (err) {
        throw err;
    }
}
