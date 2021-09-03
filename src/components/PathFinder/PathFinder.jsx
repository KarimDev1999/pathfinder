import React, { useRef, useState, useEffect } from 'react'
import './PathFinder.css'
import classnames from 'classnames'


const matrix = new Array(30).fill(null).map(_ => new Array(64).fill(1))
const centralRow = Math.floor(matrix.length / 2)
const centralColumn = Math.floor(matrix[0].length / 2)

const PathFinder = ({ isSearching, currentAlgorithm, searchHelper }) => {
    const [start, setStart] = useState([centralRow, centralColumn - 10])
    const [dest, setDest] = useState([centralRow, centralColumn + 10])
    const matrixRef = useRef()
    const mouseMoveRef = useRef()


    useEffect(() => {
        if (start[0] !== centralRow || start[1] !== centralColumn - 10) {
            let allSquares = document.querySelectorAll('.square');
            allSquares.forEach(s => {
                s.classList.remove('path', 'visited', 'visitedNoAnimation')
            })
            searchHelper(currentAlgorithm, false)
        }
    }, [start, dest])


    const handleMouseDown = (e) => {
        e.preventDefault()
        if (!isSearching) {
            if (e.target.getAttribute('data-start')) {
                mouseMoveRef.current = (e) => {
                    setStart([+e.target.getAttribute('y'), +e.target.getAttribute('x')])
                }
                matrixRef.current.addEventListener('mousemove', mouseMoveRef.current)
            }
            else if (e.target.getAttribute('data-dest')) {
                mouseMoveRef.current = (e) => {
                    setDest([+e.target.getAttribute('y'), +e.target.getAttribute('x')])
                }
                matrixRef.current.addEventListener('mousemove', mouseMoveRef.current)
            }
            else if (e.button === 0) {
                let currentSquare = e.target;
                currentSquare.classList.remove('visited', 'visitedNoAnimation', 'path')
                currentSquare.classList.add('wall')
                mouseMoveRef.current = (e) => {
                    if (currentSquare !== e.target && (!e.target.getAttribute('data-start') && !e.target.getAttribute('data-dest'))) {
                        currentSquare = e.target;
                        currentSquare.classList.remove('visited', 'visitedNoAnimation', 'path')
                        currentSquare.classList.add('wall')
                    }
                }
                matrixRef.current.addEventListener('mousemove', mouseMoveRef.current)
            }
        }
    }

    return (
        <>

            <div ref={matrixRef} style={{ width: '100vw', height: '900px', display: 'flex', flexWrap: 'wrap' }} className="App">
                {
                    matrix.map((row, rowIdx) => row.map((column, columnIdx) => <div
                        onMouseDown={(e) => handleMouseDown(e)}
                        data-start={columnIdx === start[1] && rowIdx === start[0] ? true : undefined}
                        data-dest={rowIdx === dest[0] && columnIdx === dest[1] ? true : undefined}
                        onMouseUp={() => matrixRef.current.removeEventListener('mousemove', mouseMoveRef.current)}
                        key={rowIdx + columnIdx}
                        x={columnIdx}
                        y={rowIdx}
                        className={classnames('square',
                            {
                                'start': start[0] === rowIdx && start[1] === columnIdx,
                            },
                            {
                                'dest': dest[0] === rowIdx && dest[1] === columnIdx,
                            }
                        )}
                    >
                    </div>
                    ))
                }
            </div>
        </>
    )
}

export default PathFinder
