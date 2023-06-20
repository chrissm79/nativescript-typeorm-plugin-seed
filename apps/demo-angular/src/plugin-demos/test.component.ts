import { Component, NgZone } from '@angular/core';
import { DemoSharedTest } from '@demo/shared';

@Component({
	selector: 'demo-test',
	templateUrl: 'test.component.html',
})
export class TestComponent {
	demoShared: DemoSharedTest;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedTest();
	}
}
