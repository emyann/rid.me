import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RidAppComponent } from '../app/rid.component';

beforeEachProviders(() => [RidAppComponent]);

describe('App: Rid', () => {
  it('should create the app',
      inject([RidAppComponent], (app: RidAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rid works!\'',
      inject([RidAppComponent], (app: RidAppComponent) => {
    expect(app.title).toEqual('rid works!');
  }));
});
