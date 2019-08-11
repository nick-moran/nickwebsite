import React from "react"
import Layout from "../templates/layout";
import { Link } from "gatsby";


export default () => (
    <Layout>
        <div className="w-full text-center mt-48 font-bold text-xl">
            uhhh, nothing to see here. please go away.
            <div className="text-3xl mt-10 hover:text-green-400">
                <Link to="/">Go back home</Link>
            </div>
            
        </div>
    </Layout>
)