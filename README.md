# candid-decoder

**Typeless Candid decoder for the Internet Computer blockchain written in TypeScript.**

This library allows you to decode Candid-encoded data without knowing the type of the encoded data in advance.  
It is lightweight, pure TypeScript, and designed to be easy to integrate into your Internet Computer projects.

## Should I use this?

Only use this if you really don't have access to a type definition at the time of decoding.

If you have access to the expected type or need to encode values, use [@dfinity/candid](https://github.com/dfinity/agent-js/tree/main/packages/candid) or another [Candid implemention](https://github.com/dfinity/awesome-internet-computer?tab=readme-ov-file#candid-implementations).

## Features

- Decode Candid values without predefined schemas  
- Provided a lookup table for common field names
- For unknown field names, the hash value is shown (e.g. `_3984259910`)
- Supports common Candid types including records, variants, principals, and more  
- Written in TypeScript with type declarations included
- No runtime dependencies except `@dfinity/principal`

## Installation

```bash
npm install candid-decoder @dfinity/principal
```

## Usage

```ts
import { decodeCandid } from "candid-decoder";
import { fieldNames } from "candid-decoder/candidFieldNames"; // optional

// Your Candid-encoded data as Uint8Array
const candidBytes = new Uint8Array(
  [0x44,0x49,0x44,0x4C,0x01,0x6C,0x02,0xD3,0xE3,0xAA,0x02,0x7E,0x86,0x8E,0xB7,0x02,0x7C,0x01,0x00,0x01,0x2A]
);

// Decode without field names
const result1 = decodeCandid(candidBytes);

console.log("Decoded without field names:", result1);

// Decode with field names (optional for nicer output)
const result2 = decodeCandid(candidBytes, fieldNames);

console.log("Decoded with field names:", result2);
```

## Candid field name lookup table

Candid uses hashed field names.
To show the user likely names of the original candid, a lookup table is generated. 

The resulting names are not guaranteed to map to unique hashes, so they might not match the original candid field names!

```bash
find .. -name "*.did" -exec cat {} \; | grep -E '^\s*[a-zA-Z_][a-zA-Z0-9_]*\s*:' | sed -E 's/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:.*$/\1/' | sort | uniq > ./src/frontend/identify/candidFieldNames.txt

node ./generateFieldNames.js
```
