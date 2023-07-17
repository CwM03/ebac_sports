import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Sport } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getSport: builder.query<Sport[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetSportQuery } = api

export default api
