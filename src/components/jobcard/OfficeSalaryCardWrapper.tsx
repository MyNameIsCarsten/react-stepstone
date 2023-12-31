import React from 'react'
import styled from 'styled-components';
import { StyledSvgBasic } from '../../styles/CommonStyles';

const SvgContentWrapper = styled.div`
    display:flex;
    gap: 5px;
`;

type Props = {
    homeOffice: string;
    minSalary: number;
    maxSalary: number;
}

const OfficeSalaryCardWrapper: React.FC<Props>  = ({homeOffice, minSalary, maxSalary}) => {
  return (
    <SvgContentWrapper data-testid='officeSalaryWrapper'>
        <StyledSvgBasic data-genesis-element="HomeofficeIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M2.417 17.083V8.208L8 4l3.271 2.479a2.035 2.035 0 0 0-.427.313c-.132.125-.26.263-.386.416L8 5.375 3.5 8.75V16h3.438v1.083H2.417Zm6.291 0v-1.271c0-.222.059-.427.177-.614s.274-.344.469-.469a9.306 9.306 0 0 1 1.886-.833 6.623 6.623 0 0 1 2.01-.313c.68 0 1.35.1 2.01.302a8.38 8.38 0 0 1 1.886.844c.195.14.351.299.469.479s.177.382.177.604v1.271H8.708ZM9.75 16h7v-.229a7.075 7.075 0 0 0-1.677-.813 5.8 5.8 0 0 0-1.823-.291 5.8 5.8 0 0 0-1.823.291 7.075 7.075 0 0 0-1.677.813V16Zm3.5-3.875a2.21 2.21 0 0 1-1.625-.667 2.21 2.21 0 0 1-.667-1.625c0-.639.222-1.18.667-1.625a2.213 2.213 0 0 1 1.625-.666c.639 0 1.18.222 1.625.666.445.445.667.986.667 1.625a2.21 2.21 0 0 1-.667 1.625 2.211 2.211 0 0 1-1.625.667Zm0-1.083c.333 0 .618-.118.854-.354.236-.237.354-.522.354-.855 0-.333-.118-.618-.354-.854a1.164 1.164 0 0 0-.854-.354c-.333 0-.618.118-.854.354s-.354.52-.354.854c0 .333.118.618.354.855.236.236.52.354.854.354Z"></path></StyledSvgBasic>
        <span>{homeOffice}</span>
        <StyledSvgBasic data-genesis-element="GenericSalaryIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M11.458 10.417c-.541 0-.996-.184-1.364-.552A1.856 1.856 0 0 1 9.542 8.5c0-.528.187-.98.562-1.354a1.846 1.846 0 0 1 1.354-.563c.542 0 .997.188 1.365.563.368.375.552.833.552 1.375 0 .527-.188.975-.563 1.344a1.862 1.862 0 0 1-1.354.552ZM6.208 13c-.417 0-.785-.16-1.104-.479-.32-.32-.479-.687-.479-1.104V5.438c0-.417.16-.786.479-1.105.32-.32.687-.479 1.104-.479h10.667c.417 0 .785.16 1.104.479.32.32.479.688.479 1.105v5.979c0 .417-.16.785-.479 1.104-.32.32-.687.479-1.104.479H6.208Zm1.25-1.333h8.167c0-.417.146-.771.437-1.063a1.45 1.45 0 0 1 1.063-.437V6.688c-.417 0-.771-.15-1.063-.448a1.458 1.458 0 0 1-.437-1.052H7.458c0 .416-.146.77-.437 1.062a1.447 1.447 0 0 1-1.063.438v3.479c.417 0 .771.146 1.063.437.291.292.437.646.437 1.063Zm-4.333 4.416c-.43 0-.802-.156-1.115-.468a1.525 1.525 0 0 1-.468-1.115V7c0-.18.066-.337.198-.469a.64.64 0 0 1 .468-.198c.18 0 .337.066.469.198A.641.641 0 0 1 2.875 7v7.5c0 .07.028.128.083.177a.256.256 0 0 0 .167.073h12.187c.18 0 .337.07.469.208a.638.638 0 0 1 0 .927.641.641 0 0 1-.469.198H3.125Zm3.083-4.416h-.25V5.188h.25a.243.243 0 0 0-.177.072.242.242 0 0 0-.073.178v5.979c0 .07.024.128.073.177a.24.24 0 0 0 .177.073Z"></path></StyledSvgBasic>
        <span>{minSalary.toLocaleString()}€ - {maxSalary.toLocaleString()}€/Jahr (geschätz für Vollzeit)</span>
    </SvgContentWrapper>
  )
}

export default OfficeSalaryCardWrapper
