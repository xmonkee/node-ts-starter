class Counter {
	private counter: number;
	constructor() {
		this.counter = 0;
	}
	public inc() {
		this.counter += 1;
	}
	public dec() {
		this.counter -= 1;
	}
	public get() {
		return this.counter;
	}
}

export default {
	counter: new Counter(),
};
