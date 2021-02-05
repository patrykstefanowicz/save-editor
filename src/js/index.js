import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Save - editor 🚀')


const editor = localStorage.getItem('editor');
let result = '';

if (editor) {
    result = editor;
}
const entryInput = document.querySelector('.textarea--js');
entryInput.value = result;

const buttonSave = document.querySelector('.button__save--js');
buttonSave.addEventListener ('click' , () => {
    localStorage.setItem ('EditorSave' , entryInput.value);
})




const buttonLoad = document.querySelector('.button__load--js');
buttonSave.addEventListener ('click' , () => {
    localStorage.setItem ('EditorLoad' , entryInput.value);
})