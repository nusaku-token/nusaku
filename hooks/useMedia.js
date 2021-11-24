import React from "react";

// Ini React Custom Hook
// Referensi : https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs

function useMedia(query) {
  const [match, setMatch] = React.useState(typeof window !== "undefined" ? window.matchMedia(query).matches : false);

  const handler = React.useCallback((e) => {
    setMatch(e.matches);
  }, []);

  React.useEffect(() => {
    window.matchMedia(query).addEventListener("change", handler);

    return () => {
      window.matchMedia(query).removeEventListener("change", handler);
    };
  }, []);

  return match;
}

export default useMedia;
