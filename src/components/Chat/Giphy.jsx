import React from 'react'
import { render } from 'react-dom'
import ReactGiphySearchbox from 'react-giphy-searchbox'
import poweredByGiphy from "../../assets/poweredbygiphy.png";
import spinner from "../../assets/spinner.png";

const Giphy = () => (
  <div className="gif-wrapper">
    <ReactGiphySearchbox
      apiKey="eXAVbiMAfiGF3Ds1Hlz5B29ONuIwprvV" // Required: get your on https://developers.giphy.com
      onSelect={item => console.log(item)}
      gifListHeight="200px"
      masonryConfig={[
        { columns: 2, imageWidth: 110, gutter: 5 },
        { mq: "700px", columns: 3, imageWidth: 115, gutter: 5 }
      ]}
    />
    <div>
      
    </div>
  </div>
  
)
export default Giphy;