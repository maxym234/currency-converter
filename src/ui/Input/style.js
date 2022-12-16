import styled from 'styled-components';
import Input from 'antd/lib/input-number';

export const InputStyled = styled(Input).attrs({ type: 'number' })`
    display: flex;
    width: 150px;
    border: 1px solid #d9d9d9 !important;
    box-shadow: none !important;
    .ant-input-number-handler-wrap {
        display: none;
    }
    :hover {
        border-color: #7e6d6d !important;
        box-shadow: 0px 2px 11px #0000003d !important;
    }
`;