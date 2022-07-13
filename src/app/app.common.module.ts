import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './app.material.module';
import { NgPrimeModule } from './app.ngprime.module';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: []
})
export class AppCommonModule {

}
