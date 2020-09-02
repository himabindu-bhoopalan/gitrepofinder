import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  lastIndex =10;
  pageIndexnow=0
  arrayLength
  userdataLoaded:Boolean=false;
  repodataLoaded:Boolean=false;
  
  constructor(private repo: GitsearchService, private route: ActivatedRoute) {
    
   
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  //   if(this.pageIndexnow==0){
  //     document.getElementById('previous').style.backgroundColor="grey";
  //   }else{
  //     document.getElementById('previous').style.backgroundColor="white";
  //   }
  //   if(this.pageIndexnow==this.arrayLength){
  //     document.getElementById('next').style.backgroundColor="grey";
  //   }else{
  //     document.getElementById('next').style.backgroundColor="white";
  //   }
    
  // }
  ngOnInit(): void {
   
     
    

    this.repouser = this.route.queryParams.subscribe(params => {
      this.id = params['gitserch']


    });


    this.repo.getfol(this.id).subscribe((data) => {
      if(data==null){
        this.userdataLoaded=false
      }else{
        this.userdataLoaded=true;
        this.userData = data
      }
      

    })

    this.repo.getrepos(this.id).subscribe((data1) => {
      if(data1==null){
        this.repodataLoaded=false
      }else{
        this.repodataLoaded=true;
        this.repoData = data1;
        console.log(this.repoData);
      }
      
     

    })

  }

  //pagination
  NextPage() {
    console.log('pageindexnow-next-before',this.pageIndexnow);
    if(this.pageIndexnow==this.arrayLength-1){
      let y:HTMLElement =document.getElementById("next")
      y.style.backgroundColor="grey";
    }else{
      this.pageIndexnow++;
      this.startIndex = (this.pageIndexnow) * 10;
      this.lastIndex = this.startIndex + 10;
    }
    console.log("start,last-next"+this.startIndex,this.lastIndex);
    console.log('pageindexnow-next-after',this.pageIndexnow);
  }
  PreviousPage() {
    console.log('pageindexnow-prev-before',this.pageIndexnow);
    if(this.pageIndexnow==0){
      let y:HTMLElement =document.getElementById("previous")
      y.style.backgroundColor="grey";
    }else{
      let y:HTMLElement =document.getElementById("previous")
      y.style.backgroundColor="white";
      this.pageIndexnow--;
      this.startIndex = this.pageIndexnow * 10;
      this.lastIndex = this.startIndex + 10;
      console.log('pageindexnow-prev-after',this.pageIndexnow);
      console.log("start,last-prev"+this.startIndex,this.lastIndex);
    }
  
  }
  updateIndex(pageIndex) {
    console.log('pageindexnow-update-before',this.pageIndexnow);
    this.startIndex = pageIndex * 10;
    this.lastIndex = this.startIndex + 10;
    this.pageIndexnow=pageIndex;
    console.log('pageindexnow-update-after',this.pageIndexnow);
  }
  getArray(length) {
    // console.log(length/10);
    // console.log(Math.ceil(length/10));
    this.arrayLength=Math.ceil(length / 10);
    return new Array(Math.ceil(length / 10));
  }
}

