///<reference types="react" />

declare module "app1/CounterAppOne" {
	const CounterAppOne: React.ComponentType & Props;

	export default CounterAppOne;
}
declare module "app1/CountAppOneReducer" {
	const CountAppOneReducer: any;

	export default CountAppOneReducer;
}

declare module "app2/CounterAppTwo" {
	const CounterAppTwo: React.ComponentType;

	export default CounterAppTwo;
}
