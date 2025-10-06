import { test, describe, expect } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
    test(" Testar se pá ", () => {
        //Arrange
        const input1 = '';
        const input2 = ' ';
        //Act
        const result = validateStringNotEmpty()
        //Assert
        expect(result).toThrowError()
    })
})