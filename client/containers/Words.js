import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Word from '../components/Word'

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

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(
  mapStateToProps
)(Words)
