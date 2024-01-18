export interface QueryVariables {
  query: string;
  variables?: Record<string, unknown>;
}

export async function shopifyFetch({ query, variables }: QueryVariables) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!endpoint) {
    throw new Error("SHOPIFY_STORE_DOMAIN is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (key) {
    headers["X-Shopify-Storefront-Access-Token"] = key;
  }

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: { query, variables } && JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error", error);

    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
