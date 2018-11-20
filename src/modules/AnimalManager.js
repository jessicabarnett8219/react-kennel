import APIManager from "./APIManager"

class AnimalManager extends APIManager {
  get() {
    console.log("It worked")
    this.get()
  }
}

export default new AnimalManager("animals")