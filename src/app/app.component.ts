import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserDetailsService } from './shared/services/user-details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'This is the title';

constructor(private titleService: Title, private userDetailsService: UserDetailsService) {

}


  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.userDetailsService.recieveUserDetails();
  }
}
