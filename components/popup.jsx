import styles from "../styles/Popup.module.css"
export default function Popup(props){
return(
    <div className="fixed z-10 flex justify-center items-center align-middle h-screen w-screen">
    <div className={[" ", styles.popup].join(" ")}>
        
        <div className="flex w-screen "><span className="text-white text-xl">{props.title}</span></div>
        {props.children}

    </div></div>
)
}