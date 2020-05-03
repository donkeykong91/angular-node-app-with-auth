import { Component } from '@angular/core';

@Component({
    selector: 'fe-messages',
    template: `this is the messages component <div *ngFor="let message of messages">{{ message.text }} by: {{ message.owner }}</div>`
})
export class MessagesComponent {
    messages = [{text: 'some text', owner: 'tim'}, {text: 'other message', owner: 'jane'}];
}
