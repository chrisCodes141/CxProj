import React from 'react';
import {describe, expect, jest, test} from '@jest/globals';
import App from '../App';

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

describe('testing from App.tsx', () => {
  test('Testing from App is true', () => {
    expect(App.Testing.ThisIsTrue).toBe(true);
  })
})
