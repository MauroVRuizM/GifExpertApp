import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Saitama']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map(data => (
                    <GifGrid
                    key={ data }
                    category={ data } 
                    />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;