import {products as prods} from "../data/data.ts";

type DeletePayload = {
	type: string,
	payload: number
}

import {createSlice} from "@reduxjs/toolkit"

const prodSlice = createSlice({
	name: "products",
	initialState: prods,
	reducers: {
		del: (state, {payload}: DeletePayload) => {
			const idx = state.findIndex(prod => prod.id === payload)
			state.splice(idx, 1)
		},
		like: (state, {payload}: DeletePayload) => {
			const elem = state.find(product => product.id === payload);
			elem && (elem.fav = !elem.fav)
		},
		add: (state, {payload}) => {
			state.unshift(payload)
		}
	}

})


export default prodSlice.reducer

export const {del, like, add} = prodSlice.actions
