import { useLocation } from 'react-router'

const BreadCrumb = () => {
  
  let location = useLocation()
  let pathLocation = location.pathname.split("/")[1]
  let pageTitle = pathLocation === 'myaccount'
    ? 'My Account'
    : pathLocation.charAt(0).toUpperCase() + pathLocation.slice(1)

  return (
    <div className=" flex items-center gap-3 text-[#000000b7] pt-20 pb-12.5 ">
      <h3> Home </h3>
      <h3> / </h3>
      <h3>{pageTitle} </h3>
    </div>
  );
}

export default BreadCrumb