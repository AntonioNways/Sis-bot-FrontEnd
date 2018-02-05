import React from 'react';

/**
* This component is responisble for creating and cloning the input DOM elements within the table. 
* These input elemnts are used for creating new messages. 
* The form submission functionality is in the main.jsx.
*/

class SetMessages extends React.Component {

  constructor(props){

    super(props);

    /**
    * Constructor holds only 2 properies.
    * 'row_key_val' is to used to assign unique keys to each clone row via cloneRow() function below.
    * 'rows' is used to hold all the 'tr' DOM elements in which they are printed out on render()
    */

    this.state = {
      row_key_val: 1,
      rows: [<tr key="0"><td><input type="text" name="message" className="form-control" placeholder="Enter Message"/></td>
      <td>
        <select name="type">
          <option value="message" >Message</option>
          <option value="link">Link</option>
        </select>
      </td>
      <td><button type="button"  className="btn btn-success" onClick={this.cloneRow.bind(this)} >+</button></td><td><button type="button" onClick={this.removeRow.bind(this)} className="btn btn-danger" >x</button> </td></tr>]
    }

  }

  cloneRow(elem){
    /**
    * This function is used to clone row by using the first memeber of the 'rows' array from the constructor. 
    * This function access the ''row_key_val' property to assign unique keys to the newly cloned row elements.
    * The new cloned elements are pushed to the 'rows' array property which is then rendered out on the render() function.
    */
    var btn = elem.target;
    var td = btn.parentNode;
    var tr = td.parentNode;

    var clone_tr = React.cloneElement(this.state.rows[0],{key: this.state.row_key_val});

    var arr = this.state.rows;
    arr.push(clone_tr);
    var new_row_key_val = this.state.row_key_val + 1;

    this.setState({
      rows: arr,
      row_key_val: new_row_key_val
    })

  }

  removeRow(ele){
    /**
    * This function is used to simply remove a row. The row cannot be removed if it is the only child.
    * To check if it is the only child, this function access the row's parent and then further checking for the number of children.
    * The row's parent should have atleast TWO children. First is the current row itself with the input elements. The second child is the one that contains the 'submit' button; this row can be found along with the main table in main.jsx file.
    */
    var elem = ele.target;
    var td = elem.parentNode;
    var tr = td.parentNode;
    var tbody = tr.parentNode;

    if(tbody.children.length == 2){
      alert("cannot remove the only row")
      return;
    }
    tr.remove();

  }

  render() {
    

    return(
        this.state.rows.map((row, i) => {  /**console.log(row);*/ return row;})
    );
  }
}



export default SetMessages;