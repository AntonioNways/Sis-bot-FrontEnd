import React from 'react';




class Messages extends React.Component {


  componentDidMount() {

  }

  Test(msgData,arrayNum){
    console.log(this.props.msgRelation)
    return (
      <div key={arrayNum}>
        <h3>
          {msgData['id']} {msgData['message']}
        </h3>
        <div>
          Triggers: 
        </div>
      </div>
    );
  }
  render() {
    
    return (
       <div className=""> {this.props.msgData.map(this.Test.bind(this))}
      
      </div>
    );
  }
}



export default Messages;