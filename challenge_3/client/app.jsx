class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : 'F1'
    }
  }

  render() {
    return(
    <div>
      <HomePage />
      <F1 />
      <F2 />
      <F3 />
    </div>

    )
  }
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  };

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
      
    };
  }


  render() {
    return(
      <div>
        <h2>Account Login</h2>
        <form>
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
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Address</h2>
        <form>
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
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        <form>
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
