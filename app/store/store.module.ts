import { NgModule } from "../../node_modules/@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "../../node_modules/@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})
export class StoreModule{}