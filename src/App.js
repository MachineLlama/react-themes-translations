import React, { Component } from 'react';
import { getStorage, setStorage } from './storage';
import './App.css';
import 'bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getStorage('theme'),
      language: getStorage('language')
    };

    this.changeTheme = this.changeTheme.bind(this);
    this.changeLanugage = this.changeLanugage.bind(this);
  }

  changeTheme(theme) {
    setStorage('theme', theme);
    window.location.reload();
  }

  changeLanugage(language) {
    setStorage('language', language);
    this.setState({ language: language });
  }

  render() {
    const { translations } = require(`./translations/${this.state.language}.js`);

    return (
      <div className="App" style={require(`./styles/${this.state.theme}.css`)}>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="theme-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {`${translations.theme}: ${this.state.theme}`}
          </button>
          <div className="dropdown-menu" aria-labelledby="theme-dropdown">
            <div className="dropdown-item" onClick={() => this.changeTheme('bootstrap')}>Bootstrap</div>
            <div className="dropdown-item" onClick={() => this.changeTheme('lux')}>Lux</div>
            <div className="dropdown-item" onClick={() => this.changeTheme('yeti')}>Yeti</div>
            <div className="dropdown-item" onClick={() => this.changeTheme('mint')}>Mint</div>
            <div className="dropdown-item" onClick={() => this.changeTheme('solar')}>Solar</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {`${translations.language}: ${translations[this.state.language]}`}
          </button>
          <div className="dropdown-menu" aria-labelledby="language-dropdown">
            <div className="dropdown-item" onClick={() => this.changeLanugage('en')}>{translations.en}</div>
            <div className="dropdown-item" onClick={() => this.changeLanugage('es')}>{translations.es}</div>
            <div className="dropdown-item" onClick={() => this.changeLanugage('ja')}>{translations.ja}</div>
            <div className="dropdown-item" onClick={() => this.changeLanugage('ko')}>{translations.ko}</div>
            <div className="dropdown-item" onClick={() => this.changeLanugage('zh')}>{translations.zh}</div>
          </div>
        </div>

        <button type="button" className="btn btn-primary">{translations.primary}</button>
        <button type="button" className="btn btn-secondary">{translations.secondary}</button>
        <button type="button" className="btn btn-success">{translations.success}</button>
        <button type="button" className="btn btn-light">{translations.light}</button>
        <button type="button" className="btn btn-dark">{translations.dark}</button>
      </div>
    );
  }
}

export default App;
