import React from 'react'
import './WaveSpreading.css'
const MATRIX_VALUE = 25
const matrix = new Array(MATRIX_VALUE).fill(null).map(_ => new Array(MATRIX_VALUE).fill(1))

const aggregateMatrix = () => {
    let middle = Math.floor(MATRIX_VALUE / 2)
    let queue = [[[middle, middle]]] // [[[y,x], [y,x], [y,x], [y,x]]]
    let visited = new Set()
    let inc = 1
    while (inc <= MATRIX_VALUE && queue.length > 0) {
        let neighbors = queue.shift()
        // eslint-disable-next-line no-loop-func
        neighbors.forEach(n => {
            if (matrix[n[0]]) {
                if ((matrix[n[0]][n[1]] === 1) && (n[0] !== middle || n[1] !== middle)) {
                    matrix[n[0]][n[1]] = inc
                }
            }
        })
        let nextNeighbors = neighbors.reduce((p, c) => {
            let idxs = [
                [c[0] - 1, c[1]],
                [c[0], c[1] - 1],
                [c[0] + 1, c[1]],
                [c[0], c[1] + 1],
            ].filter(el => !visited.has(el.toString()) && (el[0] <= 25 && el[0] >= 0 && el[1] <= 25 && el[1] >= 0))
            idxs.forEach(el => {
                visited.add(el.toString())
            })
            p.push(...idxs)
            return p
        }, [])
        inc++
        queue.push(nextNeighbors)
    }
    return matrix
}



const WaveSpreading = () => {
    const rhombSpread = () => {
        for (let i = 1; i <= MATRIX_VALUE; i++) {
            let nodes = document.querySelectorAll(`[wave="${i}"]`)
            nodes.forEach((n) => {
                setTimeout(() => {
                    let waveNode = document.createElement('div')
                    waveNode.classList.add('wave')
                    n.appendChild(waveNode)
                    setTimeout(() => {
                        n.classList.remove('wave')
                    }, i * 300)
                }, i * 250)
            })
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'calc(100vw - 40px)', height: '100vh' }}>
            <button className='button' style={{ marginBottom: '20px', color: 'rgba(75, 114, 241, 0.801)' }} onClick={rhombSpread}>spread</button>
            <div style={{ width: '750px', height: '750px', display: 'flex', flexWrap: 'wrap', margin: '0 auto' }} className="App">
                {
                    aggregateMatrix().map((row, rowIdx) => row.map((column, columnIdx) => <div
                        wave={column}
                        key={rowIdx + columnIdx}
                        x={columnIdx}
                        y={rowIdx}
                        className={`square`}>

                    </div>))
                }
            </div>
        </div>
    )
}

export default WaveSpreading
