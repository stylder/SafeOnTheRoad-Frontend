import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GPSComponent } from './gps.component';

const routes: Routes = [
    { path: '', component: GPSComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GPSRoutingModule { }
