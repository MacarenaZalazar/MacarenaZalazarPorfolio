import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styleUtils';
import {VscTerminalCmd} from 'react-icons/vsc'

const H1 = styled.h1 `
padding: 3rem;
font-size: 80px;
animation: ${colors} 3s infinite alternate;
`

const Icon = () => <H1 className='icon'><VscTerminalCmd/> </H1>


export default Icon;