import { combineReducers } from 'redux'

import designer from './designer'
import preview from './preview'

const reducers = combineReducers({
  designer,
  preview,
})

export default reducers