function ok(params) {

   
    
    let note=document.createElement('p')
    note.setAttribute("contenteditable",'true')

    let items=document.querySelector('.items')

    let img=document.createElement('img')
    img.src="./images.png"

  note.appendChild(img)


  img.onclick=()=>{
    let yes= confirm('ARE YOU SURE TO DELET NOTE')
   
    if (yes==true) {
      note.remove()
    }
    else{
      return

    }
  }

  items.appendChild(note)
    
}

