import React from 'react';
import  { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';


describe('Pruebas en el AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    
    beforeEach( () => {
       jest.clearAllMocks();
       wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });
    
    test('debe de mostrar correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } } );
        
    });

    test('NO debe de postear la informacion del submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar al setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        
        //Simular el inputChange
        input.simulate('input').simulate('change', { target: { value } } );
        
        //simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        
        //setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        
        //el valor del input debe ser ''.
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
});
