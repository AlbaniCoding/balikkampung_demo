import { useEffect } from "react";

export default function Legacy() {
  useEffect(() => {
    fetch("/home.html")
      .then(res => res.text())
      .then(html => {
        document.body.innerHTML = html;
      });
  }, []);

  return null;
}