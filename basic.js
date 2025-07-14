import { decodeCandid } from "../dist/esm/candidDecoder.js";
import { fieldNames } from "../dist/esm/candidFieldNames.js";

// Your Candid-encoded data as Uint8Array
const candidBytes = new Uint8Array([
  0x44, 0x49, 0x44, 0x4c, 0x01, 0x6c, 0x02, 0xd3, 0xe3, 0xaa, 0x02, 0x7e, 0x86,
  0x8e, 0xb7, 0x02, 0x7c, 0x01, 0x00, 0x01, 0x2a,
]);

// Decode without field names
const result1 = decodeCandid(candidBytes);

console.log("Decoded without field names:", result1);

// Decode with field names (optional for nicer output)
const result2 = decodeCandid(candidBytes, fieldNames);

console.log("Decoded with field names:", result2);
