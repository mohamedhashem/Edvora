import './filter.styles.scss'
import * as React from 'react'
import Popper from '@mui/material/Popper'

const Filter = ({ city, state,handleSelectState,handleSelectCity }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popper' : undefined
    return (
        <span>
            <a aria-describedby={id} onClick={handleClick}>
                Filter
            </a>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className='filter'>
                    <label>Filter</label>
                    <hr />
                    <div className='select-container' >
                        <select className='select' onChange={handleSelectCity}>
                            <option selected disabled > Select a City</option>
                            {
                                city.map((city) =>
                                    <option key={city} value={city}> {city}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='select-container'>
                        <select className='select' onChange={handleSelectState}>
                            <option selected disabled > Select a State</option>
                            {

                                state.map((state) =>
                                    <option key={state} value={state}> {state}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
            </Popper>
        </span>



    );
}

export default Filter;
