import React from "react";
import Frontend from "./Frontend";


const Skills=()=>{
    return(
        <section className="skills section " id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">Mi nivel Tecnico</span>

                <div className="skills__container container grid">
                    <Frontend/>
              

                </div>
        </section>
    )
}

export default Skills