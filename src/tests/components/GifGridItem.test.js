import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Prueba';
    const url = 'https://prueba.png';
    
    let wrapper = shallow(<GifGridItem title={ title } url={ url } />); /** Por el Intellicense */

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={ title } url={ url } />);
    });

    test('Debe mostrar <GifGridItem/> correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('Debe tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe tener animate__flash ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__flash')).toBe(true);
    });
    
})
