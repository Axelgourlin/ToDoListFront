export const fetchData = async (method, bodyData = "default") => {
  const location = window.location.hostname;
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
    const fetchResponse = await fetch(`http://${location}:5000/api/`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
