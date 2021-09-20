import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Check=()=>{

  return(

<Helmet>
    <meta id="meta-description" name="description" content="Some description." />
    <meta id="og-title" property="og:title" content="Home Page" />
    <meta id="og-image" property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
  </Helmet>

  );


}

export default Check