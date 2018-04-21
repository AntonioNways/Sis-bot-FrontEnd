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
  componentDidMount() {
    fetch("http://localhost:3000/api/chats", {headers: {"x-auth": "bs7xcpkBWBeeVDnAOLeo6U2QCihAx6jUuPZ6Ot7Xhg9krNDtcAVjRlxxrEbl7B+JtUhbTkV/BjPX/8pmAfQS3Q=="}})
      .then(res => res.json())
      .then(
        (result) => {
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

  deleteMessage(ele){
    var elem = ele.target;
    var val = elem.value;
    var tr = elem.parentNode.parentNode;

    fetch("http://localhost:3000/api/chats/"+val, { method: "DELETE" })
    .then((res) => {
      console.log(res)
      //remove the row if it is DELETE was success 200
      if(res.status == 200) tr.remove();
    })
    // console.log(val)
  }


  render() {
     console.log(this.state);
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