import React from 'react';

export default class AddOption extends React.Component {
  state = {
    errorMsg: undefined,
  }

  addOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.optionForm.value.trim();
    const error = this.props.handleAddOption(option); /* Call the function to add the option */

    this.setState(() => ({ errorMsg: error}));

    if(!error) {
      e.target.elements.optionForm.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.errorMsg && <p className="add-option-error">{ this.state.errorMsg }</p>}
        <form onSubmit={this.addOption} className="add-option">
          <input name="optionForm" placeholder="Add your option" className="add-option__input"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
};

