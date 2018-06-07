import { NgModule } from '@angular/core';
import { CategorizationRenderer } from './categorization/categorization';
import { CategoryRenderer } from './category/category';
import IonicVerticalLayoutRenderer from "./vertical-layout/vertical-layout";
import { StringControlRenderer } from './string-control/string-control';
import { IonicModule} from "ionic-angular";
import { JsonFormsModule } from '@jsonforms/angular';
import { IonicHorizontalLayoutRenderer } from './horizontal-layout/horizontal-layout';
import { ArrayControlRenderer } from "./array-control/array-control";
import { NavProxyService } from "./master-detail/NavProxyService";
import { MasterDetailComponent } from "./master-detail/master-detail";
import { PlaceholderPage } from "./master-detail/pages/placeholder/placeholder";
import { ItemsPage } from "./master-detail/pages/items/items";
import { ItemPage } from "./master-detail/pages/item/item";
import { JsonFormsDispatch } from "./jsonforms-dispatch/jsonforms-dispatch";
import { UnknownRenderer } from "./unknown/unknown";
import {GroupComponent} from "./group/group";

@NgModule({
	declarations: [
	  ArrayControlRenderer,
	  CategorizationRenderer,
    CategoryRenderer,
    CategorizationRenderer,
    StringControlRenderer,

    GroupComponent,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer,

    // Master Detail components
    MasterDetailComponent,
    PlaceholderPage,
    ItemsPage,
    ItemPage,


    JsonFormsDispatch,
    UnknownRenderer
  ],
	imports: [
    IonicModule,
    JsonFormsModule
  ],
	exports: [
	  ArrayControlRenderer,
    CategoryRenderer,
    CategorizationRenderer,
    StringControlRenderer,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer
  ],
  entryComponents: [
    ArrayControlRenderer,
    CategoryRenderer,
    CategorizationRenderer,
    StringControlRenderer,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer,
    GroupComponent,

    // Master Detail components
    MasterDetailComponent,
    PlaceholderPage,
    ItemsPage,
    ItemPage,

    UnknownRenderer
  ],
  providers: [
    NavProxyService
  ]
})
export class JsonFormsIonicModule {}