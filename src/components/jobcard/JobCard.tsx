import React, { useState } from 'react'
import styled from 'styled-components';
import logo1 from '../../companyLogo1.avif';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 2px solid #CFD6E7;
    border-radius: 16px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    color: rgb(12, 37, 119);
    margin-bottom: 16px;
    padding: 24px;
`;

const H2 = styled.h2`
  color: rgb(12, 37, 119);
  text-align: left;
  font-size: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 650px;
  line-height: 30px;
  @media (max-width: 1100px){
    width: 500px;
  }
  @media (max-width: 700px){
    width: 400px;
  }
  @media (max-width: 600px){
    width: 300px;
  }
  &:hover {
    cursor:pointer;
    text-decoration: underline;
    }

`;

const LogoWrapper = styled.img`
    width: 64px;
    height: 64px;
    border: 1px solid #CFD6E7;
    border-radius: 16px;
    &:hover {
        cursor:pointer;
        border: 1px solid rgb(0, 0, 238);
    }
    @media (max-width: 500px){
        margin: auto;
      }
    
`;

const StyledSvg = styled.svg`
    max-width: 1.5em;
    max-height: 1.5em;
    color: #F56363;
`;

const StyledSvgBig= styled.svg`
    max-width: 2em;
    max-height: 2em;
    color: #0099B0;
    &:hover {
        cursor: pointer;
    }
`;

const SvgContentWrapper = styled.div`
    display:flex;
    gap: 5px;
`;

const TitleWrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

const TopCardWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    @media (max-width: 500px){
        flex-direction: column-reverse;
      }
`;

const BadgeWrapper = styled.p`
    color: #0C2577;
    background-color: #E8ECF3;
    border-radius: 999px;
    width: fit-content;
    padding: 0 8px;
    font-size: 12px;
`;

