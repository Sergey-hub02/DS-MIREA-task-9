/**
 * Возвращает индекс первого вхождения подстроки. Если такой подстроки нет, то возвращается отрицательное значение
 * @param str           строка, в которой происходит поиск
 * @param substr        подстрока
 */
const findFirst = (str: string, substr: string): number => {
  const words: Array<string> = str.split(" ");

  for (let i: number = 0; i < words.length; ++i) {
    if (words[i] === substr) {
      return i;
    }
  }

  return -1;
}


/**
 * Возвращает индекс последнего вхождения подстроки. Если такой подстроки нет, то возвращается отрицательное значение
 * @param str          строка, в которой происходит поиск
 * @param substr       подстрока
 */
const findLast = (str: string, substr: string): number => {
  const words: Array<string> = str.split(" ");

  for (let i: number = words.length - 1; i >= 0; --i) {
    if (words[i] === substr) {
      return i;
    }
  }

  return -1;
}


/**
 * Удаляет слова в предложении, встретившиеся более одного раза
 * @param str       предложение
 */
export const task1 = (str: string): string => {
  return str
    .split(" ")
    .filter((word: string) => findFirst(str.toLowerCase(), word.toLowerCase()) === findLast(str.toLowerCase(), word.toLowerCase()))
    .join(" ");
}
