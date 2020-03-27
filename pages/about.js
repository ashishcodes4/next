import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link href="/">
        <a title="home page">Navigate back to home page</a>
      </Link>
      <p>this is the about page</p>
    </div>
  );
}
