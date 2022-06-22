import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from "../../feartures/store";
import { LoginRequest, UserResponse } from "../../types/user";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL ?? "http://localhost:3000/",
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("authentication", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials
            })
        }),
        me: builder.mutation({
            query: () => "me"
        })
    })
});

export const { useLoginMutation, useMeMutation } = api;
