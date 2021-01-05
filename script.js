document.getElementById("phonePlus").addEventListener("click", function () {
  handleCountAmount("phoneCount", "phone", true);
});

document.getElementById("phoneMinus").addEventListener("click", function () {
  handleCountAmount("phoneCount", "phone", false);
});

document.getElementById("casePlus").addEventListener("click", function () {
  handleCountAmount("caseCount", "case", true);
});

document.getElementById("caseMinus").addEventListener("click", function () {
  handleCountAmount("caseCount", "case", false);
});

function handleCountAmount(id, product, count) {
  if (count == true) {
    const count = document.getElementById(id).value;
    const countNumber = parseInt(count);
    const plusCount = countNumber + 1;
    document.getElementById(id).value = plusCount;

    if (product == "phone") {
      const amountCount = plusCount * 1219;
      document.getElementById("phoneAmount").innerText = amountCount;
      const subtotalAmount = document.getElementById("subtotalAmount")
        .innerText;
      const subtotalAmountValue = parseInt(subtotalAmount);
      const subtotalAmountNumber = subtotalAmountValue + 1219;
      document.getElementById(
        "subtotalAmount"
      ).innerText = subtotalAmountNumber;
      handleTotalBalance(subtotalAmountNumber);
    } else {
      const amountCount = plusCount * 59;
      document.getElementById("caseAmount").innerText = amountCount;
      const subtotalAmount = document.getElementById("subtotalAmount")
        .innerText;
      const subtotalAmountValue = parseInt(subtotalAmount);
      const subtotalAmountNumber = subtotalAmountValue + 59;
      document.getElementById(
        "subtotalAmount"
      ).innerText = subtotalAmountNumber;
      handleTotalBalance(subtotalAmountNumber);
    }
  } else {
    const count = document.getElementById(id).value;
    const countNumber = parseInt(count);
    const plusCount = countNumber - 1;
    document.getElementById(id).value = plusCount;

    if (product == "phone") {
      const amountCount = plusCount * 1219;
      document.getElementById("phoneAmount").innerText = amountCount;
      const subtotalAmount = document.getElementById("subtotalAmount")
        .innerText;
      const subtotalAmountValue = parseInt(subtotalAmount);
      const subtotalAmountNumber = subtotalAmountValue - 1219;
      document.getElementById(
        "subtotalAmount"
      ).innerText = subtotalAmountNumber;
      handleTotalBalance(subtotalAmountNumber);
    } else {
      const amountCount = plusCount * 59;
      document.getElementById("caseAmount").innerText = amountCount;
      const subtotalAmount = document.getElementById("subtotalAmount")
        .innerText;
      const subtotalAmountValue = parseInt(subtotalAmount);
      let subtotalAmountNumber = subtotalAmountValue - 59;
      document.getElementById(
        "subtotalAmount"
      ).innerText = subtotalAmountNumber;
      handleTotalBalance(subtotalAmountNumber);
    }
  }
}

function handleTotalBalance(num) {
  const tax = Math.round(num * 0.1);
  document.getElementById("taxAmount").innerText = tax;
  const totalBalance = num + tax;
  document.getElementById("totalBalance").innerText = totalBalance;
}

document.getElementById("checkOut").addEventListener("click", function () {
  document.getElementById("phoneCount").value = "0";
  document.getElementById("caseCount").value = "0";
  document.getElementById("phoneAmount").innerText = "0000";
  document.getElementById("caseAmount").innerText = "00";
  document.getElementById("subtotalAmount").innerText = "0000";
  document.getElementById("taxAmount").innerText = "00";
  document.getElementById("subtotalAmount").innerText = "0000";
  document.getElementById("totalBalance").innerText = "00";
  alert("Thank u for Order");
});
document.getElementById("removeItem").addEventListener("click", function () {
  const cartItem = (document.getElementById("cartItem").style.display = "none");
});
document.getElementById("removeItemTwo").addEventListener("click", function () {
  const cartItem = (document.getElementById("cartItemTwo").style.display =
    "none");
});
