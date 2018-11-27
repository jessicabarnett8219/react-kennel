import APIManager from "./APIManager"
const remoteURL = "http://localhost:5002"


class AnimalManager extends APIManager {
getAll() {
  return this.all()
}
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    })
  }
}

export default new AnimalManager("animals")

