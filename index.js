const passwordBtn = document.getElementById('passwordBtn')
const passwordLabel = document.getElementById('passwordLabel')
const passwordLength = document.getElementById('passwordLength')
const includeNumber = document.getElementById('includeNumber')
const includeSpecialChar = document.getElementById('includeSpecialChar')
const copyBtn = document.getElementById('copyBtn')

const arrLetter = ['abcdefghijklmnopqrstuvwxyz','!@#$%^&*()_+{}:"<>?[];']

function randomPassword(){
  const password = userSpecific(Number(passwordLength.value),includeNumber.checked,includeSpecialChar.checked)
  passwordLabel.innerText = password;
  return password
}

function userSpecific(Length,needNo,needSpecialCharacter){
  let password ='';
while(password.length + 1 <= Number(Length)){
  const randomLetter = arrLetter[0][getRandomNo(arrLetter[0].length)];
  const specialCharacters = arrLetter[1][getRandomNo(arrLetter[1].length)];
  const randomNumber = getRandomNo(9);

  if(needNo && needSpecialCharacter){
    password += specialCharacters + randomNumber
  }else if (needNo){
    password += randomLetter +randomNumber
  }else if (needSpecialCharacter){
    password += randomLetter + specialCharacters
  }else{
    password += randomLetter;
  }
 
}
return password;
}

function getRandomNo(range) {
  return Math.floor(Math.random() * range);
}




passwordBtn.addEventListener('click', randomPassword)

copyBtn.onclick = () => navigator.clipboard.writeText(passwordLabel.innerText)