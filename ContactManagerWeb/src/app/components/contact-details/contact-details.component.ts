import { Component, OnInit } from '@angular/core';
import {ContactsManagerService} from 'src/app/services/contacts-manager.service'
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
currentContact=null;
message='';
  constructor(private contactService:ContactsManagerService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.message='';
    this.getContact(this.route.snapshot.paramMap.get('id'));
  }
  getContact(id): void {    
  this.contactService.get(id).subscribe(data=>{
this.currentContact=data;
console.log(data);

  },error=>{console.log(error);
  });
  }

  updateActive(status):void{
const data={firstName:this.currentContact.firstName,
lastName:this.currentContact.lastName,
email:this.currentContact.email,
phone:this.currentContact.phone,
id:this.currentContact.id,
isActive:status
};

this.contactService.update(this.currentContact.id,data)
.subscribe(
  response=>{
    this.currentContact.isActive=status;this.message="The contact was updated successfully!"
  },error=>{console.log(error)});
}

updateContact():void{
  this.contactService.update(this.currentContact.id,this.currentContact)
  .subscribe(
    response=>{console.log(response); this.message="The contact was updated successfully!"},
    error=>{console.log(error);});
}

deleteContact():void{
  this.contactService.delete(this.currentContact.id)
  .subscribe(response=>{console.log(response);
  this.router.navigate(['/contacts']);
  },error=>{console.log(error);});
}


}
