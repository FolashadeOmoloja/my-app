'use client'
import { useState, useEffect } from "react"

const NewComponent = () =>{
    const [newLook, oldLook] = useState('hiiii')
    return(
<section>
    <div>
       <p>this is a client side component</p>
     <p>placeholder</p>
     <p>hiii</p>
    </div>
    <div>
        <p>Hello world</p>
    </div>
</section>
    )
}
export default NewComponent