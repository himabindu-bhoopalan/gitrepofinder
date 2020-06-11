import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
listData
repoform
  constructor(private repo:GitsearchService,private router:Router) {
    this.repoform= new FormGroup({
      "gitserch":new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
  }

}


