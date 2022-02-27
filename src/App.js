import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Tabview from './components/tab-view/tab-view.component';
import ItemPreview from './components/item-preview/item-preview.component'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    fetch('https://assessment.api.vweb.app/user')
      .then((response) => response.json())
      .then((user) => this.setState({ user: user }, () => console.log(this.state)))
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/tab-view" element={<Tabview />} >
            <Route path='nearest-rides' element={<ItemPreview />} />
            <Route path='upcoming-rides' element={<ItemPreview />} />
            <Route path='past-rides' element={<ItemPreview />} />
          </Route>
        </Routes>
      </div>
    );
  }
}


export default App;
