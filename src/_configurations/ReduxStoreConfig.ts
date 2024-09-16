import {configureStore} from '@reduxjs/toolkit';
import {cardsReducer} from '@/_redux';

const isProduction = process.env.NODE_ENV === 'production';
const Store = configureStore({
    devTools: !isProduction,
    reducer: {
        cards: cardsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredPaths: ['modal']
        }
    })
})

export type IRootState = ReturnType<typeof Store.getState>
export default Store;
