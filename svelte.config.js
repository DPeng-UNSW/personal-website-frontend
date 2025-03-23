import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  compilerOptions: {
    // enable run-time checks for type errors
    dev: process.env.NODE_ENV === 'development'
  }
};