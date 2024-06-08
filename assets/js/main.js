'use strict'

// show login form
{
  let trigger = document.querySelector('.try-free button');
  let loginWrapper = document.querySelector('.login-wrapper');
  let loading = document.querySelector('.loading');
  const body = document.body;
  let dots = document.querySelectorAll('.dot');
  trigger.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    loginWrapper.style.display = 'block'
    loginWrapper.style.transitionDelay = '0.4s';
    setTimeout(() => {
      loading.style.display = 'flex';
    },10);
    setTimeout(() => {
      loading.style.visibility = 'visible';
      loading.style.opacity = 1;
    },20)
    setTimeout(() => {
    loginWrapper.style.visibility = 'visible';
    loginWrapper.style.opacity = 1;
    },1200)
    setTimeout(() => {
      loading.style.visibility = 'hidden';
      loading.style.opacity = 0;
      loading.style.display = 'none';
    },1350)
    for (let elem of dots) {
      elem.style.animationPlayState = 'running';
    }
  })

  let home = document.querySelector('.home');
  home.addEventListener('click',() => {
    setTimeout(() => {
    loginWrapper.style.visibility = 'hidden';
    loginWrapper.style.opacity = 0;
    },10)
    setTimeout(() => {
      loginWrapper.style.display= 'none';
    },800)
    setTimeout(() => {
      body.style.overflowY = 'auto';
    },813)

  })
}

