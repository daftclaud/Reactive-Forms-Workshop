import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  private registeredEmails = [
    'claudio@openforge.io',
    'cdsmileyone@gmail.com',
    'cr7@mac.com',
    'messi@fcbarcelona.com'
  ];

  constructor() { }

  emailTaken(email: string): Promise<boolean> {
    return new Promise(res => {
      setTimeout(() => {
        res(this.registeredEmails.includes(email));
      }, 500);
    });
  }
}
