import React from 'react'

import AddWord from './AddWord'
import WordsContainer from '../containers/WordsContainer'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <WordsContainer />
        <AddWord />
      </div>
    )
  }
})
