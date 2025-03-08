import { render, screen, waitFor, act } from "@testing-library/react";
import Test from "./Test";

// テスト前にfetchをモック化
beforeEach(() => {
  global.fetch = jest.fn(() =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: async () => ({ message: "Mocked API Response" }),
        });
      }, 0); // 0ミリ秒の遅延でも効果があります
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("<Test />", () => {
  test("コンポーネントが正しくレンダリングされる", async () => {
    // レンダリングをactでラップ
    await act(async () => {
      render(<Test />);
    });

    // 初期レンダリング後、フェッチが解決される前
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Mocked API Response")).toBeInTheDocument();
    });
  });

  test("API の取得に失敗した場合、エラーメッセージを表示する", async () => {
    // この特定のテスト用にモックをオーバーライド
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await act(async () => {
      render(<Test />);
    });

    // エラーメッセージが表示されるのを待機
    await waitFor(() => {
      expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
    });
  });
});