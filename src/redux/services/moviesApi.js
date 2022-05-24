import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Nuevo fetch de redux que nos soluciona la vida
export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://online-movie-database.p.rapidapi.com/' }),
	endpoints: (builder) => ({
		getMovieByTitle: builder.query({
			query: (title) => ({
				url: `title/find?q=${ title }`,
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
					'X-RapidAPI-Key': '488951e90emshf6768419c82df91p13e796jsn4c0358b9a7c0'
				}
			})
		})
	})
});

export const { useGetMovieByTitleQuery } = moviesApi;