const vehicles = [
  {
    id: "tacoma-2015",
    title: "2015 Toyota Tacoma PreRunner",
    image: "assets/cars/Tacoma.png",
    miles: "101,000 miles",
    titleStatus: "Rebuilt title",
    highlights: ["Financing available", "Cash offers welcome"],
    specs: ["4.0L V6", "Short bed", "RWD", "Seats 5"],
    features: [
      "Bluetooth",
      "Backup camera",
      "Keyless entry",
      "USB input",
      "Power windows",
      "Tinted windows",
      "Running boards",
      "Original wheels",
      "Cruise control"
    ],
    requirements: [
      "Proof of income + any form of ID",
      "Prueba de ingresos + cualquier forma de ID"
    ],
    cta: [
      "Message me for more info",
      "Schedule a test drive today",
      "Let's get you approved (no in-house financing)"
    ],
    badges: ["Se habla espanol", "Se financea"]
  },
  {
    id: "mercedes-2018-c300",
    title: "2018 Mercedes-Benz C300",
    image: "assets/cars/Mercedes.png",
    miles: "28,000 miles",
    titleStatus: "Rebuilt title (very minor, no airbags deployed)",
    highlights: ["Financing available", "Low miles"],
    specs: ["2.0L 4-cylinder", "Automatic transmission", "Great on gas"],
    features: [
      "Sport/Eco mode",
      "Sunroof",
      "Alloy wheels",
      "Auto stop/start",
      "Bluetooth",
      "Ceramic tint",
      "Apple CarPlay",
      "Push start",
      "Heated seats",
      "Electric foldable mirrors",
      "Walk up lights",
      "Park assist"
    ],
    requirements: ["ITIN", "Seguro", "Matricula", "Pasaporte", "Nada"],
    cta: [
      "Message me for more info",
      "Schedule a test drive today",
      "Let's get you approved"
    ],
    badges: ["Se habla espanol", "Se financea"]
  },
  {
    id: "camaro-2017-ss",
    title: "2017 Chevrolet Camaro SS",
    image: "assets/cars/Camaro.png",
    miles: "32,000 miles",
    titleStatus: "Rebuilt title",
    highlights: ["Financing available", "Low miles", "Many upgrades"],
    specs: ["6.2L V8", "Manual transmission", "Sport/Track/Tour mode"],
    features: ["Bluetooth", "Apple CarPlay", "LED side markers"],
    upgrades: [
      "Stage 3 cam kit",
      "DSX E85 flex fuel kit",
      "Nitto tires",
      "Headers",
      "Upgraded front slotted rotors",
      "Upgraded big front Brembo brakes",
      "K&N intake",
      "MRR rims",
      "MSD injectors",
      "JLT oil catch can",
      "Front lip",
      "Upgraded front grill"
    ],
    requirements: ["ITIN", "Seguro", "Matricula", "Pasaporte", "Nada"],
    cta: [
      "Message me for more info",
      "Schedule a test drive today",
      "Let's get you approved"
    ],
    badges: ["Se habla espanol", "Se financea"]
  },
  {
    id: "jeep-2007-compass",
    title: "2007 Jeep Compass",
    image: "assets/cars/jeep.png",
    miles: "162,000 miles",
    titleStatus: "Clean title",
    price: "$3,500 (negotiable)",
    location: "Las Vegas",
    highlights: ["Runs and drives good", "Clean title in hand", "Located in Las Vegas"],
    cta: ["DM me for info / Mandame mensaje para mas informacion"],
    badges: ["Se habla espanol", "Se vende"]
  }
];

const inventory = document.getElementById("inventory-grid");
const template = document.getElementById("vehicle-card-template");

function addListSection(container, title, items) {
  const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];
  if (safeItems.length === 0) {
    return;
  }

  const section = document.createElement("section");
  section.className = "card-section";

  const heading = document.createElement("h4");
  heading.textContent = title;

  const list = document.createElement("ul");
  safeItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  section.appendChild(heading);
  section.appendChild(list);
  container.appendChild(section);
}

if (inventory && template) {
  vehicles.forEach((vehicle) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".car-card");
    card.id = vehicle.id;

    const img = fragment.querySelector("img");
    if (vehicle.image) {
      img.src = vehicle.image;
      img.alt = `${vehicle.title} photo`;
    } else {
      img.remove();
    }

    fragment.querySelector("[data-title]").textContent = vehicle.title;

    const metaParts = [vehicle.miles, vehicle.titleStatus, vehicle.price, vehicle.location].filter(Boolean);
    const meta = fragment.querySelector("[data-meta]");
    if (metaParts.length) {
      meta.textContent = metaParts.join(" • ");
    } else {
      meta.remove();
    }

    const badges = fragment.querySelector("[data-badges]");
    const badgeItems = Array.isArray(vehicle.badges) ? vehicle.badges.filter(Boolean) : [];
    if (badgeItems.length) {
      badgeItems.forEach((label) => {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = label;
        badges.appendChild(badge);
      });
    } else {
      badges.remove();
    }

    const sections = fragment.querySelector("[data-sections]");
    addListSection(sections, "Highlights", vehicle.highlights);
    addListSection(sections, "Specs", vehicle.specs);
    addListSection(sections, "Features", vehicle.features);
    addListSection(sections, "Upgrades", vehicle.upgrades);
    addListSection(sections, "Requirements", vehicle.requirements);
    addListSection(sections, "Next step", vehicle.cta);

    inventory.appendChild(fragment);
  });
}
