import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharCard from "./components/CharCard";
import images from './images.json';
import Wrapper from "./components/Wrapper";


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Jumbotron />
//       <Wrapper>
//         <CharCard 
//         image={images[0].image}
//         />
//         <CharCard 
//         image={images[1].image}
//         />
//         <CharCard 
//         image={images[2].image}
//         />
//         <CharCard 
//         image={images[3].image}
//         />
//         <CharCard 
//         image={images[4].image}
//         />
//         <CharCard 
//         image={images[5].image}
//         />
//         <CharCard 
//         image={images[6].image}
//         />
//         <CharCard 
//         image={images[7].image}
//         />
//         <CharCard 
//         image={images[8].image}
//         />
//         <CharCard 
//         image={images[9].image}
//         />
//         <CharCard 
//         image={images[10].image}
//         />
//         <CharCard 
//         image={images[11].image}
//         />
//       </Wrapper>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    images: images,
    clickedImages: [],
    score: 0,
    clickedOn: false
  }
  checkImage = (imageId) => {
    // check if the image has been click already
    // shuffle the images after
    const clickedImages = this.state.clickedImages;
    if (clickedImages.indexOf(imageId) !== -1) {
      // the image has already been clicked
      // alert the user
      this.setState({
        clickedOn: true
      });
      setTimeout(() => {
        this.setState({
          clickedOn: false
        })
      }, 2000);
    }
    else {
      // the image has not been clicked on
      // add the image to clickedImages
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      images: images.sort((image) => {
        const change = Math.random();
        if (change > 0.5) {
          return 1;
        }
        if (change < 0.5) {
          return -1;
        }
        return 0;
      })
    })
    if (this.state.images.length === clickedImages.length) {
      // all of the images have been clicked on
      // make clickedImages an empty array
      this.setState({
        clickedImages: [],
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar score={this.state.score}/>
        <Jumbotron />
        <Wrapper>
          <CharCard />
          {/* {this.state.clickedOn ? <p>Already been clicked on</p> : null} */}
          {this.state.images.map(image => (
            <div key={image.id} onClick={() => this.checkImage(image.id)}>
              <img src={image.image} alt="" />
            </div>
          ))}
        </Wrapper>

      
        
      </div>
    )
  }
  // {images.map(image => (
  //   <CharCard image={image} />
  //  )}
  // return (
  //   <div>
  //     <Navbar />
  //     <Jumbotron />
  //     <Wrapper>
  //       <CharCard 
  //       image={images[0].image}
  //       />
  //       <CharCard 
  //       image={images[1].image}
  //       />
  //       <CharCard 
  //       image={images[2].image}
  //       />
  //       <CharCard 
  //       image={images[3].image}
  //       />
  //       <CharCard 
  //       image={images[4].image}
  //       />
  //       <CharCard 
  //       image={images[5].image}
  //       />
  //       <CharCard 
  //       image={images[6].image}
  //       />
  //       <CharCard 
  //       image={images[7].image}
  //       />
  //       <CharCard 
  //       image={images[8].image}
  //       />
  //       <CharCard 
  //       image={images[9].image}
  //       />
  //       <CharCard 
  //       image={images[10].image}
  //       />
  //       <CharCard 
  //       image={images[11].image}
  //       />
  //     </Wrapper>
  //   </div>
  // );
}

export default App;

