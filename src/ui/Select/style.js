import styled from 'styled-components';
import Select from 'antd/lib/select';
import { MEDIA_SIZE_ADAPT } from '../../constants';

export const SelectStyled = styled(Select)`
    display: flex;
    width: 150px;
    .ant-select-selector {
        border: 1px solid #d9d9d9 !important;
        box-shadow: none !important;
    }
    :hover {
        .ant-select-selector {
            border-color: #7e6d6d !important;
            box-shadow: 0px 2px 11px #0000003d !important;
        }
    }    
    @media screen and (max-width: ${MEDIA_SIZE_ADAPT}px) {
        margin: 0 10px;
    }
`;