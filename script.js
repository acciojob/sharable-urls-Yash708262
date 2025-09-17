const url = document.getElementById('url');
const btn = document.getElementById('button');
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const baseUrl = "https://localhost:8080/";
  const name = nameInput.value.trim();
  const year = yearInput.value.trim();

  let query = [];
  if (name) query.push(`name=${encodeURIComponent(name)}`);
  if (year) query.push(`year=${encodeURIComponent(year)}`);

  const finalUrl = query.length > 0 ? baseUrl + "?" + query.join("&") : baseUrl;

  url.textContent = finalUrl;
});
