const remoteURL = "http://localhost:5002"

export default {
  get(id, method) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: method
    })
    .then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  }
}