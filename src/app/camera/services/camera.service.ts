import { Injectable } from '@angular/core';
import {Camera, CameraParams} from "../model/Camerainterface";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private focalLengths = [24, 35, 50, 85, 105, 135, 200]; // Common focal lengths in mm
  private lightingConditions = ['Bright', 'Dim', 'Low Light', 'Backlit', 'Overcast', 'Fluorescent', 'Incandescent'];
  cameraList: Camera[] = [];
  searchParams!: CameraParams;

  constructor() { }

  generateCameras(): Camera[] {
    const cameras: Camera[] = [];
    for (let i = 1; i <= 20; i++) {
      cameras.push({
        shortTitle: `C${i}`,
        title: `Camera ${i}`,
        distance: this.getRandomFocalLength(),
        light: this.getRandomLightingCondition()
      });
    }
    this.cameraList = cameras;
    return cameras;
  }

  private getRandomFocalLength(): number {
    const index = Math.floor(Math.random() * this.focalLengths.length);
    return this.focalLengths[index];
  }

  private getRandomLightingCondition(): string {
    const index = Math.floor(Math.random() * this.lightingConditions.length);
    return this.lightingConditions[index];
  }

  generateSearchParameters(): CameraParams {
    const distance = this.getRandomFocalLength();
    const light = this.getRandomLightingCondition();
    this.searchParams = { distance, light };
    return this.searchParams;
  }

  // Find matching cameras based on focal length and lighting condition
  // Return true if a matching camera is found, false otherwise
  findMatchingCamera(distance: number, light: string, cameras: Camera[]): boolean {
    return cameras.some(camera => camera.distance === distance && camera.light === light);
  }

}
