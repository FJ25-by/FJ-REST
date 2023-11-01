const fs = require('fs')

global.creator = 'FJ REST'// yourname
global.MONGO_DB_URI = "mongodb+srv://fajar2523gg:DragonLight@cluster0.woeuvhu.mongodb.net/?retryWrites=true&w=majority" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" //isi apa aja bebas
global.your_email = "kensbotz@gmail.com" //email
global.email_password = "taeiemcfizunpiab" //application password email
global.limitCount = 50000000
global.YUOR_PORT = 3000
global.loghandler = {
	noapikey:{
	creator: `${creator}`,
	status: 403,
        message: 'Input parameter apikey',
        result: "error"
    },
    error: {
	creator: `${creator}`,
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan'
    },
    apikey: {
	creator: `${creator}`,
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    },
    noturl: {
	creator: `${creator}`,
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
