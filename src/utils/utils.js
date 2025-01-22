export function anim(variants, custom = null) {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
    custom,
  }
}

// Track scrollYProgress
//  useMotionValueEvent(scrollYProgress, "change", (latest) => {
//    console.log(latest)
//  })
