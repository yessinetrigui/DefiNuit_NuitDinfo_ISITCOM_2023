
 function DropDownItems(props) {
   let className = "font-inter font-semibold px-4 py-2 hover:bg-deep-purple-100   flex items-center " + props.round
    return (
       <div>
        <li key={props.title}>
            <a href={props.link} className={className}>
               <div className='mr-2'>
               {props.icon}
               </div>
                {props.title}</a>
         </li>
       </div>
    )
  }
  export default DropDownItems;
