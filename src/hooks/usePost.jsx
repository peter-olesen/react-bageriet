import { useEffect, useState } from "react";

export const usePost = ({ url, body, token }) => {
  const { data, setData } = useState();
  const { error, setError } = useState();
  const { isLoading, setisLoading } = useState();

  useEffect(() => {
    setisLoading(true);

    const options = {
      method: "POST",
      body: body,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setisLoading(false));

    return { data, error, isLoading };
  }, [url, body]);
};
