import {combineReducers} from 'redux'
import todoreducer from './todoreducer'

const rootreducer = combineReducers(
    {
        todo : todoreducer
    }
)

export default rootreducer