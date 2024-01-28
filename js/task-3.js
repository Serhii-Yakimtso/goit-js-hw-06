'use strict';
// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок,
//     який записується у приватну властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// - getValue() — повертає поточне значення приватної властивості value.

// - padEnd(str) — отримує параметр str(рядок) і додає його в кінець значення приватної
// властивості value об'єкта, який викликає цей метод.

// - padStart(str) — отримує параметр str(рядок) і додає його на початок значення приватної
// властивості value об'єкта, який викликає цей метод.

// - padBoth(str) — отримує параметр str(рядок) і додає його на початок і в кінець значення
// приватної властивості  value об'єкта, який викликає цей метод.

console.log('===== task-3 =====');
class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    const arr = this.#value.split('');
    arr.push(str);

    this.#value = arr.join('');
  }

  padStart(str) {
    const arr = this.#value.split('');
    arr.unshift(str);

    this.#value = arr.join('');
  }

  padBoth(str) {
    const arr = this.#value.split('');
    arr.unshift(str);
    arr.push(str);

    this.#value = arr.join('');
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
console.log('==================');
console.log('===== bonus for task-3 =====');
builder.padStart('\\../,_(');
builder.padEnd(')_,\\../');

console.log(builder.getValue()); // "."

console.log('==================');
