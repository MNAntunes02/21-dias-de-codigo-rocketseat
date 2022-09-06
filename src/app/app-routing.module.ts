import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonAnimatedComponent } from './pages/button-animated/button-animated.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CardComponent } from './pages/card/card.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { HellowworldComponent } from './pages/hellowworld/hellowworld.component';
import { IndexComponent } from './pages/index/index.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ThemeComponent } from './pages/theme/theme.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "hellow-world", component: HellowworldComponent },
  { path: "button-animated", component: ButtonAnimatedComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "card", component: CardComponent },
  { path: "contador", component: ContadorComponent },
  { path: "theme", component: ThemeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
