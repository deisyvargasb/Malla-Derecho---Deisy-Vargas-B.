// Guardar el estado de los checkboxes en localStorage
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  const id = checkbox.id;
  const saved = localStorage.getItem(id);
  if (saved === 'true') checkbox.checked = true;

  checkbox.addEventListener('change', () => {
    localStorage.setItem(id, checkbox.checked);
  });
});
