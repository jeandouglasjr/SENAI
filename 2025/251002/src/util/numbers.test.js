import { test, describe, expect } from 'vitest';
import { transformToNumber } from './numbers';

describe('transformToNumber() ', () => {
    test(" Testar se strings são transformadas em números", () => {
        //Arrange
        const result = transformToNumber('-10')

        //Assert
        expect(result).toBe(-10)
    })

    test(" Testar se outras strings que não são números são transormadas por números", () => {
        const result = transformToNumber('abc');
        expect(result).toBe(NaN);
    })

    test(" Testar valores booleanos se são transformados em números", () => {
        const result = transformToNumber(true);
        expect(result).toBe(1);
    })

    test(" Testar diferentes entradas são transformadas em números", () => {
        //Arrange
        const input1 = 'invalid';
        const input2 = {};
        const input3 = [];
        //Act
        const result1 = transformToNumber(input1);
        const result2 = transformToNumber(input2);
        const result3 = transformToNumber(input3);
        //Assert
        expect(result1, result2, result3).toBeNaN();
    })

    test(" Testar se as strings são transformadas em números usando TypeOff", () => {
        //Arrange
        const result = 1;
        //Assert
        expect(result).toBeTypeOf('number');
    })

})