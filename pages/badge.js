
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";

export default function BadgePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Partecipante";
  const role = searchParams.get("role") || "Design Lover";

  const title = `${name} | ${role} | PUG! Design Fest 2025`;

  const roleColors = {
    Staff: "#ff00aa",
    Speaker: "#ffe600",
    Volontario: "#00ff99",
    "Design Lover": "#2222ff",
  };

  const bgColor = roleColors[role] || "#dddddd";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-6"
      style={{ backgroundColor: bgColor }}
    >
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pugfest.vercel.app/badge" />
      </Head>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white w-full max-w-xs rounded-lg shadow-lg px-4 py-6"
      >
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <p className="text-sm uppercase tracking-widest mb-4">{role}</p>
        <div className="text-xs text-gray-400">PUG! Design Fest 2025</div>
      </motion.div>
    </motion.div>
  );
}
