import React from "react"
import { graphql, Link } from "gatsby";
import Layout from "../templates/layout";
import BuildLinks from "../components/buildLinks";

export default class Index extends React.Component{
    constructor(props){
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
      localStorage.setItem('filterProj',e.currentTarget.id);
      
    }


    render(){
      let content={__html:this.props.data.cosmicjsPages.content};
      let imgSrc=this.props.data.cosmicjsPages.metadata.heyo.imgix_url;
      let projText = this.props.data.cosmicjsPages.metadata.projectstext;
      let cards = this.props.data.allCosmicjsTechcards.nodes;
      
      let cardBuilder = cards.map((el,index)=>{
        let cardContent={__html:el.content};
        let bgColor="white";
        
        if(el.metadata.color === 'yellow'){
          bgColor='jsYellow';
        }
        return <div key={index} onClick={this.handleClick} id={el.metadata.shortname} className="my-10 lg:mb-0 mx-8">
            <Card 
              content={cardContent}
              img={el.metadata.techimage.imgix_url}
              color={el.metadata.color}
              bgColor={bgColor}
              imgPosition={el.metadata.position}
              name={el.metadata.shortname}
              
            />
          </div>
      })
      
      return (
        <Layout>
          <div >
            <div className="max-w-sm mx-auto mt-16 md:flex md:max-w-xl lg:max-w-4xl lg:mt-24">
              <img className="w-64 lg:w-96 mx-auto" src={imgSrc} alt="Cartoon version of Nick Moran; very handsome"/>
              <div className="w-84 mt-10 text-xl ml-8 sm:ml-10 md:w-64 md:ml-0 md:mt-10 lg:mt-32 lg:text-2xl lg:w-96">
                <div dangerouslySetInnerHTML={content}/>
                <div className="mt-6 underline hover:text-green-400">
                  <BuildLinks url="/projects/" color1="green-400" text={projText} />
                </div>
              </div>       
            </div>

            <div className="my-16 sm:my-20 lg:my-20 mx-auto lg:flex lg:justify-center lg:flex-wrap lg:content-center lg:max-w-full">
              <div className="font-bold text-xl w-full text-center mr-20">
                technologies I am familiar with
              </div>
              {cardBuilder}
            </div>
            
          </div>
        </Layout>
      )
    }
}

const Card = (props) =>(
  <Link to="/projects/">
    <div className="max-w-sm w-full lg:max-w-xs mx-auto shadow-2xl rounded-lg text-black">
      
      <div className="flex justify-between lg:block ">
          <div className={`overflow-hidden rounded-tl-lg lg:rounded-tr-lg w-full lg:h-48 bg-contain bg-no-repeat bg-${props.imgPosition} bg-${props.bgColor}`} style={{
              "backgroundImage":`url(${props.img})`
          }}/> 
          <div className="w-full rounded-tr-lg  lg:rounded-tr-none h-full lg:border-t-2 border-gray-200 lg:h-auto bg-white">
              <div className="w-full text-gray-900 text-base text-left lg:font-bold pl-2 md:pl-3 py-4 lg:mt-0 lg:px-6 lg:ml-2 rounded-tr lg:py-10">
                <div dangerouslySetInnerHTML={props.content} />
              </div>
          </div>
      </div>

      
      <div className={`w-full bg-${props.color}-400 text-center py-2 font-bold rounded-b-lg`}>See projects that use {props.name}</div>
    </div>
  </Link>
)

export const query = graphql`
query{
  cosmicjsPages(slug: {eq: "homepage"}) {
    title
    content
    metadata {
      projectstext
      heyo {
        imgix_url
      }
    }
  }
  allCosmicjsTechcards(sort: {order: DESC, fields: order}){
    nodes {
      content
      metadata {
        color
        position
        shortname
        techimage {
          imgix_url
        }
      }
      order
    }
  }
  }  
`