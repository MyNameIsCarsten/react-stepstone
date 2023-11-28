import React from 'react'
import styled from 'styled-components';
import { StyledSvgBasic } from '../../styles/CommonStyles';

const SvgContentWrapper = styled.div`
    display:flex;
    gap: 5px;
`;

type Props = {
    cities: string[];
}

const CitiesCardWrapper: React.FC<Props>  = ({cities}) => {
  return (
    <SvgContentWrapper>
        <StyledSvgBasic data-genesis-element="MapMarkerIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M9.998 9.833c.417 0 .77-.146 1.062-.437.292-.292.438-.646.438-1.063 0-.417-.146-.77-.438-1.062a1.444 1.444 0 0 0-1.062-.438c-.417 0-.77.146-1.062.438a1.444 1.444 0 0 0-.438 1.062c0 .417.146.771.438 1.063.291.291.645.437 1.062.437Zm0 6.542c1.708-1.514 2.99-2.955 3.844-4.323.854-1.368 1.281-2.552 1.281-3.552 0-1.583-.493-2.861-1.479-3.833-.986-.973-2.201-1.459-3.646-1.459-1.445 0-2.66.486-3.646 1.459-.986.972-1.479 2.25-1.479 3.833 0 1 .427 2.184 1.281 3.552.855 1.368 2.136 2.809 3.844 4.323Zm0 1.458a.967.967 0 0 1-.604-.187c-1.972-1.805-3.44-3.462-4.406-4.969C4.023 11.17 3.54 9.778 3.54 8.5c0-2.028.646-3.639 1.937-4.833 1.292-1.195 2.799-1.792 4.521-1.792s3.229.597 4.521 1.792c1.291 1.194 1.937 2.805 1.937 4.833 0 1.278-.483 2.67-1.448 4.177-.965 1.507-2.434 3.164-4.406 4.969a.732.732 0 0 1-.281.146 1.266 1.266 0 0 1-.323.041Z"></path></StyledSvgBasic>
        <span>{cities.join(', ')}</span>
    </SvgContentWrapper>
  )
}

export default CitiesCardWrapper
