function send() {
    let elemen, chat, parent, spasi;
    let inp_chat = document.getElementById("chat").value;
    elemen = document.createElement("span");
    spasi = document.createElement("br");
    chat = document.createTextNode(inp_chat);

    elemen.appendChild(chat);

    parent = document.getElementById("msg");
    parent.appendChild(spasi);
    parent.appendChild(elemen);
  }