function setStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getStorage(key) {
  return localStorage.getItem(key);
}

function rmStorage(key) {
    localStorage.removeItem(key);
}

export {
    setStorage,
    getStorage,
    rmStorage
}