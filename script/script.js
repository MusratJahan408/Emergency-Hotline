// common function

// get element
function getElement(id) {
  const element = document.getElementById(id).innerText;
  const ConvertElement = parseInt(element);
  return ConvertElement;
}

// set element
function setElement(id, value) {
  document.getElementById(id).innerText = value;
}

// heart count
const heartIcons = document.getElementsByClassName("heart-count");
for (const heart of heartIcons) {
  heart.addEventListener("click", function () {
    let heartCount = getElement("heart-icon");
    heartCount++;
    setElement("heart-icon", heartCount);
  });
}

// call button

const callBtn = document.getElementsByClassName("call-btn");
for (const btn of callBtn) {
  btn.addEventListener("click", function () {
    const serviceTitle = btn.parentNode.parentNode.children[1].innerText;
    const name = btn.parentNode.parentNode.children[2].innerText;
    const number = btn.parentNode.parentNode.children[3].innerText;
    const date = new Date().toLocaleTimeString();

    const callHistory = document.getElementById("call-history");
    const div = document.createElement("div");
    div.innerHTML = `
            <div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-lg p-4 my-4"
            >
              <div>
                <h3>${serviceTitle}</h3>
                <p class="text-[#5C5C5C]">${number}</p>
              </div>
              <p>${date}</p>
            </div>
    `;
    callHistory.appendChild(div);

    const coins = getElement("coin");
    const getCoins = coins - 20;
    if (coins <= 0) {
      div.innerHTML = "";
      return alert(
        `❌ আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে 20 কয়েন লাগবে ।`
      );
    }
    setElement("coin", getCoins);
    alert(`📞 Calling ${name} Service ${number}...`);
  });
}

// call history
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("call-history").innerText = "";
});

// copy button
const copyBtns = document.getElementsByClassName("copy-btn");
for (const btns of copyBtns) {
  btns.addEventListener("click", function () {
    const number = btns.parentNode.parentNode.children[3].innerText;
    let copyCount = getElement("copy-count");
    copyCount++;
    setElement("copy-count", copyCount);
    navigator.clipboard.writeText(number);
    return alert(`নম্বর কপি হয়েছে:${number}`);
  });
}
