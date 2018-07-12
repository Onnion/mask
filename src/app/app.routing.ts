import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { MaskShowComponent } from './demo/mask-show/mask-show.component'

const appRoute: Routes = [
    {path: '', component: DemoComponent},
    {path: 'mask', component: MaskShowComponent}

]

export const Routing = RouterModule.forRoot(appRoute);