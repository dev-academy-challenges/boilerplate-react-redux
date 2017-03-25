import React, {PropTypes} from 'react'

import Word from './Word'

const Words = ({words}) => (
  <div>
    {words.map(word =>
      <Word
        key={word.id}
        {...word}
        />
    )}
  </div>
)

Words.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Words
