import { Component } from '@angular/core';
import { AuthService } from './core/guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WiGame';

  constructor(private authService: AuthService) {}

  isConnecte() {
    return this.authService.isConnecte();
  }

  deconnecter() {
    this.authService.clearStorage();
    window.location.href = '/accueil';
  }
}
