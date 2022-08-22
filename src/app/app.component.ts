import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstagramComponent } from './components/instagram/instagram.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '21-dias-de-codigo-rocketseat';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(InstagramComponent);
  }


}
