export const queryId = (searchParams: URLSearchParams) => {
  if (!searchParams.has("id")) {
    return "";
  }
  if (!searchParams.has("page")) {
    return String(searchParams.get("id"));
  }
  return String(searchParams.get("id"));
};

export const queryPage = (searchParams: URLSearchParams) => {
  if (!searchParams.has("page")) {
    return 1;
  }
  return Number(searchParams.get("page"));
};
