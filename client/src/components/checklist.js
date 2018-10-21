import React, { Component } from 'react'
import style from './checklist.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"

/**
 * How to use this component:
 * <Checklist title="My Checklist"
              list_id="earthquake"           // must match one of the 4 IDs in checklist.json
              />
 */

class Checklist extends Component {  
    constructor(props) {
        super(props);
        let thisObj = this;
        this.state = {
            list : []
          };
    }

    componentDidMount() {
        let thisObj = this;
        axios.get('/api/' + thisObj.props.list_id)
            .then (res => {
                thisObj.setState({
                list : res.data
                })
              console.log(thisObj.state.list);
        })
          .catch(err => console.log(err.message));
    }
    
    // callApi = async (url) => {
    //     const response = await axios.get(url);
    //     console.log(response);
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    render() {
        let thisObj = this;
        let list = [];

        function changeText(event, i) {
            let list_items = thisObj.state.list;
            for (let j = 0; j < thisObj.state.list.length; j++) {
                if (j === i) {
                    list_items[j] = event.target.value;
                }
            }
            thisObj.setState({
                list : list_items
            });
        }

        function showList () { // add all list items 
            console.log('showlist');
            let i = 0;
            thisObj.state.list.forEach( item => {
                const index = i;
                list.push(
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td><input type="text" value={thisObj.state.list[index]} onChange={(e) => changeText(e,index)}/></td>
                    </tr>);
                i++;
            });
        }        

        // add an empty row to list
        function addNew () {
            console.log('add new');
            let item = document.createElement("tr");
            item.innerHTML = '<td><input type="checkbox"/></td><td><input type="text"/></td>';
            document.getElementById("list-items").appendChild(item);
        }        

        // save list into checklist.json file
        function saveList () {
            console.log(thisObj.state);
            axios.post('/api/' + thisObj.props.list_id, thisObj.state.list)
                .then (res=> {
                    console.log(res)
                    console.log(thisObj.state.list)
                })
                .catch(err => console.log(err.message));
            // console.log('save');
            // jsonData[thisObj.props.list_id] = [];
            
            // let items = document.getElementsByTagName("td");
            // console.log(items);

            // for (let i = 1; i < items.length; i += 2) {
            //     console.log(items[i]);
            //     let input_value = items[i].getElementsByTagName('input')[0].value;
            //     jsonData[thisObj.props.list_id].push(input_value);
            // }
            // console.log(jsonData[thisObj.props.list_id]);
            // console.log(jsonData);
        }

        showList();

        return (
        <div>
            <div className={style.listTitle}>{this.props.title}</div>
            <table>
            <tbody id="list-items" className={style.listItem}>{list}</tbody>
            </table>
            <button onClick={addNew}>Add new</button>
            <button onClick={saveList}>Save</button>
        </div>
      )
    }
  }
  
  
export default Checklist