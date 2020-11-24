import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {AuthResponseModel} from '../../models/auth-response.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private user: User;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.user = new User();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // tslint:disable-next-line:typedef
  public signup(name: string, email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users/signup`,
      {
        username: name,
        email: email,
        password: password
      },
      {observe: 'response'}).pipe(map( responseData => {
        console.log(responseData);
        let random: AuthResponseModel = new AuthResponseModel();
        let response;
        console.log(responseData.body);
        if (responseData.body.hasOwnProperty('result')){
          response = responseData.body as {result: {message: string}};
          random.message = response.result.message;
        }else{
          response = responseData.body as {error: {message: string}};
          random.message = response.error.message;
        }
        random.status = responseData.statusText;
        console.log(random);
        localStorage.setItem('random', JSON.stringify(random));
        return random;
    }));
  }

  // tslint:disable-next-line:typedef
  public login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users/signin`,
      {
        email,
        password
      },
      {observe: 'response'}).pipe(map(responseData => {
      let random: AuthResponseModel = new AuthResponseModel();
      let response;
      if (responseData.body.hasOwnProperty('result')){
       response = responseData.body as {result: {message: string}};
       random.message = response.result.message;
      }else{
        response = responseData.body as {error: {message: string}};
        random.message = response.error.message;
      }
      console.log(random.message);
      random.status = responseData.statusText;
      this.user.email = email;
      this.user.name = '';
      this.user.authToken = responseData.headers.get('Authorization');
      console.log(responseData.headers);
      this.currentUserSubject.next(this.user);
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      console.log(random);
      localStorage.setItem('random', JSON.stringify(random));
      return random;
    }));
  }

}
