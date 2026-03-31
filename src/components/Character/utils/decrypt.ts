const getSubtle = (): SubtleCrypto => {
  const subtle =
    (typeof window !== "undefined" && window.crypto?.subtle) ||
    (typeof globalThis !== "undefined" && globalThis.crypto?.subtle);
  if (!subtle) {
    throw new Error(
      "Web Crypto API (crypto.subtle) is unavailable. Ensure the page is served over HTTPS or localhost."
    );
  }
  return subtle;
};

async function generateAESKey(password: string): Promise<CryptoKey> {
  const subtle = getSubtle();
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await subtle.digest("SHA-256", passwordBuffer);
  return subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const subtle = getSubtle();
  const response = await fetch(url);
  const encryptedData = await response.arrayBuffer();
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  return subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};
