export function anim(variants, custom = null, whileInView = false) {
  if (whileInView) {
    return {
      initial: "initial",
      whileInView: "whileInView",
      animate: "animate",
      exit: "exit",
      variants,
      custom,
    }
  }
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
    custom,
  }
}
