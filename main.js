import createRow from "./createRow.js";
import readFirebase from "./firebase.js";

let tBody = document.querySelector(".naxxTable");
const loot = await readFirebase("/loot/Naxxramas");
const attendances = await readFirebase("/attendances");
console.log(loot);
console.log(attendances);
Object.keys(loot)
  .sort((playerName1, playerName2) => playerName1 > playerName2)
  .forEach((playerName, idx) => {
    loot[playerName].sort((a, b) => a.resetNo < b.resetNo);
    let row = createRow({ playerName, items: loot[playerName] });
    row.forEach((tr) => tr.setAttribute("class", idx % 2 == 0 ? "tr2" : "tr1"));
    tBody.append(...row);
  });
WH.Tooltips.refreshLinks();
