import React from "react";
import ReactDOM  from "react-dom/client";
//import logo from './bird.png'
// import freshfood from './Freshfood.png'
import Header from './components/Header';
import Body from './components/Body';


// const heading = React.createElement("h1", {id : "heading"}, "Hello world React!");
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading);

// const parent = React.createElement('div',{id:"parent"},
//     [React.createElement('div',{id:"child"},[React.createElement('h1',{},'Im h1 tag'),React.createElement('h2',{},'Im h2 tag')]),React.createElement('div',{id:"child"},[React.createElement('h1',{},'Im h1 tag'),React.createElement('h2',{},'Im h2 tag')])]);

// const headingJSX  =  <h1 id="headingjsx" className="heading">Hello</h1>
// console.log(headingJSX)

// const Title = () => (<h2>Hello Title</h2>)
// const HeadingComponent = () => (<div>
// <Title/>
// <h1>Hi from functional Component</h1></div>)
//     //root.render(headingJSX );

//     root.render(<HeadingComponent/>)

//const TitleComponent = () => (<h1>Title Component</h1>)

// const HeadingComponent = () => (
//     <div>
//     <h2>Heading</h2>

//     <TitleComponent id = "title" className = "test"></TitleComponent>
//     <TitleComponent/>
//     {TitleComponent()}
//     </div>
    
// )

// const HeaderComponent = () => {
//     return <div style={{display:"flex"}}>
//         <img src={logo} alt="Logo"/>
//         <input type="text"></input>
//         <img src={logo} alt="Icon"/>
//     </div>
// }

/*
Header 
    logo
    nav items
        home
        about us
        cart
Body
    Search
    Card container
        Cards
Footer
    Copyright
    Links
*/

//root.render(HeaderComponent())


// const resObj = {
//     data: {
//         name: "Pizza Corner",
//         costForTwo:40000,
//         avgRating: 4.4,
//         cuisines: ["Pizza","Italian","Snacks"],
//         deliveryTime: 38,
//         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb"
//     }
// }



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
