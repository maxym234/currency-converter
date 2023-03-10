import styled from 'styled-components';
import { FlexCenter } from '../../styles/globalStyles';
import { MEDIA_SIZE_ADAPT } from '../../constants';

export const Wrap = styled(FlexCenter)`
    margin-top: 12px;
    min-height: 600px;
    @media screen and (max-width: ${MEDIA_SIZE_ADAPT}px) {
        padding: 0 20px;
        min-height: 450px;
    }
`;

export const Container = styled(FlexCenter)`
    width: 100%;
    max-width:  500px;
    min-height: 300px;
    height: 100%;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.additional};
    box-shadow: ${({ theme }) => `0px 2px 11px ${theme.colors.shadow}`};
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    font-size: 31px;
    color: ${({ theme }) => theme.colors.main};
    font-family: sans-serif;
    @media screen and (max-width: ${MEDIA_SIZE_ADAPT}px) {
        font-size: 24px;
    }
`;

export const LogoSite = styled.img`
    width: 20%;
    border-radius: 50%; 
`;

export const SubContainer = styled(FlexCenter)`
    width: 100%;
    min-height: 100px;
    height: 100%;
    justify-content: space-around;
`;

export const ErrorText = styled.span`
    color: red;
    margin-bottom: 10px;
    @media screen and (max-width: ${MEDIA_SIZE_ADAPT}px) {
        font-size: 9px;
    }
`;

