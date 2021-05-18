import {combineReducers} from 'redux'
import todoreducer from './todoreducer'

const rootreducer = combineReducers(
    {
        todos : todoreducer
    }
)

export default rootreducer