"use client";

import { useEffect } from "react";

export default function ErrorPage({
	error,
	reset,
}: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
			<h1 className="text-4xl font-bold text-red-500">エラーが発生しました</h1>
			<p className="mt-4 text-gray-600">
				申し訳ありません。予期しないエラーが発生しました。
			</p>
			<button
				type="button" // ✅ `type="button"` を追加
				onClick={() => reset()}
				className="mt-6 inline-block rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
			>
				再試行
			</button>
		</div>
	);
}
