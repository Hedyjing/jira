import {useState, useEffect } from "react"

export const isFalsy = (value: unknown) => value === 0 ? false : !value

// 在一个函数里, 改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
  // Object.assign({}, object)
  const result = {...object}
  Object.keys(object).forEach(key => {
    // @ts-ignore
    const value = object[key]
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key]
    }
  })
  return result;
}

export const useMount = (callback: () => void) => {
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

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后, 设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value),delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}
export const useArray = <V>(arrs: V[]) => {
  // hello，请把作业写在这里吧，写完记得再对照作业要求检查一下
  const [value, setValue] = useState(arrs);
  return {
    value,
    setValue,
    clear:  () => {
      setValue([]);
    },
    add: (v: V) => {
      setValue([...value, v]);
    },
    removeIndex: (index: number) => {
      let newValue = [...value];
      newValue.splice(index, 1)
      setValue(newValue);
    }
  };
};