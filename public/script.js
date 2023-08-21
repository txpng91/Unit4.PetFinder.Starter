const petContainer = document.getElementById('pet-container');

const fetchAllPets = async () => {
  try {
    const res = await fetch(`http://localhost:8081/api/v1/pets`);
    const pets = await res.json();
    return pets;
  } catch (error) {
    console.error('Unable to retrieve pets because of this: ', error);
  }
};

const renderAllPets = (pets) => {
  try {
    pets.forEach((pet) => {
      const petElement = document.createElement('div');
      petElement.classList.add('pet-item');

      petElement.innerHTML = `
                <div class="basic-info">
                    <h2>${pet.name}</h2>
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

const init = async () => {
  const pets = await fetchAllPets();
  renderAllPets(pets);
};

init();
