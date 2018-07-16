import { NgModule } from '@angular/core';
import { KeysPipe } from './keys-pipe';

@NgModule({
    imports: [],
    declarations: [KeysPipe],
    exports: [KeysPipe],
})
export class PipeModule {

    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
}