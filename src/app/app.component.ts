import { Component, Inject} from '@angular/core';

import {HttpClient} from '@angular/common/http';

var url = 'http://localhost:5021/company/';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Empresa';

  listAPICompany;

  constructor(@Inject(HttpClient) http){

    var that = this;//faz diferença declarar o this dentro do construtor

    //constructor(http: HttpClient){
    http.get(url).subscribe(function(listaCompany){
      
      console.log(listaCompany);
      that.listAPICompany = listaCompany;

    })

    console.log("Loaded API..")

  }
}
