import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
	// next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット
	dir: "./",
});

// Jest設定オブジェクト
const customJestConfig: Config = {
	// テスト環境を設定
	testEnvironment: "jest-environment-jsdom",
	// テストで使用するファイルの拡張子を指定
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
	// テストファイルのパターンを指定
	testMatch: ["**/*.test.tsx", "**/*.test.ts"],
	// テストのセットアップファイルを指定
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	// モジュールの名前解決設定
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	// カバレッジレポートの出力先を指定
	coverageDirectory: "reports/jest-coverage", // カバレッジレポートの出力先
	collectCoverage: true, // カバレッジを収集する
};

export default createJestConfig(customJestConfig);
