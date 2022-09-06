import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { HellowworldComponent } from './pages/hellowworld/hellowworld.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonAnimatedComponent } from './pages/button-animated/button-animated.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './pages/card/card.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { MaterialModule } from "./material-module/material-module.module";
import { ThemeComponent } from './pages/theme/theme.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    InstagramComponent,
    HellowworldComponent,
    ButtonAnimatedComponent,
    CalculatorComponent,
    PageNotFoundComponent,
    CardComponent,
    ContadorComponent,
    ThemeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
