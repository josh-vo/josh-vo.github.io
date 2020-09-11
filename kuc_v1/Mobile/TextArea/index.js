(function () {
    var space1 = document.getElementById('space1');
    var space2 = document.getElementById('space2');
    var space3 = document.getElementById('space3');

    var mobileText1 = new Kuc.MobileText({
      label: "text",
      value: "this is value1"
    });

    space1.appendChild(mobileText1);

    var textArea1 = document.createElement('textarea');
    textArea1.rows = 1;
    textArea1.value = "TEST 1";

    var textArea2 = document.createElement('textarea');
    textArea2.rows = 2;
    textArea2.value = "TEST 2";

    var textArea3 = document.createElement('textarea');
    textArea3.rows = 3;
    textArea3.value = "TEST 3";

    space1.appendChild(textArea1);
    space2.appendChild(textArea2);
    space3.appendChild(textArea3);
})();
