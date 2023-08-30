import "../style/components/Carousel.css"
import { useState, useEffect } from "react"
import Arrow from "./Arrow.js"

function Carousel({ children }){
    const [ index, setIndex ] = useState(9)
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
        setMaxNumberOfVisibleCards(windowWidth / getCurrentCardWidth())
        return windowWidth / getCurrentCardWidth()
    }

    const calculateFixedPosition = (index) => { 
        return -index * getCurrentCardWidth()
    }

    const getForwardLimit = () => calculateFixedPosition(children.length - 1)

    const disrespectsForwardLimit = (value) => value <= getForwardLimit()

    const disrespectsBackwardLimit = (value) => value > 0

    const isAllowedToMoveForward = () => {
        return children.length > maxNumberOfVisibleCards && index + 1 <= children.length - maxNumberOfVisibleCards
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
          setMaxNumberOfVisibleCards(calculateMaxNumberOfVisibleCards())
          setCarouselPosition(calculateFixedPosition(index))
    }, []);  

    useEffect(() => { 
        setWindowJustification(
            { justifyContent : children.length > maxNumberOfVisibleCards ? "flex-start" : "center" }
        )
    }, [maxNumberOfVisibleCards, children])

    useEffect(() => { setCarouselTranformation({ transform : `translateX(${ carouselPosition }px)` }) 
    }, [ carouselPosition])


    return (
        <div className="carousel">
            <Arrow action={() => moveBackward()} direction="backward" clickability={isAllowedToMoveBackward()}/>
            <div className="carousel-window">
                <div className="carousel" style={{ ...carouselTranformation, ...windowJustification }} 
                        onTouchStart={ handleTouchStart } onTouchMove={ handleTouchMove } 
                        onTouchEnd={ handleTouchEnd } >{
                            children.map(child => (
                                <div key={++countChildren} className="carousel-card">
                            { child }
                        </div>
                    ))
                }
                </div>
            </div>
            <Arrow action={() => moveForward()} direction="forward" clickability={isAllowedToMoveForward()}/>
        </div>
    );
}

export default Carousel;