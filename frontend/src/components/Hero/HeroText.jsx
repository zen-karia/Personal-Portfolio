import React from 'react';
import { useState, useEffect } from 'react';

export default function HeroText() {
    const [intro, setIntro] = useState(""); 
    const [name, setName] = useState("");
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false); 

    const typeItems = ["A SOFTWARE ENGINEER...", "A FULL STACK DEVELOPER...", "AN AI ENTHUSIAST...", "AN AVID TRAVELLER..."];

    useEffect(() => {
        const typeText = (text, setText, callback) => {
            const speed = 100; 
            let i = 0;

            function type() {
                if (i < text.length) {
                    setText(text.substring(0, i + 1));
                    i++;
                    setTimeout(type, speed);
                } else if (callback) {
                    callback(); 
                }
            }

            type();
        };

       
        typeText("HI, I AM", setIntro, () => {
            typeText("ZENIL KARIA", setName, () => {
                setIsTypingComplete(true); 
            });
        });
    }, []);

    useEffect(() => {
        if (!isTypingComplete) return; 
        const typeAndEraseText = (text, callback) => {
            const typingSpeed = 100; 
            const erasingSpeed = 50; 
            let i = 0;

            function type() {
                if (i < text.length) {
                    setCurrentText(text.substring(0, i + 1)); 
                    i++;
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(erase, 1000); 
                }
            }

            function erase() {
                if (i > 0) {
                    setCurrentText(text.substring(0, i - 1)); 
                    i--;
                    setTimeout(erase, erasingSpeed);
                } else if (callback) {
                    callback(); 
                }
            }

            type();
        };

        typeAndEraseText(typeItems[currentIndex], () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % typeItems.length); 
        });
    }, [currentIndex, isTypingComplete]); 
    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
            <h2 id="typewriter-text" className="lg:text-2xl sm:text-xl text-cyan">
                {intro}
                
            </h2>
            <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
                {name}
                
            </h1>
            <p className="text-2xl mt-4 text-white">
                <span>{currentText}</span>
                <span className="blinking-cursor"></span>
            </p>
        </div>
    );
}