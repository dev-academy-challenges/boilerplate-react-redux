import React from 'react'
import {connect} from 'react-redux'
import {addWord} from '../actions'

let AddWord = ({dispatch}) => (
  <input onKeyUp={e => {
    if (e.keyCode === 13) {
      dispatch(addWord(e.currentTarget.value))
      e.currentTarget.value = ''
    }
  }}/>
)

AddWord = connect()(AddWord)

export default AddWord
