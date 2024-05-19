import { renderHook, waitFor } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { cartListState } from './../src/recoil/selectors';
import cartListMockData from '../src/mocks/cartListMockData';

describe('selector 테스트', () => {
  beforeEach(() => {});

  describe('cartListState 테스트', () => {
    it('장바구니 데이터가 정상적으로 저장된다.', async () => {
      const { result } = renderHook(() => useRecoilValue(cartListState), {
        wrapper: RecoilRoot,
      });

      await waitFor(() => {
        expect(result.current).toEqual(cartListMockData.content);
      });
    });
  });
});
