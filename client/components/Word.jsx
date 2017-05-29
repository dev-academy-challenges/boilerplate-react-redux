import React from 'react'
import PropTypes from 'prop-types'

const Word = ({word}) => (
  <div>{word}</div>
)

Word.propTypes = {
  word: PropTypes.string.isRequired
}

export default Word
