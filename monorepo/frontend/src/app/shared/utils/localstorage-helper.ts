type StorageKey = string;

export const setValueToLocalStorage = <T>(key: StorageKey, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getValueFromLocalStorage = <T>(key: StorageKey): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) as T : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const setValueToSessionStorage = <T>(key: StorageKey, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getValueFromSessionStorage = <T>(key: StorageKey): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) as T : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};