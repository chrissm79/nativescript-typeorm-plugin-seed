import { NativescriptDownloaderCommon } from './common';
import { DownloaderBase, DownloadEventData, DownloadOptions, StatusCode } from './common';

export declare class NativescriptDownloader extends NativescriptDownloaderCommon {
	constructor();
	public static init(): void;
	public static setTimeout(timeout: number): void;
	createDownload(options: DownloadOptions): string;
	getStatus(id: string): StatusCode;
	start(id: string, progress?: Function): Promise<DownloadEventData>;
	resume(id: string): void;
	cancel(id: string): void;
	pause(id: string): void;
	getPath(id: string): string;
}

export { DownloadEventData, DownloadOptions, StatusCode, DownloadEventError, ProgressEventData } from './common';

export const PROGRESS_EVENT = 'progress';
export const STATUS_EVENT = 'status';
