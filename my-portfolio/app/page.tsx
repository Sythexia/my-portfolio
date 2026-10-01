import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <h1>Hi, I&apos;m Godwin</h1>
      <p>I&apos;m a student who likes building websites for fun!</p>
      <Link href="/portfolio" className="button">See My Work</Link>

      <div className="cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>I make websites with HTML, CSS, JavaScript, and Next.JS.</p>
        </div>
        <div className="card">
          <h3>Design</h3>
          <p>I like minimalistic pages that are easy to use.</p>
        </div>
        <div className="card">
          <h3>Learning</h3>
          <p>I learn by making more project by constantly making new ones.</p>
        </div>
      </div>
    </main>
  );
}