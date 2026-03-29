const colorData = {
  blue: [
    { name: "Royal Blue", hex: "#4169E1", rgb: "rgb(65, 105, 225)" },
    { name: "Sky Blue", hex: "#87CEEB", rgb: "rgb(135, 206, 235)" },
    { name: "Navy Blue", hex: "#000080", rgb: "rgb(0, 0, 128)" },
    { name: "Light Blue", hex: "#ADD8E6", rgb: "rgb(173, 216, 230)" }
  ],
  red: [
    { name: "Crimson", hex: "#DC143C", rgb: "rgb(220, 20, 60)" },
    { name: "Fire Brick", hex: "#B22222", rgb: "rgb(178, 34, 34)" },
    { name: "Salmon", hex: "#FA8072", rgb: "rgb(250, 128, 114)" },
    { name: "Dark Red", hex: "#8B0000", rgb: "rgb(139, 0, 0)" }
  ],
  green: [
    { name: "Forest Green", hex: "#228B22", rgb: "rgb(34, 139, 34)" },
    { name: "Lime Green", hex: "#32CD32", rgb: "rgb(50, 205, 50)" },
    { name: "Sea Green", hex: "#2E8B57", rgb: "rgb(46, 139, 87)" },
    { name: "Olive", hex: "#808000", rgb: "rgb(128, 128, 0)" }
  ],
  gray: [
    { name: "Slate Gray", hex: "#708090", rgb: "rgb(112, 128, 144)" },
    { name: "Silver", hex: "#C0C0C0", rgb: "rgb(192, 192, 192)" },
    { name: "Dim Gray", hex: "#696969", rgb: "rgb(105, 105, 105)" },
    { name: "Black", hex: "#000000", rgb: "rgb(0, 0, 0)" }
  ]
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

function renderPalette(category) {
  const paletteContainer = document.getElementById('palette');
  paletteContainer.innerHTML = '';

  const colors = colorData[category] || [];

  colors.forEach(color => {
    const item = document.createElement('div');
    item.className = 'color-item';

    const infoBoxes = `
      <div class="info-box" onclick="copyToClipboard('${color.name}')">
        <span class="info-label">Name</span>${color.name}
      </div>
      <div class="info-box" onclick="copyToClipboard('${color.hex}')">
        <span class="info-label">HEX</span>${color.hex}
      </div>
      <div class="info-box" onclick="copyToClipboard('${color.rgb}')">
        <span class="info-label">RGB</span>${color.rgb}
      </div>
    `;

    item.innerHTML = `
      <div class="color-swatch" style="background-color: ${color.hex}"></div>
      <div class="color-info">
        ${infoBoxes}
      </div>
    `;

    paletteContainer.appendChild(item);
  });
}

// Initial render
window.onload = () => renderPalette('blue');