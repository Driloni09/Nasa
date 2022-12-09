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

import { LoginDtoApiModel } from '../models/login-dto-api-model';
import { RegisterDtoApiModel } from '../models/register-dto-api-model';
import { UserDtoApiModel } from '../models/user-dto-api-model';

@Injectable({
  providedIn: 'root',
})
export class AccountApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountRegisterPost
   */
  static readonly ApiAccountRegisterPostPath = '/api/Account/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountRegisterPost$Plain$Response(params?: {
    context?: HttpContext
    body?: RegisterDtoApiModel
  }
): Observable<StrictHttpResponse<UserDtoApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AccountApiService.ApiAccountRegisterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountRegisterPost$Plain(params?: {
    context?: HttpContext
    body?: RegisterDtoApiModel
  }
): Observable<UserDtoApiModel> {

    return this.apiAccountRegisterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoApiModel>) => r.body as UserDtoApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountRegisterPost$Json$Response(params?: {
    context?: HttpContext
    body?: RegisterDtoApiModel
  }
): Observable<StrictHttpResponse<UserDtoApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AccountApiService.ApiAccountRegisterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountRegisterPost$Json(params?: {
    context?: HttpContext
    body?: RegisterDtoApiModel
  }
): Observable<UserDtoApiModel> {

    return this.apiAccountRegisterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoApiModel>) => r.body as UserDtoApiModel)
    );
  }

  /**
   * Path part for operation apiAccountLoginPost
   */
  static readonly ApiAccountLoginPostPath = '/api/Account/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountLoginPost$Plain$Response(params?: {
    context?: HttpContext
    body?: LoginDtoApiModel
  }
): Observable<StrictHttpResponse<UserDtoApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AccountApiService.ApiAccountLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountLoginPost$Plain(params?: {
    context?: HttpContext
    body?: LoginDtoApiModel
  }
): Observable<UserDtoApiModel> {

    return this.apiAccountLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoApiModel>) => r.body as UserDtoApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountLoginPost$Json$Response(params?: {
    context?: HttpContext
    body?: LoginDtoApiModel
  }
): Observable<StrictHttpResponse<UserDtoApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AccountApiService.ApiAccountLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDtoApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountLoginPost$Json(params?: {
    context?: HttpContext
    body?: LoginDtoApiModel
  }
): Observable<UserDtoApiModel> {

    return this.apiAccountLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoApiModel>) => r.body as UserDtoApiModel)
    );
  }

}
