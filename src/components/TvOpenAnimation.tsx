import { motion } from "framer-motion";

export default function TVOpenAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", width: "auto", opacity: 1 }} // adjust height to your map
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full overflow-hidden rounded-md"
    >
      {children}
    </motion.div>
  );
}
