import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

const httpLink = createHttpLink({
    uri: "https://graphql.datocms.com/",
});
const authLink = setContext((_, { headers }) => {
    return {
        headers: Object.assign(headers || {}, {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        }),
    };
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
client
    .query({
        query: gql`
            {
                allReportazZChrztus {
                    img {
                        id
                        url
                    }
                }
            }
        `,
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    });
