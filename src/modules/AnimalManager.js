import APIManager from "./APIManager"

class AnimalManager extends APIManager {
getAll() {
  return this.all()
}
  post(newAnimal) {
    return fetch(`${this.remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  }
}

export default new AnimalManager("animals")

