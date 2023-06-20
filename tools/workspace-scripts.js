const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@chris7519/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @chris7519/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@chris7519': {
			// @chris7519/nativescript-downloader
			'nativescript-downloader': {
				build: {
					script: 'nx run nativescript-downloader:build.all',
					description: '@chris7519/nativescript-downloader: Build',
				},
			},
			// @chris7519/typeorm-compat
			'typeorm-compat': {
				build: {
					script: 'nx run typeorm-compat:build.all',
					description: '@chris7519/typeorm-compat: Build',
				},
			},
			// @chris7519/test
			test: {
				build: {
					script: 'nx run test:build.all',
					description: '@chris7519/test: Build',
				},
			},
			// @chris7519/typeorm
			typeorm: {
				build: {
					script: 'nx run typeorm:build.all',
					description: '@chris7519/typeorm: Build',
				},
			},
			// @chris7519/daniel
			daniel: {
				build: {
					script: 'nx run daniel:build.all',
					description: '@chris7519/daniel: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-downloader': {
				script: 'nx run nativescript-downloader:focus',
				description: 'Focus on @chris7519/nativescript-downloader',
			},
			'typeorm-compat': {
				script: 'nx run typeorm-compat:focus',
				description: 'Focus on @chris7519/typeorm-compat',
			},
			test: {
				script: 'nx run test:focus',
				description: 'Focus on @chris7519/test',
			},
			typeorm: {
				script: 'nx run typeorm:focus',
				description: 'Focus on @chris7519/typeorm',
			},
			daniel: {
				script: 'nx run daniel:focus',
				description: 'Focus on @chris7519/daniel',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
