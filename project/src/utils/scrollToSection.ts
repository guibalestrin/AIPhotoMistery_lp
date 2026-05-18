export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) return;

  const navbarOffset = 96;
  const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth',
  });
}
