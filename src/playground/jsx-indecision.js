const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const removeAll = (e) => {
  e.preventDefault();

  app.options = [];
  render();
}

const rollOption = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
}

const submitOption = (e) => {
  e.preventDefault();
  
  let option = e.target.elements.optionInput.value;
  
  if(option) {
    app.options.push(option);
    e.target.elements.optionInput.value = '';
    render();
  }
}

const appRoot = document.querySelector('#UI-app');

const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      <h2>{ app.subtitle }</h2>
      <p>{ app.options.length > 0 ? 'Here are your options.' : 'Please fill your options down below.' }</p>
      <button onClick={ removeAll }>Remove All</button>
      <button onClick={ rollOption }>Roll</button>
      <form onSubmit={ submitOption }>
        <input name="optionInput" />
        <button>Submit</button>
      </form>
      <ol>
        { app.options.map((option) => <li key={option}>{ option }</li>) }
      </ol>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();