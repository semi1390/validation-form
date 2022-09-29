//functiom to valiadatre required input
const isEmpty = value => value === ''|| value === undefined || value === null ;
const validateInput = (value , fieldName) => isEmpty(value) ? `${fieldName} cannot be blank`: '';

//function to valiadte email
const validateEmail = (email) => {
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    let emailError = validateInput(email ,"Email");
    return emailError !== ''? emailError : !email.match(validRegex) ? "invalid Email": '';
}

//functiom to validate contact no
const validateContactNo = (contactNo) => {
    // pattern of 099999999999
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let contactNoError = validateInput(contactNo, "contact No");

    return contactNoError !== '' ? contactNoError : !contactNo.match(validRegex) ? "invalid contact No" : '';
}

//function to validate comments
const validateComments = (comments) => {
    let commentsError = validateInput(comments , "comments");

    return commentsError !== '' ? commentsError : comments.length > 70 ? 'comments should contain minimum 70 charater' : '';
}

const setMaxDate = element => {
    element !== null ? element.setAttribute('max', new Date().toISOString().split("T")[0]) : element ;
}