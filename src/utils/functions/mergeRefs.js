export default function mergeRefs(...refs) {
	if (!refs.length) return null;
	if (refs.length === 1) return refs[0];
	return (inst) => {
		for (const ref of refs) {
			if (typeof ref === "function") {
				ref(inst);
			} else if (ref) {
				ref.current = inst;
			}
		}
	};
}
