
import { adicionarItem, pegarTodosItems } from "@/utils/db"
import { NextResponse } from "next/server"
import { Buffer } from 'buffer';
import { decode } from 'node-base64-image';
import { writeFile } from "fs/promises";

function makeid(length = 10) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    

export async function POST(request) {

                try{
                        const formData = await request.formData()
                        
                        const file = formData.get("file");
                        
                        
                        let namefile = makeid(10)

                        const dados = formData.get("dataObject")
                       const dadosObjeto = JSON.parse(dados)

                        if(file?.type?.includes('image')){

                                const fileData = await file.arrayBuffer()

                                const buffer = Buffer.from(fileData)
        
                                const filePath = "./public/" + namefile + ".jpg"

                                dadosObjeto.fileUrl = namefile + ".jpg"
                                await writeFile(filePath, buffer, 'binary')
        
                        } else if (file?.type?.includes('video')){

                                const fileData = await file.arrayBuffer()
                                
                                const buffer = Buffer.from(fileData)

                                const filePath = "./public/" + namefile + ".mp4"

                                dadosObjeto.fileUrl = namefile + ".mp4"
                                await writeFile(filePath, buffer, 'binary')
                        } 
                        

                       

                       

                       await adicionarItem(dadosObjeto)

                        return new Response(JSON.stringify({sucess: "Sucessful"}))
                } catch (err) {
                        console.log(err)
                        return new Response(JSON.stringify({error:"Server Side Error"}, {status:500}))
                }

                
                

        
                
        
}

export async function GET() {

        try{
                const dados = await pegarTodosItems()
                return NextResponse.json({dados}, {status:200})

        }catch (err) {
                return NextResponse.json({Error:err}, {status:500})
        }

}
