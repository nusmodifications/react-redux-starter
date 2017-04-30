import type { FSA } from 'types/redux';
import * as actions from 'actions/helpers';

describe('helpers actions', () => {
  describe('resetRequestState', () => {
    it('should return an action', () => {
      const payload: Array<any> = [];
      const action: FSA = actions.resetRequestState(payload);
      expect(action).toMatchSnapshot();
    });

    it('should convert an element into an array', () => {
      const payload: string = 'TEST_ACTION';
      const action: FSA = actions.resetRequestState(payload);
      expect(action).toMatchSnapshot();
    });
  });

  describe('resetErrorState', () => {
    it('should return an action', () => {
      const payload: Array<any> = [];
      const action: FSA = actions.resetErrorState(payload);
      expect(action).toMatchSnapshot();
    });

    it('should convert an element into an array', () => {
      const payload: string = 'TEST_ACTION';
      const action: FSA = actions.resetErrorState(payload);
      expect(action).toMatchSnapshot();
    });
  });

  describe('resetAllState', () => {
    it('should return an action', () => {
      const action: FSA = actions.resetAllState();
      expect(action).toMatchSnapshot();
    });
  });
});
