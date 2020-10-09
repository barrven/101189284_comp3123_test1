let fs = require('fs')
let path = require('path')

if (fs.existsSync('./logs')) {
    const files = fs.readdirSync('./logs')


    for(let i = 0; i < files.length; i++){
        console.log(files[i])
        fs.unlinkSync(files[i])
    }


    
}


if(!fs.existsSync('./logs')){
    fs.mkdirSync('./logs')
}

fs.readdirSync('./logs')