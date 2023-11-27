import React from 'react'
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../store';

interface StyledLinkProps {
    $mobile?: boolean;
  }

const StyledLink = styled.span<StyledLinkProps>`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: #0C2577;
    text-decoration: none;
    @media (max-width: 1200px) {
      display: flex; /* Default display for larger screens */
  
      ${(props) =>
        props.$mobile &&
        css`
          display: none; /* Hide for mobile screens if $mobile prop is provided */
        `}
    }
  `;

  const PopUpTrigger = styled.button`
  display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: #0C2577;
    text-decoration: none;
    &:hover {
        color: black;
        cursor: pointer;
    }
  `;

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
    z-index: 5;

    /* Add arrowhead using ::before pseudo-element */
    &::before {
      content: '';
      position: absolute;
      top: -14px; /* Adjust this value based on your design */
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px; /* Adjust the size of the arrowhead */
      border-style: solid;
      border-color: transparent transparent rgb(255, 255, 255) transparent; /* Adjust the color */
    }
    @media (max-width: 1100px) {
      transform: ${props => `translate3d(-40px, ${`${props.$depth}px` || '0px'}, 0px)`};
    }
    @media (max-width: 900px) {
      transform: ${props => `translate3d(-40px, ${props.$depth ? `${props.$depth - 20}px` : '0px'}, 0px)`};
    }
