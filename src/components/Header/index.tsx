import * as S from './styles';

import Logo from '../../assets/icons/logo.svg';

export function Header() {
    return (
        <S.Container>
            <S.Image src={Logo} alt='Logo do app' />
        </S.Container>
    );
}