const TimeWrapper = styled.p`
    color: rgb(37, 65, 141);
`;

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -1em;
`;

const JobCard: React.FC  = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const clickLike = () => {
        setIsLiked(!isLiked);
    };

  return (
    <CardWrapper>
        <TopCardWrapper>
            <TitleWrapper>
                <H2>IT Dozent / Trainer / Programmierer / Software-Entwickler / Developer (m/w/d) bundesweit</H2>
                <SvgContentWrapper>
                    <StyledSvg data-genesis-element="BriefcaseIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M6.958 5.458V4.083c0-.444.153-.819.459-1.125A1.53 1.53 0 0 1 8.542 2.5h2.916c.445 0 .82.153 1.125.458.306.306.459.681.459 1.125v1.375h3.291c.445 0 .82.153 1.125.459.306.305.459.68.459 1.125V15.5c0 .445-.153.82-.459 1.125a1.53 1.53 0 0 1-1.125.458H3.667a1.53 1.53 0 0 1-1.125-.458 1.528 1.528 0 0 1-.459-1.125V7.042c0-.445.153-.82.459-1.125.305-.306.68-.459 1.125-.459h3.291Zm1.334 0h3.416V4.083c0-.055-.028-.11-.083-.166-.055-.056-.111-.084-.167-.084H8.542c-.056 0-.112.028-.167.084-.055.055-.083.11-.083.166v1.375Zm8.291 6.896h-4.416v.708a.76.76 0 0 1-.24.553.782.782 0 0 1-.573.239H8.646a.782.782 0 0 1-.573-.239.76.76 0 0 1-.24-.553v-.708H3.417V15.5c0 .055.028.111.083.167.055.055.111.083.167.083h12.666c.056 0 .112-.028.167-.083.055-.056.083-.112.083-.167v-3.146Zm-7.416.167h1.666v-1.667H9.167v1.667Zm-5.75-1.5h4.416v-.709c0-.208.08-.392.24-.552a.78.78 0 0 1 .573-.239h2.708c.223 0 .414.08.573.239.16.16.24.344.24.552v.709h4.416V7.042c0-.056-.028-.112-.083-.167-.055-.055-.111-.083-.167-.083H3.667c-.056 0-.112.028-.167.083-.055.055-.083.111-.083.167v3.979Z"></path></StyledSvg>
                    <span>INTEW - Institut für technische Weiterbildung</span>
                </SvgContentWrapper>
            </TitleWrapper>
            <LogoWrapper src={logo1} alt="Logo" />
        </TopCardWrapper>
        <SvgContentWrapper>
            <StyledSvg data-genesis-element="MapMarkerIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M9.998 9.833c.417 0 .77-.146 1.062-.437.292-.292.438-.646.438-1.063 0-.417-.146-.77-.438-1.062a1.444 1.444 0 0 0-1.062-.438c-.417 0-.77.146-1.062.438a1.444 1.444 0 0 0-.438 1.062c0 .417.146.771.438 1.063.291.291.645.437 1.062.437Zm0 6.542c1.708-1.514 2.99-2.955 3.844-4.323.854-1.368 1.281-2.552 1.281-3.552 0-1.583-.493-2.861-1.479-3.833-.986-.973-2.201-1.459-3.646-1.459-1.445 0-2.66.486-3.646 1.459-.986.972-1.479 2.25-1.479 3.833 0 1 .427 2.184 1.281 3.552.855 1.368 2.136 2.809 3.844 4.323Zm0 1.458a.967.967 0 0 1-.604-.187c-1.972-1.805-3.44-3.462-4.406-4.969C4.023 11.17 3.54 9.778 3.54 8.5c0-2.028.646-3.639 1.937-4.833 1.292-1.195 2.799-1.792 4.521-1.792s3.229.597 4.521 1.792c1.291 1.194 1.937 2.805 1.937 4.833 0 1.278-.483 2.67-1.448 4.177-.965 1.507-2.434 3.164-4.406 4.969a.732.732 0 0 1-.281.146 1.266 1.266 0 0 1-.323.041Z"></path></StyledSvg>
            <span>Berlin Dresden Dortmund Düsseldorf Frankfurt Hamburg Hannover Kassel Köln München Nürnberg Stuttgart</span>
        </SvgContentWrapper>
        <SvgContentWrapper>
            <StyledSvg data-genesis-element="HomeofficeIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M2.417 17.083V8.208L8 4l3.271 2.479a2.035 2.035 0 0 0-.427.313c-.132.125-.26.263-.386.416L8 5.375 3.5 8.75V16h3.438v1.083H2.417Zm6.291 0v-1.271c0-.222.059-.427.177-.614s.274-.344.469-.469a9.306 9.306 0 0 1 1.886-.833 6.623 6.623 0 0 1 2.01-.313c.68 0 1.35.1 2.01.302a8.38 8.38 0 0 1 1.886.844c.195.14.351.299.469.479s.177.382.177.604v1.271H8.708ZM9.75 16h7v-.229a7.075 7.075 0 0 0-1.677-.813 5.8 5.8 0 0 0-1.823-.291 5.8 5.8 0 0 0-1.823.291 7.075 7.075 0 0 0-1.677.813V16Zm3.5-3.875a2.21 2.21 0 0 1-1.625-.667 2.21 2.21 0 0 1-.667-1.625c0-.639.222-1.18.667-1.625a2.213 2.213 0 0 1 1.625-.666c.639 0 1.18.222 1.625.666.445.445.667.986.667 1.625a2.21 2.21 0 0 1-.667 1.625 2.211 2.211 0 0 1-1.625.667Zm0-1.083c.333 0 .618-.118.854-.354.236-.237.354-.522.354-.855 0-.333-.118-.618-.354-.854a1.164 1.164 0 0 0-.854-.354c-.333 0-.618.118-.854.354s-.354.52-.354.854c0 .333.118.618.354.855.236.236.52.354.854.354Z"></path></StyledSvg>
            <span>Teilweise Home-Office</span>
            <StyledSvg data-genesis-element="GenericSalaryIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M11.458 10.417c-.541 0-.996-.184-1.364-.552A1.856 1.856 0 0 1 9.542 8.5c0-.528.187-.98.562-1.354a1.846 1.846 0 0 1 1.354-.563c.542 0 .997.188 1.365.563.368.375.552.833.552 1.375 0 .527-.188.975-.563 1.344a1.862 1.862 0 0 1-1.354.552ZM6.208 13c-.417 0-.785-.16-1.104-.479-.32-.32-.479-.687-.479-1.104V5.438c0-.417.16-.786.479-1.105.32-.32.687-.479 1.104-.479h10.667c.417 0 .785.16 1.104.479.32.32.479.688.479 1.105v5.979c0 .417-.16.785-.479 1.104-.32.32-.687.479-1.104.479H6.208Zm1.25-1.333h8.167c0-.417.146-.771.437-1.063a1.45 1.45 0 0 1 1.063-.437V6.688c-.417 0-.771-.15-1.063-.448a1.458 1.458 0 0 1-.437-1.052H7.458c0 .416-.146.77-.437 1.062a1.447 1.447 0 0 1-1.063.438v3.479c.417 0 .771.146 1.063.437.291.292.437.646.437 1.063Zm-4.333 4.416c-.43 0-.802-.156-1.115-.468a1.525 1.525 0 0 1-.468-1.115V7c0-.18.066-.337.198-.469a.64.64 0 0 1 .468-.198c.18 0 .337.066.469.198A.641.641 0 0 1 2.875 7v7.5c0 .07.028.128.083.177a.256.256 0 0 0 .167.073h12.187c.18 0 .337.07.469.208a.638.638 0 0 1 0 .927.641.641 0 0 1-.469.198H3.125Zm3.083-4.416h-.25V5.188h.25a.243.243 0 0 0-.177.072.242.242 0 0 0-.073.178v5.979c0 .07.024.128.073.177a.24.24 0 0 0 .177.073Z"></path></StyledSvg>
            <span>42.000 - 56.000€/Jahr (geschätz für Vollzeit)</span>
        </SvgContentWrapper>
        <BadgeWrapper>Schnelle Bewerbung</BadgeWrapper>
        <BottomWrapper>
            <TimeWrapper>vor 4 Stunden</TimeWrapper>
            {!isLiked ? 
            <StyledSvgBig 
                onClick={clickLike}
                data-genesis-element="HeartEmptyIcon" 
                aria-hidden="true" 
                role="presentation" 
                xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                fill="currentColor" 
                viewBox="0 0 20 20">
                <path 
                    fill="currentColor" 
                    d="m8.938 15.979-1.042-.958c-1.57-1.403-2.93-2.75-4.084-4.042-1.153-1.291-1.729-2.68-1.729-4.167 0-1.18.403-2.176 1.209-2.989.805-.813 1.805-1.219 3-1.219.68 0 1.343.156 1.989.469C8.927 3.386 9.5 3.861 10 4.5c.486-.639 1.052-1.114 1.698-1.427a4.52 4.52 0 0 1 1.99-.469c1.194 0 2.197.406 3.01 1.219.813.813 1.219 1.809 1.219 2.989 0 1.5-.6 2.906-1.802 4.219a66.748 66.748 0 0 1-4.198 4.157l-.855.77a1.49 1.49 0 0 1-1.062.407 1.677 1.677 0 0 1-1.062-.386Zm.416-10.187c-.277-.514-.697-.952-1.26-1.313a3.281 3.281 0 0 0-1.802-.541c-.833 0-1.521.27-2.063.812-.541.541-.812 1.229-.812 2.062 0 .667.212 1.358.635 2.073.424.715.959 1.424 1.604 2.125.646.701 1.34 1.385 2.084 2.052.743.667 1.44 1.306 2.093 1.917a.226.226 0 0 0 .167.063c.07 0 .125-.021.167-.063.639-.583 1.333-1.215 2.083-1.896.75-.68 1.444-1.378 2.083-2.093a14.628 14.628 0 0 0 1.605-2.136c.43-.708.645-1.389.645-2.042 0-.833-.274-1.52-.823-2.062-.548-.541-1.239-.812-2.072-.812-.64 0-1.23.18-1.771.541a3.87 3.87 0 0 0-1.25 1.313.801.801 0 0 1-.292.271.765.765 0 0 1-.375.104.732.732 0 0 1-.354-.104.791.791 0 0 1-.292-.271Z"
                ></path>
            </StyledSvgBig>
            :
            <StyledSvgBig 
                onClick={clickLike}
                data-genesis-element="HeartIcon" 
                aria-hidden="true" 
                role="presentation" 
                xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                fill="none" 
                viewBox="0 0 20 20">
                <path 
                    fill="currentColor" 
                    d="m8.938 15.979-1.042-.958c-1.57-1.403-2.93-2.75-4.084-4.042-1.153-1.291-1.729-2.68-1.729-4.167 0-1.18.403-2.176 1.209-2.989.805-.813 1.805-1.219 3-1.219.68 0 1.343.156 1.989.469C8.927 3.386 9.5 3.861 10 4.5c.486-.639 1.052-1.114 1.698-1.427a4.52 4.52 0 0 1 1.99-.469c1.194 0 2.197.406 3.01 1.219.813.813 1.219 1.809 1.219 2.989 0 1.5-.6 2.906-1.802 4.219a66.748 66.748 0 0 1-4.198 4.157l-.855.77a1.433 1.433 0 0 1-1.052.407 1.691 1.691 0 0 1-1.072-.386Z"
                ></path>
            </StyledSvgBig>
            }
        </BottomWrapper>
    </CardWrapper>
  )
}

export default JobCard
