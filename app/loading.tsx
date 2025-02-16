"use client";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent">
      <p className="mt-4 text-gray-600 text-lg">読み込み中...</p></div>
    </div>
  );
}
