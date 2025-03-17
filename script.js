let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSV0BCF14K97Co4mCasbw2v4faf102YLd8M7J2bYUcCJClWrdAUVC3dXDUFSw5rHDJfsh6SaDiTExk6/pub?output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here
  let component = document.createElement("div")
component.classList.add("beagle-victim")

  let name = document.createElement("p")
  name.textContent = row.name
  name.classList.add("name")

  let image = document.createElement("img")
  image.src= "images/" + row.image
  image.classList.add("dog-image")

  component.addEventListener("click", function(){
window.open(row.page)


  })

  component.append(name)
  component.append(image)
  main.append(component)

}

