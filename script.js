
// function tackleOTPBoxes(){
//     const box = document.getElementById('otp-box-list-id');
//     box.addEventListener('input', function(e){
//            const val = e.target.value;
//            if(isNaN(val)){
//             target.value = "";
//             return ;
//            }

//            const nextElements = e.target.nextElementSibling;
//            if(nextElements){
//             nextElements.focus();
//            }
//     })
// }

// tackleOTPBoxes();








function OTPBoxList(){
    const otpBox = document.getElementById("otp-box-list-id");
    otpBox.addEventListener('input', function(e){
        const target = e.target;
        const value = target.value;

        if(isNaN(value)){
           target.value = "";
           return;
        }

        console.log(value);


    })
}


OTPBoxList();























