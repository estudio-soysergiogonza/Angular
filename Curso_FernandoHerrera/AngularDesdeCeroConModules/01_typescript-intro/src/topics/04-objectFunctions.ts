interface Character {
	name: string;
	hp: number;
	showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
	character.hp += amount;
};

const strider: Character = {
	name: 'Strider',
	hp: 50,
	showHp() {
		console.log(`Puntos de Vida ${this.hp}`);
	}
};

healCharacter(strider, 10);

strider.showHp();

export {};