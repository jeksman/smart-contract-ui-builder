import React, { Component } from 'react'
import cytoscape from 'cytoscape'

// import compound from '../dev-temp/compound'
import parse from '../parser'
import graphTemplate from '../dev-temp/graphTemplate'

const StandardERC20JSON = require('../dev-temp/StandardERC20.json')

const testGraph = Object.assign({}, graphTemplate)
testGraph.config.elements = parse(StandardERC20JSON, 1)

class Grapher extends Component {

  constructor (props) {
    super(props)
    this.state = { cy: {} }
  }

  componentDidMount () {

    testGraph.config.container = this.cyRef
    const cy = cytoscape(testGraph.config)

    // cy.on('tap', (event) => {
    //   console.log(cy.pan())
    //   console.log(cy.zoom())
    // })

    // does not work, zoom and pan are reset afterwards
    // cy.zoom(1.5)
    // cy.pan(100, -200)

    this.setState({ cy: cy })
  }

  componentWillUnmount () {
    if (this.state.cy) {
        this.state.cy.destroy()
    }
  }

  // unsure what to do with this; Cytoscape should re-render on its own
  // shouldComponentUpdate() {
  //   return false
  // }

  render () {

    // if (Object.keys(this.state.cy).length > 0) {
    //   console.log(this.state.cy)
    // }

    return <div style={testGraph.style} ref={(cyRef) => {
      this.cyRef = cyRef
    }}/>
  }
}

export default Grapher
