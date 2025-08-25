import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // 1) Переключаем CSS-модули из pure в local
    config.module.rules.forEach((rule) => {
      if (Array.isArray(rule.oneOf)) {
        rule.oneOf.forEach((r) => {
          if (r.use && Array.isArray(r.use)) {
            r.use.forEach((u) => {
              if (
                u.loader &&
                typeof u.loader === 'string' &&
                u.loader.includes('css-loader') &&
                u.options &&
                u.options.modules
              ) {
                u.options.modules.mode = 'local';
              }
            });
          }
        });
      }
    });

    // 2) Ваш SVG-лоадер
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // 3) Настройка псевдонимов из tsconfig.json
    if (!config.resolve.alias) config.resolve.alias = {};
    const aliases = {
      '@components': 'src/components',
      '@pages': 'src/pages',
      '@utils': 'src/utils',
      '@styles': 'src/styles',
      '@public': 'public',
      '@app': 'src/app',
      '@assets': 'src/assets',
    };
    Object.entries(aliases).forEach(([alias, relativePath]) => {
      config.resolve.alias[alias] = path.resolve(process.cwd(), relativePath);
    });

    return config;
  },
};

export default nextConfig;
