import Button from "./Button.js"
import Event from "../components/Event"
import "../style/components/Carousel.css"
import "../style/components/Button.css"
import { useState, useEffect } from "react"

function Carousel({ children }){
    const [ index, setIndex ] = useState(0)
    const [ maxNumberOfVisibleCards, setMaxNumberOfVisibleCards ] = useState(null)
    const [ carouselPosition, setCarouselPosition ] = useState(0)
    const [ carouselTranformation, setCarouselTranformation ] = useState({ transform : "translateX(0px)" })
    const [ windowJustification, setWindowJustification ] = useState({ justifyContent : "flex-start" })
    const [ touchPosition, setTouchPosition ] = useState(null)
    let countChildren = 0

    
    const getCurrentCardWidth = () => {
        const card = document.querySelector(".carousel-card")

        const cardComputedStyle = getComputedStyle(card)
        const width = parseInt(cardComputedStyle.width)
        const lateralWidth = parseInt(cardComputedStyle.margin.split(" ")[1])

        return 2 * lateralWidth + width
    }

    const calculateMaxNumberOfVisibleCards = () => {
        const carouselWindow = document.querySelector(".carousel-window")
        
        const windowWidth = parseInt(getComputedStyle(carouselWindow).width)

        return windowWidth / getCurrentCardWidth()
    }

    const calculateFixedPosition = (index) => { 
        return -index * getCurrentCardWidth()
    }

    const getForwardLimit = () => calculateFixedPosition(children.length - 1)

    const disrespectsForwardLimit = (value) => value <= getForwardLimit()

    const disrespectsBackwardLimit = (value) => value > 0

    const isAllowedToMoveForward = () => {
        return children.length > maxNumberOfVisibleCards && index + 1 < children.length
    }

    const isAllowedToMoveBackward = () => {
        return index - 1 >= 0
    }

    const moveForward = () => {
        if (!isAllowedToMoveForward())
            return
        
        setCarouselPosition(calculateFixedPosition(index + 1))
        setIndex(index + 1)
    }

    const moveBackward = () => {
        if (!isAllowedToMoveBackward())
            return
        
        setCarouselPosition(calculateFixedPosition(index - 1))
        setIndex(index - 1)
    }

    const handleTouchStart = (event) => {
        setTouchPosition(event.touches[0].clientX)
    }

    const handleTouchMove = (event) => {
        if (touchPosition === null)
            return
        
        const displacement = touchPosition - event.touches[0].clientX
        setTouchPosition(event.touches[0].clientX)
        
        const calculatedPosition = carouselPosition - displacement
        const calculatedIndex = Math.trunc(-calculatedPosition / getCurrentCardWidth())

        setCarouselPosition(carouselPosition - displacement)

        if (calculatedIndex !== index && 0 <= calculatedIndex && calculatedIndex < children.length )
            setIndex(calculatedIndex)
    }

    const handleTouchEnd = (event) => {
        if (touchPosition === null)
            return

        if (disrespectsBackwardLimit(carouselPosition))
            setCarouselPosition(0)
        if (disrespectsForwardLimit(carouselPosition))
            setCarouselPosition(getForwardLimit())

        setTouchPosition(null)
    }

    useEffect(() => { 
        window.addEventListener("resize", (event) => {
            setMaxNumberOfVisibleCards(calculateMaxNumberOfVisibleCards())
        })
    });

    useEffect(() => { 
        setWindowJustification(
            { justifyContent : children.length > maxNumberOfVisibleCards ? "flex-start" : "center" }
        )
    }, [maxNumberOfVisibleCards, children])

    useEffect(() => { setCarouselTranformation({ transform : `translateX(${ carouselPosition }px)` }) }, 
        [ carouselPosition ])


    return (
        <div className="carousel-control">
            <div className="carousel-window">
                <div className="carousel" style={{ ...carouselTranformation, ...windowJustification }} >{
                    children.map(child => (
                        <div key={++countChildren} className="carousel-card">
                            { child }
                        </div>
                    ))
                }</div>
            </div>

            { isAllowedToMoveBackward() &&
                <div className="control-button previous">
                    <input type="button" name="previous" value="<" onClick={ moveBackward } />
                </div>
            }
            { isAllowedToMoveForward() &&
                <div className="control-button next">
                    <input type="button" className="next" value=">" onClick={ moveForward } />
                </div>
            }
        </div>
    );
}

export default Carousel;