import { useEffect } from "react";

export default function Legacy() {
  useEffect(() => {
    window.location.href = "../home.html";
  }, []);

  return null;
}
