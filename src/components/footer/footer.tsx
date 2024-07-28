"use client"
import styles from "./styles.module.scss"
import Link from "next/link";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.textContainer}>
                <p className={styles.text}>Copyright © 2024 Graviola Arquitetos.</p>
                <div className={styles.icons}>
                    <Link href="#"><FacebookTwoToneIcon sx={{color:'white',cursor:'pointer'}} fontSize="small"/></Link>
                    <Link href="#"><PinterestIcon sx={{color:'white',cursor:'pointer'}} fontSize="small"/></Link>
                    <Link href="https://www.instagram.com/graviola.arquitetos/"><InstagramIcon sx={{color:'white',cursor:'pointer'}} fontSize="small"/></Link>

                </div>
       
            </div>
        </footer>
    )
}