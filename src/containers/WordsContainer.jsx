import {connect} from 'react-redux'

import Words from '../components/Words'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(
  mapStateToProps
)(Words)
