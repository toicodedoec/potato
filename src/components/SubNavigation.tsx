import { useRouter } from "next/router";

export default function SubNavigation() {
  const router = useRouter();
  return router.pathname !== "/" ? (
    <div style={{ fontSize: "1rem", color: "#0070f3" }}>
      <a href="#" onClick={() => router.back()} style={{ color: "#0070f3" }}>
        go back
      </a>
      &nbsp;<span>/</span>&nbsp;
      <a href="/" style={{ color: "#0070f3" }}>
        go search
      </a>
    </div>
  ) : (
    <div style={{ fontSize: "1rem", color: "#0070f3" }}>
      <a href="/notes" style={{ fontSize: "1rem", color: "#0070f3" }}>
        go see all notes
      </a>
    </div>
  );
}
