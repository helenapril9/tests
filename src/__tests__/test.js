import { checkHealth } from '../health';

test('checkHealth', () => {
  const person = { name: 'Маг', health: 90 };
  const result = checkHealth(person.health);
  expect(result).toBe('healthy');
});
test('checkHealth', () => {
  const person = { name: 'Маг', health: 14 };
  const result = checkHealth(person.health);
  expect(result).toBe('critical');
});
test('checkHealth', () => {
  const person = { name: 'Маг', health: 40 };
  const result = checkHealth(person.health);
  expect(result).toBe('wounded');
});
