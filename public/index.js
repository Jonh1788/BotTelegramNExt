const { Telegraf } = require('telegraf')
const fs = require('fs')
const { default: axios } = require('axios')
const { array } = require('zod')
const bot = new Telegraf("6429871768:AAGCBacSS6UTxZ_m0oLoM9HgF5MWC-7I_6w")
const sqlite = require('sqlite3').verbose()

const pegarTodosItems = async () => {

    return new Promise((resolve, reject) => {

        const db = new sqlite.Database("banco.db")
        const sql = `SELECT * FROM telegram`

        db.all(sql, (err, row) => {
            if(err){
                reject(err)
            } else {
                resolve(row)
            }
        })

        db.close()

    })
}





function enviarImagemTexto(dados) {

    const reply = dados.buttonText !== null ? {
        inline_keyboard: 
        [
        [{text: dados?.buttonText, url:dados?.buttonLink}],
    ]} : undefined
    
    bot.telegram.sendPhoto("-1001985578363", {source:dados?.fileUrl }, {caption: dados?.text, parse_mode: 'markdown', reply_markup: reply })

}


function enviarVideoTexto(dados) {

    const reply = dados.buttonText !== null ? {
        inline_keyboard: 
        [
        [{text: dados?.buttonText, url:dados?.buttonLink}],
    ]} : undefined

bot.telegram.sendVideo("-1001985578363", {source:dados?.fileUrl }, {caption: dados?.text, parse_mode: 'markdown',  reply_markup: reply })
}

function enviarAudioTexto(dados) {

    const reply = dados.buttonText !== null ? {
        inline_keyboard: 
        [
        [{text: dados?.buttonText, url:dados?.buttonLink}],
    ]} : undefined

bot.telegram.sendAudio("-1001985578363", {source:dados?.fileUrl }, {caption: dados.text, parse_mode: 'markdown', reply_markup: reply})

}

function enviarTexto(dados) {

    const reply = dados.buttonText !== null ? {
        inline_keyboard: 
        [
        [{text: dados?.buttonText, url:dados?.buttonLink}],
    ]} : undefined

bot.telegram.sendMessage("-1001985578363", {text: dados.text, parse_mode: 'markdown', reply_markup: reply})

}

function enviarItens(dados) {

    if(dados.fileUrl?.includes(".mp4")){
        enviarVideoTexto(dados)
        return
    } else if (dados.fileUrl?.includes(".mp3")) {
        enviarAudioTexto(dados)
        return
    } else if (dados.fileUrl?.includes(".jpg")){
        enviarImagemTexto(dados)
        return
    } else {
        enviarTexto(dados)
        return
    }

}

//💥🤑💣🧭🎪🚨 ⭐ 🔥📱🔎⬆⬇⚠🟦💎🖥

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
<<<<<<< HEAD

function enviarMines() {
    const primeiraMensagem = "🔥🔥 Entrada Próxima 🔥🔥"
    const segundaMensagem = `⭐ Mines - entrada em 1 minuto\n🔎Analisando TxID da casa.\n`

    const gerarMines = () => {

        const minas = 4
        const objetos = []
        for(let i = 0; i < minas; i++){

            const objeto = {
                primeiro: getRandomInt(minas),
                segundo: getRandomInt(minas)
            }

            objetos.push(objeto)
        }

        let minesString = ""
        for(let i = 0; i < 5; i++){
            externo: for(let y = 0; y < 5; y++){

                 for(let x = 0; x < objetos.length; x++) {

                    if(objetos[x].primeiro === i && objetos[x].segundo === y){
                        minesString += "⭐ "
                        continue externo
                                            
                    } 

                    
                };

                minesString += "🟦 "

            }

            minesString += "\n"
        }

        return minesString
    }

    const agora = new Date()
    agora.setMinutes(agora.getMinutes() + 2)
    const hora = agora.getHours().toString().padStart(2, '0')
    const minutos = agora.getMinutes().toString().padStart(2, '0')
    const horaAtual = `${hora}:${minutos}`
    const mines = "✅ Entrada confirmada  ✅\n\n" 
    + gerarMines() + "\n\n💣Minas: 3\n🎮Tentativas: 3\nVálido até:" + horaAtual + "\n\n💎 Jogue clicando aqui👉\n\n⭐Clique acima para abrir o mines👆"

    
    bot.telegram.sendMessage("-1001985578363", {text: primeiraMensagem, parse_mode: 'markdown'})

    setTimeout(() => {
        bot.telegram.sendMessage("-1001985578363", {text: segundaMensagem, parse_mode: 'markdown'})
    }, 1000 * 60)

    setTimeout(() => {
        bot.telegram.sendMessage("-1001985578363", {text: mines, parse_mode: 'markdown'})
    }, 2000 * 60)
}
=======
>>>>>>> f9fea60 (Melhorado e funcional)

