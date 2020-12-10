import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hammer-churrasco';

  toogle = true;

  toggleDisplay() {

    this.toogle = !this.toogle;

  }


}
