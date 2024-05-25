export interface Camera {
  shortTitle: string;
  title: string;
  distance: number; // Distance (focal length) in mm
  light: string; // Lighting condition
}

export interface CameraParams {
  distance: number; // Distance (focal length) in mm
  light: string; // Lighting condition
}
