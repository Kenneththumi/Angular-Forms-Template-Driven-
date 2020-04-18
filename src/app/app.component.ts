import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('f',{static:true}) signUpForm:NgForm; //another way of getting form 

 defaultQuestion = "pet";
 answer = '';
 genders = [ 'male','female']
 user = {
       username:'',
       email:'',
       secret:'',
       answer:'',
       gender:'',
 }
 submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
     //Helper methods

    //  this.signUpForm.setValue({       //Resets/over-writes the whole form with the provided values
    //       userData:{
    //           username:suggestedName,
    //           email:''
    //       },
    //       secret:'pet',
    //       questionAnswer:'teacher',
    //       gender:'male'
    //  })

     this.signUpForm.form.patchValue({  //Over-writes the only controls provided, others values if present remains
          userData:{
              email:'kenmwangi4237@gmail.com'
          }
     })
  }

  // onSubmit(form:NgForm){
  //      console.log(form)
  // }


  // onSubmit(){
  //   console.log(this.signUpForm)
  // }
   onSubmit(){
        this.submitted = true;

        this.user.username = this.signUpForm.form.value.userData.username;
        this.user.email = this.signUpForm.form.value.userData.email;
        this.user.secret = this.signUpForm.form.value.secret;
        this.user.answer = this.signUpForm.form.value.questionAnswer;
        this.user.gender = this.signUpForm.form.value.gender;

        //reset the form
        this.signUpForm.reset();
   }

}
