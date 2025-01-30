const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVHkG+1KquWkBUVFRU/NqahwABIxDoEEDs8r9vod01/bAz28tTKiHnnpxz7n0HJMU5mqEaDN5BRnEJGWqWrM4QGACtCAJEQRv4kEEwAGhOBXIUpTJUo+PGD1RVky29Mw1XWSKfrQtUz3rLc1p+bL2CextkhRtj7w+ACV3eDmeVR4GzCs1FcnY1K7vdLrOypIl9duTw6IRzPbmR6hXcG0SIKSahkZ1RgiiMZ6heQUy/R7+wEHeSk3ERumWPnpgxujCYvmWdnOMr6TY0MnfJuQEnRN736OfqiOxas5YdGHRYxskWH3c7Obb8m2P7O4ILPq8jJpRDznjSz3FIkG/6iDDM6m/rPtaVva9updhZipo8Gbe8xVTakQm/O21wbxdYte6dZcngD+b3iLdQAQ828tJkf6r4cFxzBaoM7Aw3VDumBdTihdmt0GgmhF+Jr+hnVqL/o7szupbqbK6MrPTa2a6DLUbry5t4UXRycbuhce7WLanmVobwzdgg/5a2lHRUpWSSMkb2k3E8NsrTAZoSKiIbc5qvmfbO0b/Qh6ygf2KJr2bmy7rSq1rxuQrpSeiWaRWMR3I8P3ZW89JUsWU6HFoI9U6Uo3AsqcUeUSGeWGd1qtrXrk8Ovf6tZ0gjyZZzTRvi6vXxogjVpg8G/L0NKApxzihkOCWPPZFvA+iXG+RRxB7ygqh7seS9BfN6kij0Oi+uJz1f7qVOqrGJbhMeiq0U0/6KRq+gDTKaeijPkT/BOUtpbaE8hyHKweDvn21A0JU9jWvKCXwbBJjmzCFFFqfQ/3T18xB6XloQtqmJpzcLRMGA+7WNGMMkzBsdCwKpd8Yl0s+Q5WAQwDhH9zbwUYk91OCBHYtub1oUrbcw1HmRt5AkxGpD+ZyS5y9IULqBovAvgewqL2K/h15gXwheBElykdxFPIcC0Ab4o2eaO7+1cBhudv2imF+3/NHT6LEVV6Nbbzbr8unDhqf2iCIfDBgtUBu40IuKbJtGiPwBd7syrpFx7XuU3Hw+WzhLwTot0Aqrxhfcp6dg8P5rTump3+ApJ8W2x/MhaIPkEUHcvLwvKnJP6fUEvjvoK3/lP6pGR5hlPwhiDeyH5s0FHzGI4xwMgG7iPO+bQ2PmxopbjccqF6p62Ij66dFn2J9hugoS3qGVmR/GSenI22Xn1DGjyd4UkGhri6torJBnhPJKF1//BQQMgBtRKC7k/nl/6ni9LOj6l2Pg9t86hnszeXNT02inTwUMyVW21zVxjvWME+19MfTtRbVsbenQUda3tCpUuhmTIjuPpsPwtan2zMrXYsTyRarMCEv33GiTb4Rbd4pwOYyGAglOBysZjXdbeNqhpO+cWnBzGe7fLFFURwflsu5Ip7kUVpBYQepOI30+mrvjfI3tZxs+xkD8MX7xo0HeP5IVYPSYZgQ2Dv2HN18zzt3bXyA+xuNvcqR5fusYHy71fHTNKL+MbmU3qKcajxdCYahbD2lDgWjm8lIV4H7/2QZZDFmQ0gQMACQ+TbEP2iCGOVN/tekWJyhnMMnAgFeEXlfk5D7fBkmtZtmGQfbZ3UB9fHMZ3P8B9jVSpfkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Sahas Rashmika",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Sahas rashmika",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Sahas_MD By MR.Sahas',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





