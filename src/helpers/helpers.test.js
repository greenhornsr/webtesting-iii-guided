import {savePerson, save} from './helpers';

// this is 1 of 2 options for using mock.  
    // This mock is local to this test file, the __mock__ is global and is an option as well.  
    // With this active, both are running
jest.mock('uuid', () => {
    return () => 'def456';
});

describe('helpers', () => {
    it('should return newly saved person', () => {
        const name = 'steve';
        const expected = {id: 'def456', name}

        const actual = savePerson(name);

        expect(actual).toEqual(expected);
    })
})

describe('spies', () => {
    it('reports usage', () => {
        // spy function called bond in this case
        const bond = jest.fn();

        // checking save function, but using bond in place of callback function to test that save actually calls callback.
        save('charles', bond)

        expect(bond).toHaveBeenCalled();
        expect(bond).toHaveBeenCalledTimes(2);
        expect(bond).toHaveBeenCalledWith('charles');
        expect(bond).toHaveBeenNthCalledWith(1, 'charles');
        expect(bond).toHaveBeenNthCalledWith(2, 'charles, james');

    });
}); 