import {configureStore} from "@reduxjs/toolkit";
import prodSliceReducer from "./prod-slice.ts"
import {useDispatch, useSelector} from "react-redux";

const store = configureStore({
	reducer: {
		products: prodSliceReducer
	}
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export default store