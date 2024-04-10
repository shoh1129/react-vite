import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig(({command, mode, ssrBuild}) => {
//   if (command === 'serve') {
//     return {

//     }
//   } e
//   // plugins: [react()],
// })


export default defineConfig(({ command, mode, ssrBuild }) => {
  const options: UserConfig = {
    plugins: [react()],
  };
  if (mode === 'development') {
    // 개발 서버 설정
    options.mode = 'development';
  } else {
    options.mode = 'production';
  }
  return options;
})