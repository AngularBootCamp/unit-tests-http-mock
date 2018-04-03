import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable()
export class SwService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>(API_URL + '/employees');
  }
}
