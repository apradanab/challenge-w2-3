import { 
  arrLength, 
  arrPush, 
  arrIndexOf 
} from "./challenge";


describe.only('arrLenght', () => {
  test('should be 0 when argument is []', () =>{
    const x = [];
    const expected = 0;
    const result = arrLength(x);
    expect(result).toBe(expected);
  });
  test('should be 1 when argument is [1]', () =>{
    const x = [1];
    const expected = 1;
    const result = arrLength(x);
    expect(result).toBe(expected);
  });
    test('should be 3 when argument is [3, 3, 3]', () =>{
    const x = [3, 3, 3];
    const expected = 3;
    const result = arrLength(x);
    expect(result).toBe(expected);
  });
     test('should be 3 when argument is [false, false, false]', () =>{
    const x = [false, false, false];
    const expected = 3;
    const result = arrLength(x);
    expect(result).toBe(expected);
  });
       test('should be 3 when argument is [undefined, undefined, undefined]', () =>{
    const x = [undefined, undefined, undefined];
    const expected = 3;
    const result = arrLength(x);
    expect(result).toBe(expected);
  });
});

describe('arrayPush', () => {
  test('it should return 3 when array is [1,2] and element is 3', () => {
    const x = [1, 2];
    const y = 3;
    const expected = 3;
    const result = arrPush(x, y);
    expect(result).toBe(expected);
  });
  test('it should return 5 when array is [1,2] and element is 3,4,5', () => {
    const x = [1, 2];
    const y = 3;
    const z = 4;
    const a = 5;
    const expected = 5;
    const result = arrPush(x, y, z, a);
    expect(result).toBe(expected);
  });
  test('it should return 2 when array is [1,2] and there is no element', () => {
    const x = [1, 2];
    const expected = 2;
    const result = arrPush(x);
    expect(result).toBe(expected);
  });
  test('it should return 3 when array is [] and element is [1,2,3]', () => {
    const x = [];
    const y = 1;
    const z = 2;
    const a = 3;
    const expected = 3;
    const result = arrPush(x, y, z, a);
    expect(result).toBe(expected);
  });
});

describe('arrIndexOf', () => {
  test('it should return 3 when array is [1,2,3,4,5] and element is 4', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 4;
    const expected = 3;
    const result = arrIndexOf(x, y);
    expect(result).toBe(expected);
  });
  test('it should return -1 when array is [1,2,3,4,5] and element is 6', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 6;
    const expected = -1;
    const result = arrIndexOf(x, y);
    expect(result).toBe(expected);
  });
  test('it should return -1 when array is [1,2,3,4,5], element is 1 ans start is 1', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 1;
    const z = 1;
    const expected = -1;
    const result = arrIndexOf(x, y, z);
    expect(result).toBe(expected);
  });
});
