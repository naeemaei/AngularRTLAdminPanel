import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  MenuItems: Array<menuItem> = [];
  constructor() { }

  ngOnInit(): void {
  }

  fillMenuItems(): void {
    let item = new menuItem();
    item.ID = 1; item.Title = ""; item.Icon = ""; item.ParentID = null; item.PageUrl = "";
    this.MenuItems.push(item);
  }
}
