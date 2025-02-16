// src/index.ts
class UniqueIdGenerator {
  private counters: Map<string, number>;

  constructor() {
    this.counters = new Map();
  }

  generate(prefix: string = "lui-"): string {
    if (!this.counters.has(prefix)) {
      this.counters.set(prefix, 1);
    } else {
      this.counters.set(prefix, this.counters.get(prefix)! + 1);
    }
    return `${prefix}${this.counters.get(prefix)}`;
  }
}

const generator = new UniqueIdGenerator();

export function uniqueId(prefix?: string): string {
  return generator.generate(prefix);
}
