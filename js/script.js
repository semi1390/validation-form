//called when the feedback is submitted
const submitFeedback = () => {
    //capture form data
    let feedbackForm = document.getElementById('feedbackForm');
    //validate and submit form data
    let feedback = Object.fromEntries(new FormData(feedbackForm));
    // console.log(feedback)

    let result = validateData(feedback);
    //return result
    return result;
}

//function called to valiadte and submit feedback data
const validateData = (feedback) => {
    console.log(feedback)
    //error object captures all the validation error
    let error = {
        userNameError: validateInput(feedback.username ,"username"),
        emailError : validateEmail(feedback.email),
        contactNoError: validateContactNo(feedback.contactNo),
        productError : validateInput(feedback.product , "product"),
        commentsError: validateComments(feedback.comments),
        purchaseDateError: validateInput(feedback.purchaseDate , "Purchase Date")
    }

    //filter out empty error msg for excluding them from error summary
    let errorMessages = Object.values(error).filter(e => e !== '');
    console.log(errorMessages)
    

    //if no errors, raise alert
    if (errorMessages.length === 0){
        alert("feedback Submitted");
        return true
    }
    else {
        //display galiadte summary with error messages
        displayValidationSummary(errorMessages);

        //displa=y error messages alongside the input feild
        displayIndividualErrorMesssages(error)

        return false;
    }
}

//function to display validation summary with error messages provide
function displayValidationSummary(errorMessages){
    document.getElementsByTagName('ul')[0].innerHTML = errorMessages.map(e => `<li>${e}</li>`)
    .join('');
}

//function to display error messages alongside the input fields in the small tags
function displayIndividualErrorMesssages(errorMessages){
    let smallElements = document.getElementsByTagName('small');

    [...smallElements].forEach((element) => {
        element.innerText = errorMessages[element.id]
    });

}

//disable all the future dates for purchase date input 

setMaxDate(document.getElementById('purchaseDate'));