`;

  const PopUpSpan = styled.span`
      padding: 16px;
      &:hover {
        color: black;
        cursor: pointer;
        background-color: rgb(244, 244, 237);
      }
  `;

  const StyledSvg = styled.svg`
    max-width: 2em;
    max-height: 2em;
    @media (max-width: 1100px){
      display: none;
    }
  `;

  const UserInitial = styled.span`
      background-color: white;
      width: 1.7em;
      height: 2rem;
      border-radius: 999px;
      color: rgb(167, 179, 211);
      display: flex;
      justify-content: center;
      align-items: center;
  `;

  type Props = {
    title: string; 
    links: string[];
    svg: string;
    depth: number;
    isClicked: boolean;
    onClick: () => void;
    length?: string;
  }

  const NavLink: React.FC<Props> = ({ title, links, svg, depth, isClicked, onClick, length }) => {
    const userName = useSelector((state: RootState) => state.jobs.app.username)
    let path;
  
    switch (svg) {
      case 'suitcase':
        path = (
          <path
            fill="currentColor"
            d="M6.958 5.458V4.083c0-.444.153-.819.459-1.125A1.53 1.53 0 018.542 2.5h2.916c.445 0 .82.153 1.125.458.306.306.459.681.459 1.125v1.375h3.291c.445 0 .82.153 1.125.459.306.305.459.68.459 1.125V15.5c0 .445-.153.82-.459 1.125a1.53 1.53 0 01-1.125.458H3.667a1.53 1.53 0 01-1.125-.458 1.528 1.528 0 01-.459-1.125V7.042c0-.445.153-.82.459-1.125.305-.306.68-.459 1.125-.459h3.291zm1.334 0h3.416V4.083c0-.055-.028-.11-.083-.166-.055-.056-.111-.084-.167-.084H8.542c-.056 0-.112.028-.167.084-.055.055-.083.11-.083.166v1.375zm8.291 6.896h-4.416v.708a.76.76 0 01-.24.553.782.782 0 01-.573.239H8.646a.782.782 0 01-.573-.239.76.76 0 01-.24-.553v-.708H3.417V15.5c0 .055.028.111.083.167.055.055.111.083.167.083h12.666c.056 0 .112-.028.167-.083.055-.056.083-.112.083-.167v-3.146zm-7.416.167h1.666v-1.667H9.167v1.667zm-5.75-1.5h4.416v-.709c0-.208.08-.392.24-.552a.78.78 0 01.573-.239h2.708c.223 0 .414.08.573.239.16.16.24.344.24.552v.709h4.416V7.042c0-.056-.028-.112-.083-.167-.055-.055-.111-.083-.167-.083H3.667c-.056 0-.112.028-.167.083-.055.055-.083.111-.083.167v3.979z"
          ></path>
        );
        break;
      case 'heart':
        path = (
            <path 
                fill="currentColor" 
                d="M8.938 15.979l-1.042-.958c-1.57-1.403-2.93-2.75-4.084-4.042-1.153-1.291-1.729-2.68-1.729-4.167 0-1.18.403-2.176 1.209-2.989.805-.813 1.805-1.219 3-1.219.68 0 1.343.156 1.989.469C8.927 3.386 9.5 3.861 10 4.5c.486-.639 1.052-1.114 1.698-1.427a4.52 4.52 0 011.99-.469c1.194 0 2.197.406 3.01 1.219.813.813 1.219 1.809 1.219 2.989 0 1.5-.6 2.906-1.802 4.219a66.748 66.748 0 01-4.198 4.157l-.855.77a1.49 1.49 0 01-1.062.407 1.677 1.677 0 01-1.062-.386zm.416-10.187c-.277-.514-.697-.952-1.26-1.313a3.281 3.281 0 00-1.802-.541c-.833 0-1.521.27-2.063.812-.541.541-.812 1.229-.812 2.062 0 .667.212 1.358.635 2.073.424.715.959 1.424 1.604 2.125.646.701 1.34 1.385 2.084 2.052.743.667 1.44 1.306 2.093 1.917a.226.226 0 00.167.063c.07 0 .125-.021.167-.063.639-.583 1.333-1.215 2.083-1.896.75-.68 1.444-1.378 2.083-2.093a14.628 14.628 0 001.605-2.136c.43-.708.645-1.389.645-2.042 0-.833-.274-1.52-.823-2.062-.548-.541-1.239-.812-2.072-.812-.64 0-1.23.18-1.771.541a3.87 3.87 0 00-1.25 1.313.801.801 0 01-.292.271.765.765 0 01-.375.104.732.732 0 01-.354-.104.791.791 0 01-.292-.271z"
            ></path>
        );
        break;
      case 'book':
        path = (
          <path 
            fill="currentColor" 
            d="M5.458 13.271c.68 0 1.34.076 1.979.229a9.12 9.12 0 011.896.688V6.146a6.717 6.717 0 00-1.854-.813 7.695 7.695 0 00-2.021-.271c-.486 0-.948.035-1.385.105-.437.07-.878.18-1.323.333a.322.322 0 00-.125.104.224.224 0 00-.042.125v7.75c0 .083.028.142.084.177a.16.16 0 00.166.011 8.657 8.657 0 012.625-.396zm5.209.917a9.126 9.126 0 011.895-.688 8.403 8.403 0 011.959-.229c.5 0 .962.035 1.385.104.424.07.844.174 1.261.313a.16.16 0 00.166-.011c.056-.035.084-.094.084-.177V5.792a.221.221 0 00-.042-.125.319.319 0 00-.125-.105 9.533 9.533 0 00-1.344-.374 7.123 7.123 0 00-1.385-.126 7.74 7.74 0 00-2.011.271 6.391 6.391 0 00-1.843.813v8.042zM10 15.938a.846.846 0 01-.271-.042 1.07 1.07 0 01-.25-.125 8.991 8.991 0 00-1.927-.854 7.032 7.032 0 00-2.094-.313 5.93 5.93 0 00-1.52.198c-.5.132-.986.309-1.459.531-.278.14-.552.119-.823-.062a.854.854 0 01-.406-.75V5.396c0-.18.045-.344.135-.49a.812.812 0 01.386-.323 7.47 7.47 0 011.791-.645 8.692 8.692 0 014.25.114A8.525 8.525 0 0110 5a9.017 9.017 0 012.177-.948 8.522 8.522 0 014.24-.104 8.954 8.954 0 011.812.635c.167.07.295.178.386.323.09.146.135.31.135.49v9.125a.818.818 0 01-.417.75.89.89 0 01-.875.041 8.104 8.104 0 00-1.437-.52 5.984 5.984 0 00-1.5-.188c-.709 0-1.4.104-2.073.313a8.991 8.991 0 00-1.927.854 1.07 1.07 0 01-.25.125.846.846 0 01-.271.042z"
          ></path>
        );
        break;
      case 'person':
        path = (
          <path 
            fill="currentColor" 
            d="M9.17 9.753a2.793 2.793 0 01-2.063-.865c-.57-.576-.854-1.26-.854-2.052 0-.805.285-1.493.854-2.062A2.81 2.81 0 019.17 3.92a2.81 2.81 0 012.062.854c.57.57.854 1.257.854 2.062 0 .792-.285 1.476-.854 2.052a2.792 2.792 0 01-2.062.865zm0-1.333a1.53 1.53 0 001.125-.459 1.53 1.53 0 00.458-1.125c0-.444-.153-.819-.458-1.125a1.531 1.531 0 00-1.125-.458c-.445 0-.82.153-1.125.458a1.53 1.53 0 00-.46 1.125c0 .445.154.82.46 1.125.305.306.68.459 1.125.459zm8.437 10.062l-2-2c-.277.18-.572.32-.885.417a3.242 3.242 0 01-.97.146c-.916 0-1.693-.32-2.332-.959-.64-.639-.96-1.416-.96-2.333 0-.917.32-1.694.96-2.333.639-.64 1.416-.959 2.333-.959.917 0 1.694.32 2.333.959.64.639.959 1.416.959 2.333 0 .333-.049.656-.146.969a3.544 3.544 0 01-.417.885l2 2a.611.611 0 01.188.448.545.545 0 01-.188.427.546.546 0 01-.427.188.612.612 0 01-.448-.188zm-3.854-2.771c.57 0 1.038-.184 1.406-.552.368-.368.552-.837.552-1.406 0-.57-.184-1.038-.552-1.406-.368-.368-.837-.552-1.406-.552-.57 0-1.038.184-1.406.552-.368.368-.552.837-.552 1.406 0 .57.184 1.038.552 1.406.368.368.837.552 1.406.552zm-4.458.375H4.274c-.375 0-.695-.132-.96-.395a1.284 1.284 0 01-.394-.938v-.5c0-.417.108-.799.323-1.146a2.18 2.18 0 01.906-.812c.653-.32 1.423-.601 2.312-.844.89-.243 1.883-.358 2.98-.344a3.374 3.374 0 00-.323.656c-.09.243-.164.476-.22.698-.916.028-1.718.143-2.405.344-.688.201-1.247.42-1.678.656a1.01 1.01 0 00-.416.334.78.78 0 00-.146.458v.5h4.542c.055.222.128.455.218.698.09.243.185.454.282.635z"
          ></path>
        );
        break;
      default:
        path = null;
    }
  
    return (
      <StyledLink onClick={onClick}>
        {path === null ? <UserInitial>{userName[0]}</UserInitial> : ''}
        <PopUpTrigger>
        
          <StyledSvg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width={path !== null ? "100%" : "0%"}
            height="100%"
            fill="none"
            viewBox="0 0 20 20"
            aria-labelledby="StudyOwlIcon-1174"
          >
            <title className="NavSVG"></title>
            {path !== null ? path : ''}
          </StyledSvg>
          {title}
        </PopUpTrigger>
        <PopUp $depth={depth} $isClicked={isClicked} $hasLinks={links.length > 0} $length={length}>
          {links.map((l, index) => (
            <PopUpSpan key={index}>{l}</PopUpSpan>
          ))}
        </PopUp>
      </StyledLink>
    );
  };

export default NavLink
