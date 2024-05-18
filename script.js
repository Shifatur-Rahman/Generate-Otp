
function tackleOTPBoxes(){
    const box = document.getElementById('otp-box-list-id');
    box.addEventListener('input', function(e){
           const val = e.target.value;
           if(isNaN(val)){
            target.value = "";
            return ;
           }

           const nextElements = e.target.nextElementSibling;
           if(nextElements){
            nextElements.focus();
           }
    })
}

tackleOTPBoxes();