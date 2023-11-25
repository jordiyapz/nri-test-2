import { useEffect, useState } from "react";
import { PhotoDoc } from ".";

type UsePhotoOptions = {
  onError(err: unknown): void;
};

export const usePhotos = (options: Partial<UsePhotoOptions> = {}) => {
  const { onError = () => {} } = options;

  const [data, setData] = useState<PhotoDoc[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (error: unknown) => {
    setIsLoading(false);
    if ((error as Error).name === "AbortError") {
      // Do nothing. This is expected
      return;
    }
    
    onError(error);
  };

  useEffect(() => {
    const ac = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/photos", {
      signal: ac.signal,
    })
      .then((response) => {
        response
          .json()
          .then((values) => {
            setData(values);
            setIsLoading(false);
          })
          .catch(handleError);
      })
      .catch(handleError);

    // abort the request if render is cancelled to save bandwidth
    return () => ac.abort();
  }, []);
  return { data, isLoading };
};

export const usePhotoAlbum = () => {};
