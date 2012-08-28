(function(global) {

  global.quickswf.SWF = SWF;
  var mStructs = global.quickswf.structs;

  /**
   * The data structure that holds all data
   * about an SWF file.
   * @constructor
   * @class {quickswf.SWF}
   */
  function SWF(pVersion, pWidth, pHeight, pFrameRate, pFrameCount) {
    this.version = pVersion;
    this.width = pWidth;
    this.height = pHeight;
    this.frameRate = pFrameRate;
    this.frameCount = pFrameCount;
    this.rootSprite = new mStructs.Sprite();
    this.dictionary = new Object();
  }


}(this));