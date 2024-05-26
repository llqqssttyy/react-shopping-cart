import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Layout from '../../layout';
import BlankCart from '../../components/BlankCart';
import CartList from '../../components/CartList';
import CheckoutSummary from '../../components/CheckoutSummary';
import Header from '../../components/Header';
import { HomeButton } from '../../components/Header/HeaderButton';
import BottomButton from '../../components/common/BottomButton';
import RecoilSuspense from '../../components/common/RecoilSuspense';
import Fallback from '../../components/common/Fallback';
import LoadingSpinner from '../../components/common/LoadingSpinner';

import * as S from './styles';
import * as C from '../../components/commonStyles';

import {
  cartListSelector,
  shippingFeeSelector,
  totalPriceSelector,
} from '../../recoil';

export default function CartPage() {
  const cartList = useRecoilValueLoadable(cartListSelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const shippingFee = useRecoilValue(shippingFeeSelector);
  const navigate = useNavigate();

  const moveToConfirmPage = async () => {
    navigate('/confirm');
  };

  return (
    <RecoilSuspense
      loadable={cartList}
      fallback={
        <Fallback spinner={<LoadingSpinner />} message="로딩 중입니다..." />
      }
    >
      <Layout
        header={<Header homeButton={<HomeButton />} />}
        bottom={
          <BottomButton
            onClick={moveToConfirmPage}
            active={cartList.contents.length !== 0}
          >
            주문 확인
          </BottomButton>
        }
      >
        {cartList.contents.length !== 0 ? (
          <S.Wrapper>
            <S.CartHeaderContainer>
              <C.Title>장바구니</C.Title>
              <C.Description>
                현재 {cartList.contents.length}종류의 아이템이 담겨져있습니다.
              </C.Description>
            </S.CartHeaderContainer>

            <S.CartListWrapper>
              <CartList items={cartList.contents} />
            </S.CartListWrapper>
            <CheckoutSummary
              totalPrice={totalPrice}
              shippingFee={shippingFee}
            />
          </S.Wrapper>
        ) : (
          <BlankCart />
        )}
      </Layout>
    </RecoilSuspense>
  );
}
