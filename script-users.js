class User {
	constructor(_firstName, _lastName, _age, _location) {
		this.firstName = _firstName
		this.lastName = _lastName
		this.age = _age
		this.location = _location
	}

	compareAges(otherUser) {
		// dice chi e' il piu' vecchio
		if (this.age > otherUser.age) {
			return `${this.firstName} e' piu' vecchio di ${otherUser.firstName}`
		} else if (this.age < otherUser.age) {
			return `${otherUser.firstName} e' piu' vecchio di ${this.firstName}`
		} else {
			return `${this.firstName} e ${otherUser.firstName} hanno la stessa eta'`
		}
	}
}

const user1 = new User('Pinco', 'Pallino', 30, 'Mondo')
const user2 = new User('Mario', 'Rossi', 25, 'Marte')
const user3 = new User('Amico', 'Nostro', 25, 'Venere')
