import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";

import { Toaster } from 'react-hot-toast';

const Layout = ({children,title,discription,keywords,author}) => {
  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name='discription' content={discription}/>
          <meta name='keywords' content={keywords}/>
          <meta name='author' content={author}/>
          <title>{title}</title>
        </Helmet>
        <Header/>
          <main >
            {children}
            <Toaster />
          </main>
          <div >
              <Footer/>
          </div>
      </div>
  )
}

Layout.defaultProps ={
  title: "Cartify - shop now",
  discription: "Cartify - All products in one place",
  keywords: "mern,react,node,mongodb",
  author:"TAHA UMAR"
}

export default Layout