import {Component, OnInit} from '@angular/core';
import {CameraService} from "../../services/camera.service";
import {CameraParams} from "../../model/Camerainterface";

@Component({
  selector: 'app-atributes',
  standalone: true,
  imports: [],
  templateUrl: './atributes.component.html'
})
export class AtributesComponent implements OnInit {
  searchParams!: CameraParams;

  constructor(private cameraService: CameraService ) { }

  ngOnInit(): void {
    this.geSearchParameters();
  }

  geSearchParameters(): void {
    this.searchParams = this.cameraService.generateSearchParameters();
  }
}
