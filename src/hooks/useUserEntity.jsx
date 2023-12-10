import { useEffect, useState } from "react";
import { viewSession } from "../api/session";

const useUserEntity = (initialUserEntity = {}) => {
  const [userEntity, setUserEntity] = useState(initialUserEntity);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserEntity = async () => {
    const response = await viewSession();
    if (response.code === "SUCCESS") {
      setUserEntity(response.data);
    } else {
      setUserEntity({});
    }
  };

  useEffect(() => {
    fetchUserEntity().then(() => setIsLoading(false));
  }, []);

  return { userEntity, setUserEntity, isLoading };
};

export default useUserEntity;
