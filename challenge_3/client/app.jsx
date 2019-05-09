class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : 'HomePage'
    }
    this.changeHome = this.changeHome.bind(this);
    this.changeF1 = this.changeF1.bind(this);
    this.changeF2 = this.changeF2.bind(this);
    this.changeF3 = this.changeF3.bind(this);
  }

  changeHome() {
    this.setState({currentPage: 'F1'});
  }

  changeF1() {
    this.setState({currentPage: 'F2'});
  }

  changeF2() {
    this.setState({currentPage: 'F3'});
  }

  changeF3() {
    this.setState({currentPage: 'HomePage'});
  }

  render() {
    if (this.state.currentPage === 'HomePage') {
      return <HomePage changeHome={this.changeHome}/>
    }
    if (this.state.currentPage === 'F1') {
      return <F1 changeF1={this.changeF1}/>
    }
    if (this.state.currentPage === 'F2') {
      return <F2 changeF2={this.changeF2}/>
    }
    if (this.state.currentPage === 'F3') {
      return <F3 changeF3={this.changeF3}/>
    }

  }
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  };
  onFormSubmit(e) {
    e.preventDefault();
    //want to pass e back to App 
    this.props.changeHome();
  }
  render() {
    return (
      <div>
        <h1>Gymshark Sale</h1>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <button>Checkout</button>
        </form>
      </div>
    )
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.changeF1();
  }

  render() {
    return(
      <div>
        <h2>Account Login</h2>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <div/>
          <label>
            Email:
            <input type='text' name='email' />
          </label>
          <div />
          <label>
            Password:
            <input type='text' name='password' />
          </label>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.changeF2();
  }

  render() {
    return (
      <div>
        <h2>Address</h2>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            Address Line 1:
            <input type='text' name='line1'/>
          </label>
          <div />
          <label>
            Address Line 2:
            <input type='text' name='line2'/>
          </label>
          <div />
          <label>
            City:
            <input type='text' name='city'/>
          </label>
          <label>
            State:
            <input type='text' name='state'/>
          </label>
          <label>
            Zip Code:
            <input type='text' name='zipcode'/>
          </label>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.changeF3();
  }

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            Credit Card #:
            <input type='text' name='ccnumber'></input>
          </label>
          <div />
          <label>
            Expiry Date:
            <input type='text' name='date'></input>
          </label>
          <label>
            CVV:
            <input type='text' name='cvv'></input>
          </label>
          <label>
            Zip Code:
            <input type='text' name='billingzip'></input>
          </label>
          <button>Purchase</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
