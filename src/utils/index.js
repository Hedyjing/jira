import {useState, useEffect } from "react"

export const isFalsy = (value) => value === 0 ? false : !value

// 在一个函数里, 改变传入的对象本身是不好的
export const cleanObject = (object) => {
  // Object.assign({}, object)
  const result = {...object}
  Object.keys(object).forEach(key => {
    // 0
    const value = object[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result;
}

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, [])
}

// 利用了闭包， log保留了timeout的值。三个log执行完后5秒后打印call
// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//       func(...param);
//     }, delay);
//   }
// }
// const log = debounce(() => console.log("call"), 5000)
// log();
// log();
// log();

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value),delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}