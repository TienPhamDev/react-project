import { ReactNode } from "react"

interface HeaderProps {
    children: ReactNode
    image : {
        src:string
        alt:string
    }
}

const Header = (props:HeaderProps)=>{
    return <header>
        <img src={props.image.src} alt={props.image.alt} />
        {props.children}
    </header>
}
export default Header