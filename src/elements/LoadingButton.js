import t from 'prop-types'
import React, {Component} from 'react'

class LoadingButton extends Component {
  static propTypes = {
    disabled: t.bool,
    loading: t.bool,
    type: t.string,
  }
  static defaultProps = {
    disabled: false,
    loading: false,
    type: 'button',
  }
  render() {
    let {children, disabled, loading, type, ...props} = this.props
    if (loading) {
      disabled = true
    }
    return <button disabled={disabled} type={type} {...props}>
      {children}
    </button>
  }
}

export default LoadingButton;