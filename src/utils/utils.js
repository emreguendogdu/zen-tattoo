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

const baseDelay = -0.5

const DELAYS = [
  { id: "h0", delay: baseDelay },
  { id: "title", delay: baseDelay + 0.11 },
  { id: "description", delay: baseDelay + 0.22 },
  { id: "address", delay: baseDelay + 0.33 },
  { id: "plants", delay: baseDelay + 0.55 },
  { id: "header", delay: baseDelay + 0.66 },
]

export const getDelay = (id) => {
  const delayObj = DELAYS.find((d) => d.id === id)
  return delayObj ? delayObj.delay : baseDelay
}
