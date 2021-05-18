/**
 * Возвращает индекс первого вхождения подстроки. Если такой подстроки нет, то возвращается отрицательное значение
 * @param str           строка, в которой происходит поиск
 * @param substr        подстрока
 */
export const findFirst = (str: string, substr: string): number => {
  for (let i: number = 0; i < str.length - substr.length + 1; ++i) {
    const sub: string = str.substr(i, substr.length);

    if (sub === substr) {
      return i;
    }
  }

  return -1;
}
