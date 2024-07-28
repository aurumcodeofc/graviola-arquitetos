import styles from "./styles.module.scss"
import Image from "next/image"

export default function Header(){
    return(
        <header className={styles.header}>
            <Image className={styles.logo} src="/LogoGRAVIOLA.svg" alt="Logo Graviola Arquitetos" width={80} height={82}/>
        </header>
    )
}