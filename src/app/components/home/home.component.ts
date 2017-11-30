import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private accountNumber:string;
  private branchName:string;
  private balance:string;
  private accValue:string;
  private braValue:string;
  private balValue:string;
  
  results = [];
  apiUrl = "http://localhost:3100/addAccount";
  constructor(private http:Http,private accountServive : AccountService,private router : Router) { 

  }

  ngOnInit() {
    /*this.accountServive.getData();
    this.getAccount();*/
    this.getAccount();
  }
  getAccount() {
    this.accountServive.getUsers()
      .map(res => res.json())
      .subscribe(results => this.results = results);
      console.log(this.results);
  }

  addAccount() {
    console.log(this.accountNumber+','+this.branchName+','+this.balance);
    var data = {
      accountNumber: this.accountNumber,
      branchName: this.branchName,
      balance: this.balance
    };
    alert("insert data : Account Number =>"+ this.accountNumber+" complete");
    var result = this.accountServive.addAccount(data)
      .subscribe(res => {
        if (res.success == "true") {
          this.results.unshift(data);
        }
        this.accountNumber = "";
        this.branchName = "";
        this.balance = "";
        console.log(res);
      });
    location.reload();
  }

  UpdateAccount() {
    console.log(this.accValue + ',' + this.braValue + ',' + this.balValue);
    var data = {
      accountNumber: this.accValue,
      balance: this.balValue
    };
    var result = this.accountServive.UpdateAccount(data)
      .subscribe(res => {
        if (res.success == "true") {
          this.results.unshift(data);
        }
        this.accValue = "";
        this.braValue = "";
        this.balValue = "";
        console.log(res);
      });
    location.reload();
  }

  DeleteAccount() {
    console.log(this.accValue + ',' + this.braValue + ',' + this.balValue);
    var data = {
      accountNumber: this.accValue,
    };
    var result = this.accountServive.DeleteAccount(data)
      .subscribe(res => {
        if (res.success == "true") {
          this.results.unshift(data);
        }
        this.accValue = "";
        this.braValue = "";
        this.balValue = "";
        console.log(res);
      });
    location.reload();
  }



  getValue(a,b,c){
    this.accValue = a;
    this.braValue = b;
    this.balValue = c;
  }

}
