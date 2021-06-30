import React from 'react';

class MyComponent extends React.Component {
 
    constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
      this.myComponentDiv = React.createRef(this);
    // set the default internal state
    this.state = {
      clicks: 0
    };
  }
  componentDidMount() {
    if (this.myComponentDiv.current){
      this.myComponentDiv.current.onClick= this.clickHandler;
    }
  }
  componentWillUnmount() {
    this.myComponentDiv.removeEventListener('click', this.clickHandler);
  }
  clickHandler() {
    this.setState({
      clicks: this.clicks + 1
    });
  }
  render() {
    let children = this.props.children;
    return (
      <div className="My-component" ref="{this.myComponentDiv}">
      <h2>My Component ({this.state.clicks} clickHandler)</h2>
      <h3>{this.props.headerText}</h3>
    {children}
    </div>
    );
  }
 }
 export default MyComponent