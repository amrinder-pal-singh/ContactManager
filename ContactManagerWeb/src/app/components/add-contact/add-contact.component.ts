import { Component, OnInit } from '@angular/core';
import {ContactsManagerService} from 'src/app/services/contacts-manager.service'
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact = {
    firstname: '',
    lastname: '',
    email:'',
    phone:'',
    isactive: true
  };
  submitted = false;

  constructor(private contactsManagerService :ContactsManagerService) { }

  ngOnInit(): void {
  }

  saveContact():void{
const data={
    firstname: this.contact.firstname,
    lastname: this.contact.lastname,
    email: this.contact.email,
    phone: this.contact.phone,
    isactive: this.contact.isactive
  }

this.contactsManagerService.create(data)
.subscribe(response=>
  {
    console.log(response);
    this.submitted=true;
  },error=>{console.log(error);
  });
}
   newContact(): void {
    this.submitted = false;
    this.contact = {
      firstname: '',
    lastname: '',
    email:'',
    phone:'',
    isactive: true
    };
}

}
