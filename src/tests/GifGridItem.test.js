import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';


describe('Testeo del componente GifGridItem', () => {
    
    const title = 'Avengers';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('Debe tomar un SnapShot del componente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener la imagen igual al url y al alt de los props ', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('debe de tener animate__fadeInDown', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeInDown') ).toBe( true );
        
    })
    
});
