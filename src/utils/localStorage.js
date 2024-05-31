export const setTokenLocalStorage = (key, value) => {
  setCookie(key, value, { 'Secure': true });
}

export const getTokenLocalStorage = (key) => {
  return getCookie(key);
}

export const removeTokenLocalStorage = (key) => {
  deleteCookie(key);
}

// Función para establecer una cookie
const setCookie = (name, value, options = {}) => {
  const defaults = {
    path: '/',
  };
  const settings = { ...defaults, ...options };
  
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
  for (let optionKey in settings) {
    updatedCookie += "; " + optionKey;
    let optionValue = settings[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  
  console.log(`Cookie set: ${updatedCookie}`);
  document.cookie = updatedCookie;
}

// Función para obtener una cookie
const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Función para eliminar una cookie
const deleteCookie = (name) => {
  setCookie(name, "", {
    'max-age': -1
  });
}
