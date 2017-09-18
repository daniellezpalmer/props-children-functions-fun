default export class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

this.handleInput = this.handleInput.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="col-8">
        <form action="">
          <div className="form-group">
            <input onChange={this.handleInput} value={this.state.whatToSay} type="email" className="form-control" aria-describedby="text input" placeholder="Write something!"/>
          </div>
          <ChildComponent onClick={this.handleSubmit}/>
        </form>
      <DisplayComponent sayWhat={this.state.whatWasSaid}/>
      </div>
    );
  }
}

default export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
