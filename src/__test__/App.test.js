// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { randomStrings } from '../App';
const string = 'string';

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

describe('Probar la funcionalidadde App', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof (randomStrings())).toBe(string);
  });

  test('Comprobar que no existe una ciudad', () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });

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
});
