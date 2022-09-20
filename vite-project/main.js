import './style.css'
import { addNumbers } from './math.mjs'
import { showMsg } from '../actions.mjs';

const result = addNumbers(100,100);
console.log("result iiis",result)
showMsg("Hello i am the message bitch")