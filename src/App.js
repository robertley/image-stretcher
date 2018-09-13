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

// TODO 
// save
// y coordinates
// click on image for coordinates
// color color picker
// upload photo

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
    if (this.startingXPos.value >= 0 && this.endingXPos.value > 0 && this.stretchAmt.value > 0 && this.strokeHeight.value > 0) {

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
      const startingXPos = this.startingXPos.value
      const endingXPos = this.endingXPos.value
      finishedCanvas.width = this.canvasWidth.value === "" ? stretchAmt * (endingXPos - startingXPos) : this.canvasWidth.value
      finishedCanvas.height = this.canvasHeight.value === "" ? imageHeight * resizeMultiplier : this.canvasHeight.value

      var iter = 0

      if (this.backgroundColor.value !== "") {
        context.strokeStyle = this.backgroundColor.value
        context.lineWidth = finishedCanvas.height
        context.beginPath()
        context.moveTo(0, .5 * finishedCanvas.height)
        context.lineTo(finishedCanvas.width, .5 * finishedCanvas.height)
        context.stroke()
      }

      for (var i = startingXPos; i < endingXPos; i++) {
        
        const pixelsR = []
        const pixelsG = []
        const pixelsB = []

        for (var j = 0; j < imageHeight; j++) {
          var imgData = ctx.getImageData(i, j, 1, 1)
          pixelsR.push(imgData.data[0])
          pixelsG.push(imgData.data[1])
          pixelsB.push(imgData.data[2])
        }

        var strokeHeight = parseInt(this.strokeHeight.value)
        var angleConstant = this.angleConstant.value * resizeMultiplier

        context.lineWidth = strokeHeight * resizeMultiplier
        console.log(strokeHeight/2)
        for (var k = (strokeHeight === 1 ? 1 : Math.floor(strokeHeight/2)); k < imageHeight; k+=strokeHeight) {
          context.strokeStyle = `rgb(${pixelsR[k]}, ${pixelsG[k]}, ${pixelsB[k]})`
          context.beginPath()
          context.moveTo(iter * (stretchAmt), (k * resizeMultiplier + .5) + (angleConstant * iter)) //(.5 * strokeHeight))
          context.lineTo((iter+1) * stretchAmt, k  * resizeMultiplier + .5)
          context.stroke()
        }
        iter++
      }
    }
  }

  configureParametes(i) {
    this.startingXPos.value = 0
    if (i === 0) {
      this.endingXPos.value = 20
      this.stretchAmt.value = 30
      this.strokeHeight.value = 30
      this.angleConstant.value = 10
    }
    if (i === 1) {
      this.endingXPos.value = 500
      this.stretchAmt.value = 10
      this.strokeHeight.value = 2
      this.angleConstant.value = -2
    }
    if (i === 2) {
      this.endingXPos.value = 9
      this.stretchAmt.value = 100
      this.strokeHeight.value = 3
      this.angleConstant.value = 10
    }
    if (i === 3) {
      this.endingXPos.value = 10
      this.stretchAmt.value = 100
      this.strokeHeight.value = 100
      this.angleConstant.value = 10
    }
    if (i === 4) {
      this.endingXPos.value = 10
      this.stretchAmt.value = 50
      this.strokeHeight.value = 50
      this.angleConstant.value = 1000
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
      // B, #001a00
      this.setState({
        currImage: birdMod 
      })
    }
    if (i === 17) {
      // A, 680, 700
      this.setState({
        currImage: eagles 
      })
    }
    if (i === 18) {
      // D, 503, 513, blue
      this.setState({
        currImage: vapor 
      })
    }
    if (i === 19) {
      // C, 400,409 black
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
            <input ref={(node) => this.startingXPos = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Ending x coordinate:</label>
            <input ref={(node) => this.endingXPos = node} />
          </div>

          <hr/>
          <div className="parameter-container">
            <label>Stretch width:</label>
            <input ref={(node) => this.stretchAmt = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Stroke Height:</label>
            <input ref={(node) => this.strokeHeight = node} />
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
          {/* <hr/>
          <div className="parameter-container">
            <label>Starting y coordinate:</label>
            <input ref={(node) => this.startingYPos = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Ending y coordinate:</label>
            <input ref={(node) => this.endingYPos = node} />
          </div> */}
          <hr/>
          <div className="parameter-container">
            <label>Forced Canvas Width:</label>
            <input ref={(node) => this.canvasWidth = node} />
          </div>
          <hr/>
          <div className="parameter-container">
            <label>Forced Canvas Height:</label>
            <input ref={(node) => this.canvasHeight = node} />
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
            <button onClick={() => this.configureParametes(3)}>D</button>
            <button onClick={() => this.configureParametes(4)}>E</button>
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
