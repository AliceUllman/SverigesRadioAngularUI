import { Component, inject } from '@angular/core';
import { RadioService } from '../../service/radio-service';

@Component({
  imports: [],
  selector: 'app-radio-ui',
  styleUrl: './radio-ui.css',
  templateUrl: './radio-ui.html',
})
export class RadioUi {

  private _service= inject(RadioService)


  getChannels()
  {
    this._service.getChannels().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
