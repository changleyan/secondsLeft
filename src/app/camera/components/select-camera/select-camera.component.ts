import { Component } from '@angular/core';
import {ListCameraComponent} from "@app/camera/components/list-camera/list-camera.component";
import {AtributesComponent} from "@app/camera/components/atributes/atributes.component";
import {CameraService} from "@app/camera/services/camera.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-select-camera',
  standalone: true,
  imports: [
    ListCameraComponent,
    AtributesComponent,
    NgClass
  ],
  templateUrl: './select-camera.component.html'
})
export class SelectCameraComponent {
  cameraFinded = true;
  textCamera: string = '---'

  constructor(private cameraService: CameraService ) { }


  onFindCamera() {
    this.cameraFinded = this.cameraService.findMatchingCamera(this.cameraService.searchParams.distance, this.cameraService.searchParams.light, this.cameraService.cameraList);
    this.textCamera = this.cameraFinded ? 'The camera was found in the list, so that set of cameras will be sufficient.' : 'The camera was not found in the list, so another set of cameras will be required..';
  }
}
