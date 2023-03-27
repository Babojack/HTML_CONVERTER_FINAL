let outputElements = [];

    function generateHTML() {
      let style = document.getElementById("style").value;
      let text = document.getElementById("text").value;
      let search = document.getElementById("search").value;
      let replace = document.getElementById("replace").value;
      let search2 = document.getElementById("search2").value;
      let replace2 = document.getElementById("replace2").value;
      let search3 = document.getElementById("search3").value;
      let replace3 = document.getElementById("replace3").value;
      let search4 = document.getElementById("search4").value;
      let replace4 = document.getElementById("replace4").value;

      let output = document.createElement("div");
      output.classList.add("output");

      let textarea = document.createElement("textarea");
      textarea.setAttribute("readonly", true);
      textarea.setAttribute("onclick", "this.select()");

      let closeButton = document.createElement("button");
      closeButton.innerText = "Schließen";
      closeButton.addEventListener("click", function () {
        document.body.removeChild(output);
      });

      let lines = text.split("\n");
      let html = "";
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.length > 0) {
          if (style.length > 0) {
            html += '<p style="' + style + '">' + line + "</p>\n";
          } else {
            html += "<p>" + line + "</p>\n";
          }

          if (search.length > 0) {
            html = html.split(search).join(replace);
          }
          if (search2.length > 0) {
            html = html.split(search2).join(replace2);
          }
          if (search3.length > 0) {
            html = html.split(search3).join(replace3);
          }
          if (search4.length > 0) {
            html = html.split(search4).join(replace4);
          }
        }
      }

      textarea.value = html;
      output.appendChild(textarea);
      output.appendChild(closeButton);
      document.body.appendChild(output);
      outputElements.push(output);
    }

    function removeGeneratedHTML() {
      for (let i = 0; i < outputElements.length; i++) {
        document.body.removeChild(outputElements[i]);
      }
      outputElements = [];
    }
    function addLine() {
      let text = document.getElementById("text");
      text.value +=
        "-_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_-\n";
    }

    function generateHTML() {
      let style = document.getElementById("style").value;
      let text = document.getElementById("text").value;
      let search = document.getElementById("search").value;
      let replace = document.getElementById("replace").value;
      let search2 = document.getElementById("search2").value;
      let replace2 = document.getElementById("replace2").value;
      let search3 = document.getElementById("search3").value;
      let replace3 = document.getElementById("replace3").value;
      let search4 = document.getElementById("search4").value;
      let replace4 = document.getElementById("replace4").value;

      let output = document.createElement("div");
      output.classList.add("output");

      let textarea = document.createElement("textarea");
      textarea.setAttribute("readonly", false);
      textarea.setAttribute("onclick", "this.select()");

      let closeButton = document.createElement("button");
      closeButton.innerText = "Schließen";
      closeButton.addEventListener("click", function () {
        document.body.removeChild(output);
      });

      let downloadButton = document.createElement("a");
      downloadButton.innerText = "Download";
      downloadButton.setAttribute(
        "href",
        "data:text/html;charset=utf-8," + encodeURIComponent(textarea.value)
      );
      downloadButton.setAttribute("download", "generated.html");
      downloadButton.classList.add("download");

      let startButton = document.createElement("button");
      startButton.innerText = "Start";
      startButton.addEventListener("click", function () {
        let customText = `<div style='margin:0px;color:rgb(40, 35, 92);font-family:"Noto Sans", Arial, sans-serif;font-size:10.5pt;'><a data-bsi-placeholder="$doc{d|Briefanrede unpersönlich}" href="" rel="noreferrer noopener" title=" ">Briefanrede(unpers&ouml;nlich)</a>`;    textarea.value = customText + "\n" + textarea.value;
        // Aktualisiere den Wert des Download-Buttons
        downloadButton.setAttribute(
          "href",
          "data:text/html;charset=utf-8," + encodeURIComponent(textarea.value)
        );
      });

      let endButton = document.createElement("button");
      endButton.innerText = "End";
      endButton.addEventListener("click", function () {
        let customText = '<p style="margin-top:7.5pt;"><a data-bsi-placeholder="$doc{d|Signatur - CS - Kunde}" href="" rel="noreferrer noopener" title=" ">Signatur - CS - Kunde</a></p></div>';
        textarea.value = textarea.value + "\n" + customText;
        // Aktualisiere den Wert des Download-Buttons
        downloadButton.setAttribute(
          "href",
          "data:text/html;charset=utf-8," + encodeURIComponent(textarea.value)
        );
      });

      let searchDiv = document.createElement("div");
      let searchInput = document.createElement("input");
      searchInput.setAttribute("type", "text");
      searchInput.setAttribute("placeholder", "Suchen...");
      let replaceInput = document.createElement("input");
      replaceInput.setAttribute("type", "text");
      replaceInput.setAttribute("placeholder", "Ersetzen...");
      let replaceButton = document.createElement("button");
      replaceButton.innerText = "Ersetzen";
      replaceButton.addEventListener("click", function () {
        let currentHtml = textarea.value;
        let searchValue = searchInput.value;
        let replaceValue = replaceInput.value;
        if (searchValue.length > 0 && replaceValue.length > 0) {
          let newHtml = currentHtml.split(searchValue).join(replaceValue);
          textarea.value = newHtml;
        }
      });
      searchDiv.appendChild(searchInput);
      searchDiv.appendChild(replaceInput);
      searchDiv.appendChild(replaceButton);

      let lines = text.split("\n");
      let html = "";
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.length > 0) {
          if (style.length > 0) {
            html += '<p style="' + style + '">' + line + "</p>\n";
          } else {
            html += "<p>" + line + "</p>\n";
          }

          if (search.length > 0) {
            html = html.split(search).join(replace);
          }
          if (search2.length > 0) {
            html = html.split(search2).join(replace2);
          }
          if (search3.length > 0) {
            html = html.split(search3).join(replace3);
          }
          if (search4.length > 0) {
            html = html.split(search4).join(replace4);
          }
        }
      }

      textarea.value = html;

      // Aktualisieren Sie den Wert des Download-Buttons, nachdem der Wert des Textbereichs festgelegt wurde
      downloadButton.setAttribute(
        "href",
        "data:text/html;charset=utf-8," + encodeURIComponent(textarea.value)
      );

      output.appendChild(textarea);
      output.appendChild(searchDiv);
      output.appendChild(startButton); // Füge den "Anfang"-Button hinzu
      output.appendChild(endButton); // Füge den "Ende"-Button hinzu
      output.appendChild(closeButton);
      output.appendChild(downloadButton);
      document.body.appendChild(output);
      outputElements.push(output);
    }

    function toggleTable() {
      const tableBody = document.getElementById("body");
      const displayStyle = tableBody.style.display;

      if (displayStyle === "none") {
        tableBody.style.display = "table-row-group";
      } else {
        tableBody.style.display = "none";
      }
    }

    function copyToClipboard(button) {
  const cell = button.parentElement;
  const cellContent = cell.textContent.replace("Kopieren", "").trim();

  navigator.clipboard.writeText(cellContent).then(
    () => {
      ;
    },
    (err) => {
      console.error("Fehler beim Kopieren des Inhalts: ", err);
    }
  );
}
