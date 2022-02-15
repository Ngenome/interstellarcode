import { useEffect } from "react"
import styles from "../styles/Card.module.css"
let x= []
let counter =1
export default function Card(props){
    var name = props.name;
    useEffect(()=>{
        x.push({name : counter})
        counter = counter+1;
        console.log(counter)
    },[])
    return(
        <div>
            <div className={[`bg-gradient-to-b from-${props.color}-500 to-transparent items-center  flex justify-center shaddow-sm  shadow-cyan-500  `,styles.rounded, styles[`shadow0${counter}`]].join(" ")}>
                <span className="text-white text-center  text-2xl font-alegreya ">{props.name}</span>
            </div>
        </div>
    )
}