// Archivo: test.js

const miFuncion = require('./miModulo');

test('La función suma correctamente dos números', () => {
    expect(miFuncion.sumar(2, 3)).toBe(5);
});

test('La función devuelve un resultado válido para casos especiales', () => {
    expect(miFuncion.manipularCasoEspecial()).toBeTruthy();
});
