import React, { Component } from 'react'
import './App.css'
import driving from './images/driving.png'
import face from './images/face.jpg'
import kim from './images/kim.jpg'
import trump from './images/trump.jpg'
import mcdonalds from './images/mcdonalds.png'
import burger from './images/burger.jpg'
import man from './images/man.jpg'
import vegan from './images/vegans.jpg'
import mona from './images/mona.jpg'
import rainbow from './images/rainbow.jpg'
import rainbow2 from './images/rainbow2.jpg'
import trolli from './images/trolli.jpg'
import bird from './images/bird.jpg'
import flowers from './images/flowers.jpg'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageWidth: null,
      imageHeight: null,
      currImage: burger
    }
    this.createArt = this.createArt.bind(this)
  }

  componentDidMount() {
    if (this.state.imageHeight === null) {
      this.getImageHeightAndWidth()
    }
  }

  getImageHeightAndWidth() {
    const img = this.image
    img.onload = () => {
      this.setState({
        imageWidth: img.width,
        imageHeight: img.height
      })
    }
  }

  createArt() {
    if (this.startingPos.value >= 0 && this.endingPos.value > 0 && this.stretchAmt.value > 0 && this.lineWidth.value > 0) {

      const canvas = this.preCanvas
      const ctx = canvas.getContext("2d")
      const img = this.image
      const imageWidth = this.state.imageWidth
      const imageHeight = this.state.imageHeight
      canvas.width = imageWidth
      canvas.height = imageHeight
      ctx.drawImage(img, 0, 0, imageWidth, imageHeight)
      const finishedCanvas = this.finishedCanvas
      const context = finishedCanvas.getContext("2d")
      const stretchAmt = this.stretchAmt.value
      const startingPos = this.startingPos.value
      const endingPos = this.endingPos.value
      finishedCanvas.width = stretchAmt * (endingPos - startingPos)
      finishedCanvas.height = imageHeight

      var iter = 0

      for (var i = startingPos; i < endingPos; i++) {
        
        const pixelsR = []
        const pixelsG = []
        const pixelsB = []

        for (var j = 0; j < imageHeight; j++) {
          var imgData = ctx.getImageData(i, j, 1, 1)
          pixelsR.push(imgData.data[0])
          pixelsG.push(imgData.data[1])
          pixelsB.push(imgData.data[2])
        }

        var lineWidth = parseInt(this.lineWidth.value)

        context.lineWidth = lineWidth

        for (var k = 0; k < imageHeight; k+=lineWidth) {
          context.strokeStyle = `rgb(${pixelsR[k]}, ${pixelsG[k]}, ${pixelsB[k]})`
          context.beginPath()
          context.moveTo(iter * (stretchAmt), k + .5)
          context.lineTo((iter+1) * stretchAmt, k + .5)
          context.stroke()
        }
        iter++
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="parameters">
          <img className="curr-image" src={this.state.currImage} /><br/>
          {this.state.imageWidth} x {this.state.imageHeight}<br/>
          Starting x coordinate:&nbsp;
          <input ref={(node) => this.startingPos = node} /><br/>
          Ending x coordinate:&nbsp;
          <input ref={(node) => this.endingPos = node} /><br/>
          Stretch width:&nbsp;
          <input ref={(node) => this.stretchAmt = node} /><br/>
          Line width:&nbsp;
          <input ref={(node) => this.lineWidth = node} /><br/>
          <button onClick={this.createArt}>Create Image</button>
        </div>
        <br/>
        <div>
          <canvas ref={(node) => this.preCanvas = node} className="hidden" />
          <img ref={(node) => this.image = node} src={this.state.currImage} className="hidden" />
          <canvas ref={(node) => this.finishedCanvas = node} />
        </div>
      </div>
    )
  }
}

export default App
