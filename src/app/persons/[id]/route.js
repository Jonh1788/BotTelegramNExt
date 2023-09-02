import { deletarUmItem, pegarUmItem } from "@/utils/db"
import { NextResponse } from "next/server"
import  fs  from 'fs'
import prisma from "@/lib/prisma"

export async function GET(request, { params }){

    const id = params.id
    console.log(id)

    try {
        
        const dados = await prisma.telegram.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        return NextResponse.json({ dados }, { status: 200 })

    } catch (err) {

        return NextResponse.json({ Error: err }, { status: 500 })

    }
}

export async function DELETE(request, { params }){

    const id = params.id
    

    try {

        const item = await prisma.telegram.findUnique({
            where: {
                id: parseInt(id)
            }
        })

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

        await prisma.telegram.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json({ status: 200 })

    } catch (err) {

        return NextResponse.json({ Error: err }, { status: 500 })

    }
}