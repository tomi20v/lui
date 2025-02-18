# lui-g

`lui-g` Unique Id Generator is the simplest unique id implementation with prefix support.

It maintains separate counters for each prefix, ensuring uniqueness.

`lui-g` is a recursive acronym for "Lui-g Unique Id Generator". See https://en.wikipedia.org/wiki/Recursive_acronym

## But why?

There are great unique ID generators, but they are either complex or not unique. UUID for example is great but not simple. Other implementations, those which use a timestamp, might not be unique at all when called rapidly.

`lui-g` answers these problems with no dependencies, simple api, and guaranteed uniqueness.

## Why not?

`lui-g` will obvously not work well in parallel environments, or when the sequence state must be persisted. Then don't use it.

Also, if it matters, IDs can be compared eg. which was generated first, but not directly. If that is important, don't use `lui-g`.

## Installation

```sh
npm install --save lui-g
```

## Usage

```ts
import { uniqueId } from "lui-g";

console.log(uniqueId()); // "lui-1"
console.log(uniqueId()); // "lui-2"

console.log(uniqueId("custom-")); // "custom-1"
console.log(uniqueId("custom-")); // "custom-2"

console.log(uniqueId("")); // "1"
console.log(uniqueId("")); // "2"

console.log(uniqueId()); // "lui-3"
console.log(uniqueId()); // "lui-4"
console.log(uniqueId("custom-")); // "custom-3"
```

## API

### `uniqueId(prefix?: string): string`

- **prefix** *(optional)*: A string prefix for the generated unique ID. Defaults to `"lui-"`.
- Returns a unique string ID with the given prefix.
- Each prefix maintains a separate counter.

## Testing

The library uses [Vitest](https://vitest.dev/) for testing.

```sh
npm test
```

## Dev container

Use the shipped docker.sh script to start a dev container with the project mounted. (It intentionally misses the execute bit)

```sh
bash docker.sh
```

## License

MIT

