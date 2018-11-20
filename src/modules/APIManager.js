const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(resource) {
    this.resource = resource
  }

  get(id, method) {
    return fetch(`${remoteURL}/${this.resource}/${id}`, {
      method: method
    })
    .then(data => {data.json()})

  }

  all() {
    return fetch(`${remoteURL}/${this.resource}`)
    .then(data => data.json())
  }
}

