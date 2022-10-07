import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  endpoint = 'http://localhost:8080/api/idea';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor(private httpClient: HttpClient) {}

  createIdea(user: any) {
    return this.httpClient.post(
      this.endpoint,
      JSON.stringify(user),
      this.httpOptions
    );
  }
  getAllIdeas() {
    return this.httpClient.get(this.endpoint);
  }

  getIdea(id) {
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }

  updateIdea(id, idea: any) {
    return this.httpClient.put(
      `${this.endpoint}/${id}`,
      JSON.stringify(idea),
      this.httpOptions
    );
  }

  deleteIdea(id) {
    return this.httpClient.delete(`${this.endpoint}/${id}`, this.httpOptions);
  }
}
