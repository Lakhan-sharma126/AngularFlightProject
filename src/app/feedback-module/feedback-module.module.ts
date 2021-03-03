import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackModuleRoutingModule } from './feedback-module-routing.module';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';


@NgModule({
  declarations: [CustomerFeedbackComponent],
  imports: [
    CommonModule,
    FeedbackModuleRoutingModule
  ]
})
export class FeedbackModuleModule { }
