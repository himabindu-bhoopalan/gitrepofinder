import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  repoData
  repoform
  userData
 
    constructor(private router:Router) {
      this.repoform= new FormGroup({
       
        "gitserch":new FormControl('',Validators.required),
      })
     }


  ngOnInit(): void {
  }

  navrepo(){
    // alert('bla');
    let id=this.repoform.value
    console.log(id.gitserch);
    
    this.router.navigate(['/repos'], { queryParams: id });
  }

  
}