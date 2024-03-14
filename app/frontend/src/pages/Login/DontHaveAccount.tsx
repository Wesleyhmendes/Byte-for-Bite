import * as S from './Login.styles';

function DontHaveAccount() {
  return (
    <S.NoAccountDiv>
      <S.Phrase>Don't have an account? </S.Phrase>
      <S.Phrase>
        SignUp <S.PhraseLink to="/signup">here</S.PhraseLink>
      </S.Phrase>
    </S.NoAccountDiv>
  );
};

export default DontHaveAccount;