export function uint8ArrayToHex(array: Uint8Array): string {
  return Array.from(array)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function base64decode(base64: string): Uint8Array {
  const bin = atob(base64);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return bytes;
}

export function base64encode(bytes: Uint8Array | number[]): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export const JSONstringify = (obj: any, indent?: number): string => {
  return JSON.stringify(obj, jsonBigintReplacer, indent);
};

export const jsonBigintReplacer = (key: string, value: any): any => {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
};
