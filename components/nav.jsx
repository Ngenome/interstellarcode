import styles from "../styles/Nav.module.css"
export default function Nav(){
    return(
        <nav className={[" flex justify-between w-screen  z-10 ", styles.nav ].join(" ")}>
            <div></div>
        <ul className="flex flex-row mr-10 ">
        <li className={['', styles.li].join(" ")}><a href="home">Home</a></li>
        <li className={['', styles.li].join(" ")}><a href="pricing">Pricing</a></li>
        <li className={['', styles.li].join(" ")}><a href="team"></a>Team</li>
        <li className={['', styles.li].join(" ")}><a href="contact"></a>Contact</li>
        </ul>
        </nav>
    )
}