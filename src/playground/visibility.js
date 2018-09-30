class VisiblityToggle extends React.Component {
  // The constructor function is called with the props object
  // The props inside the constructor is the same as this.props in the render()
  constructor(props) {
    super(props); // This is important to do.
    this.toggleBtn = this.toggleBtn.bind(this); // This refers to the props.
    this.title = 'Visibility';
    this.state = {
      show: false,
    }
  }

  toggleBtn() {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.toggleBtn}>
          {this.state.show ? 'Hide details' : 'Show details'}
        </button>
        {this.state.show && (
        <div>
          <h3>These are some details.</h3>
        </div>
      )}
      </div>
    )
  }
};

ReactDOM.render(<VisiblityToggle />, document.querySelector('#UI-app'));

/* let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render(); */
