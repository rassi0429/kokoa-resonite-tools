# Changelog

このファイルには、プロジェクトの重要な変更がすべて記録されています。

フォーマットは [Keep a Changelog](https://keepachangelog.com/ja/1.0.0/) に基づいており、
このプロジェクトは [Semantic Versioning](https://semver.org/lang/ja/) に準拠しています。

## [Unreleased]

## [v1.0.4] - 2025-06-14

### 修正
- **重要**: `format!`マクロによるバックスラッシュエスケープ問題を修正
- フォアグラウンドインストール時のコマンド実行エラーを解決
- DepotDownloaderパスの引用符処理を文字列連結で実装し直し
- コマンド実行前にDepotDownloaderの存在確認を追加
- 検索パスにプロジェクトルートを追加してパス検出を改善

### 改善
- より堅牢なコマンド文字列構築方式に変更
- エラーハンドリングの強化

## [v1.0.3] - 2025-06-14

### 修正
- **重要**: フォアグラウンドインストール時にCMDウィンドウが即座に閉じる問題を修正
- リリースビルドでも `run_interactive` でCMDウィンドウが継続表示されるよう改善
- DepotDownloaderウィンドウにタイトル「DepotDownloader」を設定
- インストール開始・完了メッセージの表示を追加
- `/c` から `/k` に変更してコマンド実行後もウィンドウを保持

### 改善
- フォアグラウンドインストール時のユーザー体験を大幅に向上
- インストール進行状況の視認性を改善

## [v1.0.2] - 2025-06-14

### 修正
- フォアグラウンドインストール時のCMDウィンドウ表示問題を部分的に修正

## [v1.0.1] - 2025-06-14

### 修正
- インストール中状態管理を追加
- UIの表示文言と引数のプレースホルダーを改善

## [v0.1.1] - 2025-06-14

### 修正
- **重要**: 実行ファイル名が `Kokoa Resonite Tools.exe`（スペース付き）であることを発見
- GitHub Actions でポータブル版作成時の正しい実行ファイル名を使用
- 検証ステップも正しいファイル名に更新

## [v0.1.0] - 2025-06-14

### 改善
- GitHub Actions のビルドプロセスを大幅に改善
- `CARGO_TARGET_DIR` を明示的に設定してビルド出力の一貫性を確保
- ビルド前後の詳細な検証ステップを追加

### デバッグ
- 実行ファイルの検証ステップを追加
- ビルド出力の詳細なログを提供

## [v0.0.9] - 2025-06-14

### 修正
- GitHub Actions でポータブル版実行ファイルの正しいパスを使用するよう修正
- 実行ファイルが `./target/release/` に生成されることを確認
- デバッグステップを削除してワークフローをクリーンアップ

### 改善
- ポータブル版のファイルサイズを表示
- WebView2Loader.dll の検索を改善
- エラーハンドリングを強化

## [v0.0.8] - 2025-06-13

### 改善
- GitHub Actions のデバッグ出力をさらに詳細化
- 作業ディレクトリとビルド成果物の場所を正確に特定するログを追加
- cargo build の成功確認とファイルサイズ出力を追加

## [v0.0.7] - 2025-06-13

### 追加
- GitHub Actions に target/release ディレクトリの内容をダンプするデバッグステップを追加
- ビルド成果物の詳細な情報を出力（ファイルサイズ、作成日時、権限など）

### デバッグ
- ポータブル版実行ファイルが見つからない問題を調査するためのログ出力を強化

## [v0.0.6] - 2025-06-13

### 修正
- GitHub Actions のビルド順序を修正
- フロントエンドビルドの重複を削除

## [v0.0.5] - 2025-06-13

### 改善
- GitHub Actions でポータブル版の作成プロセスを完全に再構築
- 直接 cargo build を使用して実行ファイルを生成
- WebView2Loader.dll を含むZIPファイルも作成
- ビルドプロセスのデバッグ情報を強化

### 修正
- フロントエンドのビルドを実行ファイルビルドの前に実行するよう修正
- `distDir` が存在しないエラーを解決

## [v0.0.4] - 2025-06-13

### 修正
- GitHub Actions で `--no-bundle --release` フラグを使用してポータブル版実行ファイルを確実に生成
- ビルドプロセスの信頼性をさらに向上

## [v0.0.3] - 2025-06-13

### 修正
- GitHub Actions ワークフローでポータブル版バイナリ作成を改善
- Tauri ビルドでの実行ファイル検出ロジックを強化
- ポータブル版リリースの信頼性を向上

## [v0.0.2] - 2025-06-13

### 追加
- GitHub Actionsによる自動リリースビルド
- タグ付け時のCLI・GUIの自動ビルドとリリース
- GUIポータブル版（シングルバイナリ）のリリース対応

### 変更
- カスタムタイトルバーの最大化ボタンを削除
- タイトルバーのダブルクリック最大化を無効化
- アプリケーション全体でテキスト選択をデフォルト無効化
- Tauriビルド設定の改善（アイコン設定、バージョン統一）

### 修正
- CustomTitlebarのテキスト部分でのウィンドウドラッグを有効化
- Tauriバンドル設定のアイコンエラーを修正

## [v0.0.1] - 2025-06-13

### 追加
- 初回リリース
- GUI版アプリケーション（Tauri + React）
- CLI版アプリケーション
- プロファイル管理システム
- Resoniteの自動インストール・更新機能
- MOD管理システム（ResoniteModLoader対応）
- Steam認証情報の保存機能
- 初回セットアップウィザード
- DepotDownloaderの自動ダウンロード
- 起動引数カスタマイズ機能
- yt-dlp管理機能
- バージョン監視システム
- 未管理MODの検出・管理機能

### 特徴
- **GUI版**: ユーザーフレンドリーなインターフェース
- **CLI版**: スクリプトや自動化に適したコマンドライン操作
- **プロファイル管理**: 複数の設定を簡単に切り替え
- **自動更新**: 最新のResoniteバージョンを自動検出
- **MOD対応**: ResoniteModLoaderと完全統合
- **セキュリティ**: Steam認証情報の安全な暗号化保存

### システム要件
- Windows 10/11 (x64)
- .NET 8.0 Runtime（DepotDownloader用）
- 十分なディスク容量（Resoniteインストール用）

### インストール方法
1. [Releases](https://github.com/kokoa-love/kokoa-resonite-tools/releases)から最新版をダウンロード
2. GUI版: `.msi`ファイルを実行してインストール
3. CLI版: `.exe`ファイルをダウンロードして任意の場所に配置
4. 初回起動時のセットアップウィザードに従って設定を完了

[Unreleased]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v1.0.4...HEAD
[v1.0.4]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v1.0.3...v1.0.4
[v1.0.3]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.1.1...v1.0.1
[v0.1.1]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.1.0...v0.1.1
[v0.1.0]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.9...v0.1.0
[v0.0.9]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.8...v0.0.9
[v0.0.8]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.7...v0.0.8
[v0.0.7]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.6...v0.0.7
[v0.0.6]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.5...v0.0.6
[v0.0.5]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.4...v0.0.5
[v0.0.4]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.3...v0.0.4
[v0.0.3]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.2...v0.0.3
[v0.0.2]: https://github.com/kokoa-love/kokoa-resonite-tools/compare/v0.0.1...v0.0.2
[v0.0.1]: https://github.com/kokoa-love/kokoa-resonite-tools/releases/tag/v0.0.1