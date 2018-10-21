import React, { Component } from 'react'
import style from './checklist.module.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

/**
 * How to use this component:
 * <Checklist title="My Checklist"
              list_id="earthquake"           // must match one of the 4 IDs in checklist.json
              />
 */

class Checklist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    let thisObj = this
    axios
      .get('/api/' + thisObj.props.list_id)
      .then(res => {
        thisObj.setState({
          list: res.data
        })
        console.log(thisObj.state.list)
      })
      .catch(err => console.log(err.message))
  }

  render() {
    window.addEventListener(
      'load',
      function() {
        let textarea = window.document.querySelector('textarea')
        if (textarea != null) {
          textarea.style.height = textarea.scrollHeight + 'px'
          textarea.addEventListener(
            'keypress',
            function() {
              if (textarea.scrollTop != 0) {
                textarea.style.height = textarea.scrollHeight + 'px'
              }
            },
            false
          )
        }
      },
      false
    )

    let thisObj = this
    let list = []

    function showList() {
      // add all list items
      console.log('showlist')
      let i = 0
      thisObj.state.list.forEach(item => {
        const index = i
        list.push(
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className={style.checkSquareIcon}
              />
            </td>
            <td>
              <textarea
                value={thisObj.state.list[index]}
                className={style.inputTextBox}
                onChange={e => changeText(e, index)}
              />
            </td>
            <td>
              <FontAwesomeIcon
                icon={faTimes}
                className={style.timesIcon}
                onClick={e => deleteItem(e, index)}
              />
            </td>
          </tr>
        )
        i++
      })
    }

    // change list values on user input
    function changeText(event, i) {
      let list_items = thisObj.state.list
      for (let j = 0; j < thisObj.state.list.length; j++) {
        if (j === i) {
          list_items[j] = event.target.value
        }
      }
      thisObj.setState({
        list: list_items
      })
    }

    // delete list value
    function deleteItem(event, i) {
      let list_items = thisObj.state.list
      list_items.splice(i, 1)

      thisObj.setState({
        list: list_items
      })
    }

    // add an empty row to list
    function addNew() {
      console.log('add new')
      // add new empty string to state
      let list = thisObj.state.list
      list.push('')
      thisObj.setState({
        list: list
      })
    }

    // save list into checklist.json file
    function saveList() {
      console.log(thisObj.state)
      axios
        .post('/api/' + thisObj.props.list_id, thisObj.state.list)
        .then(res => {
          console.log(res)
          console.log(thisObj.state.list)
        })
        .catch(err => console.log(err.message))
    }

    showList()

    return (
      <div className={style.checklistComponent}>
        <div className={style.listTitle}>{this.props.title}</div>
        <table className={style.listTable}>
          <tbody id="list-items" className={style.listItem}>
            {list}
          </tbody>
        </table>
        <div className={style.centerItems}>
          <button onClick={addNew} className={style.addNewButton}>
            Add new
          </button>
          <button onClick={saveList} className={style.saveButton}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default Checklist
