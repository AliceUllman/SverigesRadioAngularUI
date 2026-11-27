import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseDto } from './dto/response-dto';


@Injectable({
  providedIn: 'root',
})
export class RadioClient {

  private _client = inject(HttpClient)

  getAllChannels(){
    return this._client.get<ResponseDto>("https://api.sr.se/api/v2/channels/");
  }
}
