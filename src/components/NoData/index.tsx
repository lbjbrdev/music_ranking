import * as S from './styles';

import NoDataImage from '../../assets/images/noData.svg';

export function NoData() {
    return (
        <S.NoDataContainer>
            <img src={NoDataImage} width={720} />

            <S.NoDataMessage>
                Infelizmente nao encontramos nenhum resultado para a sua pesquisa!
            </S.NoDataMessage>
        </S.NoDataContainer>
    );
}