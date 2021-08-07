import React from 'react'
import {useState}  from 'react';
import VaultDB from './VaultDB';

const Category = () => {


    const [selectedCategory, setCategory] = useState("Podcasts")

    function categoryClickHandler (category){
        setCategory(category)
    }


    return (
        <div className="btn-category">
        <div>
        {Object.keys(VaultDB).map((category)=>(
            <button onClick={()=> categoryClickHandler(category)}>
                {category}
            </button>
        ))}

        <div>
        <ul className="resource-list">
                {VaultDB[selectedCategory].map((resource) => (
                    <li key={resource.name}>{" "}

                    <div>{resource.name}</div>
                    <div>{resource.desc}</div>
                    <div><a href={resource.link}>Check it out</a></div>
                    </li>
                ))}
            </ul>
        </div>

            </div>

        </div>
        
    )
}

export default Category
