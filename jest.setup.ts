import "@testing-library/jest-dom";

// `globalThis` の型を拡張
declare global {
	var IS_REACT_ACT_ENVIRONMENT: boolean;
}

// `act()` の環境設定
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Jest 環境で `fetch` をモックする
global.fetch = jest.fn();
