import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  brandLogoPath: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    document.body.style.backgroundColor = "black";
    this.brandLogoPath = 'assets/images/dxc_logo_hz_wht_rgb.png'
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('login');
  }

  ngOnDestroy(){
    document.querySelector('body').classList.remove('login');
  }

  onSignInClick() {
    this.router.navigate(['main/dashboard']);
  }
}
