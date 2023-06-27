export default function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} mariante0dorescu`;

  footer.appendChild(copyright);

  return footer;
}
