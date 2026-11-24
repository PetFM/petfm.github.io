(function () {
  const TEAM = [
    { n: "Marek Dieška",       sk: "Mobilná aplikácia",         en: "Mobile app",              bg: "#ead9c2", fg: "#5a3a26" },
    { n: "Adrián Fáber",       sk: "Bezpečnosť aplikácie",      en: "Application security",    bg: "#e4cfb0", fg: "#5a3a26" },
    { n: "Nikolas Knapík",     sk: "Dashboard pre kliniky",     en: "Clinic dashboard",        bg: "#d8bf9f", fg: "#5a3a26" },
    { n: "Viktória Latičová",  sk: "UI/UX a mobilná aplikácia", en: "UI/UX & mobile app",      bg: "#cdb394", fg: "#4a2f1f" },
    { n: "Iveta Lešková",      sk: "Analýza a kvalita dát",     en: "Data analysis & quality", bg: "#b49573", fg: "#fffbf6" },
    { n: "Adam Svitek",        sk: "Backend",                   en: "Backend",                 bg: "#9c7c5c", fg: "#fffbf6" },
    { n: "Richard Zahoranský", sk: "Databáza a backend",        en: "Database & backend",      bg: "#8a6649", fg: "#fffbf6" }
  ];

  const grid = document.getElementById("team");
  if (!grid) return;

  const initials = name => name.split(" ").map(word => word[0]).join("");

  TEAM.forEach(m => {
    const card = document.createElement("div");
    card.className = "member reveal";
    card.innerHTML = `
      <div class="av" style="background:${m.bg};color:${m.fg}">${initials(m.n)}</div>
      <div>
        <h3>${m.n}</h3>
        <span class="role"><span class="sk">${m.sk}</span><span class="en">${m.en}</span></span>
      </div>`;
    grid.appendChild(card);
  });
})();
