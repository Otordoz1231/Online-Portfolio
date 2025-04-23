function selectProject(btn) {
    const title = btn.parentElement.querySelector("h3").textContent;
    const selectedList = document.getElementById("selectedList");
  
    const item = document.createElement("li");
    item.textContent = title;
  
    selectedList.appendChild(item);
    btn.disabled = true;
    btn.textContent = "Selected";
  }
  