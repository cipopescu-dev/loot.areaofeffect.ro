export default function createRow({ playerName, items }) {
  let nameTh = document.createElement("th");
  nameTh.setAttribute("rowspan", items.length);
  nameTh.setAttribute("scope", "rowgroup");
  nameTh.innerText = playerName;

  let tableRowElements = items.map(({ itemId, resetNo }) => {
    let itemTd = document.createElement("td");
    itemTd.setAttribute("scope", "row");

    let itemLink = document.createElement("a");
    itemLink.setAttribute(
      "href",
      `https://www.wowhead.com/classic/item=${itemId}`,
    );
    itemTd.append(itemLink);

    let resetTd = document.createElement("td");
    resetTd.innerText = resetNo;
    resetTd.style = "text-align:center";

    let row = document.createElement("tr");
    row.append(itemTd, resetTd);

    return row;
  });

  tableRowElements[0].insertAdjacentElement("afterbegin", nameTh);
  return tableRowElements; // Not an element itself!
}
