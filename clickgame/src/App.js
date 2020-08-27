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
    displayText: ''
  }
  checkImage = (imageId) => {
    // check if the image has been click already
    // shuffle the images after
   
    const clickedImages = this.state.clickedImages;
    if (clickedImages.indexOf(imageId) !== -1) {
      // the image has already been clicked
      // alert the user
      this.setState({
        displayText: 'You guessed incorrectly',
        score: 0,
        clickedImages: []
      })
    }
    else {
      // the image has not been clicked on
      // add the image to clickedImages
      const newClickedImage = [...clickedImages, imageId]
      this.setState({
        score: this.state.score + 1,
        clickedImages: newClickedImage,
        displayText: 'You guessed correctly'
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
    setTimeout(() => {
      this.setState({
        displayText: ''
      })
    }, 2000);
  }
  render() {
    return (
      <div>
        <Navbar score={this.state.score} displayText={this.state.displayText} />
        <Jumbotron />
        <Wrapper>
          
          {this.state.images.map(image => (
            <CharCard key={image.id} handleClick={() => this.checkImage(image.id)} image={image}/>
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

