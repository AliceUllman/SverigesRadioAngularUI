import { inject, Injectable } from '@angular/core';
import { RadioClient } from '../client/radio-client';
import { ResponseDto } from '../client/dto/response-dto';

@Injectable({
  providedIn: 'root',
})
export class RadioService {

  private _radioClient = inject(RadioClient);

  res: ResponseDto = {channels: []};

  getChannels(){
    return this._radioClient.getAllChannels();
  }
}
