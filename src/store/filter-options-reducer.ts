import { Events } from '../models/filter-options-models';

interface FilterOptionStateI {
  sites: string[];
  events: Events;
  date: string;
}

const initialState: FilterOptionStateI = {
  events: Events.ALL,
  date: '123',
  sites: ['Glyphy', 'DesignStripe', 'DesignValley', 'Neueubel', 'Last Year', 'Drawkit'],
};

export const STATE_KEY = 'filterOptions';

export const filterOptionReducer = (
  state = initialState,
  { type, payload }: Record<string, any>
): FilterOptionStateI => {
  switch (type) {
    default:
      return state;
  }
};
