function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
  }
  
  function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const extract = response.query.pages["21721040"].extract; // Extracting the content
        callback(extract);
      }
    };
    xhr.send();
  }
  
  queryWikipedia(createElement);
  