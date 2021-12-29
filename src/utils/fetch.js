export const fetchData = async (url, method, bodyData = "default") => {
  const settings = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (bodyData !== "default") {
    settings.body = bodyData;
  }
  try {
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
