import { Component } from '@angular/core';
import {
  CdkMenu,
  CdkMenuItem,
  CdkContextMenuTrigger,
  CdkMenuTrigger,
} from '@angular/cdk/menu';
import { STANDARD_DROPDOWN_BELOW_POSITIONS } from '@angular/cdk/overlay';

/** @title Nested context menus. */
@Component({
  selector: 'cdk-menu-nested-context-example',
  exportAs: 'cdkMenuNestedContextExample',
  styleUrls: ['cdk-menu-nested-context-example.css'],
  templateUrl: 'cdk-menu-nested-context-example.html',
  standalone: true,
  imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem, CdkMenuTrigger],
})
export class CdkMenuNestedContextExample {
  public readonly menuPosition = STANDARD_DROPDOWN_BELOW_POSITIONS.map(
    (item) => {
      return { ...item, offsetX: 0, offsetY: 0 };
    }
  );
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
