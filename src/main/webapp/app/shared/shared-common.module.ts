import { NgModule } from '@angular/core';

import { HelloworldSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HelloworldSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HelloworldSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HelloworldSharedCommonModule {}
