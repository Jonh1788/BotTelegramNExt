const sqlite = require('sqlite3').verbose()


const adicionarItem = async (name) => {

    return new Promise((resolve, reject) => {

        const db = new sqlite.Database("public/banco.db")
        const sql = `INSERT INTO telegram (text, fileUrl, buttonText, buttonLink, type) VALUES (?, ?, ?, ?, ?)`
        const values = [name.text || null, name.fileUrl || null, name.buttonText || null, name.buttonLink || null, name.type]
        db.run(sql, values, (err) => {

            if(err){
                console.log(err)
                reject(err)
                console.log(dbPath)
            } else { 
                console.log(`Item inserido com sucesso.`)
                resolve({status: 200})
            }
        }
        )

        db.close()
    })
}

const pegarTodosItems = async () => {

    return new Promise((resolve, reject) => {

        const db = new sqlite.Database("public/banco.db")
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

const pegarUmItem = async (id) => {

    return new Promise((resolve, reject) => {

        const db = new sqlite.Database("public/banco.db")
        const sql = `SELECT * FROM telegram WHERE id = ?`

        db.get(sql, [id], (err, row) => {
            if(err){
                reject(err)
            } else {
                resolve(row)
            }
        })

        db.close()

    })
}

const deletarUmItem = async (id) => {

    return new Promise((resolve, reject) => {

        const db = new sqlite.Database("public/banco.db")
        const sql = `DELETE FROM telegram WHERE id = ?`

        db.run(sql, [id], (err) => {
            if(err){
                reject(err)
            } else {
                resolve()
            }
        })

        db.close()

    })
}
  
    
export { 

    adicionarItem, 
    pegarTodosItems, 
    pegarUmItem,
    deletarUmItem 
}
