/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AsteroidDtoApiModel } from '../models/asteroid-dto-api-model';
import { UserAsteroidDtoApiModel } from '../models/user-asteroid-dto-api-model';

@Injectable({
  providedIn: 'root',
})
export class UserAsteroidsApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserAsteroidsGet
   */
  static readonly ApiUserAsteroidsGetPath = '/api/UserAsteroids';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAsteroidsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AsteroidDtoApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserAsteroidsApiService.ApiUserAsteroidsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AsteroidDtoApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAsteroidsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<AsteroidDtoApiModel>> {

    return this.apiUserAsteroidsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AsteroidDtoApiModel>>) => r.body as Array<AsteroidDtoApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAsteroidsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AsteroidDtoApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserAsteroidsApiService.ApiUserAsteroidsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AsteroidDtoApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAsteroidsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<AsteroidDtoApiModel>> {

    return this.apiUserAsteroidsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AsteroidDtoApiModel>>) => r.body as Array<AsteroidDtoApiModel>)
    );
  }

  /**
   * Path part for operation apiUserAsteroidsUserIdGet
   */
  static readonly ApiUserAsteroidsUserIdGetPath = '/api/UserAsteroids/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAsteroidsUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsUserIdGet$Plain$Response(params: {
    userId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AsteroidDtoApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserAsteroidsApiService.ApiUserAsteroidsUserIdGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AsteroidDtoApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAsteroidsUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsUserIdGet$Plain(params: {
    userId: number;
    context?: HttpContext
  }
): Observable<Array<AsteroidDtoApiModel>> {

    return this.apiUserAsteroidsUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AsteroidDtoApiModel>>) => r.body as Array<AsteroidDtoApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAsteroidsUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsUserIdGet$Json$Response(params: {
    userId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AsteroidDtoApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserAsteroidsApiService.ApiUserAsteroidsUserIdGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AsteroidDtoApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAsteroidsUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAsteroidsUserIdGet$Json(params: {
    userId: number;
    context?: HttpContext
  }
): Observable<Array<AsteroidDtoApiModel>> {

    return this.apiUserAsteroidsUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AsteroidDtoApiModel>>) => r.body as Array<AsteroidDtoApiModel>)
    );
  }

  /**
   * Path part for operation apiUserAsteroidsMarkUnmarkPost
   */
  static readonly ApiUserAsteroidsMarkUnmarkPostPath = '/api/UserAsteroids/mark-unmark';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAsteroidsMarkUnmarkPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAsteroidsMarkUnmarkPost$Response(params?: {
    context?: HttpContext
    body?: UserAsteroidDtoApiModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserAsteroidsApiService.ApiUserAsteroidsMarkUnmarkPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserAsteroidsMarkUnmarkPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAsteroidsMarkUnmarkPost(params?: {
    context?: HttpContext
    body?: UserAsteroidDtoApiModel
  }
): Observable<void> {

    return this.apiUserAsteroidsMarkUnmarkPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
