import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Product from "./components/Product";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonName="to the collection"
                        buttonDisabled={false}
                        clickButton={() => console.log("to the collection")}>
                </Button>
                <Button buttonName="shop all bags"
                        buttonDisabled={false}
                        clickButton={() => console.log("shop all bags")}>
                </Button>
                <Button buttonName="pre-orders"
                        buttonDisabled={true}
                        clickButton={() => console.log("pre-orders")}>
                </Button>
            </nav>
            <main>
                <Product
                    labelBag="Best seller"
                    imgBag={bag1}
                    nameBag="The handy bag"
                    priceBag="€400,-"
                />
                <Product
                    labelBag="Best seller"
                    imgBag={bag2}
                    nameBag="The stylish bag"
                    priceBag="€200,-"
                />
                <Product
                    labelBag="New collection"
                    imgBag={bag3}
                    nameBag="The simple bag"
                    priceBag="€300,-"
                />
                <Product
                    labelBag="New collection"
                    imgBag={bag4}
                    nameBag="The trendy bag"
                    priceBag="€150,-"
                />
            </main>
            <footer>
                <Tile titleText="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi enim eveniet fugiat ipsum
                        laudantium magni neque perspiciatis quam saepe. Ad aliquam aut cumque facere harum illo neque
                        possimus similique voluptas.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi enim eveniet fugiat ipsum
                        laudantium magni neque perspiciatis quam saepe. Ad aliquam aut cumque facere harum illo neque
                        possimus similique voluptas.</p>
                </Tile>
                <Tile imgName={brand}
                      altName="brand"/>
                <Tile imgName={ourStory}
                      altName="ourStory"/>
                <Tile titleText="ourStory">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi enim eveniet fugiat ipsum
                        laudantium magni neque perspiciatis quam saepe. Ad aliquam aut cumque facere harum illo neque
                        possimus similique voluptas.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



