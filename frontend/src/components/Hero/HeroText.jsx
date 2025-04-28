import React from 'react';
import { useState, useEffect } from 'react';

export default function HeroText() {
    const [intro, setIntro] = useState(""); 
    const [name, setName] = useState("");
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false); // Track when intro and name are done

    const typeItems = ["A SOFTWARE ENGINEER...", "A FULL STACK DEVELOPER...", "AN AI ENTHUSIAST...", "AN ADRENALINE JUNKIE..."];

    useEffect(() => {
        const typeText = (text, setText, callback) => {
            const speed = 100; // Adjusted speed for slower typing
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

        // First type "Hi, I am", then "Zenil Karia", then start the infinite loop
        typeText("HI, I AM", setIntro, () => {
            typeText("ZENIL KARIA", setName, () => {
                setIsTypingComplete(true); // Mark intro and name typing as complete
            });
        });
    }, []);

    useEffect(() => {
        if (!isTypingComplete) return; // Wait until intro and name are typed

        const typeText = (text, callback) => {
            const speed = 100; // Adjusted speed for slower typing
            let i = 0;

            function type() {
                if (i < text.length) {
                    setCurrentText(text.substring(0, i + 1)); // Update the text being typed
                    i++;
                    setTimeout(type, speed);
                } else if (callback) {
                    setTimeout(callback, 1000); // Pause before starting the next item
                }
            }

            type();
        };

        typeText(typeItems[currentIndex], () => {
            setCurrentText(""); // Clear the text before typing the next item
            setCurrentIndex((prevIndex) => (prevIndex + 1) % typeItems.length); // Move to the next item (loop back to the start)
        });
    }, [currentIndex, isTypingComplete]); // Trigger re-render when currentIndex changes and typing is complete

    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
            <h2 id="typewriter-text" className="lg:text-2xl sm:text-xl text-cyan">
                {intro}
            </h2>
            <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
                {name}
            </h1>
            <p className="text-lg mt-4 text-white">
                {currentText}
            </p>
        </div>
    );
}