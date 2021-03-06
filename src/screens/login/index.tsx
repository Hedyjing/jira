import React, { FormEvent } from "react";

// interface Base {
//   id: number
// }
// interface Advance extends Base {
//   name: string
// }
// const test = (p: Base) => {
// }
// // 鸭子类型(duck typing): 面向接口编程，不要求类型一样， 接口一样就可以。 但这在面向对象的java中就会报错
// const a = {id: 1, name: 'jack'}
// test(a)
const apiUrl = process.env.REACT_APP_API_URL
export const LoginScreen = () => {
  const login = (param: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(username, password);
    login({ username, password });
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" id={"username"} />
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id="password"></input>
    </div>
    <button type={"submit"}>登录</button>
  </form>
}