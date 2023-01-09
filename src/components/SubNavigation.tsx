import { useRouter } from "next/router";

export default function SubNavigation() {
  const router = useRouter();
  return router.pathname !== "/" ? (
    <div style={{ fontSize: "1rem", color: "blue" }}>
      <a href="#" onClick={() => router.back()} style={{ color: "blue" }}>
        go back
      </a>
      &nbsp;<span>/</span>&nbsp;
      <a href="/" style={{ color: "blue" }}>
        go search
      </a>
    </div>
  ) : (
    <div style={{ fontSize: "1rem", color: "blue" }}>
      <a href="/notes" style={{ fontSize: "1rem", color: "blue" }}>
        go see all notes
      </a>
    </div>
  );
}
