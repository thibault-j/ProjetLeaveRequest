import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {SharedService} from '../../service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private sharedService: SharedService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  isPageSignIn(): boolean {
    return this.sharedService.pageSignin;
  }

  hasRole(role: string): boolean {
    return this.sharedService.hasRole(role);
  }

  isSimpleUser(): boolean {
    return this.sharedService.isSimpleUser();
  }

}
