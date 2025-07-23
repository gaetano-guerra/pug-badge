
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";

export default function BadgePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Partecipante";
  const role = searchParams.get("role") || "Design Lover";

  const title = `${name} | ${role} | PUG! Design Fest 2025`;

  const roleColors = {
    Staff: "from-pink-500 to-pink-700",
    Speaker: "from-yellow-400 to-yellow-600",
    Volontario: "from-green-400 to-green-600",
    "Design Lover": "from-blue-400 to-blue-600",
  };

  const bgGradient = roleColors[role] || "from-gray-300 to-gray-500";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0] p-8"
    >
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pugfest.vercel.app/badge" />
      </Head>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`relative w-80 h-[460px] bg-gradient-to-br ${bgGradient} text-white rounded-3xl shadow-2xl flex flex-col justify-between items-center p-6`}
      >
        {/* Foro */}
        <div className="absolute top-4 w-6 h-6 bg-white rounded-full shadow-inner border-2 border-gray-200"></div>

        {/* Ruolo */}
        <div className="mt-10 text-center">
          <h2 className="uppercase text-lg tracking-widest font-semibold">{role}</h2>
        </div>

        {/* Nome */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">{name}</h1>
        </div>

        {/* Footer con logo */}
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase mb-2">PUG! Design Fest 2025</p>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
            LOGO
          </div>
        </div>
      </motion.div>

      <a
        href={`https://pugfest.vercel.app/badge?name=${name}&role=${role}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800"
      >
        Condividi su LinkedIn ↗
      </a>
    </motion.div>
  );
}
