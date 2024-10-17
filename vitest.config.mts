import {defineConfig, mergeConfig} from 'vitest/config'
import {UserConfig} from 'vitest/node';
import viteConfig from './vite.config.mts';

export default mergeConfig(viteConfig as UserConfig, defineConfig({
    test: {
        reporters: ['verbose'],
        globals: true,
        environment: 'jsdom',
        pool: 'forks',  // https://vitest.dev/config/#pool
    }
}))
