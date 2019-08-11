import React from "react"
import {graphql} from "gatsby";
import Layout from "../templates/layout";

export default (props) => {
    let content = {__html:props.data.cosmicjsPages.content};
    let imgSrc = props.data.cosmicjsPages.metadata.hellothere.imgix_url;
    return <Layout>
        <div>
            <div className="max-w-sm mx-auto mt-16  lg:max-w-2xl lg:flex justify-between">
                <img className="w-84 lg:w-full mx-auto" src={imgSrc} alt="Cartoon of Nick Moran waving" />
                <div className="text-center mt-4 text-xl font-bold lg:ml-10 lg:w-84 lg:mt-32" dangerouslySetInnerHTML={content} />
            </div>
            
            <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe" title="dummyframe"></iframe>

            <div className="max-w-xs mx-auto mt-10 md:max-w-md lg:max-w-2xl">
                <form className="simple-form" target="dummyframe">
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                FirstName
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="fName" type="text" placeholder="Nick" required/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lName" type="text" placeholder="Fury"  required/>                        
                        </div>
                    </div>
                    <div className="w-full mb-5">                    
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="emailAddress" type="email" placeholder="avengersfan1995@aol.com" required/>                    
                    </div>
                    <div className="w full mb-5">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Message
                        </label>
                        <textarea className="appearance-none text-base w-full h-32 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" type="text" placeholder="I'm here to talk to you about the Avengers Initiative" required/>
                    </div>
                    <div className="w full mb-10">
                        <input className="bg-blue-600 rounded block py-2 px-4 text-white font-bold border-b-4 border-blue-700 hover:bg-blue-500" type="submit"></input>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
}

export const query = graphql`
query{
    cosmicjsPages(slug: {eq: "contactpage"}) {
      content
      metadata {
        hellothere {
          imgix_url
        }
      }
    }
  }
`