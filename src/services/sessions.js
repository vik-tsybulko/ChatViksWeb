import { API_URL } from "../utils/constants";

export function login(data) {
  let body = new FormData();
  Object.keys(data).forEach(key => body.append(key, data[key]));
  return new Promise((resolve, reject) => {
    fetch(`${ API_URL }/login`, { body: body, method: 'POST' })
      .then(res => {
        switch (res.status) {
          case 200:
            res.json().then(response => {
              document.cookie = `session_token=${ response.session_token }`
            });
            resolve(true);
            break;
          default:
            reject();
            console.log('err');
            break;
        }
      })
      .catch(err => {

      })

  });
}

export function check() {
  return new Promise((resolve, reject) => {
    fetch(`${ API_URL }/check`, { method: 'GET', credentials: "include" })
      .then(res => {
        res.status === 204
        ?
          resolve(true)
          :
          reject(false)
      })
  })


}

export function logout() {
}
