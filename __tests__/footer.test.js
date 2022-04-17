/* eslint-disable no-console */
/* eslint-disable no-undef */
import Footer from '../src/footer/footer';

test('Hello() should return something', () => {
  const result = Footer();
  console.log(result);
  expect(result).toBeTruthy();
  expect(result.props.sourceCode).toBe('https://github.com/helloShen/#');
  expect(result.props.githubLogo).toBe('black');
});
