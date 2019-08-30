import React from "react"
import {graphql} from "gatsby";
import Layout from "./layout";

export default ({data}) => {
    let dataHolder = data.allContentfulProjectWriteup.nodes[0];
    
    let linkData = dataHolder.linksToTheOutside;

    let clickableLinks = `None to display`;

    if(linkData !== null){
        clickableLinks = linkData.map(el=>{
            
            return <div className="inline-block overflow-hidden rounded-lg mr-5" key={el.link}>
                <a href={el.link} target="_blank" rel="noopener noreferrer">
                    <img className="w-16 bg-white" src={el.logo.file.url} alt={el.link} />
                </a>
            </div>
        })
    }

    let title = <ProjHeader projImg={dataHolder.logo.file.url} title={dataHolder.title}
        ttc={dataHolder.date} eLinks={clickableLinks}/>

    let projData = dataHolder.childContentfulProjectWriteupWriteupRichTextNode.content;
    let content = projData.map((el,index)=>{  
        if(index%2===0 && el.content[0].value !== ''){
            let x = index+1;
            return <WriteUpElement key={el.content[0].value} title={el.content[0].value} content={projData[x].content[0].value}/>
        }
    })

    let media = dataHolder.mediaLinks;

    let videos = null;
    let photos= null;

    if(media !== null && media.videoLinks !== null){
        let videoLinks = media.videoLinks[0].medialink[0].videoLinks;

        videos = videoLinks.map(el =>{
            return <VideoWrapper link={el.link} title={el.link} key={el.link} />
        })
    }
    
    if(media !== null && media.photo !== null){
        photos = media.photo.map(el=>{
            return <ImageWrapper img={el.file.url} key={el.file.url} alt={el.file.url}/>
        })
    }
    
    
    let mediaHeader = (media !== null) ? 'media' : null;

    
    

    return(
        <Layout>
            <div className="max-w-xs mx-auto my-10 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
                {title}
                {content}
                <div>
                    <div className="mb-2 mt-4 font-bold text-2xl text-green-400">
                        {mediaHeader}
                    </div>
                    {photos}
                    {videos}
                </div>
            </div>
        </Layout>
    )
}

const ProjHeader = (props) =>(
    <div className="">
        <div className="sm:flex flex-row-reverse justify-between">                        
            <div className="block">
                <div className="overflow-hidden shadow-xl mt-2 rounded-lg w-20 h-12 md:w-32 md:h-20 md:my-2 bg-cover bg-no-repeat bg-center bg-white" style={{
                    "backgroundImage":`url(${props.projImg})`
                }}/> 
                
            </div>
            <div className="flex justify-between flex-wrap mb-10 md:mb-16">
                <div className="my-4">
                    <h1 className="font-bold text-2xl text-green-400">title</h1>
                    <p>{props.title}</p>
                </div>

                <div className="my-4 w-auto sm:w-full">
                    <h1 className="font-bold text-2xl text-green-400">time to complete</h1>
                    <p>{props.ttc}</p>
                </div>

                <div className="mt-4 ">
                    <h1 className="font-bold text-2xl text-green-400">external links</h1>
                    <div>{props.eLinks}</div>
                </div>
            </div>
        </div>
    </div>
)

const WriteUpElement = (props) => (
    <div>
        <div>
            <h1 className="mb-2 mt-4 font-bold text-2xl text-green-400">{props.title}</h1>
            <p>{props.content}</p>
        </div>
     </div>
)

const VideoWrapper = (props) =>(
    <div className="mx-auto md:h-72 my-5">
        <iframe title={props.title} className="w-full h-full" src={props.link} frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
)

const ImageWrapper = (props) => (
    <div className="my-5">
        <img src={props.img} alt={props.alt}/>
    </div>
)

export const query = graphql`
query($slug: String!){
    allContentfulProjectWriteup (filter: {title: {eq: $slug}})  {
      nodes {
        title
        date
        logo{
            file{
                url
            }
        }
        childContentfulProjectWriteupWriteupRichTextNode {
            content {
                content {
                  value
                }
              }
        }
        linksToTheOutside {
            logo {
              file {
                url
              }
            }
            link
        }
        mediaLinks {
            
            photo {
              file {
                url
              }
            }
            videoLinks {
                medialink {
                  videoLinks {
                    link
                  }
                }
            }
        }
      }
    }
  }
`