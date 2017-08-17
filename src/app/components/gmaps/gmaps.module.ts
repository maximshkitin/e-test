import { NgModule, Component } from '@angular/core';
import { GmapsComponent } from "./gmaps.component";

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQtjOtTrM9i9Nw55FxeNYP5eJHvsNZaAM'
    })
  ],
  declarations: [ GmapsComponent ],
  bootstrap: [ GmapsComponent ],
  exports: [GmapsComponent]

})
export class GmapsModule {}