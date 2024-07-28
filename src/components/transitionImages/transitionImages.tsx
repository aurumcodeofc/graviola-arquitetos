'use client'
import React, { useState, useEffect } from "react";
import { images } from "@/utils/data";
import styles from './styles.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const preloadImage = (src: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
  });
};

export default function TransitionImages() {
  const img: string[] = images; 
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [nextImage, setNextImage] = useState<string | null>(null);

  useEffect(() => {
    const loadNextImage = async () => {
      const nextIndex = (currentImage + 1) % img.length;
      const nextImageSrc = img[nextIndex];
      await preloadImage(nextImageSrc);
      setNextImage(nextImageSrc);
    };

    loadNextImage();

    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % img.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage, img, img.length]);

  return (
    <div className={styles.imageContainer}>
      <AnimatePresence>
        {img.map((image, index) => (
          index === currentImage && (
            <motion.img
              key={index}
              src={image}
              alt={`background-${index}`}
              className={styles.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.7 }} 
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
}

