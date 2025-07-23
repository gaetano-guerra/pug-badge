// pages/badges.js
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

const roleStyles = {
  staff: { from: "from-yellow-300", to: "to-yellow-500", text: "text-black" },
  speaker: { from: "from-pink-400", to: "to-pink-600", text: "text-black" },
  volontario: { from: "from-green-400", to: "to-green-600", text: "text-black" },
};

export default function BadgesPage() {
  const params = useSearchParams();
  const name = params.get("name") || "Partecipante";
  const role = (params.get("role") || "Speaker").toLowerCase();

  const style = roleStyles[role] || { from: "from-gray-200", to: "to-gray-400", text: "text-black" };

  const title = `${name} | ${role}`;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <Head>
        <title>Badge – {name}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <motion.div
        className="grid gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <AnimatePresence>
          <motion.div
            className={`rounded-xl shadow-2xl w-72 h-96 p-6 flex flex-col justify-between bg-gradient-to-br ${style.from} ${style.to} ${style.text}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="uppercase text-xs tracking-widest">{role}</p>
                <h1 className="mt-2 text-2xl font-extrabold leading-tight">{name}</h1>
              </div>
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-sm font-bold text-gray-800">
                PUG
              </div>
            </div>

            <p className="uppercase text-xs tracking-[4px] opacity-80">Design Fest 2025</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
