const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');

function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkRequired(inputArr){
  let isRequired = false;
  inputArr.forEach((input)=>{
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} 입력해야합니다.`)
      isRequired = true;
    }
  });
  return isRequired;
}

function checkLength(input, min, max){
  if(input.value.length < min){
    showError(
      input,
      `${getFieldName(input)}은 최소 ${min}글자를 초과해야한다.`
    );
  }else if(input.value.length > max){
    showError(
      input,
      `${getFieldName(input)}은 최대 ${max} 글자자미만이다.`
    );
  }else{
    showSuccess(input);
  }
}

function checkEmail(input){
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(emailRegex.test(input.value)){
    showSuccess(input);
  }else{
    showError(
      input,
      `${getFieldName(input)}의 형식이 올바르지 않습니다.`
    )
  }
}

function checkPassword(input1, input2){
  if(input1.value !== input2.value){
    showError(
      input2,
      `${getFieldName(input2)}가 일치 하지 않습니다.`
    );
  } else{
    showSuccess(input1)
    showSuccess(input2)
  }
}

function getFieldName(input){  
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

submit.addEventListener("click", (e)=>{
  
  if(checkRequired([username, email, password, password2])){
    checkLength(username, 3, 10);
    checkEmail(email)
    checkPassword(password, password2)
    checkLength(password, 6, 20);
    
  }

})
