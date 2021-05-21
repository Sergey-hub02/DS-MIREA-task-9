import * as fs from "fs";

import { task2 } from "./includes/tasks";
import { _INPUT_FILE_NAME, _PATH_TO_INPUT_FILE_ } from "./constants";

// Подобие стандартного потока ввода
const _STDIN_: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _INPUT_FILE_NAME, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const [sentence, word] = _STDIN_.split("\n");

  console.log(`Изначальное предложение: ${sentence}`);
  console.log(`После удалений: ${task2(sentence, word)}`);
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
