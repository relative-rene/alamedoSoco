import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MessageService } from './message.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  id: number;
  editMode = false;
  messageForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  onSubmit() {
    // const newMessage = new Message(
    //   this.messageForm.value['email'],
    //   this.messageForm.value['description']);
    if (this.editMode) {
      this.messageService.updateMessage(this.id, this.messageForm.value);
    } else {
      this.messageService.addMessage(this.messageForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let messageEmail = '';
    let messageDescription = '';

    if (this.editMode) {
      const message = this.messageService.getMessage(this.id);
      messageEmail = message.email;
      messageDescription = message.description;
    }

    this.messageForm = new FormGroup({
      'email': new FormControl(messageEmail, Validators.required),
      'description': new FormControl(messageDescription, Validators.required)
    });
  }
}
