import React from 'react';
import { render } from 'react-dom';

import Campaign from './components/messages';

class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: ["Volunteer","Donation"],
      SelectedCampaign: 1,
    };

  }
  render() {
    return (
      
          
          <div className="row">
  <div className="col-md-8"><messages categories={this.state.msg}/></div>
  <div className="col-md-4">.col-md-5</div>
</div>

    );
  }
}

render(
  <Apps/>,
  document.getElementById('root'),
);
