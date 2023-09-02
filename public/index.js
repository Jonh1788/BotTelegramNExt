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



async function iniciarBot() {

    let dados = [];
    await pegarTodosItems().then(result => {
            dados = result
        })

    let index = 0
    const intervaloEmSegundos = 10

    function enviarItem(){
        if(index < dados.length){
            enviarItens(dados[index])
            index++
        } else {
            clearInterval(intervalID)
        }
    }

    const intervalID = setInterval(enviarItem, intervaloEmSegundos * 1000)

   
}

iniciarBot()