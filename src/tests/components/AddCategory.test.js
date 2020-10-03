import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> ); /** Por el Intellicense */

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe mostrar en componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola';
        input.simulate('change', { target: { value } });
    });
    
    test('No debe enviar información en submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llamar a setCategories y limpiar la caja de texto ', () => {
        const value = 'Hola';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
})