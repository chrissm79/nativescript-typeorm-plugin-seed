import * as RootPath from 'app-root-path';

function join(...args) {
	return args.join('/');
}

const rootPath = {
	resolve(pathToModule) {
		return join(rootPath.path, pathToModule);
	},

	require(pathToModule) {
		return require(rootPath.resolve(pathToModule));
	},

	toString() {
		return rootPath.path;
	},

	setPath(explicitlySetPath) {
		(rootPath as any).path = explicitlySetPath;
	},

	path: '~',
} as typeof RootPath;

export default rootPath;
