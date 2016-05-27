import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TasksRepositoryService } from './tasks-repository.service';

describe('TasksRepository Service', () => {
  beforeEachProviders(() => [TasksRepositoryService]);

  it('should ...',
      inject([TasksRepositoryService], (service: TasksRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
