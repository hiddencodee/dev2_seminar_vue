import { createStore } from 'vuex';
import storage from './storage';

export const store = createStore(storage);
