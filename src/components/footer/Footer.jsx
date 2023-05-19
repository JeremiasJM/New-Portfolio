import React from "react";
import "./footer.css"

const Footer= ()=>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Jeremias</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Inicio</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Proyectos</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">Sobre Mi</a>
                    </li>
                </ul>

                <div className="footer__social">

                <a href="https://www.instagram.com/jeremiasjm98/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/jeremiasjm/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://twitter.com/JuarezMarrades" className="footer__social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
                </div>

                <span className="footer__copy">&#169; 2023, Jeremías Juárez Marrades. Todos los derechos reservados.</span>
            </div>

        </footer>
    )
}

export default Footer