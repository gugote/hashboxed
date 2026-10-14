document.querySelectorAll('.modal-form').forEach((form) => {
  form.addEventListener('submit', (event) => { event.preventDefault(); event.stopImmediatePropagation(); }, true);
  const button = form.querySelector('[type="submit"], .modal-form__submit');
  if (button) { button.disabled = true; button.textContent = 'Vista de demostración'; button.style.opacity = '.6'; }
  const note = document.createElement('p');
  note.textContent = 'Demo de presentación: este formulario no envía datos.';
  note.style.cssText = 'font-size:14px;margin-top:16px;color:#656070';
  form.append(note);
});
