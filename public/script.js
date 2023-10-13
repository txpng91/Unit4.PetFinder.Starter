// Get element from root
const petContainer = document.getElementById('pet-container');

// Function to fetch all data
const fetchAllPets = async () => {
  try {
    const res = await fetch(`http://localhost:8081/api/v1/pets`);
    const pets = await res.json();
    return pets;
  } catch (error) {
    console.error('Unable to retrieve pets because of this: ', error);
  }
};

// Function to render all data
const renderAllPets = (pets) => {
  try {
    pets.forEach((pet) => {
      const petElement = document.createElement('div');
      petElement.classList.add('pet');

      petElement.innerHTML = `
                <div class="basic-info">
                    <h2 class="pet-name">${pet.name}</h2>
                    <p>Breed: ${pet.breed}</p>
                    <p>Age: ${pet.age}</p>
                    <p>Owner: ${pet.owner}</p>
                    <p>Telephone:${pet.telephone}</p>
                </div>
            `;

      petContainer.append(petElement);
    });
  } catch (error) {
    console.error('Unable to get pets!', error);
  }
};

// Main function to call get and render functions
const init = async () => {
  const pets = await fetchAllPets();
  renderAllPets(pets);
};

// Call main function
init();
