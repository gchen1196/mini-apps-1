
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
    this.changeConfirmation = this.changeConfirmation.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(state) {
    this.setState(state);
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
    this.setState({currentPage: 'Confirmation'});
  }

  changeConfirmation() {
    this.setState({currentPage: 'HomePage'});
  }

  render() {
    if (this.state.currentPage === 'HomePage') {
      return <HomePage changeHome={this.changeHome} />
    }
    if (this.state.currentPage === 'F1') {
      return <F1 changeF1={this.changeF1} getInfo={this.getInfo}/>
    }
    if (this.state.currentPage === 'F2') {
      return <F2 changeF2={this.changeF2} getInfo={this.getInfo}/>
    }
    if (this.state.currentPage === 'F3') {
      return <F3 changeF3={this.changeF3} getInfo={this.getInfo}/>
    }
    if (this.state.currentPage === 'Confirmation') {
      return <Confirmation states={this.state} changeConfirmation={this.changeConfirmation} />
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
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    // this.postReq = this.postReq.bind(this);
  }

  // postReq(info) {
  //   axios.post('/user', info)
  //   .then(function (response) {
  //     console.log("Information posted");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };

  onFormSubmit(e) {
    e.preventDefault();
    // this.postReq(this.state);
    this.props.getInfo(this.state);
    this.props.changeF1();
  }
  
  render() {
    return(
      <div>
        <h2>Account Login</h2>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            Name:
            <input type='text' name='name' onChange={(e) => this.setState({name: e.target.value})}/>
          </label>
          <div/>
          <label>
            Email:
            <input type='text' name='email' onChange={(e) => this.setState({email: e.target.value})}/>
          </label>
          <div />
          <label>
            Password:
            <input type='text' name='password' onChange={(e) => this.setState({password: e.target.value})}/>
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
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: ''
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.getInfo(this.state);
    this.props.changeF2();
  }

  render() {
    return (
      <div>
        <h2>Address</h2>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            Address Line 1:
            <input type='text' name='line1' onChange={(e) => this.setState({line1: e.target.value})}/>
          </label>
          <div />
          <label>
            Address Line 2:
            <input type='text' name='line2' onChange={(e) => this.setState({line2: e.target.value})}/>
          </label>
          <div />
          <label>
            City:
            <input type='text' name='city' onChange={(e) => this.setState({city: e.target.value})}/>
          </label>
          <label>
            State:
            <input type='text' name='state' onChange={(e) => this.setState({state: e.target.value})}/>
          </label>
          <label>
            Zip Code:
            <input type='text' name='zipcode' onChange={(e) => this.setState({zipcode: e.target.value})}/>
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
    this.state = {
      ccnumber: '',
      date: '',
      cvv: '',
      billingzip: ''
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.getInfo(this.state);
    this.props.changeF3();
  }

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            Credit Card #:
            <input type='text' name='ccnumber' onChange={(e) => this.setState({ccnumber: e.target.value})}></input>
          </label>
          <div />
          <label>
            Expiry Date:
            <input type='text' name='date' onChange={(e) => this.setState({date: e.target.value})}></input>
          </label>
          <label>
            CVV:
            <input type='text' name='cvv' onChange={(e) => this.setState({cvv: e.target.value})}></input>
          </label>
          <label>
            Zip Code:
            <input type='text' name='billingzip' onChange={(e) => this.setState({billingzip: e.target.value})}></input>
          </label>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.displayInfo = this.displayInfo.bind(this);
    this.postInfo = this.postInfo.bind(this);
  }

  displayInfo() {
    axios.get('/user')
    .then((data) => {
      this.setState(data);
    })
    .catch((error) => {
      console.log('failed to fetch data');
    })
  }

  postInfo(info) {
    axios.post('/user', info)
    .then((response) => console.log('successfully posted'))
    .catch((error) => console.log('try again'));
  }

  onClickToShow(e) {
    e.preventDefault();
    this.displayInfo();
  }
  
  onClickButton(e) {
    this.postInfo(this.props.states);
    this.props.changeConfirmation();
  }

  render() {
    return(
      <div>
        <h2>Confirmation Page</h2>
        <button onClick={(e) => this.onClickToShow(e)}>Display Info</button>
        <table>
          <tr>
            <td>{this.state.name}</td>
            <td>{this.state.email}</td>
          </tr>
          <tr>
            <td>{this.state.line1}</td>
          </tr>
          <tr>
            <td>{this.state.line2}</td>
          </tr>
          <tr>
            <td>{this.state.city}</td>
            <td>{this.state.state}</td>
            <td>{this.state.zipcode}</td>
          </tr>
          <tr>
            <td>{this.state.ccnumber}</td>
            <td>{this.state.date}</td>
            <td>{this.state.cvv}</td>
            <td>{this.state.billingzip}</td>
          </tr>
        </table>
        <button onClick={(e) => this.onClickButton(e)}>Purchase</button>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))
