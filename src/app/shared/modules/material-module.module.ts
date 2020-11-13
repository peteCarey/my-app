import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatPaginatorModule,
  MatSliderModule,
  MatTableModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSliderModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSliderModule,
    MatTableModule
  ]
})
export class MaterialModuleModule {}
