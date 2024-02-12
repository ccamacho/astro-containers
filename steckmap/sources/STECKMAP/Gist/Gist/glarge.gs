# Gist boxed.gs drawing style
# $Id: boxed.gs,v 1.1 1993/08/27 17:08:43 munro Exp $

# A single coordinate system on a portrait page with frame
# Legends: two columns below viewport, no contour legends

# See work.gs for description of meanings

landscape= 1

# The default coordinate system template is identical to work.gs
default = {
  legend= 0,

  viewport= {  0.1, 0.95, 0.15, 0.7 },

  ticks= {

    horiz= {
      nMajor= 5.0,  nMinor= 25.0,  logAdjMajor= 1.2,  logAdjMinor= 1.2,
      nDigits= 3,  gridLevel= 1,  flags= 0x02b,
      tickOff= 0.0007,  labelOff= 0.010,
#      tickLen= { 0.009, 0.006, 0.004, 0.0027, 0.0018 },
      tickLen= { 0.018, 0.016, 0.008, 0.0054, 0.0036 },
      tickStyle= { color= -2,  type= 1,  width= 2.0 },
      gridStyle= { color= -2,  type= 3,  width= 2.0 },
      textStyle= { color= -2,  font= 0x09,  height= 0.0282,
        orient= 0,  alignH= 0,  alignV= 0,  opaque= 0 },
      xOver= 0.395,  yOver= 0.370 },

    vert= {
      nMajor= 5.0,  nMinor= 25.0,  logAdjMajor= 1.2,  logAdjMinor= 1.2,
      nDigits= 4,  gridLevel= 1,  flags= 0x02b,
      tickOff= 0.0007,  labelOff= 0.006,
#      tickLen= { 0.009, 0.006, 0.004, 0.0027, 0.0018 },
      tickLen= { 0.018, 0.016, 0.008, 0.0054, 0.0036 },
      tickStyle= { color= -2,  type= 1,  width= 2.0 },
      gridStyle= { color= -2,  type= 3,  width= 2.0 },
      textStyle= { color= -2,  font= 0x09,  height= 0.0282,
        orient= 0,  alignH= 0,  alignV= 0,  opaque= 0 },
      xOver= 0.150,  yOver= 0.370 },

    frame= 1,
    frameStyle= { color= -2,  type= 1,  width= 5.0 }}}

system= { legend= "System 0" }

legends= {
  x= 0.04698,  y= 0.360,  dx= 0.3758,  dy= 0.0,
  textStyle= { color= -2,  font= 0x00,  height= 0.0156,
    orient= 0,  alignH= 1,  alignV= 1,  opaque= 0 },
  nchars= 36,  nlines= 20,  nwrap= 2 }

clegends= {
  x= 0.6182,  y= 0.8643,  dx= 0.0,  dy= 0.0,
  textStyle= { color= -2,  font= 0x00,  height= 0.0156,
    orient= 0,  alignH= 1,  alignV= 1,  opaque= 0 },
  nchars= 14,  nlines= 28,  nwrap= 1 }

