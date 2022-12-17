import styled from 'styled-components';
import { FlexCenter } from '../../styles/globalStyles';
import { MEDIA_SIZE_ADAPT } from '../../constants';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${({ theme }) => `0px 2px 11px ${theme.colors.shadow}`};
    color: ${({ theme }) => theme.colors.text};
    font-family: cursive;
`;

export const Component = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.main};   
    :first-child {
        border-bottom: 1px solid;
    }
`;

export const Label = styled(FlexCenter)`
    height: 50px;
    max-width: 500px;
    width: 100%;
    :not(:first-child) {
        border-left: 1px solid;
    }
    @media screen and (max-width: ${MEDIA_SIZE_ADAPT}px) {
        padding: 0 10px;
        font-size: 12px;
    }
`;