import { useLayoutEffect } from "react";
import create, { UseBoundStore } from "zustand";
import createContext from "zustand/context";
import { combine } from "zustand/middleware";
import state from "./states";

let store: any;

type InitialState = ReturnType<typeof getDefaultInitialState>;
type UseStoreState = typeof initializeStore extends (
	...args: never
) => UseBoundStore<infer T>
	? T
	: never;

const getDefaultInitialState = () => state;

const zustandContext = createContext<UseStoreState>();
export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
	return create(
		combine({ ...getDefaultInitialState(), ...preloadedState }, (set, get) => ({
			changeLocale: () => {
				set({ locale: "thai" });
			},
		}))
	);
};

export const useCreateStore = (serverInitialState: InitialState) => {
	// For SSR & SSG, always use a new store.
	if (typeof window === "undefined") {
		return () => initializeStore(serverInitialState);
	}

	const isReusingStore = Boolean(store);

	store = store ?? initializeStore(serverInitialState);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useLayoutEffect(() => {
		if (serverInitialState && isReusingStore) {
			store.setState(
				{
					...store.getState(),

					...serverInitialState,
				},
				true
			);
		}
	});

	return () => store;
};
