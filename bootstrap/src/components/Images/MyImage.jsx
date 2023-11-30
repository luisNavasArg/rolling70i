import Image from 'react-bootstrap/Image';

function FluidExample({src}) {
  return <Image style={{width:"250px"}} src={src}  fluid/>;
}

export default FluidExample;