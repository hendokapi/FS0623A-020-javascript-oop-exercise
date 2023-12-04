const formElement = document.querySelector('form')
const petNameField = document.querySelector('#pet-name')
const ownerNameField = document.querySelector('#owner-name')
const petTypeField = document.querySelector('#pet-type')
const petBreedField = document.querySelector('#pet-breed')

const petListElement = document.querySelector('#pet-list')

const petList = []

class Pet {
	constructor(_petName, _ownerName, _species, _breed) {
		this.petName = _petName
		this.ownerName = _ownerName
		this.species = _species
		this.breed = _breed
	}

	hasSameOwnerAs(otherPet) {
		// return this.ownerName === otherPet.ownerName ? true : false
		return this.ownerName === otherPet.ownerName
	}
}

formElement.addEventListener('submit', function (event) {
	// evitiamo il refresh del browser
	event.preventDefault()

	// costruiamo l'oggetto di tipo Pet con i dati presi dal form
	petList.push(
		new Pet(
			petNameField.value,
			ownerNameField.value,
			petTypeField.value,
			petBreedField.value
		)
	)

	// renderizziamo gli animali nella lista nella pagina
	renderPetList()

	// reset del form
	petNameField.value = ''
	ownerNameField.value = ''
	petTypeField.value = ''
	petBreedField.value = ''
})

function renderPetList() {
	petListElement.innerHTML = ''
	petList.map((pet) => {
		const petLi = document.createElement('li')
		petLi.innerHTML = pet.petName
		petListElement.appendChild(petLi)
	})
}
