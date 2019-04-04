import {ofType} from 'redux-observable';
import {debounceTime, map, mapTo} from 'rxjs/operators';
import types from './types';
import {clearUser} from './actions';

export const clearUserEpic = (action$, state$) => action$.pipe();
