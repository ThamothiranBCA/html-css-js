import { Component } from '@angular/core';

@Component({
  selector: 'app-component-match',
  templateUrl:'./component-match.component.html',
  styleUrls: ['./component-match.component.scss']
})
export class ComponentMatchComponent {
  isActive: boolean = true;
  username: string = 'John Doe';

  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }

  
  }
