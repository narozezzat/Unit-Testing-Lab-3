import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  const pipe = new TestPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('test if number is passed return number+4', () => {
    expect(pipe.transform(4)).toBe(8);
  });
  it('test if non number is passed return error massage', () => {
    expect(pipe.transform('fatma')).toEqual('Not a number');
  });
});
