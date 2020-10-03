import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs helper', () => {
    test('Debe traer 10 elementos ', async() => {
        const gifs = await getGifs('Rick and Morty');
        expect(gifs.length).toBe(10);
    });

    test('Debe traer 0 elementos ', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
})