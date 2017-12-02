import React from 'react';
import { render } from 'react-dom';

import Campaign from './components/campaign';

class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Categories: ["Volunteer","Donation"],
      SelectedCampaign: 1,
    };

  }
  renderCategoriesArray(){
    var convertToArray="";
    
    this.setState({
      "Categories": convertToArray,
    })
  }
  render() {
    return (
      
          
          <div className="row">
  <div className="col-md-2"><Campaign categories={this.state.Categories}/></div>
  <div className="col-md-5">.col-md-5</div>
  <div className="col-md-4">.col-md-4</div>
  <div className="col-md-1">.col-md-1</div>
</div>

    );
  }
}

render(
  <Apps/>,
  document.getElementById('root'),
);
