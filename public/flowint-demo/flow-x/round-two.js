const palettes = [
  {
    key: 'violeta',
    name: 'A · Violeta Flowint',
    additions: ['#C4C1FF'],
    idea: 'El violeta de Flowint ocupa toda la carátula. El lavanda ilumina la X y los detalles del plano técnico.',
  },
  {
    key: 'ciruela',
    name: 'B · Ciruela y ámbar',
    additions: ['#301A3C', '#FFCC83'],
    idea: 'El ciruela profundo enmarca el violeta y el rojo de Flowint. El ámbar le da un acento cálido al plano y a la X.',
  },
  {
    key: 'azul',
    name: 'C · Azul noche y aguamarina',
    additions: ['#171B39', '#92E4D7'],
    idea: 'El azul noche le da profundidad a la carátula. El aguamarina destaca la X y contrasta con el violeta y el rojo de Flowint.',
  },
];

const brandViolet = '#3D338C';
const brandRed = '#EE2D2A';
const roundLinks = [...document.querySelectorAll('.round-nav a')];
const roundOne = document.getElementById('round-one');
const roundTwo = document.getElementById('round-two');
const spread = document.getElementById('spread');
const options = document.querySelector('.palette-options');
let activePalette = 0;

function renderIntroduction() {
  const page = document.createElement('div');
  page.className = 'sheet-wrap';
  page.innerHTML = `
    <div class="caption">Conocé Flow X · 02</div>
    <article lang="es" class="sheet interior tech introduction">
      <div class="mast">
        <div class="wordmark">Flow <em>X</em></div>
        <span class="parent">Flowint</span>
      </div>
      <div class="gridrow title-row">
        <div class="section-label"><span>02</span><span>/</span><span>Flow X</span></div>
        <h2>${p(1)}</h2>
      </div>
      <div class="gridrow">
        <p class="lead">${p(2)}</p>
        <p>${p(3)}</p>
      </div>
      <div class="gridrow ecosystem-row">
        <p>${p(4)}</p>
        <ul class="ecosystem" aria-label="Ecosistema Flowint">
          <li class="product-core">Flow X</li>
          <li class="product-commerce">Flowint E-commerce</li>
          <li class="product-invoices">Flowint Invoices</li>
        </ul>
      </div>
      <div class="footer"><span>${p(45)}</span><span>02</span></div>
    </article>`;
  spread.insertBefore(page, spread.lastElementChild);
}

function showPalette(index) {
  activePalette = index;
  const palette = palettes[index];
  [...options.children].forEach((button, position) => {
    button.setAttribute('aria-pressed', String(position === index));
  });
  spread.dataset.palette = palette.key;
  renderDirection({
    id: 'tech',
    name: palette.name,
    idea: palette.idea,
    fonts: 'Baloo 2 + Outfit',
    colors: [brandViolet, brandRed, ...palette.additions],
  });
  renderIntroduction();
}

function showRound() {
  const secondRound = location.hash === '#ronda-2';
  roundOne.hidden = secondRound;
  roundTwo.hidden = !secondRound;
  roundLinks.forEach((link, index) => {
    if (index === Number(secondRound)) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  if (secondRound) {
    showPalette(activePalette);
  } else {
    delete spread.dataset.palette;
    const selected = roundOne.querySelector('button[aria-pressed="true"]');
    choose(Number(selected.dataset.direction));
  }
}

palettes.forEach(({ name }, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = name;
  button.addEventListener('click', () => showPalette(index));
  options.append(button);
});

window.addEventListener('hashchange', showRound);
showRound();
