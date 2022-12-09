/* tslint:disable */
/* eslint-disable */
import { EstimatedDiameterDtoApiModel } from './estimated-diameter-dto-api-model';
export interface AsteroidDtoApiModel {
  absolute_magnitude_h?: null | string;
  estimated_diameter?: EstimatedDiameterDtoApiModel;
  id?: number;
  isFavorite?: boolean;
  isHazardous?: boolean;
  name?: null | string;
}
