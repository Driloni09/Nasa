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

import { MemberDtoApiModel } from '../models/member-dto-api-model';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersGet
   */
  static readonly ApiUsersGetPath = '/api/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MemberDtoApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersApiService.ApiUsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDtoApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<MemberDtoApiModel>> {

    return this.apiUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDtoApiModel>>) => r.body as Array<MemberDtoApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MemberDtoApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersApiService.ApiUsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDtoApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<MemberDtoApiModel>> {

    return this.apiUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDtoApiModel>>) => r.body as Array<MemberDtoApiModel>)
    );
  }

  /**
   * Path part for operation apiUsersUsernameGet
   */
  static readonly ApiUsersUsernameGetPath = '/api/Users/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameGet$Plain$Response(params: {
    username: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDtoApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UsersApiService.ApiUsersUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDtoApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameGet$Plain(params: {
    username: string;
    context?: HttpContext
  }
): Observable<MemberDtoApiModel> {

    return this.apiUsersUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDtoApiModel>) => r.body as MemberDtoApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameGet$Json$Response(params: {
    username: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDtoApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UsersApiService.ApiUsersUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDtoApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameGet$Json(params: {
    username: string;
    context?: HttpContext
  }
): Observable<MemberDtoApiModel> {

    return this.apiUsersUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDtoApiModel>) => r.body as MemberDtoApiModel)
    );
  }

}
