const baseUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
  "http://localhost:3001";

function joinUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${p}`;
}

async function parseJsonSafe(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

export const get = async (url, headers = {}) => {
  try {
    const res = await fetch(joinUrl(url), {
      method: "GET",
      headers,
    });

    const data = await parseJsonSafe(res);
    return {
      ok: res.ok,
      status: res.status,
      data,
      message: data?.message || "",
    };
  } catch (err) {
    return { ok: false, error: err.message || "Unexpected error" };
  }
};

export const post = async (url, body, headers = {}) => {
  try {
    const isFormData = body instanceof FormData;

    const res = await fetch(joinUrl(url), {
      method: "POST",
      headers: isFormData
        ? headers
        : {
            "Content-Type": "application/json",
            ...headers,
          },
      body: isFormData ? body : JSON.stringify(body),
    });

    const data = await parseJsonSafe(res);

    return {
      ok: res.ok,
      status: res.status,
      data,
      message: data?.message || "",
    };
  } catch (err) {
    return { ok: false, error: err.message || "Unexpected error" };
  }
};

export const put = async (url, body, headers = {}) => {
  try {
    const isFormData = body instanceof FormData;

    const res = await fetch(joinUrl(url), {
      method: "PUT",
      headers: isFormData
        ? headers
        : {
            "Content-Type": "application/json",
            ...headers,
          },
      body: isFormData ? body : JSON.stringify(body),
    });

    const data = await parseJsonSafe(res);

    return {
      ok: res.ok,
      status: res.status,
      data,
      message: data?.message || "",
    };
  } catch (err) {
    return { ok: false, error: err.message || "Unexpected error" };
  }
};

export const del = async (url, headers = {}) => {
  try {
    const res = await fetch(joinUrl(url), {
      method: "DELETE",
      headers,
    });

    const data = await parseJsonSafe(res);
    return {
      ok: res.ok,
      status: res.status,
      data,
      message: data?.message || "",
    };
  } catch (err) {
    return { ok: false, error: err.message || "Unexpected error" };
  }
};
