import { useEffect, useState } from "react";
import { viewLongDescription, viewShortDescription } from "../api/user";

const useDescriptions = () => {
  const [
    shortDescription,
    setShortDescription,
  ] = useState("");
  const [
    longDescription,
    setLongDescription,
  ] = useState("");
  const [
    descriptionsLoading,
    setDescriptionsLoading,
  ] = useState(true);

  const fetchDescriptions = async () => {
    const shortDescResponse = await viewShortDescription();
    setShortDescription(
      shortDescResponse.code === "SUCCESS" ? shortDescResponse.data : ""
    );
    const longDescResponse = await viewLongDescription();
    setLongDescription(
      longDescResponse.code === "SUCCESS" ? longDescResponse.data : ""
    );
  };

  useEffect(() => {
    fetchDescriptions().then(() => setDescriptionsLoading(false));
  }, []);

  return {
    shortDescription,
    setShortDescription,
    longDescription,
    setLongDescription,
    descriptionsLoading,
  };
};

export default useDescriptions;