function loadCats() {
  const name = document.getElementById("filterName").value;
  const origin = document.getElementById("filterOrigin").value;

  let url = "http://localhost:3000/cats";
  const params = [];

  if (name.trim() !== "") params.push(`name=${encodeURIComponent(name)}`);
  if (origin.trim() !== "") params.push(`origin=${encodeURIComponent(origin)}`);

  if (params.length > 0) {
    url += "?" + params.join("&");
  }

  fetch(url)
    .then((response) => response.json())
    .then((cats) => {
      const tbody = document.querySelector("#catsTable tbody");
      tbody.innerHTML = "";

      cats.forEach((cat) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${cat.id}</td>
          <td>${cat.name}</td>
          <td>${cat.origin}</td>
          <td>
            <button class="delete" data-id="${cat.id}">X</button>
          </td>
        `;

        tbody.appendChild(tr);
      });

      attachDeleteEvents();
    })
    .catch((err) => console.error("Hiba a lekéréskor:", err));
}

function attachDeleteEvents() {
  const deleteButtons = document.querySelectorAll("button.delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");

      fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            alert("A macska nem található!");
          }
          return response.json();
        })
        .then(() => {
          loadCats(); // Frissítjük a táblát
        })
        .catch((err) => console.error("Hiba törléskor:", err));
    });
  });
}



loadCats();
