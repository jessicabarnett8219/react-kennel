const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(resource) {
    this.resource = resource
  }

  get(id, method, ...search) {
    return fetch(`${remoteURL}/${this.resource}/${id}${search}`, {
      method: method
    })
    .then(data => {data.json()})

  }

  all(...search) {
    return fetch(`${remoteURL}/${this.resource}${search}`)
    .then(data => data.json())
  }
}

