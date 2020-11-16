import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {AuthResponseModel} from '../../models/AuthResponse.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  // tslint:disable-next-line:typedef
  public login(email: string, password: string) {
    return this.http.post<AuthResponseModel>(`${environment.apiUrl}/login`,
      {
        email,
        password },
      {observe: 'response'}).pipe(map(responseData => {
      let status: AuthResponseModel;
      status = responseData.body;
      return status;
    }));
  }

  public signup(name: string, email: string, password: string) {
    return this.http.post<{status: boolean}>(`${environment.apiUrl}/users/signup`,
      { username: name,
        email: email,
        password: password },
      {observe: 'response'}).pipe(map(responseData => {
      let status: {status: boolean};
      status = responseData.body;
      return status;
    }));
  }
}
