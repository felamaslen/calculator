import { testSaga } from 'redux-saga-test-plan';
import rootSaga from '../../src/sagas';
import historySaga from '../../src/sagas/history.saga';

describe('Root saga', () => {
    it('should fork all other sagas', () => {
        testSaga(rootSaga)
            .next()
            .fork(historySaga)
            .next()
            .isDone();
    });
});

