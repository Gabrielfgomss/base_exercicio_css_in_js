import styled from 'styled-components'

const CabecalhoContainer = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoContainer>
    <h1>EBAC Jobs</h1>
  </CabecalhoContainer>
)

export default Cabecalho
