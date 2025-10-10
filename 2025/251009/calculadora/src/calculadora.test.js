import { describe, it, expect } from 'vitest';
import {
  adicionar,
  subtrair,
  multiplicar,
  dividir
} from '../src/calculadora';

// Suite de testes para adição
describe('Função adicionar', () => {
  it('deve retornar 5 para 2 + 3', () => {
    expect(adicionar(2, 3)).toBe(5);
  });

  it('deve retornar -1 para 2 + (-3)', () => {
    expect(adicionar(2, -3)).toBe(-1);
  });

  it('deve retornar 0 para 0 + 0', () => {
    expect(adicionar(0, 0)).toBe(0);
  });

  it('deve retornar 10.5 para 5.2 + 5.3', () => {
    expect(adicionar(5.2, 5.3)).toBeCloseTo(10.5);
  });

  it('deve retornar -10 para -7 + (-3)', () => {
    expect(adicionar(-7, -3)).toBe(-10);
  });
});

// Suite de testes para subtração
describe('Função subtrair', () => {
  it('deve retornar 3 para 5 - 2', () => {
    expect(subtrair(5, 2)).toBe(3);
  });

  it('deve retornar -1 para 2 - 3', () => {
    expect(subtrair(2, 3)).toBe(-1);
  });

  it('deve retornar 0 para 0 - 0', () => {
    expect(subtrair(0, 0)).toBe(0);
  });

  it('deve retornar 1.1 para 5.5 - 4.4', () => {
    expect(subtrair(5.5, 4.4)).toBeCloseTo(1.1);
  });

  it('deve retornar -4 para -2 - 2', () => {
    expect(subtrair(-2, 2)).toBe(-4);
  });
});

// Suite de testes para multiplicação
describe('Função multiplicar', () => {
  it('deve retornar 12 para 4 * 3', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  it('deve retornar 0 para qualquer número * 0', () => {
    expect(multiplicar(999, 0)).toBe(0);
  });

  it('deve retornar -15 para -5 * 3', () => {
    expect(multiplicar(-5, 3)).toBe(-15);
  });

  it('deve retornar 25 para -5 * -5', () => {
    expect(multiplicar(-5, -5)).toBe(25);
  });

  it('deve retornar 6.25 para 2.5 * 2.5', () => {
    expect(multiplicar(2.5, 2.5)).toBeCloseTo(6.25);
  });
});

// Suite de testes para divisão
describe('Função dividir', () => {
  it('deve retornar 5 para 10 / 2', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it('deve retornar -2 para 6 / -3', () => {
    expect(dividir(6, -3)).toBe(-2);
  });

  it('deve retornar 2.5 para 5 / 2', () => {
    expect(dividir(5, 2)).toBeCloseTo(2.5);
  });

  it('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida.');
  });

  it('deve retornar 0 para 0 / 5', () => {
    expect(dividir(0, 5)).toBe(0);
  });
});
