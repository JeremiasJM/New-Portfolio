import React, { useState } from "react";
import "./services.css"



const Services=()=>{
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Lo que ofrezco</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Desarrollo y <br />Diseño Web</h3>
                    </div>

                    <span onClick={()=> toggleTab(1)} className="services__button"> View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Desarrollo y Diseño Web</h3>
                            <p className="services__modal-description"> Desarrollo de sitios web funcionales y atractivos utilizando HTML, CSS, JavaScript y React.js, con enfoque en la creación de interfaces interactivas y receptivas.</p>
                             
                            <ul className="service-_modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de sitios web utilizando HTML, CSS, JavaScript y React.js.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño responsivo para garantizar la visualización adecuada en diferentes dispositivos.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimización de rendimiento para mejorar la velocidad y eficiencia del sitio.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Integración de API para agregar funcionalidades externas al sitio web.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Control de versiones y <br />Mantenimiento</h3>
                    </div>

                    <span onClick={()=> toggleTab(2)} className="services__button"> View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Control de versiones y mantenimiento</h3>
                            <p className="services__modal-description"> Gestión del código fuente utilizando Git y GitHub para control de versiones, facilitando la colaboración y el seguimiento de cambios. Mantenimiento continuo y actualizaciones del sitio web para garantizar su correcto funcionamiento y seguridad.</p>
                            
                            <ul className="service-_modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Utilización de Git y GitHub para controlar y gestionar el código fuente del proyecto.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mantenimiento continuo y actualizaciones para asegurar el funcionamiento y seguridad del sitio web.</p>
                                </li>

                            
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Services