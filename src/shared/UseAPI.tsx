// noinspection JSIgnoredPromiseFromCall
// noinspection react-hooks/exhaustive-deps

import {useEffect, useState} from "react";
import APIService from "./APIService";

export default function useAPI<T>(method: string, ...params: any[]) {
  const [data, setData]           = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState("");

  const getData = async () => {
    setError("");

    try {
      setIsLoading(true);
      // @ts-ignore
      const temp = await APIService[method](...params);
      setData(temp.data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, error, getData };
}
