import { defineConfig } from 'vitest/config';


process.env.NODE_ENV = 'development';

const configuration: { include: string[]; setupFiles?: string[] } = {
	// Regex to match files that have '.spec.' in their name and are under the '__tests__' directory
	include: ['__tests__/**/*.spec.*'],
	// setupFiles: ['__tests__/setup/*.ts']
};

export default defineConfig({ test: configuration });