let pause = false

function enviarMines() {
    const primeiraMensagem = "🔥🔥 Entrada Próxima 🔥🔥"
    const segundaMensagem = `⭐ Mines - entrada em 1 minuto\n🔎Analisando TxID da casa.\n`

    const gerarMines = () => {

        const minas = 4
        const objetos = []
        for(let i = 0; i < minas; i++){

            const objeto = {
                primeiro: getRandomInt(minas),
                segundo: getRandomInt(minas)
            }

            objetos.push(objeto)
        }

        let minesString = ""
        for(let i = 0; i < 5; i++){
            externo: for(let y = 0; y < 5; y++){

                 for(let x = 0; x < objetos.length; x++) {

                    if(objetos[x].primeiro === i && objetos[x].segundo === y){
                        minesString += "⭐ "
                        continue externo
                                            
                    } 

                    
                };

                minesString += "🟦 "

            }

            minesString += "\n"
        }

        return minesString
    }

    const agora = new Date()
    agora.setHours(agora.getHours() -3 )
    agora.setMinutes(agora.getMinutes() + 2)
    const hora = agora.getHours().toString().padStart(2, '0')
    const minutos = agora.getMinutes().toString().padStart(2, '0')
    const horaAtual = `${hora}:${minutos}`
    const mines = "✅ Entrada confirmada  ✅\n\n" 
    + gerarMines() + "\n\n💣Minas: 3\n🎮Tentativas: 3\nVálido até:" + horaAtual + "\n\n💎 Jogue clicando aqui👉\n\n⭐Clique acima para abrir o mines👆"

    pause = true
    
    bot.telegram.sendMessage("-1001985578363", {text: primeiraMensagem, parse_mode: 'markdown'})

    setTimeout(() => {
        bot.telegram.sendMessage("-1001985578363", {text: segundaMensagem, parse_mode: 'markdown'})
    }, 1000 * 60)

    setTimeout(() => {
        bot.telegram.sendMessage("-1001985578363", {text: mines, parse_mode: 'markdown'})
        pause = false
    }, 2000 * 60)
}

function aguardarSegundos(segundos) {
    return new Promise(resolve => {
      setTimeout(resolve, segundos * 1000);
    });
  }
async function iniciarBot() {
    console.log("Iniciado!")
    let dados = [];
    await pegarTodosItems().then(result => {
            dados = result
        })

    let index = 0
    const intervaloEmSegundos = 60
<<<<<<< HEAD

    async function enviarItem(){
=======

    async function enviarItem(){

        while(pause){
            await aguardarSegundos(30)
        }


>>>>>>> f9fea60 (Melhorado e funcional)
        if(index < dados.length){
            enviarItens(dados[index])
            index++
        } else {

            await pegarTodosItems().then(result => {
                dados = result
            })
    
            index = 0
        }
    }

    setInterval(enviarItem, 4000 * 60)
    setInterval(enviarMines, 3500 * 60)

}

iniciarBot()