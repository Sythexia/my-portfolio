import Image from "next/image";

export default function Gallery() {
  return (
    <main>
      <h1>Gallery</h1>
      <p>Some of my favorite pictures.</p>

      <div className="gallery">
        <Image src="/sunset.jpg" alt="Sunset" width={400} height={300} />
        <Image src="/ocean.jpg" alt="Ocean" width={400} height={300} />
        <Image src="/forest.jpg" alt="Forest" width={400} height={300} />
        <Image src="/night.jpg" alt="Night" width={400} height={300} />
        <Image src="/flowers.jpg" alt="Flowers" width={400} height={300} />
        <Image src="/desert.jpg" alt="Desert" width={400} height={300} />
      </div>
    </main>
  );
}