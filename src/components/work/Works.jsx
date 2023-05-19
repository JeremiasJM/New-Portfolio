import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works=()=>{
    const [item,setItem]= useState({name:"all"});
    const [projects, setPorjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        if(item.name === "all"){
            setPorjects(projectsData);
        }
        else{
            const newProjects= projectsData.filter((project)=>{
                return project.category.toLowerCase() === item.name;
            })
            setPorjects(newProjects)
        }
    },[item]);

    const handleClick=(e,index)=>{
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    };


    return(
        <div>
            <div className="work__filters">
            {projectsNav.map((item,index)=>{
                return(
                    <span 
                    onClick={(e)=>{handleClick(e,index)}} 
                    className={`${active===index? 'active-work' : '}'} work__item`} 
                    key={index}>
                        {item.name} 
                    </span>
                )
            })}
        </div>
        <div className="work__container container grid">
            {projects.map((item)=>{
                return <WorkItems item={item} key={item.id} />
            })}
        </div>
        </div>
    )
}

export default Works