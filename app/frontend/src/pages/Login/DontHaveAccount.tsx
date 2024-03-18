import * as S from './Login.styles';

function DontHaveAccount() {
  return (
    <S.NoAccountDiv>
      <p>Don&apos;t have an account? </p>
      <p>
        SignUp
        {' '}
        <S.PhraseLink to="/signup">here</S.PhraseLink>
      </p>
    </S.NoAccountDiv>
  );
}

export default DontHaveAccount;
