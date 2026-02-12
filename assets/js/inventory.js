const featuredVehicles = [
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

const galleryVehicles = [
  {
    id: "vehicle-escape",
    title: "2010 Ford Escape XLT",
    priceTag: "Available",
    images: [
      "assets/images/cos%20motors/explorer1.jpeg",
      "assets/images/cos%20motors/explorer2.jpeg",
      "assets/images/cos%20motors/explorer3.jpeg"
    ],
    features: [
      "2.4L, FWD, 4-cyl, 5 passengers",
      "Bluetooth, Backup Camera, Keyless Entry, Sunroof",
      "USB Input, Power Windows, Tinted Windows",
      "Running Boards, Original Wheels, Cruise Control",
      "150,000 miles, Clean title"
    ]
  },
  {
    id: "vehicle-rav4",
    title: "2018 Toyota RAV4",
    priceTag: "Available",
    images: [
      "assets/images/cos%20motors/toyota1.jpeg",
      "assets/images/cos%20motors/toyota2.jpeg",
      "assets/images/cos%20motors/toyota3.jpeg"
    ],
    features: [
      "4.0L, 6-cyl, 5 passengers",
      "Bluetooth, Backup Camera, Keyless Entry",
      "USB Input, Power Windows, Tinted Windows",
      "Running Boards, Original Wheels, Cruise Control",
      "73,000 miles, Clean title"
    ]
  },
  {
    id: "vehicle-rogue",
    title: "2016 Nissan Rogue S",
    priceTag: "Available",
    images: [
      "assets/images/cos%20motors/nissan1.jpeg",
      "assets/images/cos%20motors/nissan2.jpeg",
      "assets/images/cos%20motors/nissan3.jpeg"
    ],
    features: [
      "2.4L, FWD, 4-cyl, 5 passengers",
      "Bluetooth, Backup Camera, Keyless Entry",
      "USB Input, Power Windows, Tinted Windows",
      "Running Boards, Original Wheels, Cruise Control",
      "114,000 miles, Clean title"
    ]
  },
  {
    id: "vehicle-lexus",
    title: "2014 Lexus IS350 F Sport",
    priceTag: "Available",
    images: [
      "assets/images/cos%20motors/lexus1.jpeg",
      "assets/images/cos%20motors/lexus2.jpeg",
      "assets/images/cos%20motors/lexus3.jpeg"
    ],
    features: [
      "3.5L, 6-cyl, RWD, 5 passengers",
      "Bluetooth, Backup Camera, Keyless Entry",
      "USB Input, Power Windows, Tinted Windows",
      "Running Boards, Original Wheels, Cruise Control",
      "121,000 miles, Clean title"
    ]
  },
  {
    id: "vehicle-mustang",
    title: "2011 Ford Mustang V6",
    priceTag: "$8,900",
    images: [
      "assets/images/cos%20motors/ford1.jpeg",
      "assets/images/cos%20motors/ford2.jpeg",
      "assets/images/cos%20motors/ford3.jpeg"
    ],
    features: [
      "159,000 miles, Automatic",
      "Grey exterior, red interior",
      "Cold A/C, clean dashboard, great trunk space",
      "Mechanically solid, no warning lights"
    ]
  }
];

const featuredGrid = document.getElementById("inventory-grid");
const galleryGrid = document.getElementById("gallery-grid");
const featuredTemplate = document.getElementById("vehicle-card-template");
const galleryTemplate = document.getElementById("gallery-card-template");

const contactLines = [
  "Financing: Available",
  "Contact: 702-376-4436 | hehernandezalavezsymbiotic@gmail.com"
];

function addListSection(container, title, items) {
  const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];
  if (safeItems.length === 0) {
    return;
  }

  const section = document.createElement("section");
  section.className = "detail-section";

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

function renderFeatured() {
  if (!featuredGrid || !featuredTemplate) {
    return;
  }

  featuredVehicles.forEach((vehicle) => {
    const fragment = featuredTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".vehicle-card");
    card.id = vehicle.id;

    fragment.querySelector("[data-title]").textContent = vehicle.title;

    const tag = fragment.querySelector("[data-tag]");
    const tagText = vehicle.price || vehicle.titleStatus || "Available";
    if (tagText) {
      tag.textContent = tagText;
    } else {
      tag.remove();
    }

    const img = fragment.querySelector("[data-image]");
    if (vehicle.image) {
      img.src = vehicle.image;
      img.alt = `${vehicle.title} photo`;
    } else {
      img.remove();
    }

    const metaParts = [vehicle.miles, vehicle.titleStatus, vehicle.location].filter(Boolean);
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

    featuredGrid.appendChild(fragment);
  });
}

function renderGallery() {
  if (!galleryGrid || !galleryTemplate) {
    return;
  }

  galleryVehicles.forEach((vehicle) => {
    const fragment = galleryTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".vehicle-card");
    card.id = vehicle.id;

    fragment.querySelector("[data-title]").textContent = vehicle.title;
    const tag = fragment.querySelector("[data-tag]");
    tag.textContent = vehicle.priceTag || "Available";

    const gallery = fragment.querySelector("[data-gallery]");
    vehicle.images.forEach((src, index) => {
      const link = document.createElement("a");
      link.href = src;
      link.target = "_blank";
      link.rel = "noopener";
      link.className = "image-link";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `${vehicle.title} photo ${index + 1}`;
      img.loading = "lazy";
      img.decoding = "async";

      link.appendChild(img);
      gallery.appendChild(link);
    });

    const features = fragment.querySelector("[data-features]");
    vehicle.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      features.appendChild(li);
    });

    const contact = fragment.querySelector("[data-contact]");
    contactLines.forEach((line) => {
      const div = document.createElement("div");
      const parts = line.split(":");
      if (parts.length > 1) {
        const strong = document.createElement("strong");
        strong.textContent = `${parts[0]}:`;
        div.appendChild(strong);
        div.appendChild(document.createTextNode(` ${parts.slice(1).join(":").trim()}`));
      } else {
        div.textContent = line;
      }
      contact.appendChild(div);
    });

    galleryGrid.appendChild(fragment);
  });
}

renderFeatured();
renderGallery();
