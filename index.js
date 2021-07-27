var textMap = new Map();

function setear() {
  var editor = CodeMirror.fromTextArea(document.getElementById("log"),{
      lineNumbers : true,
      mode: "modo",
      theme : "base16-dark",
  });
  editor.setSize(null,300);
  textMap.set("log",editor);

}