import swal from "sweetalert"
import React from "react"
import { useRouter } from 'next/router'

export const alert=(title_:string, message_:string, type_:string)=>{

    swal({title:title_,
      text:message_,
      icon: type_,
      
    })
}
