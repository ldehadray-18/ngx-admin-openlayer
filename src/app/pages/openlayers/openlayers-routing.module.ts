import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenlayersComponent } from './openlayers.component';
import { OpenlayerMapComponent } from './openlayer-map/openlayer-map.component';

const routes: Routes = [
    {
        path: '',
        component: OpenlayersComponent,
        children: [
            {
                path: 'map',
                component: OpenlayerMapComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OpenlayersRoutingModule {
}
