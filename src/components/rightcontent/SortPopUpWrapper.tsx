import React from 'react'
import styled from 'styled-components';
import { applyFilter, setSort } from '../../store/jobsSlice';
import ArrowWrapper from './ArrowWrapper';
import { useDispatch } from 'react-redux';

interface PopUpProps {
    $depth?: number;
    $length?: string;
    $isClicked: boolean;
    $hasLinks: boolean;
  }

const PopUp = styled.div<PopUpProps>`
    position: absolute;
    transform: ${props => `translate3d(${props.$length || '0px'}, ${`${props.$depth}px` || '0px'}, 0px)`};
    display: ${props => props.$isClicked && props.$hasLinks ? 'flex' : 'none'};
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    outline: rgb(207, 214, 231) solid 1px;
    border-radius: 16px;
    width: max-content;
    padding: 16px 0;
`;

  const PopUpSpan = styled.span`
      padding: 16px;
      &:hover {
        color: black;
        cursor: pointer;
        background-color: rgb(244, 244, 237);
      }
  `;

interface Props {
    isActive: boolean;
    setSorting: React.Dispatch<React.SetStateAction<string>>;
}

const SortPopUpWrapper: React.FC<Props> = ({ isActive, setSorting }) => {
    const links: string[] = ['Datum', 'Relevanz'];
    const dispatch = useDispatch();

  return (
    <PopUp $length={'-6px'} $depth={107} $hasLinks={true} $isClicked={isActive}>
    <ArrowWrapper isActive={isActive} />
    {links.map((l, index) => (
        <PopUpSpan key={index} onClick={() => {
        setSorting(l);
        dispatch(setSort(l));
        dispatch(applyFilter());
        }}>{l}</PopUpSpan>
    ))}
    </PopUp>
)
}

export default SortPopUpWrapper
