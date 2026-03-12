// 開発環境と本番環境を自動判定
const isDevelopment = import.meta.env.DEV;

export const config = {
  // GitHub Pagesのベースパス
  basePath: isDevelopment ? '' : '/nttft_mock_app_images',
  
  // 画像のベースURL
  imageBaseUrl: isDevelopment 
    ? '' 
    : 'https://pom-sk.github.io/nttft_mock_app_images',
};

// 画像URLを取得するヘルパー関数
export const getImageUrl = (path: string) => {
  if (isDevelopment) {
    return path;
  }
  return `${config.imageBaseUrl}${path}`;
};
