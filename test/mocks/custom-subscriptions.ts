// tslint:disable-next-line:no-reference

import { spy, stub } from "sinon";

export function createCustomSubscriptionsMock() {
	return {
		subscribeObjects: stub(),
		subscribeStates: stub(),
		resetMockHistory() {
			this.subscribeObjects.resetHistory();
			this.subscribeStates.resetHistory();
		},
		resetMockBehavior() {
			this.subscribeObjects.resetBehavior();
			this.subscribeStates.resetBehavior();
		},
		resetMock() {
			this.resetMockBehavior();
			this.resetMockHistory();
		},
	};
}
