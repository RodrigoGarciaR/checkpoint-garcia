import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa';

const RRSS = () => {
    return (
        <>
            <div className="pt-5 pb-20 bg-black">
                <h3 className="text-center text-white text-9xl fontRusso">
                    Síguenos
                </h3>
            </div>
            <div className="grid justify-center grid-flow-col gap-48 pb-20 bg-black">
                <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebookF className="transition-colors duration-500 text-9xl text-rrss hover:text-rrssHover" />
                </a>
                <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                    <FaYoutube className="transition-colors duration-500 text-9xl text-rrss hover:text-rrssHover" />
                </a>
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram className="transition-colors duration-500 text-9xl text-rrss hover:text-rrssHover" />
                </a>
                <a href="https://twitch.com/" target="_blank" rel="noreferrer">
                    <FaTwitch className="transition-colors duration-500 text-9xl text-rrss hover:text-rrssHover" />
                </a>
            </div>
        </>
    );
};

export default RRSS;
