import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer  from './user/userSlice.js';
import {persistReducer, persistStore} from 'redux-persist';
import storage  from 'redux-persist/lib/storage';

const rootReducers = combineReducers({user:userReducer})

const persistConfig = {
    key : 'root',
    storage,
    version : 1
}
const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false,
  }),
})


export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch