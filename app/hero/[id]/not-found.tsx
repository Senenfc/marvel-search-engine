import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <div>Hero not found</div>
      <button>
        <span>
          <Link href={"/"}>Back to hero list</Link>
        </span>
      </button>
    </main>
  );
}
