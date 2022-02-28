import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './tab-view.styles.scss'
import RidesData from '../../RidesData';
import ItemPreview from '../item-preview/item-preview.component';
import Filter from '../filter/filter.component'
class Tabview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: RidesData,
            type: "1",
            user: props.UserData,
            selectedCity: "",
            selectedState: ''
        }
    }
    handleReset=() =>{
        this.setState({selectedCity: '',selectedState: ''})
    }
    handleClick = (e) => {
        this.setState({ type: e.target.id })
    }
    handleSelectCity = (e) => {
        console.log(e.target.value)
        this.setState({ selectedCity: e.target.value })
    }
    handleSelectState = (e) => {
        console.log(e.target.value)
        this.setState({ selectedState: e.target.value })
    }
    render() {
        const id = this.state.type
        const newRids = this.state.rides
        newRids.forEach((s) => {
            const sc = this.state.user.station_code
            const subResults = []

            for (let i = 0; i < s.station_path.length; i++) {
                const element = s.station_path[i]
                subResults.push(Math.abs(sc - element))
            }
            subResults.sort(function (a, b) {
                return a - b
            })

            var minimumValue = Math.min(...subResults)
            s.distance = minimumValue
        })

        newRids.sort(function (a, b) {
            return a.distance - b.distance
        })

        var cities = newRids.map(function (el) { return el.city });
        var states = newRids.map(function (el) { return el.state; });
        var uniqueCities = Array.from(new Set(cities));
        var uniqueStates = Array.from(new Set(states));

        const FilteredRides = newRids.filter((ride) => {
            return ((ride.city === this.state.selectedCity || this.state.selectedCity === "") && (ride.state === this.state.selectedState || this.state.selectedState === "")  )
           
        })

        console.log(FilteredRides)

        


        return (
            <div className='tab-view'>
                <Link id='1' className='option' to='nearest-rides' onClick={this.handleClick} >
                    Nearest Rides  
                </Link>
                <Link id='2' className='option' to='upcoming-rides' onClick={this.handleClick}>
                    Upcoming Rides ({FilteredRides.filter(ride => (new Date(ride.date) > new Date())).length})
                </Link>
                <Link id='3' className='option' to='past-rides' onClick={this.handleClick}>
                    Past Rides ({FilteredRides.filter(ride => (new Date(ride.date) < new Date())).length})
                </Link>
                <Filter key={FilteredRides.id} handleReset={this.handleReset} city={uniqueCities} state={uniqueStates} handleSelectCity={this.handleSelectCity} handleSelectState={this.handleSelectState} />
                {
                    id === '1' ? (FilteredRides
                        .map((ride) => (<ItemPreview key={ride.id} ride={ride} />))
                    ) : (null)
                }
                {
                    id === '2' ? (FilteredRides
                        .filter(ride => (new Date(ride.date) > new Date()))
                        .map((ride) => (<ItemPreview key={ride.id} ride={ride} />))
                    ) : (null)
                }
                {
                    id === '3' ? (FilteredRides
                        .filter(ride => (new Date(ride.date) < new Date()))
                        .map((ride) => (<ItemPreview key={ride.id} ride={ride} />))
                    ) : (null)
                }

            </div>
        );
    }
}

export default Tabview;