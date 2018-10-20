import React, { Component } from 'react'
import style from './checklist.module.css'

/**
 * How to use this component:
 * <Checklist title="My Checklist"
              list_items={["hi","hello"]}/>
 */

class Checklist extends Component {  
    render() {
        let list = [];

        // add all list items 
        this.props.list_items.forEach (item => { 
            list.push(
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><input type="text" value={item}/></td>
                </tr>);
        });

        function addNew () {
            console.log("add new")
            let item = document.createElement("tr");
            item.innerHTML = '<td><input type="checkbox"/></td><td><input type="text"/></td>';
            document.getElementById("list-items").appendChild(item);
        }        

        return (
        <div>
            <div className={style.listTitle}>{this.props.title}</div>
                <div id="list-items" className={style.listItem}>{list}</div>
            <button onClick={addNew}>Add new</button>
            <button>Save</button>
        </div>
      )
    }
  }
  
  export default Checklist