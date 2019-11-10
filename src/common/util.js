function setStorage(key, val) {
    localStorage.setItem(key, val);
}

function getStoragee(key) {
  return localStorage.getItem(key);
}

function rmStorage(key) {
    localStorage.removeItem(key);
}

export default {
    setStorage,
    getStoragee,
    rmStorage
}