export function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function randomChar(): string {
  return String.fromCharCode(randomInteger(97, 122));
}

export function randomString(length: number): string {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += randomChar();
  }
  return string;
}
