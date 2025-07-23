import Head from "next/head";

export default function BadgePage() {
  const name = "Gaetano";
  const role = "PUG DESIGN FEST";

  const title = `${name} | ${role} | PUG! Design Fest 2025`;
  const imageUrl = `https://dummyimage.com/1200x630/000/fff.png&text=${encodeURIComponent(
    name + " – " + role
  )}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] text-center p-6">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={\`https://pugfest.vercel.app/badge
      </Head>

      <h1 className="text-3xl font-bold mb-4">🎟️ Il tuo badge per il PUG! 2025</h1>
      <p className="mb-6 text-gray-700">Benvenutə <strong>{name}</strong>, ufficialmente <strong>{role}</strong> del festival!</p>

      <img
        src={imageUrl}
        alt="Badge PUG!"
        className="w-full max-w-md rounded-xl shadow-xl"
      />

      <a
        href={`https://pugfest.vercel.app/badge
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800"
      >
        Condividi su LinkedIn ↗
      </a>
    </div>
  );
}
