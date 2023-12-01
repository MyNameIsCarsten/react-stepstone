import React from 'react'
import styled from 'styled-components';

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -1em;
`;

const TimeWrapper = styled.p`
    color: rgb(37, 65, 141);
`;

const StyledSvgBig= styled.svg`
    max-width: 2em;
    max-height: 2em;
    color: #0099B0;
    &:hover {
        cursor: pointer;
    }
`;

type Props = {
    date: string;
    isLiked: boolean;
    clickLike: () => void
}

const BottomCardWrapper: React.FC<Props>  = ({date, isLiked, clickLike}) => {

    // Assuming your date is stored in an object like this
    const dateObject: { date: Date } = { date: new Date(date) };

    // Convert the date string to a JavaScript Date object
    const currentDate: Date = new Date();
    const givenDate: Date = new Date(dateObject.date);

    // Calculate the time difference in milliseconds
    const timeDifference: number = currentDate.getTime() - givenDate.getTime();

    // Calculate the elapsed hours and days
    const elapsedHours = Math.floor(timeDifference / (1000 * 60 * 60)) * -1;
    const elapsedDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) * -1;

    const timeMetricHours = elapsedHours === 1 ? 'Stunde' : 'Stunden';
    const timeMetricDays = elapsedDays === 1 ? 'Tag' : 'Tagen';
    const time = elapsedHours >= 24 ? `${elapsedDays} ${timeMetricDays}` : `${elapsedHours} ${timeMetricHours}`;

  return (
    <BottomWrapper>
        <TimeWrapper>vor {time}</TimeWrapper>
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
  )
}

export default BottomCardWrapper
