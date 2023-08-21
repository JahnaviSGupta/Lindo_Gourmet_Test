import React, { useEffect, useState } from "react";

export default function HideInMobile({ content, threshold }) {
  const [showContent, setShowContent] = useState(
    window.innerWidth >= threshold
  );

  useEffect(() => {
    const handleResize = () => {
      setShowContent(window.innerWidth >= threshold);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return React.Children.map(content, (c) =>
    React.cloneElement(c, { showContent })
  );
}
