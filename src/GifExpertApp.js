import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ( { titulo } ) => {

    const [categories, setCategories] = useState(['Overwatch']);

    return (
        <>
            <h2> { titulo }</h2> 
           
            <AddCategory setCategories={ setCategories }/>
           
            <hr /> 

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

GifExpertApp.propTypes = {
    titulo: PropTypes.string
}



export default GifExpertApp;