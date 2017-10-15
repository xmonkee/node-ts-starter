class Counter {
	counter: number;
	constructor() {
		this.counter = 0;
	}
	inc() {
		this.counter += 1;
	}
	dec() {
		this.counter -= 1;
	}
	get() {
		return this.counter;
	}
}

export default {
	counter: new Counter()
};