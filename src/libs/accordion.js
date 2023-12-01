import { dataAccordion } from "./data-accordion.js";

const dataContainer = document.querySelector(".data-container");

const getData = () => {
  const buttonStates = new Array(dataAccordion.length).fill(false);

  // Iterate over the accordion data
  dataAccordion.map((data, index) => {
    const { title, description } = data;

    // Create DOM elements
    const itemContainerTitle = document.createElement("div");
    const buttonElement = document.createElement("button");
    const descriptionElement = document.createElement("p");
    const itemContainer = document.createElement("div");
    const titleElement = document.createElement("h3");

    // Set content for elements
    titleElement.textContent = title;
    descriptionElement.textContent = description;

    // Add classes to elements
    itemContainerTitle.classList.add("data-dropdown-title");
    itemContainer.classList.add("data-dropdown");

    // DOM structure
    itemContainerTitle.appendChild(titleElement);
    itemContainerTitle.appendChild(buttonElement);

    itemContainer.appendChild(itemContainerTitle);
    itemContainer.appendChild(descriptionElement);

    dataContainer.appendChild(itemContainer);

    // Add a "plus" icon to the button using SVG
    buttonElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
    `;

    // Add functionality to the buttons
    buttonElement.addEventListener("click", () => {
      // Toggle the state of the current button
      buttonStates[index] = !buttonStates[index];

      // Change content and visibility based on the state
      if (buttonStates[index] === true) {
        buttonElement.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
          </svg>
        `;
        buttonElement.style.backgroundColor = "#0d0d1d";
        descriptionElement.style.display = "flex";
      } else {
        buttonElement.style.backgroundColor = "#AD28EB";
        buttonElement.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        `;
        descriptionElement.style.display = "none";
      }
    });
  });
};

getData();
