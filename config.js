/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['51963324153']
global.ownernomer = "51963324153"
global.premium = ['51963324153']
global.packname = 'Sticker'
global.author = 'Nexus'
global.sessionName = 'nexusdev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefix = ['.']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    etiquetaimg: 'Debes etiquetar una imagen con el comando: ',
    etiquetastick: 'Debes etiquetar un sticker con el comando: ',
    textocomando: 'Falta agregar texto al lado del siguiente comando: ',
    etiquetaimgvidl: 'Debes etiquetar una imagen o un video con una duración máxima de 10 segundos con el comando: ',
    lims: '*La duración máxima permitida es de 10 segundos.*',
    error: '*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/assistant.jpg')
global.faall = fs.readFileSync('./media/image/assistant.jpg')

// Url
global.mygit = 'https://github.com/Nexus07z'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/Cp1OJenk6Q9D9vgLjLU558"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Nexusᴮᴼᵀ'
global.apilol = '4fda13ee5ed767eef2174d23'
global.akulaku = 'Bot By Naze'



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
