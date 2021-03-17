import { formSubmit } from './../js/formSubmit'

describe('Client Test', () => {
    test('Testing the formSubmit function defined or not', () => {
        expect(formSubmit).toBeDefined()
    })
})
