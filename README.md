# Frontend Skeleton

このリポジトリは、Next.js App Router を使用したフロントエンドテンプレートです。

## セットアップ方法
````plaintext
pnpm install
pnpm dev
````

## ディレクトリ構造
````plaintext
frontend-skeleton/
│── public/            # 静的ファイル（画像, アイコン など）
│── components/        # UIコンポーネント（再利用可能な部品）
│   ├── ui/            # 汎用的な UI コンポーネント
│   ├── layout/        # レイアウト関連コンポーネント
│   ├── modals/        # モーダル専用のコンポーネント
│   ├── forms/         # フォーム関連コンポーネント
│   ├── buttons/       # ボタン系コンポーネント
│   ├── cards/         # カードデザインのコンポーネント
│   ├── index.ts       # コンポーネントのエントリポイント
│
│── lib/               # ロジック系・APIクライアント・ヘルパー関数
│   ├── api/           # APIリクエスト関連（GraphQL / REST API）
│   ├── hooks/         # カスタムフック
│   ├── utils/         # 汎用的な関数（フォーマット, パース など）
│   ├── constants/     # 定数・環境変数
│   ├── stores/        # Zustand, Jotai などの状態管理
│   ├── types/         # TypeScript の型定義
│   ├── config/        # 設定ファイル（環境変数, サーバー設定）
│   └── index.ts       # lib 内のエントリポイント
│
│── app/               # Next.js App Router のルーティング管理
│   ├── layout.tsx     # 全ページ共通のレイアウト
│   ├── page.tsx       # `/` (ルートページ)
│   ├── about/         # `/about` ページ
│   │   ├── page.tsx   # `/about` のページコンポーネント
│   │   ├── layout.tsx # `/about` 専用のレイアウト
│   │   └── loading.tsx # `/about` のローディング状態
│   ├── blog/          # `/blog` ページ
│   │   ├── page.tsx   # `/blog` のページコンポーネント
│   │   ├── [id]/      # `/blog/:id` の動的ルーティング
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── not-found.tsx
│   ├── loading.tsx    # グローバルローディング
│   ├── not-found.tsx  # 404 ページ
│   └── error.tsx      # エラーページ
│
│── styles/            # CSS, Biome, Tailwind などのスタイル管理
│── tests/             # テスト関連（unit / integration / e2e）
│── .husky/            # Husky の設定（コミット前チェックなど）
│── .storybook/        # Storybook の設定
│── playwright/        # Playwright のテスト設定
│── jest.config.js     # Jest の設定ファイル
│── tsconfig.json      # TypeScript の設定
│── package.json       # npm スクリプト & 依存関係
│── biome.json         # Biome の設定
│── next.config.js     # Next.js の設定
└── README.md          # プロジェクト概要
````

状態管理ライブラリを追加予定。