export const setTokenLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getTokenLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const removeTokenLocalStorage = (key) => {
  localStorage.removeItem(key)
}
