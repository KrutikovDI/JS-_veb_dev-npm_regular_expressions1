import Validator from './main.js';

test('Проверка корректного имени', () => {
  const nameUser = new Validator('Viktor99Sport');
  expect(nameUser.validateUsername()).toBe(true);
}),

test('Проверка на присутствие запрещенных символов', () => {
  const nameUser = new Validator('Viktor#Sport');
  expect(() => nameUser.validateUsername()).toThrow('Зарпещенные символы в имени');
}),

test('Проверка на наличие символов перед именем', () => {
  const nameUser = new Validator('_ViktorSport');
  expect(() => nameUser.validateUsername()).toThrow('Начало имени не соответствует формату');
}),

test('Проверка на наличие более трех цифр подряд в имени', () => {
  const nameUser = new Validator('Viktor6666Sport');
  expect(() => nameUser.validateUsername()).toThrow('Более трех цифр подряд в имени');
}),

test('Проверка на наличие цифр в конце имени', () => {
  const nameUser = new Validator('ViktorSport99');
  expect(() => nameUser.validateUsername()).toThrow('Окончание имени не соответствует формату');
})