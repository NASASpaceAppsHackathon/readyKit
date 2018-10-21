import React, { Component } from 'react'
import Checklist from '../../components/checklist'

class TornadoChecklist extends Component {
  render() {
    return (
      <div>
        <Checklist title="My Checklist" list_id="tornado" />
      </div>
    )
  }
}

export default TornadoChecklist
