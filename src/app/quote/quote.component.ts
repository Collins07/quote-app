import { Component, OnInit } from '@angular/core';
import { Toadd } from '../Toadd';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  toadds: Toadd[]=[];
  newToadd: string;

  saveToadd(){
    if(this.newToadd){
      let toadd = new Toadd();
      toadd.name = this.newToadd;
      toadd.isCompleted = true;
      this.toadds.push(toadd);
      this.newToadd = "";
    }else{
      alert("please add quote")
    }
  }

  remove(id:number){
    this.toadds = this.toadds.filter((v,i)=>i !==id);
  }

  constructor() { }
  message="welcome to moringa"

  ngOnInit(): void {
  }

}
