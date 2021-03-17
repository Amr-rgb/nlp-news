import { urlTest } from "../js/urlValidate";

describe('Test check url functionality', () => {
    test('Testing the urlTest function defined or not', () => {
        expect(urlTest).toBeDefined()
    })

    test('Testing the urlTest function return false for invalid url', () => {
        expect(urlTest('www.adc')).toBeFalsy()
    })

    test('Testing the urlTest function return true for valid url', () => {
        expect(urlTest('www.adc.com')).toBeTruthy()
    })
})
