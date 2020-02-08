let tablearray = JSON.parse(localStorage.getItem("giftRecords")) || [];

for (i = 0; i < tablearray.length; i++) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");

  td1.innerHTML = i+1;
  td2.innerHTML = tablearray[i].buyersName;
  td3.innerHTML = tablearray[i].streetAddress;
  td4.innerHTML = tablearray[i].city;
  td5.innerHTML = tablearray[i].amount;
  td6.innerHTML = tablearray[i].phoneNumber;

  let tbody = document.getElementById("t-body");
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tbody.appendChild(tr);
}
