const API_BASE = "http://localhost:3000";

async function loadCats() {
  const name = document.getElementById("filterName").value.trim();
  const origin = document.getElementById("filterOrigin").value.trim();

  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (origin) params.append("origin", origin);

  const url = `${API_BASE}/cats?${params.toString()}`;

  try {
    const response = await fetch(url);
    const cats = await response.json();

    const tbody = document.querySelector("#catsTable tbody");
    tbody.innerHTML = cats
      .map(cat => `
        <tr>
          <td>${cat.id}</td>
          <td>${cat.name}</td>
          <td>${cat.origin}</td>
          <td><button class="delete" data-id="${cat.id}">X</button></td>
        </tr>
      `)
      .join("");
  } catch (err) {
    console.error("Betöltési hiba:", err);
  }
}

async function deleteCat(id) {
  try {
    const response = await fetch(`${API_BASE}/cats/${id}`, { method: "DELETE" });
    if (!response.ok) alert("A macska nem található!");
    loadCats();
  } catch (err) {
    console.error("Törlési hiba:", err);
  }
}

document
  .querySelector("#catsTable tbody")
  .addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
      deleteCat(e.target.dataset.id);
    }
  });

loadCats();
