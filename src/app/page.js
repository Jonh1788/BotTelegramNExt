'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "cmdk"
import { ArrowLeftRight, ArrowUpRight, Check, ChevronsUpDown, Loader2, Settings } from "lucide-react"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { marked } from 'marked'
import { useForm } from "react-hook-form"
import axios from "axios"



const Items = ({text, fileUrl, buttonText, buttonLink, renderMark, id, onScreenChange}) => {

  const [animate, setAnimate] = useState(false)

  const handleItemDelete = async () => {
    setAnimate(true)
    await axios.delete(`/persons/${id}`)
    .then(result => {
      setAnimate(false)
      onScreenChange()
      console.log("Item deletado com sucesso!", result)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="flex flex-row gap-2">
       <div key={id} className="h-full w-[350px] px-6 rounded shadow-md py-2 bg-telegram">
  
  {(() => {

    if(fileUrl?.includes(".jpg")){
      return (
        // <Image className="rounded-t-sm w-full h-auto" src={`/${fileUrl}`} width='0' height='0' alt="Foto da mulher mais linda do mundo"/>
        <img src={`/${fileUrl}`} className="rounded-t-sm w-full h-auto" width={0} height={0}/>
      )
    } else if (fileUrl?.includes(".mp4")){

      return(
        <video controls autoPlay >
            <source src={`/${fileUrl}`} type={`video/mp4`}/>
          </video>
      )
    } else if (fileUrl?.includes(".mp3")){
      return (
        <audio controls>
            <source src={`/${fileUrl}`} type={"audio/mp3"}/>
          </audio>
      )
    } else {
      return <p></p>
    }

  })()}

  
      {text?.length > 0 && (
        <div className="bg-white block rounded-b-sm px-1 py-1">

        <div className="h-full w-full break-words">
         {renderMark(text)} 
        </div>
      </div>
      )}
    
      {buttonText?.length > 0 && ( 
      <div onClick={() => window.open(buttonLink, '_blank')} className="flex items-center justify-between text-center bg-gray-500/80 m-1 rounded-lg
    h-[30px] cursor-pointer">
      <p  className="pl-[96px]">{buttonText}</p> <ArrowUpRight color="#a6a6a6"/>
      </div>
      ) }
     
  </div>
  <button onClick={handleItemDelete} className="flex justify-center items-center   rounded-full border-0 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 flex-none h-10 w-24">{!animate && "Deletar" || <Loader2 className="animate-spin"/>}</button>
    </div>
   
  )
}


const Home = () => {

  const [text, setText] = useState("")
  const [file, setFile] = useState(null)
  const [buttonText, setButtonText] = useState("")
  const [buttonLink, setButtonLink] = useState("")
  const handleTextChange = (event) => {
    setText(event.target.value)
    console.log(text)
  }

  const handleButtonChange = (event) => {

    setButtonText(event.target.value)
  }

  const handleButtonLinkChange = (event) => {
    setButtonLink(event.target.value)
  }
  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    setVideoKey(prevKey => prevKey + 1)
  }
  const frameworks = [
    {
      value: "imageCaption",
      label: "Imagem e texto",
    },
    {
      value: "videoCaption",
      label: "Video e texto",
    },
    {
      value: "text",
      label: "Apenas texto",
    },
    {
      value: "audio",
      label: "Apenas audio",
    },
    {
      value: "button",
      label: "Apenas botão",
    },
    {
      value: "audioButton",
      label: "Audio e botão",
    },
    {
      value: "videoButton",
      label: "Vídeo e botão",
    },

    {
      value: "photoButton",
      label: "Foto e botão",
    }

  ]

  const [loading, setLoading] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm()
  const onSubmit = async (values) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('dataObject', JSON.stringify({...values, type: value}))
    try{
      setLoading(true)
      await axios.post("/persons", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((result) => {
        setText("")
        setFile(null)
        setButtonLink("")
        setButtonText("")

      })
    }
    catch(err) {
      console.log(err)
   } finally {
    setLoading(false)
   }
   
  } 
  
  const [change, setChange] = useState(true)
  const [videoKey, setVideoKey] = useState(0)
  const renderMark = (texto) => {
    const textoComQuebra = texto.replace(/\n/g, '<br>\n')
    const rederizadoMark = marked.parse(textoComQuebra)
    
    return <div dangerouslySetInnerHTML={{ __html: rederizadoMark}}></div>
  }

  const onScreenChange = async() => {
    await axios.get("/persons").then((response) => {
      console.log(response.data.dados)
      setDados(response.data.dados)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const handleChange = () => {
    setChange(!change)
    onScreenChange()
  }
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [dados, setDados] = useState([])

  useEffect(() => {
      axios.get("/persons").then((response) => {
      setDados(response.data.dados)
    })
    .catch((err) => {
      console.log(err)
    })
    
  }, [])
  
  
  
  return (
  <div className="flex justify-center items-center min-h-screen m-0 p-0">
  <Card className="w-[90%] min-h-[700px] sm:w-[500px] shadow-md flex items-center flex-col overflow-hidden">
  <CardHeader className="flex flex-row justify-between w-full">
    <div onClick={handleChange} className="bg-lime-300 w-8 h-8 flex justify-center items-center rounded cursor-pointer hover:bg-lime-400">
    <ArrowLeftRight className="text-zinc-700"/>
    </div>
    
    <div className="flex flex-col">
    <CardTitle>Telegram Bot</CardTitle>
    <CardDescription>Insira as informações abaixo</CardDescription>
    </div>
    <div className="bg-lime-300 w-8 h-8 flex justify-center items-center rounded cursor-pointer hover:bg-lime-400">
    <Settings className="text-zinc-700"/>
    </div>
    
  </CardHeader>
  {change ? (
    <>
    <CardContent >
    <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild>
  
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[320px] sm:w-80 justify-between"
          >
  
            {value ? frameworks.find( (framework) => framework.value === value)?.label
              : "Escolha o tipo..."}
              
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  
          </Button>
  
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command className="bg-slate-100 -ml-[60px] w-[320px] sm:w-80 border border-gray rounded z-10">
            <CommandInput className="w-[320px] sm:w-80 focus:outline-none p-1 bg-slate-100 border-x -mr-1 border-gray rounded" placeholder="Escolha o tipo..." />
            <CommandEmpty>No framework found.</CommandEmpty>
  
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem className="ps-2 flex flex-row"
                  key={framework.value}
                  onSelect={() => {
                    setValue(framework.value === value ? "" : framework.value)
                    setOpen(false)
                  }}
                  
                >
                <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
  
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <textarea value={text} type="text" {...register("text")} cols={40} rows={8} className="border border-slate-200 mt-2 pl-1 rounded w-[320px] sm:w-80" onChange={handleTextChange} placeholder="Digite a mensagem aqui..."/>
        
        {value.toLowerCase().includes("button") && (
          <>
          <input value={buttonText} type="text" {...register("buttonText")} onChange={handleButtonChange} className="mt-4 text-sm border border-slate-200 rounded p-1" placeholder="Texto do botão..." /> 
          <input value={buttonLink} type="text" {...register("buttonLink")} onChange={handleButtonLinkChange} className="mt-2 text-sm  border border-slate-200 rounded p-1" placeholder="Link do botão..."/>
          </>
        )}
        <input className="mt-4 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"  type="file"  {...register("file")}  onChange={handleFileChange} accept="image/*,audio/*,video/*"/>
        <button disabled={loading} type="submit" className="flex justify-center items-center mt-2 mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100">{!loading && "Enviar" || <Loader2 className="animate-spin"/>}</button>
      </form>
    </CardContent>
    <CardFooter className="px-6 mx-0 overflow-y-auto">
    
      <div className={"h-full w-[350px] px-6 rounded shadow-md py-2" + (text?.length > 0 || buttonText?.length > 0 || file ? "" : " hidden")} style={{ backgroundImage: "url('/telegram.jpg')"}}>
  
      {(() => {
  
        if(file?.type.includes("image")){
          return (
            <Image className="rounded-t-sm w-full h-auto" src={URL.createObjectURL(file)} width='0' height='0' alt="Foto da mulher mais linda do mundo"/>
          )
        } else if (file?.type.includes("video")){
  
          return(
            <video controls autoPlay key={videoKey}>
                <source src={URL.createObjectURL(file)} type={file.type}/>
              </video>
          )
        } else if (file?.type.includes("audio")){
          return (
            <audio controls key={videoKey}>
                <source src={URL.createObjectURL(file)} type={file.type}/>
              </audio>
          )
        } else {
          return <p></p>
        }
  
      })()}
    
      
          {text?.length > 0 && (
            <div className="bg-white block rounded-b-sm px-1 py-1">
  
            <div className="h-full w-full break-words">
             {renderMark(text)} 
            </div>
          </div>
          )}
        
          {buttonText?.length > 0 && ( 
          <div onClick={() => window.open(buttonLink, '_blank')} className="flex items-center justify-between text-center bg-gray-500/80 m-1 rounded-lg
        h-[30px] cursor-pointer">
          <p  className="pl-[96px]">{buttonText}</p> <ArrowUpRight color="#a6a6a6"/>
          </div>
          ) }
         
      </div>
      
    </CardFooter>
    </>
  ) : (
    <>
    <div className="w-full h-12 flex gap-2 items-center px-2">
      <input className="mt-4 text-sm border border-slate-200 rounded p-1 w-72" type="text" placeholder="Comece a pesquisa..."/>
      <input className="mt-4 text-sm border border-slate-200 rounded p-1" type="text" placeholder="Comece a pesquisa..."/>
    </div>
    <div className="w-full h-80 flex-1 flex flex-col gap-2 px-2 pt-2">
    {dados.map((dado) => <Items {...dado} renderMark={renderMark} onScreenChange={onScreenChange}/>)}
    </div>
    </>
    
  )}

  
</Card>
  </div>
  )
}

export default Home