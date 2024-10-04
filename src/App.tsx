import Artcomp from "./Components/Artcomp.tsx";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Artwork} from "./Artwork";

// style the Partent divider
const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px plum solid;
`;
// function to fetch data from the API to map the information to the artwork objects
export default function App() {
  // State hook to store the fetched artworks. The initial state is a empty arrray
  const [data, setData] = useState<Artwork[]>([]);

  // useEffect hook to fetch data and handle errors
  useEffect(() => {
    async function fetchData(): Promise<void> {
      //use a try and catch statement for mapping and error checking
      try {
        const rawData = await fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=15"); // only show the first 15 artworks becuz I do not know how large the collection is LOL
        const { data: artworkData }: { data: Artwork[] } = await rawData.json();
        const artworks = artworkData.map((artwork: any) => ({ //find and add info about each artwork to put into the Artwork array
          id: artwork.id,                     
          title: artwork.title,
          artist: artwork.artist_display,                
          date: artwork.date_display,          
          image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,  
          medium: artwork.medium_display,      
          dimensions: artwork.dimensions,      
        }));

        setData(artworks); //update the last state of the useState hook with the new artwork info
      } catch (error) {
        console.error("Error fetching data:", error); //display a error message if there are errors
      }
    }
    //let me know if the data was successfully fetched or not
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, []); 

  return ( // return the Artwork work data to the Artcomp component
    <ParentDiv>
      <Artcomp data={data} /> 
    </ParentDiv>
  );
}