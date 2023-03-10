/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2022 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */
!(function webpackUniversalModuleDefinition(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
    ? define('pdfjs-dist/image_decoders/pdf.image_decoders', [], t)
    : typeof exports === 'object'
    ? (exports['pdfjs-dist/image_decoders/pdf.image_decoders'] = t())
    : (e['pdfjs-dist/image_decoders/pdf.image_decoders'] = e.pdfjsImageDecoders = t())
})(globalThis, () =>
  (() => {
    const e = [
      ,
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.VerbosityLevel =
          t.Util =
          t.UnknownErrorException =
          t.UnexpectedResponseException =
          t.UNSUPPORTED_FEATURES =
          t.TextRenderingMode =
          t.StreamType =
          t.RenderingIntentFlag =
          t.PermissionFlag =
          t.PasswordResponses =
          t.PasswordException =
          t.PageActionEventType =
          t.OPS =
          t.MissingPDFException =
          t.LINE_FACTOR =
          t.LINE_DESCENT_FACTOR =
          t.InvalidPDFException =
          t.ImageKind =
          t.IDENTITY_MATRIX =
          t.FormatError =
          t.FontType =
          t.FeatureTest =
          t.FONT_IDENTITY_MATRIX =
          t.DocumentActionEventType =
          t.CMapCompressionType =
          t.BaseException =
          t.AnnotationType =
          t.AnnotationStateModelType =
          t.AnnotationReviewState =
          t.AnnotationReplyType =
          t.AnnotationMode =
          t.AnnotationMarkedState =
          t.AnnotationFlag =
          t.AnnotationFieldFlag =
          t.AnnotationEditorType =
          t.AnnotationEditorPrefix =
          t.AnnotationEditorParamsType =
          t.AnnotationBorderStyleType =
          t.AnnotationActionEventType =
          t.AbortException =
            void 0
        t.arrayByteLength = arrayByteLength
        t.arraysToBytes = function arraysToBytes(e) {
          const t = e.length
          if (t === 1 && e[0] instanceof Uint8Array) return e[0]
          let n = 0
          for (let r = 0; r < t; r++) n += arrayByteLength(e[r])
          let r = 0
          const i = new Uint8Array(n)
          for (let n = 0; n < t; n++) {
            let t = e[n]
            t instanceof Uint8Array ||
              (t = typeof t === 'string' ? stringToBytes(t) : new Uint8Array(t))
            const o = t.byteLength
            i.set(t, r)
            r += o
          }
          return i
        }
        t.assert = function assert(e, t) {
          e || unreachable(t)
        }
        t.bytesToString = function bytesToString(e) {
          ;(typeof e === 'object' && e !== null && void 0 !== e.length) ||
            unreachable('Invalid argument for bytesToString')
          const t = e.length
          const n = 8192
          if (t < n) return String.fromCharCode.apply(null, e)
          const r = []
          for (let i = 0; i < t; i += n) {
            const o = Math.min(i + n, t)
            const s = e.subarray(i, o)
            r.push(String.fromCharCode.apply(null, s))
          }
          return r.join('')
        }
        t.createPromiseCapability = function createPromiseCapability() {
          const e = Object.create(null)
          let t = !1
          Object.defineProperty(e, 'settled', { get: () => t })
          e.promise = new Promise(function (n, r) {
            e.resolve = function (e) {
              t = !0
              n(e)
            }
            e.reject = function (e) {
              t = !0
              r(e)
            }
          })
          return e
        }
        t.createValidAbsoluteUrl = function createValidAbsoluteUrl(e) {
          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          if (!e) return null
          try {
            if (n && typeof e === 'string') {
              if (n.addDefaultProtocol && e.startsWith('www.')) {
                const t = e.match(/\./g)
                t && t.length >= 2 && (e = `http://${e}`)
              }
              if (n.tryConvertEncoding)
                try {
                  e = stringToUTF8String(e)
                } catch (e) {}
            }
            const r = t ? new URL(e, t) : new URL(e)
            if (_isValidProtocol(r)) return r
          } catch (e) {}
          return null
        }
        t.escapeString = function escapeString(e) {
          return e.replace(/([()\\\n\r])/g, (e) =>
            e === '\n' ? '\\n' : e === '\r' ? '\\r' : `\\${e}`
          )
        }
        t.getModificationDate = function getModificationDate() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date()
          const t = [
            e.getUTCFullYear().toString(),
            (e.getUTCMonth() + 1).toString().padStart(2, '0'),
            e.getUTCDate().toString().padStart(2, '0'),
            e.getUTCHours().toString().padStart(2, '0'),
            e.getUTCMinutes().toString().padStart(2, '0'),
            e.getUTCSeconds().toString().padStart(2, '0')
          ]
          return t.join('')
        }
        t.getVerbosityLevel = function getVerbosityLevel() {
          return i
        }
        t.info = function info(e) {
          i >= r.INFOS && console.log(`Info: ${e}`)
        }
        t.isArrayBuffer = function isArrayBuffer(e) {
          return typeof e === 'object' && e !== null && void 0 !== e.byteLength
        }
        t.isArrayEqual = function isArrayEqual(e, t) {
          if (e.length !== t.length) return !1
          for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1
          return !0
        }
        t.isAscii = function isAscii(e) {
          return /^[\x00-\x7F]*$/.test(e)
        }
        t.isNum = function isNum(e) {
          return typeof e === 'number'
        }
        t.objectFromMap = function objectFromMap(e) {
          const t = Object.create(null)
          for (const [n, r] of e) t[n] = r
          return t
        }
        t.objectSize = function objectSize(e) {
          return Object.keys(e).length
        }
        t.setVerbosityLevel = function setVerbosityLevel(e) {
          Number.isInteger(e) && (i = e)
        }
        t.shadow = shadow
        t.string32 = function string32(e) {
          return String.fromCharCode((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e)
        }
        t.stringToBytes = stringToBytes
        t.stringToPDFString = function stringToPDFString(e) {
          if (e[0] >= '??') {
            let t
            e[0] === '??' && e[1] === '??'
              ? (t = 'utf-16be')
              : e[0] === '??' && e[1] === '??'
              ? (t = 'utf-16le')
              : e[0] === '??' && e[1] === '??' && e[2] === '??' && (t = 'utf-8')
            if (t)
              try {
                const n = new TextDecoder(t, { fatal: !0 })
                const r = stringToBytes(e)
                return n.decode(r)
              } catch (e) {
                warn(`stringToPDFString: "${e}".`)
              }
          }
          const t = []
          for (let n = 0, r = e.length; n < r; n++) {
            const r = a[e.charCodeAt(n)]
            t.push(r ? String.fromCharCode(r) : e.charAt(n))
          }
          return t.join('')
        }
        t.stringToUTF16BEString = function stringToUTF16BEString(e) {
          const t = ['????']
          for (let n = 0, r = e.length; n < r; n++) {
            const r = e.charCodeAt(n)
            t.push(String.fromCharCode((r >> 8) & 255), String.fromCharCode(255 & r))
          }
          return t.join('')
        }
        t.stringToUTF8String = stringToUTF8String
        t.unreachable = unreachable
        t.utf8StringToString = function utf8StringToString(e) {
          return unescape(encodeURIComponent(e))
        }
        t.warn = warn
        n(2)
        t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0]
        t.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0]
        t.LINE_FACTOR = 1.35
        t.LINE_DESCENT_FACTOR = 0.35
        t.RenderingIntentFlag = {
          ANY: 1,
          DISPLAY: 2,
          PRINT: 4,
          ANNOTATIONS_FORMS: 16,
          ANNOTATIONS_STORAGE: 32,
          ANNOTATIONS_DISABLE: 64,
          OPLIST: 256
        }
        t.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }
        t.AnnotationEditorPrefix = 'pdfjs_internal_editor_'
        t.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, INK: 15 }
        t.AnnotationEditorParamsType = {
          FREETEXT_SIZE: 1,
          FREETEXT_COLOR: 2,
          FREETEXT_OPACITY: 3,
          INK_COLOR: 11,
          INK_THICKNESS: 12,
          INK_OPACITY: 13
        }
        t.PermissionFlag = {
          PRINT: 4,
          MODIFY_CONTENTS: 8,
          COPY: 16,
          MODIFY_ANNOTATIONS: 32,
          FILL_INTERACTIVE_FORMS: 256,
          COPY_FOR_ACCESSIBILITY: 512,
          ASSEMBLE: 1024,
          PRINT_HIGH_QUALITY: 2048
        }
        t.TextRenderingMode = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4
        }
        t.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }
        t.AnnotationType = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26
        }
        t.AnnotationStateModelType = { MARKED: 'Marked', REVIEW: 'Review' }
        t.AnnotationMarkedState = { MARKED: 'Marked', UNMARKED: 'Unmarked' }
        t.AnnotationReviewState = {
          ACCEPTED: 'Accepted',
          REJECTED: 'Rejected',
          CANCELLED: 'Cancelled',
          COMPLETED: 'Completed',
          NONE: 'None'
        }
        t.AnnotationReplyType = { GROUP: 'Group', REPLY: 'R' }
        t.AnnotationFlag = {
          INVISIBLE: 1,
          HIDDEN: 2,
          PRINT: 4,
          NOZOOM: 8,
          NOROTATE: 16,
          NOVIEW: 32,
          READONLY: 64,
          LOCKED: 128,
          TOGGLENOVIEW: 256,
          LOCKEDCONTENTS: 512
        }
        t.AnnotationFieldFlag = {
          READONLY: 1,
          REQUIRED: 2,
          NOEXPORT: 4,
          MULTILINE: 4096,
          PASSWORD: 8192,
          NOTOGGLETOOFF: 16384,
          RADIO: 32768,
          PUSHBUTTON: 65536,
          COMBO: 131072,
          EDIT: 262144,
          SORT: 524288,
          FILESELECT: 1048576,
          MULTISELECT: 2097152,
          DONOTSPELLCHECK: 4194304,
          DONOTSCROLL: 8388608,
          COMB: 16777216,
          RICHTEXT: 33554432,
          RADIOSINUNISON: 33554432,
          COMMITONSELCHANGE: 67108864
        }
        t.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }
        t.AnnotationActionEventType = {
          E: 'Mouse Enter',
          X: 'Mouse Exit',
          D: 'Mouse Down',
          U: 'Mouse Up',
          Fo: 'Focus',
          Bl: 'Blur',
          PO: 'PageOpen',
          PC: 'PageClose',
          PV: 'PageVisible',
          PI: 'PageInvisible',
          K: 'Keystroke',
          F: 'Format',
          V: 'Validate',
          C: 'Calculate'
        }
        t.DocumentActionEventType = {
          WC: 'WillClose',
          WS: 'WillSave',
          DS: 'DidSave',
          WP: 'WillPrint',
          DP: 'DidPrint'
        }
        t.PageActionEventType = { O: 'PageOpen', C: 'PageClose' }
        t.StreamType = {
          UNKNOWN: 'UNKNOWN',
          FLATE: 'FLATE',
          LZW: 'LZW',
          DCT: 'DCT',
          JPX: 'JPX',
          JBIG: 'JBIG',
          A85: 'A85',
          AHX: 'AHX',
          CCF: 'CCF',
          RLX: 'RLX'
        }
        t.FontType = {
          UNKNOWN: 'UNKNOWN',
          TYPE1: 'TYPE1',
          TYPE1STANDARD: 'TYPE1STANDARD',
          TYPE1C: 'TYPE1C',
          CIDFONTTYPE0: 'CIDFONTTYPE0',
          CIDFONTTYPE0C: 'CIDFONTTYPE0C',
          TRUETYPE: 'TRUETYPE',
          CIDFONTTYPE2: 'CIDFONTTYPE2',
          TYPE3: 'TYPE3',
          OPENTYPE: 'OPENTYPE',
          TYPE0: 'TYPE0',
          MMTYPE1: 'MMTYPE1'
        }
        const r = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }
        t.VerbosityLevel = r
        t.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 }
        t.OPS = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotations: 78,
          endAnnotations: 79,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintJpegXObject: 82,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91
        }
        t.UNSUPPORTED_FEATURES = {
          unknown: 'unknown',
          forms: 'forms',
          javaScript: 'javaScript',
          signatures: 'signatures',
          smask: 'smask',
          shadingPattern: 'shadingPattern',
          font: 'font',
          errorTilingPattern: 'errorTilingPattern',
          errorExtGState: 'errorExtGState',
          errorXObject: 'errorXObject',
          errorFontLoadType3: 'errorFontLoadType3',
          errorFontState: 'errorFontState',
          errorFontMissing: 'errorFontMissing',
          errorFontTranslate: 'errorFontTranslate',
          errorColorSpace: 'errorColorSpace',
          errorOperatorList: 'errorOperatorList',
          errorFontToUnicode: 'errorFontToUnicode',
          errorFontLoadNative: 'errorFontLoadNative',
          errorFontBuildPath: 'errorFontBuildPath',
          errorFontGetPath: 'errorFontGetPath',
          errorMarkedContent: 'errorMarkedContent',
          errorContentSubStream: 'errorContentSubStream'
        }
        t.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 }
        let i = r.WARNINGS
        function warn(e) {
          i >= r.WARNINGS && console.log(`Warning: ${e}`)
        }
        function unreachable(e) {
          throw new Error(e)
        }
        function _isValidProtocol(e) {
          if (!e) return !1
          switch (e.protocol) {
            case 'http:':
            case 'https:':
            case 'ftp:':
            case 'mailto:':
            case 'tel:':
              return !0
            default:
              return !1
          }
        }
        function shadow(e, t, n) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !1
          })
          return n
        }
        const o = (function BaseExceptionClosure() {
          function BaseException(e, t) {
            this.constructor === BaseException && unreachable('Cannot initialize BaseException.')
            this.message = e
            this.name = t
          }
          BaseException.prototype = new Error()
          BaseException.constructor = BaseException
          return BaseException
        })()
        t.BaseException = o
        t.PasswordException = class PasswordException extends o {
          constructor(e, t) {
            super(e, 'PasswordException')
            this.code = t
          }
        }
        t.UnknownErrorException = class UnknownErrorException extends o {
          constructor(e, t) {
            super(e, 'UnknownErrorException')
            this.details = t
          }
        }
        t.InvalidPDFException = class InvalidPDFException extends o {
          constructor(e) {
            super(e, 'InvalidPDFException')
          }
        }
        t.MissingPDFException = class MissingPDFException extends o {
          constructor(e) {
            super(e, 'MissingPDFException')
          }
        }
        t.UnexpectedResponseException = class UnexpectedResponseException extends o {
          constructor(e, t) {
            super(e, 'UnexpectedResponseException')
            this.status = t
          }
        }
        t.FormatError = class FormatError extends o {
          constructor(e) {
            super(e, 'FormatError')
          }
        }
        t.AbortException = class AbortException extends o {
          constructor(e) {
            super(e, 'AbortException')
          }
        }
        function stringToBytes(e) {
          typeof e !== 'string' && unreachable('Invalid argument for stringToBytes')
          const t = e.length
          const n = new Uint8Array(t)
          for (let r = 0; r < t; ++r) n[r] = 255 & e.charCodeAt(r)
          return n
        }
        function arrayByteLength(e) {
          if (void 0 !== e.length) return e.length
          if (void 0 !== e.byteLength) return e.byteLength
          unreachable('Invalid argument for arrayByteLength')
        }
        t.FeatureTest = class FeatureTest {
          static get isLittleEndian() {
            return shadow(
              this,
              'isLittleEndian',
              (function isLittleEndian() {
                const e = new Uint8Array(4)
                e[0] = 1
                return new Uint32Array(e.buffer, 0, 1)[0] === 1
              })()
            )
          }

          static get isEvalSupported() {
            return shadow(
              this,
              'isEvalSupported',
              (function isEvalSupported() {
                try {
                  new Function('')
                  return !0
                } catch (e) {
                  return !1
                }
              })()
            )
          }

          static get isOffscreenCanvasSupported() {
            return shadow(
              this,
              'isOffscreenCanvasSupported',
              typeof OffscreenCanvas !== 'undefined'
            )
          }
        }
        const s = [...Array(256).keys()].map((e) => e.toString(16).padStart(2, '0'))
        class Util {
          static makeHexColor(e, t, n) {
            return `#${s[e]}${s[t]}${s[n]}`
          }

          static scaleMinMax(e, t) {
            let n
            if (e[0]) {
              if (e[0] < 0) {
                n = t[0]
                t[0] = t[1]
                t[1] = n
              }
              t[0] *= e[0]
              t[1] *= e[0]
              if (e[3] < 0) {
                n = t[2]
                t[2] = t[3]
                t[3] = n
              }
              t[2] *= e[3]
              t[3] *= e[3]
            } else {
              n = t[0]
              t[0] = t[2]
              t[2] = n
              n = t[1]
              t[1] = t[3]
              t[3] = n
              if (e[1] < 0) {
                n = t[2]
                t[2] = t[3]
                t[3] = n
              }
              t[2] *= e[1]
              t[3] *= e[1]
              if (e[2] < 0) {
                n = t[0]
                t[0] = t[1]
                t[1] = n
              }
              t[0] *= e[2]
              t[1] *= e[2]
            }
            t[0] += e[4]
            t[1] += e[4]
            t[2] += e[5]
            t[3] += e[5]
          }

          static transform(e, t) {
            return [
              e[0] * t[0] + e[2] * t[1],
              e[1] * t[0] + e[3] * t[1],
              e[0] * t[2] + e[2] * t[3],
              e[1] * t[2] + e[3] * t[3],
              e[0] * t[4] + e[2] * t[5] + e[4],
              e[1] * t[4] + e[3] * t[5] + e[5]
            ]
          }

          static applyTransform(e, t) {
            return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]]
          }

          static applyInverseTransform(e, t) {
            const n = t[0] * t[3] - t[1] * t[2]
            return [
              (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / n,
              (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / n
            ]
          }

          static getAxialAlignedBoundingBox(e, t) {
            const n = Util.applyTransform(e, t)
            const r = Util.applyTransform(e.slice(2, 4), t)
            const i = Util.applyTransform([e[0], e[3]], t)
            const o = Util.applyTransform([e[2], e[1]], t)
            return [
              Math.min(n[0], r[0], i[0], o[0]),
              Math.min(n[1], r[1], i[1], o[1]),
              Math.max(n[0], r[0], i[0], o[0]),
              Math.max(n[1], r[1], i[1], o[1])
            ]
          }

          static inverseTransform(e) {
            const t = e[0] * e[3] - e[1] * e[2]
            return [
              e[3] / t,
              -e[1] / t,
              -e[2] / t,
              e[0] / t,
              (e[2] * e[5] - e[4] * e[3]) / t,
              (e[4] * e[1] - e[5] * e[0]) / t
            ]
          }

          static apply3dTransform(e, t) {
            return [
              e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
              e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
              e[6] * t[0] + e[7] * t[1] + e[8] * t[2]
            ]
          }

          static singularValueDecompose2dScale(e) {
            const t = [e[0], e[2], e[1], e[3]]
            const n = e[0] * t[0] + e[1] * t[2]
            const r = e[0] * t[1] + e[1] * t[3]
            const i = e[2] * t[0] + e[3] * t[2]
            const o = e[2] * t[1] + e[3] * t[3]
            const s = (n + o) / 2
            const a = Math.sqrt((n + o) ** 2 - 4 * (n * o - i * r)) / 2
            const c = s + a || 1
            const l = s - a || 1
            return [Math.sqrt(c), Math.sqrt(l)]
          }

          static normalizeRect(e) {
            const t = e.slice(0)
            if (e[0] > e[2]) {
              t[0] = e[2]
              t[2] = e[0]
            }
            if (e[1] > e[3]) {
              t[1] = e[3]
              t[3] = e[1]
            }
            return t
          }

          static intersect(e, t) {
            const n = Math.max(Math.min(e[0], e[2]), Math.min(t[0], t[2]))
            const r = Math.min(Math.max(e[0], e[2]), Math.max(t[0], t[2]))
            if (n > r) return null
            const i = Math.max(Math.min(e[1], e[3]), Math.min(t[1], t[3]))
            const o = Math.min(Math.max(e[1], e[3]), Math.max(t[1], t[3]))
            return i > o ? null : [n, i, r, o]
          }

          static bezierBoundingBox(e, t, n, r, i, o, s, a) {
            const c = []
            const l = [[], []]
            let u
            let f
            let h
            let d
            let p
            let g
            let m
            let b
            for (let l = 0; l < 2; ++l) {
              if (l === 0) {
                f = 6 * e - 12 * n + 6 * i
                u = -3 * e + 9 * n - 9 * i + 3 * s
                h = 3 * n - 3 * e
              } else {
                f = 6 * t - 12 * r + 6 * o
                u = -3 * t + 9 * r - 9 * o + 3 * a
                h = 3 * r - 3 * t
              }
              if (Math.abs(u) < 1e-12) {
                if (Math.abs(f) < 1e-12) continue
                d = -h / f
                d > 0 && d < 1 && c.push(d)
              } else {
                m = f * f - 4 * h * u
                b = Math.sqrt(m)
                if (!(m < 0)) {
                  p = (-f + b) / (2 * u)
                  p > 0 && p < 1 && c.push(p)
                  g = (-f - b) / (2 * u)
                  g > 0 && g < 1 && c.push(g)
                }
              }
            }
            let y
            let x = c.length
            const w = x
            for (; x--; ) {
              d = c[x]
              y = 1 - d
              l[0][x] = y * y * y * e + 3 * y * y * d * n + 3 * y * d * d * i + d * d * d * s
              l[1][x] = y * y * y * t + 3 * y * y * d * r + 3 * y * d * d * o + d * d * d * a
            }
            l[0][w] = e
            l[1][w] = t
            l[0][w + 1] = s
            l[1][w + 1] = a
            l[0].length = l[1].length = w + 2
            return [Math.min(...l[0]), Math.min(...l[1]), Math.max(...l[0]), Math.max(...l[1])]
          }
        }
        t.Util = Util
        const a = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710,
          729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260,
          8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338,
          352, 376, 381, 305, 322, 339, 353, 382, 0, 8364
        ]
        function stringToUTF8String(e) {
          return decodeURIComponent(escape(e))
        }
      },
      (e, t, n) => {
        const r = n(3)
        if (!globalThis._pdfjsCompatibilityChecked) {
          globalThis._pdfjsCompatibilityChecked = !0
          !(function checkNodeBtoa() {
            !globalThis.btoa &&
              r.isNodeJS &&
              (globalThis.btoa = function (e) {
                return Buffer.from(e, 'binary').toString('base64')
              })
          })()
          !(function checkNodeAtob() {
            !globalThis.atob &&
              r.isNodeJS &&
              (globalThis.atob = function (e) {
                return Buffer.from(e, 'base64').toString('binary')
              })
          })()
          !(function checkDOMMatrix() {
            !globalThis.DOMMatrix &&
              r.isNodeJS &&
              (globalThis.DOMMatrix = require('dommatrix/dist/dommatrix.js'))
          })()
          !(function checkReadableStream() {
            !globalThis.ReadableStream &&
              r.isNodeJS &&
              (globalThis.ReadableStream =
                require('web-streams-polyfill/dist/ponyfill.js').ReadableStream)
          })()
          !(function checkArrayAt() {
            Array.prototype.at || n(4)
          })()
          !(function checkTypedArrayAt() {
            Uint8Array.prototype.at || n(76)
          })()
        }
      },
      (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.isNodeJS = void 0
        const n = !(
          typeof process !== 'object' ||
          `${process}` != '[object process]' ||
          process.versions.nw ||
          (process.versions.electron && process.type && process.type !== 'browser')
        )
        t.isNodeJS = n
      },
      (e, t, n) => {
        n(5)
        const r = n(75)
        e.exports = r('Array', 'at')
      },
      (e, t, n) => {
        const r = n(6)
        const i = n(41)
        const o = n(65)
        const s = n(63)
        const a = n(70)
        r(
          { target: 'Array', proto: !0 },
          {
            at: function at(e) {
              const t = i(this)
              const n = o(t)
              const r = s(e)
              const a = r >= 0 ? r : n + r
              return a < 0 || a >= n ? void 0 : t[a]
            }
          }
        )
        a('at')
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(8).f
        const o = n(45)
        const s = n(49)
        const a = n(39)
        const c = n(57)
        const l = n(69)
        e.exports = function (e, t) {
          let n
          let u
          let f
          let h
          let d
          const p = e.target
          const g = e.global
          const m = e.stat
          if ((n = g ? r : m ? r[p] || a(p, {}) : (r[p] || {}).prototype))
            for (u in t) {
              h = t[u]
              f = e.dontCallGetSet ? (d = i(n, u)) && d.value : n[u]
              if (!l(g ? u : p + (m ? '.' : '#') + u, e.forced) && void 0 !== f) {
                if (typeof h === typeof f) continue
                c(h, f)
              }
              ;(e.sham || (f && f.sham)) && o(h, 'sham', !0)
              s(n, u, h, e)
            }
        }
      },
      (e) => {
        const check = function (e) {
          return e && e.Math == Math && e
        }
        e.exports =
          check(typeof globalThis === 'object' && globalThis) ||
          check(typeof window === 'object' && window) ||
          check(typeof self === 'object' && self) ||
          check(typeof global === 'object' && global) ||
          (function () {
            return this
          })() ||
          Function('return this')()
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(11)
        const o = n(13)
        const s = n(14)
        const a = n(15)
        const c = n(20)
        const l = n(40)
        const u = n(43)
        const f = Object.getOwnPropertyDescriptor
        t.f = r
          ? f
          : function getOwnPropertyDescriptor(e, t) {
              e = a(e)
              t = c(t)
              if (u)
                try {
                  return f(e, t)
                } catch (e) {}
              if (l(e, t)) return s(!i(o.f, e, t), e[t])
            }
      },
      (e, t, n) => {
        const r = n(10)
        e.exports = !r(function () {
          return (
            Object.defineProperty({}, 1, {
              get() {
                return 7
              }
            })[1] != 7
          )
        })
      },
      (e) => {
        e.exports = function (e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        }
      },
      (e, t, n) => {
        const r = n(12)
        const i = Function.prototype.call
        e.exports = r
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments)
            }
      },
      (e, t, n) => {
        const r = n(10)
        e.exports = !r(function () {
          const e = function () {}.bind()
          return typeof e !== 'function' || e.hasOwnProperty('prototype')
        })
      },
      (e, t) => {
        const n = {}.propertyIsEnumerable
        const r = Object.getOwnPropertyDescriptor
        const i = r && !n.call({ 1: 2 }, 1)
        t.f = i
          ? function propertyIsEnumerable(e) {
              const t = r(this, e)
              return !!t && t.enumerable
            }
          : n
      },
      (e) => {
        e.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
        }
      },
      (e, t, n) => {
        const r = n(16)
        const i = n(19)
        e.exports = function (e) {
          return r(i(e))
        }
      },
      (e, t, n) => {
        const r = n(17)
        const i = n(10)
        const o = n(18)
        const s = Object
        const a = r(''.split)
        e.exports = i(function () {
          return !s('z').propertyIsEnumerable(0)
        })
          ? function (e) {
              return o(e) == 'String' ? a(e, '') : s(e)
            }
          : s
      },
      (e, t, n) => {
        const r = n(12)
        const i = Function.prototype
        const o = i.bind
        const s = i.call
        const a = r && o.bind(s, s)
        e.exports = r
          ? function (e) {
              return e && a(e)
            }
          : function (e) {
              return (
                e &&
                function () {
                  return s.apply(e, arguments)
                }
              )
            }
      },
      (e, t, n) => {
        const r = n(17)
        const i = r({}.toString)
        const o = r(''.slice)
        e.exports = function (e) {
          return o(i(e), 8, -1)
        }
      },
      (e) => {
        const t = TypeError
        e.exports = function (e) {
          if (e == null) throw t(`Can't call method on ${e}`)
          return e
        }
      },
      (e, t, n) => {
        const r = n(21)
        const i = n(24)
        e.exports = function (e) {
          const t = r(e, 'string')
          return i(t) ? t : `${t}`
        }
      },
      (e, t, n) => {
        const r = n(11)
        const i = n(22)
        const o = n(24)
        const s = n(31)
        const a = n(34)
        const c = n(35)
        const l = TypeError
        const u = c('toPrimitive')
        e.exports = function (e, t) {
          if (!i(e) || o(e)) return e
          let n
          const c = s(e, u)
          if (c) {
            void 0 === t && (t = 'default')
            n = r(c, e, t)
            if (!i(n) || o(n)) return n
            throw l("Can't convert object to primitive value")
          }
          void 0 === t && (t = 'number')
          return a(e, t)
        }
      },
      (e, t, n) => {
        const r = n(23)
        e.exports = function (e) {
          return typeof e === 'object' ? e !== null : r(e)
        }
      },
      (e) => {
        e.exports = function (e) {
          return typeof e === 'function'
        }
      },
      (e, t, n) => {
        const r = n(25)
        const i = n(23)
        const o = n(26)
        const s = n(27)
        const a = Object
        e.exports = s
          ? function (e) {
              return typeof e === 'symbol'
            }
          : function (e) {
              const t = r('Symbol')
              return i(t) && o(t.prototype, a(e))
            }
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(23)
        const aFunction = function (e) {
          return i(e) ? e : void 0
        }
        e.exports = function (e, t) {
          return arguments.length < 2 ? aFunction(r[e]) : r[e] && r[e][t]
        }
      },
      (e, t, n) => {
        const r = n(17)
        e.exports = r({}.isPrototypeOf)
      },
      (e, t, n) => {
        const r = n(28)
        e.exports = r && !Symbol.sham && typeof Symbol.iterator === 'symbol'
      },
      (e, t, n) => {
        const r = n(29)
        const i = n(10)
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            const e = Symbol()
            return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41)
          })
      },
      (e, t, n) => {
        let r
        let i
        const o = n(7)
        const s = n(30)
        const a = o.process
        const c = o.Deno
        const l = (a && a.versions) || (c && c.version)
        const u = l && l.v8
        u && (i = (r = u.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1]))
        !i &&
          s &&
          (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = s.match(/Chrome\/(\d+)/)) &&
          (i = +r[1])
        e.exports = i
      },
      (e, t, n) => {
        const r = n(25)
        e.exports = r('navigator', 'userAgent') || ''
      },
      (e, t, n) => {
        const r = n(32)
        e.exports = function (e, t) {
          const n = e[t]
          return n == null ? void 0 : r(n)
        }
      },
      (e, t, n) => {
        const r = n(23)
        const i = n(33)
        const o = TypeError
        e.exports = function (e) {
          if (r(e)) return e
          throw o(`${i(e)} is not a function`)
        }
      },
      (e) => {
        const t = String
        e.exports = function (e) {
          try {
            return t(e)
          } catch (e) {
            return 'Object'
          }
        }
      },
      (e, t, n) => {
        const r = n(11)
        const i = n(23)
        const o = n(22)
        const s = TypeError
        e.exports = function (e, t) {
          let n
          let a
          if (t === 'string' && i((n = e.toString)) && !o((a = r(n, e)))) return a
          if (i((n = e.valueOf)) && !o((a = r(n, e)))) return a
          if (t !== 'string' && i((n = e.toString)) && !o((a = r(n, e)))) return a
          throw s("Can't convert object to primitive value")
        }
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(36)
        const o = n(40)
        const s = n(42)
        const a = n(28)
        const c = n(27)
        const l = i('wks')
        const u = r.Symbol
        const f = u && u.for
        const h = c ? u : (u && u.withoutSetter) || s
        e.exports = function (e) {
          if (!o(l, e) || (!a && typeof l[e] !== 'string')) {
            const t = `Symbol.${e}`
            a && o(u, e) ? (l[e] = u[e]) : (l[e] = c && f ? f(t) : h(t))
          }
          return l[e]
        }
      },
      (e, t, n) => {
        const r = n(37)
        const i = n(38)
        ;(e.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {})
        })('versions', []).push({
          version: '3.24.1',
          mode: r ? 'pure' : 'global',
          copyright: '?? 2014-2022 Denis Pushkarev (zloirock.ru)',
          license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
          source: 'https://github.com/zloirock/core-js'
        })
      },
      (e) => {
        e.exports = !1
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(39)
        const o = '__core-js_shared__'
        const s = r[o] || i(o, {})
        e.exports = s
      },
      (e, t, n) => {
        const r = n(7)
        const i = Object.defineProperty
        e.exports = function (e, t) {
          try {
            i(r, e, { value: t, configurable: !0, writable: !0 })
          } catch (n) {
            r[e] = t
          }
          return t
        }
      },
      (e, t, n) => {
        const r = n(17)
        const i = n(41)
        const o = r({}.hasOwnProperty)
        e.exports =
          Object.hasOwn ||
          function hasOwn(e, t) {
            return o(i(e), t)
          }
      },
      (e, t, n) => {
        const r = n(19)
        const i = Object
        e.exports = function (e) {
          return i(r(e))
        }
      },
      (e, t, n) => {
        const r = n(17)
        let i = 0
        const o = Math.random()
        const s = r((1).toString)
        e.exports = function (e) {
          return `Symbol(${void 0 === e ? '' : e})_${s(++i + o, 36)}`
        }
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(10)
        const o = n(44)
        e.exports =
          !r &&
          !i(function () {
            return (
              Object.defineProperty(o('div'), 'a', {
                get() {
                  return 7
                }
              }).a != 7
            )
          })
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(22)
        const o = r.document
        const s = i(o) && i(o.createElement)
        e.exports = function (e) {
          return s ? o.createElement(e) : {}
        }
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(46)
        const o = n(14)
        e.exports = r
          ? function (e, t, n) {
              return i.f(e, t, o(1, n))
            }
          : function (e, t, n) {
              e[t] = n
              return e
            }
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(43)
        const o = n(47)
        const s = n(48)
        const a = n(20)
        const c = TypeError
        const l = Object.defineProperty
        const u = Object.getOwnPropertyDescriptor
        const f = 'enumerable'
        const h = 'configurable'
        const d = 'writable'
        t.f = r
          ? o
            ? function defineProperty(e, t, n) {
                s(e)
                t = a(t)
                s(n)
                if (
                  typeof e === 'function' &&
                  t === 'prototype' &&
                  'value' in n &&
                  d in n &&
                  !n.writable
                ) {
                  const r = u(e, t)
                  if (r && r.writable) {
                    e[t] = n.value
                    n = {
                      configurable: h in n ? n.configurable : r.configurable,
                      enumerable: f in n ? n.enumerable : r.enumerable,
                      writable: !1
                    }
                  }
                }
                return l(e, t, n)
              }
            : l
          : function defineProperty(e, t, n) {
              s(e)
              t = a(t)
              s(n)
              if (i)
                try {
                  return l(e, t, n)
                } catch (e) {}
              if ('get' in n || 'set' in n) throw c('Accessors not supported')
              'value' in n && (e[t] = n.value)
              return e
            }
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(10)
        e.exports =
          r &&
          i(function () {
            return (
              Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 })
                .prototype != 42
            )
          })
      },
      (e, t, n) => {
        const r = n(22)
        const i = String
        const o = TypeError
        e.exports = function (e) {
          if (r(e)) return e
          throw o(`${i(e)} is not an object`)
        }
      },
      (e, t, n) => {
        const r = n(23)
        const i = n(46)
        const o = n(50)
        const s = n(39)
        e.exports = function (e, t, n, a) {
          a || (a = {})
          let c = a.enumerable
          const l = void 0 !== a.name ? a.name : t
          r(n) && o(n, l, a)
          if (a.global) c ? (e[t] = n) : s(t, n)
          else {
            try {
              a.unsafe ? e[t] && (c = !0) : delete e[t]
            } catch (e) {}
            c
              ? (e[t] = n)
              : i.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable
                })
          }
          return e
        }
      },
      (e, t, n) => {
        const r = n(10)
        const i = n(23)
        const o = n(40)
        const s = n(9)
        const a = n(51).CONFIGURABLE
        const c = n(52)
        const l = n(53)
        const u = l.enforce
        const f = l.get
        const h = Object.defineProperty
        const d =
          s &&
          !r(function () {
            return h(function () {}, 'length', { value: 8 }).length !== 8
          })
        const p = String(String).split('String')
        const g = (e.exports = function (e, t, n) {
          String(t).slice(0, 7) === 'Symbol(' &&
            (t = `[${String(t).replace(/^Symbol\(([^)]*)\)/, '$1')}]`)
          n && n.getter && (t = `get ${t}`)
          n && n.setter && (t = `set ${t}`)
          ;(!o(e, 'name') || (a && e.name !== t)) &&
            (s ? h(e, 'name', { value: t, configurable: !0 }) : (e.name = t))
          d && n && o(n, 'arity') && e.length !== n.arity && h(e, 'length', { value: n.arity })
          try {
            n && o(n, 'constructor') && n.constructor
              ? s && h(e, 'prototype', { writable: !1 })
              : e.prototype && (e.prototype = void 0)
          } catch (e) {}
          const r = u(e)
          o(r, 'source') || (r.source = p.join(typeof t === 'string' ? t : ''))
          return e
        })
        Function.prototype.toString = g(function toString() {
          return (i(this) && f(this).source) || c(this)
        }, 'toString')
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(40)
        const o = Function.prototype
        const s = r && Object.getOwnPropertyDescriptor
        const a = i(o, 'name')
        const c = a && function something() {}.name === 'something'
        const l = a && (!r || (r && s(o, 'name').configurable))
        e.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: l }
      },
      (e, t, n) => {
        const r = n(17)
        const i = n(23)
        const o = n(38)
        const s = r(Function.toString)
        i(o.inspectSource) ||
          (o.inspectSource = function (e) {
            return s(e)
          })
        e.exports = o.inspectSource
      },
      (e, t, n) => {
        let r
        let i
        let o
        const s = n(54)
        const a = n(7)
        const c = n(17)
        const l = n(22)
        const u = n(45)
        const f = n(40)
        const h = n(38)
        const d = n(55)
        const p = n(56)
        const g = 'Object already initialized'
        const m = a.TypeError
        const b = a.WeakMap
        if (s || h.state) {
          const y = h.state || (h.state = new b())
          const x = c(y.get)
          const w = c(y.has)
          const T = c(y.set)
          r = function (e, t) {
            if (w(y, e)) throw new m(g)
            t.facade = e
            T(y, e, t)
            return t
          }
          i = function (e) {
            return x(y, e) || {}
          }
          o = function (e) {
            return w(y, e)
          }
        } else {
          const S = d('state')
          p[S] = !0
          r = function (e, t) {
            if (f(e, S)) throw new m(g)
            t.facade = e
            u(e, S, t)
            return t
          }
          i = function (e) {
            return f(e, S) ? e[S] : {}
          }
          o = function (e) {
            return f(e, S)
          }
        }
        e.exports = {
          set: r,
          get: i,
          has: o,
          enforce(e) {
            return o(e) ? i(e) : r(e, {})
          },
          getterFor(e) {
            return function (t) {
              let n
              if (!l(t) || (n = i(t)).type !== e) throw m(`Incompatible receiver, ${e} required`)
              return n
            }
          }
        }
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(23)
        const o = n(52)
        const s = r.WeakMap
        e.exports = i(s) && /native code/.test(o(s))
      },
      (e, t, n) => {
        const r = n(36)
        const i = n(42)
        const o = r('keys')
        e.exports = function (e) {
          return o[e] || (o[e] = i(e))
        }
      },
      (e) => {
        e.exports = {}
      },
      (e, t, n) => {
        const r = n(40)
        const i = n(58)
        const o = n(8)
        const s = n(46)
        e.exports = function (e, t, n) {
          for (let a = i(t), c = s.f, l = o.f, u = 0; u < a.length; u++) {
            const f = a[u]
            r(e, f) || (n && r(n, f)) || c(e, f, l(t, f))
          }
        }
      },
      (e, t, n) => {
        const r = n(25)
        const i = n(17)
        const o = n(59)
        const s = n(68)
        const a = n(48)
        const c = i([].concat)
        e.exports =
          r('Reflect', 'ownKeys') ||
          function ownKeys(e) {
            const t = o.f(a(e))
            const n = s.f
            return n ? c(t, n(e)) : t
          }
      },
      (e, t, n) => {
        const r = n(60)
        const i = n(67).concat('length', 'prototype')
        t.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(e) {
            return r(e, i)
          }
      },
      (e, t, n) => {
        const r = n(17)
        const i = n(40)
        const o = n(15)
        const s = n(61).indexOf
        const a = n(56)
        const c = r([].push)
        e.exports = function (e, t) {
          let n
          const r = o(e)
          let l = 0
          const u = []
          for (n in r) !i(a, n) && i(r, n) && c(u, n)
          for (; t.length > l; ) i(r, (n = t[l++])) && (~s(u, n) || c(u, n))
          return u
        }
      },
      (e, t, n) => {
        const r = n(15)
        const i = n(62)
        const o = n(65)
        const createMethod = function (e) {
          return function (t, n, s) {
            let a
            const c = r(t)
            const l = o(c)
            let u = i(s, l)
            if (e && n != n) {
              for (; l > u; ) if ((a = c[u++]) != a) return !0
            } else for (; l > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0
            return !e && -1
          }
        }
        e.exports = { includes: createMethod(!0), indexOf: createMethod(!1) }
      },
      (e, t, n) => {
        const r = n(63)
        const i = Math.max
        const o = Math.min
        e.exports = function (e, t) {
          const n = r(e)
          return n < 0 ? i(n + t, 0) : o(n, t)
        }
      },
      (e, t, n) => {
        const r = n(64)
        e.exports = function (e) {
          const t = +e
          return t != t || t === 0 ? 0 : r(t)
        }
      },
      (e) => {
        const t = Math.ceil
        const n = Math.floor
        e.exports =
          Math.trunc ||
          function trunc(e) {
            const r = +e
            return (r > 0 ? n : t)(r)
          }
      },
      (e, t, n) => {
        const r = n(66)
        e.exports = function (e) {
          return r(e.length)
        }
      },
      (e, t, n) => {
        const r = n(63)
        const i = Math.min
        e.exports = function (e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0
        }
      },
      (e) => {
        e.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf'
        ]
      },
      (e, t) => {
        t.f = Object.getOwnPropertySymbols
      },
      (e, t, n) => {
        const r = n(10)
        const i = n(23)
        const o = /#|\.prototype\./
        const isForced = function (e, t) {
          const n = a[s(e)]
          return n == l || (n != c && (i(t) ? r(t) : !!t))
        }
        var s = (isForced.normalize = function (e) {
          return String(e).replace(o, '.').toLowerCase()
        })
        var a = (isForced.data = {})
        var c = (isForced.NATIVE = 'N')
        var l = (isForced.POLYFILL = 'P')
        e.exports = isForced
      },
      (e, t, n) => {
        const r = n(35)
        const i = n(71)
        const o = n(46).f
        const s = r('unscopables')
        const a = Array.prototype
        a[s] == null && o(a, s, { configurable: !0, value: i(null) })
        e.exports = function (e) {
          a[s][e] = !0
        }
      },
      (e, t, n) => {
        let r
        const i = n(48)
        const o = n(72)
        const s = n(67)
        const a = n(56)
        const c = n(74)
        const l = n(44)
        const u = n(55)
        const f = u('IE_PROTO')
        const EmptyConstructor = function () {}
        const scriptTag = function (e) {
          return `<script>${e}</` + `script>`
        }
        const NullProtoObjectViaActiveX = function (e) {
          e.write(scriptTag(''))
          e.close()
          const t = e.parentWindow.Object
          e = null
          return t
        }
        var NullProtoObject = function () {
          try {
            r = new ActiveXObject('htmlfile')
          } catch (e) {}
          NullProtoObject =
            typeof document !== 'undefined'
              ? document.domain && r
                ? NullProtoObjectViaActiveX(r)
                : (function () {
                    let e
                    const t = l('iframe')
                    t.style.display = 'none'
                    c.appendChild(t)
                    t.src = String('javascript:')
                    ;(e = t.contentWindow.document).open()
                    e.write(scriptTag('document.F=Object'))
                    e.close()
                    return e.F
                  })()
              : NullProtoObjectViaActiveX(r)
          for (let e = s.length; e--; ) delete NullProtoObject.prototype[s[e]]
          return NullProtoObject()
        }
        a[f] = !0
        e.exports =
          Object.create ||
          function create(e, t) {
            let n
            if (e !== null) {
              EmptyConstructor.prototype = i(e)
              n = new EmptyConstructor()
              EmptyConstructor.prototype = null
              n[f] = e
            } else n = NullProtoObject()
            return void 0 === t ? n : o.f(n, t)
          }
      },
      (e, t, n) => {
        const r = n(9)
        const i = n(47)
        const o = n(46)
        const s = n(48)
        const a = n(15)
        const c = n(73)
        t.f =
          r && !i
            ? Object.defineProperties
            : function defineProperties(e, t) {
                s(e)
                for (var n, r = a(t), i = c(t), l = i.length, u = 0; l > u; )
                  o.f(e, (n = i[u++]), r[n])
                return e
              }
      },
      (e, t, n) => {
        const r = n(60)
        const i = n(67)
        e.exports =
          Object.keys ||
          function keys(e) {
            return r(e, i)
          }
      },
      (e, t, n) => {
        const r = n(25)
        e.exports = r('document', 'documentElement')
      },
      (e, t, n) => {
        const r = n(7)
        const i = n(17)
        e.exports = function (e, t) {
          return i(r[e].prototype[t])
        }
      },
      (e, t, n) => {
        n(77)
      },
      (e, t, n) => {
        const r = n(78)
        const i = n(65)
        const o = n(63)
        const s = r.aTypedArray
        ;(0, r.exportTypedArrayMethod)('at', function at(e) {
          const t = s(this)
          const n = i(t)
          const r = o(e)
          const a = r >= 0 ? r : n + r
          return a < 0 || a >= n ? void 0 : t[a]
        })
      },
      (e, t, n) => {
        let r
        let i
        let o
        const s = n(79)
        const a = n(9)
        const c = n(7)
        const l = n(23)
        const u = n(22)
        const f = n(40)
        const h = n(80)
        const d = n(33)
        const p = n(45)
        const g = n(49)
        const m = n(46).f
        const b = n(26)
        const y = n(82)
        const x = n(84)
        const w = n(35)
        const T = n(42)
        const S = n(53)
        const C = S.enforce
        const P = S.get
        const v = c.Int8Array
        const E = v && v.prototype
        const I = c.Uint8ClampedArray
        const A = I && I.prototype
        let k = v && y(v)
        let O = E && y(E)
        const _ = Object.prototype
        const B = c.TypeError
        const D = w('toStringTag')
        const M = T('TYPED_ARRAY_TAG')
        const R = 'TypedArrayConstructor'
        let L = s && !!x && h(c.opera) !== 'Opera'
        let U = !1
        const N = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
        }
        const j = { BigInt64Array: 8, BigUint64Array: 8 }
        var getTypedArrayConstructor = function (e) {
          const t = y(e)
          if (u(t)) {
            const n = P(t)
            return n && f(n, R) ? n.TypedArrayConstructor : getTypedArrayConstructor(t)
          }
        }
        const isTypedArray = function (e) {
          if (!u(e)) return !1
          const t = h(e)
          return f(N, t) || f(j, t)
        }
        for (r in N) (o = (i = c[r]) && i.prototype) ? (C(o).TypedArrayConstructor = i) : (L = !1)
        for (r in j) (o = (i = c[r]) && i.prototype) && (C(o).TypedArrayConstructor = i)
        if (!L || !l(k) || k === Function.prototype) {
          k = function TypedArray() {
            throw B('Incorrect invocation')
          }
          if (L) for (r in N) c[r] && x(c[r], k)
        }
        if (!L || !O || O === _) {
          O = k.prototype
          if (L) for (r in N) c[r] && x(c[r].prototype, O)
        }
        L && y(A) !== O && x(A, O)
        if (a && !f(O, D)) {
          U = !0
          m(O, D, {
            get() {
              return u(this) ? this[M] : void 0
            }
          })
          for (r in N) c[r] && p(c[r], M, r)
        }
        e.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: L,
          TYPED_ARRAY_TAG: U && M,
          aTypedArray(e) {
            if (isTypedArray(e)) return e
            throw B('Target is not a typed array')
          },
          aTypedArrayConstructor(e) {
            if (l(e) && (!x || b(k, e))) return e
            throw B(`${d(e)} is not a typed array constructor`)
          },
          exportTypedArrayMethod(e, t, n, r) {
            if (a) {
              if (n)
                for (const i in N) {
                  const o = c[i]
                  if (o && f(o.prototype, e))
                    try {
                      delete o.prototype[e]
                    } catch (n) {
                      try {
                        o.prototype[e] = t
                      } catch (e) {}
                    }
                }
              ;(O[e] && !n) || g(O, e, n ? t : (L && E[e]) || t, r)
            }
          },
          exportTypedArrayStaticMethod(e, t, n) {
            let r
            let i
            if (a) {
              if (x) {
                if (n)
                  for (r in N)
                    if ((i = c[r]) && f(i, e))
                      try {
                        delete i[e]
                      } catch (e) {}
                if (k[e] && !n) return
                try {
                  return g(k, e, n ? t : (L && k[e]) || t)
                } catch (e) {}
              }
              for (r in N) !(i = c[r]) || (i[e] && !n) || g(i, e, t)
            }
          },
          getTypedArrayConstructor,
          isView: function isView(e) {
            if (!u(e)) return !1
            const t = h(e)
            return t === 'DataView' || f(N, t) || f(j, t)
          },
          isTypedArray,
          TypedArray: k,
          TypedArrayPrototype: O
        }
      },
      (e) => {
        e.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined'
      },
      (e, t, n) => {
        const r = n(81)
        const i = n(23)
        const o = n(18)
        const s = n(35)('toStringTag')
        const a = Object
        const c =
          o(
            (function () {
              return arguments
            })()
          ) == 'Arguments'
        e.exports = r
          ? o
          : function (e) {
              let t
              let n
              let r
              return void 0 === e
                ? 'Undefined'
                : e === null
                ? 'Null'
                : typeof (n = (function (e, t) {
                    try {
                      return e[t]
                    } catch (e) {}
                  })((t = a(e)), s)) === 'string'
                ? n
                : c
                ? o(t)
                : (r = o(t)) == 'Object' && i(t.callee)
                ? 'Arguments'
                : r
            }
      },
      (e, t, n) => {
        const r = {}
        r[n(35)('toStringTag')] = 'z'
        e.exports = String(r) === '[object z]'
      },
      (e, t, n) => {
        const r = n(40)
        const i = n(23)
        const o = n(41)
        const s = n(55)
        const a = n(83)
        const c = s('IE_PROTO')
        const l = Object
        const u = l.prototype
        e.exports = a
          ? l.getPrototypeOf
          : function (e) {
              const t = o(e)
              if (r(t, c)) return t[c]
              const n = t.constructor
              return i(n) && t instanceof n ? n.prototype : t instanceof l ? u : null
            }
      },
      (e, t, n) => {
        const r = n(10)
        e.exports = !r(function () {
          function F() {}
          F.prototype.constructor = null
          return Object.getPrototypeOf(new F()) !== F.prototype
        })
      },
      (e, t, n) => {
        const r = n(17)
        const i = n(48)
        const o = n(85)
        e.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                let e
                let t = !1
                const n = {}
                try {
                  ;(e = r(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set))(
                    n,
                    []
                  )
                  t = n instanceof Array
                } catch (e) {}
                return function setPrototypeOf(n, r) {
                  i(n)
                  o(r)
                  t ? e(n, r) : (n.__proto__ = r)
                  return n
                }
              })()
            : void 0)
      },
      (e, t, n) => {
        const r = n(23)
        const i = String
        const o = TypeError
        e.exports = function (e) {
          if (typeof e === 'object' || r(e)) return e
          throw o(`Can't set ${i(e)} as a prototype`)
        }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.Jbig2Image = void 0
        const r = n(1)
        const i = n(87)
        const o = n(90)
        const s = n(91)
        class Jbig2Error extends r.BaseException {
          constructor(e) {
            super(`JBIG2 error: ${e}`, 'Jbig2Error')
          }
        }
        class ContextCache {
          getContexts(e) {
            return e in this ? this[e] : (this[e] = new Int8Array(65536))
          }
        }
        class DecodingContext {
          constructor(e, t, n) {
            this.data = e
            this.start = t
            this.end = n
          }

          get decoder() {
            const e = new o.ArithmeticDecoder(this.data, this.start, this.end)
            return (0, r.shadow)(this, 'decoder', e)
          }

          get contextCache() {
            const e = new ContextCache()
            return (0, r.shadow)(this, 'contextCache', e)
          }
        }
        function decodeInteger(e, t, n) {
          const r = e.getContexts(t)
          let i = 1
          function readBits(e) {
            let t = 0
            for (let o = 0; o < e; o++) {
              const e = n.readBit(r, i)
              i = i < 256 ? (i << 1) | e : (511 & ((i << 1) | e)) | 256
              t = (t << 1) | e
            }
            return t >>> 0
          }
          const o = readBits(1)
          const s = readBits(1)
            ? readBits(1)
              ? readBits(1)
                ? readBits(1)
                  ? readBits(1)
                    ? readBits(32) + 4436
                    : readBits(12) + 340
                  : readBits(8) + 84
                : readBits(6) + 20
              : readBits(4) + 4
            : readBits(2)
          return o === 0 ? s : s > 0 ? -s : null
        }
        function decodeIAID(e, t, n) {
          const r = e.getContexts('IAID')
          let i = 1
          for (let e = 0; e < n; e++) {
            i = (i << 1) | t.readBit(r, i)
          }
          return n < 31 ? i & ((1 << n) - 1) : 2147483647 & i
        }
        const a = [
          'SymbolDictionary',
          null,
          null,
          null,
          'IntermediateTextRegion',
          null,
          'ImmediateTextRegion',
          'ImmediateLosslessTextRegion',
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          'PatternDictionary',
          null,
          null,
          null,
          'IntermediateHalftoneRegion',
          null,
          'ImmediateHalftoneRegion',
          'ImmediateLosslessHalftoneRegion',
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          'IntermediateGenericRegion',
          null,
          'ImmediateGenericRegion',
          'ImmediateLosslessGenericRegion',
          'IntermediateGenericRefinementRegion',
          null,
          'ImmediateGenericRefinementRegion',
          'ImmediateLosslessGenericRefinementRegion',
          null,
          null,
          null,
          null,
          'PageInformation',
          'EndOfPage',
          'EndOfStripe',
          'EndOfFile',
          'Profiles',
          'Tables',
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          'Extension'
        ]
        const c = [
          [
            { x: -1, y: -2 },
            { x: 0, y: -2 },
            { x: 1, y: -2 },
            { x: -2, y: -1 },
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: 2, y: -1 },
            { x: -4, y: 0 },
            { x: -3, y: 0 },
            { x: -2, y: 0 },
            { x: -1, y: 0 }
          ],
          [
            { x: -1, y: -2 },
            { x: 0, y: -2 },
            { x: 1, y: -2 },
            { x: 2, y: -2 },
            { x: -2, y: -1 },
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: 2, y: -1 },
            { x: -3, y: 0 },
            { x: -2, y: 0 },
            { x: -1, y: 0 }
          ],
          [
            { x: -1, y: -2 },
            { x: 0, y: -2 },
            { x: 1, y: -2 },
            { x: -2, y: -1 },
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -2, y: 0 },
            { x: -1, y: 0 }
          ],
          [
            { x: -3, y: -1 },
            { x: -2, y: -1 },
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -4, y: 0 },
            { x: -3, y: 0 },
            { x: -2, y: 0 },
            { x: -1, y: 0 }
          ]
        ]
        const l = [
          {
            coding: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: -1, y: 0 }
            ],
            reference: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: 1, y: 1 }
            ]
          },
          {
            coding: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: -1, y: 0 }
            ],
            reference: [
              { x: 0, y: -1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: 1 },
              { x: 1, y: 1 }
            ]
          }
        ]
        const u = [39717, 1941, 229, 405]
        const f = [32, 8]
        function decodeBitmap(e, t, n, r, i, o, s, a) {
          if (e) {
            return decodeMMRBitmap(new Reader(a.data, a.start, a.end), t, n, !1)
          }
          if (
            r === 0 &&
            !o &&
            !i &&
            s.length === 4 &&
            s[0].x === 3 &&
            s[0].y === -1 &&
            s[1].x === -3 &&
            s[1].y === -1 &&
            s[2].x === 2 &&
            s[2].y === -2 &&
            s[3].x === -2 &&
            s[3].y === -2
          )
            return (function decodeBitmapTemplate0(e, t, n) {
              const r = n.decoder
              const i = n.contextCache.getContexts('GB')
              const o = []
              let s
              let a
              let c
              let l
              let u
              let f
              let h
              for (a = 0; a < t; a++) {
                u = o[a] = new Uint8Array(e)
                f = a < 1 ? u : o[a - 1]
                h = a < 2 ? u : o[a - 2]
                s =
                  (h[0] << 13) |
                  (h[1] << 12) |
                  (h[2] << 11) |
                  (f[0] << 7) |
                  (f[1] << 6) |
                  (f[2] << 5) |
                  (f[3] << 4)
                for (c = 0; c < e; c++) {
                  u[c] = l = r.readBit(i, s)
                  s =
                    ((31735 & s) << 1) |
                    (c + 3 < e ? h[c + 3] << 11 : 0) |
                    (c + 4 < e ? f[c + 4] << 4 : 0) |
                    l
                }
              }
              return o
            })(t, n, a)
          const l = !!o
          const f = c[r].concat(s)
          f.sort(function (e, t) {
            return e.y - t.y || e.x - t.x
          })
          const h = f.length
          const d = new Int8Array(h)
          const p = new Int8Array(h)
          const g = []
          let m
          let b
          let y = 0
          let x = 0
          let w = 0
          let T = 0
          for (b = 0; b < h; b++) {
            d[b] = f[b].x
            p[b] = f[b].y
            x = Math.min(x, f[b].x)
            w = Math.max(w, f[b].x)
            T = Math.min(T, f[b].y)
            b < h - 1 && f[b].y === f[b + 1].y && f[b].x === f[b + 1].x - 1
              ? (y |= 1 << (h - 1 - b))
              : g.push(b)
          }
          const S = g.length
          const C = new Int8Array(S)
          const P = new Int8Array(S)
          const v = new Uint16Array(S)
          for (m = 0; m < S; m++) {
            b = g[m]
            C[m] = f[b].x
            P[m] = f[b].y
            v[m] = 1 << (h - 1 - b)
          }
          const E = -x
          const I = -T
          const A = t - w
          const k = u[r]
          let O = new Uint8Array(t)
          const _ = []
          const B = a.decoder
          const D = a.contextCache.getContexts('GB')
          let M
          let R
          let L
          let U
          let N
          let j = 0
          let H = 0
          for (let e = 0; e < n; e++) {
            if (i) {
              j ^= B.readBit(D, k)
              if (j) {
                _.push(O)
                continue
              }
            }
            O = new Uint8Array(O)
            _.push(O)
            for (M = 0; M < t; M++) {
              if (l && o[e][M]) {
                O[M] = 0
                continue
              }
              if (M >= E && M < A && e >= I) {
                H = (H << 1) & y
                for (b = 0; b < S; b++) {
                  R = e + P[b]
                  L = M + C[b]
                  U = _[R][L]
                  if (U) {
                    U = v[b]
                    H |= U
                  }
                }
              } else {
                H = 0
                N = h - 1
                for (b = 0; b < h; b++, N--) {
                  L = M + d[b]
                  if (L >= 0 && L < t) {
                    R = e + p[b]
                    if (R >= 0) {
                      U = _[R][L]
                      U && (H |= U << N)
                    }
                  }
                }
              }
              const n = B.readBit(D, H)
              O[M] = n
            }
          }
          return _
        }
        function decodeRefinement(e, t, n, r, i, o, s, a, c) {
          let u = l[n].coding
          n === 0 && (u = u.concat([a[0]]))
          const h = u.length
          const d = new Int32Array(h)
          const p = new Int32Array(h)
          let g
          for (g = 0; g < h; g++) {
            d[g] = u[g].x
            p[g] = u[g].y
          }
          let m = l[n].reference
          n === 0 && (m = m.concat([a[1]]))
          const b = m.length
          const y = new Int32Array(b)
          const x = new Int32Array(b)
          for (g = 0; g < b; g++) {
            y[g] = m[g].x
            x[g] = m[g].y
          }
          const w = r[0].length
          const T = r.length
          const S = f[n]
          const C = []
          const P = c.decoder
          const v = c.contextCache.getContexts('GR')
          let E = 0
          for (let n = 0; n < t; n++) {
            if (s) {
              E ^= P.readBit(v, S)
              if (E) throw new Jbig2Error('prediction is not supported')
            }
            const t = new Uint8Array(e)
            C.push(t)
            for (let s = 0; s < e; s++) {
              let a
              let c
              let l = 0
              for (g = 0; g < h; g++) {
                a = n + p[g]
                c = s + d[g]
                a < 0 || c < 0 || c >= e ? (l <<= 1) : (l = (l << 1) | C[a][c])
              }
              for (g = 0; g < b; g++) {
                a = n + x[g] - o
                c = s + y[g] - i
                a < 0 || a >= T || c < 0 || c >= w ? (l <<= 1) : (l = (l << 1) | r[a][c])
              }
              const u = P.readBit(v, l)
              t[s] = u
            }
          }
          return C
        }
        function decodeTextRegion(e, t, n, r, i, o, s, a, c, l, u, f, h, d, p, g, m, b, y) {
          if (e && t) throw new Jbig2Error('refinement with Huffman is not supported')
          const x = []
          let w
          let T
          for (w = 0; w < r; w++) {
            T = new Uint8Array(n)
            if (i) for (let e = 0; e < n; e++) T[e] = i
            x.push(T)
          }
          const S = m.decoder
          const C = m.contextCache
          let P = e ? -d.tableDeltaT.decode(y) : -decodeInteger(C, 'IADT', S)
          let v = 0
          w = 0
          for (; w < o; ) {
            P += e ? d.tableDeltaT.decode(y) : decodeInteger(C, 'IADT', S)
            v += e ? d.tableFirstS.decode(y) : decodeInteger(C, 'IAFS', S)
            let r = v
            for (;;) {
              let i = 0
              s > 1 && (i = e ? y.readBits(b) : decodeInteger(C, 'IAIT', S))
              const o = s * P + i
              const v = e ? d.symbolIDTable.decode(y) : decodeIAID(C, S, c)
              const E = t && (e ? y.readBit() : decodeInteger(C, 'IARI', S))
              let I = a[v]
              let A = I[0].length
              let k = I.length
              if (E) {
                const e = decodeInteger(C, 'IARDW', S)
                const t = decodeInteger(C, 'IARDH', S)
                const n = decodeInteger(C, 'IARDX', S)
                const r = decodeInteger(C, 'IARDY', S)
                A += e
                k += t
                I = decodeRefinement(A, k, p, I, (e >> 1) + n, (t >> 1) + r, !1, g, m)
              }
              const O = o - (1 & f ? 0 : k - 1)
              const _ = r - (2 & f ? A - 1 : 0)
              let B
              let D
              let M
              if (l) {
                for (B = 0; B < k; B++) {
                  T = x[_ + B]
                  if (!T) continue
                  M = I[B]
                  const e = Math.min(n - O, A)
                  switch (h) {
                    case 0:
                      for (D = 0; D < e; D++) T[O + D] |= M[D]
                      break
                    case 2:
                      for (D = 0; D < e; D++) T[O + D] ^= M[D]
                      break
                    default:
                      throw new Jbig2Error(`operator ${h} is not supported`)
                  }
                }
                r += k - 1
              } else {
                for (D = 0; D < k; D++) {
                  T = x[O + D]
                  if (T) {
                    M = I[D]
                    switch (h) {
                      case 0:
                        for (B = 0; B < A; B++) T[_ + B] |= M[B]
                        break
                      case 2:
                        for (B = 0; B < A; B++) T[_ + B] ^= M[B]
                        break
                      default:
                        throw new Jbig2Error(`operator ${h} is not supported`)
                    }
                  }
                }
                r += A - 1
              }
              w++
              const R = e ? d.tableDeltaS.decode(y) : decodeInteger(C, 'IADS', S)
              if (R === null) break
              r += R + u
            }
          }
          return x
        }
        function readSegmentHeader(e, t) {
          const n = {}
          n.number = (0, i.readUint32)(e, t)
          const r = e[t + 4]
          const o = 63 & r
          if (!a[o]) throw new Jbig2Error(`invalid segment type: ${o}`)
          n.type = o
          n.typeName = a[o]
          n.deferredNonRetain = !!(128 & r)
          const s = !!(64 & r)
          const c = e[t + 5]
          let l = (c >> 5) & 7
          const u = [31 & c]
          let f = t + 6
          if (c === 7) {
            l = 536870911 & (0, i.readUint32)(e, f - 1)
            f += 3
            let t = (l + 7) >> 3
            u[0] = e[f++]
            for (; --t > 0; ) u.push(e[f++])
          } else if (c === 5 || c === 6) throw new Jbig2Error('invalid referred-to flags')
          n.retainBits = u
          let d = 4
          n.number <= 256 ? (d = 1) : n.number <= 65536 && (d = 2)
          const p = []
          let g
          let m
          for (g = 0; g < l; g++) {
            let t
            t = d === 1 ? e[f] : d === 2 ? (0, i.readUint16)(e, f) : (0, i.readUint32)(e, f)
            p.push(t)
            f += d
          }
          n.referredTo = p
          if (s) {
            n.pageAssociation = (0, i.readUint32)(e, f)
            f += 4
          } else n.pageAssociation = e[f++]
          n.length = (0, i.readUint32)(e, f)
          f += 4
          if (n.length === 4294967295) {
            if (o !== 38) throw new Jbig2Error('invalid unknown segment length')
            {
              const t = readRegionSegmentInformation(e, f)
              const r = !!(1 & e[f + h])
              const i = 6
              const o = new Uint8Array(i)
              if (!r) {
                o[0] = 255
                o[1] = 172
              }
              o[2] = (t.height >>> 24) & 255
              o[3] = (t.height >> 16) & 255
              o[4] = (t.height >> 8) & 255
              o[5] = 255 & t.height
              for (g = f, m = e.length; g < m; g++) {
                let t = 0
                for (; t < i && o[t] === e[g + t]; ) t++
                if (t === i) {
                  n.length = g + i
                  break
                }
              }
              if (n.length === 4294967295) throw new Jbig2Error('segment end was not found')
            }
          }
          n.headerEnd = f
          return n
        }
        function readSegments(e, t, n, r) {
          const i = []
          let o = n
          for (; o < r; ) {
            const n = readSegmentHeader(t, o)
            o = n.headerEnd
            const r = { header: n, data: t }
            if (!e.randomAccess) {
              r.start = o
              o += n.length
              r.end = o
            }
            i.push(r)
            if (n.type === 51) break
          }
          if (e.randomAccess)
            for (let e = 0, t = i.length; e < t; e++) {
              i[e].start = o
              o += i[e].header.length
              i[e].end = o
            }
          return i
        }
        function readRegionSegmentInformation(e, t) {
          return {
            width: (0, i.readUint32)(e, t),
            height: (0, i.readUint32)(e, t + 4),
            x: (0, i.readUint32)(e, t + 8),
            y: (0, i.readUint32)(e, t + 12),
            combinationOperator: 7 & e[t + 16]
          }
        }
        const h = 17
        function processSegment(e, t) {
          const n = e.header
          const r = e.data
          const o = e.end
          let s
          let a
          let c
          let l
          let u = e.start
          switch (n.type) {
            case 0:
              const e = {}
              const t = (0, i.readUint16)(r, u)
              e.huffman = !!(1 & t)
              e.refinement = !!(2 & t)
              e.huffmanDHSelector = (t >> 2) & 3
              e.huffmanDWSelector = (t >> 4) & 3
              e.bitmapSizeSelector = (t >> 6) & 1
              e.aggregationInstancesSelector = (t >> 7) & 1
              e.bitmapCodingContextUsed = !!(256 & t)
              e.bitmapCodingContextRetained = !!(512 & t)
              e.template = (t >> 10) & 3
              e.refinementTemplate = (t >> 12) & 1
              u += 2
              if (!e.huffman) {
                l = e.template === 0 ? 4 : 1
                a = []
                for (c = 0; c < l; c++) {
                  a.push({ x: (0, i.readInt8)(r, u), y: (0, i.readInt8)(r, u + 1) })
                  u += 2
                }
                e.at = a
              }
              if (e.refinement && !e.refinementTemplate) {
                a = []
                for (c = 0; c < 2; c++) {
                  a.push({ x: (0, i.readInt8)(r, u), y: (0, i.readInt8)(r, u + 1) })
                  u += 2
                }
                e.refinementAt = a
              }
              e.numberOfExportedSymbols = (0, i.readUint32)(r, u)
              u += 4
              e.numberOfNewSymbols = (0, i.readUint32)(r, u)
              u += 4
              s = [e, n.number, n.referredTo, r, u, o]
              break
            case 6:
            case 7:
              const f = {}
              f.info = readRegionSegmentInformation(r, u)
              u += h
              const d = (0, i.readUint16)(r, u)
              u += 2
              f.huffman = !!(1 & d)
              f.refinement = !!(2 & d)
              f.logStripSize = (d >> 2) & 3
              f.stripSize = 1 << f.logStripSize
              f.referenceCorner = (d >> 4) & 3
              f.transposed = !!(64 & d)
              f.combinationOperator = (d >> 7) & 3
              f.defaultPixelValue = (d >> 9) & 1
              f.dsOffset = (d << 17) >> 27
              f.refinementTemplate = (d >> 15) & 1
              if (f.huffman) {
                const e = (0, i.readUint16)(r, u)
                u += 2
                f.huffmanFS = 3 & e
                f.huffmanDS = (e >> 2) & 3
                f.huffmanDT = (e >> 4) & 3
                f.huffmanRefinementDW = (e >> 6) & 3
                f.huffmanRefinementDH = (e >> 8) & 3
                f.huffmanRefinementDX = (e >> 10) & 3
                f.huffmanRefinementDY = (e >> 12) & 3
                f.huffmanRefinementSizeSelector = !!(16384 & e)
              }
              if (f.refinement && !f.refinementTemplate) {
                a = []
                for (c = 0; c < 2; c++) {
                  a.push({ x: (0, i.readInt8)(r, u), y: (0, i.readInt8)(r, u + 1) })
                  u += 2
                }
                f.refinementAt = a
              }
              f.numberOfSymbolInstances = (0, i.readUint32)(r, u)
              u += 4
              s = [f, n.referredTo, r, u, o]
              break
            case 16:
              const p = {}
              const g = r[u++]
              p.mmr = !!(1 & g)
              p.template = (g >> 1) & 3
              p.patternWidth = r[u++]
              p.patternHeight = r[u++]
              p.maxPatternIndex = (0, i.readUint32)(r, u)
              u += 4
              s = [p, n.number, r, u, o]
              break
            case 22:
            case 23:
              const m = {}
              m.info = readRegionSegmentInformation(r, u)
              u += h
              const b = r[u++]
              m.mmr = !!(1 & b)
              m.template = (b >> 1) & 3
              m.enableSkip = !!(8 & b)
              m.combinationOperator = (b >> 4) & 7
              m.defaultPixelValue = (b >> 7) & 1
              m.gridWidth = (0, i.readUint32)(r, u)
              u += 4
              m.gridHeight = (0, i.readUint32)(r, u)
              u += 4
              m.gridOffsetX = 4294967295 & (0, i.readUint32)(r, u)
              u += 4
              m.gridOffsetY = 4294967295 & (0, i.readUint32)(r, u)
              u += 4
              m.gridVectorX = (0, i.readUint16)(r, u)
              u += 2
              m.gridVectorY = (0, i.readUint16)(r, u)
              u += 2
              s = [m, n.referredTo, r, u, o]
              break
            case 38:
            case 39:
              const y = {}
              y.info = readRegionSegmentInformation(r, u)
              u += h
              const x = r[u++]
              y.mmr = !!(1 & x)
              y.template = (x >> 1) & 3
              y.prediction = !!(8 & x)
              if (!y.mmr) {
                l = y.template === 0 ? 4 : 1
                a = []
                for (c = 0; c < l; c++) {
                  a.push({ x: (0, i.readInt8)(r, u), y: (0, i.readInt8)(r, u + 1) })
                  u += 2
                }
                y.at = a
              }
              s = [y, r, u, o]
              break
            case 48:
              const w = {
                width: (0, i.readUint32)(r, u),
                height: (0, i.readUint32)(r, u + 4),
                resolutionX: (0, i.readUint32)(r, u + 8),
                resolutionY: (0, i.readUint32)(r, u + 12)
              }
              w.height === 4294967295 && delete w.height
              const T = r[u + 16]
              ;(0, i.readUint16)(r, u + 17)
              w.lossless = !!(1 & T)
              w.refinement = !!(2 & T)
              w.defaultPixelValue = (T >> 2) & 1
              w.combinationOperator = (T >> 3) & 3
              w.requiresBuffer = !!(32 & T)
              w.combinationOperatorOverride = !!(64 & T)
              s = [w]
              break
            case 49:
            case 50:
            case 51:
            case 62:
              break
            case 53:
              s = [n.number, r, u, o]
              break
            default:
              throw new Jbig2Error(`segment type ${n.typeName}(${n.type}) is not implemented`)
          }
          const f = `on${n.typeName}`
          f in t && t[f].apply(t, s)
        }
        function processSegments(e, t) {
          for (let n = 0, r = e.length; n < r; n++) processSegment(e[n], t)
        }
        class SimpleSegmentVisitor {
          onPageInformation(e) {
            this.currentPageInfo = e
            const t = (e.width + 7) >> 3
            const n = new Uint8ClampedArray(t * e.height)
            e.defaultPixelValue && n.fill(255)
            this.buffer = n
          }

          drawBitmap(e, t) {
            const n = this.currentPageInfo
            const r = e.width
            const i = e.height
            const o = (n.width + 7) >> 3
            const s = n.combinationOperatorOverride ? e.combinationOperator : n.combinationOperator
            const a = this.buffer
            const c = 128 >> (7 & e.x)
            let l
            let u
            let f
            let h
            let d = e.y * o + (e.x >> 3)
            switch (s) {
              case 0:
                for (l = 0; l < i; l++) {
                  f = c
                  h = d
                  for (u = 0; u < r; u++) {
                    t[l][u] && (a[h] |= f)
                    f >>= 1
                    if (!f) {
                      f = 128
                      h++
                    }
                  }
                  d += o
                }
                break
              case 2:
                for (l = 0; l < i; l++) {
                  f = c
                  h = d
                  for (u = 0; u < r; u++) {
                    t[l][u] && (a[h] ^= f)
                    f >>= 1
                    if (!f) {
                      f = 128
                      h++
                    }
                  }
                  d += o
                }
                break
              default:
                throw new Jbig2Error(`operator ${s} is not supported`)
            }
          }

          onImmediateGenericRegion(e, t, n, r) {
            const i = e.info
            const o = new DecodingContext(t, n, r)
            const s = decodeBitmap(
              e.mmr,
              i.width,
              i.height,
              e.template,
              e.prediction,
              null,
              e.at,
              o
            )
            this.drawBitmap(i, s)
          }

          onImmediateLosslessGenericRegion() {
            this.onImmediateGenericRegion(...arguments)
          }

          onSymbolDictionary(e, t, n, r, o, s) {
            let a
            let c
            if (e.huffman) {
              a = (function getSymbolDictionaryHuffmanTables(e, t, n) {
                let r
                let i
                let o
                let s
                let a = 0
                switch (e.huffmanDHSelector) {
                  case 0:
                  case 1:
                    r = getStandardTable(e.huffmanDHSelector + 4)
                    break
                  case 3:
                    r = getCustomHuffmanTable(a, t, n)
                    a++
                    break
                  default:
                    throw new Jbig2Error('invalid Huffman DH selector')
                }
                switch (e.huffmanDWSelector) {
                  case 0:
                  case 1:
                    i = getStandardTable(e.huffmanDWSelector + 2)
                    break
                  case 3:
                    i = getCustomHuffmanTable(a, t, n)
                    a++
                    break
                  default:
                    throw new Jbig2Error('invalid Huffman DW selector')
                }
                if (e.bitmapSizeSelector) {
                  o = getCustomHuffmanTable(a, t, n)
                  a++
                } else o = getStandardTable(1)
                s = e.aggregationInstancesSelector
                  ? getCustomHuffmanTable(a, t, n)
                  : getStandardTable(1)
                return {
                  tableDeltaHeight: r,
                  tableDeltaWidth: i,
                  tableBitmapSize: o,
                  tableAggregateInstances: s
                }
              })(e, n, this.customTables)
              c = new Reader(r, o, s)
            }
            let l = this.symbols
            l || (this.symbols = l = {})
            const u = []
            for (const e of n) {
              const t = l[e]
              t && u.push(...t)
            }
            const f = new DecodingContext(r, o, s)
            l[t] = (function decodeSymbolDictionary(e, t, n, r, o, s, a, c, l, u, f, h) {
              if (e && t) throw new Jbig2Error('symbol refinement with Huffman is not supported')
              const d = []
              let p = 0
              let g = (0, i.log2)(n.length + r)
              const m = f.decoder
              const b = f.contextCache
              let y
              let x
              if (e) {
                y = getStandardTable(1)
                x = []
                g = Math.max(g, 1)
              }
              for (; d.length < r; ) {
                p += e ? s.tableDeltaHeight.decode(h) : decodeInteger(b, 'IADH', m)
                let r = 0
                let i = 0
                const o = e ? x.length : 0
                for (;;) {
                  const o = e ? s.tableDeltaWidth.decode(h) : decodeInteger(b, 'IADW', m)
                  if (o === null) break
                  r += o
                  i += r
                  let y
                  if (t) {
                    const i = decodeInteger(b, 'IAAI', m)
                    if (i > 1)
                      y = decodeTextRegion(
                        e,
                        t,
                        r,
                        p,
                        0,
                        i,
                        1,
                        n.concat(d),
                        g,
                        0,
                        0,
                        1,
                        0,
                        s,
                        l,
                        u,
                        f,
                        0,
                        h
                      )
                    else {
                      const e = decodeIAID(b, m, g)
                      const t = decodeInteger(b, 'IARDX', m)
                      const i = decodeInteger(b, 'IARDY', m)
                      y = decodeRefinement(
                        r,
                        p,
                        l,
                        e < n.length ? n[e] : d[e - n.length],
                        t,
                        i,
                        !1,
                        u,
                        f
                      )
                    }
                    d.push(y)
                  } else if (e) x.push(r)
                  else {
                    y = decodeBitmap(!1, r, p, a, !1, null, c, f)
                    d.push(y)
                  }
                }
                if (e && !t) {
                  const e = s.tableBitmapSize.decode(h)
                  h.byteAlign()
                  let t
                  if (e === 0) t = readUncompressedBitmap(h, i, p)
                  else {
                    const n = h.end
                    const r = h.position + e
                    h.end = r
                    t = decodeMMRBitmap(h, i, p, !1)
                    h.end = n
                    h.position = r
                  }
                  const n = x.length
                  if (o === n - 1) d.push(t)
                  else {
                    let e
                    let r
                    let i
                    let s
                    let a
                    let c = 0
                    for (e = o; e < n; e++) {
                      s = x[e]
                      i = c + s
                      a = []
                      for (r = 0; r < p; r++) a.push(t[r].subarray(c, i))
                      d.push(a)
                      c = i
                    }
                  }
                }
              }
              const w = []
              const T = []
              let S
              let C
              let P = !1
              const v = n.length + r
              for (; T.length < v; ) {
                let t = e ? y.decode(h) : decodeInteger(b, 'IAEX', m)
                for (; t--; ) T.push(P)
                P = !P
              }
              for (S = 0, C = n.length; S < C; S++) T[S] && w.push(n[S])
              for (let e = 0; e < r; S++, e++) T[S] && w.push(d[e])
              return w
            })(
              e.huffman,
              e.refinement,
              u,
              e.numberOfNewSymbols,
              e.numberOfExportedSymbols,
              a,
              e.template,
              e.at,
              e.refinementTemplate,
              e.refinementAt,
              f,
              c
            )
          }

          onImmediateTextRegion(e, t, n, r, o) {
            const s = e.info
            let a
            let c
            const l = this.symbols
            const u = []
            for (const e of t) {
              const t = l[e]
              t && u.push(...t)
            }
            const f = (0, i.log2)(u.length)
            if (e.huffman) {
              c = new Reader(n, r, o)
              a = (function getTextRegionHuffmanTables(e, t, n, r, i) {
                const o = []
                for (let e = 0; e <= 34; e++) {
                  const t = i.readBits(4)
                  o.push(new HuffmanLine([e, t, 0, 0]))
                }
                const s = new HuffmanTable(o, !1)
                o.length = 0
                for (let e = 0; e < r; ) {
                  const t = s.decode(i)
                  if (t >= 32) {
                    let n
                    let r
                    let s
                    switch (t) {
                      case 32:
                        if (e === 0) throw new Jbig2Error('no previous value in symbol ID table')
                        r = i.readBits(2) + 3
                        n = o[e - 1].prefixLength
                        break
                      case 33:
                        r = i.readBits(3) + 3
                        n = 0
                        break
                      case 34:
                        r = i.readBits(7) + 11
                        n = 0
                        break
                      default:
                        throw new Jbig2Error('invalid code length in symbol ID table')
                    }
                    for (s = 0; s < r; s++) {
                      o.push(new HuffmanLine([e, n, 0, 0]))
                      e++
                    }
                  } else {
                    o.push(new HuffmanLine([e, t, 0, 0]))
                    e++
                  }
                }
                i.byteAlign()
                const a = new HuffmanTable(o, !1)
                let c
                let l
                let u
                let f = 0
                switch (e.huffmanFS) {
                  case 0:
                  case 1:
                    c = getStandardTable(e.huffmanFS + 6)
                    break
                  case 3:
                    c = getCustomHuffmanTable(f, t, n)
                    f++
                    break
                  default:
                    throw new Jbig2Error('invalid Huffman FS selector')
                }
                switch (e.huffmanDS) {
                  case 0:
                  case 1:
                  case 2:
                    l = getStandardTable(e.huffmanDS + 8)
                    break
                  case 3:
                    l = getCustomHuffmanTable(f, t, n)
                    f++
                    break
                  default:
                    throw new Jbig2Error('invalid Huffman DS selector')
                }
                switch (e.huffmanDT) {
                  case 0:
                  case 1:
                  case 2:
                    u = getStandardTable(e.huffmanDT + 11)
                    break
                  case 3:
                    u = getCustomHuffmanTable(f, t, n)
                    f++
                    break
                  default:
                    throw new Jbig2Error('invalid Huffman DT selector')
                }
                if (e.refinement) throw new Jbig2Error('refinement with Huffman is not supported')
                return { symbolIDTable: a, tableFirstS: c, tableDeltaS: l, tableDeltaT: u }
              })(e, t, this.customTables, u.length, c)
            }
            const h = new DecodingContext(n, r, o)
            const d = decodeTextRegion(
              e.huffman,
              e.refinement,
              s.width,
              s.height,
              e.defaultPixelValue,
              e.numberOfSymbolInstances,
              e.stripSize,
              u,
              f,
              e.transposed,
              e.dsOffset,
              e.referenceCorner,
              e.combinationOperator,
              a,
              e.refinementTemplate,
              e.refinementAt,
              h,
              e.logStripSize,
              c
            )
            this.drawBitmap(s, d)
          }

          onImmediateLosslessTextRegion() {
            this.onImmediateTextRegion(...arguments)
          }

          onPatternDictionary(e, t, n, r, i) {
            let o = this.patterns
            o || (this.patterns = o = {})
            const s = new DecodingContext(n, r, i)
            o[t] = (function decodePatternDictionary(e, t, n, r, i, o) {
              const s = []
              if (!e) {
                s.push({ x: -t, y: 0 })
                i === 0 && s.push({ x: -3, y: -1 }, { x: 2, y: -2 }, { x: -2, y: -2 })
              }
              const a = decodeBitmap(e, (r + 1) * t, n, i, !1, null, s, o)
              const c = []
              for (let e = 0; e <= r; e++) {
                const r = []
                const i = t * e
                const o = i + t
                for (let e = 0; e < n; e++) r.push(a[e].subarray(i, o))
                c.push(r)
              }
              return c
            })(e.mmr, e.patternWidth, e.patternHeight, e.maxPatternIndex, e.template, s)
          }

          onImmediateHalftoneRegion(e, t, n, r, o) {
            const s = this.patterns[t[0]]
            const a = e.info
            const c = new DecodingContext(n, r, o)
            const l = (function decodeHalftoneRegion(e, t, n, r, o, s, a, c, l, u, f, h, d, p, g) {
              if (a) throw new Jbig2Error('skip is not supported')
              if (c !== 0)
                throw new Jbig2Error(`operator "${c}" is not supported in halftone region`)
              const m = []
              let b
              let y
              let x
              for (b = 0; b < o; b++) {
                x = new Uint8Array(r)
                if (s) for (y = 0; y < r; y++) x[y] = s
                m.push(x)
              }
              const w = t.length
              const T = t[0]
              const S = T[0].length
              const C = T.length
              const P = (0, i.log2)(w)
              const v = []
              if (!e) {
                v.push({ x: n <= 1 ? 3 : 2, y: -1 })
                n === 0 && v.push({ x: -3, y: -1 }, { x: 2, y: -2 }, { x: -2, y: -2 })
              }
              const E = []
              let I
              let A
              let k
              let O
              let _
              let B
              let D
              let M
              let R
              let L
              let U
              e && (I = new Reader(g.data, g.start, g.end))
              for (b = P - 1; b >= 0; b--) {
                A = e ? decodeMMRBitmap(I, l, u, !0) : decodeBitmap(!1, l, u, n, !1, null, v, g)
                E[b] = A
              }
              for (k = 0; k < u; k++)
                for (O = 0; O < l; O++) {
                  _ = 0
                  B = 0
                  for (y = P - 1; y >= 0; y--) {
                    _ ^= E[y][k][O]
                    B |= _ << y
                  }
                  D = t[B]
                  M = (f + k * p + O * d) >> 8
                  R = (h + k * d - O * p) >> 8
                  if (M >= 0 && M + S <= r && R >= 0 && R + C <= o)
                    for (b = 0; b < C; b++) {
                      U = m[R + b]
                      L = D[b]
                      for (y = 0; y < S; y++) U[M + y] |= L[y]
                    }
                  else {
                    let e
                    let t
                    for (b = 0; b < C; b++) {
                      t = R + b
                      if (!(t < 0 || t >= o)) {
                        U = m[t]
                        L = D[b]
                        for (y = 0; y < S; y++) {
                          e = M + y
                          e >= 0 && e < r && (U[e] |= L[y])
                        }
                      }
                    }
                  }
                }
              return m
            })(
              e.mmr,
              s,
              e.template,
              a.width,
              a.height,
              e.defaultPixelValue,
              e.enableSkip,
              e.combinationOperator,
              e.gridWidth,
              e.gridHeight,
              e.gridOffsetX,
              e.gridOffsetY,
              e.gridVectorX,
              e.gridVectorY,
              c
            )
            this.drawBitmap(a, l)
          }

          onImmediateLosslessHalftoneRegion() {
            this.onImmediateHalftoneRegion(...arguments)
          }

          onTables(e, t, n, r) {
            let o = this.customTables
            o || (this.customTables = o = {})
            o[e] = (function decodeTablesSegment(e, t, n) {
              const r = e[t]
              const o = 4294967295 & (0, i.readUint32)(e, t + 1)
              const s = 4294967295 & (0, i.readUint32)(e, t + 5)
              const a = new Reader(e, t + 9, n)
              const c = 1 + ((r >> 1) & 7)
              const l = 1 + ((r >> 4) & 7)
              const u = []
              let f
              let h
              let d = o
              do {
                f = a.readBits(c)
                h = a.readBits(l)
                u.push(new HuffmanLine([d, f, h, 0]))
                d += 1 << h
              } while (d < s)
              f = a.readBits(c)
              u.push(new HuffmanLine([o - 1, f, 32, 0, 'lower']))
              f = a.readBits(c)
              u.push(new HuffmanLine([s, f, 32, 0]))
              if (1 & r) {
                f = a.readBits(c)
                u.push(new HuffmanLine([f, 0]))
              }
              return new HuffmanTable(u, !1)
            })(t, n, r)
          }
        }
        class HuffmanLine {
          constructor(e) {
            if (e.length === 2) {
              this.isOOB = !0
              this.rangeLow = 0
              this.prefixLength = e[0]
              this.rangeLength = 0
              this.prefixCode = e[1]
              this.isLowerRange = !1
            } else {
              this.isOOB = !1
              this.rangeLow = e[0]
              this.prefixLength = e[1]
              this.rangeLength = e[2]
              this.prefixCode = e[3]
              this.isLowerRange = e[4] === 'lower'
            }
          }
        }
        class HuffmanTreeNode {
          constructor(e) {
            this.children = []
            if (e) {
              this.isLeaf = !0
              this.rangeLength = e.rangeLength
              this.rangeLow = e.rangeLow
              this.isLowerRange = e.isLowerRange
              this.isOOB = e.isOOB
            } else this.isLeaf = !1
          }

          buildTree(e, t) {
            const n = (e.prefixCode >> t) & 1
            if (t <= 0) this.children[n] = new HuffmanTreeNode(e)
            else {
              let r = this.children[n]
              r || (this.children[n] = r = new HuffmanTreeNode(null))
              r.buildTree(e, t - 1)
            }
          }

          decodeNode(e) {
            if (this.isLeaf) {
              if (this.isOOB) return null
              const t = e.readBits(this.rangeLength)
              return this.rangeLow + (this.isLowerRange ? -t : t)
            }
            const t = this.children[e.readBit()]
            if (!t) throw new Jbig2Error('invalid Huffman data')
            return t.decodeNode(e)
          }
        }
        class HuffmanTable {
          constructor(e, t) {
            t || this.assignPrefixCodes(e)
            this.rootNode = new HuffmanTreeNode(null)
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t]
              n.prefixLength > 0 && this.rootNode.buildTree(n, n.prefixLength - 1)
            }
          }

          decode(e) {
            return this.rootNode.decodeNode(e)
          }

          assignPrefixCodes(e) {
            const t = e.length
            let n = 0
            for (let r = 0; r < t; r++) n = Math.max(n, e[r].prefixLength)
            const r = new Uint32Array(n + 1)
            for (let n = 0; n < t; n++) r[e[n].prefixLength]++
            let i
            let o
            let s
            let a = 1
            let c = 0
            r[0] = 0
            for (; a <= n; ) {
              c = (c + r[a - 1]) << 1
              i = c
              o = 0
              for (; o < t; ) {
                s = e[o]
                if (s.prefixLength === a) {
                  s.prefixCode = i
                  i++
                }
                o++
              }
              a++
            }
          }
        }
        const d = {}
        function getStandardTable(e) {
          let t
          let n = d[e]
          if (n) return n
          switch (e) {
            case 1:
              t = [
                [0, 1, 4, 0],
                [16, 2, 8, 2],
                [272, 3, 16, 6],
                [65808, 3, 32, 7]
              ]
              break
            case 2:
              t = [
                [0, 1, 0, 0],
                [1, 2, 0, 2],
                [2, 3, 0, 6],
                [3, 4, 3, 14],
                [11, 5, 6, 30],
                [75, 6, 32, 62],
                [6, 63]
              ]
              break
            case 3:
              t = [
                [-256, 8, 8, 254],
                [0, 1, 0, 0],
                [1, 2, 0, 2],
                [2, 3, 0, 6],
                [3, 4, 3, 14],
                [11, 5, 6, 30],
                [-257, 8, 32, 255, 'lower'],
                [75, 7, 32, 126],
                [6, 62]
              ]
              break
            case 4:
              t = [
                [1, 1, 0, 0],
                [2, 2, 0, 2],
                [3, 3, 0, 6],
                [4, 4, 3, 14],
                [12, 5, 6, 30],
                [76, 5, 32, 31]
              ]
              break
            case 5:
              t = [
                [-255, 7, 8, 126],
                [1, 1, 0, 0],
                [2, 2, 0, 2],
                [3, 3, 0, 6],
                [4, 4, 3, 14],
                [12, 5, 6, 30],
                [-256, 7, 32, 127, 'lower'],
                [76, 6, 32, 62]
              ]
              break
            case 6:
              t = [
                [-2048, 5, 10, 28],
                [-1024, 4, 9, 8],
                [-512, 4, 8, 9],
                [-256, 4, 7, 10],
                [-128, 5, 6, 29],
                [-64, 5, 5, 30],
                [-32, 4, 5, 11],
                [0, 2, 7, 0],
                [128, 3, 7, 2],
                [256, 3, 8, 3],
                [512, 4, 9, 12],
                [1024, 4, 10, 13],
                [-2049, 6, 32, 62, 'lower'],
                [2048, 6, 32, 63]
              ]
              break
            case 7:
              t = [
                [-1024, 4, 9, 8],
                [-512, 3, 8, 0],
                [-256, 4, 7, 9],
                [-128, 5, 6, 26],
                [-64, 5, 5, 27],
                [-32, 4, 5, 10],
                [0, 4, 5, 11],
                [32, 5, 5, 28],
                [64, 5, 6, 29],
                [128, 4, 7, 12],
                [256, 3, 8, 1],
                [512, 3, 9, 2],
                [1024, 3, 10, 3],
                [-1025, 5, 32, 30, 'lower'],
                [2048, 5, 32, 31]
              ]
              break
            case 8:
              t = [
                [-15, 8, 3, 252],
                [-7, 9, 1, 508],
                [-5, 8, 1, 253],
                [-3, 9, 0, 509],
                [-2, 7, 0, 124],
                [-1, 4, 0, 10],
                [0, 2, 1, 0],
                [2, 5, 0, 26],
                [3, 6, 0, 58],
                [4, 3, 4, 4],
                [20, 6, 1, 59],
                [22, 4, 4, 11],
                [38, 4, 5, 12],
                [70, 5, 6, 27],
                [134, 5, 7, 28],
                [262, 6, 7, 60],
                [390, 7, 8, 125],
                [646, 6, 10, 61],
                [-16, 9, 32, 510, 'lower'],
                [1670, 9, 32, 511],
                [2, 1]
              ]
              break
            case 9:
              t = [
                [-31, 8, 4, 252],
                [-15, 9, 2, 508],
                [-11, 8, 2, 253],
                [-7, 9, 1, 509],
                [-5, 7, 1, 124],
                [-3, 4, 1, 10],
                [-1, 3, 1, 2],
                [1, 3, 1, 3],
                [3, 5, 1, 26],
                [5, 6, 1, 58],
                [7, 3, 5, 4],
                [39, 6, 2, 59],
                [43, 4, 5, 11],
                [75, 4, 6, 12],
                [139, 5, 7, 27],
                [267, 5, 8, 28],
                [523, 6, 8, 60],
                [779, 7, 9, 125],
                [1291, 6, 11, 61],
                [-32, 9, 32, 510, 'lower'],
                [3339, 9, 32, 511],
                [2, 0]
              ]
              break
            case 10:
              t = [
                [-21, 7, 4, 122],
                [-5, 8, 0, 252],
                [-4, 7, 0, 123],
                [-3, 5, 0, 24],
                [-2, 2, 2, 0],
                [2, 5, 0, 25],
                [3, 6, 0, 54],
                [4, 7, 0, 124],
                [5, 8, 0, 253],
                [6, 2, 6, 1],
                [70, 5, 5, 26],
                [102, 6, 5, 55],
                [134, 6, 6, 56],
                [198, 6, 7, 57],
                [326, 6, 8, 58],
                [582, 6, 9, 59],
                [1094, 6, 10, 60],
                [2118, 7, 11, 125],
                [-22, 8, 32, 254, 'lower'],
                [4166, 8, 32, 255],
                [2, 2]
              ]
              break
            case 11:
              t = [
                [1, 1, 0, 0],
                [2, 2, 1, 2],
                [4, 4, 0, 12],
                [5, 4, 1, 13],
                [7, 5, 1, 28],
                [9, 5, 2, 29],
                [13, 6, 2, 60],
                [17, 7, 2, 122],
                [21, 7, 3, 123],
                [29, 7, 4, 124],
                [45, 7, 5, 125],
                [77, 7, 6, 126],
                [141, 7, 32, 127]
              ]
              break
            case 12:
              t = [
                [1, 1, 0, 0],
                [2, 2, 0, 2],
                [3, 3, 1, 6],
                [5, 5, 0, 28],
                [6, 5, 1, 29],
                [8, 6, 1, 60],
                [10, 7, 0, 122],
                [11, 7, 1, 123],
                [13, 7, 2, 124],
                [17, 7, 3, 125],
                [25, 7, 4, 126],
                [41, 8, 5, 254],
                [73, 8, 32, 255]
              ]
              break
            case 13:
              t = [
                [1, 1, 0, 0],
                [2, 3, 0, 4],
                [3, 4, 0, 12],
                [4, 5, 0, 28],
                [5, 4, 1, 13],
                [7, 3, 3, 5],
                [15, 6, 1, 58],
                [17, 6, 2, 59],
                [21, 6, 3, 60],
                [29, 6, 4, 61],
                [45, 6, 5, 62],
                [77, 7, 6, 126],
                [141, 7, 32, 127]
              ]
              break
            case 14:
              t = [
                [-2, 3, 0, 4],
                [-1, 3, 0, 5],
                [0, 1, 0, 0],
                [1, 3, 0, 6],
                [2, 3, 0, 7]
              ]
              break
            case 15:
              t = [
                [-24, 7, 4, 124],
                [-8, 6, 2, 60],
                [-4, 5, 1, 28],
                [-2, 4, 0, 12],
                [-1, 3, 0, 4],
                [0, 1, 0, 0],
                [1, 3, 0, 5],
                [2, 4, 0, 13],
                [3, 5, 1, 29],
                [5, 6, 2, 61],
                [9, 7, 4, 125],
                [-25, 7, 32, 126, 'lower'],
                [25, 7, 32, 127]
              ]
              break
            default:
              throw new Jbig2Error(`standard table B.${e} does not exist`)
          }
          for (let e = 0, n = t.length; e < n; e++) t[e] = new HuffmanLine(t[e])
          n = new HuffmanTable(t, !0)
          d[e] = n
          return n
        }
        class Reader {
          constructor(e, t, n) {
            this.data = e
            this.start = t
            this.end = n
            this.position = t
            this.shift = -1
            this.currentByte = 0
          }

          readBit() {
            if (this.shift < 0) {
              if (this.position >= this.end) throw new Jbig2Error('end of data while reading bit')
              this.currentByte = this.data[this.position++]
              this.shift = 7
            }
            const e = (this.currentByte >> this.shift) & 1
            this.shift--
            return e
          }

          readBits(e) {
            let t
            let n = 0
            for (t = e - 1; t >= 0; t--) n |= this.readBit() << t
            return n
          }

          byteAlign() {
            this.shift = -1
          }

          next() {
            return this.position >= this.end ? -1 : this.data[this.position++]
          }
        }
        function getCustomHuffmanTable(e, t, n) {
          let r = 0
          for (let i = 0, o = t.length; i < o; i++) {
            const o = n[t[i]]
            if (o) {
              if (e === r) return o
              r++
            }
          }
          throw new Jbig2Error("can't find custom Huffman table")
        }
        function readUncompressedBitmap(e, t, n) {
          const r = []
          for (let i = 0; i < n; i++) {
            const n = new Uint8Array(t)
            r.push(n)
            for (let r = 0; r < t; r++) n[r] = e.readBit()
            e.byteAlign()
          }
          return r
        }
        function decodeMMRBitmap(e, t, n, r) {
          const i = { K: -1, Columns: t, Rows: n, BlackIs1: !0, EndOfBlock: r }
          const o = new s.CCITTFaxDecoder(e, i)
          const a = []
          let c
          let l = !1
          for (let e = 0; e < n; e++) {
            const e = new Uint8Array(t)
            a.push(e)
            let n = -1
            for (let r = 0; r < t; r++) {
              if (n < 0) {
                c = o.readNextChar()
                if (c === -1) {
                  c = 0
                  l = !0
                }
                n = 7
              }
              e[r] = (c >> n) & 1
              n--
            }
          }
          if (r && !l) {
            const e = 5
            for (let t = 0; t < e && o.readNextChar() !== -1; t++);
          }
          return a
        }
        t.Jbig2Image = class Jbig2Image {
          parseChunks(e) {
            return (function parseJbig2Chunks(e) {
              const t = new SimpleSegmentVisitor()
              for (let n = 0, r = e.length; n < r; n++) {
                const r = e[n]
                processSegments(readSegments({}, r.data, r.start, r.end), t)
              }
              return t.buffer
            })(e)
          }

          parse(e) {
            const {
              imgData: t,
              width: n,
              height: r
            } = (function parseJbig2(e) {
              const t = e.length
              let n = 0
              if (
                e[n] !== 151 ||
                e[n + 1] !== 74 ||
                e[n + 2] !== 66 ||
                e[n + 3] !== 50 ||
                e[n + 4] !== 13 ||
                e[n + 5] !== 10 ||
                e[n + 6] !== 26 ||
                e[n + 7] !== 10
              )
                throw new Jbig2Error('parseJbig2 - invalid header.')
              const r = Object.create(null)
              n += 8
              const o = e[n++]
              r.randomAccess = !(1 & o)
              if (!(2 & o)) {
                r.numberOfPages = (0, i.readUint32)(e, n)
                n += 4
              }
              const s = readSegments(r, e, n, t)
              const a = new SimpleSegmentVisitor()
              processSegments(s, a)
              const { width: c, height: l } = a.currentPageInfo
              const u = a.buffer
              const f = new Uint8ClampedArray(c * l)
              let h = 0
              let d = 0
              for (let e = 0; e < l; e++) {
                let e
                let t = 0
                for (let n = 0; n < c; n++) {
                  if (!t) {
                    t = 128
                    e = u[d++]
                  }
                  f[h++] = e & t ? 0 : 255
                  t >>= 1
                }
              }
              return { imgData: f, width: c, height: l }
            })(e)
            this.width = n
            this.height = r
            return t
          }
        }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.XRefParseException =
          t.XRefEntryException =
          t.ParserEOFException =
          t.MissingDataException =
          t.DocStats =
            void 0
        t.collectActions = function collectActions(e, t, n) {
          const o = Object.create(null)
          const s = getInheritableProperty({ dict: t, key: 'AA', stopWhenFound: !1 })
          if (s)
            for (let t = s.length - 1; t >= 0; t--) {
              const r = s[t]
              if (r instanceof i.Dict)
                for (const t of r.getKeys()) {
                  const s = n[t]
                  if (!s) continue
                  const a = r.getRaw(t)
                  const c = new i.RefSet()
                  const l = []
                  _collectJS(a, e, l, c)
                  l.length > 0 && (o[s] = l)
                }
            }
          if (t.has('A')) {
            const n = t.get('A')
            const r = new i.RefSet()
            const s = []
            _collectJS(n, e, s, r)
            s.length > 0 && (o.Action = s)
          }
          return (0, r.objectSize)(o) > 0 ? o : null
        }
        t.encodeToXmlString = function encodeToXmlString(e) {
          const t = []
          let n = 0
          for (let r = 0, i = e.length; r < i; r++) {
            const i = e.codePointAt(r)
            if (i >= 32 && i <= 126) {
              const o = a[i]
              if (o) {
                n < r && t.push(e.substring(n, r))
                t.push(o)
                n = r + 1
              }
            } else {
              n < r && t.push(e.substring(n, r))
              t.push(`&#x${i.toString(16).toUpperCase()};`)
              i > 55295 && (i < 57344 || i > 65533) && r++
              n = r + 1
            }
          }
          if (t.length === 0) return e
          n < e.length && t.push(e.substring(n, e.length))
          return t.join('')
        }
        t.escapePDFName = function escapePDFName(e) {
          const t = []
          let n = 0
          for (let r = 0, i = e.length; r < i; r++) {
            const i = e.charCodeAt(r)
            if (
              i < 33 ||
              i > 126 ||
              i === 35 ||
              i === 40 ||
              i === 41 ||
              i === 60 ||
              i === 62 ||
              i === 91 ||
              i === 93 ||
              i === 123 ||
              i === 125 ||
              i === 47 ||
              i === 37
            ) {
              n < r && t.push(e.substring(n, r))
              t.push(`#${i.toString(16)}`)
              n = r + 1
            }
          }
          if (t.length === 0) return e
          n < e.length && t.push(e.substring(n, e.length))
          return t.join('')
        }
        t.getArrayLookupTableFactory = function getArrayLookupTableFactory(e) {
          let t
          return function () {
            if (e) {
              let n = e()
              e = null
              t = Object.create(null)
              for (let e = 0, r = n.length; e < r; e += 2) t[n[e]] = n[e + 1]
              n = null
            }
            return t
          }
        }
        t.getInheritableProperty = getInheritableProperty
        t.getLookupTableFactory = function getLookupTableFactory(e) {
          let t
          return function () {
            if (e) {
              t = Object.create(null)
              e(t)
              e = null
            }
            return t
          }
        }
        t.getNewAnnotationsMap = function getNewAnnotationsMap(e) {
          if (!e) return null
          const t = new Map()
          for (const [n, i] of e) {
            if (!n.startsWith(r.AnnotationEditorPrefix)) continue
            let e = t.get(i.pageIndex)
            if (!e) {
              e = []
              t.set(i.pageIndex, e)
            }
            e.push(i)
          }
          return t.size > 0 ? t : null
        }
        t.isWhiteSpace = function isWhiteSpace(e) {
          return e === 32 || e === 9 || e === 13 || e === 10
        }
        t.log2 = function log2(e) {
          if (e <= 0) return 0
          return Math.ceil(Math.log2(e))
        }
        t.numberToString = function numberToString(e) {
          if (Number.isInteger(e)) return e.toString()
          const t = Math.round(100 * e)
          if (t % 100 == 0) return (t / 100).toString()
          if (t % 10 == 0) return e.toFixed(1)
          return e.toFixed(2)
        }
        t.parseXFAPath = function parseXFAPath(e) {
          const t = /(.+)\[(\d+)\]$/
          return e.split('.').map((e) => {
            const n = e.match(t)
            return n ? { name: n[1], pos: parseInt(n[2], 10) } : { name: e, pos: 0 }
          })
        }
        t.readInt8 = function readInt8(e, t) {
          return (e[t] << 24) >> 24
        }
        t.readUint16 = function readUint16(e, t) {
          return (e[t] << 8) | e[t + 1]
        }
        t.readUint32 = function readUint32(e, t) {
          return ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        }
        t.recoverJsURL = function recoverJsURL(e) {
          const t = new RegExp(
            `^\\s*(${['app.launchURL', 'window.open', 'xfa.host.gotoURL']
              .join('|')
              .split('.')
              .join('\\.')})\\((?:'|")([^'"]*)(?:'|")(?:,\\s*(\\w+)\\)|\\))`,
            'i'
          ).exec(e)
          if (t && t[2]) {
            const e = t[2]
            let n = !1
            t[3] === 'true' && t[1] === 'app.launchURL' && (n = !0)
            return { url: e, newWindow: n }
          }
          return null
        }
        t.toRomanNumerals = function toRomanNumerals(e) {
          const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ;(0, r.assert)(Number.isInteger(e) && e > 0, 'The number should be a positive integer.')
          const n = []
          let i
          for (; e >= 1e3; ) {
            e -= 1e3
            n.push('M')
          }
          i = (e / 100) | 0
          e %= 100
          n.push(s[i])
          i = (e / 10) | 0
          e %= 10
          n.push(s[10 + i])
          n.push(s[20 + e])
          const o = n.join('')
          return t ? o.toLowerCase() : o
        }
        t.validateCSSFont = function validateCSSFont(e) {
          const t = new Set([
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
            '1000',
            'normal',
            'bold',
            'bolder',
            'lighter'
          ])
          const { fontFamily: n, fontWeight: i, italicAngle: o } = e
          if (/^".*"$/.test(n)) {
            if (/[^\\]"/.test(n.slice(1, n.length - 1))) {
              ;(0, r.warn)(`XFA - FontFamily contains some unescaped ": ${n}.`)
              return !1
            }
          } else if (/^'.*'$/.test(n)) {
            if (/[^\\]'/.test(n.slice(1, n.length - 1))) {
              ;(0, r.warn)(`XFA - FontFamily contains some unescaped ': ${n}.`)
              return !1
            }
          } else
            for (const e of n.split(/[ \t]+/))
              if (/^(\d|(-(\d|-)))/.test(e) || !/^[\w-\\]+$/.test(e)) {
                ;(0, r.warn)(`XFA - FontFamily contains some invalid <custom-ident>: ${n}.`)
                return !1
              }
          const s = i ? i.toString() : ''
          e.fontWeight = t.has(s) ? s : '400'
          const a = parseFloat(o)
          e.italicAngle = isNaN(a) || a < -90 || a > 90 ? '14' : o.toString()
          return !0
        }
        var r = n(1)
        var i = n(88)
        const o = n(89)
        class MissingDataException extends r.BaseException {
          constructor(e, t) {
            super(`Missing data [${e}, ${t})`, 'MissingDataException')
            this.begin = e
            this.end = t
          }
        }
        t.MissingDataException = MissingDataException
        class ParserEOFException extends r.BaseException {
          constructor(e) {
            super(e, 'ParserEOFException')
          }
        }
        t.ParserEOFException = ParserEOFException
        class XRefEntryException extends r.BaseException {
          constructor(e) {
            super(e, 'XRefEntryException')
          }
        }
        t.XRefEntryException = XRefEntryException
        class XRefParseException extends r.BaseException {
          constructor(e) {
            super(e, 'XRefParseException')
          }
        }
        t.XRefParseException = XRefParseException
        t.DocStats = class DocStats {
          constructor(e) {
            this._handler = e
            this._streamTypes = new Set()
            this._fontTypes = new Set()
          }

          _send() {
            const e = Object.create(null)
            const t = Object.create(null)
            for (const t of this._streamTypes) e[t] = !0
            for (const e of this._fontTypes) t[e] = !0
            this._handler.send('DocStats', { streamTypes: e, fontTypes: t })
          }

          addStreamType(e) {
            if (!this._streamTypes.has(e)) {
              this._streamTypes.add(e)
              this._send()
            }
          }

          addFontType(e) {
            if (!this._fontTypes.has(e)) {
              this._fontTypes.add(e)
              this._send()
            }
          }
        }
        function getInheritableProperty(e) {
          let t
          let { dict: n, key: r, getArray: o = !1, stopWhenFound: s = !0 } = e
          const a = new i.RefSet()
          for (; n instanceof i.Dict && (!n.objId || !a.has(n.objId)); ) {
            n.objId && a.put(n.objId)
            const e = o ? n.getArray(r) : n.get(r)
            if (void 0 !== e) {
              if (s) return e
              t || (t = [])
              t.push(e)
            }
            n = n.get('Parent')
          }
          return t
        }
        const s = [
          '',
          'C',
          'CC',
          'CCC',
          'CD',
          'D',
          'DC',
          'DCC',
          'DCCC',
          'CM',
          '',
          'X',
          'XX',
          'XXX',
          'XL',
          'L',
          'LX',
          'LXX',
          'LXXX',
          'XC',
          '',
          'I',
          'II',
          'III',
          'IV',
          'V',
          'VI',
          'VII',
          'VIII',
          'IX'
        ]
        function _collectJS(e, t, n, s) {
          if (!e) return
          let a = null
          if (e instanceof i.Ref) {
            if (s.has(e)) return
            a = e
            s.put(a)
            e = t.fetch(e)
          }
          if (Array.isArray(e)) for (const r of e) _collectJS(r, t, n, s)
          else if (e instanceof i.Dict) {
            if ((0, i.isName)(e.get('S'), 'JavaScript')) {
              const t = e.get('JS')
              let i
              t instanceof o.BaseStream ? (i = t.getString()) : typeof t === 'string' && (i = t)
              i = i && (0, r.stringToPDFString)(i).replace(/\u0000/g, '')
              i && n.push(i)
            }
            _collectJS(e.getRaw('Next'), t, n, s)
          }
          a && s.remove(a)
        }
        const a = { 60: '&lt;', 62: '&gt;', 38: '&amp;', 34: '&quot;', 39: '&apos;' }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.RefSetCache = t.RefSet = t.Ref = t.Name = t.EOF = t.Dict = t.Cmd = t.CIRCULAR_REF = void 0
        t.clearPrimitiveCaches = function clearPrimitiveCaches() {
          a._clearCache()
          s._clearCache()
          l._clearCache()
        }
        t.isCmd = function isCmd(e, t) {
          return e instanceof a && (void 0 === t || e.cmd === t)
        }
        t.isDict = function isDict(e, t) {
          return e instanceof Dict && (void 0 === t || isName(e.get('Type'), t))
        }
        t.isName = isName
        t.isRefsEqual = function isRefsEqual(e, t) {
          return e.num === t.num && e.gen === t.gen
        }
        const r = n(1)
        const i = Symbol('CIRCULAR_REF')
        t.CIRCULAR_REF = i
        const o = Symbol('EOF')
        t.EOF = o
        const s = (function NameClosure() {
          let e = Object.create(null)
          class Name {
            constructor(e) {
              this.name = e
            }

            static get(t) {
              return e[t] || (e[t] = new Name(t))
            }

            static _clearCache() {
              e = Object.create(null)
            }
          }
          return Name
        })()
        t.Name = s
        const a = (function CmdClosure() {
          let e = Object.create(null)
          class Cmd {
            constructor(e) {
              this.cmd = e
            }

            static get(t) {
              return e[t] || (e[t] = new Cmd(t))
            }

            static _clearCache() {
              e = Object.create(null)
            }
          }
          return Cmd
        })()
        t.Cmd = a
        const c = function nonSerializableClosure() {
          return c
        }
        class Dict {
          constructor() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
            this._map = Object.create(null)
            this.xref = e
            this.objId = null
            this.suppressEncryption = !1
            this.__nonSerializable__ = c
          }

          assignXref(e) {
            this.xref = e
          }

          get size() {
            return Object.keys(this._map).length
          }

          get(e, t, n) {
            let r = this._map[e]
            if (void 0 === r && void 0 !== t) {
              r = this._map[t]
              void 0 === r && void 0 !== n && (r = this._map[n])
            }
            return r instanceof l && this.xref ? this.xref.fetch(r, this.suppressEncryption) : r
          }

          async getAsync(e, t, n) {
            let r = this._map[e]
            if (void 0 === r && void 0 !== t) {
              r = this._map[t]
              void 0 === r && void 0 !== n && (r = this._map[n])
            }
            return r instanceof l && this.xref
              ? this.xref.fetchAsync(r, this.suppressEncryption)
              : r
          }

          getArray(e, t, n) {
            let r = this._map[e]
            if (void 0 === r && void 0 !== t) {
              r = this._map[t]
              void 0 === r && void 0 !== n && (r = this._map[n])
            }
            r instanceof l && this.xref && (r = this.xref.fetch(r, this.suppressEncryption))
            if (Array.isArray(r)) {
              r = r.slice()
              for (let e = 0, t = r.length; e < t; e++)
                r[e] instanceof l &&
                  this.xref &&
                  (r[e] = this.xref.fetch(r[e], this.suppressEncryption))
            }
            return r
          }

          getRaw(e) {
            return this._map[e]
          }

          getKeys() {
            return Object.keys(this._map)
          }

          getRawValues() {
            return Object.values(this._map)
          }

          set(e, t) {
            this._map[e] = t
          }

          has(e) {
            return void 0 !== this._map[e]
          }

          forEach(e) {
            for (const t in this._map) e(t, this.get(t))
          }

          static get empty() {
            const e = new Dict(null)
            e.set = (e, t) => {
              ;(0, r.unreachable)('Should not call `set` on the empty dictionary.')
            }
            return (0, r.shadow)(this, 'empty', e)
          }

          static merge(e) {
            const { xref: t, dictArray: n, mergeSubDicts: r = !1 } = e
            const i = new Dict(t)
            const o = new Map()
            for (const e of n)
              if (e instanceof Dict)
                for (const [t, n] of Object.entries(e._map)) {
                  let e = o.get(t)
                  if (void 0 === e) {
                    e = []
                    o.set(t, e)
                  } else if (!(r && n instanceof Dict)) continue
                  e.push(n)
                }
            for (const [e, n] of o) {
              if (n.length === 1 || !(n[0] instanceof Dict)) {
                i._map[e] = n[0]
                continue
              }
              const r = new Dict(t)
              for (const e of n)
                for (const [t, n] of Object.entries(e._map)) void 0 === r._map[t] && (r._map[t] = n)
              r.size > 0 && (i._map[e] = r)
            }
            o.clear()
            return i.size > 0 ? i : Dict.empty
          }
        }
        t.Dict = Dict
        const l = (function RefClosure() {
          let e = Object.create(null)
          class Ref {
            constructor(e, t) {
              this.num = e
              this.gen = t
            }

            toString() {
              return this.gen === 0 ? `${this.num}R` : `${this.num}R${this.gen}`
            }

            static get(t, n) {
              const r = n === 0 ? `${t}R` : `${t}R${n}`
              return e[r] || (e[r] = new Ref(t, n))
            }

            static _clearCache() {
              e = Object.create(null)
            }
          }
          return Ref
        })()
        t.Ref = l
        class RefSet {
          constructor() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
            this._set = new Set(e && e._set)
          }

          has(e) {
            return this._set.has(e.toString())
          }

          put(e) {
            this._set.add(e.toString())
          }

          remove(e) {
            this._set.delete(e.toString())
          }

          [Symbol.iterator]() {
            return this._set.values()
          }

          clear() {
            this._set.clear()
          }
        }
        t.RefSet = RefSet
        class RefSetCache {
          constructor() {
            this._map = new Map()
          }

          get size() {
            return this._map.size
          }

          get(e) {
            return this._map.get(e.toString())
          }

          has(e) {
            return this._map.has(e.toString())
          }

          put(e, t) {
            this._map.set(e.toString(), t)
          }

          putAlias(e, t) {
            this._map.set(e.toString(), this.get(t))
          }

          [Symbol.iterator]() {
            return this._map.values()
          }

          clear() {
            this._map.clear()
          }
        }
        t.RefSetCache = RefSetCache
        function isName(e, t) {
          return e instanceof s && (void 0 === t || e.name === t)
        }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.BaseStream = void 0
        const r = n(1)
        class BaseStream {
          constructor() {
            this.constructor === BaseStream && (0, r.unreachable)('Cannot initialize BaseStream.')
          }

          get length() {
            ;(0, r.unreachable)('Abstract getter `length` accessed')
          }

          get isEmpty() {
            ;(0, r.unreachable)('Abstract getter `isEmpty` accessed')
          }

          get isDataLoaded() {
            return (0, r.shadow)(this, 'isDataLoaded', !0)
          }

          getByte() {
            ;(0, r.unreachable)('Abstract method `getByte` called')
          }

          getBytes(e) {
            ;(0, r.unreachable)('Abstract method `getBytes` called')
          }

          peekByte() {
            const e = this.getByte()
            e !== -1 && this.pos--
            return e
          }

          peekBytes(e) {
            const t = this.getBytes(e)
            this.pos -= t.length
            return t
          }

          getUint16() {
            const e = this.getByte()
            const t = this.getByte()
            return e === -1 || t === -1 ? -1 : (e << 8) + t
          }

          getInt32() {
            return (
              (this.getByte() << 24) +
              (this.getByte() << 16) +
              (this.getByte() << 8) +
              this.getByte()
            )
          }

          getByteRange(e, t) {
            ;(0, r.unreachable)('Abstract method `getByteRange` called')
          }

          getString(e) {
            return (0, r.bytesToString)(this.getBytes(e))
          }

          skip(e) {
            this.pos += e || 1
          }

          reset() {
            ;(0, r.unreachable)('Abstract method `reset` called')
          }

          moveStart() {
            ;(0, r.unreachable)('Abstract method `moveStart` called')
          }

          makeSubStream(e, t) {
            ;(0, r.unreachable)('Abstract method `makeSubStream` called')
          }

          getBaseStreams() {
            return null
          }
        }
        t.BaseStream = BaseStream
      },
      (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.ArithmeticDecoder = void 0
        const n = [
          { qe: 22017, nmps: 1, nlps: 1, switchFlag: 1 },
          { qe: 13313, nmps: 2, nlps: 6, switchFlag: 0 },
          { qe: 6145, nmps: 3, nlps: 9, switchFlag: 0 },
          { qe: 2753, nmps: 4, nlps: 12, switchFlag: 0 },
          { qe: 1313, nmps: 5, nlps: 29, switchFlag: 0 },
          { qe: 545, nmps: 38, nlps: 33, switchFlag: 0 },
          { qe: 22017, nmps: 7, nlps: 6, switchFlag: 1 },
          { qe: 21505, nmps: 8, nlps: 14, switchFlag: 0 },
          { qe: 18433, nmps: 9, nlps: 14, switchFlag: 0 },
          { qe: 14337, nmps: 10, nlps: 14, switchFlag: 0 },
          { qe: 12289, nmps: 11, nlps: 17, switchFlag: 0 },
          { qe: 9217, nmps: 12, nlps: 18, switchFlag: 0 },
          { qe: 7169, nmps: 13, nlps: 20, switchFlag: 0 },
          { qe: 5633, nmps: 29, nlps: 21, switchFlag: 0 },
          { qe: 22017, nmps: 15, nlps: 14, switchFlag: 1 },
          { qe: 21505, nmps: 16, nlps: 14, switchFlag: 0 },
          { qe: 20737, nmps: 17, nlps: 15, switchFlag: 0 },
          { qe: 18433, nmps: 18, nlps: 16, switchFlag: 0 },
          { qe: 14337, nmps: 19, nlps: 17, switchFlag: 0 },
          { qe: 13313, nmps: 20, nlps: 18, switchFlag: 0 },
          { qe: 12289, nmps: 21, nlps: 19, switchFlag: 0 },
          { qe: 10241, nmps: 22, nlps: 19, switchFlag: 0 },
          { qe: 9217, nmps: 23, nlps: 20, switchFlag: 0 },
          { qe: 8705, nmps: 24, nlps: 21, switchFlag: 0 },
          { qe: 7169, nmps: 25, nlps: 22, switchFlag: 0 },
          { qe: 6145, nmps: 26, nlps: 23, switchFlag: 0 },
          { qe: 5633, nmps: 27, nlps: 24, switchFlag: 0 },
          { qe: 5121, nmps: 28, nlps: 25, switchFlag: 0 },
          { qe: 4609, nmps: 29, nlps: 26, switchFlag: 0 },
          { qe: 4353, nmps: 30, nlps: 27, switchFlag: 0 },
          { qe: 2753, nmps: 31, nlps: 28, switchFlag: 0 },
          { qe: 2497, nmps: 32, nlps: 29, switchFlag: 0 },
          { qe: 2209, nmps: 33, nlps: 30, switchFlag: 0 },
          { qe: 1313, nmps: 34, nlps: 31, switchFlag: 0 },
          { qe: 1089, nmps: 35, nlps: 32, switchFlag: 0 },
          { qe: 673, nmps: 36, nlps: 33, switchFlag: 0 },
          { qe: 545, nmps: 37, nlps: 34, switchFlag: 0 },
          { qe: 321, nmps: 38, nlps: 35, switchFlag: 0 },
          { qe: 273, nmps: 39, nlps: 36, switchFlag: 0 },
          { qe: 133, nmps: 40, nlps: 37, switchFlag: 0 },
          { qe: 73, nmps: 41, nlps: 38, switchFlag: 0 },
          { qe: 37, nmps: 42, nlps: 39, switchFlag: 0 },
          { qe: 21, nmps: 43, nlps: 40, switchFlag: 0 },
          { qe: 9, nmps: 44, nlps: 41, switchFlag: 0 },
          { qe: 5, nmps: 45, nlps: 42, switchFlag: 0 },
          { qe: 1, nmps: 45, nlps: 43, switchFlag: 0 },
          { qe: 22017, nmps: 46, nlps: 46, switchFlag: 0 }
        ]
        t.ArithmeticDecoder = class ArithmeticDecoder {
          constructor(e, t, n) {
            this.data = e
            this.bp = t
            this.dataEnd = n
            this.chigh = e[t]
            this.clow = 0
            this.byteIn()
            this.chigh = ((this.chigh << 7) & 65535) | ((this.clow >> 9) & 127)
            this.clow = (this.clow << 7) & 65535
            this.ct -= 7
            this.a = 32768
          }

          byteIn() {
            const e = this.data
            let t = this.bp
            if (e[t] === 255)
              if (e[t + 1] > 143) {
                this.clow += 65280
                this.ct = 8
              } else {
                t++
                this.clow += e[t] << 9
                this.ct = 7
                this.bp = t
              }
            else {
              t++
              this.clow += t < this.dataEnd ? e[t] << 8 : 65280
              this.ct = 8
              this.bp = t
            }
            if (this.clow > 65535) {
              this.chigh += this.clow >> 16
              this.clow &= 65535
            }
          }

          readBit(e, t) {
            let r = e[t] >> 1
            let i = 1 & e[t]
            const o = n[r]
            const s = o.qe
            let a
            let c = this.a - s
            if (this.chigh < s)
              if (c < s) {
                c = s
                a = i
                r = o.nmps
              } else {
                c = s
                a = 1 ^ i
                o.switchFlag === 1 && (i = a)
                r = o.nlps
              }
            else {
              this.chigh -= s
              if ((32768 & c) != 0) {
                this.a = c
                return i
              }
              if (c < s) {
                a = 1 ^ i
                o.switchFlag === 1 && (i = a)
                r = o.nlps
              } else {
                a = i
                r = o.nmps
              }
            }
            do {
              this.ct === 0 && this.byteIn()
              c <<= 1
              this.chigh = ((this.chigh << 1) & 65535) | ((this.clow >> 15) & 1)
              this.clow = (this.clow << 1) & 65535
              this.ct--
            } while ((32768 & c) == 0)
            this.a = c
            e[t] = (r << 1) | i
            return a
          }
        }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.CCITTFaxDecoder = void 0
        const r = n(1)
        const i = -1
        const o = [
          [-1, -1],
          [-1, -1],
          [7, 8],
          [7, 7],
          [6, 6],
          [6, 6],
          [6, 5],
          [6, 5],
          [4, 0],
          [4, 0],
          [4, 0],
          [4, 0],
          [4, 0],
          [4, 0],
          [4, 0],
          [4, 0],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2]
        ]
        const s = [
          [-1, -1],
          [12, -2],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [11, 1792],
          [11, 1792],
          [12, 1984],
          [12, 2048],
          [12, 2112],
          [12, 2176],
          [12, 2240],
          [12, 2304],
          [11, 1856],
          [11, 1856],
          [11, 1920],
          [11, 1920],
          [12, 2368],
          [12, 2432],
          [12, 2496],
          [12, 2560]
        ]
        const a = [
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [8, 29],
          [8, 29],
          [8, 30],
          [8, 30],
          [8, 45],
          [8, 45],
          [8, 46],
          [8, 46],
          [7, 22],
          [7, 22],
          [7, 22],
          [7, 22],
          [7, 23],
          [7, 23],
          [7, 23],
          [7, 23],
          [8, 47],
          [8, 47],
          [8, 48],
          [8, 48],
          [6, 13],
          [6, 13],
          [6, 13],
          [6, 13],
          [6, 13],
          [6, 13],
          [6, 13],
          [6, 13],
          [7, 20],
          [7, 20],
          [7, 20],
          [7, 20],
          [8, 33],
          [8, 33],
          [8, 34],
          [8, 34],
          [8, 35],
          [8, 35],
          [8, 36],
          [8, 36],
          [8, 37],
          [8, 37],
          [8, 38],
          [8, 38],
          [7, 19],
          [7, 19],
          [7, 19],
          [7, 19],
          [8, 31],
          [8, 31],
          [8, 32],
          [8, 32],
          [6, 1],
          [6, 1],
          [6, 1],
          [6, 1],
          [6, 1],
          [6, 1],
          [6, 1],
          [6, 1],
          [6, 12],
          [6, 12],
          [6, 12],
          [6, 12],
          [6, 12],
          [6, 12],
          [6, 12],
          [6, 12],
          [8, 53],
          [8, 53],
          [8, 54],
          [8, 54],
          [7, 26],
          [7, 26],
          [7, 26],
          [7, 26],
          [8, 39],
          [8, 39],
          [8, 40],
          [8, 40],
          [8, 41],
          [8, 41],
          [8, 42],
          [8, 42],
          [8, 43],
          [8, 43],
          [8, 44],
          [8, 44],
          [7, 21],
          [7, 21],
          [7, 21],
          [7, 21],
          [7, 28],
          [7, 28],
          [7, 28],
          [7, 28],
          [8, 61],
          [8, 61],
          [8, 62],
          [8, 62],
          [8, 63],
          [8, 63],
          [8, 0],
          [8, 0],
          [8, 320],
          [8, 320],
          [8, 384],
          [8, 384],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 10],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [5, 11],
          [7, 27],
          [7, 27],
          [7, 27],
          [7, 27],
          [8, 59],
          [8, 59],
          [8, 60],
          [8, 60],
          [9, 1472],
          [9, 1536],
          [9, 1600],
          [9, 1728],
          [7, 18],
          [7, 18],
          [7, 18],
          [7, 18],
          [7, 24],
          [7, 24],
          [7, 24],
          [7, 24],
          [8, 49],
          [8, 49],
          [8, 50],
          [8, 50],
          [8, 51],
          [8, 51],
          [8, 52],
          [8, 52],
          [7, 25],
          [7, 25],
          [7, 25],
          [7, 25],
          [8, 55],
          [8, 55],
          [8, 56],
          [8, 56],
          [8, 57],
          [8, 57],
          [8, 58],
          [8, 58],
          [6, 192],
          [6, 192],
          [6, 192],
          [6, 192],
          [6, 192],
          [6, 192],
          [6, 192],
          [6, 192],
          [6, 1664],
          [6, 1664],
          [6, 1664],
          [6, 1664],
          [6, 1664],
          [6, 1664],
          [6, 1664],
          [6, 1664],
          [8, 448],
          [8, 448],
          [8, 512],
          [8, 512],
          [9, 704],
          [9, 768],
          [8, 640],
          [8, 640],
          [8, 576],
          [8, 576],
          [9, 832],
          [9, 896],
          [9, 960],
          [9, 1024],
          [9, 1088],
          [9, 1152],
          [9, 1216],
          [9, 1280],
          [9, 1344],
          [9, 1408],
          [7, 256],
          [7, 256],
          [7, 256],
          [7, 256],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 128],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 8],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [5, 9],
          [6, 16],
          [6, 16],
          [6, 16],
          [6, 16],
          [6, 16],
          [6, 16],
          [6, 16],
          [6, 16],
          [6, 17],
          [6, 17],
          [6, 17],
          [6, 17],
          [6, 17],
          [6, 17],
          [6, 17],
          [6, 17],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 4],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [6, 14],
          [6, 14],
          [6, 14],
          [6, 14],
          [6, 14],
          [6, 14],
          [6, 14],
          [6, 14],
          [6, 15],
          [6, 15],
          [6, 15],
          [6, 15],
          [6, 15],
          [6, 15],
          [6, 15],
          [6, 15],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [5, 64],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7],
          [4, 7]
        ]
        const c = [
          [-1, -1],
          [-1, -1],
          [12, -2],
          [12, -2],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [11, 1792],
          [11, 1792],
          [11, 1792],
          [11, 1792],
          [12, 1984],
          [12, 1984],
          [12, 2048],
          [12, 2048],
          [12, 2112],
          [12, 2112],
          [12, 2176],
          [12, 2176],
          [12, 2240],
          [12, 2240],
          [12, 2304],
          [12, 2304],
          [11, 1856],
          [11, 1856],
          [11, 1856],
          [11, 1856],
          [11, 1920],
          [11, 1920],
          [11, 1920],
          [11, 1920],
          [12, 2368],
          [12, 2368],
          [12, 2432],
          [12, 2432],
          [12, 2496],
          [12, 2496],
          [12, 2560],
          [12, 2560],
          [10, 18],
          [10, 18],
          [10, 18],
          [10, 18],
          [10, 18],
          [10, 18],
          [10, 18],
          [10, 18],
          [12, 52],
          [12, 52],
          [13, 640],
          [13, 704],
          [13, 768],
          [13, 832],
          [12, 55],
          [12, 55],
          [12, 56],
          [12, 56],
          [13, 1280],
          [13, 1344],
          [13, 1408],
          [13, 1472],
          [12, 59],
          [12, 59],
          [12, 60],
          [12, 60],
          [13, 1536],
          [13, 1600],
          [11, 24],
          [11, 24],
          [11, 24],
          [11, 24],
          [11, 25],
          [11, 25],
          [11, 25],
          [11, 25],
          [13, 1664],
          [13, 1728],
          [12, 320],
          [12, 320],
          [12, 384],
          [12, 384],
          [12, 448],
          [12, 448],
          [13, 512],
          [13, 576],
          [12, 53],
          [12, 53],
          [12, 54],
          [12, 54],
          [13, 896],
          [13, 960],
          [13, 1024],
          [13, 1088],
          [13, 1152],
          [13, 1216],
          [10, 64],
          [10, 64],
          [10, 64],
          [10, 64],
          [10, 64],
          [10, 64],
          [10, 64],
          [10, 64]
        ]
        const l = [
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [8, 13],
          [11, 23],
          [11, 23],
          [12, 50],
          [12, 51],
          [12, 44],
          [12, 45],
          [12, 46],
          [12, 47],
          [12, 57],
          [12, 58],
          [12, 61],
          [12, 256],
          [10, 16],
          [10, 16],
          [10, 16],
          [10, 16],
          [10, 17],
          [10, 17],
          [10, 17],
          [10, 17],
          [12, 48],
          [12, 49],
          [12, 62],
          [12, 63],
          [12, 30],
          [12, 31],
          [12, 32],
          [12, 33],
          [12, 40],
          [12, 41],
          [11, 22],
          [11, 22],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [8, 14],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 10],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [7, 11],
          [9, 15],
          [9, 15],
          [9, 15],
          [9, 15],
          [9, 15],
          [9, 15],
          [9, 15],
          [9, 15],
          [12, 128],
          [12, 192],
          [12, 26],
          [12, 27],
          [12, 28],
          [12, 29],
          [11, 19],
          [11, 19],
          [11, 20],
          [11, 20],
          [12, 34],
          [12, 35],
          [12, 36],
          [12, 37],
          [12, 38],
          [12, 39],
          [11, 21],
          [11, 21],
          [12, 42],
          [12, 43],
          [10, 0],
          [10, 0],
          [10, 0],
          [10, 0],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12],
          [7, 12]
        ]
        const u = [
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [6, 9],
          [6, 8],
          [5, 7],
          [5, 7],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 6],
          [4, 5],
          [4, 5],
          [4, 5],
          [4, 5],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [3, 4],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 3],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2]
        ]
        t.CCITTFaxDecoder = class CCITTFaxDecoder {
          constructor(e) {
            const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            if (!e || typeof e.next !== 'function')
              throw new Error('CCITTFaxDecoder - invalid "source" parameter.')
            this.source = e
            this.eof = !1
            this.encoding = t.K || 0
            this.eoline = t.EndOfLine || !1
            this.byteAlign = t.EncodedByteAlign || !1
            this.columns = t.Columns || 1728
            this.rows = t.Rows || 0
            let n
            let r = t.EndOfBlock
            r == null && (r = !0)
            this.eoblock = r
            this.black = t.BlackIs1 || !1
            this.codingLine = new Uint32Array(this.columns + 1)
            this.refLine = new Uint32Array(this.columns + 2)
            this.codingLine[0] = this.columns
            this.codingPos = 0
            this.row = 0
            this.nextLine2D = this.encoding < 0
            this.inputBits = 0
            this.inputBuf = 0
            this.outputBits = 0
            this.rowsDone = !1
            for (; (n = this._lookBits(12)) === 0; ) this._eatBits(1)
            n === 1 && this._eatBits(12)
            if (this.encoding > 0) {
              this.nextLine2D = !this._lookBits(1)
              this._eatBits(1)
            }
          }

          readNextChar() {
            if (this.eof) return -1
            const e = this.refLine
            const t = this.codingLine
            const n = this.columns
            let o
            let s
            let a
            let c
            let l
            if (this.outputBits === 0) {
              this.rowsDone && (this.eof = !0)
              if (this.eof) return -1
              this.err = !1
              let a
              let l
              let u
              if (this.nextLine2D) {
                for (c = 0; t[c] < n; ++c) e[c] = t[c]
                e[c++] = n
                e[c] = n
                t[0] = 0
                this.codingPos = 0
                o = 0
                s = 0
                for (; t[this.codingPos] < n; ) {
                  a = this._getTwoDimCode()
                  switch (a) {
                    case 0:
                      this._addPixels(e[o + 1], s)
                      e[o + 1] < n && (o += 2)
                      break
                    case 1:
                      a = l = 0
                      if (s) {
                        do {
                          a += u = this._getBlackCode()
                        } while (u >= 64)
                        do {
                          l += u = this._getWhiteCode()
                        } while (u >= 64)
                      } else {
                        do {
                          a += u = this._getWhiteCode()
                        } while (u >= 64)
                        do {
                          l += u = this._getBlackCode()
                        } while (u >= 64)
                      }
                      this._addPixels(t[this.codingPos] + a, s)
                      t[this.codingPos] < n && this._addPixels(t[this.codingPos] + l, 1 ^ s)
                      for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      break
                    case 7:
                      this._addPixels(e[o] + 3, s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case 5:
                      this._addPixels(e[o] + 2, s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case 3:
                      this._addPixels(e[o] + 1, s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case 2:
                      this._addPixels(e[o], s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case 8:
                      this._addPixelsNeg(e[o] - 3, s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        o > 0 ? --o : ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case 6:
                      this._addPixelsNeg(e[o] - 2, s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        o > 0 ? --o : ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case 4:
                      this._addPixelsNeg(e[o] - 1, s)
                      s ^= 1
                      if (t[this.codingPos] < n) {
                        o > 0 ? --o : ++o
                        for (; e[o] <= t[this.codingPos] && e[o] < n; ) o += 2
                      }
                      break
                    case i:
                      this._addPixels(n, 0)
                      this.eof = !0
                      break
                    default:
                      ;(0, r.info)('bad 2d code')
                      this._addPixels(n, 0)
                      this.err = !0
                  }
                }
              } else {
                t[0] = 0
                this.codingPos = 0
                s = 0
                for (; t[this.codingPos] < n; ) {
                  a = 0
                  if (s)
                    do {
                      a += u = this._getBlackCode()
                    } while (u >= 64)
                  else
                    do {
                      a += u = this._getWhiteCode()
                    } while (u >= 64)
                  this._addPixels(t[this.codingPos] + a, s)
                  s ^= 1
                }
              }
              let f = !1
              this.byteAlign && (this.inputBits &= -8)
              if (this.eoblock || this.row !== this.rows - 1) {
                a = this._lookBits(12)
                if (this.eoline)
                  for (; a !== i && a !== 1; ) {
                    this._eatBits(1)
                    a = this._lookBits(12)
                  }
                else
                  for (; a === 0; ) {
                    this._eatBits(1)
                    a = this._lookBits(12)
                  }
                if (a === 1) {
                  this._eatBits(12)
                  f = !0
                } else a === i && (this.eof = !0)
              } else this.rowsDone = !0
              if (!this.eof && this.encoding > 0 && !this.rowsDone) {
                this.nextLine2D = !this._lookBits(1)
                this._eatBits(1)
              }
              if (this.eoblock && f && this.byteAlign) {
                a = this._lookBits(12)
                if (a === 1) {
                  this._eatBits(12)
                  if (this.encoding > 0) {
                    this._lookBits(1)
                    this._eatBits(1)
                  }
                  if (this.encoding >= 0)
                    for (c = 0; c < 4; ++c) {
                      a = this._lookBits(12)
                      a !== 1 && (0, r.info)(`bad rtc code: ${a}`)
                      this._eatBits(12)
                      if (this.encoding > 0) {
                        this._lookBits(1)
                        this._eatBits(1)
                      }
                    }
                  this.eof = !0
                }
              } else if (this.err && this.eoline) {
                for (;;) {
                  a = this._lookBits(13)
                  if (a === i) {
                    this.eof = !0
                    return -1
                  }
                  if (a >> 1 == 1) break
                  this._eatBits(1)
                }
                this._eatBits(12)
                if (this.encoding > 0) {
                  this._eatBits(1)
                  this.nextLine2D = !(1 & a)
                }
              }
              t[0] > 0
                ? (this.outputBits = t[(this.codingPos = 0)])
                : (this.outputBits = t[(this.codingPos = 1)])
              this.row++
            }
            if (this.outputBits >= 8) {
              l = 1 & this.codingPos ? 0 : 255
              this.outputBits -= 8
              if (this.outputBits === 0 && t[this.codingPos] < n) {
                this.codingPos++
                this.outputBits = t[this.codingPos] - t[this.codingPos - 1]
              }
            } else {
              a = 8
              l = 0
              do {
                if (typeof this.outputBits !== 'number')
                  throw new r.FormatError(
                    'Invalid /CCITTFaxDecode data, "outputBits" must be a number.'
                  )
                if (this.outputBits > a) {
                  l <<= a
                  1 & this.codingPos || (l |= 255 >> (8 - a))
                  this.outputBits -= a
                  a = 0
                } else {
                  l <<= this.outputBits
                  1 & this.codingPos || (l |= 255 >> (8 - this.outputBits))
                  a -= this.outputBits
                  this.outputBits = 0
                  if (t[this.codingPos] < n) {
                    this.codingPos++
                    this.outputBits = t[this.codingPos] - t[this.codingPos - 1]
                  } else if (a > 0) {
                    l <<= a
                    a = 0
                  }
                }
              } while (a)
            }
            this.black && (l ^= 255)
            return l
          }

          _addPixels(e, t) {
            const n = this.codingLine
            let i = this.codingPos
            if (e > n[i]) {
              if (e > this.columns) {
                ;(0, r.info)('row is wrong length')
                this.err = !0
                e = this.columns
              }
              ;(1 & i) ^ t && ++i
              n[i] = e
            }
            this.codingPos = i
          }

          _addPixelsNeg(e, t) {
            const n = this.codingLine
            let i = this.codingPos
            if (e > n[i]) {
              if (e > this.columns) {
                ;(0, r.info)('row is wrong length')
                this.err = !0
                e = this.columns
              }
              ;(1 & i) ^ t && ++i
              n[i] = e
            } else if (e < n[i]) {
              if (e < 0) {
                ;(0, r.info)('invalid code')
                this.err = !0
                e = 0
              }
              for (; i > 0 && e < n[i - 1]; ) --i
              n[i] = e
            }
            this.codingPos = i
          }

          _findTableCode(e, t, n, r) {
            const o = r || 0
            for (let r = e; r <= t; ++r) {
              let e = this._lookBits(r)
              if (e === i) return [!0, 1, !1]
              r < t && (e <<= t - r)
              if (!o || e >= o) {
                const t = n[e - o]
                if (t[0] === r) {
                  this._eatBits(r)
                  return [!0, t[1], !0]
                }
              }
            }
            return [!1, 0, !1]
          }

          _getTwoDimCode() {
            let e
            let t = 0
            if (this.eoblock) {
              t = this._lookBits(7)
              e = o[t]
              if (e && e[0] > 0) {
                this._eatBits(e[0])
                return e[1]
              }
            } else {
              const e = this._findTableCode(1, 7, o)
              if (e[0] && e[2]) return e[1]
            }
            ;(0, r.info)('Bad two dim code')
            return i
          }

          _getWhiteCode() {
            let e
            let t = 0
            if (this.eoblock) {
              t = this._lookBits(12)
              if (t === i) return 1
              e = t >> 5 == 0 ? s[t] : a[t >> 3]
              if (e[0] > 0) {
                this._eatBits(e[0])
                return e[1]
              }
            } else {
              let e = this._findTableCode(1, 9, a)
              if (e[0]) return e[1]
              e = this._findTableCode(11, 12, s)
              if (e[0]) return e[1]
            }
            ;(0, r.info)('bad white code')
            this._eatBits(1)
            return 1
          }

          _getBlackCode() {
            let e
            let t
            if (this.eoblock) {
              e = this._lookBits(13)
              if (e === i) return 1
              t = e >> 7 == 0 ? c[e] : e >> 9 == 0 && e >> 7 != 0 ? l[(e >> 1) - 64] : u[e >> 7]
              if (t[0] > 0) {
                this._eatBits(t[0])
                return t[1]
              }
            } else {
              let e = this._findTableCode(2, 6, u)
              if (e[0]) return e[1]
              e = this._findTableCode(7, 12, l, 64)
              if (e[0]) return e[1]
              e = this._findTableCode(10, 13, c)
              if (e[0]) return e[1]
            }
            ;(0, r.info)('bad black code')
            this._eatBits(1)
            return 1
          }

          _lookBits(e) {
            let t
            for (; this.inputBits < e; ) {
              if ((t = this.source.next()) === -1)
                return this.inputBits === 0
                  ? i
                  : (this.inputBuf << (e - this.inputBits)) & (65535 >> (16 - e))
              this.inputBuf = (this.inputBuf << 8) | t
              this.inputBits += 8
            }
            return (this.inputBuf >> (this.inputBits - e)) & (65535 >> (16 - e))
          }

          _eatBits(e) {
            ;(this.inputBits -= e) < 0 && (this.inputBits = 0)
          }
        }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.JpegImage = void 0
        const r = n(1)
        const i = n(87)
        class JpegError extends r.BaseException {
          constructor(e) {
            super(`JPEG error: ${e}`, 'JpegError')
          }
        }
        class DNLMarkerError extends r.BaseException {
          constructor(e, t) {
            super(e, 'DNLMarkerError')
            this.scanLines = t
          }
        }
        class EOIMarkerError extends r.BaseException {
          constructor(e) {
            super(e, 'EOIMarkerError')
          }
        }
        const o = new Uint8Array([
          0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34,
          27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44,
          51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63
        ])
        const s = 4017
        const a = 799
        const c = 3406
        const l = 2276
        const u = 1567
        const f = 3784
        const h = 5793
        const d = 2896
        function buildHuffmanTable(e, t) {
          let n
          let r
          let i = 0
          let o = 16
          for (; o > 0 && !e[o - 1]; ) o--
          const s = [{ children: [], index: 0 }]
          let a
          let c = s[0]
          for (n = 0; n < o; n++) {
            for (r = 0; r < e[n]; r++) {
              c = s.pop()
              c.children[c.index] = t[i]
              for (; c.index > 0; ) c = s.pop()
              c.index++
              s.push(c)
              for (; s.length <= n; ) {
                s.push((a = { children: [], index: 0 }))
                c.children[c.index] = a.children
                c = a
              }
              i++
            }
            if (n + 1 < o) {
              s.push((a = { children: [], index: 0 }))
              c.children[c.index] = a.children
              c = a
            }
          }
          return s[0].children
        }
        function getBlockBufferOffset(e, t, n) {
          return 64 * ((e.blocksPerLine + 1) * t + n)
        }
        function decodeScan(e, t, n, s, a, c, l, u, f) {
          const h = arguments.length > 9 && void 0 !== arguments[9] && arguments[9]
          const d = n.mcusPerLine
          const p = n.progressive
          const g = t
          let m = 0
          let b = 0
          function readBit() {
            if (b > 0) {
              b--
              return (m >> b) & 1
            }
            m = e[t++]
            if (m === 255) {
              const r = e[t++]
              if (r) {
                if (r === 220 && h) {
                  t += 2
                  const r = (0, i.readUint16)(e, t)
                  t += 2
                  if (r > 0 && r !== n.scanLines)
                    throw new DNLMarkerError('Found DNL marker (0xFFDC) while parsing scan data', r)
                } else if (r === 217) {
                  if (h) {
                    const e = T * (n.precision === 8 ? 8 : 0)
                    if (e > 0 && Math.round(n.scanLines / e) >= 10)
                      throw new DNLMarkerError(
                        'Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter',
                        e
                      )
                  }
                  throw new EOIMarkerError('Found EOI marker (0xFFD9) while parsing scan data')
                }
                throw new JpegError(`unexpected marker ${((m << 8) | r).toString(16)}`)
              }
            }
            b = 7
            return m >>> 7
          }
          function decodeHuffman(e) {
            let t = e
            for (;;) {
              t = t[readBit()]
              switch (typeof t) {
                case 'number':
                  return t
                case 'object':
                  continue
              }
              throw new JpegError('invalid huffman sequence')
            }
          }
          function receive(e) {
            let t = 0
            for (; e > 0; ) {
              t = (t << 1) | readBit()
              e--
            }
            return t
          }
          function receiveAndExtend(e) {
            if (e === 1) return readBit() === 1 ? 1 : -1
            const t = receive(e)
            return t >= 1 << (e - 1) ? t : t + (-1 << e) + 1
          }
          function decodeBaseline(e, t) {
            const n = decodeHuffman(e.huffmanTableDC)
            const r = n === 0 ? 0 : receiveAndExtend(n)
            e.blockData[t] = e.pred += r
            let i = 1
            for (; i < 64; ) {
              const n = decodeHuffman(e.huffmanTableAC)
              const r = 15 & n
              const s = n >> 4
              if (r === 0) {
                if (s < 15) break
                i += 16
                continue
              }
              i += s
              const a = o[i]
              e.blockData[t + a] = receiveAndExtend(r)
              i++
            }
          }
          function decodeDCFirst(e, t) {
            const n = decodeHuffman(e.huffmanTableDC)
            const r = n === 0 ? 0 : receiveAndExtend(n) << f
            e.blockData[t] = e.pred += r
          }
          function decodeDCSuccessive(e, t) {
            e.blockData[t] |= readBit() << f
          }
          let y = 0
          function decodeACFirst(e, t) {
            if (y > 0) {
              y--
              return
            }
            let n = c
            const r = l
            for (; n <= r; ) {
              const r = decodeHuffman(e.huffmanTableAC)
              const i = 15 & r
              const s = r >> 4
              if (i === 0) {
                if (s < 15) {
                  y = receive(s) + (1 << s) - 1
                  break
                }
                n += 16
                continue
              }
              n += s
              const a = o[n]
              e.blockData[t + a] = receiveAndExtend(i) * (1 << f)
              n++
            }
          }
          let x
          let w = 0
          function decodeACSuccessive(e, t) {
            let n = c
            const r = l
            let i
            let s
            let a = 0
            for (; n <= r; ) {
              const r = t + o[n]
              const c = e.blockData[r] < 0 ? -1 : 1
              switch (w) {
                case 0:
                  s = decodeHuffman(e.huffmanTableAC)
                  i = 15 & s
                  a = s >> 4
                  if (i === 0)
                    if (a < 15) {
                      y = receive(a) + (1 << a)
                      w = 4
                    } else {
                      a = 16
                      w = 1
                    }
                  else {
                    if (i !== 1) throw new JpegError('invalid ACn encoding')
                    x = receiveAndExtend(i)
                    w = a ? 2 : 3
                  }
                  continue
                case 1:
                case 2:
                  if (e.blockData[r]) e.blockData[r] += c * (readBit() << f)
                  else {
                    a--
                    a === 0 && (w = w === 2 ? 3 : 0)
                  }
                  break
                case 3:
                  if (e.blockData[r]) e.blockData[r] += c * (readBit() << f)
                  else {
                    e.blockData[r] = x << f
                    w = 0
                  }
                  break
                case 4:
                  e.blockData[r] && (e.blockData[r] += c * (readBit() << f))
              }
              n++
            }
            if (w === 4) {
              y--
              y === 0 && (w = 0)
            }
          }
          let T = 0
          function decodeMcu(e, t, n, r, i) {
            const o = n % d
            T = ((n / d) | 0) * e.v + r
            const s = o * e.h + i
            t(e, getBlockBufferOffset(e, T, s))
          }
          function decodeBlock(e, t, n) {
            T = (n / e.blocksPerLine) | 0
            const r = n % e.blocksPerLine
            t(e, getBlockBufferOffset(e, T, r))
          }
          const S = s.length
          let C
          let P
          let v
          let E
          let I
          let A
          A = p
            ? c === 0
              ? u === 0
                ? decodeDCFirst
                : decodeDCSuccessive
              : u === 0
              ? decodeACFirst
              : decodeACSuccessive
            : decodeBaseline
          let k
          let O
          let _
          let B
          let D = 0
          O = S === 1 ? s[0].blocksPerLine * s[0].blocksPerColumn : d * n.mcusPerColumn
          for (; D <= O; ) {
            const n = a ? Math.min(O - D, a) : O
            if (n > 0) {
              for (P = 0; P < S; P++) s[P].pred = 0
              y = 0
              if (S === 1) {
                C = s[0]
                for (I = 0; I < n; I++) {
                  decodeBlock(C, A, D)
                  D++
                }
              } else
                for (I = 0; I < n; I++) {
                  for (P = 0; P < S; P++) {
                    C = s[P]
                    _ = C.h
                    B = C.v
                    for (v = 0; v < B; v++) for (E = 0; E < _; E++) decodeMcu(C, A, D, v, E)
                  }
                  D++
                }
            }
            b = 0
            k = findNextFileMarker(e, t)
            if (!k) break
            if (k.invalid) {
              const e = n > 0 ? 'unexpected' : 'excessive'
              ;(0, r.warn)(`decodeScan - ${e} MCU data, current marker is: ${k.invalid}`)
              t = k.offset
            }
            if (!(k.marker >= 65488 && k.marker <= 65495)) break
            t += 2
          }
          return t - g
        }
        function quantizeAndInverse(e, t, n) {
          const r = e.quantizationTable
          const i = e.blockData
          let o
          let p
          let g
          let m
          let b
          let y
          let x
          let w
          let T
          let S
          let C
          let P
          let v
          let E
          let I
          let A
          let k
          if (!r) throw new JpegError('missing required Quantization Table.')
          for (let e = 0; e < 64; e += 8) {
            T = i[t + e]
            S = i[t + e + 1]
            C = i[t + e + 2]
            P = i[t + e + 3]
            v = i[t + e + 4]
            E = i[t + e + 5]
            I = i[t + e + 6]
            A = i[t + e + 7]
            T *= r[e]
            if ((S | C | P | v | E | I | A) != 0) {
              S *= r[e + 1]
              C *= r[e + 2]
              P *= r[e + 3]
              v *= r[e + 4]
              E *= r[e + 5]
              I *= r[e + 6]
              A *= r[e + 7]
              o = (h * T + 128) >> 8
              p = (h * v + 128) >> 8
              g = C
              m = I
              b = (d * (S - A) + 128) >> 8
              w = (d * (S + A) + 128) >> 8
              y = P << 4
              x = E << 4
              o = (o + p + 1) >> 1
              p = o - p
              k = (g * f + m * u + 128) >> 8
              g = (g * u - m * f + 128) >> 8
              m = k
              b = (b + x + 1) >> 1
              x = b - x
              w = (w + y + 1) >> 1
              y = w - y
              o = (o + m + 1) >> 1
              m = o - m
              p = (p + g + 1) >> 1
              g = p - g
              k = (b * l + w * c + 2048) >> 12
              b = (b * c - w * l + 2048) >> 12
              w = k
              k = (y * a + x * s + 2048) >> 12
              y = (y * s - x * a + 2048) >> 12
              x = k
              n[e] = o + w
              n[e + 7] = o - w
              n[e + 1] = p + x
              n[e + 6] = p - x
              n[e + 2] = g + y
              n[e + 5] = g - y
              n[e + 3] = m + b
              n[e + 4] = m - b
            } else {
              k = (h * T + 512) >> 10
              n[e] = k
              n[e + 1] = k
              n[e + 2] = k
              n[e + 3] = k
              n[e + 4] = k
              n[e + 5] = k
              n[e + 6] = k
              n[e + 7] = k
            }
          }
          for (let e = 0; e < 8; ++e) {
            T = n[e]
            S = n[e + 8]
            C = n[e + 16]
            P = n[e + 24]
            v = n[e + 32]
            E = n[e + 40]
            I = n[e + 48]
            A = n[e + 56]
            if ((S | C | P | v | E | I | A) != 0) {
              o = (h * T + 2048) >> 12
              p = (h * v + 2048) >> 12
              g = C
              m = I
              b = (d * (S - A) + 2048) >> 12
              w = (d * (S + A) + 2048) >> 12
              y = P
              x = E
              o = 4112 + ((o + p + 1) >> 1)
              p = o - p
              k = (g * f + m * u + 2048) >> 12
              g = (g * u - m * f + 2048) >> 12
              m = k
              b = (b + x + 1) >> 1
              x = b - x
              w = (w + y + 1) >> 1
              y = w - y
              o = (o + m + 1) >> 1
              m = o - m
              p = (p + g + 1) >> 1
              g = p - g
              k = (b * l + w * c + 2048) >> 12
              b = (b * c - w * l + 2048) >> 12
              w = k
              k = (y * a + x * s + 2048) >> 12
              y = (y * s - x * a + 2048) >> 12
              x = k
              T = o + w
              A = o - w
              S = p + x
              I = p - x
              C = g + y
              E = g - y
              P = m + b
              v = m - b
              T < 16 ? (T = 0) : T >= 4080 ? (T = 255) : (T >>= 4)
              S < 16 ? (S = 0) : S >= 4080 ? (S = 255) : (S >>= 4)
              C < 16 ? (C = 0) : C >= 4080 ? (C = 255) : (C >>= 4)
              P < 16 ? (P = 0) : P >= 4080 ? (P = 255) : (P >>= 4)
              v < 16 ? (v = 0) : v >= 4080 ? (v = 255) : (v >>= 4)
              E < 16 ? (E = 0) : E >= 4080 ? (E = 255) : (E >>= 4)
              I < 16 ? (I = 0) : I >= 4080 ? (I = 255) : (I >>= 4)
              A < 16 ? (A = 0) : A >= 4080 ? (A = 255) : (A >>= 4)
              i[t + e] = T
              i[t + e + 8] = S
              i[t + e + 16] = C
              i[t + e + 24] = P
              i[t + e + 32] = v
              i[t + e + 40] = E
              i[t + e + 48] = I
              i[t + e + 56] = A
            } else {
              k = (h * T + 8192) >> 14
              k = k < -2040 ? 0 : k >= 2024 ? 255 : (k + 2056) >> 4
              i[t + e] = k
              i[t + e + 8] = k
              i[t + e + 16] = k
              i[t + e + 24] = k
              i[t + e + 32] = k
              i[t + e + 40] = k
              i[t + e + 48] = k
              i[t + e + 56] = k
            }
          }
        }
        function buildComponentData(e, t) {
          const n = t.blocksPerLine
          const r = t.blocksPerColumn
          const i = new Int16Array(64)
          for (let e = 0; e < r; e++)
            for (let r = 0; r < n; r++) {
              quantizeAndInverse(t, getBlockBufferOffset(t, e, r), i)
            }
          return t.blockData
        }
        function findNextFileMarker(e, t) {
          const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
          const r = e.length - 1
          let o = n < t ? n : t
          if (t >= r) return null
          const s = (0, i.readUint16)(e, t)
          if (s >= 65472 && s <= 65534) return { invalid: null, marker: s, offset: t }
          let a = (0, i.readUint16)(e, o)
          for (; !(a >= 65472 && a <= 65534); ) {
            if (++o >= r) return null
            a = (0, i.readUint16)(e, o)
          }
          return { invalid: s.toString(16), marker: a, offset: o }
        }
        t.JpegImage = class JpegImage {
          constructor() {
            const { decodeTransform: e = null, colorTransform: t = -1 } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            this._decodeTransform = e
            this._colorTransform = t
          }

          parse(e) {
            const { dnlScanLines: t = null } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            function readDataBlock() {
              const t = (0, i.readUint16)(e, a)
              a += 2
              let n = a + t - 2
              const o = findNextFileMarker(e, n, a)
              if (o && o.invalid) {
                ;(0, r.warn)(`readDataBlock - incorrect length, current marker is: ${o.invalid}`)
                n = o.offset
              }
              const s = e.subarray(a, n)
              a += s.length
              return s
            }
            function prepareComponents(e) {
              const t = Math.ceil(e.samplesPerLine / 8 / e.maxH)
              const n = Math.ceil(e.scanLines / 8 / e.maxV)
              for (let r = 0, i = e.components.length; r < i; r++) {
                const i = e.components[r]
                const o = Math.ceil((Math.ceil(e.samplesPerLine / 8) * i.h) / e.maxH)
                const s = Math.ceil((Math.ceil(e.scanLines / 8) * i.v) / e.maxV)
                const a = t * i.h
                const c = 64 * (n * i.v) * (a + 1)
                i.blockData = new Int16Array(c)
                i.blocksPerLine = o
                i.blocksPerColumn = s
              }
              e.mcusPerLine = t
              e.mcusPerColumn = n
            }
            let n
            let s
            let a = 0
            let c = null
            let l = null
            let u = 0
            const f = []
            const h = []
            const d = []
            let p = (0, i.readUint16)(e, a)
            a += 2
            if (p !== 65496) throw new JpegError('SOI not found')
            p = (0, i.readUint16)(e, a)
            a += 2
            e: for (; p !== 65497; ) {
              let g
              let m
              let b
              switch (p) {
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65534:
                  const y = readDataBlock()
                  p === 65504 &&
                    y[0] === 74 &&
                    y[1] === 70 &&
                    y[2] === 73 &&
                    y[3] === 70 &&
                    y[4] === 0 &&
                    (c = {
                      version: { major: y[5], minor: y[6] },
                      densityUnits: y[7],
                      xDensity: (y[8] << 8) | y[9],
                      yDensity: (y[10] << 8) | y[11],
                      thumbWidth: y[12],
                      thumbHeight: y[13],
                      thumbData: y.subarray(14, 14 + 3 * y[12] * y[13])
                    })
                  p === 65518 &&
                    y[0] === 65 &&
                    y[1] === 100 &&
                    y[2] === 111 &&
                    y[3] === 98 &&
                    y[4] === 101 &&
                    (l = {
                      version: (y[5] << 8) | y[6],
                      flags0: (y[7] << 8) | y[8],
                      flags1: (y[9] << 8) | y[10],
                      transformCode: y[11]
                    })
                  break
                case 65499:
                  const x = (0, i.readUint16)(e, a)
                  a += 2
                  const w = x + a - 2
                  let T
                  for (; a < w; ) {
                    const t = e[a++]
                    const n = new Uint16Array(64)
                    if (t >> 4 == 0)
                      for (m = 0; m < 64; m++) {
                        T = o[m]
                        n[T] = e[a++]
                      }
                    else {
                      if (t >> 4 != 1) throw new JpegError('DQT - invalid table spec')
                      for (m = 0; m < 64; m++) {
                        T = o[m]
                        n[T] = (0, i.readUint16)(e, a)
                        a += 2
                      }
                    }
                    f[15 & t] = n
                  }
                  break
                case 65472:
                case 65473:
                case 65474:
                  if (n) throw new JpegError('Only single frame JPEGs supported')
                  a += 2
                  n = {}
                  n.extended = p === 65473
                  n.progressive = p === 65474
                  n.precision = e[a++]
                  const S = (0, i.readUint16)(e, a)
                  a += 2
                  n.scanLines = t || S
                  n.samplesPerLine = (0, i.readUint16)(e, a)
                  a += 2
                  n.components = []
                  n.componentIds = {}
                  const C = e[a++]
                  let P = 0
                  let v = 0
                  for (g = 0; g < C; g++) {
                    const t = e[a]
                    const r = e[a + 1] >> 4
                    const i = 15 & e[a + 1]
                    P < r && (P = r)
                    v < i && (v = i)
                    const o = e[a + 2]
                    b = n.components.push({
                      h: r,
                      v: i,
                      quantizationId: o,
                      quantizationTable: null
                    })
                    n.componentIds[t] = b - 1
                    a += 3
                  }
                  n.maxH = P
                  n.maxV = v
                  prepareComponents(n)
                  break
                case 65476:
                  const E = (0, i.readUint16)(e, a)
                  a += 2
                  for (g = 2; g < E; ) {
                    const t = e[a++]
                    const n = new Uint8Array(16)
                    let r = 0
                    for (m = 0; m < 16; m++, a++) r += n[m] = e[a]
                    const i = new Uint8Array(r)
                    for (m = 0; m < r; m++, a++) i[m] = e[a]
                    g += 17 + r
                    ;(t >> 4 == 0 ? d : h)[15 & t] = buildHuffmanTable(n, i)
                  }
                  break
                case 65501:
                  a += 2
                  s = (0, i.readUint16)(e, a)
                  a += 2
                  break
                case 65498:
                  const I = ++u == 1 && !t
                  a += 2
                  const A = e[a++]
                  const k = []
                  for (g = 0; g < A; g++) {
                    const t = e[a++]
                    const r = n.componentIds[t]
                    const i = n.components[r]
                    i.index = t
                    const o = e[a++]
                    i.huffmanTableDC = d[o >> 4]
                    i.huffmanTableAC = h[15 & o]
                    k.push(i)
                  }
                  const O = e[a++]
                  const _ = e[a++]
                  const B = e[a++]
                  try {
                    const t = decodeScan(e, a, n, k, s, O, _, B >> 4, 15 & B, I)
                    a += t
                  } catch (t) {
                    if (t instanceof DNLMarkerError) {
                      ;(0, r.warn)(`${t.message} -- attempting to re-parse the JPEG image.`)
                      return this.parse(e, { dnlScanLines: t.scanLines })
                    }
                    if (t instanceof EOIMarkerError) {
                      ;(0, r.warn)(`${t.message} -- ignoring the rest of the image data.`)
                      break e
                    }
                    throw t
                  }
                  break
                case 65500:
                  a += 4
                  break
                case 65535:
                  e[a] !== 255 && a--
                  break
                default:
                  const D = findNextFileMarker(e, a - 2, a - 3)
                  if (D && D.invalid) {
                    ;(0, r.warn)(
                      `JpegImage.parse - unexpected data, current marker is: ${D.invalid}`
                    )
                    a = D.offset
                    break
                  }
                  if (!D || a >= e.length - 1) {
                    ;(0, r.warn)(
                      'JpegImage.parse - reached the end of the image data without finding an EOI marker (0xFFD9).'
                    )
                    break e
                  }
                  throw new JpegError(`JpegImage.parse - unknown marker: ${p.toString(16)}`)
              }
              p = (0, i.readUint16)(e, a)
              a += 2
            }
            this.width = n.samplesPerLine
            this.height = n.scanLines
            this.jfif = c
            this.adobe = l
            this.components = []
            for (let e = 0, t = n.components.length; e < t; e++) {
              const t = n.components[e]
              const r = f[t.quantizationId]
              r && (t.quantizationTable = r)
              this.components.push({
                index: t.index,
                output: buildComponentData(0, t),
                scaleX: t.h / n.maxH,
                scaleY: t.v / n.maxV,
                blocksPerLine: t.blocksPerLine,
                blocksPerColumn: t.blocksPerColumn
              })
            }
            this.numComponents = this.components.length
          }

          _getLinearizedBlockData(e, t) {
            const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            const r = this.width / e
            const i = this.height / t
            let o
            let s
            let a
            let c
            let l
            let u
            let f
            let h
            let d
            let p
            let g
            let m = 0
            const b = this.components.length
            const y = e * t * b
            const x = new Uint8ClampedArray(y)
            const w = new Uint32Array(e)
            const T = 4294967288
            let S
            for (f = 0; f < b; f++) {
              o = this.components[f]
              s = o.scaleX * r
              a = o.scaleY * i
              m = f
              g = o.output
              c = (o.blocksPerLine + 1) << 3
              if (s !== S) {
                for (l = 0; l < e; l++) {
                  h = 0 | (l * s)
                  w[l] = ((h & T) << 3) | (7 & h)
                }
                S = s
              }
              for (u = 0; u < t; u++) {
                h = 0 | (u * a)
                p = (c * (h & T)) | ((7 & h) << 3)
                for (l = 0; l < e; l++) {
                  x[m] = g[p + w[l]]
                  m += b
                }
              }
            }
            let C = this._decodeTransform
            n || b !== 4 || C || (C = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]))
            if (C)
              for (f = 0; f < y; )
                for (h = 0, d = 0; h < b; h++, f++, d += 2) x[f] = ((x[f] * C[d]) >> 8) + C[d + 1]
            return x
          }

          get _isColorConversionNeeded() {
            return this.adobe
              ? !!this.adobe.transformCode
              : this.numComponents === 3
              ? this._colorTransform !== 0 &&
                (this.components[0].index !== 82 ||
                  this.components[1].index !== 71 ||
                  this.components[2].index !== 66)
              : this._colorTransform === 1
          }

          _convertYccToRgb(e) {
            let t
            let n
            let r
            for (let i = 0, o = e.length; i < o; i += 3) {
              t = e[i]
              n = e[i + 1]
              r = e[i + 2]
              e[i] = t - 179.456 + 1.402 * r
              e[i + 1] = t + 135.459 - 0.344 * n - 0.714 * r
              e[i + 2] = t - 226.816 + 1.772 * n
            }
            return e
          }

          _convertYcckToRgb(e) {
            let t
            let n
            let r
            let i
            let o = 0
            for (let s = 0, a = e.length; s < a; s += 4) {
              t = e[s]
              n = e[s + 1]
              r = e[s + 2]
              i = e[s + 3]
              e[o++] =
                n *
                  (-660635669420364e-19 * n +
                    0.000437130475926232 * r -
                    54080610064599e-18 * t +
                    0.00048449797120281 * i -
                    0.154362151871126) -
                122.67195406894 +
                r *
                  (-0.000957964378445773 * r +
                    0.000817076911346625 * t -
                    0.00477271405408747 * i +
                    1.53380253221734) +
                t * (0.000961250184130688 * t - 0.00266257332283933 * i + 0.48357088451265) +
                i * (-0.000336197177618394 * i + 0.484791561490776)
              e[o++] =
                107.268039397724 +
                n *
                  (219927104525741e-19 * n -
                    0.000640992018297945 * r +
                    0.000659397001245577 * t +
                    0.000426105652938837 * i -
                    0.176491792462875) +
                r *
                  (-0.000778269941513683 * r +
                    0.00130872261408275 * t +
                    0.000770482631801132 * i -
                    0.151051492775562) +
                t * (0.00126935368114843 * t - 0.00265090189010898 * i + 0.25802910206845) +
                i * (-0.000318913117588328 * i - 0.213742400323665)
              e[o++] =
                n *
                  (-0.000570115196973677 * n -
                    263409051004589e-19 * r +
                    0.0020741088115012 * t -
                    0.00288260236853442 * i +
                    0.814272968359295) -
                20.810012546947 +
                r *
                  (-153496057440975e-19 * r -
                    0.000132689043961446 * t +
                    0.000560833691242812 * i -
                    0.195152027534049) +
                t * (0.00174418132927582 * t - 0.00255243321439347 * i + 0.116935020465145) +
                i * (-0.000343531996510555 * i + 0.24165260232407)
            }
            return e.subarray(0, o)
          }

          _convertYcckToCmyk(e) {
            let t
            let n
            let r
            for (let i = 0, o = e.length; i < o; i += 4) {
              t = e[i]
              n = e[i + 1]
              r = e[i + 2]
              e[i] = 434.456 - t - 1.402 * r
              e[i + 1] = 119.541 - t + 0.344 * n + 0.714 * r
              e[i + 2] = 481.816 - t - 1.772 * n
            }
            return e
          }

          _convertCmykToRgb(e) {
            let t
            let n
            let r
            let i
            let o = 0
            for (let s = 0, a = e.length; s < a; s += 4) {
              t = e[s]
              n = e[s + 1]
              r = e[s + 2]
              i = e[s + 3]
              e[o++] =
                255 +
                t *
                  (-6747147073602441e-20 * t +
                    0.0008379262121013727 * n +
                    0.0002894718188643294 * r +
                    0.003264231057537806 * i -
                    1.1185611867203937) +
                n *
                  (26374107616089405e-21 * n -
                    8626949158638572e-20 * r -
                    0.0002748769067499491 * i -
                    0.02155688794978967) +
                r * (-3878099212869363e-20 * r - 0.0003267808279485286 * i + 0.0686742238595345) -
                i * (0.0003361971776183937 * i + 0.7430659151342254)
              e[o++] =
                255 +
                t *
                  (0.00013596372813588848 * t +
                    0.000924537132573585 * n +
                    0.00010567359618683593 * r +
                    0.0004791864687436512 * i -
                    0.3109689587515875) +
                n *
                  (-0.00023545346108370344 * n +
                    0.0002702845253534714 * r +
                    0.0020200308977307156 * i -
                    0.7488052167015494) +
                r * (6834815998235662e-20 * r + 0.00015168452363460973 * i - 0.09751927774728933) -
                i * (0.0003189131175883281 * i + 0.7364883807733168)
              e[o++] =
                255 +
                t *
                  (13598650411385307e-21 * t +
                    0.00012423956175490851 * n +
                    0.0004751985097583589 * r -
                    36729317476630422e-22 * i -
                    0.05562186980264034) +
                n *
                  (0.00016141380598724676 * n +
                    0.0009692239130725186 * r +
                    0.0007782692450036253 * i -
                    0.44015232367526463) +
                r * (5.068882914068769e-7 * r + 0.0017778369011375071 * i - 0.7591454649749609) -
                i * (0.0003435319965105553 * i + 0.7063770186160144)
            }
            return e.subarray(0, o)
          }

          getData(e) {
            const { width: t, height: n, forceRGB: r = !1, isSourcePDF: i = !1 } = e
            if (this.numComponents > 4) throw new JpegError('Unsupported color mode')
            const o = this._getLinearizedBlockData(t, n, i)
            if (this.numComponents === 1 && r) {
              const e = o.length
              const t = new Uint8ClampedArray(3 * e)
              let n = 0
              for (let r = 0; r < e; r++) {
                const e = o[r]
                t[n++] = e
                t[n++] = e
                t[n++] = e
              }
              return t
            }
            if (this.numComponents === 3 && this._isColorConversionNeeded)
              return this._convertYccToRgb(o)
            if (this.numComponents === 4) {
              if (this._isColorConversionNeeded)
                return r ? this._convertYcckToRgb(o) : this._convertYcckToCmyk(o)
              if (r) return this._convertCmykToRgb(o)
            }
            return o
          }
        }
      },
      (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.JpxImage = void 0
        const r = n(1)
        const i = n(87)
        const o = n(90)
        class JpxError extends r.BaseException {
          constructor(e) {
            super(`JPX error: ${e}`, 'JpxError')
          }
        }
        const s = { LL: 0, LH: 1, HL: 1, HH: 2 }
        t.JpxImage = class JpxImage {
          constructor() {
            this.failOnCorruptedImage = !1
          }

          parse(e) {
            if ((0, i.readUint16)(e, 0) === 65359) {
              this.parseCodestream(e, 0, e.length)
              return
            }
            const t = e.length
            let n = 0
            for (; n < t; ) {
              let o = 8
              let s = (0, i.readUint32)(e, n)
              const a = (0, i.readUint32)(e, n + 4)
              n += o
              if (s === 1) {
                s = 4294967296 * (0, i.readUint32)(e, n) + (0, i.readUint32)(e, n + 4)
                n += 8
                o += 8
              }
              s === 0 && (s = t - n + o)
              if (s < o) throw new JpxError('Invalid box field size')
              const c = s - o
              let l = !0
              switch (a) {
                case 1785737832:
                  l = !1
                  break
                case 1668246642:
                  const t = e[n]
                  if (t === 1) {
                    const t = (0, i.readUint32)(e, n + 3)
                    switch (t) {
                      case 16:
                      case 17:
                      case 18:
                        break
                      default:
                        ;(0, r.warn)(`Unknown colorspace ${t}`)
                    }
                  } else t === 2 && (0, r.info)('ICC profile not supported')
                  break
                case 1785737827:
                  this.parseCodestream(e, n, n + c)
                  break
                case 1783636e3:
                  ;(0, i.readUint32)(e, n) !== 218793738 && (0, r.warn)('Invalid JP2 signature')
                  break
                case 1783634458:
                case 1718909296:
                case 1920099697:
                case 1919251232:
                case 1768449138:
                  break
                default:
                  const o = String.fromCharCode(
                    (a >> 24) & 255,
                    (a >> 16) & 255,
                    (a >> 8) & 255,
                    255 & a
                  )
                  ;(0, r.warn)(`Unsupported header type ${a} (${o}).`)
              }
              l && (n += c)
            }
          }

          parseImageProperties(e) {
            let t = e.getByte()
            for (; t >= 0; ) {
              const n = t
              t = e.getByte()
              if (((n << 8) | t) === 65361) {
                e.skip(4)
                const t = e.getInt32() >>> 0
                const n = e.getInt32() >>> 0
                const r = e.getInt32() >>> 0
                const i = e.getInt32() >>> 0
                e.skip(16)
                const o = e.getUint16()
                this.width = t - r
                this.height = n - i
                this.componentsCount = o
                this.bitsPerComponent = 8
                return
              }
            }
            throw new JpxError('No size marker found in JPX stream')
          }

          parseCodestream(e, t, n) {
            const o = {}
            let s = !1
            try {
              let a = t
              for (; a + 1 < n; ) {
                const t = (0, i.readUint16)(e, a)
                a += 2
                let n
                let c
                let l
                let u
                let f
                let h
                let d = 0
                switch (t) {
                  case 65359:
                    o.mainHeader = !0
                    break
                  case 65497:
                    break
                  case 65361:
                    d = (0, i.readUint16)(e, a)
                    const p = {}
                    p.Xsiz = (0, i.readUint32)(e, a + 4)
                    p.Ysiz = (0, i.readUint32)(e, a + 8)
                    p.XOsiz = (0, i.readUint32)(e, a + 12)
                    p.YOsiz = (0, i.readUint32)(e, a + 16)
                    p.XTsiz = (0, i.readUint32)(e, a + 20)
                    p.YTsiz = (0, i.readUint32)(e, a + 24)
                    p.XTOsiz = (0, i.readUint32)(e, a + 28)
                    p.YTOsiz = (0, i.readUint32)(e, a + 32)
                    const g = (0, i.readUint16)(e, a + 36)
                    p.Csiz = g
                    const m = []
                    n = a + 38
                    for (let t = 0; t < g; t++) {
                      const t = {
                        precision: 1 + (127 & e[n]),
                        isSigned: !!(128 & e[n]),
                        XRsiz: e[n + 1],
                        YRsiz: e[n + 2]
                      }
                      n += 3
                      calculateComponentDimensions(t, p)
                      m.push(t)
                    }
                    o.SIZ = p
                    o.components = m
                    calculateTileGrids(o, m)
                    o.QCC = []
                    o.COC = []
                    break
                  case 65372:
                    d = (0, i.readUint16)(e, a)
                    const b = {}
                    n = a + 2
                    c = e[n++]
                    switch (31 & c) {
                      case 0:
                        u = 8
                        f = !0
                        break
                      case 1:
                        u = 16
                        f = !1
                        break
                      case 2:
                        u = 16
                        f = !0
                        break
                      default:
                        throw new Error(`Invalid SQcd value ${c}`)
                    }
                    b.noQuantization = u === 8
                    b.scalarExpounded = f
                    b.guardBits = c >> 5
                    l = []
                    for (; n < d + a; ) {
                      const t = {}
                      if (u === 8) {
                        t.epsilon = e[n++] >> 3
                        t.mu = 0
                      } else {
                        t.epsilon = e[n] >> 3
                        t.mu = ((7 & e[n]) << 8) | e[n + 1]
                        n += 2
                      }
                      l.push(t)
                    }
                    b.SPqcds = l
                    if (o.mainHeader) o.QCD = b
                    else {
                      o.currentTile.QCD = b
                      o.currentTile.QCC = []
                    }
                    break
                  case 65373:
                    d = (0, i.readUint16)(e, a)
                    const y = {}
                    n = a + 2
                    let x
                    if (o.SIZ.Csiz < 257) x = e[n++]
                    else {
                      x = (0, i.readUint16)(e, n)
                      n += 2
                    }
                    c = e[n++]
                    switch (31 & c) {
                      case 0:
                        u = 8
                        f = !0
                        break
                      case 1:
                        u = 16
                        f = !1
                        break
                      case 2:
                        u = 16
                        f = !0
                        break
                      default:
                        throw new Error(`Invalid SQcd value ${c}`)
                    }
                    y.noQuantization = u === 8
                    y.scalarExpounded = f
                    y.guardBits = c >> 5
                    l = []
                    for (; n < d + a; ) {
                      const t = {}
                      if (u === 8) {
                        t.epsilon = e[n++] >> 3
                        t.mu = 0
                      } else {
                        t.epsilon = e[n] >> 3
                        t.mu = ((7 & e[n]) << 8) | e[n + 1]
                        n += 2
                      }
                      l.push(t)
                    }
                    y.SPqcds = l
                    o.mainHeader ? (o.QCC[x] = y) : (o.currentTile.QCC[x] = y)
                    break
                  case 65362:
                    d = (0, i.readUint16)(e, a)
                    const w = {}
                    n = a + 2
                    const T = e[n++]
                    w.entropyCoderWithCustomPrecincts = !!(1 & T)
                    w.sopMarkerUsed = !!(2 & T)
                    w.ephMarkerUsed = !!(4 & T)
                    w.progressionOrder = e[n++]
                    w.layersCount = (0, i.readUint16)(e, n)
                    n += 2
                    w.multipleComponentTransform = e[n++]
                    w.decompositionLevelsCount = e[n++]
                    w.xcb = 2 + (15 & e[n++])
                    w.ycb = 2 + (15 & e[n++])
                    const S = e[n++]
                    w.selectiveArithmeticCodingBypass = !!(1 & S)
                    w.resetContextProbabilities = !!(2 & S)
                    w.terminationOnEachCodingPass = !!(4 & S)
                    w.verticallyStripe = !!(8 & S)
                    w.predictableTermination = !!(16 & S)
                    w.segmentationSymbolUsed = !!(32 & S)
                    w.reversibleTransformation = e[n++]
                    if (w.entropyCoderWithCustomPrecincts) {
                      const t = []
                      for (; n < d + a; ) {
                        const r = e[n++]
                        t.push({ PPx: 15 & r, PPy: r >> 4 })
                      }
                      w.precinctsSizes = t
                    }
                    const C = []
                    w.selectiveArithmeticCodingBypass && C.push('selectiveArithmeticCodingBypass')
                    w.terminationOnEachCodingPass && C.push('terminationOnEachCodingPass')
                    w.verticallyStripe && C.push('verticallyStripe')
                    w.predictableTermination && C.push('predictableTermination')
                    if (C.length > 0) {
                      s = !0
                      ;(0, r.warn)(`JPX: Unsupported COD options (${C.join(', ')}).`)
                    }
                    if (o.mainHeader) o.COD = w
                    else {
                      o.currentTile.COD = w
                      o.currentTile.COC = []
                    }
                    break
                  case 65424:
                    d = (0, i.readUint16)(e, a)
                    h = {}
                    h.index = (0, i.readUint16)(e, a + 2)
                    h.length = (0, i.readUint32)(e, a + 4)
                    h.dataEnd = h.length + a - 2
                    h.partIndex = e[a + 8]
                    h.partsCount = e[a + 9]
                    o.mainHeader = !1
                    if (h.partIndex === 0) {
                      h.COD = o.COD
                      h.COC = o.COC.slice(0)
                      h.QCD = o.QCD
                      h.QCC = o.QCC.slice(0)
                    }
                    o.currentTile = h
                    break
                  case 65427:
                    h = o.currentTile
                    if (h.partIndex === 0) {
                      initializeTile(o, h.index)
                      buildPackets(o)
                    }
                    d = h.dataEnd - a
                    parseTilePackets(o, e, a, d)
                    break
                  case 65363:
                    ;(0, r.warn)('JPX: Codestream code 0xFF53 (COC) is not implemented.')
                  case 65365:
                  case 65367:
                  case 65368:
                  case 65380:
                    d = (0, i.readUint16)(e, a)
                    break
                  default:
                    throw new Error(`Unknown codestream code: ${t.toString(16)}`)
                }
                a += d
              }
            } catch (e) {
              if (s || this.failOnCorruptedImage) throw new JpxError(e.message)
              ;(0, r.warn)(`JPX: Trying to recover from: "${e.message}".`)
            }
            this.tiles = (function transformComponents(e) {
              const t = e.SIZ
              const n = e.components
              const r = t.Csiz
              const i = []
              for (let t = 0, o = e.tiles.length; t < o; t++) {
                const o = e.tiles[t]
                const s = []
                for (let t = 0; t < r; t++) s[t] = transformTile(e, o, t)
                const a = s[0]
                const c = new Uint8ClampedArray(a.items.length * r)
                const l = { left: a.left, top: a.top, width: a.width, height: a.height, items: c }
                let u
                let f
                let h
                let d
                let p
                let g
                let m
                let b = 0
                if (o.codingStyleDefaultParameters.multipleComponentTransform) {
                  const e = r === 4
                  const t = s[0].items
                  const i = s[1].items
                  const a = s[2].items
                  const l = e ? s[3].items : null
                  u = n[0].precision - 8
                  f = 0.5 + (128 << u)
                  const y = o.components[0]
                  const x = r - 3
                  d = t.length
                  if (y.codingStyleParameters.reversibleTransformation)
                    for (h = 0; h < d; h++, b += x) {
                      p = t[h] + f
                      g = i[h]
                      m = a[h]
                      const e = p - ((m + g) >> 2)
                      c[b++] = (e + m) >> u
                      c[b++] = e >> u
                      c[b++] = (e + g) >> u
                    }
                  else
                    for (h = 0; h < d; h++, b += x) {
                      p = t[h] + f
                      g = i[h]
                      m = a[h]
                      c[b++] = (p + 1.402 * m) >> u
                      c[b++] = (p - 0.34413 * g - 0.71414 * m) >> u
                      c[b++] = (p + 1.772 * g) >> u
                    }
                  if (e) for (h = 0, b = 3; h < d; h++, b += 4) c[b] = (l[h] + f) >> u
                } else
                  for (let e = 0; e < r; e++) {
                    const t = s[e].items
                    u = n[e].precision - 8
                    f = 0.5 + (128 << u)
                    for (b = e, h = 0, d = t.length; h < d; h++) {
                      c[b] = (t[h] + f) >> u
                      b += r
                    }
                  }
                i.push(l)
              }
              return i
            })(o)
            this.width = o.SIZ.Xsiz - o.SIZ.XOsiz
            this.height = o.SIZ.Ysiz - o.SIZ.YOsiz
            this.componentsCount = o.SIZ.Csiz
          }
        }
        function calculateComponentDimensions(e, t) {
          e.x0 = Math.ceil(t.XOsiz / e.XRsiz)
          e.x1 = Math.ceil(t.Xsiz / e.XRsiz)
          e.y0 = Math.ceil(t.YOsiz / e.YRsiz)
          e.y1 = Math.ceil(t.Ysiz / e.YRsiz)
          e.width = e.x1 - e.x0
          e.height = e.y1 - e.y0
        }
        function calculateTileGrids(e, t) {
          const n = e.SIZ
          const r = []
          let i
          const o = Math.ceil((n.Xsiz - n.XTOsiz) / n.XTsiz)
          const s = Math.ceil((n.Ysiz - n.YTOsiz) / n.YTsiz)
          for (let e = 0; e < s; e++)
            for (let t = 0; t < o; t++) {
              i = {}
              i.tx0 = Math.max(n.XTOsiz + t * n.XTsiz, n.XOsiz)
              i.ty0 = Math.max(n.YTOsiz + e * n.YTsiz, n.YOsiz)
              i.tx1 = Math.min(n.XTOsiz + (t + 1) * n.XTsiz, n.Xsiz)
              i.ty1 = Math.min(n.YTOsiz + (e + 1) * n.YTsiz, n.Ysiz)
              i.width = i.tx1 - i.tx0
              i.height = i.ty1 - i.ty0
              i.components = []
              r.push(i)
            }
          e.tiles = r
          for (let e = 0, o = n.Csiz; e < o; e++) {
            const n = t[e]
            for (let t = 0, o = r.length; t < o; t++) {
              const o = {}
              i = r[t]
              o.tcx0 = Math.ceil(i.tx0 / n.XRsiz)
              o.tcy0 = Math.ceil(i.ty0 / n.YRsiz)
              o.tcx1 = Math.ceil(i.tx1 / n.XRsiz)
              o.tcy1 = Math.ceil(i.ty1 / n.YRsiz)
              o.width = o.tcx1 - o.tcx0
              o.height = o.tcy1 - o.tcy0
              i.components[e] = o
            }
          }
        }
        function getBlocksDimensions(e, t, n) {
          const r = t.codingStyleParameters
          const i = {}
          if (r.entropyCoderWithCustomPrecincts) {
            i.PPx = r.precinctsSizes[n].PPx
            i.PPy = r.precinctsSizes[n].PPy
          } else {
            i.PPx = 15
            i.PPy = 15
          }
          i.xcb_ = n > 0 ? Math.min(r.xcb, i.PPx - 1) : Math.min(r.xcb, i.PPx)
          i.ycb_ = n > 0 ? Math.min(r.ycb, i.PPy - 1) : Math.min(r.ycb, i.PPy)
          return i
        }
        function buildPrecincts(e, t, n) {
          const r = 1 << n.PPx
          const i = 1 << n.PPy
          const o = t.resLevel === 0
          const s = 1 << (n.PPx + (o ? 0 : -1))
          const a = 1 << (n.PPy + (o ? 0 : -1))
          const c = t.trx1 > t.trx0 ? Math.ceil(t.trx1 / r) - Math.floor(t.trx0 / r) : 0
          const l = t.try1 > t.try0 ? Math.ceil(t.try1 / i) - Math.floor(t.try0 / i) : 0
          const u = c * l
          t.precinctParameters = {
            precinctWidth: r,
            precinctHeight: i,
            numprecinctswide: c,
            numprecinctshigh: l,
            numprecincts: u,
            precinctWidthInSubband: s,
            precinctHeightInSubband: a
          }
        }
        function buildCodeblocks(e, t, n) {
          const r = n.xcb_
          const i = n.ycb_
          const o = 1 << r
          const s = 1 << i
          const a = t.tbx0 >> r
          const c = t.tby0 >> i
          const l = (t.tbx1 + o - 1) >> r
          const u = (t.tby1 + s - 1) >> i
          const f = t.resolution.precinctParameters
          const h = []
          const d = []
          let p
          let g
          let m
          let b
          for (g = c; g < u; g++)
            for (p = a; p < l; p++) {
              m = {
                cbx: p,
                cby: g,
                tbx0: o * p,
                tby0: s * g,
                tbx1: o * (p + 1),
                tby1: s * (g + 1)
              }
              m.tbx0_ = Math.max(t.tbx0, m.tbx0)
              m.tby0_ = Math.max(t.tby0, m.tby0)
              m.tbx1_ = Math.min(t.tbx1, m.tbx1)
              m.tby1_ = Math.min(t.tby1, m.tby1)
              b =
                Math.floor((m.tbx0_ - t.tbx0) / f.precinctWidthInSubband) +
                Math.floor((m.tby0_ - t.tby0) / f.precinctHeightInSubband) * f.numprecinctswide
              m.precinctNumber = b
              m.subbandType = t.type
              m.Lblock = 3
              if (m.tbx1_ <= m.tbx0_ || m.tby1_ <= m.tby0_) continue
              h.push(m)
              let e = d[b]
              if (void 0 !== e) {
                p < e.cbxMin ? (e.cbxMin = p) : p > e.cbxMax && (e.cbxMax = p)
                g < e.cbyMin ? (e.cbxMin = g) : g > e.cbyMax && (e.cbyMax = g)
              } else d[b] = e = { cbxMin: p, cbyMin: g, cbxMax: p, cbyMax: g }
              m.precinct = e
            }
          t.codeblockParameters = {
            codeblockWidth: r,
            codeblockHeight: i,
            numcodeblockwide: l - a + 1,
            numcodeblockhigh: u - c + 1
          }
          t.codeblocks = h
          t.precincts = d
        }
        function createPacket(e, t, n) {
          const r = []
          const i = e.subbands
          for (let e = 0, n = i.length; e < n; e++) {
            const n = i[e].codeblocks
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e]
              i.precinctNumber === t && r.push(i)
            }
          }
          return { layerNumber: n, codeblocks: r }
        }
        function LayerResolutionComponentPositionIterator(e) {
          const t = e.SIZ
          const n = e.currentTile.index
          const r = e.tiles[n]
          const i = r.codingStyleDefaultParameters.layersCount
          const o = t.Csiz
          let s = 0
          for (let e = 0; e < o; e++)
            s = Math.max(s, r.components[e].codingStyleParameters.decompositionLevelsCount)
          let a = 0
          let c = 0
          let l = 0
          let u = 0
          this.nextPacket = function JpxImage_nextPacket() {
            for (; a < i; a++) {
              for (; c <= s; c++) {
                for (; l < o; l++) {
                  const e = r.components[l]
                  if (c > e.codingStyleParameters.decompositionLevelsCount) continue
                  const t = e.resolutions[c]
                  const n = t.precinctParameters.numprecincts
                  for (; u < n; ) {
                    const e = createPacket(t, u, a)
                    u++
                    return e
                  }
                  u = 0
                }
                l = 0
              }
              c = 0
            }
            throw new JpxError('Out of packets')
          }
        }
        function ResolutionLayerComponentPositionIterator(e) {
          const t = e.SIZ
          const n = e.currentTile.index
          const r = e.tiles[n]
          const i = r.codingStyleDefaultParameters.layersCount
          const o = t.Csiz
          let s = 0
          for (let e = 0; e < o; e++)
            s = Math.max(s, r.components[e].codingStyleParameters.decompositionLevelsCount)
          let a = 0
          let c = 0
          let l = 0
          let u = 0
          this.nextPacket = function JpxImage_nextPacket() {
            for (; a <= s; a++) {
              for (; c < i; c++) {
                for (; l < o; l++) {
                  const e = r.components[l]
                  if (a > e.codingStyleParameters.decompositionLevelsCount) continue
                  const t = e.resolutions[a]
                  const n = t.precinctParameters.numprecincts
                  for (; u < n; ) {
                    const e = createPacket(t, u, c)
                    u++
                    return e
                  }
                  u = 0
                }
                l = 0
              }
              c = 0
            }
            throw new JpxError('Out of packets')
          }
        }
        function ResolutionPositionComponentLayerIterator(e) {
          const t = e.SIZ
          const n = e.currentTile.index
          const r = e.tiles[n]
          const i = r.codingStyleDefaultParameters.layersCount
          const o = t.Csiz
          let s
          let a
          let c
          let l
          let u = 0
          for (c = 0; c < o; c++) {
            const e = r.components[c]
            u = Math.max(u, e.codingStyleParameters.decompositionLevelsCount)
          }
          const f = new Int32Array(u + 1)
          for (a = 0; a <= u; ++a) {
            let e = 0
            for (c = 0; c < o; ++c) {
              const t = r.components[c].resolutions
              a < t.length && (e = Math.max(e, t[a].precinctParameters.numprecincts))
            }
            f[a] = e
          }
          s = 0
          a = 0
          c = 0
          l = 0
          this.nextPacket = function JpxImage_nextPacket() {
            for (; a <= u; a++) {
              for (; l < f[a]; l++) {
                for (; c < o; c++) {
                  const e = r.components[c]
                  if (a > e.codingStyleParameters.decompositionLevelsCount) continue
                  const t = e.resolutions[a]
                  const n = t.precinctParameters.numprecincts
                  if (!(l >= n)) {
                    for (; s < i; ) {
                      const e = createPacket(t, l, s)
                      s++
                      return e
                    }
                    s = 0
                  }
                }
                c = 0
              }
              l = 0
            }
            throw new JpxError('Out of packets')
          }
        }
        function PositionComponentResolutionLayerIterator(e) {
          const t = e.SIZ
          const n = e.currentTile.index
          const r = e.tiles[n]
          const i = r.codingStyleDefaultParameters.layersCount
          const o = t.Csiz
          const s = getPrecinctSizesInImageScale(r)
          const a = s
          let c = 0
          let l = 0
          let u = 0
          let f = 0
          let h = 0
          this.nextPacket = function JpxImage_nextPacket() {
            for (; h < a.maxNumHigh; h++) {
              for (; f < a.maxNumWide; f++) {
                for (; u < o; u++) {
                  const e = r.components[u]
                  const t = e.codingStyleParameters.decompositionLevelsCount
                  for (; l <= t; l++) {
                    const t = e.resolutions[l]
                    const n = s.components[u].resolutions[l]
                    const r = getPrecinctIndexIfExist(f, h, n, a, t)
                    if (r !== null) {
                      for (; c < i; ) {
                        const e = createPacket(t, r, c)
                        c++
                        return e
                      }
                      c = 0
                    }
                  }
                  l = 0
                }
                u = 0
              }
              f = 0
            }
            throw new JpxError('Out of packets')
          }
        }
        function ComponentPositionResolutionLayerIterator(e) {
          const t = e.SIZ
          const n = e.currentTile.index
          const r = e.tiles[n]
          const i = r.codingStyleDefaultParameters.layersCount
          const o = t.Csiz
          const s = getPrecinctSizesInImageScale(r)
          let a = 0
          let c = 0
          let l = 0
          let u = 0
          let f = 0
          this.nextPacket = function JpxImage_nextPacket() {
            for (; l < o; ++l) {
              const e = r.components[l]
              const t = s.components[l]
              const n = e.codingStyleParameters.decompositionLevelsCount
              for (; f < t.maxNumHigh; f++) {
                for (; u < t.maxNumWide; u++) {
                  for (; c <= n; c++) {
                    const n = e.resolutions[c]
                    const r = t.resolutions[c]
                    const o = getPrecinctIndexIfExist(u, f, r, t, n)
                    if (o !== null) {
                      for (; a < i; ) {
                        const e = createPacket(n, o, a)
                        a++
                        return e
                      }
                      a = 0
                    }
                  }
                  c = 0
                }
                u = 0
              }
              f = 0
            }
            throw new JpxError('Out of packets')
          }
        }
        function getPrecinctIndexIfExist(e, t, n, r, i) {
          const o = e * r.minWidth
          const s = t * r.minHeight
          if (o % n.width != 0 || s % n.height != 0) return null
          const a = (s / n.width) * i.precinctParameters.numprecinctswide
          return o / n.height + a
        }
        function getPrecinctSizesInImageScale(e) {
          const t = e.components.length
          let n = Number.MAX_VALUE
          let r = Number.MAX_VALUE
          let i = 0
          let o = 0
          const s = new Array(t)
          for (let a = 0; a < t; a++) {
            const t = e.components[a]
            const c = t.codingStyleParameters.decompositionLevelsCount
            const l = new Array(c + 1)
            let u = Number.MAX_VALUE
            let f = Number.MAX_VALUE
            let h = 0
            let d = 0
            let p = 1
            for (let e = c; e >= 0; --e) {
              const n = t.resolutions[e]
              const r = p * n.precinctParameters.precinctWidth
              const i = p * n.precinctParameters.precinctHeight
              u = Math.min(u, r)
              f = Math.min(f, i)
              h = Math.max(h, n.precinctParameters.numprecinctswide)
              d = Math.max(d, n.precinctParameters.numprecinctshigh)
              l[e] = { width: r, height: i }
              p <<= 1
            }
            n = Math.min(n, u)
            r = Math.min(r, f)
            i = Math.max(i, h)
            o = Math.max(o, d)
            s[a] = { resolutions: l, minWidth: u, minHeight: f, maxNumWide: h, maxNumHigh: d }
          }
          return { components: s, minWidth: n, minHeight: r, maxNumWide: i, maxNumHigh: o }
        }
        function buildPackets(e) {
          const t = e.SIZ
          const n = e.currentTile.index
          const r = e.tiles[n]
          const i = t.Csiz
          for (let e = 0; e < i; e++) {
            const t = r.components[e]
            const n = t.codingStyleParameters.decompositionLevelsCount
            const i = []
            const o = []
            for (let e = 0; e <= n; e++) {
              const r = getBlocksDimensions(0, t, e)
              const s = {}
              const a = 1 << (n - e)
              s.trx0 = Math.ceil(t.tcx0 / a)
              s.try0 = Math.ceil(t.tcy0 / a)
              s.trx1 = Math.ceil(t.tcx1 / a)
              s.try1 = Math.ceil(t.tcy1 / a)
              s.resLevel = e
              buildPrecincts(0, s, r)
              i.push(s)
              let c
              if (e === 0) {
                c = {}
                c.type = 'LL'
                c.tbx0 = Math.ceil(t.tcx0 / a)
                c.tby0 = Math.ceil(t.tcy0 / a)
                c.tbx1 = Math.ceil(t.tcx1 / a)
                c.tby1 = Math.ceil(t.tcy1 / a)
                c.resolution = s
                buildCodeblocks(0, c, r)
                o.push(c)
                s.subbands = [c]
              } else {
                const i = 1 << (n - e + 1)
                const a = []
                c = {}
                c.type = 'HL'
                c.tbx0 = Math.ceil(t.tcx0 / i - 0.5)
                c.tby0 = Math.ceil(t.tcy0 / i)
                c.tbx1 = Math.ceil(t.tcx1 / i - 0.5)
                c.tby1 = Math.ceil(t.tcy1 / i)
                c.resolution = s
                buildCodeblocks(0, c, r)
                o.push(c)
                a.push(c)
                c = {}
                c.type = 'LH'
                c.tbx0 = Math.ceil(t.tcx0 / i)
                c.tby0 = Math.ceil(t.tcy0 / i - 0.5)
                c.tbx1 = Math.ceil(t.tcx1 / i)
                c.tby1 = Math.ceil(t.tcy1 / i - 0.5)
                c.resolution = s
                buildCodeblocks(0, c, r)
                o.push(c)
                a.push(c)
                c = {}
                c.type = 'HH'
                c.tbx0 = Math.ceil(t.tcx0 / i - 0.5)
                c.tby0 = Math.ceil(t.tcy0 / i - 0.5)
                c.tbx1 = Math.ceil(t.tcx1 / i - 0.5)
                c.tby1 = Math.ceil(t.tcy1 / i - 0.5)
                c.resolution = s
                buildCodeblocks(0, c, r)
                o.push(c)
                a.push(c)
                s.subbands = a
              }
            }
            t.resolutions = i
            t.subbands = o
          }
          const o = r.codingStyleDefaultParameters.progressionOrder
          switch (o) {
            case 0:
              r.packetsIterator = new LayerResolutionComponentPositionIterator(e)
              break
            case 1:
              r.packetsIterator = new ResolutionLayerComponentPositionIterator(e)
              break
            case 2:
              r.packetsIterator = new ResolutionPositionComponentLayerIterator(e)
              break
            case 3:
              r.packetsIterator = new PositionComponentResolutionLayerIterator(e)
              break
            case 4:
              r.packetsIterator = new ComponentPositionResolutionLayerIterator(e)
              break
            default:
              throw new JpxError(`Unsupported progression order ${o}`)
          }
        }
        function parseTilePackets(e, t, n, r) {
          let o
          let s = 0
          let a = 0
          let c = !1
          function readBits(e) {
            for (; a < e; ) {
              const e = t[n + s]
              s++
              if (c) {
                o = (o << 7) | e
                a += 7
                c = !1
              } else {
                o = (o << 8) | e
                a += 8
              }
              e === 255 && (c = !0)
            }
            a -= e
            return (o >>> a) & ((1 << e) - 1)
          }
          function skipMarkerIfEqual(e) {
            if (t[n + s - 1] === 255 && t[n + s] === e) {
              skipBytes(1)
              return !0
            }
            if (t[n + s] === 255 && t[n + s + 1] === e) {
              skipBytes(2)
              return !0
            }
            return !1
          }
          function skipBytes(e) {
            s += e
          }
          function alignToByte() {
            a = 0
            if (c) {
              s++
              c = !1
            }
          }
          function readCodingpasses() {
            if (readBits(1) === 0) return 1
            if (readBits(1) === 0) return 2
            let e = readBits(2)
            if (e < 3) return e + 3
            e = readBits(5)
            if (e < 31) return e + 6
            e = readBits(7)
            return e + 37
          }
          const l = e.currentTile.index
          const u = e.tiles[l]
          const f = e.COD.sopMarkerUsed
          const h = e.COD.ephMarkerUsed
          const d = u.packetsIterator
          for (; s < r; ) {
            alignToByte()
            f && skipMarkerIfEqual(145) && skipBytes(4)
            const e = d.nextPacket()
            if (!readBits(1)) continue
            const r = e.layerNumber
            const o = []
            let a
            for (let t = 0, n = e.codeblocks.length; t < n; t++) {
              a = e.codeblocks[t]
              let n = a.precinct
              const s = a.cbx - n.cbxMin
              const c = a.cby - n.cbyMin
              let l
              let u
              let f = !1
              let h = !1
              if (void 0 !== a.included) f = !!readBits(1)
              else {
                n = a.precinct
                let e
                if (void 0 !== n.inclusionTree) e = n.inclusionTree
                else {
                  const t = n.cbxMax - n.cbxMin + 1
                  const i = n.cbyMax - n.cbyMin + 1
                  e = new InclusionTree(t, i, r)
                  u = new TagTree(t, i)
                  n.inclusionTree = e
                  n.zeroBitPlanesTree = u
                  for (let e = 0; e < r; e++)
                    if (readBits(1) !== 0) throw new JpxError('Invalid tag tree')
                }
                if (e.reset(s, c, r))
                  for (;;) {
                    if (!readBits(1)) {
                      e.incrementValue(r)
                      break
                    }
                    l = !e.nextLevel()
                    if (l) {
                      a.included = !0
                      f = h = !0
                      break
                    }
                  }
              }
              if (!f) continue
              if (h) {
                u = n.zeroBitPlanesTree
                u.reset(s, c)
                for (;;)
                  if (readBits(1)) {
                    l = !u.nextLevel()
                    if (l) break
                  } else u.incrementValue()
                a.zeroBitPlanes = u.value
              }
              const d = readCodingpasses()
              for (; readBits(1); ) a.Lblock++
              const p = (0, i.log2)(d)
              const g = readBits((d < 1 << p ? p - 1 : p) + a.Lblock)
              o.push({ codeblock: a, codingpasses: d, dataLength: g })
            }
            alignToByte()
            h && skipMarkerIfEqual(146)
            for (; o.length > 0; ) {
              const e = o.shift()
              a = e.codeblock
              void 0 === a.data && (a.data = [])
              a.data.push({
                data: t,
                start: n + s,
                end: n + s + e.dataLength,
                codingpasses: e.codingpasses
              })
              s += e.dataLength
            }
          }
          return s
        }
        function copyCoefficients(e, t, n, r, i, s, c, l, u) {
          const f = r.tbx0
          const h = r.tby0
          const d = r.tbx1 - r.tbx0
          const p = r.codeblocks
          const g = r.type.charAt(0) === 'H' ? 1 : 0
          const m = r.type.charAt(1) === 'H' ? t : 0
          for (let n = 0, b = p.length; n < b; ++n) {
            const b = p[n]
            const y = b.tbx1_ - b.tbx0_
            const x = b.tby1_ - b.tby0_
            if (y === 0 || x === 0) continue
            if (void 0 === b.data) continue
            const w = new a(y, x, b.subbandType, b.zeroBitPlanes, s)
            let T = 2
            const S = b.data
            let C
            let P
            let v
            let E = 0
            let I = 0
            for (C = 0, P = S.length; C < P; C++) {
              v = S[C]
              E += v.end - v.start
              I += v.codingpasses
            }
            const A = new Uint8Array(E)
            let k = 0
            for (C = 0, P = S.length; C < P; C++) {
              v = S[C]
              const e = v.data.subarray(v.start, v.end)
              A.set(e, k)
              k += e.length
            }
            const O = new o.ArithmeticDecoder(A, 0, E)
            w.setDecoder(O)
            for (C = 0; C < I; C++) {
              switch (T) {
                case 0:
                  w.runSignificancePropagationPass()
                  break
                case 1:
                  w.runMagnitudeRefinementPass()
                  break
                case 2:
                  w.runCleanupPass()
                  l && w.checkSegmentationSymbol()
              }
              u && w.reset()
              T = (T + 1) % 3
            }
            let _ = b.tbx0_ - f + (b.tby0_ - h) * d
            const B = w.coefficentsSign
            const D = w.coefficentsMagnitude
            const M = w.bitsDecoded
            const R = c ? 0 : 0.5
            let L
            let U
            let N
            k = 0
            const j = r.type !== 'LL'
            for (C = 0; C < x; C++) {
              const n = 2 * ((_ / d) | 0) * (t - d) + g + m
              for (L = 0; L < y; L++) {
                U = D[k]
                if (U !== 0) {
                  U = (U + R) * i
                  B[k] !== 0 && (U = -U)
                  N = M[k]
                  const t = j ? n + (_ << 1) : _
                  e[t] = c && N >= s ? U : U * (1 << (s - N))
                }
                _++
                k++
              }
              _ += d - y
            }
          }
        }
        function transformTile(e, t, n) {
          const r = t.components[n]
          const i = r.codingStyleParameters
          const o = r.quantizationParameters
          const a = i.decompositionLevelsCount
          const c = o.SPqcds
          const l = o.scalarExpounded
          const u = o.guardBits
          const f = i.segmentationSymbolUsed
          const h = i.resetContextProbabilities
          const d = e.components[n].precision
          const p = i.reversibleTransformation
          const g = p ? new ReversibleTransform() : new IrreversibleTransform()
          const m = []
          let b = 0
          for (let e = 0; e <= a; e++) {
            const t = r.resolutions[e]
            const n = t.trx1 - t.trx0
            const i = t.try1 - t.try0
            const o = new Float32Array(n * i)
            for (let r = 0, i = t.subbands.length; r < i; r++) {
              let i
              let a
              if (l) {
                i = c[b].mu
                a = c[b].epsilon
                b++
              } else {
                i = c[0].mu
                a = c[0].epsilon + (e > 0 ? 1 - e : 0)
              }
              const g = t.subbands[r]
              const m = s[g.type]
              copyCoefficients(
                o,
                n,
                0,
                g,
                p ? 1 : 2 ** (d + m - a) * (1 + i / 2048),
                u + a - 1,
                p,
                f,
                h
              )
            }
            m.push({ width: n, height: i, items: o })
          }
          const y = g.calculate(m, r.tcx0, r.tcy0)
          return { left: r.tcx0, top: r.tcy0, width: y.width, height: y.height, items: y.items }
        }
        function initializeTile(e, t) {
          const n = e.SIZ.Csiz
          const r = e.tiles[t]
          for (let t = 0; t < n; t++) {
            const n = r.components[t]
            const i = void 0 !== e.currentTile.QCC[t] ? e.currentTile.QCC[t] : e.currentTile.QCD
            n.quantizationParameters = i
            const o = void 0 !== e.currentTile.COC[t] ? e.currentTile.COC[t] : e.currentTile.COD
            n.codingStyleParameters = o
          }
          r.codingStyleDefaultParameters = e.currentTile.COD
        }
        class TagTree {
          constructor(e, t) {
            const n = (0, i.log2)(Math.max(e, t)) + 1
            this.levels = []
            for (let r = 0; r < n; r++) {
              const n = { width: e, height: t, items: [] }
              this.levels.push(n)
              e = Math.ceil(e / 2)
              t = Math.ceil(t / 2)
            }
          }

          reset(e, t) {
            let n
            let r = 0
            let i = 0
            for (; r < this.levels.length; ) {
              n = this.levels[r]
              const o = e + t * n.width
              if (void 0 !== n.items[o]) {
                i = n.items[o]
                break
              }
              n.index = o
              e >>= 1
              t >>= 1
              r++
            }
            r--
            n = this.levels[r]
            n.items[n.index] = i
            this.currentLevel = r
            delete this.value
          }

          incrementValue() {
            const e = this.levels[this.currentLevel]
            e.items[e.index]++
          }

          nextLevel() {
            let e = this.currentLevel
            let t = this.levels[e]
            const n = t.items[t.index]
            e--
            if (e < 0) {
              this.value = n
              return !1
            }
            this.currentLevel = e
            t = this.levels[e]
            t.items[t.index] = n
            return !0
          }
        }
        class InclusionTree {
          constructor(e, t, n) {
            const r = (0, i.log2)(Math.max(e, t)) + 1
            this.levels = []
            for (let i = 0; i < r; i++) {
              const r = new Uint8Array(e * t)
              for (let e = 0, t = r.length; e < t; e++) r[e] = n
              const i = { width: e, height: t, items: r }
              this.levels.push(i)
              e = Math.ceil(e / 2)
              t = Math.ceil(t / 2)
            }
          }

          reset(e, t, n) {
            let r = 0
            for (; r < this.levels.length; ) {
              const i = this.levels[r]
              const o = e + t * i.width
              i.index = o
              const s = i.items[o]
              if (s === 255) break
              if (s > n) {
                this.currentLevel = r
                this.propagateValues()
                return !1
              }
              e >>= 1
              t >>= 1
              r++
            }
            this.currentLevel = r - 1
            return !0
          }

          incrementValue(e) {
            const t = this.levels[this.currentLevel]
            t.items[t.index] = e + 1
            this.propagateValues()
          }

          propagateValues() {
            let e = this.currentLevel
            let t = this.levels[e]
            const n = t.items[t.index]
            for (; --e >= 0; ) {
              t = this.levels[e]
              t.items[t.index] = n
            }
          }

          nextLevel() {
            let e = this.currentLevel
            let t = this.levels[e]
            const n = t.items[t.index]
            t.items[t.index] = 255
            e--
            if (e < 0) return !1
            this.currentLevel = e
            t = this.levels[e]
            t.items[t.index] = n
            return !0
          }
        }
        const a = (function BitModelClosure() {
          const e = 17
          const t = new Uint8Array([
            0, 5, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 1, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0,
            0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7,
            8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8
          ])
          const n = new Uint8Array([
            0, 3, 4, 0, 5, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0,
            0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8,
            8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8
          ])
          const r = new Uint8Array([
            0, 1, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 5, 0, 4, 5, 5, 0, 5, 5, 5, 0, 0,
            0, 0, 0, 6, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8,
            8, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8
          ])
          return class BitModel {
            constructor(e, i, o, s, a) {
              this.width = e
              this.height = i
              let c
              c = o === 'HH' ? r : o === 'HL' ? n : t
              this.contextLabelTable = c
              const l = e * i
              this.neighborsSignificance = new Uint8Array(l)
              this.coefficentsSign = new Uint8Array(l)
              let u
              u = a > 14 ? new Uint32Array(l) : a > 6 ? new Uint16Array(l) : new Uint8Array(l)
              this.coefficentsMagnitude = u
              this.processingFlags = new Uint8Array(l)
              const f = new Uint8Array(l)
              if (s !== 0) for (let e = 0; e < l; e++) f[e] = s
              this.bitsDecoded = f
              this.reset()
            }

            setDecoder(e) {
              this.decoder = e
            }

            reset() {
              this.contexts = new Int8Array(19)
              this.contexts[0] = 8
              this.contexts[17] = 92
              this.contexts[18] = 6
            }

            setNeighborsSignificance(e, t, n) {
              const r = this.neighborsSignificance
              const i = this.width
              const o = this.height
              const s = t > 0
              const a = t + 1 < i
              let c
              if (e > 0) {
                c = n - i
                s && (r[c - 1] += 16)
                a && (r[c + 1] += 16)
                r[c] += 4
              }
              if (e + 1 < o) {
                c = n + i
                s && (r[c - 1] += 16)
                a && (r[c + 1] += 16)
                r[c] += 4
              }
              s && (r[n - 1] += 1)
              a && (r[n + 1] += 1)
              r[n] |= 128
            }

            runSignificancePropagationPass() {
              const e = this.decoder
              const t = this.width
              const n = this.height
              const r = this.coefficentsMagnitude
              const i = this.coefficentsSign
              const o = this.neighborsSignificance
              const s = this.processingFlags
              const a = this.contexts
              const c = this.contextLabelTable
              const l = this.bitsDecoded
              for (let u = 0; u < n; u += 4)
                for (let f = 0; f < t; f++) {
                  let h = u * t + f
                  for (let d = 0; d < 4; d++, h += t) {
                    const t = u + d
                    if (t >= n) break
                    s[h] &= -2
                    if (r[h] || !o[h]) continue
                    const p = c[o[h]]
                    if (e.readBit(a, p)) {
                      const e = this.decodeSignBit(t, f, h)
                      i[h] = e
                      r[h] = 1
                      this.setNeighborsSignificance(t, f, h)
                      s[h] |= 2
                    }
                    l[h]++
                    s[h] |= 1
                  }
                }
            }

            decodeSignBit(e, t, n) {
              const r = this.width
              const i = this.height
              const o = this.coefficentsMagnitude
              const s = this.coefficentsSign
              let a
              let c
              let l
              let u
              let f
              let h
              u = t > 0 && o[n - 1] !== 0
              if (t + 1 < r && o[n + 1] !== 0) {
                l = s[n + 1]
                if (u) {
                  c = s[n - 1]
                  a = 1 - l - c
                } else a = 1 - l - l
              } else if (u) {
                c = s[n - 1]
                a = 1 - c - c
              } else a = 0
              const d = 3 * a
              u = e > 0 && o[n - r] !== 0
              if (e + 1 < i && o[n + r] !== 0) {
                l = s[n + r]
                if (u) {
                  c = s[n - r]
                  a = 1 - l - c + d
                } else a = 1 - l - l + d
              } else if (u) {
                c = s[n - r]
                a = 1 - c - c + d
              } else a = d
              if (a >= 0) {
                f = 9 + a
                h = this.decoder.readBit(this.contexts, f)
              } else {
                f = 9 - a
                h = 1 ^ this.decoder.readBit(this.contexts, f)
              }
              return h
            }

            runMagnitudeRefinementPass() {
              const e = this.decoder
              const t = this.width
              const n = this.height
              const r = this.coefficentsMagnitude
              const i = this.neighborsSignificance
              const o = this.contexts
              const s = this.bitsDecoded
              const a = this.processingFlags
              const c = t * n
              const l = 4 * t
              for (let n, u = 0; u < c; u = n) {
                n = Math.min(c, u + l)
                for (let c = 0; c < t; c++)
                  for (let l = u + c; l < n; l += t) {
                    if (!r[l] || (1 & a[l]) != 0) continue
                    let t = 16
                    if ((2 & a[l]) != 0) {
                      a[l] ^= 2
                      t = (127 & i[l]) === 0 ? 15 : 14
                    }
                    const n = e.readBit(o, t)
                    r[l] = (r[l] << 1) | n
                    s[l]++
                    a[l] |= 1
                  }
              }
            }

            runCleanupPass() {
              const t = this.decoder
              const n = this.width
              const r = this.height
              const i = this.neighborsSignificance
              const o = this.coefficentsMagnitude
              const s = this.coefficentsSign
              const a = this.contexts
              const c = this.contextLabelTable
              const l = this.bitsDecoded
              const u = this.processingFlags
              const f = n
              const h = 2 * n
              const d = 3 * n
              let p
              for (let g = 0; g < r; g = p) {
                p = Math.min(g + 4, r)
                const m = g * n
                const b = g + 3 < r
                for (let r = 0; r < n; r++) {
                  const y = m + r
                  let x
                  let w = 0
                  let T = y
                  let S = g
                  if (
                    b &&
                    u[y] === 0 &&
                    u[y + f] === 0 &&
                    u[y + h] === 0 &&
                    u[y + d] === 0 &&
                    i[y] === 0 &&
                    i[y + f] === 0 &&
                    i[y + h] === 0 &&
                    i[y + d] === 0
                  ) {
                    if (!t.readBit(a, 18)) {
                      l[y]++
                      l[y + f]++
                      l[y + h]++
                      l[y + d]++
                      continue
                    }
                    w = (t.readBit(a, e) << 1) | t.readBit(a, e)
                    if (w !== 0) {
                      S = g + w
                      T += w * n
                    }
                    x = this.decodeSignBit(S, r, T)
                    s[T] = x
                    o[T] = 1
                    this.setNeighborsSignificance(S, r, T)
                    u[T] |= 2
                    T = y
                    for (let e = g; e <= S; e++, T += n) l[T]++
                    w++
                  }
                  for (S = g + w; S < p; S++, T += n) {
                    if (o[T] || (1 & u[T]) != 0) continue
                    const e = c[i[T]]
                    if (t.readBit(a, e) === 1) {
                      x = this.decodeSignBit(S, r, T)
                      s[T] = x
                      o[T] = 1
                      this.setNeighborsSignificance(S, r, T)
                      u[T] |= 2
                    }
                    l[T]++
                  }
                }
              }
            }

            checkSegmentationSymbol() {
              const t = this.decoder
              const n = this.contexts
              if (
                ((t.readBit(n, e) << 3) |
                  (t.readBit(n, e) << 2) |
                  (t.readBit(n, e) << 1) |
                  t.readBit(n, e)) !==
                10
              )
                throw new JpxError('Invalid segmentation symbol')
            }
          }
        })()
        class Transform {
          constructor() {
            this.constructor === Transform && (0, r.unreachable)('Cannot initialize Transform.')
          }

          calculate(e, t, n) {
            let r = e[0]
            for (let i = 1, o = e.length; i < o; i++) r = this.iterate(r, e[i], t, n)
            return r
          }

          extend(e, t, n) {
            let r = t - 1
            let i = t + 1
            let o = t + n - 2
            let s = t + n
            e[r--] = e[i++]
            e[s++] = e[o--]
            e[r--] = e[i++]
            e[s++] = e[o--]
            e[r--] = e[i++]
            e[s++] = e[o--]
            e[r] = e[i]
            e[s] = e[o]
          }

          filter(e, t, n) {
            ;(0, r.unreachable)('Abstract method `filter` called')
          }

          iterate(e, t, n, r) {
            const i = e.width
            const o = e.height
            let s = e.items
            const a = t.width
            const c = t.height
            const l = t.items
            let u
            let f
            let h
            let d
            let p
            let g
            for (h = 0, u = 0; u < o; u++) {
              d = 2 * u * a
              for (f = 0; f < i; f++, h++, d += 2) l[d] = s[h]
            }
            s = e.items = null
            const m = new Float32Array(a + 8)
            if (a === 1) {
              if ((1 & n) != 0) for (g = 0, h = 0; g < c; g++, h += a) l[h] *= 0.5
            } else
              for (g = 0, h = 0; g < c; g++, h += a) {
                m.set(l.subarray(h, h + a), 4)
                this.extend(m, 4, a)
                this.filter(m, 4, a)
                l.set(m.subarray(4, 4 + a), h)
              }
            let b = 16
            const y = []
            for (u = 0; u < b; u++) y.push(new Float32Array(c + 8))
            let x
            let w = 0
            e = 4 + c
            if (c === 1) {
              if ((1 & r) != 0) for (p = 0; p < a; p++) l[p] *= 0.5
            } else
              for (p = 0; p < a; p++) {
                if (w === 0) {
                  b = Math.min(a - p, b)
                  for (h = p, d = 4; d < e; h += a, d++) for (x = 0; x < b; x++) y[x][d] = l[h + x]
                  w = b
                }
                w--
                const t = y[w]
                this.extend(t, 4, c)
                this.filter(t, 4, c)
                if (w === 0) {
                  h = p - b + 1
                  for (d = 4; d < e; h += a, d++) for (x = 0; x < b; x++) l[h + x] = y[x][d]
                }
              }
            return { width: a, height: c, items: l }
          }
        }
        class IrreversibleTransform extends Transform {
          filter(e, t, n) {
            const r = n >> 1
            let i
            let o
            let s
            let a
            const c = -1.586134342059924
            const l = -0.052980118572961
            const u = 0.882911075530934
            const f = 0.443506852043971
            const h = 1.230174104914001
            i = (t |= 0) - 3
            for (o = r + 4; o--; i += 2) e[i] *= 0.8128930661159609
            i = t - 2
            s = f * e[i - 1]
            for (o = r + 3; o--; i += 2) {
              a = f * e[i + 1]
              e[i] = h * e[i] - s - a
              if (!o--) break
              i += 2
              s = f * e[i + 1]
              e[i] = h * e[i] - s - a
            }
            i = t - 1
            s = u * e[i - 1]
            for (o = r + 2; o--; i += 2) {
              a = u * e[i + 1]
              e[i] -= s + a
              if (!o--) break
              i += 2
              s = u * e[i + 1]
              e[i] -= s + a
            }
            i = t
            s = l * e[i - 1]
            for (o = r + 1; o--; i += 2) {
              a = l * e[i + 1]
              e[i] -= s + a
              if (!o--) break
              i += 2
              s = l * e[i + 1]
              e[i] -= s + a
            }
            if (r !== 0) {
              i = t + 1
              s = c * e[i - 1]
              for (o = r; o--; i += 2) {
                a = c * e[i + 1]
                e[i] -= s + a
                if (!o--) break
                i += 2
                s = c * e[i + 1]
                e[i] -= s + a
              }
            }
          }
        }
        class ReversibleTransform extends Transform {
          filter(e, t, n) {
            const r = n >> 1
            let i
            let o
            for (i = t |= 0, o = r + 1; o--; i += 2) e[i] -= (e[i - 1] + e[i + 1] + 2) >> 2
            for (i = t + 1, o = r; o--; i += 2) e[i] += (e[i - 1] + e[i + 1]) >> 1
          }
        }
      }
    ]
    const t = {}
    function __w_pdfjs_require__(n) {
      const r = t[n]
      if (void 0 !== r) return r.exports
      const i = (t[n] = { exports: {} })
      e[n](i, i.exports, __w_pdfjs_require__)
      return i.exports
    }
    const n = {}
    ;(() => {
      const e = n
      Object.defineProperty(e, '__esModule', { value: !0 })
      Object.defineProperty(e, 'Jbig2Image', {
        enumerable: !0,
        get() {
          return r.Jbig2Image
        }
      })
      Object.defineProperty(e, 'JpegImage', {
        enumerable: !0,
        get() {
          return i.JpegImage
        }
      })
      Object.defineProperty(e, 'JpxImage', {
        enumerable: !0,
        get() {
          return o.JpxImage
        }
      })
      Object.defineProperty(e, 'getVerbosityLevel', {
        enumerable: !0,
        get() {
          return t.getVerbosityLevel
        }
      })
      Object.defineProperty(e, 'setVerbosityLevel', {
        enumerable: !0,
        get() {
          return t.setVerbosityLevel
        }
      })
      var t = __w_pdfjs_require__(1)
      var r = __w_pdfjs_require__(86)
      var i = __w_pdfjs_require__(92)
      var o = __w_pdfjs_require__(93)
    })()
    return n
  })()
)
