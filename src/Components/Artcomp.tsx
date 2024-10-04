import styled from "styled-components";
import {Artwork} from "../Artwork.ts";

// sdesign for the all art div
const AllArtDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #E0B0FF; /* Mauve background */
`;

// design for the signleArtdve
const SingleArtDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  background-color: #DDA0DD; /* Plum color */
  color: white;
  border: 3px #4b0082 solid; /dark purple */
  border-radius: 15px;
  font: small-caps bold calc(2px + 1vw) cursive, fantasy;
  text-align: center;
`;

//export the ArtComp component
//function to map data and display them to build the UI 
export default function Artcomp(props: { data: Artwork[] }) { 
  return (
    <AllArtDiv>
      {/*map the corresponding data to each of the artworks objects in the array */}
      {props.data.map((artwork, index) => (
        <SingleArtDiv key={index}>
          <h3>{artwork.title}</h3>
          {/*displays all of the fields with the exception of the id field */}
          <img src={artwork.image} alt={`image of ${artwork.title}`} /> 
          <p>Artist: {artwork.artist}</p>
          <p>Date: {artwork.date}</p>
          <p>Medium: {artwork.medium}</p> 
          <p>Dimensions: {artwork.dimensions}</p>
        </SingleArtDiv>
      ))}
    </AllArtDiv>
  );
}
