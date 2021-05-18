import * as fs from "fs";

import { findFirst } from "./includes/tasks";
import { _INPUT_FILE_NAME, _PATH_TO_INPUT_FILE_ } from "./constants";

// Подобие стандартного потока ввода
const _STDIN_: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _INPUT_FILE_NAME, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const [sentence, substring] = _STDIN_.split("\n");
  const first: number = findFirst(sentence, substring);

  console.log(`Предложение: ${sentence}`);
  console.log(`Нужно найти: ${substring}`);

  console.log(`Индекс: ${first}`);
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
