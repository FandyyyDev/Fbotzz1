// SILAHKAN KALIAN ATUR SESUAI KEINGINAN KALIAN :)
// NO ENC ALL FITUR? CHAT ME 🥴
// BY HANN SYKES | YOUTUBE : HannSykes
/*++++++++++++++++++++++++++++++++++++++++++++*/

// UCAPAN WELCOME
const ucapan = (num, mdata, pushname) => {
	return `Hello, @${num.split('@')[0]} 👋
*Selamat Datang Di _${mdata.subject}_*
*Mau Gunakan Bot? Donasi Dulu 😎*
*DONT FORGET READ RULES GRUP!*

~ Thanks`
}

exports.ucapan = ucapan

// FOOTER WELCOME
const footerwelkam = `JANGAN LUPA DONASI!`
exports.footerwelkam = footerwelkam


// UCAPAN GOODBYE
const goodbye = (num, mdata, pushname) => {
  return `*Good Bye! @${num.split('@')[0]} 👋\nDasar Anak Ngen... 😡*`
  }
exports.goodbye = goodbye


// FOOTER GOODBYE
const footergoodbye = `Kalo Balik Jan Lupa Bawa Gorengan`
exports.footergoodbye = footergoodbye
