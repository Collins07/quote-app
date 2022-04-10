import { Component, Input, OnInit } from '@angular/core';
import { Toadd } from '../Toadd';
import { Author } from '../Author';
import { Sender } from '../Sender';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: string;
  toadds: Toadd[]=[];
  newToadd: string;

  authors: Author[]=[];
  newAuthor: string;

  senders: Sender[]=[];
  newSender: string;

  saveToadd(){
    if(this.newToadd){
      let toadd = new Toadd();
      toadd.name = this.newToadd;
      toadd.isCompleted = true;
      this.toadds.push(toadd);
      this.newToadd = "";
    }else{
      alert("please share quote")
    }
    

    if(this.newAuthor){
      let author = new Author();
      author.name = this.newAuthor;
      author.isCompleted = true;
      this.authors.push(author);
      this.newAuthor = "";
    }else{
      alert("please name of Author")
    }

    if(this.newSender){
      let sender = new Sender();
      sender.name = this.newSender;
      sender.isCompleted = true;
      this.senders.push(sender);
      this.newSender = "";
    }else{
      alert("please enter your name")
    }
  }

  remove(id:number){
    this.authors = this.authors.filter((v,i)=>i !==id);
    this.toadds = this.toadds.filter((v,i)=>i !==id);
    this.senders = this.senders.filter((v,i)=>i !==id);
  }


  constructor() { }


  ngOnInit(): void {
  }

}
