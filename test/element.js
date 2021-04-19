describe("interaction with web element",function(){

it("Click the sign in button on My Store Landing page",function(){

 browser.url('/');
 //browser.maximizeWindow();
//expect(browser).toHaveTitle('My Store');
// // browser.maximizeWindow();
 const btnSignIn=$('#a.login');
  btnSignIn.click();



// browser.elementClick('#a.login');

 // browser.elementAddValue('input#email','thontanaalvicky@gmail.com');
 //const txtEmail=$('input#email')
// //txtEmail.isExisting;

 //browser.txtEmail.addValue('thontanaalvicky@gmail.com');
// const txtPassword=$('input#passwd');
// txtPassword.setValue('password');
// const btnSignInLogin=$('button#SubmitLogin');
// btnSignInLogin.click();


});

// it("Login using Valid credentials on the MyStore Login page",function(){
//     browser.url('/');
   

     
//     });


    
});