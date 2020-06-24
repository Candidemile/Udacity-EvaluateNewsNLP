// client .js files
import { checkForName } from '../src/client/js/nameChecker';
import { handleSubmit } from '../src/client/js/formHandler';
// server .js files
import { mockRequest } from './mockRequest';
// import '../src/server index.js';
import { TestScheduler } from 'jest';

// ** TESTING ** //
describe('Client side code', () => {
    test('Test handleSubmit function', () => {
        expect(handleSubmit).toThrow('There is no event!!!');
    });

    test('Test checkForName', () => {
        expect(checkForName('Picard')).toBeTruthy();
        expect(checkForName('John')).toBeFalsy();
    });
});

describe('Server side code', () => {
    test('Test Express server', () => {});
});

// it('works with async/await', async () => {
//     expect.assertions(1);
//     const data = await mockRequest;
//     expect(data).toEqual('test message');
// });
