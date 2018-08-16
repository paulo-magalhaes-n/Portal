import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

var url = 'http://localhost:5021/company/';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  title = 'Portal Angular - Trestto';
  
  id: string = '';
  name: string = ''; 

  

  listAPICompany;

  constructor(http: HttpClient) {
    var that = this;

    http.get(url).subscribe(function(listCompany){

      console.log(listCompany);
      that.listAPICompany = listCompany;
    })
  console.log("Load API 2...")

  }

  Save(id, name){

    console.log("passed the save method")

    this.listAPICompany.push({"id": this.id, "name": this.name});
    console.log(this.listAPICompany);


    this.id = ""
    this.name = ""
    
  }

  ngOnInit() {
  }

}
