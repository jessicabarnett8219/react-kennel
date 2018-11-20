const remoteURL = "http://localhost:5002"

export default {
  get(id, method) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: method
    })
    .then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(e => e.json())
  }
}