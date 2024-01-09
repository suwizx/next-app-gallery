import { X , Download } from 'lucide-react'

export default function Model (props) {

    const { setSelectImage , selectImage } = props

    return(
        <>
        {selectImage && (
            <div className="h-screen w-screen fixed top-0 left-0 bg-zinc-950/80 z-50 backdrop-blur p-4" >
                <div className='flex justify-between z-10'>
                    <div></div>
                    <div className='flex'>
                        <a href={`./api/image/download/${selectImage}`} className='p-2 border rounded-md border-zinc-500 mr-2'><Download /></a>
                        <button onClick={() => {setSelectImage(false)}} className='p-2 border rounded-md border-zinc-500'><X /></button>
                    </div>
                </div>
                <div>
                    <img className='mx-auto block max-h-[80dvh] max-w-[80dvw] z-0' src={`./api/image/${selectImage}`} alt="" />
                    <p className='text-center'>{selectImage}</p>
                </div>
            </div>
        )}
        </>
    )
}