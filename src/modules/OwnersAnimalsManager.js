import APIManager from "./APIManager"


class OwnersAnimalsManager extends APIManager {
}

export default new OwnersAnimalsManager("owners_animals")

// const remoteURL = "http://localhost:5002"

// export default {
//   get(id, method) {
//     return fetch(`${remoteURL}/owners_animals/${id}/?_expand=owner&_expand=animal`, {
//       method: method
//     })
//     .then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/owners_animals/?_expand=owner&_expand=animal`)
//     .then(e => e.json())
//   }
// }
