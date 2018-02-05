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
      msg: ["Volunteer","Donation"],
      SelectedCampaign: 1,
      submit: false
    };

  }

  submitHandler(e){
    e.preventDefault();
    this.setState({
      submit: true
    });

    var form = e.target;
    var formData = new FormData(form)

    console.log(formData.entries())
    for (var [key, value] of formData.entries()) { 
      console.log(key+"="+value+"&type=message");
      console.log('message=hi&type=message');
      var data = key+"="+value+"&type=message";
      fetch("http://localhost:3000/api/chats/upsert", {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: data
        // body: {key:value,
              // "type":"message"},
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
            <div className="col-sm-8">
              <div className="panel panel-default">
                <table className="table" id="savedMessageTable">
                  <thead>
                    <tr>
                      <th colSpan="2">Saved Messages</th>
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
            <div className="col-md-4">
              <div className="panel panel-default">
                <table className="table">
                  <thead>
                    <tr colSpan="4">
                      <th>Relationship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CreateRelationship />
                  </tbody>
                </table>
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
