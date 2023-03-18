import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "./slices/markdownSlice";
import rotationSlice from "./slices/rotationSlice";


const store = configureStore({   
    reducer: {
        markdown: markdownSlice,
        rotation: rotationSlice,
    }
});

export default store;