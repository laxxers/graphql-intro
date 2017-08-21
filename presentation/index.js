// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  graph: require("../assets/graphql.png")
};

preloader(images);

const theme = createTheme({
  primary: "#e30066",
  secondary: "#262626",
  tertiary: "black",
  quartenary: "black"
}, {
  primary: "Helvetica, Arial, sans-serif",
  secondary: "Helvetica, Arial, sans-serif"
});

class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        bgColor="white"
        theme={theme}
      >

        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="white">GraphQL</Heading>
          <br/>
          <Text bold>What? &#8766; Why? &#8766; How?</Text>
        </Slide>

        <Slide bgColor="secondary">
          <Image
            height="10em"
            src={images.graph}
          />
          <List>
            <Appear><ListItem textColor="white">Node - generic term for an object</ListItem></Appear>
            <Appear><ListItem textColor="white">Edge - relationship between nodes</ListItem></Appear>
            <Appear><ListItem textColor="white">Connection - collection of related objects</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={2} lineHeight={1} textColor="primary">GraphQL</Heading>
          <List>
            <Appear><ListItem textColor="white">A specification.</ListItem></Appear>
            <Appear><ListItem textColor="white">Strongly typed.</ListItem></Appear>
            <Appear><ListItem textColor="white">Introspective.</ListItem></Appear>
            <Appear><ListItem textColor="white">Hierarchical.</ListItem></Appear>
            <Appear><ListItem textColor="white">An application layer.</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/api.txt")}
          ranges={[
            { loc: [0, 1], title: "REST" },
            { loc: [2, 13] },
            { loc: [14, 15], title: "Ad-Hoc Endpoint" },
            { loc: [16, 40] }
          ]}
        />

        <Slide bgColor="secondary">
          <Heading size={2} lineHeight={1} textColor="primary">Problems</Heading>
          <List ordered>
            <Appear><ListItem textColor="white">Multiple roundtrips</ListItem></Appear>
            <Appear><ListItem textColor="white">Overfetching</ListItem></Appear>
            <Appear><ListItem textColor="white">Array of clients</ListItem></Appear>
            <Appear><ListItem textColor="white">"Which endpoint should I call?"</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/graphql.txt")}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [3, 7] },
            { loc: [7, 10] },
            { loc: [10, 14] }
          ]}
        />

        <Slide bgColor="secondary">
          <Heading size={2} lineHeight={1} textColor="primary">Key Benefits</Heading>
          <List>
            <Appear><ListItem textColor="white">Single endpoint.</ListItem></Appear>
            <Appear><ListItem textColor="white">Shape and size of data.</ListItem></Appear>
            <Appear><ListItem textColor="white">No more overfetching / underfetching.</ListItem></Appear>
            <Appear><ListItem textColor="white">Reduce number of API calls.</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/example.txt")}
          ranges={[
            { loc: [0, 5] },
            { loc: [5, 18] },
            { loc: [19, 38] },
            { loc: [39, 45] }
          ]}
        />

        <Slide bgColor="secondary">
          <Heading size={2} lineHeight={1} textColor="primary">Questions</Heading>
          <List ordered>
            <Appear><ListItem textColor="white">Network caching?</ListItem></Appear>
            <Appear><ListItem textColor="white">Best practices?</ListItem></Appear>
            <Appear><ListItem textColor="white">Frequency of changes?</ListItem></Appear>
            <Appear><ListItem textColor="white">Ready to hit a moving target?</ListItem></Appear>
            <Appear><ListItem textColor="white">Complexity of APIs?</ListItem></Appear>
            <Appear><ListItem textColor="white">Too much &#9829; for REST?</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={2} lineHeight={1} textColor="primary">Resources</Heading>
          <List>
            <Appear><ListItem textColor="white">http://graphql-ruby.org/</ListItem></Appear>
            <Appear><ListItem textColor="white">https://github.com/facebook/dataloader</ListItem></Appear>
            <Appear><ListItem textColor="white">https://developer.github.com/</ListItem></Appear>
            <Appear><ListItem textColor="white">https://api.maas.museum/docs/graphql</ListItem></Appear>
            <Appear><ListItem textColor="white">https://www.graph.cool/</ListItem></Appear>
            <Appear><ListItem textColor="white">https://github.com/FormidableLabs/spectacle</ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
