import React from 'react'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootreducers from './reducers/rootreducer'


 const store = createStore(rootreducers, applyMiddleware(thunk))

 export default store