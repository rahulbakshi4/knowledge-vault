import React from 'react'
import {useState}  from 'react';
import VaultDB from './VaultDB';

const Category = () => {


    const [selectedCategory, setCategory] = useState("Newsletter")

    function categoryClickHandler (category){
        setCategory(category)
    }


    return (
        <div className="btn-category">
        <div>
        {Object.keys(VaultDB).map((category)=>(
            <button className="btn" onClick={()=> categoryClickHandler(category)}>
                {category}
            </button>
        ))}

        <div>
        <ul className="resource-list">
                {VaultDB[selectedCategory].map((resource) => (
                    <li key={resource.name}>

                    <div className="res-title">{resource.name}</div>
                    <div className="res-desc">{resource.desc}</div>
                    <div className="res-link"><a href={resource.link}>{resource.action}</a></div>
                    </li>
                ))}
            </ul>
        </div>

            </div>

        </div>
        
    )
}

export default Category
