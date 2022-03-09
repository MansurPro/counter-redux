import store from "./store";
import * as actions from "./actions";
import { bindActionCreators } from "redux";

const countDisplay = document.getElementById('count-display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

const {inc, dec} = bindActionCreators(actions, store.dispatch)

incrementButton.addEventListener('click', inc)
decrementButton.addEventListener('click', dec)

store.subscribe(() => countDisplay.value = store.getState())