import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import jobsReducer from './components/jobcard/jobsSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
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