import {combineReducers} from 'redux'
import todoreducer from './todoreducer'
import userreducer from './userreducer'

const rootreducer = combineReducers(
    {
        todos : todoreducer,
        user : userreducer
    }
)

export default rootreducer