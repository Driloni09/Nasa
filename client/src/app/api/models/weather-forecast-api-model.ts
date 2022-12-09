/* tslint:disable */
/* eslint-disable */
import { DateOnlyApiModel } from './date-only-api-model';
export interface WeatherForecastApiModel {
  date?: DateOnlyApiModel;
  summary?: null | string;
  temperatureC?: number;
  temperatureF?: number;
}
