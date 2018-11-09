import { NgModule } from '@angular/core'; //import คือการเลือกไลบารีมาใช้ที่ป็นตัวระบุเส้นทาง
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from'@angular/router';

import { HomeComponent } from'./app/home/home.component';
import{ ContactComponent } from'./app/shared/contact/contact.component';
import{ ProductComponent } from'./app/shared/product/product.component';
const routes : Routes=[
{path: '',redirectTo:'/home',pathMatch:'full'},
{path: 'home',component:HomeComponent},
{path: 'contact',component:ContactComponent},
{path: 'product',component:ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }