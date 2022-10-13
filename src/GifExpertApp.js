import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Taylor Swift"]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( category =>
                    <GifGrid
                        key={ category }
                        category = {category}/>
                )
            }
        </>
    )
}

