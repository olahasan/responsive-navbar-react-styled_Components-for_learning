import React, { useState } from 'react'
import { All , Logo , Ul , Li} from './Style'

function Nav() {
    const[Visbile , setVisbile] = useState(false);
    const handleClick = () => {
        setVisbile(!Visbile)
    }
    
  return (
    <All>
        <div >HELLO</div>
        {/* <Logo onClick={handleClick} style={{display:Visbile ? 'block' : 'none'}}>&times;</Logo> */}
        <div>
            <Logo onClick={handleClick}>&times;</Logo>
            {/* <Logo onClick={handleClick}>&times;</Logo> */}
            <Ul className="ola">
            {/* <Ul style={{display:Visbile ? 'block' : 'none'}}> */}
                <Li>Home</Li>
                <Li>About</Li>
                <Li>Menu</Li>
                <Li>Contact</Li>
            </Ul>
        </div>

        <style jsx>{`
              .ola{
                display: ${ Visbile ? 'inline' : 'none'};
              }

              @media (min-width: 768px){
                  .ola{
                    display: flex;
                  }
              }
           `}</style>
    </All>


  )
}

export default Nav