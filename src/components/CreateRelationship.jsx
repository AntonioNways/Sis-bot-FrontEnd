import React from 'react';

export default class CreateRelationship extends React.Component{

	constructor(){
		super()
	}

	render(){
		 // <select  className="form-control" >
   //                <option selected value="" disabled>--choose</option>
   //                <option>2</option>
   //                <option>3</option>
   //              </select>
		return (
			<tr>
              <th>1</th>
              <td></td>
              <td>
               
              </td>
              <td ><button className="btn btn-success">+</button></td>
              <td ><button className="btn btn-danger" >-</button></td>
            </tr>
		)
	}

}