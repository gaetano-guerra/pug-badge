import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";

export default function BadgePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Partecipante";
  const role = searchParams.get("role") || "Design Lover";

  const title = `${name} | ${role} | PUG! Design Fest 2025`;
  const imageUrl = `https://dummyimage.com/1200x630/000/fff.png&text=${encodeURIComponent(
    name + " – " + role
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] text-center p-6"
    >
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pugfest.vercel.app/badge" />
      </Head>

      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        🎟️ Il tuo badge per il PUG! 2025
      </motion.h1>

      <motion.p
        className="mb-6 text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Benvenutə <strong>{name}</strong>, ufficialmente <strong>{role}</strong> del festival!
      </motion.p>

      <motion.img
        src={imageUrl}
        alt="Badge PUG!"
        className="w-full max-w-md rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      />

      <motion.a
        href={`https://pugfest.vercel.app/badge?name=${name}&role=${role}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        Condividi su LinkedIn ↗
      </motion.a>
    </motion.div>
  );
}
