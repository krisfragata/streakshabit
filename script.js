$(document).ready(()=>{
    // calling elements from html
    const next = document.querySelector("#next");
    const input = document.querySelector('#user-email');
    const signUp = document.querySelector('#signUp');

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(e) {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
      next.click();
    }
  });

    // when next button is clicked, check if it is a valid email,
    next.addEventListener('click', (e)=>{
        e.preventDefault();
        if(!isEmail()){return};
        if(!emailCheck()){
            e.preventDefault();
            $("#noRecords").removeClass('hidden');
        }

    })

    // checks if user input is a valid email address
    function isEmail(){
        // get form data
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!(input.value.match(emailFormat))){
            $("#notEmail").removeClass('hidden');
            $("#noRecords").addClass('hidden');
            return false;
        }
        else{
            $("#notEmail").addClass('hidden');
            return true;
        }

    }

    // function to check if email is in registry
    function emailCheck(){
        return false;
    }

    // once signup button is clicked, collects email and
    // puts it on the next page to avoid user having to
    // re-type it in
    signUp.addEventListener('click', ()=>{
        let email = input.value;
        localStorage.setItem('emailInput', email);
    })



})