import { ReactElement } from "react"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[22.8rem] py-5 rounded font-bold text-white text-[22px] bg-[#169c49] shadow-[0px_0px_20px_#169c49] hover:bg-yellow-500 hover:shadow-[0px_0px_20px_#eab308] transition-all duration-200">
            
            <a href="" target='_blank'> <WhatsAppIcon className='fill-white w-[40px] h-[40px] animate-bounce'/> </a>
            {children}
        </button>
    )
}