import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { OpenlayersRoutingModule } from './openlayers-routing.module';
import { OpenlayersComponent } from './openlayers.component';
import { OpenlayerMapComponent } from './openlayer-map/openlayer-map.component';


@NgModule({
  declarations: [OpenlayersComponent, OpenlayerMapComponent],
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    OpenlayersRoutingModule
  ]
})
export class OpenlayersModule { }








