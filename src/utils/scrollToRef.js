export function scrollToRef(ref, offset = 80) {
  if (!ref?.current) return;
  const y = ref.current.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
