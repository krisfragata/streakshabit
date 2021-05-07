$(document).ready(()=>{
    // calling elements from html
    const signup = document.querySelector("#signup");
    const input = document.querySelector('#user-email');
    const  password = document.querySelector("#password");
    const chosen = document.getElementsByName('charge');
    const name = document.querySelector('#name');
    
    // transfers email from last page and adds it as value for email on form
    window.addEventListener('load', ()=>{
        let emailInput = localStorage.getItem('emailInput');
        console.log(emailInput)
        // $("#user-email").attr('value', emailInput);//
        input.value = emailInput;
        input.placeholder = emailInput;
    })

    // an array that holds boolean values of whether or not inputs are valid
    const validInputs = {
        email: false,
        password: false,
        chosen: false,
        name: false
    }

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(e) {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
      signup.click();
    }
  });

    // when signup button is clicked, check if it is a valid email,
    signup.addEventListener('click', (e)=>{
        e.preventDefault();
        validInputs['email'] = isEmail();
        validInputs['password'] = passwordCheck();
        validInputs['chosen'] = checkChoose();
        validInputs['name'] = checkName();
        if(!areInputsValid())return;
        registerUser();

        console.log(validInputs);
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

    // password checks
    function passwordCheck(){
        const passRqmt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!(password.value.match(passRqmt))){
            $("#weakPass").removeClass('hidden');
            return false;
        }
        else{
            $('#weakPass').addClass('hidden');
            return true;
        }
    }

    // creating value of chosen charge
    let charge = "";

    // checks if a pet or plant is chosen
    function checkChoose(){
        if($("input[type=radio]:checked").length > 0) {
            $("#choose").addClass('hidden');  
            for(let i = 0; i<chosen.length; i++){
                if(chosen[i].checked){
                    charge = chosen[i].value;
                    console.log(charge)
                    return true;
                }
            }
        }
        else{
            $("#choose").removeClass('hidden');  
            return false;
        }

    }

    
    // checks if there is a nae typed in the "name" input
    function checkName(){
        let value = name.value;
       if(name.value == "" || name.value== "Pet/Plant name"){
            $('#name-alert').removeClass('hidden');
            return false
        }
        else{
            $('#name-alert').addClass('hidden');
            return true;
        }
    }

    // checks if all inputs are valid
    function areInputsValid(){
        let inputs = Object.values(validInputs);
        for(let i = 0; i<inputs.length; i++){
            if(inputs[i] == false)return false;
        }
        // console.log(true);
        return true;
        // console.log(inputs)
    }

    // once all inputs have passed, grabs values of inputs and sends to the server
    function registerUser(){
        // event.preventDefault();
        const userEmail = input.value;
        const userPass = password.value;
        console.log({email: userEmail, password: userPass})
        window.open('main.html')
    }
});