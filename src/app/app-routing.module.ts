import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HellowworldComponent } from './pages/hellowworld/hellowworld.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "hellowworld", component: HellowworldComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
