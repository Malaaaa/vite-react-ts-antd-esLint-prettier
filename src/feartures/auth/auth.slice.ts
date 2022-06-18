import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "../../types/user";
import { RootState } from "../store";

//Get local storage token
const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? token : "";
}

//initial state
const initialState: UserResponse = {
  token: "",
  user: {
    first_name: "",
    last_name: "",
  },
}

const slice = createSlice({
  name: "auth",
  initialState: () => ({
    user: {
      first_name: "",
      last_name: "",
    },
    token: getToken(),
  }),

  reducers: {
    setCredentials: (
      state: UserResponse,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = user;
      state.token = token;
    },
    logOut: () => { localStorage.removeItem("token"); return initialState }

  },
  extraReducers: (builder) => { }
});

export const { setCredentials, logOut } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
