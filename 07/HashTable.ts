export class HashTable {
  size: number;
  table: Map<number, any>;
  constructor() {
    this.size = 0;
    this.table = new Map<number, any>();
  }
  private hash(key: number | string): number {
    let sum: number = 0,
      mul: number = 0;
    const k = String(key);
    for (let i = 0; i < k.length; i++) {
      mul = i % 4 === 0 ? 1 : mul * 256;
      sum += k.charCodeAt(i) * mul;
    }
    return Math.abs(sum % 100);
  }
  set(key: string | number, value: any): void {
    const index = this.hash(key);
    this.table.set(index, value);
    this.size++;
  }
  get(key: string | number): number {
    const index = this.hash(key);
    return this.table.get(index);
  }
  del(key: string): void {
    const index = this.hash(key);
    if (this.table.get(index)) {
      this.table.set(index, undefined);
      this.size--;
    }
  }
  show() {
    this.table.forEach((value, key) => {
      console.log(`${key} : ${value}`);
    });
  }
}