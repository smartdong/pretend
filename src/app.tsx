/* eslint-disable react/prop-types */
import { Component } from 'react'
import { defaultStore, StoreContext } from './store'

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <StoreContext.Provider value={defaultStore}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default App
