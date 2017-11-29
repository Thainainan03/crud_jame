import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = "http://localhost:3100/addAccount";
  data: Array<any>;
  constructor(private http:Http) { 
    
    this.getData();
    this.getContracts();
  }
  
  getData(){
    return this.http.get(this.apiUrl)
    .map((res: Response)=> res.json())
  }

  getContracts(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
  ngOnInit() {

    }
}
