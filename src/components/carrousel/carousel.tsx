'use server'
import Image from 'next/image';
import TransitionImages from "../transitionImages/transitionImages"
import styles from './styles.module.scss'

export default async function Carousel() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.mainText}>Estamos chegando em breve!</h1>
                    <p className={styles.subText}>
                        Nosso site está em construção, enquanto isso, continuamos dedicados<br />
                        a criar não apenas espaços, mas também a contar histórias.<br />
                        Fiquem atentos para mais novidades!
                    </p>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/logoGraviolaBody.svg"
                            alt="Logo Graviola"
                            layout="fill"
                            objectFit="contain"
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.rodapeTitle}>Graviola Arquitetos</h2>
                    <p className={styles.rodapeSubTitle}>Projetando com afeto e essência, contando a sua história</p>
                    <div className={styles.layoutContainer}>
                        <span className={styles.layoutText}>Arquitetura</span>
                        <span className={styles.layoutBall}></span>
                        <span className={styles.layoutText}>Interiores</span>
                    </div>
                </div>
              
            </div>
            <TransitionImages />
        </>
    )
}
