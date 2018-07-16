import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  navs = [
    { id: "56c782f1978fdf9a0100df52", title : "Главная", ref : "#Main"},
    { id: "56c782f1978fdf9a0100df53", title : "Статьи", ref : "#Articles"},
    { id: "56c782f1978fdf9a0100df54", title : "Программы", ref : "#Programs"},
    { id: "56c782f1978fdf9a0100df55", title : "Контакты", ref : "#Contacts"},            
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header navs={this.navs}  />        
        </header>
        <article>
          <div>Acticle</div>
        </article>
        <footer>
          <Footer userName="Vasya" />        
        </footer>        
      </div>
    );
  }
}

export default App;
