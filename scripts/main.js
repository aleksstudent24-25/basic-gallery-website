function selectPicture(name, int) {
  let id = document.getElementById("pictures");
  id.innerHTML = "";
  for (let i = 1; i <= int; i++) {
    const node = document.createElement("img");
    node.setAttribute("src", `./images/${name}-h${i}.jpg`);
    if (name == "elfs") node.setAttribute("id", "elf");
    id.appendChild(node);
  }
}
