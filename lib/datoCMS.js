// Corrected GraphQL query in fetchZdjecia
export const fetchZdjecia = async (reportazZChrztu) => {
  const response = await fetch(`https://graphql.datocms.com/`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({
          query: `
          {
            reportazZChrztu(filter: { title: { eq: "${reportazZChrztu}" } }) {
              img {
                id
                url
              }
            }
          }
        `,
      }),
  });

  const data = await response.json();
  return data.data;
};
