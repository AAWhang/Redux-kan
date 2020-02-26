import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import Posts from './components/posts'
import Store from './store/store'
import { connect, Provider } from 'react-redux'
import { bindActionCreators } from 'redux'



//
// import fetchProductsAction from './fetchProducts'
// import {getProductsError, getProducts, getProductsPending} from './reducer'

import LoadingSpinner from './logo.svg'

import './App.css'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.callingKanye()
  }

  callingKanye() {
    // fetch("https://api.kanye.rest/")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         quote: result.quote
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }



  render() {
       return (
         <Provider store={Store}>
           <div className="App-header" onClick={() => this.callingKanye()}>
            <div class="textbox">
                 <Posts />
             </div>
           </div>
         </Provider>
       );
     }
 }

export default App
