import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/_variables.scss'
import './styles/resets.scss'
import "./styles/base.scss"
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

// Define the onBlur function
/**function onBlur() {
    console.log('Input field lost focus');
    // Add any additional logic you want to execute when the input loses focus
}**/


// Make functions available globally
//window.onblur = onBlur;
// Rest of your JavaScript code
alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit
}