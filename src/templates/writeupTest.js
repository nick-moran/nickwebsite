import React from "react"
import {graphql} from "gatsby";
import Layout from "./layout";

export default ({data}) => {
    let dataHolder = data.allContentfulProjectWriteup.nodes[0];
    
    let linkData = dataHolder.linksToTheOutside;
    console.log(linkData)

    let clickableLinks = `None to display`;

    if(linkData !== null){
        clickableLinks = linkData.map(el=>{
            return <div className="inline-block" key={el}>
                <a href={el.link} target="_blank">
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

    return(
        <Layout>
            <div className="max-w-xs mx-auto my-10 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
                {title}
                {content}
            </div>
        </Layout>
    )
}

const ProjHeader = (props) =>(
    <div className="">
        <div className="sm:flex flex-row-reverse justify-between">                        
            <div className="block">
                <div className="overflow-hidden shadow-xl mt-2 rounded-lg w-20 h-12 md:w-32 md:h-20 md:my-2 bg-contain bg-no-repeat bg-center bg-white" style={{
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
      }
    }
  }
`