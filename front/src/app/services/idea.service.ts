import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  endpoint = 'http://localhost:8080/api/idea'
  constructor(private httpClient:HttpClient) { }

  getAllIdeas(){
    return this.httpClient.get(this.endpoint);
  }
}
