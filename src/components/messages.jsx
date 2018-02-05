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
    fetch("http://localhost:3000/api/chats", {headers: {"x-auth": "lNPZ0fRmz2pxcMDq5KTGQ51MKq8ilm0BQHg0oeN0w77+KbPMTkL3A4pR4ErCGE9tPeCBgAieF1pljchuHQWTTQ=="}})
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
            <th>{i+1}</th>
            <td>{msg.message}</td>
            <td><ShowRelationships all_msgs={this.state.msgs} chat_id={msg.id} /></td>
          </tr>
        )
        
      );
    }
  }
}



export default Messages;