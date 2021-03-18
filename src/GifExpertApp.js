import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ( { titulo } ) => {

    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h2 className="Gifs">Gifs finder App with:</h2>
            <h2 className="titulo"> { titulo }</h2> 
            <h3 className="Sub">Developed and designed by: Andres Wellmann.</h3>

            <hr />
           
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