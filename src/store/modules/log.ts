import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LogState = {
    data: DataType[];
};

export type DataType = {
    contents: string;
    date: Date;
};
// export type insertLogPayLoad = {
//     contents: string;
//     date: Date;
// }

const initialState: LogState = { data: [] };

const logSlice = createSlice({
    name: "log",
    initialState,
    reducers: {
        insertLogAction(state: LogState, action: PayloadAction<DataType>) {
            state.data = [
                ...state.data,
                {
                    contents: action.payload.contents,
                    date: action.payload.date,
                },
            ];
        },
    },
});

const { reducer, actions } = logSlice;
export const { insertLogAction } = actions;
export default reducer;
