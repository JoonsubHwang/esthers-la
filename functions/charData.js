const functions = require('firebase-functions');
const axios = require('axios');
const cheerio = require('cheerio');



exports.loadCharData = functions.https.onCall(async (data, context) => {

    const url = encodeURI(`https://lostark.game.onstove.com/Profile/Character/${data.charName}`);

    try {

        console.debug('start: ' + new Date())

        const $ = await loadHTML(url);
        
        // TODO: check no character 
        // <script> alert('캐릭터 정보가 없습니다. 캐릭터명을 확인해주세요.'); location.replace('/Profile/Character') </script>

        // TODO: check maintenance
        
        const charData = {
            charName: $('.profile-character-info__name').text(),
            charLevel: $('.profile-character-info__lv').text(),
            iLevel: $('.level-info2__expedition').text().split('Lv.')[1],
            server: $('.profile-character-info__server').text().split('@')[1]
        }
        console.debug('end: ' + new Date())

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
        return cheerio.load(res.data);
    } catch (err) {
        throw err;
    }
}
