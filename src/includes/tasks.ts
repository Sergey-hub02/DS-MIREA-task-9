/**
 * Возвращает индекс первого вхождения подстроки. Если такой подстроки нет, то возвращается отрицательное значение
 * @param str           строка, в которой происходит поиск
 * @param substr        подстрока
 */
const findFirst = (str: string, substr: string): number => {
  for (let i: number = 0; i < str.length - substr.length + 1; ++i) {
    const sub: string = str.substr(i, substr.length);

    if (sub === substr) {
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
  for (let i: number = str.length - 1; i >= substr.length - 1; --i) {
    const subStartIndex: number = i - substr.length + 1;
    const sub: string = str.substr(subStartIndex, substr.length);

    if (sub === substr) {
      return subStartIndex;
    }
  }

  return -1;
}


/**
 * Префикс-функция для алгоритма Кнута-Мориса-Пратта
 * @param str 
 */
const prefixFunction = (str: string): Array<number> => {
  const N: number = str.length;
  let prefix: Array<number> = new Array(N);

  for (let i: number = 1; i < N; ++i) {
    let prevPrefix: number = prefix[i - 1];

    while ((prevPrefix > 0) && (str[i] !== str[prevPrefix])) {
      prevPrefix = prefix[prevPrefix - 1];
    }

    if (i === prevPrefix) {
      ++prevPrefix;
    }

    prefix[i] = prevPrefix;
  }

  return prefix;
}


/**
 * Считает факториал для заданного числа
 * @param n           число, факториал которого нужно вычислить
 */
const factorial = (n: number): bigint => {
  let fact: bigint = 1n;

  for (let i: number = 2; i <= n; ++i) {
    fact *= BigInt(i);
  }

  return fact;
}


/**
 * Подсчитывает число размещений из n элементов по k
 * @param n         количество элементов во множестве
 * @param k         количество элементов в комбинации
 */
const countPlacements = (n: number, k: number): bigint => {
  return factorial(n) / factorial(n - k);
}


/**
 * Реализует алгоритм Кнута-Мориса-Пратта
 * @param str           строка, в которой происходит поиск
 * @param substr        подстрока
 */
export const knuthMorisPratt = (str: string, substr: string): number => {
  let k: number = 0;
  let index: number = -1;
  let prefixArray: Array<number> = prefixFunction(substr);

  for (let i: number = 0; i < str.length; ++i) {
    while (k > 0 && substr[k] !== str[i]) {
      k = prefixArray[k - 1];
    }

    if (substr[k] === str[i]) {
      ++k;
    }

    if (k === substr.length) {
      index = i - substr.length + 1;
      break;
    }
  }

  return index;
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


/**
 * Удаляет из предложения str все вхождения слова word, используя для поиска слова в тексте алгоритм Кнута-Мориса-Пратта
 * @param str           строка, в которой всё происходит
 * @param word          удаляемое слово
 */
export const task2 = (str: string, word: string): string => {
  for (let i: number = 0; i < str.length; ++i) {
    const result: number = knuthMorisPratt(str, word);

    if (result >= 0) {
      str = str.slice(0, result) + str.slice(result + word.length, str.length);
      continue;
    }
  }

  return str;
}


/**
 * Возвращает количество различных подстрок строки длинной length
 * @param length        количество символов в строке
 */
export const task3 = (length: number): bigint => {
  let countSubStrings: bigint = BigInt(length);

  for (let k: number = 2; k <= length; ++k) {
    countSubStrings += countPlacements(length, k);
  }

  return countSubStrings;
}
