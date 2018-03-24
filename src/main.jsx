import React from 'react';
import { render } from 'react-dom';

import Messages from './components/Messages';
import SetMessages from './components/SetMessages';
import CreateRelationship from './components/CreateRelationship';
import Header from './components/Header';
import Footer from './components/Footer';


class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgData: [{"id":1,"message":"Welcome to Sistering","type":"Q"},{"id":2,"message":"How may I help you?","type":"Q"}],
      msgRelation:[{id:1, origin:1, destination:2},
                  {id:2, origin: 2, destination:3}],
      SelectedCampaign: 1,
      submit: false
    };

  }

  submitHandler(e){
    e.preventDefault();
    this.setState({
      submit: true
    });

    /**
    * FormData creats key-value data of the form.
    */

    var form = e.target;
    var formData = new FormData(form)

    //all the values with keys "message" and "type" are stored in the arrays bellow
    var all_msgs = formData.getAll("message"); 
    var all_types = formData.getAll("type");
    
    //the for-loop iterates one of the array and access both arrays at the same time
    for(var i =0; i< all_msgs.length; i++ ){
      /**
      * Both array should have the same length since all the input feilds are mandatory to fill-up.
      * If a message-input is not entered but the type is chosen, by default FormData will insert it into the array as empty string thus keeping both the arrays with same length.
      * To create the URL-encoded format, same index number is taken from each array. Example to get the message value and it's type:-  message[2] has type[2] or message[5] has type[5]; the index value is the same.
      */

      //url-encoding is formated by the help of both arrays
      var data = "message="+all_msgs[i]+"&type="+all_types[i];

      //skip the iteration if an empty value is found for either 'type' or 'message'
      if(all_types[i] == "" || all_msgs[i] == ""){
        continue;
      }

      fetch("http://localhost:3000/api/chats/upsert", {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: data
      }).then((result) =>{
        console.log(result);

      });
    }


    // this.forceUpdate()
  }



  render() {
    return (
        <div className="container">

          <Header />

          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <table className="table" id="savedMessageTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th >Saved Messages</th>
                      <th>ID</th>
                      <th>Relationship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Messages />
                  </tbody>
                </table>
              </div>
              <div className="panel panel-default">
                <form onSubmit={this.submitHandler.bind(this)}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="4">Enter New Messages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <SetMessages submitBool={this.state.submit} />
                      <tr>
                        <td colSpan="4"><button type="submit" className="btn btn-primary">Save</button></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
            
          </div>

          <Footer />
          
        </div>
    );
  }
}

render(
  <Apps/>,
  document.getElementById('root'),
);
