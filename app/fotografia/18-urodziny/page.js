"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "@apollo/client";

const query = gql`
    query Now {
        now(id: "1")
    }
`;

export default function Page() {
    const { data } = useSuspenseQuery(query);

    return <main>{data.now}</main>;
}
