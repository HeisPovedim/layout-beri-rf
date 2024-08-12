import { StorageKeys } from "@config/local-storage/localStorageKeys";

export const getStoredData = <T>(key: StorageKeys): T | null => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const setStoredData = <T>(key: StorageKeys, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearStoredData = (key: StorageKeys): void => {
  localStorage.removeItem(key);
};
