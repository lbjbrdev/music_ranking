import * as S from './styles';

import Logo from '../../assets/images/logo.png';

export function Header() {
    return (
        <S.Container>
            <S.Image src={Logo} alt='Logo do app' />
        </S.Container>
    );
}