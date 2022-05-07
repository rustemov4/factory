import { makeAutoObservable } from "mobx"

export default class SubjectStore {
    constructor() {
        this._types = [
            {id: 1, name:"Mathematics"},
            {id: 2, name:"Physics"},
            {id: 3, name:"Chemistry"},
            {id: 4, name:"Biology"},
            {id: 5, name:"English"}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }
    
    setTypes(types) {
        this._types = types
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get selectedType() {
        return this._selectedType
    }
}

