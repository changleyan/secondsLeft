import {Routes} from '@angular/router';
import {ControlComponent} from "@core/comonents/control/control.component";

export const routes: Routes = [

  {path: 'Start', component: ControlComponent},
  {
    path: 'Timer',
    loadComponent: () => import('./timer/components/timer/timer.component').then(mod => mod.TimerComponent)
  },
  {
    path: 'Camera',
    loadComponent: () => import('./camera/components/select-camera/select-camera.component').then(mod => mod.SelectCameraComponent)
  },

  {path: '**', redirectTo: '/Start', pathMatch: 'full'}

];
