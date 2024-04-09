import { runSaga } from 'redux-saga';
import { fetchPostsSaga } from '../postSagas';
import { ActionTypes } from '../../actions/postActions'
import * as api from '../../../utils/api'

// Mock API
jest.mock('../../../utils/api', () => ({
    fetchPosts: jest.fn(() => Promise.resolve([{ id: 1, title: 'Test Post' }])),
  }));
  
  describe('fetchPostsSaga', () => {
    it('should fetch posts and dispatch FETCH_POSTS_SUCCESS', async () => {
      // Arrange
      const dispatchedActions: any[] = [];
      const mockStore = {
        getState: () => ({}), 
        dispatch: (action: any) => dispatchedActions.push(action),
      };
  
      // Act.
      await runSaga(mockStore, fetchPostsSaga as any).toPromise();
  
      // Assert
      expect(dispatchedActions).toContainEqual({
        type: ActionTypes.FETCH_POSTS_SUCCESS,
        payload: [{ id: 1, title: 'Test Post' }],
      });
  
      // clean // ask scube about automatic mock resetting
      (api.fetchPosts as jest.MockedFunction<typeof api.fetchPosts>).mockClear();
    });
  
  })