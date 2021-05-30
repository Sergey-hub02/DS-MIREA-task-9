import * as fs from "fs";

import { task3 } from "./includes/tasks";
import { _INPUT_FILE_NAME, _PATH_TO_INPUT_FILE_ } from "./constants";

// Подобие стандартного потока ввода
const _STDIN_: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _INPUT_FILE_NAME, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const strLength: number = +_STDIN_;

  console.time("counting");
  const subStrings: bigint = task3(strLength);
  console.timeEnd("counting");

  console.log(`Для строки длинной ${strLength} существует ${subStrings} различных подстрок`);
}


/* Вызов основной функции с отловом ошибок */
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });
