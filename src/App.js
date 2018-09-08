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
import drivingSmall from './images/drivingSmall.jpg'
import pineapple from './images/pineapple.jpg'
import birdMod from './images/birdMod.png'
import eagles from './images/eagles.jpg'
import vapor from './images/vapor.png'
import citysun from './images/citysunset.JPG'

// TODO save, y coordinates

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageWidth: null,
      imageHeight: null,
      currImage: eagles
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
    console.log(img)
    img.onload = () => {
      this.setState({
        imageWidth: img.width,
        imageHeight: img.height
      })
    }
  }

  createArt() {
    if (this.startingPos.value >= 0 && this.endingPos.value > 0 && this.stretchAmt.value > 0 && this.lineWidth.value > 0) {

      const resizeMultiplier = this.resizeMultiplier.value

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
      const stretchAmt = this.stretchAmt.value * resizeMultiplier
      const startingPos = this.startingPos.value
      const endingPos = this.endingPos.value
      finishedCanvas.width = stretchAmt * (endingPos - startingPos)
      finishedCanvas.height = imageHeight * resizeMultiplier

      var iter = 0

      if (this.backgroundColor.value !== "") {
        context.strokeStyle = this.backgroundColor.value
        context.lineWidth = finishedCanvas.height
        context.beginPath()
        context.moveTo(0, .5 * finishedCanvas.height)
        context.lineTo(finishedCanvas.width, .5 * finishedCanvas.height)
        context.stroke()
      }

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
        var angleConstant = this.angleConstant.value * resizeMultiplier

        context.lineWidth = lineWidth * resizeMultiplier
        console.log(lineWidth/2)
        for (var k = (lineWidth === 1 ? 1 : Math.floor(lineWidth/2)); k < imageHeight; k+=lineWidth) {
          context.strokeStyle = `rgb(${pixelsR[k]}, ${pixelsG[k]}, ${pixelsB[k]})`
          context.beginPath()
          context.moveTo(iter * (stretchAmt), (k * resizeMultiplier + .5) + (angleConstant * iter)) //(.5 * lineWidth))
          context.lineTo((iter+1) * stretchAmt, k  * resizeMultiplier + .5)
          context.stroke()
        }
        iter++
      }
    }
  }

  configureParametes(i) {
    if (i === 0) {
      this.startingPos.value = 0
      this.endingPos.value = 20
      this.stretchAmt.value = 30
      this.lineWidth.value = 30
      this.angleConstant.value = 10
    }
    if (i === 1) {
      this.startingPos.value = 0
      this.endingPos.value = 500
      this.stretchAmt.value = 10
      this.lineWidth.value = 2
      this.angleConstant.value = -2
    }
    if (i === 2) {
      this.startingPos.value = 0
      this.endingPos.value = 9
      this.stretchAmt.value = 100
      this.lineWidth.value = 3
      this.angleConstant.value = 10
    }
  }

  setImage(i) {
    if (i === 0) {
      this.setState({
        currImage: driving
      })
    }
    if (i === 1) {
      this.setState({
        currImage: face 
      })
    }
    if (i === 2) {
      this.setState({
        currImage: kim
      })
    }
    if (i === 3) {
      this.setState({
        currImage: trump 
      })
    }
    if (i === 4) {
      this.setState({
        currImage: mcdonalds 
      })
    }
    if (i === 5) {
      this.setState({
        currImage: burger 
      })
    }
    if (i === 6) {
      this.setState({
        currImage: man 
      })
    }
    if (i === 7) {
      this.setState({
        currImage: vegan 
      })
    }
    if (i === 8) {
      this.setState({
        currImage: mona 
      })
    }
    if (i === 9) {
      this.setState({
        currImage: rainbow 
      })
    }
    if (i === 10) {
      this.setState({
        currImage: rainbow2 
      })
    }
    if (i === 11) {
      this.setState({
        currImage: trolli 
      })
    }
    if (i === 12) {
      this.setState({
        currImage: bird 
      })
    }
    if (i === 13) {
      this.setState({
        currImage: flowers 
      })
    }
    if (i === 14) {
      this.setState({
        currImage: drivingSmall
      })
    }
    if (i === 15) {
      this.setState({
        currImage: pineapple 
      })
    }
    if (i === 16) {
      this.setState({
        currImage: birdMod 
      })
    }
    if (i === 17) {
      this.setState({
        // A, 680, 700
        currImage: eagles 
      })
    }
    if (i === 18) {
      this.setState({
        currImage: vapor 
      })
    }
    if (i === 19) {
      // 400,409,100,3,10,black
      this.setState({
        currImage: citysun 
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="parameters">
          <div className="button-container">
            <button onClick={() => this.setImage(0)}>driving</button>
            <button onClick={() => this.setImage(1)}>face</button>
            <button onClick={() => this.setImage(2)}>kim</button>
            <button onClick={() => this.setImage(3)}>trump</button>
            <button onClick={() => this.setImage(4)}>mcdonalds</button>
            <button onClick={() => this.setImage(5)}>burger</button>
            <button onClick={() => this.setImage(6)}>man</button>
            <button onClick={() => this.setImage(7)}>vegan</button>
            <button onClick={() => this.setImage(8)}>mona</button>
            <button onClick={() => this.setImage(9)}>rainbow</button>
            <button onClick={() => this.setImage(10)}>rainbow2</button>
            <button onClick={() => this.setImage(11)}>trolli</button>
            <button onClick={() => this.setImage(12)}>bird</button>
            <button onClick={() => this.setImage(13)}>flowers</button>
            <button onClick={() => this.setImage(14)}>driving2</button>
            <button onClick={() => this.setImage(15)}>pineapple</button>
            <button onClick={() => this.setImage(16)}>birdMod</button>
            <button onClick={() => this.setImage(17)}>eagles</button>
            <button onClick={() => this.setImage(18)}>vapor</button>
            <button onClick={() => this.setImage(19)}>citysunset</button>
          </div>
          <div className="image-container">
            <img className="curr-image" src={this.state.currImage} /><br/>
            {this.state.imageWidth} x {this.state.imageHeight}<br/>
            <hr/>
          </div>
          <div className="parameter-container">
            <label>Starting x coordinate:</label>
            <input ref={(node) => this.startingPos = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Ending x coordinate:</label>
            <input ref={(node) => this.endingPos = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Stretch width:</label>
            <input ref={(node) => this.stretchAmt = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Line width:</label>
            <input ref={(node) => this.lineWidth = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Angle constant:</label>
            <input ref={(node) => this.angleConstant = node} defaultValue="0"/>
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Resize Multiplier:</label>
            <input ref={(node) => this.resizeMultiplier = node} defaultValue="1" />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Background Color:</label>
            <input className="background-color-input" ref={(node) => this.backgroundColor = node} />
          </div>
          <br/>
          <div className="configure-buttons">
            <span>Presets:</span><br/>
            <button onClick={() => this.configureParametes(0)}>A</button>
            <button onClick={() => this.configureParametes(1)}>B</button>
            <button onClick={() => this.configureParametes(2)}>C</button>
          </div>
          <button onClick={this.createArt}>Create Image</button><br/>
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
