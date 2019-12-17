import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public sideNavState$: Subject<boolean> = new Subject();

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    console.log(userData);
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async login(postData) {
    console.log(postData);
    
    const loginApiResponce = {
      name: 'Harkesh',
      uid: 1,
      token: '2323523523DFSWERWERWER'
    };
    await sessionStorage.setItem('userData', JSON.stringify(loginApiResponce));
    return true;
  }

  public async logout() {
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
}
