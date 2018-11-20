const remoteURL = "http://localhost:5002"

export default {
  get(id, method) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: method
    })
    .then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  }
}