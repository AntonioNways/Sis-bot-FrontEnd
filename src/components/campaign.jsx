import React from 'react';




class Campaign extends React.Component {


  componentDidMount() {

  }

  Test(x){
    console.log(x);
    console.log("running")
  }
  render() {
    
    return (
       <div className=""> {Object.keys(this.props.categories).map(this.Test)}
      
      </div>
    );
  }
}



export default Campaign;