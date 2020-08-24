import React from 'react';
import { getGifs } from '../../helpers/getGifs';
import '@testing-library/jest-dom';


describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('Overwatch');

        expect( gifs.length ).toBe( 10 );
    });

});
