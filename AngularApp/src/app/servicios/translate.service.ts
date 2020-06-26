import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://www.translated.net/hts/?f=quote&s=es-ES&t=en-GB&w=100&cid=htsdemo&p=htsdemo5&of=json';

  }

}
