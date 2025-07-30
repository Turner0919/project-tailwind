let openTab = function (tabNum) {
  document.getElementById("tab1").classList.add("hidden");
  document.getElementById("tab2").classList.add("hidden");
  document.getElementById("tab3").classList.add("hidden");

  document.getElementById("btn1").className =
    "border-b-3 border-transparent px-9 py-5";
  document.getElementById("btn2").className =
    "border-b-3 border-transparent px-9 py-5";
  document.getElementById("btn3").className =
    "border-b-3 border-transparent px-9 py-5";

  document.getElementById("tab" + tabNum).classList.remove("hidden");

  document.getElementById("btn" + tabNum).className =
    "border-b-3 border-blue-500 px-9 py-5";
};
