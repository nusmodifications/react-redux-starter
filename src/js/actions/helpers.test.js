import type { FSA } from 'types/redux';
import * as actions from 'actions/helpers';

describe('helpers actions', () => {
  describe('resetRequestState', () => {
    it('should return an action', () => {
      const payload: Array<any> = [];
      const expectedAction: FSA = {
        type: actions.RESET_REQUEST_STATE,
        payload,
      };
      const action: FSA = actions.resetRequestState(payload);
      expect(action).toEqual(expectedAction);
    });

    it('should convert an element into an array', () => {
      const payload: string = 'TEST_ACTION';
      const expectedAction: FSA = {
        type: actions.RESET_REQUEST_STATE,
        payload: [payload],
      };
      const action: FSA = actions.resetRequestState(payload);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('resetErrorState', () => {
    it('should return an action', () => {
      const payload: Array<any> = [];
      const expectedAction: FSA = {
        type: actions.RESET_ERROR_STATE,
        payload,
      };
      const action: FSA = actions.resetErrorState(payload);
      expect(action).toEqual(expectedAction);
    });

    it('should convert an element into an array', () => {
      const payload: string = 'TEST_ACTION';
      const expectedAction: FSA = {
        type: actions.RESET_ERROR_STATE,
        payload: [payload],
      };
      const action: FSA = actions.resetErrorState(payload);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('resetAllState', () => {
    it('should return an action', () => {
      const expectedAction: FSA = {
        type: actions.RESET_ALL_STATE,
      };
      const action: FSA = actions.resetAllState();
      expect(action).toEqual(expectedAction);
    });
  });
});