{
  let icon = document.querySelector('.eye-icon');
  let password = document.querySelector('#pass');

  icon.addEventListener('click',() => {
    if (password.type == 'password') {
      password.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }else{
      password.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  })
}

{
  // #message-wrapper move to top 
  let messageWrapper = document.querySelector('.message-wrapper');
  

// close #message-wrapper
  let close = document.querySelector('.close-message');
  close.addEventListener('click',() => {
    messageWrapper.style.transform = `translateY(100%)`;
  })

  let promise1 = new Promise((resolve,reject) => {
    setTimeout(function () {
      messageWrapper.style.transform = `translateY(0)`;
      resolve();
    },5000)
  })

  promise1.then((result => {
    setTimeout(() => console.log('success ... !'),10)
  }))
}

{
  // Login to Signup
  let goToCreate = document.querySelector('.go-to-signup a');
  let login = document.querySelector('.login-inner');
  let signUp = document.querySelector('.signup');

  let promise1 = new Promise(resolve => {
    goToCreate.addEventListener('click',(e) => {
      e.preventDefault();
      setTimeout(() => {
      login.style.transform = `translateX(-390px)`;
      },10)
      setTimeout(() => {
        signUp.style.zIndex = 10;
      },600)
      setTimeout(() => {
        login.style.transform = `translateX(0px)`;
        login.style.visibility = 'hidden';
        login.style.opacity = '0';
        login.style.zIndex = -1;
      },1000)
    })
  })

  // Signup to Login
  let goToLogin = document.querySelector('.go-to-login a');

  let promise2 = new Promise(resolve => {
    goToLogin.addEventListener('click',(e) => {
      e.preventDefault();
      setTimeout(() => {
      login.style.opacity = 1;
      login.style.visibility = 'visible';
      login.style.transform = `translateX(-390px)`;
      login.style.zIndex = '11'
      },10)
      setTimeout(() => {
        login.style.transform = `translateX(0)`;
      },1000)
    })
  })
}

// Validate Forms

// Validate Login
{

  // 1. Variables
  let signin = document.querySelector('.login .login-inner form');
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let username = signin.querySelectorAll('input')[0];
  let password = signin.querySelectorAll('input')[1];
  let submit = signin.getElementsByTagName('button')[0];
  let trigger = document.querySelector('.try-free button');
  let eye1 = signin.querySelector('.password .eye-icon');
  

  // 2. Styles 
  username.style.border = '2px solid transparent';
  username.style.transition = '0.313s ease';
  password.style.transition = '0.313s ease';
  password.style.border = '2px solid transparent';


  // 3. Type Control
  eye1.addEventListener('click',() => {
    if(password.type == "password") {
      password.type = "text";
      eye1.classList.remove('fa-eye-slash');
      eye1.classList.add('fa-eye');
    }else{
      password.type = "password";
      eye1.classList.remove('fa-eye');
      eye1.classList.add('fa-eye-slash');
    }
  })


  // 4. Submit Signin
  submit.addEventListener('click',(e) => {
    e.preventDefault();
    if (passwordRegex.test(password.value) && username.value.length >= 8){
      signin.submit();
    }
    if (username.value.length == 0) {
      username.focus();
    }
    if (username.value.length < 8) {
      username.focus();
    }
    if(username.value.length >= 8) {
      password.focus();
    }
  })


  /* // 5. Validate of inputs
  username.addEventListener('input',() => {
    if(username.value.length < 8 ) {
      username.style.borderColor = 'red'
    }
    if(username.value.length >= 8 ) {
      username.style.borderColor = 'green'
    }
    if(username.value.length == 0 ) {
      username.style.borderColor = 'transparent';
    }
  })

  password.addEventListener('input',(e) => {
    if(!passwordRegex.test(password.value)) {
      password.style.border = '2px solid red';
    }
    else{
      password.style.borderColor = 'green';
    }
    if(password.value.length == 0) {
      password.style.border = '2px solid transparent';
    }
  })
  */
}


// Validate Signup 
{
  // 1. Variables
  let signup = document.querySelector('.login .signup form');
  let username = signup.username;
  let password = signup.password[0];
  let rePassword = signup.password[1];
  let eye1 = signup.querySelectorAll('.eye-icon')[0];
  let eye2 = signup.querySelectorAll('.eye-icon')[1];
  let diagnosis = document.querySelector('.forgot span')
  let forgot = document.querySelectorAll('.forgot')[1];
  let progWrap = document.querySelector('.progress-wrapper');
  let progress = document.querySelector('.progress-inner');
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let submit = document.querySelector('.signup .submit');

  // 2. Styles 
  username.style.border = '2px solid transparent';
  username.style.transition = `0.313s ease`;
  password.style.transition = `0.313s ease`;
  password.style.border = '2px solid transparent';
  rePassword.style.transition = `0.313s ease`;
  rePassword.style.border = '2px solid transparent';

  // 3. Type Control 
  eye1.addEventListener('click',() => {
    if(password.type == "password") {
      password.type = "text";
      eye1.classList.remove('fa-eye-slash');
      eye1.classList.add('fa-eye');
    }else{
      password.type = "password";
      eye1.classList.remove('fa-eye');
      eye1.classList.add('fa-eye-slash');
    }
  })
  eye2.addEventListener('click',() => {
    if(rePassword.type == "password") {
      rePassword.type = "text";
      eye2.classList.remove('fa-eye-slash');
      eye2.classList.add('fa-eye');
    }else{
      rePassword.type = "password";
      eye2.classList.remove('fa-eye');
      eye2.classList.add('fa-eye-slash');
    }
  })


  // 4. Submit Signin
  submit.addEventListener('click',(e) => {
    e.preventDefault();
    if (passwordRegex.test(password.value) && username.value.length >= 8 && password.value == rePassword.value){
      signup.submit();
    }
    if (username.value.length == 0 && username.value.length < 8) {
      username.focus();
    }
    if(username.value.length > 8) {
      password.focus();
    }
    if(passwordRegex.test(password)) {
      password.blur()
      rePassword.focus();
    }
  })


  // 5. Validate of inputs 
  username.addEventListener('input',() => {
    if(username.value.length < 8 ) {
      username.style.borderColor = 'red'
    }
    if(username.value.length >= 8 ) {
      username.style.borderColor = 'green'
    }
    if(username.value.length == 0 ) {
      username.style.borderColor = 'transparent';
    }
  })

  password.addEventListener('input',() => {
    if (password.value.length < 8) {
      diagnosis.textContent = 'Weak';
      diagnosis.style.color = 'orangered';
      progWrap.style.borderColor = 'orangered';
      progress.style.backgroundColor = 'orangered';
      progress.style.width = '33%';
    }
    if (password.value.length >= 8) {
      diagnosis.textContent = 'Normal';
      diagnosis.style.color = 'orange';
      progWrap.style.borderColor = 'orange';
      progress.style.backgroundColor = 'orange';
      progress.style.width = '66%';
    }
    if (password.value.length >= 8 && passwordRegex.test(password.value)) {
      diagnosis.textContent = 'Strong';
      diagnosis.style.color = 'green';
      progWrap.style.borderColor = 'green';
      progress.style.backgroundColor = 'green';
      progress.style.width = '100%';
      password.style.borderColor = 'green';
    }
    if (!(passwordRegex.test(password.value))) {
      password.style.borderColor = 'red';
    }
    if (password.value != rePassword.value) {
      rePassword.style.borderColor = 'red';
    }
    if (password.value == rePassword.value) {
      rePassword.style.borderColor = 'green';
    }
    if(!(password.value == 0)) {
      forgot.style.display = 'flex';
    }
    if((password.value == 0)) {
      forgot.style.display = 'none';
      password.style.borderColor = 'transparent';
      rePassword.style.borderColor = 'transparent';
    }
  })

  rePassword.addEventListener('input',() => {
    if(!(passwordRegex.test(rePassword.value))){
      rePassword.style.borderColor = 'red';
    }
    if(rePassword.value == password.value){
      rePassword.style.borderColor = 'green';
    }
    if(rePassword.value.length == 0) {
      rePassword.style.borderColor = 'transparent';
    }
  })
}


// move square
{
  let content = document.querySelector('#main .content');
  let square = document.querySelector('#main .content .square');

  content.addEventListener('mouseover',() => {
    // setTimeout(() => {
    //   square.style.display = 'block';
    // },0);
    // setTimeout(() => {
    //   square.style.left = '100%';
    // },500);
    // setTimeout(() => {
    //   square.style.left = '100%';
    //   square.style.top = '100%';
    // },1000);
    // setTimeout(() => {
    //   square.style.left = '0%';
    //   square.style.top = '100%';
    // },1500);
    // setTimeout(() => {
    //   square.style.left = '0%';
    //   square.style.top = '0%';
    // },2000);
  })
}


{
  class Box {
    constructor(element) {
      this.element = element;
      this.colors = ['#538cff', '#0b9f15'];
      this.index = 0;
    }
  
    changeColor(color) {
      this.element.style.borderColor = color;
    }
  
    cycle() {
      this.changeColor(this.colors[this.index]);
      this.index = (this.index + 1) % 2;
    }
  }
  
  const $ = document;
  const boxElements = $.querySelectorAll('#section-3 .content .col-12');
  const box1 = new Box(boxElements[0]);
  const box2 = new Box(boxElements[1]);
  const box3 = new Box(boxElements[2]);
  
  function cycleBoxes() {
    const boxes = [box1, box2, box3];
    for (let i = 0; i < boxes.length; i++) {
      setTimeout(() => {
        boxes[i].cycle();
      }, i * 300);
    }
    setTimeout(() => {
      for (let i = boxes.length - 1; i >= 0; i--) {
        setTimeout(() => {
          boxes[i].cycle();
        }, (boxes.length - i - 1) * 300);
      }
      setTimeout(cycleBoxes, boxes.length * 300 * 2);
    }, boxes.length * 300);
  }
  
  cycleBoxes();
  
}

{
  const loading = document.querySelector('.loading.l-1');
  window.addEventListener('load',() => {
    loading.style.visibility = 'hidden';
    loading.style.opacity = 0;
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
  })
}