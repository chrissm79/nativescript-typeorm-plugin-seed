import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTest } from '@demo/shared';
import {} from '@chris7519/test';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTest {}
