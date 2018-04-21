import React from 'react';
import ShowRelationships from './ShowRelationships';



class Messages extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      msgs: []
    }

  }

  //for ajax calls
  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoaded: true,
      msgs: nextProps.parentState.msgs
    })
  }

  deleteMessage(ele){
    var elem = ele.target;
    var val = elem.value;
    //var tr = elem.parentNode.parentNode;

    fetch("http://localhost:3000/api/chats/"+val, { method: "DELETE" })
    .then((res) => {
      console.log(res)
      this.props.updateList();
      //remove the row if it is DELETE was success 200
      //if(res.status == 200) tr.remove();
    })
    // console.log(val)
  }


  render() {
    // console.log(this.props.parentState.msgs);
    const { error, isLoaded, msgs } = this.state;

    if (error) {

      return <tr><td>Error: {error.message}</td></tr>;

    } else if (!isLoaded) {

      return <tr><td>Loading...</td></tr>;

    } else {

      // <p key={i}>{msg.type}</p> 
      return (
        msgs.map( (msg, i) => 
          <tr key={i}>
            <th></th>
            <td>{msg.message}<button value={msg.id} onClick={this.deleteMessage.bind(this)}>X</button></td>
            <td>{msg.id}</td>
            <td><ShowRelationships all_msgs={this.state.msgs} chat_id={msg.id} /></td>
          </tr>
        )
        
      );
    }
  }
}



export default Messages;