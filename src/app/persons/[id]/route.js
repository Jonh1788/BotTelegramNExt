import { deletarUmItem, pegarUmItem } from "@/utils/db"
import { NextResponse } from "next/server"
import  fs  from 'fs'

export async function GET(request, { params }){

    const id = params.id
    console.log(id)

    try {
        
        const dados = await pegarUmItem(id)
        return NextResponse.json({ dados }, { status: 200 })

    } catch (err) {

        return NextResponse.json({ Error: err }, { status: 500 })

    }
}

export async function DELETE(request, { params }){

    const id = params.id
    

    try {

        const item = await pegarUmItem(id)
        const itemDeletar = item?.fileUrl
        console.log(itemDeletar)
        if(itemDeletar){
            fs.unlink(`public/${itemDeletar}`, (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log('Arquivo deletado com sucesso!')
                }
            })
        }

        await deletarUmItem(id)
        return NextResponse.json({ status: 200 })

    } catch (err) {

        return NextResponse.json({ Error: err }, { status: 500 })

    }
}