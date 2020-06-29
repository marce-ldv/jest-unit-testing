// import { shallow } from 'enzyme';

const text = 'Hola Mundo';
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Boolean', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un callback', () => {
  reverseString('hola', (str) => {
    expect(str).toBe('aloh');
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if(!str){
      reject(Error('Error'))
    }

    resolve(
      str.split('').reverse().join('')
    )
  });
};

test('Testear promesa', () => {
  return reverseString2('hola')
    .then(string => {
      expect(string).toBe('aloh');
    });
});

test('Testear promesa async await', async () => {
  const response = await reverseString2('hola')
  // console.log('res', response)
  expect(response).toBe('aloh');
});

afterEach(() => {
  console.log('Despues de cada prueba')
})

afterAll(() => {
  console.log('Despues de todas las pruebas')
})

beforeEach(() => {
  console.log('Antes de cada prueba')
})

beforeAll(() => {
  console.log('Antes de todas las pruebas')
})