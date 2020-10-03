import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
/** Para simular que use el hook */
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Goku';

    test('Se debe mostrar <GifGrid/> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar items cuando se cargan las imágenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://test.png',
            title: 'Prueba'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
})
