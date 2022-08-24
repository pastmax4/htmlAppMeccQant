class rettangolo{

	#colore="Verde";
	constructor(base,altezza){
		this.base = base;
		this.altezza = altezza;
	}

	getBase(){
		return this.base;
	}

	getAltezza(){
		return this.altezza;		
	}

	setBase(inBase){
		this.base=inBase;
	}

	setAltezza(inAltezza){
		return this.altezza=inAltezza;		
	}

	calcolaArea(){
		return this.altezza* this.base;		
	}

	getColore(){
		return this.#colore;
	}

	setColore(inColore){
		 this.#colore=inColore;
	}


	
}

const mioRett =new rettangolo(10,3);
console.log(mioRett.calcolaArea());

mioRett.setAltezza(1000);
console.log(mioRett.calcolaArea());

console.log(mioRett.getColore());
mioRett.setColore("Lilla");
console.log(mioRett.getColore());


