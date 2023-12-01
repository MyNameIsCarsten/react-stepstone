import React from 'react'
import styled from 'styled-components';

const SelectWrapper = styled.select`
    border: none;
    background-color: transparent;
    color: #0C2577;
    &:focus-visible {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`;

const OptionWrapper = styled.option`
    cursor: pointer;
`;

interface Props {
    searchDistance: number;
    setSearchDistance: React.Dispatch<React.SetStateAction<number>>;
}

const DistanceSelectWrapper: React.FC<Props> = ({ searchDistance, setSearchDistance }) => {

    const handleDistanceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchDistance(parseInt(event.target.value));
      };

  return (
    <form>
        <SelectWrapper 
            name="distance" 
            id="distance" 
            onChange={handleDistanceChange} 
            value={searchDistance}>
            <OptionWrapper value="5">5 km</OptionWrapper>
            <OptionWrapper value="10">10 km</OptionWrapper>
            <OptionWrapper value="20">20 km</OptionWrapper>
            <OptionWrapper value="30">30 km</OptionWrapper>
            <OptionWrapper value="40">40 km</OptionWrapper>
            <OptionWrapper value="50">50 km</OptionWrapper>
            <OptionWrapper value="60">60 km</OptionWrapper>
            <OptionWrapper value="70">70 km</OptionWrapper>
            <OptionWrapper value="75">75 km</OptionWrapper>
            <OptionWrapper value="100">100 km</OptionWrapper>
        </SelectWrapper>
    </form>
  )
}

export default DistanceSelectWrapper
