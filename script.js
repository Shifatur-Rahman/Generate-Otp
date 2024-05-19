
let generatedOTP;
// 1.    OTP Box -> code enter and next child box focus  

function OTPBoxList(){
    const otpBox = document.getElementById("otp-box-list-id");
    otpBox.addEventListener('input', function(e){
        const target = e.target;
        const value = target.value;

      //  console.log(target);

        if(isNaN(value)){
           target.value = "";
           return;
        }

        const nextElement = target.nextElementSibling;
        if(nextElement){
            nextElement.focus();
        }

        validateOtp();

    })
}

//  2.    Generate 4 digit otp

function generateOTP(){
    const otpElement = document.getElementById("generate-otp-id");
    generatedOTP = Math.floor(1000 + Math.random() * 9000 );
    // console.log(generateOTP);
    otpElement.innerHTML = `Your OTP: ${generatedOTP}`;
}

//  3. otp validation

function validateOtp(){
    let otpMessage = document.getElementById('result-id');
    let typedNumber = "";
    const boxListElem = document.getElementById("otp-box-list-id");
    [...boxListElem.children].forEach((element)=>{
        typedNumber += element.value;
    });

    console.log(generatedOTP, typedNumber);

    const result = (generatedOTP === parseInt(typedNumber,10));

   if(result){
    otpMessage.innerHTML = "OTP Validate successfully";
    otpMessage.classList.remove('fail');
    otpMessage.classList.add('success');
   } else{
    otpMessage.innerHTML = "OTP is Invalid";
    otpMessage.classList.remove('success');
    otpMessage.classList.add('fail');
   }
}




OTPBoxList();
setTimeout(generateOTP,2000);



//                    new things

//   1. nextElementSibling
//   2. focus()
























