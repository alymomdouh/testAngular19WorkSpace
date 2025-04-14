import { Component, inject } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;
  private navigationService = inject(NavigationService);

  navigateToRegister(): void {
    this.navigationService.navigateByUrl('/account/register');
  }

  login(loginForm: NgForm): void {
    console.log('loginForm', loginForm.valid, loginForm.value);
  }
  
}
