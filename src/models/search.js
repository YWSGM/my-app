import { getList } from '../services/example';

export default {
    namespace: 'search',

    state: {
        searchValue: '',
    },

    subscriptions: {
        setup({ dispatch, history }) {
      // eslint-disable-line
        },
    },

    effects: {
        *saveData({ payload }, { call, put }) {
            const data = yield call(getList, {});
            window.console.log(data);
            yield put({
                type: 'save',
                payload: {
                    ...payload,
                    searchValue: 11,
                },
            });
        },
        search({ payload }, { put }) {
            put({
                type: 'search',
                payload,
            });
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        search(state, action) {
            return { ...state, ...action.payload };
        }
    },
};
