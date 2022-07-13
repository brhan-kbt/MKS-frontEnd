import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ShortDatePipe } from './pipes/short-date.pipe';
import { AppCommonModule } from '../app.common.module';

@NgModule({
  declarations: [
    ListComponent,
    ToolbarComponent,
    TimeAgoPipe,
    ShortDatePipe
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    ListComponent,
    ToolbarComponent,
    TimeAgoPipe
  ]
})
export class SharedModule { }
