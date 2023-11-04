"use client";

import { useQuery, gql } from "@apollo/client";
import { getClient } from "@apollo/client";

const GET_BOOKS = gql`
allReportazZChrztus { img { id url } } ",
`;

function BookList() {
    const client = getClient();
    const { loading, data } = useQuery(GET_BOOKS, { client });

    if (loading) return <p>loading...</p>;
}
