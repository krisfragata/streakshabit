$(document).ready(()=>{
    // calling elements from html
    const next = document.querySelector("#next");
    const input = document.querySelector('#user-email')

    // when next button is clicked, check if email is in our registry
    next.addEventListener('click', ()=>{
        if(!emailCheck()){
            $("#noRecords").removeClass('hidden');
        }

    })

    // checks if it's a valid email address
    function isEmail(){
        
    }

    // function to check if email is in registry
    function emailCheck(){
        return false;
    }


    // function ajaxgo(){
    //     // get form data
    //     let data = new FormData();
    //     data.append("email", input.value);

    //     // AJAX
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("POST","dummy.php");
    //     xhr.onload = function() {
    //         if(this.response == "ok"){
    //             alert('ok');
    //         }
    //         else{
    //             alert('please enter a valid email');
    //         }
    //     };
    //     xhr.send(data);

    //     // prevent form from reloading
    //     return false;

    // }



})