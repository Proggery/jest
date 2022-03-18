const { osszeadas, kivonas, nulla, ekezetesKarakter } = require('./fuggvenyek');

test('53 + 2 eredmény 55', () => {
    expect(osszeadas(53, 2)).toBe(55);
});

test('42 - 2 eredmény 40', () => {
  expect(kivonas(42, 2)).toBe(40)
})

test('a szám csak 0 lehet', () => {
  expect(nulla(0)).not.toBe(2)
})

test('ékezetes betű lecserélése', () => {
  expect(ekezetesKarakter("sörös")).toEqual({index: 2, newText: "soros"})
})