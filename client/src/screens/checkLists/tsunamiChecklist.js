import React, { Component } from 'react'
import Checklist from '../../components/checklist'

class TsunamiChecklist extends Component {
  render() {
    return (
      <div>
        <Checklist title="My Checklist" list_id="tsunami" />
      </div>
    )
  }
}

export default TsunamiChecklist
