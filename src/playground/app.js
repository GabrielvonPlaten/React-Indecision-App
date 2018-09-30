class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomOption = this.handleRandomOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // If the json string is invaled, do nothing
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
  }

  // Delete all options
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  };

  // Delete individual option
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option), 
        // When the option is filtered, and it passes through as TRUE, nothing in the array will change.
        // But if the filter returns false, it will delete the option
        // PROBLEM: The option passed through counts as every option in the array. Meaning that if a option is false, every option will be deleted
        // A way to solve this is to call the original option as OptionToRemove and compare it with every option with just "option"
        // It will check for every option, and if none matches with the optionToRemove, nothing will happen
        // However, when it finds the option with the same content (string), it will pass as false and it will delete it.
        // Section 5 | Lecture 43 | 12:00
    }))
  }

  // Choose random Option
  handleRandomOption() {
    const number = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[number];

    alert(option);
  };

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1){ /* If an item already exists */
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({ options: prevState.options.concat(option) }));      
    }
  };

  render() {
    const title = 'Indecision',
          subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} 
                handleRandomOption={this.handleRandomOption}/> {/* True if the array has items */}
        <AddOption handleAddOption={this.handleAddOption} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={ this.handleDeleteOption }/>
      </div>
    );
  }
}

// Header
const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>
    </div>
  )
}

// Action
const Action = (props) => {
  return (
    <div>
      <button onClick={ props.handleRandomOption }
              disabled={ !props.hasOptions }>
      What should I do?</button>
    </div>
  );
};

// Options Plural
const Options = (props) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { props.options.length === 0 && <p>Please add an option to get started.</p> }
      <p>Total Options: { props.options.length }</p>
      <ol>
        { props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}  
          />
        ))}
      </ol>
    </div>
  );
};

// Option Singular
const Option = (props) => {
  return (
    <li>
      { props.optionText }
      <button onClick={ (e) => {
        props.handleDeleteOption(props.optionText);
      }}>Remove</button>
    </li>
  )
};

// AddOption
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      errorMsg: undefined,
    }
  }

  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.optionForm.value.trim();
    const error = this.props.handleAddOption(option); /* Call the function to add the option */

    this.setState(() => ({ errorMsg: error}));

    if(!error) {
      e.target.elements.optionForm.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.errorMsg && 
          <div>
            <br />
            <b style={{color: 'darkred'}}>{ this.state.errorMsg }</b>
            <br /><br />
          </div>}
        <form onSubmit={this.addOption}>
          <input name="optionForm" placeholder="Add your option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
};

const appRoot = document.querySelector('#UI-app');
ReactDOM.render(<IndecisionApp />, appRoot);