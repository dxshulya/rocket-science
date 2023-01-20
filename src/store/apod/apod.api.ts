import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IApod} from "./apod.types";

export const apodApi = createApi({
    reducerPath: 'api/apod',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.nasa.gov/'}),
    endpoints: build => ({
        getApod: build.query<IApod, string>({
            query: (apikey: string) => `planetary/apod?api_key=${apikey}`,
        }),
    }),
})

export const {useGetApodQuery} = apodApi