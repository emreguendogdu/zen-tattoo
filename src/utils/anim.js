export function anim(variants, custom = null) {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
    custom,
  }
}
