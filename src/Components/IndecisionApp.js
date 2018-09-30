import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  // Delete all options
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeletedSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  // Delete individual option
  handleDeleteOption = (optionToRemove) => {
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
  handleRandomOption = () => {
    const number = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[number];

    this.setState(() => ({selectedOption: option}));
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add an item';
    } else if(this.state.options.indexOf(option) > -1){ /* If an item already exists */
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({ options: prevState.options.concat(option) }));      
    }
  };

  // Hooks
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

  render() {
    const title = 'Indecision',
          subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header 
          title={title} 
          subtitle={subtitle}/>
        <div className="container">
        <Action 
          hasOptions={this.state.options.length > 0} 
          handleRandomOption={this.handleRandomOption}/> {/* True if the array has items */}
        <div className="widget">
          <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions} 
            handleDeleteOption={ this.handleDeleteOption }/>
          <AddOption 
            handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal 
          selectedOption={ this.state.selectedOption }
          handleDeletedSelectedOption={ this.handleDeletedSelectedOption }
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;