import React, { Component } from 'react'
import Checklist from '../../components/checklist'

class EarthquakeCheckList extends Component {
  render() {
    return (
      <div>
        <Checklist title="My Checklist" list_id="earthquake" />
      </div>
    )
  }
}

export default EarthquakeCheckList
