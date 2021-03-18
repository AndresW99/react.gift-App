import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el GifExpertApp', () => {

    const wrapper = shallow( <GifExpertApp />)

    test('Tomar un snapshot del codigo.', () => {
        expect( wrapper ).toMatchSnapshot();     
    });
    
});
