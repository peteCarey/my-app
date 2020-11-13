import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeypadFormComponent } from "../../../app/main/directives/keypad-form/keypad-form.component";
import { NumericalKeyboardComponent } from "../../../app/main/directives/numerical-keyboard/numerical-keyboard.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TruncatePipe } from "../pipes/truncate.pipe";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FlexLayoutModule],
  declarations: [KeypadFormComponent, NumericalKeyboardComponent, TruncatePipe],
  exports: [
    KeypadFormComponent,
    NumericalKeyboardComponent,
    ReactiveFormsModule,
    FlexLayoutModule,
    TruncatePipe
  ]
})
export class SharedModuleModule {}
