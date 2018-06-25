import * as _ from 'lodash';
import {
  and,
  Categorization,
  Category,
  JsonFormsState,
  RankedTester,
  rankWith,
  StatePropsOfLayout,
  uiTypeIs
} from '@jsonforms/core';
import {Component, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
import {CategoryRenderer} from "./category/category";
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicLayout} from "../JsonFormsIonicLayout";

@Component({
  selector: 'jsonforms-categorization-layout',
  templateUrl: 'categorization-layout.html'
})
export class CategorizationLayoutRenderer extends JsonFormsIonicLayout {

  @ViewChild('categoryContent') nav: NavController;
  categories: any[];
  label: string;
  stateProps: StatePropsOfLayout;

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }

  ngOnInit() {
    this.categories = (this.getOwnProps().uischema as Categorization).elements;
    const firstCategory = (this.getOwnProps().uischema as Categorization).elements[0];
    this.label = firstCategory.label;
    const state$ = this.connectLayoutToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.stateProps = state
    });
    this.renderCategory(firstCategory);
  }

  renderCategory(category) {
    this.nav.push(CategoryRenderer, { category: category });
    this.label = category.label;
  }

  canGoBack() {
    return this.nav.canGoBack();
  }

  goBack() {
    return this.nav.pop();
  }
}

export const isCategorization = (category: Category | Categorization): category is Categorization =>
  category.type === 'Categorization';

export const categorizationTester: RankedTester = rankWith(
  1,
  and(
    uiTypeIs('Categorization'),
    uischema => {
      const hasCategory = (categorization: Categorization): boolean => {
        if (_.isEmpty(categorization.elements)) {
          return false;
        }
        // all children of the categorization have to be categories
        return categorization.elements
          .map(elem => isCategorization(elem) ? hasCategory(elem) : elem.type === 'Category')
          .reduce((prev, curr) => prev && curr, true);
      };

      return hasCategory(uischema as Categorization);
    }
  ));