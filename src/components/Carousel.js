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
        console.log("index: " + index)
        console.log(maxNumberOfVisibleCards)
        console.log(getCurrentCardWidth());
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
    }, []);  

    useEffect(() => { 
        setWindowJustification(
            { justifyContent : children.length > maxNumberOfVisibleCards ? "flex-start" : "center" }
        )
    }, [maxNumberOfVisibleCards, children])

    useEffect(() => { setCarouselTranformation({ transform : `translateX(${ carouselPosition }px)` }) 
    }, [ carouselPosition])


    return (
        <div className="carousel-control">
            <div className="carousel-window">
                <div className="carousel" style={{ ...carouselTranformation, ...windowJustification }} 
                        onTouchStart={ handleTouchStart } onTouchMove={ handleTouchMove } 
                        onTouchEnd={ handleTouchEnd } >{
                    children.map(child => (
                        <div key={++countChildren} className="carousel-card">
                            { child }
                        </div>
                    ))
                }</div>
            </div>


            { isAllowedToMoveBackward() ? <div className="control-button previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            fill="currentColor" className="bi bi-chevron-compact-left clickable" viewBox="0 0 16 16"
                            onClick={ moveBackward }>
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                    </svg>
                </div> : 
                <div className="control-button previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            fill="currentColor" className="bi bi-chevron-compact-left nonClickable" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                    </svg>
                </div>
            }
            { isAllowedToMoveForward() ?
                <div className="control-button next">
                    <svg class="next" xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            fill="currentColor" className="bi bi-chevron-compact-right clickable" viewBox="0 0 16 16" 
                            onClick={ moveForward }>
                        <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>
                </div> : 
                <div className="control-button next">
                    <svg class="next" xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            fill="currentColor" className="bi bi-chevron-compact-right nonClickable" viewBox="0 0 16 16">
                        <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>
                </div>

            }
        </div>
    );
}

export default Carousel;