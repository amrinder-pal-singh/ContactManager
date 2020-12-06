import { Component, OnInit } from '@angular/core';
import {ContactsManagerService} from 'src/app/services/contacts-manager.service'
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts:any;
  currentContact=null;
  currentIndex=-1;
  contact='';
  id='';
  email='';
  constructor(private contactService:ContactsManagerService) { }
  ngOnInit(): void {
    this.retrieveContacts();
  }
  retrieveContacts():void {
    this.contactService.getAll()
    .subscribe(
      data => {
        this.contacts = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });   
  }

  refreshList(): void {
    this.retrieveContacts();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  setActiveContact(contact, index): void {
    this.currentContact = contact;
    this.currentIndex = index;
  }

  removeAllContacts(): void {
    this.contactService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveContacts();
        },
        error => {
          console.log(error);
        });
  }

  searchEmail(): void {
    this.contactService.findContactByEmail(this.email)
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }




}
