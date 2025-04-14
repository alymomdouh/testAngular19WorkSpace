import { Component, inject } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  hidePassword = true;
  hideConfirmPassword = true;
  private navigationService = inject(NavigationService);

  navigateToLogin(): void {
    this.navigationService.navigateByUrl('/account/login');
  }
}
