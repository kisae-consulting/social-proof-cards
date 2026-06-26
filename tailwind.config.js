/** @type {import('tailwindcss').Config} */
// content: 빌드 시 이 파일들을 스캔해 실제 사용된 클래스만 CSS로 생성(JIT).
// index.html(body의 bg-[#fafbfa] 등) + src/app.jsx 모두 포함해야 누락 없음.
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Noto Sans KR"', 'sans-serif'] },
      colors: {
        brand: {
          50:  '#edf7f1',
          100: '#d1ead9',
          200: '#a3d5b3',
          300: '#6dba87',
          400: '#3a9a5e',
          500: '#02451a',
          600: '#023d17',
          700: '#013413',
          800: '#012b10',
          900: '#01220d',
        },
      },
    },
  },
  plugins: [],
};
