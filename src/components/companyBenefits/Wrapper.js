import styled from "styled-components";
import RowWrapper from "../../shared/Rowrapper";

const Wrapper = styled(RowWrapper)`
  padding: 0 30px;
  margin: 40px 0;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 1rem;

  & > div {
    display: flex;
    align-items: start;
    gap: 20px;
    flex: 1;

    @media (max-width: 992px) {
      flex-basis: 45%;
    }
  }

  #img1 {
    transform: scaleX(-1);
  }

  .title {
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }

  .desc {
    color: ${({ theme }) => theme.title};
    filter: brightness(0.5);
  }
`;

export default Wrapper;
