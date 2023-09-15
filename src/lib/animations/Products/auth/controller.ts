import { sleep, write } from '$lib/animations';
import { animate } from 'motion';

const braindeadUUID = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const createResettable = <Value extends object>(defaultValue: Value) => {
	type GlobalState = Record<string, Value>;
	type SubscribeCallback = (v: Value) => void;
	let subscribeCallbacks: SubscribeCallback[] = [];

	const d = { ...defaultValue };

	let currUuid = braindeadUUID();
	const state: GlobalState = {
		[currUuid]: { ...d }
	};

	const subscribe = (cb: SubscribeCallback) => {
		subscribeCallbacks.push(cb);
		cb(state[currUuid]);

		return () => {
			subscribeCallbacks = subscribeCallbacks.filter((c) => c !== cb);
		};
	};

	const reset = () => {
		currUuid = braindeadUUID();
		const fixedId = currUuid;
		const set = (v: Value) => {
			state[fixedId] = v;
			subscribeCallbacks.forEach((cb) => cb(state[currUuid]));
		};

		const update = (fn: (v: Value) => Value) => {
			set(fn(state[fixedId]));
		};

		set({ ...d });
		return { set, update };
	};

	return {
		subscribe,
		reset,
		set: (v: Value) => {
			state[currUuid] = v;
			subscribeCallbacks.forEach((cb) => cb(state[currUuid]));
		},
		update: (fn: (v: Value) => Value) => {
			state[currUuid] = fn(state[currUuid]);
			subscribeCallbacks.forEach((cb) => cb(state[currUuid]));
		}
	};
};

type State = {
	email: string;
	password: string;
	name: string;

	showControls: boolean;
	submitted: boolean;
	controls: {
		GitHub: boolean;
		Google: boolean;
		Apple: boolean;
		Microsoft: boolean;
	};
};

const state = createResettable<State>({
	email: '',
	password: '',
	name: "Walter O'Brian",
	showControls: false,
	submitted: false,
	controls: {
		GitHub: true,
		Google: false,
		Apple: false,
		Microsoft: false
	}
});

const emailToSet = 'walterobrian@example.com';
const passwordToSet = 'password';

type ExecuteArgs = {
	elements: {
		phone: HTMLElement | undefined;
		box: HTMLElement | undefined;
		code: HTMLElement | undefined;
		controls: HTMLElement | undefined;
	};
};

const execute = async ({ elements }: ExecuteArgs) => {
	try {
		console.log('elements', elements);
		const { phone, box, code, controls } = elements;
		if (!phone || !box || !code || !controls) {
			return;
		}

		// Reset
		const { update } = state.reset();
		await animate(phone, { x: 0, y: 0 }, { duration: 0 }).finished;
		await animate(box, { x: 260, y: 32, opacity: 0 }, { duration: 0 }).finished;
		await animate(code, { x: 200, y: 460, opacity: 0 }, { duration: 0 }).finished;
		await animate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0 }).finished;

		// Start
		await animate(box, { x: [260, 260], y: [48, 32], opacity: 1 }, { duration: 0.25, delay: 1 })
			.finished;

		await sleep(150);

		await write(emailToSet, (v) => update((p) => ({ ...p, email: v })), 300);
		await sleep(150);

		await write(passwordToSet, (v) => update((p) => ({ ...p, password: v })), 300);
		await sleep(500);

		console.log('animating code');
		await animate(code, { x: [200, 200], y: [460 + 16, 460], opacity: [0, 1] }, { duration: 0.25 })
			.finished;

		await sleep(500);

		update((p) => ({ ...p, submitted: true }));

		await sleep(1000);

		update((p) => ({ ...p, showControls: true }));
		animate(controls, { x: [420, 420], y: [16, 0], opacity: 1 }, { duration: 0.5 });
	} catch {
		// Do nothing. It's expected to error when trying to animate elements that no longer exist,
		// e.g. when the component is unmounted.
		console.log('error');
	}
};

export const authController = {
	execute,
	state
};
