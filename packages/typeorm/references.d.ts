/// <reference path="../../references.d.ts" />

declare module globalThis {
	function require(moduleName: string): any;
	namespace require {
		function resolve(moduleName: string): string;
	}
}
