"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-red-500">404 - ページが見つかりません</h1>
      <p className="mt-4 text-gray-600">
        お探しのページは存在しないか、削除された可能性があります。
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
      >
        ホームに戻る
      </a>
    </div>
  );
}
