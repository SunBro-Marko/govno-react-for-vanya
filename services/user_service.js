import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class UserService {
  constructor() {
    makeAutoObservable(this)
    if (typeof window != 'undefined') {
      makePersistable(
        this,
        {
          name: 'UserService',
          properties: ['claim'],
          storage: window.localStorage,
        },
        { delay: 1000, fireImmediately: false }
      )
    }
  }
  claim = 'Лох ебаный'

  setClaim(newClaim) {
    this.claim = newClaim
  }
}

export default new UserService()
