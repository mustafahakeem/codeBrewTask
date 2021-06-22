import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import * as json from '././../../properties.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'builder';
  data = json.data;
  searchTerm = '';
  minPrice = 0;
  filter = {
    name: null,
    order: null,
  };

  replaceString(term: string) {
    var searchMask = this.searchTerm;
    var regEx = new RegExp(searchMask, "ig");
    return term.replace(regEx, (i) => `<span class="heighlight">${i}</span>`);

    // return term.replace(this.searchTerm, `<b>${this.searchTerm}</b>`, 'ig');
  }

  changePrice(event: KeyboardEvent) {
    const price = parseInt((event.target as HTMLInputElement).value);
    if (isNaN(price)) {
      this.minPrice = 0;
    } else {
      this.minPrice = price;
    }
    this.onConfigChange();
  }

  onFilterClick(field: string) {
      switch (field) {
        case 'building_name':
          this.buildingNameSort();
          break;
        case 'tower_name':
          this.towerNameSort();
          break;
        case 'propery_name':
          this.propertyNameSort();
          break;
        case 'configuration_name':
          this.configurationNameSort();
          break;
        case 'min_price':
          this.minPriceSort();
          break;
        case 'bedroom':
          this.bedroomSort();
          break;
        case 'bathroom':
          this.bathroomSort();
          break;
        case 'half_bathroom':
          this.halfBathroomSort();
          break;
      }
    
  }

  accendingSort(itemOne: string, itemTwo: string) {
    if (itemOne < itemTwo) {
      return 1;
    }
    if (itemTwo < itemOne) {
      return -1;
    }
    return 0;
  }

  descendingSort(itemOne: string, itemTwo: string) {
    if (itemOne > itemTwo) {
      return 1;
    }
    if (itemTwo > itemOne) {
      return -1;
    }
    return 0;
  }

  buildingNameSort() {
    if (this.filter.name !== 'building_name') {
      this.filter.order = null;
    }
    this.filter.name = 'building_name';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.building.name.toUpperCase();
        const itemTwo = i2.building.name.toUpperCase();
        return this.accendingSort(itemOne, itemTwo);
      });
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.building.name.toUpperCase();
        const itemTwo = i2.building.name.toUpperCase();
        return this.descendingSort(itemOne, itemTwo);
      });
    }
  }

  towerNameSort() {
    if (this.filter.name !== 'tower_name') {
      this.filter.order = null;
    }
    this.filter.name = 'tower_name';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.building_towers.tower_name.toUpperCase();
        const itemTwo = i2.building_towers.tower_name.toUpperCase();
        return this.accendingSort(itemOne, itemTwo);
      });
    } else{
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.building_towers.tower_name.toUpperCase();
        const itemTwo = i2.building_towers.tower_name.toUpperCase();
        return this.descendingSort(itemOne, itemTwo);
      });
    }
  }

  propertyNameSort() {
    if (this.filter.name !== 'propery_name') {
      this.filter.order = null;
    }
    this.filter.name = 'propery_name';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.property_type.name.toUpperCase();
        const itemTwo = i2.property_type.name.toUpperCase();
        return this.accendingSort(itemOne, itemTwo);
      });
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.property_type.name.toUpperCase();
        const itemTwo = i2.property_type.name.toUpperCase();
        return this.descendingSort(itemOne, itemTwo);
      });
    }
  }

  configurationNameSort() {
    if (this.filter.name !== 'configuration_name') {
      this.filter.order = null;
    }
    this.filter.name = 'configuration_name';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.configuration.name.toUpperCase();
        const itemTwo = i2.configuration.name.toUpperCase();
        return this.accendingSort(itemOne, itemTwo);
      });
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => {
        const itemOne = i1.configuration.name.toUpperCase();
        const itemTwo = i2.configuration.name.toUpperCase();
        return this.descendingSort(itemOne, itemTwo);
      });
    }
  }

  minPriceSort() {
    if (this.filter.name !== 'min_price') {
      this.filter.order = null;
    }
    this.filter.name = 'min_price';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => i1.min_price - i2.min_price);
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => i2.min_price - i1.min_price);
    }
  }

  bedroomSort() {
    if (this.filter.name !== 'bedroom') {
      this.filter.order = null;
    }
    this.filter.name = 'bedroom';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => i1.bedroom - i2.bedroom);
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => i2.bedroom - i1.bedroom);
    }
  }

  bathroomSort() {
    if (this.filter.name !== 'bathroom') {
      this.filter.order = null;
    }
    this.filter.name = 'bathroom';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort((i1, i2) => i1.bathroom - i2.bathroom);
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort((i1, i2) => i2.bathroom - i1.bathroom);
    }
  }

  halfBathroomSort() {
    if (this.filter.name !== 'half_bathroom') {
      this.filter.order = null;
    }
    this.filter.name = 'half_bathroom';
    if (this.filter.order === null || this.filter.order === 'DESC') {
      this.filter.order = 'ASC';
      this.data = this.data.sort(
        (i1, i2) => i1.half_bathroom - i2.half_bathroom
      );
    } else {
      this.filter.order = 'DESC';
      this.data = this.data.sort(
        (i1, i2) => i2.half_bathroom - i1.half_bathroom
      );
    }
  }

  searchChange(event: KeyboardEvent) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.onConfigChange();
  }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  ngOnInit() {
    const configurations = json.data.map((property) => property.configuration);
    const uConfigurations = configurations.filter((config, index) => {
      return configurations.findIndex((c) => c.id === config.id) === index;
    });
    this.dropdownList = uConfigurations.map((config) => ({
      item_id: config.id,
      item_text: config.name,
    }));
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false,
    };
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item);
    this.onConfigChange();
  }
  onDeSelect(item: any) {
    this.selectedItems = this.selectedItems.filter(
      (i) => item.item_id !== i.item_id
    );
    console.log(this.selectedItems);
    this.onConfigChange();
  }

  onConfigChange() {
    const ids = this.selectedItems.map((item) => item.item_id);
    this.data = json.data
      .filter((building) => {
        const searchTerm = new RegExp(this.searchTerm.toLowerCase());
        return (
          searchTerm.test(building.building.name.toLowerCase()) ||
          searchTerm.test(building.building_towers.tower_name.toLowerCase()) ||
          searchTerm.test(building.property_type.name.toLowerCase()) ||
          searchTerm.test(building.configuration.name.toLowerCase())
        );
      })
      .filter((build) => build.min_price >= this.minPrice)
      .filter(
        (build) => ids.length === 0 || ids.indexOf(build.configuration.id) >= 0
      );
  }
}
