function quizEditPageLoad() {
  event.preventDefault();
  var x = document.querySelectorAll("select[id*=id_Question]").length;
  var count = 1;

  for (var i = 0; i < x; i++) {
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn " + count);
    deleteBtn.setAttribute("onclick","deleteElements(this.id)")
    var t = document.createTextNode("Delete Question " + count);
    deleteBtn.appendChild(t);
    var parentP = document.getElementById("id_Question" + (i + 1) + "type").parentNode;
    parentP.insertBefore(deleteBtn, document.getElementById("id_Question" + (i + 1) + "type"));
    count++;
  }
}

function newQuestion() {
    event.preventDefault();

  var i = document.querySelectorAll("label[for*=id_Question]:not([for*=Answer])").length;

  var deleteBtnContent = document.querySelectorAll("button[id*='deleteBtn ']");
  var last = deleteBtnContent[deleteBtnContent.length-1].id;
  var splitBtnName = last.split(" ");
  var num2 = splitBtnName[1];
  var updateDeleteLabel = Number(num2)+1;

  var quizForm = document.getElementById("quizForm");

  var p1 = document.createElement("p");
  p1.setAttribute("id", "pExtender"+updateDeleteLabel);

  var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn " + updateDeleteLabel);
    deleteBtn.setAttribute("onclick","deleteElements(this.id)")
    var tx = document.createTextNode("Delete Question " + (i+1));
    deleteBtn.appendChild(tx);

  var selection = document.createElement("select");
  selection.setAttribute("id", "id_Question" +updateDeleteLabel+ "type");
  selection.setAttribute("name", "Question" +updateDeleteLabel+ "type");

  var z1 = document.createElement("option");z1.setAttribute("value", "1");
  var t1 = document.createTextNode("MC");z1.appendChild(t1);

  var z2 = document.createElement("option");z2.setAttribute("value", "6");
  var t2 = document.createTextNode("ESS");z2.appendChild(t2);

  var z3 = document.createElement("option");z3.setAttribute("value", "3");
  var t3 = document.createTextNode("MA");z3.appendChild(t3);

  var z4 = document.createElement("option");z4.setAttribute("value", "4");
  var t4 = document.createTextNode("FIB");z4.appendChild(t4);

  var z5 = document.createElement("option");z5.setAttribute("value", "5");
  var t5 = document.createTextNode("TF");z5.appendChild(t5);

  var z6 = document.createElement("option");z6.setAttribute("value", "2");
  var t6 = document.createTextNode("SR");z6.appendChild(t6);

  var z7 = document.createElement("option");z7.setAttribute("value", "7");
  var t7 = document.createTextNode("");z7.appendChild(t7);

  quizForm.insertBefore(p1,document.getElementById("quizEditExtension"));
  p1.appendChild(deleteBtn);
  p1.appendChild(selection);
  selection.appendChild(z7);selection.appendChild(z1);selection.appendChild(z2);
  selection.appendChild(z3);selection.appendChild(z4);selection.appendChild(z5);
  selection.appendChild(z6);

  var p = document.createElement("p");
  p.setAttribute("id", "paragraphExtender"+updateDeleteLabel);

  var qlabel = document.createElement("label");
  qlabel.setAttribute("for", "id_Question "+updateDeleteLabel);

  var t = document.createTextNode("Question "+(i+1)+ ":");
  qlabel.appendChild(t);

  var sQ = document.getElementById("id_Question"+updateDeleteLabel+"type").selectedIndex;
  var sName = document.getElementById("id_Question"+updateDeleteLabel+"type").options;

  var qtArea = document.createElement("TextArea");
  qtArea.setAttribute("for", "id_Question "+updateDeleteLabel);
  qtArea.setAttribute("placeholder", sName[sQ].text +" Question Here");
  qtArea.setAttribute("cols", "40");
  qtArea.setAttribute("rows" , "1");
  qtArea.setAttribute("style", "height: 5rem");
  qtArea.setAttribute("maxlength", "1000");
  qtArea.setAttribute("id", "id_Question "+updateDeleteLabel);

  quizForm.insertBefore(p, document.getElementById("quizEditExtension"));
  p.appendChild(qlabel);
  p.appendChild(qtArea);

  window.scrollBy(0, 200);

    quizForm.appendChild(p);
    p.appendChild(qlabel);
    p.appendChild(qtArea);


}

function newAnswer() {
    event.preventDefault();

    var x = document.querySelectorAll("label[for*=id_QuestionAnswer]").length + 1;

    var quizForm = document.getElementById("quizForm");

    var p2 = document.createElement("p2");
    p2.setAttribute("id", "paExtend" + x);

    var alabel = document.createElement("label");
    alabel.setAttribute("for", "id_QuestionAnswer" + x);

    var t2 = document.createTextNode("Answer" + x + " ");
    alabel.appendChild(t2);

    var atArea = document.createElement("TextArea");
    atArea.setAttribute("for", "id_QuestionAnswer" + x);

    quizForm.appendChild(p2);
    p2.appendChild(alabel);
    p2.appendChild(atArea);

}

function deleteElements(clicked_id) {
  event.preventDefault();
  var btnName = clicked_id.replace(/'/g, "\\'");
  var splitBtnName = btnName.split(" ");
  var num = splitBtnName[1];

  var deleteBtnContent = document.getElementById("deleteBtn " + num).innerHTML;
  var splitBtnName = deleteBtnContent.split(" ");
  var num2 = splitBtnName[2];
  var updateDeleteLabel = Number(num)+1;

  for (var i = updateDeleteLabel; i<100; i++) {
    if (document.getElementById("deleteBtn "+i)) {
      document.getElementById("deleteBtn "+i).innerHTML = 'Delete Question '+num2;
      document.querySelector("label[for='id_Question " +i+ "']").innerHTML = "Question "+num2+":";
      num2++;
    }
    else {break;}
  }

  var qParent = document.getElementById("id_Question "+num).parentNode;
  qParent.remove();

  for (var i = 1; i<100; i++) {
    if (document.getElementById("id_Question" + num + "Answer" + i)) {
      var aParent = document.getElementById("id_Question" + num + "Answer" + i).parentNode;
      aParent.remove();
    }
    else {break;}
  }

  var typeParent = document.getElementById("id_Question"+num+"type").parentNode;
  typeParent.remove();

}

window.onload=quizEditPageLoad;