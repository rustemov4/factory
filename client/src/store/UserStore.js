import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._isSub = false
        this._user = {}
        makeAutoObservable(this)
    }
    
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setIsSub(bool) {
        this._isSub = bool
    }

    get isSub() {
        return this._isSub
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}