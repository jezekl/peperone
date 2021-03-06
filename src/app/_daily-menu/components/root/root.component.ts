import { Component, OnInit } from '@angular/core';
import { DailyMenuService } from '../../services/daily-menu.service';
import { Observable } from 'rxjs';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  private _headline = 'Denní menu';
  get headline(): string {
    return this._headline;
  }

  private _bg = 'url(../../../assets/img/bg-daily-menu.jpg)';
  get bg(): string {
    return this._bg;
  }

  private _menuList$: Observable<Menu[]>;
  get menuList$(): Observable<Menu[]> {
    return this._menuList$;
  }

  constructor(
    private _dailyMenuService: DailyMenuService
  ) { }

  ngOnInit() {
    this._menuList$ = this._dailyMenuService.getList();
  }

}
