import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import filterReducer from './components/filtercard/filterSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    filter: filterReducer
  }
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;