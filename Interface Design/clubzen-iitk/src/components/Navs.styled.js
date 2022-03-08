import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
    margin: 0 15px;
    padding: 3px 20px;
    position: relative;
    text-decoration: navy;
    text-align: center;
    color: black;
    &.active {
        color: gray;
    }
`;
