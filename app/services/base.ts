const baseURL = process.env.API_BASE_URL!;
const ts = process.env.API_TS!;
const apiKey = process.env.API_KEY!;
const hash = process.env.API_HASH!;

interface ApiParams {
  [key: string]: any;
}

const buildUrl = (endpoint: string, params: ApiParams = {}) => {
  const url = new URL(`${baseURL}${endpoint}`);
  const defaultParams: ApiParams = {
    ts: ts,
    apikey: apiKey,
    hash: hash,
  };

  const finalParams = { ...defaultParams, ...params };

  Object.keys(finalParams).forEach((key) =>
    url.searchParams.append(key, finalParams[key])
  );

  return url.toString();
};

export const apiServiceGet = async (endpoint: string, params?: ApiParams) => {
  const url = buildUrl(endpoint, params);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 60 * 30 * 6
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
