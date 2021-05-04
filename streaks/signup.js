$(document).ready(()=>{
    // calling elements from html
    const signup = document.querySelector("#signup");
    const input = document.querySelector('#user-email');
    const  password = document.querySelector("#password");
    const chosen = document.getElementById('reg-form');
    const name = document.querySelector('#name');
    

    // selects the title to go back home
    // $(".left-box").onclick(window.location="index.html" )

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
        isEmail();
        passwordCheck();
        checkChoose();
        checkName();
        // if(!emailCheck()){
        //     e.preventDefault();
        //     $("#noRecords").removeClass('hidden');
        // }

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
    function areInputsValid(){
        return false;
    }

    // password checks
    function passwordCheck(){
        const passRqmt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!(password.value.match(passRqmt))){
            $("#weakPass").removeClass('hidden');
        }
        else{
            $('#weakPass').addClass('hidden');
        }
    }

    // checks if a pet or plant is chosen
    function checkChoose(){
        if($("input[type=radio]:checked").length > 0) {
            $("#choose").addClass('hidden');  
        }
        else{
            $("#choose").removeClass('hidden');  
        }


        console.log()
    }

    // checks if there is a nae typed in the "name" input
    function checkName(){
        let value = name.value;
       if(name.value == ""){
            $('#name-alert').removeClass('hidden');
        }
        else{
            $('#name-alert').addClass('hidden');
        }
    }
});