import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Tabview from './components/tab-view/tab-view.component';
import ItemPreview from './components/item-preview/item-preview.component'
import Filter from './components/filter/filter.component';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        station_code: 6,
        name: "Malcolm Parker",
        url: "https://picsum.photos/200"
      },
    }
  }
  // componentDidMount() {
  //   fetch('https://assessment.api.vweb.app/user')
  //     .then((response) => response.json())
  //     .then((user) => this.setState({ user: user }, () => console.log(this.state)))
  // }


  render() {
    return (
      <div className="App">
        <Header user ={this.state.user} />
        <Routes>
          <Route path="/tab-view" element={<Tabview UserData={this.state.user} />} >
            <Route path='nearest-rides' element={<ItemPreview />} />
            <Route path='upcoming-rides' element={<ItemPreview />} />
            <Route path='past-rides' element={<ItemPreview />} />
          </Route>
          <Route path="/filter" element={<Filter />}/>
        </Routes>
      </div>
    );
  }
}


export default App;
