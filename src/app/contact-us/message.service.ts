import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Message} from '../_interfaces/message.model';

export class MessageService {
  messagesChanged = new Subject<Message[]>();
  private message: Message[] = [];

  constructor() { }
}
