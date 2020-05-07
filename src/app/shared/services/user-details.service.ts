import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { UserDetails } from "../models/user-details";

@Injectable({
  providedIn: "root",
})
export class UserDetailsService {
  public userDetails: BehaviorSubject<
    UserDetails | boolean
  > = new BehaviorSubject<UserDetails | boolean>(null);

  constructor(private http: HttpClient) { }
  recieveUserDetails(): void {
    this.http.get("http://localhost:3000/auth/userdetails").subscribe(
      (auth: any) => {
        if (!auth) {
          this.userDetails.next(false);
        } else {
          this.userDetails.next({
            id: auth.id,
            username: "",
            email: "",
          });
        }
      },
      (error) => {
        console.log(`unable to get user details ${error.message}`);
        this.userDetails.next({
          id: 1,
          username: "Barak",
          email: "123",
        });
        //this.userDetails.next(false);
      }
    );
    this.userDetails.next(null);
  }
}
