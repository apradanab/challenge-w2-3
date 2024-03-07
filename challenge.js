export function arrLenght(array) {
  let r = 0;
  // eslint-disable-next-line no-unused-vars
  for (const iterator of array) { 
    r++;
  }

  return r;
}

export function arrPush(array, elements) {
  const arrLength = arrLength(array);
  const elementLength = arrLength(elements);
  for (let i = 0; i < elementLength; i++) {
    array[arrLength + i] = elements[i];
  }

  const newLength = arrLength(array);
  return newLength;
}

export function arrIndexOf(array, element, start = 0) {
  let index = -1;
  const startPoint = start;
  const arrLength = arrLength(array);
  for (let i = startPoint; i < arrLength; i++) {
    if (array[i] === element) {
      index = i;
    }
  }

  return index;
}
