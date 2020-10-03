import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
    const wrapper = shallow( < GifExpertApp /> );

    test('Debe mostrarse <GifExpertApp/> correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

})