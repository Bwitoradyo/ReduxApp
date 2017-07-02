"use strict"

import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';


//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, updateBooks, deleteBooks} from './actions/booksActions';


//Step 1 create the store
const middleware =  applyMiddleware (logger);
const store = createStore(reducers, middleware);

store.subscribe(() => {
    console.log('current state is ' , store.getState());
})

//Step 2 create and dispatch action
store.dispatch(postBooks(
    [
        {
            id:1,
            title:'this is book title 1',
            price: 50.33,
            description: 'this is the book description 1'
        },
        {
            id:2,
            title:'this is book title 2',
            price: 43.33,
            description: 'this is the book description 2'
        }
    ]
))


//DELETE a book
store.dispatch(deleteBooks(
    {id: 1}
))

//UPDATE a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'Learn React in 24hr'
    }
))

//-->> CART ACTIONS <<--
// ADD TO CART
store.dispatch(addToCart([{id:1}]))


