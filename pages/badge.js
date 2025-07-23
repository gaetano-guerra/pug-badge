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

  const getBackgroundColor = (role) => {
    switch (role.toLowerCase()) {
      case "staff":
        return "bg-yellow-400 text-black";
      case "speaker":
        return "bg-pink-500 text-white";
      case "ospite":
        return "bg-white text-black";
      default:
        return "bg-neutral-100 text-black";
    }
  };

  const badgeStyle = getBackgroundColor(role);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0] text-center p-6"
    >
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pugfest.vercel.app/badge" />
      </Head>

      <div className={`rounded-xl shadow-lg w-[300px] h-[480px] p-6 flex flex-col justify-between ${badgeStyle}`}> 
        <div className="text-left">
          <p className="uppercase text-xs tracking-widest font-semibold mb-2">{role}</p>
          <h1 className="text-3xl font-bold leading-tight break-words">{name}</h1>
        </div>

        <div className="text-sm text-left">
          <p className="uppercase font-bold">PUG! Design Fest 2025</p>
          <p className="mt-1 text-xs">[LOGO PUG QUI]</p>
        </div>
      </div>

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
