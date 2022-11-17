import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonName="to the collection"
                        buttonDisabled="false"
                        clickButton={() => console.log("to the collection")}>
                </Button>
                <Button buttonName="shop all bags"
                        buttonDisabled="false"
                        clickButton={() => console.log("shop all bags")}>
                </Button>
                <Button buttonName="pre-orders"
                        buttonDisabled="true"
                        clickButton={() => console.log("pre-orders")}>
                </Button>
            </nav>
            <main>
                <article>
                    <span>"Best seller"</span>
                    <img src={bag1} alt="bag1"/>
                    <p>"The handy bag"</p>
                    <h4>"€400,-"</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag2} alt="bag2"/>
                    <p>The stylish bag</p>
                    <h4>€250,-</h4>
                </article>
                <article>
                    <span>New collection</span>
                    <img src={bag3} alt="bag3"/>
                    <p>The simple bag</p>
                    <h4>€300,-</h4>
                </article>
                <article>
                    <span>New collection</span>
                    <img src={bag4} alt="bag4"/>
                    <p>The trendy bag</p>
                    <h4>€150,-</h4>
                </article>
            </main>
            {/*<nav id="navigationbar">*/}
            {/*<button onClick={() => console.log("to the collection")}>to the collection</button>*/}
            {/*<button onClick={() => console.log("shop all bags")}>shop all bags</button>*/}
            {/*<button onClick={() => console.log("pre-orders")}>pre orders</button>*/}
            {/*</nav>*/}
        </>
    );
}

export default App;



