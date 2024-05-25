import {Component, OnInit} from '@angular/core';
import {Camera} from "@app/camera/model/Camerainterface";
import {CameraService} from "@app/camera/services/camera.service";

@Component({
  selector: 'app-list-camera',
  standalone: true,
  imports: [
  ],
  templateUrl: './list-camera.component.html'
})
export class ListCameraComponent implements OnInit {
  cameraList: Camera[] = [];

  constructor(
    private cameraService: CameraService
  ) {
  }

  ngOnInit() {
    this.onGenerateCameras();
  }


  onGenerateCameras() {
    this.cameraList = this.cameraService.generateCameras();
  }

}
