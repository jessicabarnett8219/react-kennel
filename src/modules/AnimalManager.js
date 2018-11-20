const remoteURL = "http://localhost:5002"

export default {
  get(id, method) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: method
    })
    .then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  }
}