import * as fs from "fs";

import { task1 } from "./includes/tasks";
import { _INPUT_FILE_NAME, _PATH_TO_INPUT_FILE_ } from "./constants";

// Подобие стандартного потока ввода
const _STDIN_: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _INPUT_FILE_NAME, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const sentence: string = _STDIN_;

  console.log(`Предложение до обработки: ${sentence}`);

  console.time("label");
  console.log(`Предложение после обработки: ${task1(sentence)}`);
  console.timeEnd("label");
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
