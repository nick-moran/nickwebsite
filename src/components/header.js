import React from "react";
import {Helmet} from "react-helmet";
import BuildLinks from "../components/buildLinks";
import '../styles/styles.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={disabled:1,bgColor:0,overflow:'visible',width:0}
        this.handleClick = this.handleClick.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        const getBgColor = localStorage.getItem('bgColor');
        this.setState({bgColor:Number(getBgColor)});
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({width: window.innerWidth});
    }

    handleClick(){
        this.setState({disabled:Math.pow(0,this.state.disabled),overflow: this.state.disabled ? 'hidden' : 'visible'})
        
    }

    handleTheme(){
        this.setState({bgColor:Math.pow(0,this.state.bgColor)},()=>{
            localStorage.setItem('bgColor',this.state.bgColor)
        })
        
    }

    render(){        
        let style = this.state.bgColor ? `white` : `#303030`
        let textColor = this.state.bgColor ? "#303030" : "white";
        let nightText = this.state.bgColor ? 'off' : 'on';
        let overflowStatus = (this.state.width < 768) ? this.state.overflow : "visible";
        let menuToDisp = this.state.disabled ? null : <Open className="sticky2" onClicked={this.handleClick} nightModeController={this.handleTheme} nT={nightText}/>
        return (
            <div className="">
                <Helmet>
                    <style>
                        {`html{transition:0.2s;overflow:${overflowStatus};background-color:${style};color:${textColor}}`}
                    </style>
                </Helmet>

                <div className="md:hidden">
                    {menuToDisp}
                    <Closed onClicked={this.handleClick} /> 
                </div>

                <div className="hidden md:block">
                    <Open nightModeController={this.handleTheme} textColor={textColor} nT={nightText}/>
                    
                </div>
            </div>
        )

    }
}

const Closed = ({onClicked}) => (
    <div className="flex justify-between">
        <div className=" text-bold text-4xl border-white ml-2">
            <BuildLinks url="/" text="nick moran" color1="green-400"/>
        </div>

        <button  onClick={onClicked}className="text-white text-bold text-lg rounded px-4 mr-2 mt-2 bg-green-500 text-center">
            menu
        </button>
    </div>
)

const Open = ({onClicked, nightModeController, textColor, nT}) => (
    <div className="absolute z-10 w-full h-screen bg-menu-background pt-4 md:bg-transparent md:pt-0 md:static md:h-auto">
        <div id="push" className="bg-green-400 rounded-lg max-w-xs sm:max-w-md mx-auto md:bg-transparent md:max-w-full md:flex justify-between md:my-0">
            <div className="md:hidden">
                <div className="text-right mr-2 pt-2">
                    <button onClick={onClicked} className="w-10 h-10 text-center bg-white rounded-full font-bold text-xl text-gray-600">X</button>
                </div>
            </div>
            <div className={`text-white text-bold text-5xl sm:text-6xl mt-2 border-white ml-3 md:text-black md:mt-0 md:text-4xl md:text-${textColor} lg:text-5xl md:ml-4 lg:ml-10`}>
                <BuildLinks url="/" text="nick moran" color1={textColor} color2="green-400" />
            </div>

            <div className={`mx-2 py-2 text-gray-700 md:mr-4 lg:mr-10 md:py-0 lg:py-2 md:text-${textColor}`}>
                <div className=" bg-gray-300 text-bold text-4xl px-4 py-2 rounded-t-lg md:bg-transparent md:inline-block md:py-1 md:text-3xl">
                    <BuildLinks url="/projects/" text="projects" color1="green-400"/>
                </div>
                        
                <div className="text-bold bg-white px-4 py-2 text-4xl md:bg-transparent md:inline-block md:py-1 md:text-3xl">
                    <BuildLinks url="/contact/" text="contact" color1="green-400"/>
                </div>

                <button onClick={nightModeController} className="w-full text-left md:w-auto text-bold bg-gray-300 rounded-b-lg px-4 py-4 text-2xl md:bg-transparent md:inline-block md:py-1 md:text-2xl">
                    {`night mode: ${nT}`}
                </button>
            </div>
        </div>
    </div>
)