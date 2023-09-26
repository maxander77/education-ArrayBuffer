import ArrayBufferConverter from "../app";

test('it should convert a loader buffer to a string', () => {
  const converter = new ArrayBufferConverter();
  const buffer = new ArrayBuffer(10);
  const bufferView = new Uint16Array(buffer);
  bufferView[0] = 72;
  bufferView[1] = 101;
  bufferView[2] = 108;
  bufferView[3] = 108;
  bufferView[4] = 111;

  converter.load(buffer);

  const result = converter.toString();

  expect(result).toBe('Hello');
});

test('it should throw an error when trying to convert an empty buffer', () => {
  const converter = new ArrayBufferConverter();

  expect(() => converter.toString()).toThrow('Buffer is empty');
});

test('it should convert a buffer to a string', () => {
  const converter = new ArrayBufferConverter();
  const inputString = 'Hello';
  const buffer = new ArrayBuffer(inputString.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < inputString.length; i++) {
    bufferView[i] = inputString.charCodeAt(i);
  }

  converter.load(buffer);
  const result = converter.toString();

  expect(result).toEqual('Hello');
});