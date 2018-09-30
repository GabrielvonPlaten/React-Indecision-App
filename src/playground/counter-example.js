class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('counter');
      const counter = parseInt(json); // JSON.parseInt is not needed for Integers. Just parseInt

      console.log(counter);
      
      if(!isNaN(counter)) {
        this.setState(() => ({ count: counter }))
      }
    } catch (e) {
      // Nothing happens
    }   
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('counter', json);
    }
  }

  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  removeOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  resetAll() {
    this.setState(() => {
      return {
        count: 0,
      }
    });
  }

  render() {

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.resetAll}>Reset</button>
      </div>
    );
  }
};


ReactDOM.render(<Counter count={5}/>, document.querySelector('#UI-app'));
