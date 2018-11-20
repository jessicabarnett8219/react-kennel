import APIManager from "./APIManager"


class OwnersAnimalsManager extends APIManager {
  getAll () {
    return this.all("/?_expand=owner&_expand=animal")
  }
}

export default new OwnersAnimalsManager("owners_animals")


