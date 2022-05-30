import React, {useContext} from 'react'
import Context from '../context/Context'

function DropDown() {
  const ctx = useContext(Context)
  
  return (
    <div>
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {ctx[0].city.name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {ctx[0].cities.map((city) => <li className='dropdown-item' key={city.id} value={city.name} onClick={(e) => ctx[0].setCity(ctx[0].cities.find(item => item.name === e.target.innerHTML))}>{city.name}</li>)}
    
  </ul>
</div>
    </div>
  )
}

export default DropDown
