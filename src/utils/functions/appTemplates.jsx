import { motion } from "framer-motion";

function WrapFondu({ app, show = true }) {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={show ? { opacity: 1 } : { opacity: 0 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 0.8 }}>
			{app}
		</motion.div>
	);
}

export { WrapFondu };
