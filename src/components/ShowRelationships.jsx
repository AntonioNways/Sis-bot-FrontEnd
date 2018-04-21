import React from "react";

/**
*	This component class is responsible for fetching relationship of each message using a message ID. 
*	This message ID should be passed through as an attribute when calling this Component.
*	The ID is accessed via 'this.props.chat_id' and sent to an API end point.
*	
*	This Component class is also responsible for deletion & creation of a relationship
*/

class ShowRelationships extends React.Component {

	constructor(){
		super();
		this.state = {
			isLoaded: false,
			error: null,
			msgs: [], //relationship messages,

		}
	}

	componentDidMount() {

	    fetch("http://localhost:3000/api/relationships/"+this.props.chat_id)
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	// console.log(result)
	          this.setState({
	            isLoaded: true,
	            msgs: result
	          })
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error: error
	          })
	        }
	      )
	}

	submitRelationship(ele){
		var elem = ele.target;
		var val = elem.value;
		var data = "origin="+this.props.chat_id+"&destination="+val;

		//  console.log(this.props.chat_id, "val=",val)
		//  return
		fetch("http://localhost:3000/api/relationships/upsert", 
				{
					method: "POST",
			        headers: {'Content-Type':'application/x-www-form-urlencoded'},
			        body: data
				}
			).then((res)=>{console.log(res); this.setState(this.state)})
	}

	deleteRelationship(ele){
		ele.preventDefault()
		var elem = ele.target;

		fetch("http://localhost:3000/api/relationships/"+elem.value, { method: "DELETE" })
		.then((res)=>{console.log(res); this.setState(this.state)})

	}


	render(){
		// console.log(this.props.all_msgs);
		var all_chats = this.props.all_msgs;
		var linked_msgs = this.state.msgs;
		var linkList={};
		(linked_msgs.length !==0 ? linked_msgs.map((val, i)=> {
			// console.log(val)
		}) : "" )
		return(
			<div>
				<label>
				{ (linked_msgs.length !==0 ?  linked_msgs.map((val, i)=> {
					var a = val.destination_id;
					linkList[a]=true;
					return <button type="button" value={val.id} onClick={this.deleteRelationship.bind(this)} key={i}>{a}</button>
				}) : "" )

				}</label>
				<select onChange={this.submitRelationship.bind(this)}>
					{ all_chats.map( (val, i) => {
						if(val.id==this.props.chat_id||val.id in linkList){
							return
						}
						return <option key={i}>{val.id}</option>
					} ) }
				</select>
			</div>
		)
	}

}


export default ShowRelationships;