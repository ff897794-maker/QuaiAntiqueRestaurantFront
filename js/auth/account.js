function displayUserInfos(userInfos) {
  const userInfoContainer = document.getElementById("userInfo-container");
  console.log("Données utilisateur:", userInfos);
  userInfoContainer.innerHTML = ""; // reset

  const form = document.createElement("form");

  // NOM
  const nomLabel = document.createElement("label");
  nomLabel.setAttribute("for", "NomInput");
  nomLabel.textContent = "Nom :";
  const nomInput = document.createElement("input");
  nomInput.type = "text";
  nomInput.classList.add("form-control");
  nomInput.id = "NomInput";
  nomInput.name = "Nom";
  nomInput.value = userInfos.firstName || "";

  // PRENOM
  const prenomLabel = document.createElement("label");
  prenomLabel.setAttribute("for", "PrenomInput");
  prenomLabel.textContent = "Prénom :";
  const prenomInput = document.createElement("input");
  prenomInput.type = "text";
  prenomInput.classList.add("form-control");
  prenomInput.id = "PrenomInput";
  prenomInput.name = "Prenom";
  prenomInput.value = userInfos.lastName || "";

  // ALLERGIES
  const allergieLabel = document.createElement("label");
  allergieLabel.setAttribute("for", "allergieInput");
  allergieLabel.textContent = "Allergies :";
  const allergieInput = document.createElement("input");
  allergieInput.type = "text";
  allergieInput.classList.add("form-control");
  allergieInput.id = "allergieInput";
  allergieInput.name = "Allergies";
  allergieInput.value = "";

  // NB CONVIVES
  const nbConvivesLabel = document.createElement("label");
  nbConvivesLabel.setAttribute("for", "nbConvivesInput");
  nbConvivesLabel.textContent = "Nombre de convives :";
  const nbConvivesInput = document.createElement("input");
  nbConvivesInput.type = "number";
  nbConvivesInput.classList.add("form-control");
  nbConvivesInput.id = "nbConvivesInput";
  nbConvivesInput.name = "NbConvives";
  nbConvivesInput.value = "";

  form.appendChild(nomLabel);
  form.appendChild(nomInput);
  form.appendChild(prenomLabel);
  form.appendChild(prenomInput);
  form.appendChild(allergieLabel);
  form.appendChild(allergieInput);
  form.appendChild(nbConvivesLabel);
  form.appendChild(nbConvivesInput);

  userInfoContainer.appendChild(form);
}
