import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userData
  repoData
  id
  repouser
  startIndex = 0
  lastIndex = 10




  constructor(private repo: GitsearchService, private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.repouser = this.route.queryParams.subscribe(params => {
      this.id = params['gitserch']


    });


    this.repo.getfol(this.id).subscribe((data) => {

      this.userData = data

    })

    this.repo.getrepos(this.id).subscribe((data1) => {

      this.repoData = data1


    })

  }
  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 10;
    this.lastIndex = this.startIndex + 10;
  }
  getArray(length) {
    // console.log(length/10);
    // console.log(Math.ceil(length/10));

    return new Array(Math.ceil(length / 10));


  }
}

