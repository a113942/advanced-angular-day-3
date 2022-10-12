import { createActionGroup, props } from '@ngrx/store';

export const RoleFilterEvents = createActionGroup({
  source: 'Data Stuff Role Filter Events',
  events: {
    toggled: props<{ payload: string }>(),
  },
});
