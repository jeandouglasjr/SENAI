import { describe, it, expect } from 'vitest';
import {
  adicionar,
  subtrair,
  multiplicar,
  dividir
} from '../src/calculadora';

describe('Calculadora', () => {
  it('deve adicionar dois números', () => {
    expect(adicionar(2, 3)).toBe(5);
  });

  it('deve subtrair dois números', () => {
    expect(subtrair(5, 2)).toBe(3);
  });

  it('deve multiplicar dois números', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  it('deve dividir dois números', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida.');
  });
});
