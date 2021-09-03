import { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PathFinder from './components/PathFinder/PathFinder'
import WaveSpreading from './components/WaveSpreading/WaveSpreading'
import Header from './components/Header/Header'


const constructPath = (n, dest, path) => {
  let c = n.prev
  path.push(dest)
  while (c) {
    path.push(c.node)
    c = c.prev
  }
  let tmp = path.reverse()
  return tmp
}

const searchHelper = (algorithm, withAnimations, setIsSearching) => {
  console.log()
  const path = []
  let start = document.querySelector(`[data-start=true]`)
  let dest = document.querySelector(`[data-dest=true]`)
  let visited = new Set();
  let startNode = {
    node: start,
    prev: null
  }
  let dataStructure = [startNode]
  let inc = 0;
  while (dataStructure.length > 0) {
    let n;
    switch (algorithm) {
      case 'dfs': {
        n = dataStructure.pop()
        break
      }
      case 'bfs': {
        n = dataStructure.shift()
        break
      }
      default: {
        return
      }
    }
    if (!visited.has(n.node)) {
      visited.add(n.node)
      let nY = +n.node.getAttribute('y')
      let nX = +n.node.getAttribute('x')
      if (withAnimations) {
        setTimeout(() => {
          if (n.node === dest) {
            let finalPath = constructPath(n, dest, path)
            for (let i = 0; i < finalPath.length; i++) {
              setTimeout(() => {
                i === finalPath.length - 1 && setIsSearching(false)
                path[i].classList.add('path')
              }, i * 10)
            }
          }
          !n.node.classList.value.includes('start') && !n.node.classList.value.includes('dest') && n.node.classList.add('visited')
        }, 10 * ++inc)
      }
      else {
        if (n.node === dest) {
          let finalPath = constructPath(n, dest, path)
          for (let i = 0; i < finalPath.length; i++) {
            path[i].classList.add('path')
          }
        }
        !n.node.classList.value.includes('start') && !n.node.classList.value.includes('dest') && n.node.classList.add('visitedNoAnimation')
      }

      let neighbors = [
        document.querySelector(`[y="${nY}"][x="${nX - 1}"]`),
        document.querySelector(`[y="${nY}"][x="${nX + 1}"]`),
        document.querySelector(`[y="${nY - 1}"][x="${nX}"]`),
        document.querySelector(`[y="${nY + 1}"][x="${nX}"]`),
      ].filter(n => n && !n.classList.value.includes('wall')).map(node => {
        return {
          node: node,
          prev: n
        }
      })
      if (n.node === dest) {
        break
      }
      dataStructure.push(...neighbors)
    }
  }
}

function App() {
  const [currentAlgorithm, setCurrentAlgorithm] = useState(null);
  const [isSearching, setIsSearching] = useState(null);

  const dfs = () => {
    setCurrentAlgorithm('dfs')
    setIsSearching(true)
    searchHelper('dfs', true, setIsSearching)
  }


  const bfs = () => {
    setCurrentAlgorithm('bfs')
    setIsSearching(true)
    searchHelper('bfs', true, setIsSearching)
  }


  const reset = () => {
    setCurrentAlgorithm(null)
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(s => {
      s.classList.remove('path', 'visited', 'visitedNoAnimation', 'wall')
    })
  }


  return (
    <>
      <BrowserRouter>
        <Header reset={reset} bfs={bfs} dfs={dfs} />
        <Switch>
          <Route exact path='/' render={() => <Redirect to='pathfinder' />} />
          <Route path='/wave' render={() => <WaveSpreading />} />
          <Route path='/pathfinder' render={() => <PathFinder isSearching={isSearching} currentAlgorithm={currentAlgorithm} searchHelper={searchHelper} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
