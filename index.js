'use strict'
require('@tensorflow/tfjs-node')
const tf = require('@tensorflow/tfjs')
const cost = require('./cost')
const { loadImage } = require('./util')
const { getLayerResult } = require('./layer')

;(async function () {
  const vgg19 = await tf.loadModel(`file://${__dirname}/vgg19-tensorflowjs-model/model/model.json`)

  const currentImage = await loadImage('./images/louvre.jpg')
  const styleImage = await loadImage('./images/monet_800600.jpg')

  const rawActivation = getLayerResult(vgg19, currentImage, 'block4_conv2')
  const generatedActivation = getLayerResult(vgg19, styleImage, 'block4_conv2')
})(console.error)