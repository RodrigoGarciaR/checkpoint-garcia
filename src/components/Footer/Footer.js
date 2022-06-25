import React from 'react';
import RRSS from '../RRSS/RRSS';

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-around py-20 text-4xl bg-black">
                <div>
                    <span className="fontRusso text-secondary">
                        Tienda física
                    </span>
                    <p className="text-white">
                        <a
                            href="https://goo.gl/maps/zsLQwTWasfWa2DJy9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CDMX, México
                        </a>
                    </p>
                </div>
                <div>
                    <span className="fontRusso text-secondary">
                        Correo electrónico
                    </span>
                    <p className="text-white">
                        <a href="mailto:contacto@checkpoint.com">
                            contacto@checkpoint.com
                        </a>
                    </p>
                </div>
                <div>
                    <span className="fontRusso text-secondary">WhatsApp</span>
                    <p className="text-white">
                        <a href="tel:+5215512345678">5512345678</a>
                    </p>
                </div>
            </div>
            <RRSS />
        </footer>
    );
};

export default Footer;
