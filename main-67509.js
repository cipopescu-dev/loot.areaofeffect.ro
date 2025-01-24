import createRow from "./createRow.js";
import readFirebase from "./firebase.js";

let tBody = document.querySelector(".naxxTable");
let caption = document.querySelector("caption");
caption.innerText = "Reading attendances...";
const attendances = await readFirebase("/attendances");
caption.innerText = "Reading Naxxramas loot...";
const loot = await readFirebase("/loot/Naxxramas");
caption.innerText = "";
console.log(loot);
console.log(attendances);
Object.keys(attendances)
  .sort(
    (playerName1, playerName2) =>
      attendances[playerName1] < attendances[playerName2]
  )
  .forEach((playerName, idx) => {
    (loot[playerName] || []).sort((a, b) => a.resetNo < b.resetNo);
    let row = createRow({
      playerName: `${playerName}(${attendances[playerName]})`,
      items: loot[playerName],
    });
    row.forEach((tr) => tr.setAttribute("class", idx % 2 == 0 ? "tr2" : "tr1"));
    tBody.append(...row);
  });
WH.Tooltips.refreshLinks();
