import React from 'react';
import { render } from 'react-dom';

import Messages from './components/messages';

class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgData: [{"id":1,"message":"Welcome to Sistering","type":"Q"},{"id":2,"message":"How may I help you?","type":"Q"}],
      msgRelation:[{id:1, origin:1, destination:2},
                  {id:2, origin: 2, destination:3}],
      SelectedCampaign: 1,
      displayRelationship: {}
    };

  }
  render() {
    return (   
      <div className="row">
        <div className="col-md-8">
          <Messages msgData={this.state.msgData} msgRelation={this.state.msgRelation}/>
        </div>
        <div className="col-md-4">
          .col-md-5
        </div>
      </div>
    );
  }
}

render(
  <Apps/>,
  document.getElementById('root'),
);
