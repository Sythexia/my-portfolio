export default function Portfolio() {
  return (
    <main>
      <h1>Portfolio</h1>
      <p>Here are some of my projects.</p>

      <div className="cards">
        <div className="card">
          <h3>Personal Website</h3>
          <p>A multi-page website made with Next.js.</p>
        </div>
        <div className="card">
          <h3>Todo App</h3>
          <p>An app to add and delete tasks.</p>
        </div>
        <div className="card">
          <h3>Calculator</h3>
          <p>A simple calculator made with JavaScript.</p>
        </div>
      </div>
    </main>
  );
}