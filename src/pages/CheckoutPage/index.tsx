import { useRecoilValue } from 'recoil';

import Header from '../../components/Header';
import BottomButton from '../../components/common/BottomButton';
import Layout from '../../layout';

import {
  cartListNumberOfTypes,
  cartListTotalPrice,
  cartListTotalQuantity,
} from '../../recoil/selectors';

import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/Header/HeaderButton';
import * as C from '../commonStyles';
import * as S from './styles';

export default function ConfirmOrderPage() {
  // TODO: recoil selector가 아닌 history의 state로 전달해야 할까?
  // TODO: 실제로 확인 페이지는 서버에 전달된 정보와 같은 정보를 줘야 하지 않나?
  const totalPrice = useRecoilValue(cartListTotalPrice);
  const totalQuantity = useRecoilValue(cartListTotalQuantity);
  const numOfTypes = useRecoilValue(cartListNumberOfTypes);

  const navigate = useNavigate();

  return (
    <Layout
      header={<Header homeButton={<BackButton />} />}
      bottom={
        <BottomButton onClick={() => navigate('/')} active={true}>
          장바구니로 돌아가기
        </BottomButton>
      }
    >
      <S.Wrapper>
        <C.Title>결제 확인</C.Title>
        <S.OrderSummary>
          <p>{`총 ${numOfTypes}종류의 상품 ${totalQuantity}개를 주문했습니다.`}</p>
          <p>최종 결제 금액을 확인해 주세요.</p>
        </S.OrderSummary>

        <S.TotalPrice>
          <C.SubTitle>총 결제 금액</C.SubTitle>
          <C.Title>{`${totalPrice.toLocaleString()}원`}</C.Title>
        </S.TotalPrice>
      </S.Wrapper>
    </Layout>
  );
}