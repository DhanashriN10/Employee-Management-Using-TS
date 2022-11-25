
// import { createStore } from "redux";
import { createStore } from "redux";
import rootreducer from "./rootreducer";
// import {configureStore} from "redux-starter-kit"
import rootReducer from "./rootreducer";


const store = createStore(rootReducer)

// const store = configureStore(rootreducer)
// const store= configureStore({rootReducer})
export type RootState = ReturnType<typeof rootReducer>;

export default store;