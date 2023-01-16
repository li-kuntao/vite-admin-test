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
!(function webpackUniversalModuleDefinition(t, e) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define('pdfjs-dist/build/pdf', [], e)
    : typeof exports === 'object'
    ? (exports['pdfjs-dist/build/pdf'] = e())
    : (t['pdfjs-dist/build/pdf'] = t.pdfjsLib = e())
})(globalThis, () =>
  (() => {
    const __webpack_modules__ = [
      ,
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.VerbosityLevel =
          e.Util =
          e.UnknownErrorException =
          e.UnexpectedResponseException =
          e.UNSUPPORTED_FEATURES =
          e.TextRenderingMode =
          e.StreamType =
          e.RenderingIntentFlag =
          e.PermissionFlag =
          e.PasswordResponses =
          e.PasswordException =
          e.PageActionEventType =
          e.OPS =
          e.MissingPDFException =
          e.LINE_FACTOR =
          e.LINE_DESCENT_FACTOR =
          e.InvalidPDFException =
          e.ImageKind =
          e.IDENTITY_MATRIX =
          e.FormatError =
          e.FontType =
          e.FeatureTest =
          e.FONT_IDENTITY_MATRIX =
          e.DocumentActionEventType =
          e.CMapCompressionType =
          e.BaseException =
          e.AnnotationType =
          e.AnnotationStateModelType =
          e.AnnotationReviewState =
          e.AnnotationReplyType =
          e.AnnotationMode =
          e.AnnotationMarkedState =
          e.AnnotationFlag =
          e.AnnotationFieldFlag =
          e.AnnotationEditorType =
          e.AnnotationEditorPrefix =
          e.AnnotationEditorParamsType =
          e.AnnotationBorderStyleType =
          e.AnnotationActionEventType =
          e.AbortException =
            void 0
        e.arrayByteLength = arrayByteLength
        e.arraysToBytes = function arraysToBytes(t) {
          const e = t.length
          if (e === 1 && t[0] instanceof Uint8Array) return t[0]
          let i = 0
          for (let r = 0; r < e; r++) i += arrayByteLength(t[r])
          let r = 0
          const s = new Uint8Array(i)
          for (let i = 0; i < e; i++) {
            let e = t[i]
            e instanceof Uint8Array ||
              (e = typeof e === 'string' ? stringToBytes(e) : new Uint8Array(e))
            const a = e.byteLength
            s.set(e, r)
            r += a
          }
          return s
        }
        e.assert = function assert(t, e) {
          t || unreachable(e)
        }
        e.bytesToString = function bytesToString(t) {
          ;(typeof t === 'object' && t !== null && void 0 !== t.length) ||
            unreachable('Invalid argument for bytesToString')
          const e = t.length
          const i = 8192
          if (e < i) return String.fromCharCode.apply(null, t)
          const r = []
          for (let s = 0; s < e; s += i) {
            const a = Math.min(s + i, e)
            const n = t.subarray(s, a)
            r.push(String.fromCharCode.apply(null, n))
          }
          return r.join('')
        }
        e.createPromiseCapability = function createPromiseCapability() {
          const t = Object.create(null)
          let e = !1
          Object.defineProperty(t, 'settled', { get: () => e })
          t.promise = new Promise(function (i, r) {
            t.resolve = function (t) {
              e = !0
              i(t)
            }
            t.reject = function (t) {
              e = !0
              r(t)
            }
          })
          return t
        }
        e.createValidAbsoluteUrl = function createValidAbsoluteUrl(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          if (!t) return null
          try {
            if (i && typeof t === 'string') {
              if (i.addDefaultProtocol && t.startsWith('www.')) {
                const e = t.match(/\./g)
                e && e.length >= 2 && (t = `http://${t}`)
              }
              if (i.tryConvertEncoding)
                try {
                  t = stringToUTF8String(t)
                } catch (t) {}
            }
            const r = e ? new URL(t, e) : new URL(t)
            if (_isValidProtocol(r)) return r
          } catch (t) {}
          return null
        }
        e.escapeString = function escapeString(t) {
          return t.replace(/([()\\\n\r])/g, (t) =>
            t === '\n' ? '\\n' : t === '\r' ? '\\r' : `\\${t}`
          )
        }
        e.getModificationDate = function getModificationDate() {
          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date()
          const e = [
            t.getUTCFullYear().toString(),
            (t.getUTCMonth() + 1).toString().padStart(2, '0'),
            t.getUTCDate().toString().padStart(2, '0'),
            t.getUTCHours().toString().padStart(2, '0'),
            t.getUTCMinutes().toString().padStart(2, '0'),
            t.getUTCSeconds().toString().padStart(2, '0')
          ]
          return e.join('')
        }
        e.getVerbosityLevel = function getVerbosityLevel() {
          return s
        }
        e.info = function info(t) {
          s >= r.INFOS && console.log(`Info: ${t}`)
        }
        e.isArrayBuffer = function isArrayBuffer(t) {
          return typeof t === 'object' && t !== null && void 0 !== t.byteLength
        }
        e.isArrayEqual = function isArrayEqual(t, e) {
          if (t.length !== e.length) return !1
          for (let i = 0, r = t.length; i < r; i++) if (t[i] !== e[i]) return !1
          return !0
        }
        e.isAscii = function isAscii(t) {
          return /^[\x00-\x7F]*$/.test(t)
        }
        e.isNum = function isNum(t) {
          return typeof t === 'number'
        }
        e.objectFromMap = function objectFromMap(t) {
          const e = Object.create(null)
          for (const [i, r] of t) e[i] = r
          return e
        }
        e.objectSize = function objectSize(t) {
          return Object.keys(t).length
        }
        e.setVerbosityLevel = function setVerbosityLevel(t) {
          Number.isInteger(t) && (s = t)
        }
        e.shadow = shadow
        e.string32 = function string32(t) {
          return String.fromCharCode((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, 255 & t)
        }
        e.stringToBytes = stringToBytes
        e.stringToPDFString = function stringToPDFString(t) {
          if (t[0] >= 'ï') {
            let e
            t[0] === 'þ' && t[1] === 'ÿ'
              ? (e = 'utf-16be')
              : t[0] === 'ÿ' && t[1] === 'þ'
              ? (e = 'utf-16le')
              : t[0] === 'ï' && t[1] === '»' && t[2] === '¿' && (e = 'utf-8')
            if (e)
              try {
                const i = new TextDecoder(e, { fatal: !0 })
                const r = stringToBytes(t)
                return i.decode(r)
              } catch (t) {
                warn(`stringToPDFString: "${t}".`)
              }
          }
          const e = []
          for (let i = 0, r = t.length; i < r; i++) {
            const r = o[t.charCodeAt(i)]
            e.push(r ? String.fromCharCode(r) : t.charAt(i))
          }
          return e.join('')
        }
        e.stringToUTF16BEString = function stringToUTF16BEString(t) {
          const e = ['þÿ']
          for (let i = 0, r = t.length; i < r; i++) {
            const r = t.charCodeAt(i)
            e.push(String.fromCharCode((r >> 8) & 255), String.fromCharCode(255 & r))
          }
          return e.join('')
        }
        e.stringToUTF8String = stringToUTF8String
        e.unreachable = unreachable
        e.utf8StringToString = function utf8StringToString(t) {
          return unescape(encodeURIComponent(t))
        }
        e.warn = warn
        i(2)
        e.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0]
        e.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0]
        e.LINE_FACTOR = 1.35
        e.LINE_DESCENT_FACTOR = 0.35
        e.RenderingIntentFlag = {
          ANY: 1,
          DISPLAY: 2,
          PRINT: 4,
          ANNOTATIONS_FORMS: 16,
          ANNOTATIONS_STORAGE: 32,
          ANNOTATIONS_DISABLE: 64,
          OPLIST: 256
        }
        e.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }
        e.AnnotationEditorPrefix = 'pdfjs_internal_editor_'
        e.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, INK: 15 }
        e.AnnotationEditorParamsType = {
          FREETEXT_SIZE: 1,
          FREETEXT_COLOR: 2,
          FREETEXT_OPACITY: 3,
          INK_COLOR: 11,
          INK_THICKNESS: 12,
          INK_OPACITY: 13
        }
        e.PermissionFlag = {
          PRINT: 4,
          MODIFY_CONTENTS: 8,
          COPY: 16,
          MODIFY_ANNOTATIONS: 32,
          FILL_INTERACTIVE_FORMS: 256,
          COPY_FOR_ACCESSIBILITY: 512,
          ASSEMBLE: 1024,
          PRINT_HIGH_QUALITY: 2048
        }
        e.TextRenderingMode = {
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
        e.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }
        e.AnnotationType = {
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
        e.AnnotationStateModelType = { MARKED: 'Marked', REVIEW: 'Review' }
        e.AnnotationMarkedState = { MARKED: 'Marked', UNMARKED: 'Unmarked' }
        e.AnnotationReviewState = {
          ACCEPTED: 'Accepted',
          REJECTED: 'Rejected',
          CANCELLED: 'Cancelled',
          COMPLETED: 'Completed',
          NONE: 'None'
        }
        e.AnnotationReplyType = { GROUP: 'Group', REPLY: 'R' }
        e.AnnotationFlag = {
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
        e.AnnotationFieldFlag = {
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
        e.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }
        e.AnnotationActionEventType = {
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
        e.DocumentActionEventType = {
          WC: 'WillClose',
          WS: 'WillSave',
          DS: 'DidSave',
          WP: 'WillPrint',
          DP: 'DidPrint'
        }
        e.PageActionEventType = { O: 'PageOpen', C: 'PageClose' }
        e.StreamType = {
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
        e.FontType = {
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
        e.VerbosityLevel = r
        e.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 }
        e.OPS = {
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
        e.UNSUPPORTED_FEATURES = {
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
        e.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 }
        let s = r.WARNINGS
        function warn(t) {
          s >= r.WARNINGS && console.log(`Warning: ${t}`)
        }
        function unreachable(t) {
          throw new Error(t)
        }
        function _isValidProtocol(t) {
          if (!t) return !1
          switch (t.protocol) {
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
        function shadow(t, e, i) {
          Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !1
          })
          return i
        }
        const a = (function BaseExceptionClosure() {
          function BaseException(t, e) {
            this.constructor === BaseException && unreachable('Cannot initialize BaseException.')
            this.message = t
            this.name = e
          }
          BaseException.prototype = new Error()
          BaseException.constructor = BaseException
          return BaseException
        })()
        e.BaseException = a
        e.PasswordException = class PasswordException extends a {
          constructor(t, e) {
            super(t, 'PasswordException')
            this.code = e
          }
        }
        e.UnknownErrorException = class UnknownErrorException extends a {
          constructor(t, e) {
            super(t, 'UnknownErrorException')
            this.details = e
          }
        }
        e.InvalidPDFException = class InvalidPDFException extends a {
          constructor(t) {
            super(t, 'InvalidPDFException')
          }
        }
        e.MissingPDFException = class MissingPDFException extends a {
          constructor(t) {
            super(t, 'MissingPDFException')
          }
        }
        e.UnexpectedResponseException = class UnexpectedResponseException extends a {
          constructor(t, e) {
            super(t, 'UnexpectedResponseException')
            this.status = e
          }
        }
        e.FormatError = class FormatError extends a {
          constructor(t) {
            super(t, 'FormatError')
          }
        }
        e.AbortException = class AbortException extends a {
          constructor(t) {
            super(t, 'AbortException')
          }
        }
        function stringToBytes(t) {
          typeof t !== 'string' && unreachable('Invalid argument for stringToBytes')
          const e = t.length
          const i = new Uint8Array(e)
          for (let r = 0; r < e; ++r) i[r] = 255 & t.charCodeAt(r)
          return i
        }
        function arrayByteLength(t) {
          if (void 0 !== t.length) return t.length
          if (void 0 !== t.byteLength) return t.byteLength
          unreachable('Invalid argument for arrayByteLength')
        }
        e.FeatureTest = class FeatureTest {
          static get isLittleEndian() {
            return shadow(
              this,
              'isLittleEndian',
              (function isLittleEndian() {
                const t = new Uint8Array(4)
                t[0] = 1
                return new Uint32Array(t.buffer, 0, 1)[0] === 1
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
                } catch (t) {
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
        const n = [...Array(256).keys()].map((t) => t.toString(16).padStart(2, '0'))
        class Util {
          static makeHexColor(t, e, i) {
            return `#${n[t]}${n[e]}${n[i]}`
          }

          static scaleMinMax(t, e) {
            let i
            if (t[0]) {
              if (t[0] < 0) {
                i = e[0]
                e[0] = e[1]
                e[1] = i
              }
              e[0] *= t[0]
              e[1] *= t[0]
              if (t[3] < 0) {
                i = e[2]
                e[2] = e[3]
                e[3] = i
              }
              e[2] *= t[3]
              e[3] *= t[3]
            } else {
              i = e[0]
              e[0] = e[2]
              e[2] = i
              i = e[1]
              e[1] = e[3]
              e[3] = i
              if (t[1] < 0) {
                i = e[2]
                e[2] = e[3]
                e[3] = i
              }
              e[2] *= t[1]
              e[3] *= t[1]
              if (t[2] < 0) {
                i = e[0]
                e[0] = e[1]
                e[1] = i
              }
              e[0] *= t[2]
              e[1] *= t[2]
            }
            e[0] += t[4]
            e[1] += t[4]
            e[2] += t[5]
            e[3] += t[5]
          }

          static transform(t, e) {
            return [
              t[0] * e[0] + t[2] * e[1],
              t[1] * e[0] + t[3] * e[1],
              t[0] * e[2] + t[2] * e[3],
              t[1] * e[2] + t[3] * e[3],
              t[0] * e[4] + t[2] * e[5] + t[4],
              t[1] * e[4] + t[3] * e[5] + t[5]
            ]
          }

          static applyTransform(t, e) {
            return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]]
          }

          static applyInverseTransform(t, e) {
            const i = e[0] * e[3] - e[1] * e[2]
            return [
              (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i,
              (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i
            ]
          }

          static getAxialAlignedBoundingBox(t, e) {
            const i = Util.applyTransform(t, e)
            const r = Util.applyTransform(t.slice(2, 4), e)
            const s = Util.applyTransform([t[0], t[3]], e)
            const a = Util.applyTransform([t[2], t[1]], e)
            return [
              Math.min(i[0], r[0], s[0], a[0]),
              Math.min(i[1], r[1], s[1], a[1]),
              Math.max(i[0], r[0], s[0], a[0]),
              Math.max(i[1], r[1], s[1], a[1])
            ]
          }

          static inverseTransform(t) {
            const e = t[0] * t[3] - t[1] * t[2]
            return [
              t[3] / e,
              -t[1] / e,
              -t[2] / e,
              t[0] / e,
              (t[2] * t[5] - t[4] * t[3]) / e,
              (t[4] * t[1] - t[5] * t[0]) / e
            ]
          }

          static apply3dTransform(t, e) {
            return [
              t[0] * e[0] + t[1] * e[1] + t[2] * e[2],
              t[3] * e[0] + t[4] * e[1] + t[5] * e[2],
              t[6] * e[0] + t[7] * e[1] + t[8] * e[2]
            ]
          }

          static singularValueDecompose2dScale(t) {
            const e = [t[0], t[2], t[1], t[3]]
            const i = t[0] * e[0] + t[1] * e[2]
            const r = t[0] * e[1] + t[1] * e[3]
            const s = t[2] * e[0] + t[3] * e[2]
            const a = t[2] * e[1] + t[3] * e[3]
            const n = (i + a) / 2
            const o = Math.sqrt((i + a) ** 2 - 4 * (i * a - s * r)) / 2
            const l = n + o || 1
            const c = n - o || 1
            return [Math.sqrt(l), Math.sqrt(c)]
          }

          static normalizeRect(t) {
            const e = t.slice(0)
            if (t[0] > t[2]) {
              e[0] = t[2]
              e[2] = t[0]
            }
            if (t[1] > t[3]) {
              e[1] = t[3]
              e[3] = t[1]
            }
            return e
          }

          static intersect(t, e) {
            const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2]))
            const r = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]))
            if (i > r) return null
            const s = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3]))
            const a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]))
            return s > a ? null : [i, s, r, a]
          }

          static bezierBoundingBox(t, e, i, r, s, a, n, o) {
            const l = []
            const c = [[], []]
            let d
            let h
            let u
            let p
            let f
            let g
            let m
            let v
            for (let c = 0; c < 2; ++c) {
              if (c === 0) {
                h = 6 * t - 12 * i + 6 * s
                d = -3 * t + 9 * i - 9 * s + 3 * n
                u = 3 * i - 3 * t
              } else {
                h = 6 * e - 12 * r + 6 * a
                d = -3 * e + 9 * r - 9 * a + 3 * o
                u = 3 * r - 3 * e
              }
              if (Math.abs(d) < 1e-12) {
                if (Math.abs(h) < 1e-12) continue
                p = -u / h
                p > 0 && p < 1 && l.push(p)
              } else {
                m = h * h - 4 * u * d
                v = Math.sqrt(m)
                if (!(m < 0)) {
                  f = (-h + v) / (2 * d)
                  f > 0 && f < 1 && l.push(f)
                  g = (-h - v) / (2 * d)
                  g > 0 && g < 1 && l.push(g)
                }
              }
            }
            let _
            let b = l.length
            const y = b
            for (; b--; ) {
              p = l[b]
              _ = 1 - p
              c[0][b] = _ * _ * _ * t + 3 * _ * _ * p * i + 3 * _ * p * p * s + p * p * p * n
              c[1][b] = _ * _ * _ * e + 3 * _ * _ * p * r + 3 * _ * p * p * a + p * p * p * o
            }
            c[0][y] = t
            c[1][y] = e
            c[0][y + 1] = n
            c[1][y + 1] = o
            c[0].length = c[1].length = y + 2
            return [Math.min(...c[0]), Math.min(...c[1]), Math.max(...c[0]), Math.max(...c[1])]
          }
        }
        e.Util = Util
        const o = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710,
          729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260,
          8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338,
          352, 376, 381, 305, 322, 339, 353, 382, 0, 8364
        ]
        function stringToUTF8String(t) {
          return decodeURIComponent(escape(t))
        }
      },
      (t, e, i) => {
        const r = i(3)
        if (!globalThis._pdfjsCompatibilityChecked) {
          globalThis._pdfjsCompatibilityChecked = !0
          !(function checkNodeBtoa() {
            !globalThis.btoa &&
              r.isNodeJS &&
              (globalThis.btoa = function (t) {
                return Buffer.from(t, 'binary').toString('base64')
              })
          })()
          !(function checkNodeAtob() {
            !globalThis.atob &&
              r.isNodeJS &&
              (globalThis.atob = function (t) {
                return Buffer.from(t, 'base64').toString('binary')
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
            Array.prototype.at || i(4)
          })()
          !(function checkTypedArrayAt() {
            Uint8Array.prototype.at || i(76)
          })()
          !(function checkStructuredClone() {
            globalThis.structuredClone || i(86)
          })()
        }
      },
      (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.isNodeJS = void 0
        const i = !(
          typeof process !== 'object' ||
          `${process}` != '[object process]' ||
          process.versions.nw ||
          (process.versions.electron && process.type && process.type !== 'browser')
        )
        e.isNodeJS = i
      },
      (t, e, i) => {
        i(5)
        const r = i(75)
        t.exports = r('Array', 'at')
      },
      (t, e, i) => {
        const r = i(6)
        const s = i(41)
        const a = i(65)
        const n = i(63)
        const o = i(70)
        r(
          { target: 'Array', proto: !0 },
          {
            at: function at(t) {
              const e = s(this)
              const i = a(e)
              const r = n(t)
              const o = r >= 0 ? r : i + r
              return o < 0 || o >= i ? void 0 : e[o]
            }
          }
        )
        o('at')
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(8).f
        const a = i(45)
        const n = i(49)
        const o = i(39)
        const l = i(57)
        const c = i(69)
        t.exports = function (t, e) {
          let i
          let d
          let h
          let u
          let p
          const f = t.target
          const g = t.global
          const m = t.stat
          if ((i = g ? r : m ? r[f] || o(f, {}) : (r[f] || {}).prototype))
            for (d in e) {
              u = e[d]
              h = t.dontCallGetSet ? (p = s(i, d)) && p.value : i[d]
              if (!c(g ? d : f + (m ? '.' : '#') + d, t.forced) && void 0 !== h) {
                if (typeof u === typeof h) continue
                l(u, h)
              }
              ;(t.sham || (h && h.sham)) && a(u, 'sham', !0)
              n(i, d, u, t)
            }
        }
      },
      (t) => {
        const check = function (t) {
          return t && t.Math == Math && t
        }
        t.exports =
          check(typeof globalThis === 'object' && globalThis) ||
          check(typeof window === 'object' && window) ||
          check(typeof self === 'object' && self) ||
          check(typeof global === 'object' && global) ||
          (function () {
            return this
          })() ||
          Function('return this')()
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(11)
        const a = i(13)
        const n = i(14)
        const o = i(15)
        const l = i(20)
        const c = i(40)
        const d = i(43)
        const h = Object.getOwnPropertyDescriptor
        e.f = r
          ? h
          : function getOwnPropertyDescriptor(t, e) {
              t = o(t)
              e = l(e)
              if (d)
                try {
                  return h(t, e)
                } catch (t) {}
              if (c(t, e)) return n(!s(a.f, t, e), t[e])
            }
      },
      (t, e, i) => {
        const r = i(10)
        t.exports = !r(function () {
          return (
            Object.defineProperty({}, 1, {
              get() {
                return 7
              }
            })[1] != 7
          )
        })
      },
      (t) => {
        t.exports = function (t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        }
      },
      (t, e, i) => {
        const r = i(12)
        const s = Function.prototype.call
        t.exports = r
          ? s.bind(s)
          : function () {
              return s.apply(s, arguments)
            }
      },
      (t, e, i) => {
        const r = i(10)
        t.exports = !r(function () {
          const t = function () {}.bind()
          return typeof t !== 'function' || t.hasOwnProperty('prototype')
        })
      },
      (t, e) => {
        const i = {}.propertyIsEnumerable
        const r = Object.getOwnPropertyDescriptor
        const s = r && !i.call({ 1: 2 }, 1)
        e.f = s
          ? function propertyIsEnumerable(t) {
              const e = r(this, t)
              return !!e && e.enumerable
            }
          : i
      },
      (t) => {
        t.exports = function (t, e) {
          return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
        }
      },
      (t, e, i) => {
        const r = i(16)
        const s = i(19)
        t.exports = function (t) {
          return r(s(t))
        }
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(10)
        const a = i(18)
        const n = Object
        const o = r(''.split)
        t.exports = s(function () {
          return !n('z').propertyIsEnumerable(0)
        })
          ? function (t) {
              return a(t) == 'String' ? o(t, '') : n(t)
            }
          : n
      },
      (t, e, i) => {
        const r = i(12)
        const s = Function.prototype
        const a = s.bind
        const n = s.call
        const o = r && a.bind(n, n)
        t.exports = r
          ? function (t) {
              return t && o(t)
            }
          : function (t) {
              return (
                t &&
                function () {
                  return n.apply(t, arguments)
                }
              )
            }
      },
      (t, e, i) => {
        const r = i(17)
        const s = r({}.toString)
        const a = r(''.slice)
        t.exports = function (t) {
          return a(s(t), 8, -1)
        }
      },
      (t) => {
        const e = TypeError
        t.exports = function (t) {
          if (t == null) throw e(`Can't call method on ${t}`)
          return t
        }
      },
      (t, e, i) => {
        const r = i(21)
        const s = i(24)
        t.exports = function (t) {
          const e = r(t, 'string')
          return s(e) ? e : `${e}`
        }
      },
      (t, e, i) => {
        const r = i(11)
        const s = i(22)
        const a = i(24)
        const n = i(31)
        const o = i(34)
        const l = i(35)
        const c = TypeError
        const d = l('toPrimitive')
        t.exports = function (t, e) {
          if (!s(t) || a(t)) return t
          let i
          const l = n(t, d)
          if (l) {
            void 0 === e && (e = 'default')
            i = r(l, t, e)
            if (!s(i) || a(i)) return i
            throw c("Can't convert object to primitive value")
          }
          void 0 === e && (e = 'number')
          return o(t, e)
        }
      },
      (t, e, i) => {
        const r = i(23)
        t.exports = function (t) {
          return typeof t === 'object' ? t !== null : r(t)
        }
      },
      (t) => {
        t.exports = function (t) {
          return typeof t === 'function'
        }
      },
      (t, e, i) => {
        const r = i(25)
        const s = i(23)
        const a = i(26)
        const n = i(27)
        const o = Object
        t.exports = n
          ? function (t) {
              return typeof t === 'symbol'
            }
          : function (t) {
              const e = r('Symbol')
              return s(e) && a(e.prototype, o(t))
            }
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(23)
        const aFunction = function (t) {
          return s(t) ? t : void 0
        }
        t.exports = function (t, e) {
          return arguments.length < 2 ? aFunction(r[t]) : r[t] && r[t][e]
        }
      },
      (t, e, i) => {
        const r = i(17)
        t.exports = r({}.isPrototypeOf)
      },
      (t, e, i) => {
        const r = i(28)
        t.exports = r && !Symbol.sham && typeof Symbol.iterator === 'symbol'
      },
      (t, e, i) => {
        const r = i(29)
        const s = i(10)
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !s(function () {
            const t = Symbol()
            return !String(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41)
          })
      },
      (t, e, i) => {
        let r
        let s
        const a = i(7)
        const n = i(30)
        const o = a.process
        const l = a.Deno
        const c = (o && o.versions) || (l && l.version)
        const d = c && c.v8
        d && (s = (r = d.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1]))
        !s &&
          n &&
          (!(r = n.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = n.match(/Chrome\/(\d+)/)) &&
          (s = +r[1])
        t.exports = s
      },
      (t, e, i) => {
        const r = i(25)
        t.exports = r('navigator', 'userAgent') || ''
      },
      (t, e, i) => {
        const r = i(32)
        t.exports = function (t, e) {
          const i = t[e]
          return i == null ? void 0 : r(i)
        }
      },
      (t, e, i) => {
        const r = i(23)
        const s = i(33)
        const a = TypeError
        t.exports = function (t) {
          if (r(t)) return t
          throw a(`${s(t)} is not a function`)
        }
      },
      (t) => {
        const e = String
        t.exports = function (t) {
          try {
            return e(t)
          } catch (t) {
            return 'Object'
          }
        }
      },
      (t, e, i) => {
        const r = i(11)
        const s = i(23)
        const a = i(22)
        const n = TypeError
        t.exports = function (t, e) {
          let i
          let o
          if (e === 'string' && s((i = t.toString)) && !a((o = r(i, t)))) return o
          if (s((i = t.valueOf)) && !a((o = r(i, t)))) return o
          if (e !== 'string' && s((i = t.toString)) && !a((o = r(i, t)))) return o
          throw n("Can't convert object to primitive value")
        }
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(36)
        const a = i(40)
        const n = i(42)
        const o = i(28)
        const l = i(27)
        const c = s('wks')
        const d = r.Symbol
        const h = d && d.for
        const u = l ? d : (d && d.withoutSetter) || n
        t.exports = function (t) {
          if (!a(c, t) || (!o && typeof c[t] !== 'string')) {
            const e = `Symbol.${t}`
            o && a(d, t) ? (c[t] = d[t]) : (c[t] = l && h ? h(e) : u(e))
          }
          return c[t]
        }
      },
      (t, e, i) => {
        const r = i(37)
        const s = i(38)
        ;(t.exports = function (t, e) {
          return s[t] || (s[t] = void 0 !== e ? e : {})
        })('versions', []).push({
          version: '3.24.1',
          mode: r ? 'pure' : 'global',
          copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
          license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
          source: 'https://github.com/zloirock/core-js'
        })
      },
      (t) => {
        t.exports = !1
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(39)
        const a = '__core-js_shared__'
        const n = r[a] || s(a, {})
        t.exports = n
      },
      (t, e, i) => {
        const r = i(7)
        const s = Object.defineProperty
        t.exports = function (t, e) {
          try {
            s(r, t, { value: e, configurable: !0, writable: !0 })
          } catch (i) {
            r[t] = e
          }
          return e
        }
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(41)
        const a = r({}.hasOwnProperty)
        t.exports =
          Object.hasOwn ||
          function hasOwn(t, e) {
            return a(s(t), e)
          }
      },
      (t, e, i) => {
        const r = i(19)
        const s = Object
        t.exports = function (t) {
          return s(r(t))
        }
      },
      (t, e, i) => {
        const r = i(17)
        let s = 0
        const a = Math.random()
        const n = r((1).toString)
        t.exports = function (t) {
          return `Symbol(${void 0 === t ? '' : t})_${n(++s + a, 36)}`
        }
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(10)
        const a = i(44)
        t.exports =
          !r &&
          !s(function () {
            return (
              Object.defineProperty(a('div'), 'a', {
                get() {
                  return 7
                }
              }).a != 7
            )
          })
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(22)
        const a = r.document
        const n = s(a) && s(a.createElement)
        t.exports = function (t) {
          return n ? a.createElement(t) : {}
        }
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(46)
        const a = i(14)
        t.exports = r
          ? function (t, e, i) {
              return s.f(t, e, a(1, i))
            }
          : function (t, e, i) {
              t[e] = i
              return t
            }
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(43)
        const a = i(47)
        const n = i(48)
        const o = i(20)
        const l = TypeError
        const c = Object.defineProperty
        const d = Object.getOwnPropertyDescriptor
        const h = 'enumerable'
        const u = 'configurable'
        const p = 'writable'
        e.f = r
          ? a
            ? function defineProperty(t, e, i) {
                n(t)
                e = o(e)
                n(i)
                if (
                  typeof t === 'function' &&
                  e === 'prototype' &&
                  'value' in i &&
                  p in i &&
                  !i.writable
                ) {
                  const r = d(t, e)
                  if (r && r.writable) {
                    t[e] = i.value
                    i = {
                      configurable: u in i ? i.configurable : r.configurable,
                      enumerable: h in i ? i.enumerable : r.enumerable,
                      writable: !1
                    }
                  }
                }
                return c(t, e, i)
              }
            : c
          : function defineProperty(t, e, i) {
              n(t)
              e = o(e)
              n(i)
              if (s)
                try {
                  return c(t, e, i)
                } catch (t) {}
              if ('get' in i || 'set' in i) throw l('Accessors not supported')
              'value' in i && (t[e] = i.value)
              return t
            }
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(10)
        t.exports =
          r &&
          s(function () {
            return (
              Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 })
                .prototype != 42
            )
          })
      },
      (t, e, i) => {
        const r = i(22)
        const s = String
        const a = TypeError
        t.exports = function (t) {
          if (r(t)) return t
          throw a(`${s(t)} is not an object`)
        }
      },
      (t, e, i) => {
        const r = i(23)
        const s = i(46)
        const a = i(50)
        const n = i(39)
        t.exports = function (t, e, i, o) {
          o || (o = {})
          let l = o.enumerable
          const c = void 0 !== o.name ? o.name : e
          r(i) && a(i, c, o)
          if (o.global) l ? (t[e] = i) : n(e, i)
          else {
            try {
              o.unsafe ? t[e] && (l = !0) : delete t[e]
            } catch (t) {}
            l
              ? (t[e] = i)
              : s.f(t, e, {
                  value: i,
                  enumerable: !1,
                  configurable: !o.nonConfigurable,
                  writable: !o.nonWritable
                })
          }
          return t
        }
      },
      (t, e, i) => {
        const r = i(10)
        const s = i(23)
        const a = i(40)
        const n = i(9)
        const o = i(51).CONFIGURABLE
        const l = i(52)
        const c = i(53)
        const d = c.enforce
        const h = c.get
        const u = Object.defineProperty
        const p =
          n &&
          !r(function () {
            return u(function () {}, 'length', { value: 8 }).length !== 8
          })
        const f = String(String).split('String')
        const g = (t.exports = function (t, e, i) {
          String(e).slice(0, 7) === 'Symbol(' &&
            (e = `[${String(e).replace(/^Symbol\(([^)]*)\)/, '$1')}]`)
          i && i.getter && (e = `get ${e}`)
          i && i.setter && (e = `set ${e}`)
          ;(!a(t, 'name') || (o && t.name !== e)) &&
            (n ? u(t, 'name', { value: e, configurable: !0 }) : (t.name = e))
          p && i && a(i, 'arity') && t.length !== i.arity && u(t, 'length', { value: i.arity })
          try {
            i && a(i, 'constructor') && i.constructor
              ? n && u(t, 'prototype', { writable: !1 })
              : t.prototype && (t.prototype = void 0)
          } catch (t) {}
          const r = d(t)
          a(r, 'source') || (r.source = f.join(typeof e === 'string' ? e : ''))
          return t
        })
        Function.prototype.toString = g(function toString() {
          return (s(this) && h(this).source) || l(this)
        }, 'toString')
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(40)
        const a = Function.prototype
        const n = r && Object.getOwnPropertyDescriptor
        const o = s(a, 'name')
        const l = o && function something() {}.name === 'something'
        const c = o && (!r || (r && n(a, 'name').configurable))
        t.exports = { EXISTS: o, PROPER: l, CONFIGURABLE: c }
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(23)
        const a = i(38)
        const n = r(Function.toString)
        s(a.inspectSource) ||
          (a.inspectSource = function (t) {
            return n(t)
          })
        t.exports = a.inspectSource
      },
      (t, e, i) => {
        let r
        let s
        let a
        const n = i(54)
        const o = i(7)
        const l = i(17)
        const c = i(22)
        const d = i(45)
        const h = i(40)
        const u = i(38)
        const p = i(55)
        const f = i(56)
        const g = 'Object already initialized'
        const m = o.TypeError
        const v = o.WeakMap
        if (n || u.state) {
          const _ = u.state || (u.state = new v())
          const b = l(_.get)
          const y = l(_.has)
          const A = l(_.set)
          r = function (t, e) {
            if (y(_, t)) throw new m(g)
            e.facade = t
            A(_, t, e)
            return e
          }
          s = function (t) {
            return b(_, t) || {}
          }
          a = function (t) {
            return y(_, t)
          }
        } else {
          const S = p('state')
          f[S] = !0
          r = function (t, e) {
            if (h(t, S)) throw new m(g)
            e.facade = t
            d(t, S, e)
            return e
          }
          s = function (t) {
            return h(t, S) ? t[S] : {}
          }
          a = function (t) {
            return h(t, S)
          }
        }
        t.exports = {
          set: r,
          get: s,
          has: a,
          enforce(t) {
            return a(t) ? s(t) : r(t, {})
          },
          getterFor(t) {
            return function (e) {
              let i
              if (!c(e) || (i = s(e)).type !== t) throw m(`Incompatible receiver, ${t} required`)
              return i
            }
          }
        }
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(23)
        const a = i(52)
        const n = r.WeakMap
        t.exports = s(n) && /native code/.test(a(n))
      },
      (t, e, i) => {
        const r = i(36)
        const s = i(42)
        const a = r('keys')
        t.exports = function (t) {
          return a[t] || (a[t] = s(t))
        }
      },
      (t) => {
        t.exports = {}
      },
      (t, e, i) => {
        const r = i(40)
        const s = i(58)
        const a = i(8)
        const n = i(46)
        t.exports = function (t, e, i) {
          for (let o = s(e), l = n.f, c = a.f, d = 0; d < o.length; d++) {
            const h = o[d]
            r(t, h) || (i && r(i, h)) || l(t, h, c(e, h))
          }
        }
      },
      (t, e, i) => {
        const r = i(25)
        const s = i(17)
        const a = i(59)
        const n = i(68)
        const o = i(48)
        const l = s([].concat)
        t.exports =
          r('Reflect', 'ownKeys') ||
          function ownKeys(t) {
            const e = a.f(o(t))
            const i = n.f
            return i ? l(e, i(t)) : e
          }
      },
      (t, e, i) => {
        const r = i(60)
        const s = i(67).concat('length', 'prototype')
        e.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(t) {
            return r(t, s)
          }
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(40)
        const a = i(15)
        const n = i(61).indexOf
        const o = i(56)
        const l = r([].push)
        t.exports = function (t, e) {
          let i
          const r = a(t)
          let c = 0
          const d = []
          for (i in r) !s(o, i) && s(r, i) && l(d, i)
          for (; e.length > c; ) s(r, (i = e[c++])) && (~n(d, i) || l(d, i))
          return d
        }
      },
      (t, e, i) => {
        const r = i(15)
        const s = i(62)
        const a = i(65)
        const createMethod = function (t) {
          return function (e, i, n) {
            let o
            const l = r(e)
            const c = a(l)
            let d = s(n, c)
            if (t && i != i) {
              for (; c > d; ) if ((o = l[d++]) != o) return !0
            } else for (; c > d; d++) if ((t || d in l) && l[d] === i) return t || d || 0
            return !t && -1
          }
        }
        t.exports = { includes: createMethod(!0), indexOf: createMethod(!1) }
      },
      (t, e, i) => {
        const r = i(63)
        const s = Math.max
        const a = Math.min
        t.exports = function (t, e) {
          const i = r(t)
          return i < 0 ? s(i + e, 0) : a(i, e)
        }
      },
      (t, e, i) => {
        const r = i(64)
        t.exports = function (t) {
          const e = +t
          return e != e || e === 0 ? 0 : r(e)
        }
      },
      (t) => {
        const e = Math.ceil
        const i = Math.floor
        t.exports =
          Math.trunc ||
          function trunc(t) {
            const r = +t
            return (r > 0 ? i : e)(r)
          }
      },
      (t, e, i) => {
        const r = i(66)
        t.exports = function (t) {
          return r(t.length)
        }
      },
      (t, e, i) => {
        const r = i(63)
        const s = Math.min
        t.exports = function (t) {
          return t > 0 ? s(r(t), 9007199254740991) : 0
        }
      },
      (t) => {
        t.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf'
        ]
      },
      (t, e) => {
        e.f = Object.getOwnPropertySymbols
      },
      (t, e, i) => {
        const r = i(10)
        const s = i(23)
        const a = /#|\.prototype\./
        const isForced = function (t, e) {
          const i = o[n(t)]
          return i == c || (i != l && (s(e) ? r(e) : !!e))
        }
        var n = (isForced.normalize = function (t) {
          return String(t).replace(a, '.').toLowerCase()
        })
        var o = (isForced.data = {})
        var l = (isForced.NATIVE = 'N')
        var c = (isForced.POLYFILL = 'P')
        t.exports = isForced
      },
      (t, e, i) => {
        const r = i(35)
        const s = i(71)
        const a = i(46).f
        const n = r('unscopables')
        const o = Array.prototype
        o[n] == null && a(o, n, { configurable: !0, value: s(null) })
        t.exports = function (t) {
          o[n][t] = !0
        }
      },
      (t, e, i) => {
        let r
        const s = i(48)
        const a = i(72)
        const n = i(67)
        const o = i(56)
        const l = i(74)
        const c = i(44)
        const d = i(55)
        const h = d('IE_PROTO')
        const EmptyConstructor = function () {}
        const scriptTag = function (t) {
          return `<script>${t}</` + `script>`
        }
        const NullProtoObjectViaActiveX = function (t) {
          t.write(scriptTag(''))
          t.close()
          const e = t.parentWindow.Object
          t = null
          return e
        }
        var NullProtoObject = function () {
          try {
            r = new ActiveXObject('htmlfile')
          } catch (t) {}
          NullProtoObject =
            typeof document !== 'undefined'
              ? document.domain && r
                ? NullProtoObjectViaActiveX(r)
                : (function () {
                    let t
                    const e = c('iframe')
                    e.style.display = 'none'
                    l.appendChild(e)
                    e.src = String('javascript:')
                    ;(t = e.contentWindow.document).open()
                    t.write(scriptTag('document.F=Object'))
                    t.close()
                    return t.F
                  })()
              : NullProtoObjectViaActiveX(r)
          for (let t = n.length; t--; ) delete NullProtoObject.prototype[n[t]]
          return NullProtoObject()
        }
        o[h] = !0
        t.exports =
          Object.create ||
          function create(t, e) {
            let i
            if (t !== null) {
              EmptyConstructor.prototype = s(t)
              i = new EmptyConstructor()
              EmptyConstructor.prototype = null
              i[h] = t
            } else i = NullProtoObject()
            return void 0 === e ? i : a.f(i, e)
          }
      },
      (t, e, i) => {
        const r = i(9)
        const s = i(47)
        const a = i(46)
        const n = i(48)
        const o = i(15)
        const l = i(73)
        e.f =
          r && !s
            ? Object.defineProperties
            : function defineProperties(t, e) {
                n(t)
                for (var i, r = o(e), s = l(e), c = s.length, d = 0; c > d; )
                  a.f(t, (i = s[d++]), r[i])
                return t
              }
      },
      (t, e, i) => {
        const r = i(60)
        const s = i(67)
        t.exports =
          Object.keys ||
          function keys(t) {
            return r(t, s)
          }
      },
      (t, e, i) => {
        const r = i(25)
        t.exports = r('document', 'documentElement')
      },
      (t, e, i) => {
        const r = i(7)
        const s = i(17)
        t.exports = function (t, e) {
          return s(r[t].prototype[e])
        }
      },
      (t, e, i) => {
        i(77)
      },
      (t, e, i) => {
        const r = i(78)
        const s = i(65)
        const a = i(63)
        const n = r.aTypedArray
        ;(0, r.exportTypedArrayMethod)('at', function at(t) {
          const e = n(this)
          const i = s(e)
          const r = a(t)
          const o = r >= 0 ? r : i + r
          return o < 0 || o >= i ? void 0 : e[o]
        })
      },
      (t, e, i) => {
        let r
        let s
        let a
        const n = i(79)
        const o = i(9)
        const l = i(7)
        const c = i(23)
        const d = i(22)
        const h = i(40)
        const u = i(80)
        const p = i(33)
        const f = i(45)
        const g = i(49)
        const m = i(46).f
        const v = i(26)
        const _ = i(82)
        const b = i(84)
        const y = i(35)
        const A = i(42)
        const S = i(53)
        const P = S.enforce
        const x = S.get
        const w = l.Int8Array
        const E = w && w.prototype
        const C = l.Uint8ClampedArray
        const k = C && C.prototype
        let T = w && _(w)
        let M = E && _(E)
        const R = Object.prototype
        const I = l.TypeError
        const D = y('toStringTag')
        const O = A('TYPED_ARRAY_TAG')
        const L = 'TypedArrayConstructor'
        let G = n && !!b && u(l.opera) !== 'Opera'
        let N = !1
        const j = {
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
        const B = { BigInt64Array: 8, BigUint64Array: 8 }
        var getTypedArrayConstructor = function (t) {
          const e = _(t)
          if (d(e)) {
            const i = x(e)
            return i && h(i, L) ? i.TypedArrayConstructor : getTypedArrayConstructor(e)
          }
        }
        const isTypedArray = function (t) {
          if (!d(t)) return !1
          const e = u(t)
          return h(j, e) || h(B, e)
        }
        for (r in j) (a = (s = l[r]) && s.prototype) ? (P(a).TypedArrayConstructor = s) : (G = !1)
        for (r in B) (a = (s = l[r]) && s.prototype) && (P(a).TypedArrayConstructor = s)
        if (!G || !c(T) || T === Function.prototype) {
          T = function TypedArray() {
            throw I('Incorrect invocation')
          }
          if (G) for (r in j) l[r] && b(l[r], T)
        }
        if (!G || !M || M === R) {
          M = T.prototype
          if (G) for (r in j) l[r] && b(l[r].prototype, M)
        }
        G && _(k) !== M && b(k, M)
        if (o && !h(M, D)) {
          N = !0
          m(M, D, {
            get() {
              return d(this) ? this[O] : void 0
            }
          })
          for (r in j) l[r] && f(l[r], O, r)
        }
        t.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: G,
          TYPED_ARRAY_TAG: N && O,
          aTypedArray(t) {
            if (isTypedArray(t)) return t
            throw I('Target is not a typed array')
          },
          aTypedArrayConstructor(t) {
            if (c(t) && (!b || v(T, t))) return t
            throw I(`${p(t)} is not a typed array constructor`)
          },
          exportTypedArrayMethod(t, e, i, r) {
            if (o) {
              if (i)
                for (const s in j) {
                  const a = l[s]
                  if (a && h(a.prototype, t))
                    try {
                      delete a.prototype[t]
                    } catch (i) {
                      try {
                        a.prototype[t] = e
                      } catch (t) {}
                    }
                }
              ;(M[t] && !i) || g(M, t, i ? e : (G && E[t]) || e, r)
            }
          },
          exportTypedArrayStaticMethod(t, e, i) {
            let r
            let s
            if (o) {
              if (b) {
                if (i)
                  for (r in j)
                    if ((s = l[r]) && h(s, t))
                      try {
                        delete s[t]
                      } catch (t) {}
                if (T[t] && !i) return
                try {
                  return g(T, t, i ? e : (G && T[t]) || e)
                } catch (t) {}
              }
              for (r in j) !(s = l[r]) || (s[t] && !i) || g(s, t, e)
            }
          },
          getTypedArrayConstructor,
          isView: function isView(t) {
            if (!d(t)) return !1
            const e = u(t)
            return e === 'DataView' || h(j, e) || h(B, e)
          },
          isTypedArray,
          TypedArray: T,
          TypedArrayPrototype: M
        }
      },
      (t) => {
        t.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined'
      },
      (t, e, i) => {
        const r = i(81)
        const s = i(23)
        const a = i(18)
        const n = i(35)('toStringTag')
        const o = Object
        const l =
          a(
            (function () {
              return arguments
            })()
          ) == 'Arguments'
        t.exports = r
          ? a
          : function (t) {
              let e
              let i
              let r
              return void 0 === t
                ? 'Undefined'
                : t === null
                ? 'Null'
                : typeof (i = (function (t, e) {
                    try {
                      return t[e]
                    } catch (t) {}
                  })((e = o(t)), n)) === 'string'
                ? i
                : l
                ? a(e)
                : (r = a(e)) == 'Object' && s(e.callee)
                ? 'Arguments'
                : r
            }
      },
      (t, e, i) => {
        const r = {}
        r[i(35)('toStringTag')] = 'z'
        t.exports = String(r) === '[object z]'
      },
      (t, e, i) => {
        const r = i(40)
        const s = i(23)
        const a = i(41)
        const n = i(55)
        const o = i(83)
        const l = n('IE_PROTO')
        const c = Object
        const d = c.prototype
        t.exports = o
          ? c.getPrototypeOf
          : function (t) {
              const e = a(t)
              if (r(e, l)) return e[l]
              const i = e.constructor
              return s(i) && e instanceof i ? i.prototype : e instanceof c ? d : null
            }
      },
      (t, e, i) => {
        const r = i(10)
        t.exports = !r(function () {
          function F() {}
          F.prototype.constructor = null
          return Object.getPrototypeOf(new F()) !== F.prototype
        })
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(48)
        const a = i(85)
        t.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                let t
                let e = !1
                const i = {}
                try {
                  ;(t = r(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set))(
                    i,
                    []
                  )
                  e = i instanceof Array
                } catch (t) {}
                return function setPrototypeOf(i, r) {
                  s(i)
                  a(r)
                  e ? t(i, r) : (i.__proto__ = r)
                  return i
                }
              })()
            : void 0)
      },
      (t, e, i) => {
        const r = i(23)
        const s = String
        const a = TypeError
        t.exports = function (t) {
          if (typeof t === 'object' || r(t)) return t
          throw a(`Can't set ${s(t)} as a prototype`)
        }
      },
      (t, e, i) => {
        i(87)
        i(93)
        i(95)
        i(117)
        i(119)
        const r = i(128)
        t.exports = r.structuredClone
      },
      (t, e, i) => {
        const r = i(15)
        const s = i(70)
        const a = i(88)
        const n = i(53)
        const o = i(46).f
        const l = i(89)
        const c = i(37)
        const d = i(9)
        const h = 'Array Iterator'
        const u = n.set
        const p = n.getterFor(h)
        t.exports = l(
          Array,
          'Array',
          function (t, e) {
            u(this, { type: h, target: r(t), index: 0, kind: e })
          },
          function () {
            const t = p(this)
            const e = t.target
            const i = t.kind
            const r = t.index++
            if (!e || r >= e.length) {
              t.target = void 0
              return { value: void 0, done: !0 }
            }
            return i == 'keys'
              ? { value: r, done: !1 }
              : i == 'values'
              ? { value: e[r], done: !1 }
              : { value: [r, e[r]], done: !1 }
          },
          'values'
        )
        const f = (a.Arguments = a.Array)
        s('keys')
        s('values')
        s('entries')
        if (!c && d && f.name !== 'values')
          try {
            o(f, 'name', { value: 'values' })
          } catch (t) {}
      },
      (t) => {
        t.exports = {}
      },
      (t, e, i) => {
        const r = i(6)
        const s = i(11)
        const a = i(37)
        const n = i(51)
        const o = i(23)
        const l = i(90)
        const c = i(82)
        const d = i(84)
        const h = i(92)
        const u = i(45)
        const p = i(49)
        const f = i(35)
        const g = i(88)
        const m = i(91)
        const v = n.PROPER
        const _ = n.CONFIGURABLE
        const b = m.IteratorPrototype
        const y = m.BUGGY_SAFARI_ITERATORS
        const A = f('iterator')
        const S = 'keys'
        const P = 'values'
        const x = 'entries'
        const returnThis = function () {
          return this
        }
        t.exports = function (t, e, i, n, f, m, w) {
          l(i, e, n)
          let E
          let C
          let k
          const getIterationMethod = function (t) {
            if (t === f && D) return D
            if (!y && t in R) return R[t]
            switch (t) {
              case S:
                return function keys() {
                  return new i(this, t)
                }
              case P:
                return function values() {
                  return new i(this, t)
                }
              case x:
                return function entries() {
                  return new i(this, t)
                }
            }
            return function () {
              return new i(this)
            }
          }
          const T = `${e} Iterator`
          let M = !1
          var R = t.prototype
          const I = R[A] || R['@@iterator'] || (f && R[f])
          var D = (!y && I) || getIterationMethod(f)
          const O = (e == 'Array' && R.entries) || I
          if (O && (E = c(O.call(new t()))) !== Object.prototype && E.next) {
            a || c(E) === b || (d ? d(E, b) : o(E[A]) || p(E, A, returnThis))
            h(E, T, !0, !0)
            a && (g[T] = returnThis)
          }
          if (v && f == P && I && I.name !== P)
            if (!a && _) u(R, 'name', P)
            else {
              M = !0
              D = function values() {
                return s(I, this)
              }
            }
          if (f) {
            C = {
              values: getIterationMethod(P),
              keys: m ? D : getIterationMethod(S),
              entries: getIterationMethod(x)
            }
            if (w) for (k in C) (y || M || !(k in R)) && p(R, k, C[k])
            else r({ target: e, proto: !0, forced: y || M }, C)
          }
          ;(a && !w) || R[A] === D || p(R, A, D, { name: f })
          g[e] = D
          return C
        }
      },
      (t, e, i) => {
        const r = i(91).IteratorPrototype
        const s = i(71)
        const a = i(14)
        const n = i(92)
        const o = i(88)
        const returnThis = function () {
          return this
        }
        t.exports = function (t, e, i, l) {
          const c = `${e} Iterator`
          t.prototype = s(r, { next: a(+!l, i) })
          n(t, c, !1, !0)
          o[c] = returnThis
          return t
        }
      },
      (t, e, i) => {
        let r
        let s
        let a
        const n = i(10)
        const o = i(23)
        const l = i(71)
        const c = i(82)
        const d = i(49)
        const h = i(35)
        const u = i(37)
        const p = h('iterator')
        let f = !1
        ;[].keys &&
          ('next' in (a = [].keys()) ? (s = c(c(a))) !== Object.prototype && (r = s) : (f = !0))
        r == null ||
        n(function () {
          const t = {}
          return r[p].call(t) !== t
        })
          ? (r = {})
          : u && (r = l(r))
        o(r[p]) ||
          d(r, p, function () {
            return this
          })
        t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f }
      },
      (t, e, i) => {
        const r = i(46).f
        const s = i(40)
        const a = i(35)('toStringTag')
        t.exports = function (t, e, i) {
          t && !i && (t = t.prototype)
          t && !s(t, a) && r(t, a, { configurable: !0, value: e })
        }
      },
      (t, e, i) => {
        const r = i(81)
        const s = i(49)
        const a = i(94)
        r || s(Object.prototype, 'toString', a, { unsafe: !0 })
      },
      (t, e, i) => {
        const r = i(81)
        const s = i(80)
        t.exports = r
          ? {}.toString
          : function toString() {
              return `[object ${s(this)}]`
            }
      },
      (t, e, i) => {
        i(96)
      },
      (t, e, i) => {
        i(97)(
          'Map',
          function (t) {
            return function Map() {
              return t(this, arguments.length ? arguments[0] : void 0)
            }
          },
          i(114)
        )
      },
      (t, e, i) => {
        const r = i(6)
        const s = i(7)
        const a = i(17)
        const n = i(69)
        const o = i(49)
        const l = i(98)
        const c = i(105)
        const d = i(111)
        const h = i(23)
        const u = i(22)
        const p = i(10)
        const f = i(112)
        const g = i(92)
        const m = i(113)
        t.exports = function (t, e, i) {
          const v = t.indexOf('Map') !== -1
          const _ = t.indexOf('Weak') !== -1
          const b = v ? 'set' : 'add'
          const y = s[t]
          const A = y && y.prototype
          let S = y
          const P = {}
          const fixMethod = function (t) {
            const e = a(A[t])
            o(
              A,
              t,
              t == 'add'
                ? function add(t) {
                    e(this, t === 0 ? 0 : t)
                    return this
                  }
                : t == 'delete'
                ? function (t) {
                    return !(_ && !u(t)) && e(this, t === 0 ? 0 : t)
                  }
                : t == 'get'
                ? function get(t) {
                    return _ && !u(t) ? void 0 : e(this, t === 0 ? 0 : t)
                  }
                : t == 'has'
                ? function has(t) {
                    return !(_ && !u(t)) && e(this, t === 0 ? 0 : t)
                  }
                : function set(t, i) {
                    e(this, t === 0 ? 0 : t, i)
                    return this
                  }
            )
          }
          if (
            n(
              t,
              !h(y) ||
                !(
                  _ ||
                  (A.forEach &&
                    !p(function () {
                      new y().entries().next()
                    }))
                )
            )
          ) {
            S = i.getConstructor(e, t, v, b)
            l.enable()
          } else if (n(t, !0)) {
            const x = new S()
            const w = x[b](_ ? {} : -0, 1) != x
            const E = p(function () {
              x.has(1)
            })
            const C = f(function (t) {
              new y(t)
            })
            const k =
              !_ &&
              p(function () {
                for (var t = new y(), e = 5; e--; ) t[b](e, e)
                return !t.has(-0)
              })
            if (!C) {
              ;(S = e(function (t, e) {
                d(t, A)
                const i = m(new y(), t, S)
                e != null && c(e, i[b], { that: i, AS_ENTRIES: v })
                return i
              })).prototype = A
              A.constructor = S
            }
            if (E || k) {
              fixMethod('delete')
              fixMethod('has')
              v && fixMethod('get')
            }
            ;(k || w) && fixMethod(b)
            _ && A.clear && delete A.clear
          }
          P[t] = S
          r({ global: !0, constructor: !0, forced: S != y }, P)
          g(S, t)
          _ || i.setStrong(S, t, v)
          return S
        }
      },
      (t, e, i) => {
        const r = i(6)
        const s = i(17)
        const a = i(56)
        const n = i(22)
        const o = i(40)
        const l = i(46).f
        const c = i(59)
        const d = i(99)
        const h = i(102)
        const u = i(42)
        const p = i(104)
        let f = !1
        const g = u('meta')
        let m = 0
        const setMetadata = function (t) {
          l(t, g, { value: { objectID: `O${m++}`, weakData: {} } })
        }
        var v = (t.exports = {
          enable() {
            v.enable = function () {}
            f = !0
            const t = c.f
            const e = s([].splice)
            const i = {}
            i[g] = 1
            if (t(i).length) {
              c.f = function (i) {
                for (var r = t(i), s = 0, a = r.length; s < a; s++)
                  if (r[s] === g) {
                    e(r, s, 1)
                    break
                  }
                return r
              }
              r({ target: 'Object', stat: !0, forced: !0 }, { getOwnPropertyNames: d.f })
            }
          },
          fastKey(t, e) {
            if (!n(t)) return typeof t === 'symbol' ? t : (typeof t === 'string' ? 'S' : 'P') + t
            if (!o(t, g)) {
              if (!h(t)) return 'F'
              if (!e) return 'E'
              setMetadata(t)
            }
            return t[g].objectID
          },
          getWeakData(t, e) {
            if (!o(t, g)) {
              if (!h(t)) return !0
              if (!e) return !1
              setMetadata(t)
            }
            return t[g].weakData
          },
          onFreeze(t) {
            p && f && h(t) && !o(t, g) && setMetadata(t)
            return t
          }
        })
        a[g] = !0
      },
      (t, e, i) => {
        const r = i(18)
        const s = i(15)
        const a = i(59).f
        const n = i(100)
        const o =
          typeof window === 'object' && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
        t.exports.f = function getOwnPropertyNames(t) {
          return o && r(t) == 'Window'
            ? (function (t) {
                try {
                  return a(t)
                } catch (t) {
                  return n(o)
                }
              })(t)
            : a(s(t))
        }
      },
      (t, e, i) => {
        const r = i(62)
        const s = i(65)
        const a = i(101)
        const n = Array
        const o = Math.max
        t.exports = function (t, e, i) {
          for (
            var l = s(t), c = r(e, l), d = r(void 0 === i ? l : i, l), h = n(o(d - c, 0)), u = 0;
            c < d;
            c++, u++
          )
            a(h, u, t[c])
          h.length = u
          return h
        }
      },
      (t, e, i) => {
        const r = i(20)
        const s = i(46)
        const a = i(14)
        t.exports = function (t, e, i) {
          const n = r(e)
          n in t ? s.f(t, n, a(0, i)) : (t[n] = i)
        }
      },
      (t, e, i) => {
        const r = i(10)
        const s = i(22)
        const a = i(18)
        const n = i(103)
        const o = Object.isExtensible
        const l = r(function () {
          o(1)
        })
        t.exports =
          l || n
            ? function isExtensible(t) {
                return !!s(t) && (!n || a(t) != 'ArrayBuffer') && (!o || o(t))
              }
            : o
      },
      (t, e, i) => {
        const r = i(10)
        t.exports = r(function () {
          if (typeof ArrayBuffer === 'function') {
            const t = new ArrayBuffer(8)
            Object.isExtensible(t) && Object.defineProperty(t, 'a', { value: 8 })
          }
        })
      },
      (t, e, i) => {
        const r = i(10)
        t.exports = !r(function () {
          return Object.isExtensible(Object.preventExtensions({}))
        })
      },
      (t, e, i) => {
        const r = i(106)
        const s = i(11)
        const a = i(48)
        const n = i(33)
        const o = i(107)
        const l = i(65)
        const c = i(26)
        const d = i(108)
        const h = i(109)
        const u = i(110)
        const p = TypeError
        const Result = function (t, e) {
          this.stopped = t
          this.result = e
        }
        const f = Result.prototype
        t.exports = function (t, e, i) {
          let g
          let m
          let v
          let _
          let b
          let y
          let A
          const S = i && i.that
          const P = !(!i || !i.AS_ENTRIES)
          const x = !(!i || !i.IS_RECORD)
          const w = !(!i || !i.IS_ITERATOR)
          const E = !(!i || !i.INTERRUPTED)
          const C = r(e, S)
          const stop = function (t) {
            g && u(g, 'normal', t)
            return new Result(!0, t)
          }
          const callFn = function (t) {
            if (P) {
              a(t)
              return E ? C(t[0], t[1], stop) : C(t[0], t[1])
            }
            return E ? C(t, stop) : C(t)
          }
          if (x) g = t.iterator
          else if (w) g = t
          else {
            if (!(m = h(t))) throw p(`${n(t)} is not iterable`)
            if (o(m)) {
              for (v = 0, _ = l(t); _ > v; v++) if ((b = callFn(t[v])) && c(f, b)) return b
              return new Result(!1)
            }
            g = d(t, m)
          }
          y = x ? t.next : g.next
          for (; !(A = s(y, g)).done; ) {
            try {
              b = callFn(A.value)
            } catch (t) {
              u(g, 'throw', t)
            }
            if (typeof b === 'object' && b && c(f, b)) return b
          }
          return new Result(!1)
        }
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(32)
        const a = i(12)
        const n = r(r.bind)
        t.exports = function (t, e) {
          s(t)
          return void 0 === e
            ? t
            : a
            ? n(t, e)
            : function () {
                return t.apply(e, arguments)
              }
        }
      },
      (t, e, i) => {
        const r = i(35)
        const s = i(88)
        const a = r('iterator')
        const n = Array.prototype
        t.exports = function (t) {
          return void 0 !== t && (s.Array === t || n[a] === t)
        }
      },
      (t, e, i) => {
        const r = i(11)
        const s = i(32)
        const a = i(48)
        const n = i(33)
        const o = i(109)
        const l = TypeError
        t.exports = function (t, e) {
          const i = arguments.length < 2 ? o(t) : e
          if (s(i)) return a(r(i, t))
          throw l(`${n(t)} is not iterable`)
        }
      },
      (t, e, i) => {
        const r = i(80)
        const s = i(31)
        const a = i(88)
        const n = i(35)('iterator')
        t.exports = function (t) {
          if (t != null) return s(t, n) || s(t, '@@iterator') || a[r(t)]
        }
      },
      (t, e, i) => {
        const r = i(11)
        const s = i(48)
        const a = i(31)
        t.exports = function (t, e, i) {
          let n
          let o
          s(t)
          try {
            if (!(n = a(t, 'return'))) {
              if (e === 'throw') throw i
              return i
            }
            n = r(n, t)
          } catch (t) {
            o = !0
            n = t
          }
          if (e === 'throw') throw i
          if (o) throw n
          s(n)
          return i
        }
      },
      (t, e, i) => {
        const r = i(26)
        const s = TypeError
        t.exports = function (t, e) {
          if (r(e, t)) return t
          throw s('Incorrect invocation')
        }
      },
      (t, e, i) => {
        const r = i(35)('iterator')
        let s = !1
        try {
          let a = 0
          const n = {
            next() {
              return { done: !!a++ }
            },
            return() {
              s = !0
            }
          }
          n[r] = function () {
            return this
          }
          Array.from(n, function () {
            throw 2
          })
        } catch (t) {}
        t.exports = function (t, e) {
          if (!e && !s) return !1
          let i = !1
          try {
            const a = {}
            a[r] = function () {
              return {
                next() {
                  return { done: (i = !0) }
                }
              }
            }
            t(a)
          } catch (t) {}
          return i
        }
      },
      (t, e, i) => {
        const r = i(23)
        const s = i(22)
        const a = i(84)
        t.exports = function (t, e, i) {
          let n
          let o
          a &&
            r((n = e.constructor)) &&
            n !== i &&
            s((o = n.prototype)) &&
            o !== i.prototype &&
            a(t, o)
          return t
        }
      },
      (t, e, i) => {
        const r = i(46).f
        const s = i(71)
        const a = i(115)
        const n = i(106)
        const o = i(111)
        const l = i(105)
        const c = i(89)
        const d = i(116)
        const h = i(9)
        const u = i(98).fastKey
        const p = i(53)
        const f = p.set
        const g = p.getterFor
        t.exports = {
          getConstructor(t, e, i, c) {
            const d = t(function (t, r) {
              o(t, p)
              f(t, { type: e, index: s(null), first: void 0, last: void 0, size: 0 })
              h || (t.size = 0)
              r != null && l(r, t[c], { that: t, AS_ENTRIES: i })
            })
            var p = d.prototype
            const m = g(e)
            const define = function (t, e, i) {
              let r
              let s
              const a = m(t)
              let n = getEntry(t, e)
              if (n) n.value = i
              else {
                a.last = n = {
                  index: (s = u(e, !0)),
                  key: e,
                  value: i,
                  previous: (r = a.last),
                  next: void 0,
                  removed: !1
                }
                a.first || (a.first = n)
                r && (r.next = n)
                h ? a.size++ : t.size++
                s !== 'F' && (a.index[s] = n)
              }
              return t
            }
            var getEntry = function (t, e) {
              let i
              const r = m(t)
              const s = u(e)
              if (s !== 'F') return r.index[s]
              for (i = r.first; i; i = i.next) if (i.key == e) return i
            }
            a(p, {
              clear: function clear() {
                for (var t = m(this), e = t.index, i = t.first; i; ) {
                  i.removed = !0
                  i.previous && (i.previous = i.previous.next = void 0)
                  delete e[i.index]
                  i = i.next
                }
                t.first = t.last = void 0
                h ? (t.size = 0) : (this.size = 0)
              },
              delete(t) {
                const e = this
                const i = m(e)
                const r = getEntry(e, t)
                if (r) {
                  const s = r.next
                  const a = r.previous
                  delete i.index[r.index]
                  r.removed = !0
                  a && (a.next = s)
                  s && (s.previous = a)
                  i.first == r && (i.first = s)
                  i.last == r && (i.last = a)
                  h ? i.size-- : e.size--
                }
                return !!r
              },
              forEach: function forEach(t) {
                for (
                  var e, i = m(this), r = n(t, arguments.length > 1 ? arguments[1] : void 0);
                  (e = e ? e.next : i.first);

                ) {
                  r(e.value, e.key, this)
                  for (; e && e.removed; ) e = e.previous
                }
              },
              has: function has(t) {
                return !!getEntry(this, t)
              }
            })
            a(
              p,
              i
                ? {
                    get: function get(t) {
                      const e = getEntry(this, t)
                      return e && e.value
                    },
                    set: function set(t, e) {
                      return define(this, t === 0 ? 0 : t, e)
                    }
                  }
                : {
                    add: function add(t) {
                      return define(this, (t = t === 0 ? 0 : t), t)
                    }
                  }
            )
            h &&
              r(p, 'size', {
                get() {
                  return m(this).size
                }
              })
            return d
          },
          setStrong(t, e, i) {
            const r = `${e} Iterator`
            const s = g(e)
            const a = g(r)
            c(
              t,
              e,
              function (t, e) {
                f(this, { type: r, target: t, state: s(t), kind: e, last: void 0 })
              },
              function () {
                for (var t = a(this), e = t.kind, i = t.last; i && i.removed; ) i = i.previous
                if (!t.target || !(t.last = i = i ? i.next : t.state.first)) {
                  t.target = void 0
                  return { value: void 0, done: !0 }
                }
                return e == 'keys'
                  ? { value: i.key, done: !1 }
                  : e == 'values'
                  ? { value: i.value, done: !1 }
                  : { value: [i.key, i.value], done: !1 }
              },
              i ? 'entries' : 'values',
              !i,
              !0
            )
            d(e)
          }
        }
      },
      (t, e, i) => {
        const r = i(49)
        t.exports = function (t, e, i) {
          for (const s in e) r(t, s, e[s], i)
          return t
        }
      },
      (t, e, i) => {
        const r = i(25)
        const s = i(46)
        const a = i(35)
        const n = i(9)
        const o = a('species')
        t.exports = function (t) {
          const e = r(t)
          const i = s.f
          n &&
            e &&
            !e[o] &&
            i(e, o, {
              configurable: !0,
              get() {
                return this
              }
            })
        }
      },
      (t, e, i) => {
        i(118)
      },
      (t, e, i) => {
        i(97)(
          'Set',
          function (t) {
            return function Set() {
              return t(this, arguments.length ? arguments[0] : void 0)
            }
          },
          i(114)
        )
      },
      (t, e, i) => {
        let r
        const s = i(37)
        const a = i(6)
        const n = i(7)
        const o = i(25)
        const l = i(17)
        const c = i(10)
        const d = i(42)
        const h = i(23)
        const u = i(120)
        const p = i(22)
        const f = i(24)
        const g = i(105)
        const m = i(48)
        const v = i(80)
        const _ = i(40)
        const b = i(101)
        const y = i(45)
        const A = i(65)
        const S = i(121)
        const P = i(122)
        const x = i(124)
        const w = i(29)
        const E = i(125)
        const C = i(126)
        const k = i(127)
        const T = n.Object
        const M = n.Date
        const R = n.Error
        const I = n.EvalError
        const D = n.RangeError
        const O = n.ReferenceError
        const L = n.SyntaxError
        const G = n.TypeError
        const N = n.URIError
        const j = n.PerformanceMark
        const B = n.WebAssembly
        const U = (B && B.CompileError) || R
        const W = (B && B.LinkError) || R
        const q = (B && B.RuntimeError) || R
        const z = o('DOMException')
        const V = o('Set')
        const H = o('Map')
        const X = H.prototype
        const $ = l(X.has)
        const Y = l(X.get)
        const K = l(X.set)
        const J = l(V.prototype.add)
        const Q = o('Object', 'keys')
        const Z = l([].push)
        const tt = l((!0).valueOf)
        const et = l((1).valueOf)
        const it = l(''.valueOf)
        const rt = l(M.prototype.getTime)
        const st = d('structuredClone')
        const nt = 'DataCloneError'
        const ot = 'Transferring'
        const checkBasicSemantic = function (t) {
          return (
            !c(function () {
              const e = new n.Set([7])
              const i = t(e)
              const r = t(T(7))
              return i == e || !i.has(7) || typeof r !== 'object' || r != 7
            }) && t
          )
        }
        const checkErrorsCloning = function (t, e) {
          return !c(function () {
            const i = new e()
            const r = t({ a: i, b: i })
            return !(r && r.a === r.b && r.a instanceof e && r.a.stack === i.stack)
          })
        }
        const lt = n.structuredClone
        const ct =
          s ||
          !checkErrorsCloning(lt, R) ||
          !checkErrorsCloning(lt, z) ||
          !((r = lt),
          !c(function () {
            const t = r(new n.AggregateError([1], st, { cause: 3 }))
            return t.name != 'AggregateError' || t.errors[0] != 1 || t.message != st || t.cause != 3
          }))
        const dt =
          !lt &&
          checkBasicSemantic(function (t) {
            return new j(st, { detail: t }).detail
          })
        const ht = checkBasicSemantic(lt) || dt
        const throwUncloneable = function (t) {
          throw new z(`Uncloneable type: ${t}`, nt)
        }
        const throwUnpolyfillable = function (t, e) {
          throw new z(`${e || 'Cloning'} of ${t} cannot be properly polyfilled in this engine`, nt)
        }
        var structuredCloneInternal = function (t, e) {
          f(t) && throwUncloneable('Symbol')
          if (!p(t)) return t
          if (e) {
            if ($(e, t)) return Y(e, t)
          } else e = new H()
          let i
          let r
          let s
          let a
          let l
          let c
          let d
          let g
          let m
          let S
          const w = v(t)
          let E = !1
          switch (w) {
            case 'Array':
              s = []
              E = !0
              break
            case 'Object':
              s = {}
              E = !0
              break
            case 'Map':
              s = new H()
              E = !0
              break
            case 'Set':
              s = new V()
              E = !0
              break
            case 'RegExp':
              s = new RegExp(t.source, P(t))
              break
            case 'Error':
              switch ((r = t.name)) {
                case 'AggregateError':
                  s = o('AggregateError')([])
                  break
                case 'EvalError':
                  s = I()
                  break
                case 'RangeError':
                  s = D()
                  break
                case 'ReferenceError':
                  s = O()
                  break
                case 'SyntaxError':
                  s = L()
                  break
                case 'TypeError':
                  s = G()
                  break
                case 'URIError':
                  s = N()
                  break
                case 'CompileError':
                  s = U()
                  break
                case 'LinkError':
                  s = W()
                  break
                case 'RuntimeError':
                  s = q()
                  break
                default:
                  s = R()
              }
              E = !0
              break
            case 'DOMException':
              s = new z(t.message, t.name)
              E = !0
              break
            case 'DataView':
            case 'Int8Array':
            case 'Uint8Array':
            case 'Uint8ClampedArray':
            case 'Int16Array':
            case 'Uint16Array':
            case 'Int32Array':
            case 'Uint32Array':
            case 'Float32Array':
            case 'Float64Array':
            case 'BigInt64Array':
            case 'BigUint64Array':
              i = n[w]
              p(i) || throwUnpolyfillable(w)
              s = new i(
                structuredCloneInternal(t.buffer, e),
                t.byteOffset,
                w === 'DataView' ? t.byteLength : t.length
              )
              break
            case 'DOMQuad':
              try {
                s = new DOMQuad(
                  structuredCloneInternal(t.p1, e),
                  structuredCloneInternal(t.p2, e),
                  structuredCloneInternal(t.p3, e),
                  structuredCloneInternal(t.p4, e)
                )
              } catch (e) {
                ht ? (s = ht(t)) : throwUnpolyfillable(w)
              }
              break
            case 'FileList':
              i = n.DataTransfer
              if (u(i)) {
                a = new i()
                for (l = 0, c = A(t); l < c; l++) a.items.add(structuredCloneInternal(t[l], e))
                s = a.files
              } else ht ? (s = ht(t)) : throwUnpolyfillable(w)
              break
            case 'ImageData':
              try {
                s = new ImageData(structuredCloneInternal(t.data, e), t.width, t.height, {
                  colorSpace: t.colorSpace
                })
              } catch (e) {
                ht ? (s = ht(t)) : throwUnpolyfillable(w)
              }
              break
            default:
              if (ht) s = ht(t)
              else
                switch (w) {
                  case 'BigInt':
                    s = T(t.valueOf())
                    break
                  case 'Boolean':
                    s = T(tt(t))
                    break
                  case 'Number':
                    s = T(et(t))
                    break
                  case 'String':
                    s = T(it(t))
                    break
                  case 'Date':
                    s = new M(rt(t))
                    break
                  case 'ArrayBuffer':
                    ;(i = n.DataView) || typeof t.slice === 'function' || throwUnpolyfillable(w)
                    try {
                      if (typeof t.slice === 'function') s = t.slice(0)
                      else {
                        c = t.byteLength
                        s = new ArrayBuffer(c)
                        m = new i(t)
                        S = new i(s)
                        for (l = 0; l < c; l++) S.setUint8(l, m.getUint8(l))
                      }
                    } catch (t) {
                      throw new z('ArrayBuffer is detached', nt)
                    }
                    break
                  case 'SharedArrayBuffer':
                    s = t
                    break
                  case 'Blob':
                    try {
                      s = t.slice(0, t.size, t.type)
                    } catch (t) {
                      throwUnpolyfillable(w)
                    }
                    break
                  case 'DOMPoint':
                  case 'DOMPointReadOnly':
                    i = n[w]
                    try {
                      s = i.fromPoint ? i.fromPoint(t) : new i(t.x, t.y, t.z, t.w)
                    } catch (t) {
                      throwUnpolyfillable(w)
                    }
                    break
                  case 'DOMRect':
                  case 'DOMRectReadOnly':
                    i = n[w]
                    try {
                      s = i.fromRect ? i.fromRect(t) : new i(t.x, t.y, t.width, t.height)
                    } catch (t) {
                      throwUnpolyfillable(w)
                    }
                    break
                  case 'DOMMatrix':
                  case 'DOMMatrixReadOnly':
                    i = n[w]
                    try {
                      s = i.fromMatrix ? i.fromMatrix(t) : new i(t)
                    } catch (t) {
                      throwUnpolyfillable(w)
                    }
                    break
                  case 'AudioData':
                  case 'VideoFrame':
                    h(t.clone) || throwUnpolyfillable(w)
                    try {
                      s = t.clone()
                    } catch (t) {
                      throwUncloneable(w)
                    }
                    break
                  case 'File':
                    try {
                      s = new File([t], t.name, t)
                    } catch (t) {
                      throwUnpolyfillable(w)
                    }
                    break
                  case 'CryptoKey':
                  case 'GPUCompilationMessage':
                  case 'GPUCompilationInfo':
                  case 'ImageBitmap':
                  case 'RTCCertificate':
                  case 'WebAssembly.Module':
                    throwUnpolyfillable(w)
                  default:
                    throwUncloneable(w)
                }
          }
          K(e, t, s)
          if (E)
            switch (w) {
              case 'Array':
              case 'Object':
                d = Q(t)
                for (l = 0, c = A(d); l < c; l++) {
                  g = d[l]
                  b(s, g, structuredCloneInternal(t[g], e))
                }
                break
              case 'Map':
                t.forEach(function (t, i) {
                  K(s, structuredCloneInternal(i, e), structuredCloneInternal(t, e))
                })
                break
              case 'Set':
                t.forEach(function (t) {
                  J(s, structuredCloneInternal(t, e))
                })
                break
              case 'Error':
                y(s, 'message', structuredCloneInternal(t.message, e))
                _(t, 'cause') && y(s, 'cause', structuredCloneInternal(t.cause, e))
                r == 'AggregateError' && (s.errors = structuredCloneInternal(t.errors, e))
              case 'DOMException':
                x && y(s, 'stack', structuredCloneInternal(t.stack, e))
            }
          return s
        }
        const ut =
          lt &&
          !c(function () {
            if ((C && w > 92) || (k && w > 94) || (E && w > 97)) return !1
            const t = new ArrayBuffer(8)
            const e = lt(t, { transfer: [t] })
            return t.byteLength != 0 || e.byteLength != 8
          })
        const tryToTransfer = function (t, e) {
          if (!p(t)) throw G('Transfer option cannot be converted to a sequence')
          const i = []
          g(t, function (t) {
            Z(i, m(t))
          })
          let r
          let s
          let a
          let o
          let l
          let c
          let d = 0
          const f = A(i)
          if (ut) {
            o = lt(i, { transfer: i })
            for (; d < f; ) K(e, i[d], o[d++])
          } else
            for (; d < f; ) {
              r = i[d++]
              if ($(e, r)) throw new z('Duplicate transferable', nt)
              switch ((s = v(r))) {
                case 'ImageBitmap':
                  a = n.OffscreenCanvas
                  u(a) || throwUnpolyfillable(s, ot)
                  try {
                    ;(c = new a(r.width, r.height))
                      .getContext('bitmaprenderer')
                      .transferFromImageBitmap(r)
                    l = c.transferToImageBitmap()
                  } catch (t) {}
                  break
                case 'AudioData':
                case 'VideoFrame':
                  ;(h(r.clone) && h(r.close)) || throwUnpolyfillable(s, ot)
                  try {
                    l = r.clone()
                    r.close()
                  } catch (t) {}
                  break
                case 'ArrayBuffer':
                case 'MessagePort':
                case 'OffscreenCanvas':
                case 'ReadableStream':
                case 'TransformStream':
                case 'WritableStream':
                  throwUnpolyfillable(s, ot)
              }
              if (void 0 === l) throw new z(`This object cannot be transferred: ${s}`, nt)
              K(e, r, l)
            }
        }
        a(
          { global: !0, enumerable: !0, sham: !ut, forced: ct },
          {
            structuredClone: function structuredClone(t) {
              let e
              const i =
                S(arguments.length, 1) > 1 && arguments[1] != null ? m(arguments[1]) : void 0
              const r = i ? i.transfer : void 0
              if (void 0 !== r) {
                e = new H()
                tryToTransfer(r, e)
              }
              return structuredCloneInternal(t, e)
            }
          }
        )
      },
      (t, e, i) => {
        const r = i(17)
        const s = i(10)
        const a = i(23)
        const n = i(80)
        const o = i(25)
        const l = i(52)
        const noop = function () {}
        const c = []
        const d = o('Reflect', 'construct')
        const h = /^\s*(?:class|function)\b/
        const u = r(h.exec)
        const p = !h.exec(noop)
        const f = function isConstructor(t) {
          if (!a(t)) return !1
          try {
            d(noop, c, t)
            return !0
          } catch (t) {
            return !1
          }
        }
        const g = function isConstructor(t) {
          if (!a(t)) return !1
          switch (n(t)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
              return !1
          }
          try {
            return p || !!u(h, l(t))
          } catch (t) {
            return !0
          }
        }
        g.sham = !0
        t.exports =
          !d ||
          s(function () {
            let t
            return (
              f(f.call) ||
              !f(Object) ||
              !f(function () {
                t = !0
              }) ||
              t
            )
          })
            ? g
            : f
      },
      (t) => {
        const e = TypeError
        t.exports = function (t, i) {
          if (t < i) throw e('Not enough arguments')
          return t
        }
      },
      (t, e, i) => {
        const r = i(11)
        const s = i(40)
        const a = i(26)
        const n = i(123)
        const o = RegExp.prototype
        t.exports = function (t) {
          const e = t.flags
          return void 0 !== e || 'flags' in o || s(t, 'flags') || !a(o, t) ? e : r(n, t)
        }
      },
      (t, e, i) => {
        const r = i(48)
        t.exports = function () {
          const t = r(this)
          let e = ''
          t.hasIndices && (e += 'd')
          t.global && (e += 'g')
          t.ignoreCase && (e += 'i')
          t.multiline && (e += 'm')
          t.dotAll && (e += 's')
          t.unicode && (e += 'u')
          t.unicodeSets && (e += 'v')
          t.sticky && (e += 'y')
          return e
        }
      },
      (t, e, i) => {
        const r = i(10)
        const s = i(14)
        t.exports = !r(function () {
          const t = Error('a')
          if (!('stack' in t)) return !0
          Object.defineProperty(t, 'stack', s(1, 7))
          return t.stack !== 7
        })
      },
      (t, e, i) => {
        const r = i(126)
        const s = i(127)
        t.exports = !r && !s && typeof window === 'object' && typeof document === 'object'
      },
      (t) => {
        t.exports = typeof Deno === 'object' && Deno && typeof Deno.version === 'object'
      },
      (t, e, i) => {
        const r = i(18)
        const s = i(7)
        t.exports = r(s.process) == 'process'
      },
      (t, e, i) => {
        const r = i(7)
        t.exports = r
      },
      (__unused_webpack_module, exports, __w_pdfjs_require__) => {
        Object.defineProperty(exports, '__esModule', { value: !0 })
        exports.build =
          exports.RenderTask =
          exports.PDFWorkerUtil =
          exports.PDFWorker =
          exports.PDFPageProxy =
          exports.PDFDocumentProxy =
          exports.PDFDocumentLoadingTask =
          exports.PDFDataRangeTransport =
          exports.LoopbackPort =
          exports.DefaultStandardFontDataFactory =
          exports.DefaultCanvasFactory =
          exports.DefaultCMapReaderFactory =
            void 0
        exports.getDocument = getDocument
        exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory
        exports.version = void 0
        const _util = __w_pdfjs_require__(1)
        const _annotation_storage = __w_pdfjs_require__(130)
        const _display_utils = __w_pdfjs_require__(133)
        const _font_loader = __w_pdfjs_require__(136)
        const _canvas = __w_pdfjs_require__(137)
        const _worker_options = __w_pdfjs_require__(142)
        const _is_node = __w_pdfjs_require__(3)
        const _message_handler = __w_pdfjs_require__(143)
        const _metadata = __w_pdfjs_require__(144)
        const _optional_content_config = __w_pdfjs_require__(145)
        const _transport_stream = __w_pdfjs_require__(146)
        const _xfa_text = __w_pdfjs_require__(147)
        function _classPrivateMethodInitSpec(t, e) {
          _checkPrivateRedeclaration(t, e)
          e.add(t)
        }
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          _checkPrivateRedeclaration(t, e)
          e.set(t, i)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        function _classPrivateFieldSet(t, e, i) {
          _classApplyDescriptorSet(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classPrivateFieldGet(t, e) {
          return _classApplyDescriptorGet(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        function _classStaticPrivateFieldSpecSet(t, e, i, r) {
          _classCheckPrivateStaticAccess(t, e)
          _classCheckPrivateStaticFieldDescriptor(i, 'set')
          _classApplyDescriptorSet(t, i, r)
          return r
        }
        function _classApplyDescriptorSet(t, e, i) {
          if (e.set) e.set.call(t, i)
          else {
            if (!e.writable) throw new TypeError('attempted to set read only private field')
            e.value = i
          }
        }
        function _classStaticPrivateFieldSpecGet(t, e, i) {
          _classCheckPrivateStaticAccess(t, e)
          _classCheckPrivateStaticFieldDescriptor(i, 'get')
          return _classApplyDescriptorGet(t, i)
        }
        function _classCheckPrivateStaticFieldDescriptor(t, e) {
          if (void 0 === t)
            throw new TypeError(`attempted to ${e} private static field before its declaration`)
        }
        function _classCheckPrivateStaticAccess(t, e) {
          if (t !== e) throw new TypeError('Private static access of wrong provenance')
        }
        function _classApplyDescriptorGet(t, e) {
          return e.get ? e.get.call(t) : e.value
        }
        const DEFAULT_RANGE_CHUNK_SIZE = 65536
        const RENDERING_CANCELLED_TIMEOUT = 100
        let DefaultCanvasFactory = _display_utils.DOMCanvasFactory
        exports.DefaultCanvasFactory = DefaultCanvasFactory
        let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory
        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory
        let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory
        let createPDFNetworkStream
        exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory
        if (_is_node.isNodeJS) {
          const {
            NodeCanvasFactory: t,
            NodeCMapReaderFactory: e,
            NodeStandardFontDataFactory: i
          } = __w_pdfjs_require__(148)
          exports.DefaultCanvasFactory = DefaultCanvasFactory = t
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = e
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = i
        }
        function setPDFNetworkStreamFactory(t) {
          createPDFNetworkStream = t
        }
        function getDocument(t) {
          const e = new PDFDocumentLoadingTask()
          let i
          if (typeof t === 'string' || t instanceof URL) i = { url: t }
          else if ((0, _util.isArrayBuffer)(t)) i = { data: t }
          else if (t instanceof PDFDataRangeTransport) i = { range: t }
          else {
            if (typeof t !== 'object')
              throw new Error(
                'Invalid parameter in getDocument, need either string, URL, TypedArray, or parameter object.'
              )
            if (!t.url && !t.data && !t.range)
              throw new Error('Invalid parameter object: need either .data, .range or .url')
            i = t
          }
          const r = Object.create(null)
          let s = null
          let a = null
          for (const t in i) {
            const e = i[t]
            switch (t) {
              case 'url':
                if (typeof window !== 'undefined')
                  try {
                    r[t] = new URL(e, window.location).href
                    continue
                  } catch (t) {
                    ;(0, _util.warn)(`Cannot create valid URL: "${t}".`)
                  }
                else if (typeof e === 'string' || e instanceof URL) {
                  r[t] = e.toString()
                  continue
                }
                throw new Error(
                  'Invalid PDF url data: either string or URL-object is expected in the url property.'
                )
              case 'range':
                s = e
                continue
              case 'worker':
                a = e
                continue
              case 'data':
                if (_is_node.isNodeJS && typeof Buffer !== 'undefined' && e instanceof Buffer)
                  r[t] = new Uint8Array(e)
                else {
                  if (e instanceof Uint8Array) break
                  if (typeof e === 'string') r[t] = (0, _util.stringToBytes)(e)
                  else if (typeof e !== 'object' || e === null || isNaN(e.length)) {
                    if (!(0, _util.isArrayBuffer)(e))
                      throw new Error(
                        'Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.'
                      )
                    r[t] = new Uint8Array(e)
                  } else r[t] = new Uint8Array(e)
                }
                continue
            }
            r[t] = e
          }
          r.CMapReaderFactory = r.CMapReaderFactory || DefaultCMapReaderFactory
          r.StandardFontDataFactory = r.StandardFontDataFactory || DefaultStandardFontDataFactory
          r.ignoreErrors = !0 !== r.stopAtErrors
          r.fontExtraProperties = !0 === r.fontExtraProperties
          r.pdfBug = !0 === r.pdfBug
          r.enableXfa = !0 === r.enableXfa
          ;(!Number.isInteger(r.rangeChunkSize) || r.rangeChunkSize < 1) &&
            (r.rangeChunkSize = DEFAULT_RANGE_CHUNK_SIZE)
          ;(typeof r.docBaseUrl !== 'string' || (0, _display_utils.isDataScheme)(r.docBaseUrl)) &&
            (r.docBaseUrl = null)
          ;(!Number.isInteger(r.maxImageSize) || r.maxImageSize < -1) && (r.maxImageSize = -1)
          typeof r.cMapUrl !== 'string' && (r.cMapUrl = null)
          typeof r.standardFontDataUrl !== 'string' && (r.standardFontDataUrl = null)
          typeof r.useWorkerFetch !== 'boolean' &&
            (r.useWorkerFetch =
              r.CMapReaderFactory === _display_utils.DOMCMapReaderFactory &&
              r.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory)
          typeof r.isEvalSupported !== 'boolean' && (r.isEvalSupported = !0)
          typeof r.disableFontFace !== 'boolean' && (r.disableFontFace = _is_node.isNodeJS)
          typeof r.useSystemFonts !== 'boolean' &&
            (r.useSystemFonts = !_is_node.isNodeJS && !r.disableFontFace)
          ;(typeof r.ownerDocument === 'object' && r.ownerDocument !== null) ||
            (r.ownerDocument = globalThis.document)
          typeof r.disableRange !== 'boolean' && (r.disableRange = !1)
          typeof r.disableStream !== 'boolean' && (r.disableStream = !1)
          typeof r.disableAutoFetch !== 'boolean' && (r.disableAutoFetch = !1)
          ;(0, _util.setVerbosityLevel)(r.verbosity)
          if (!a) {
            const t = {
              verbosity: r.verbosity,
              port: _worker_options.GlobalWorkerOptions.workerPort
            }
            a = t.port ? PDFWorker.fromPort(t) : new PDFWorker(t)
            e._worker = a
          }
          const n = e.docId
          a.promise
            .then(function () {
              if (e.destroyed) throw new Error('Loading aborted')
              const t = _fetchDocument(a, r, s, n)
              const i = new Promise(function (t) {
                let e
                s
                  ? (e = new _transport_stream.PDFDataTransportStream(
                      {
                        length: r.length,
                        initialData: r.initialData,
                        progressiveDone: r.progressiveDone,
                        contentDispositionFilename: r.contentDispositionFilename,
                        disableRange: r.disableRange,
                        disableStream: r.disableStream
                      },
                      s
                    ))
                  : r.data ||
                    (e = createPDFNetworkStream({
                      url: r.url,
                      length: r.length,
                      httpHeaders: r.httpHeaders,
                      withCredentials: r.withCredentials,
                      rangeChunkSize: r.rangeChunkSize,
                      disableRange: r.disableRange,
                      disableStream: r.disableStream
                    }))
                t(e)
              })
              return Promise.all([t, i]).then(function (t) {
                const [i, s] = t
                if (e.destroyed) throw new Error('Loading aborted')
                const o = new _message_handler.MessageHandler(n, i, a.port)
                const l = new WorkerTransport(o, e, s, r)
                e._transport = l
                o.send('Ready', null)
              })
            })
            .catch(e._capability.reject)
          return e
        }
        async function _fetchDocument(t, e, i, r) {
          if (t.destroyed) throw new Error('Worker was destroyed')
          if (i) {
            e.length = i.length
            e.initialData = i.initialData
            e.progressiveDone = i.progressiveDone
            e.contentDispositionFilename = i.contentDispositionFilename
          }
          const s = await t.messageHandler.sendWithPromise('GetDocRequest', {
            docId: r,
            apiVersion: '2.16.0',
            source: {
              data: e.data,
              url: e.url,
              password: e.password,
              disableAutoFetch: e.disableAutoFetch,
              rangeChunkSize: e.rangeChunkSize,
              length: e.length
            },
            maxImageSize: e.maxImageSize,
            disableFontFace: e.disableFontFace,
            docBaseUrl: e.docBaseUrl,
            ignoreErrors: e.ignoreErrors,
            isEvalSupported: e.isEvalSupported,
            fontExtraProperties: e.fontExtraProperties,
            enableXfa: e.enableXfa,
            useSystemFonts: e.useSystemFonts,
            cMapUrl: e.useWorkerFetch ? e.cMapUrl : null,
            standardFontDataUrl: e.useWorkerFetch ? e.standardFontDataUrl : null
          })
          e.data && (e.data = null)
          if (t.destroyed) throw new Error('Worker was destroyed')
          return s
        }
        class PDFDocumentLoadingTask {
          constructor() {
            let t
            let e
            this._capability = (0, _util.createPromiseCapability)()
            this._transport = null
            this._worker = null
            this.docId = `d${
              (_classStaticPrivateFieldSpecSet(
                PDFDocumentLoadingTask,
                PDFDocumentLoadingTask,
                _docId,
                ((t = _classStaticPrivateFieldSpecGet(
                  PDFDocumentLoadingTask,
                  PDFDocumentLoadingTask,
                  _docId
                )),
                (e = t++),
                t)
              ),
              e)
            }`
            this.destroyed = !1
            this.onPassword = null
            this.onProgress = null
            this.onUnsupportedFeature = null
          }

          get promise() {
            return this._capability.promise
          }

          async destroy() {
            let t
            this.destroyed = !0
            await ((t = this._transport) === null || void 0 === t ? void 0 : t.destroy())
            this._transport = null
            if (this._worker) {
              this._worker.destroy()
              this._worker = null
            }
          }
        }
        exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask
        var _docId = { writable: !0, value: 0 }
        class PDFDataRangeTransport {
          constructor(t, e) {
            const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            this.length = t
            this.initialData = e
            this.progressiveDone = i
            this.contentDispositionFilename = r
            this._rangeListeners = []
            this._progressListeners = []
            this._progressiveReadListeners = []
            this._progressiveDoneListeners = []
            this._readyCapability = (0, _util.createPromiseCapability)()
          }

          addRangeListener(t) {
            this._rangeListeners.push(t)
          }

          addProgressListener(t) {
            this._progressListeners.push(t)
          }

          addProgressiveReadListener(t) {
            this._progressiveReadListeners.push(t)
          }

          addProgressiveDoneListener(t) {
            this._progressiveDoneListeners.push(t)
          }

          onDataRange(t, e) {
            for (const i of this._rangeListeners) i(t, e)
          }

          onDataProgress(t, e) {
            this._readyCapability.promise.then(() => {
              for (const i of this._progressListeners) i(t, e)
            })
          }

          onDataProgressiveRead(t) {
            this._readyCapability.promise.then(() => {
              for (const e of this._progressiveReadListeners) e(t)
            })
          }

          onDataProgressiveDone() {
            this._readyCapability.promise.then(() => {
              for (const t of this._progressiveDoneListeners) t()
            })
          }

          transportReady() {
            this._readyCapability.resolve()
          }

          requestDataRange(t, e) {
            ;(0, _util.unreachable)('Abstract method PDFDataRangeTransport.requestDataRange')
          }

          abort() {}
        }
        exports.PDFDataRangeTransport = PDFDataRangeTransport
        class PDFDocumentProxy {
          constructor(t, e) {
            this._pdfInfo = t
            this._transport = e
            Object.defineProperty(this, 'fingerprint', {
              get() {
                ;(0, _display_utils.deprecated)(
                  '`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead.'
                )
                return this.fingerprints[0]
              }
            })
            Object.defineProperty(this, 'getStats', {
              value: async () => {
                ;(0, _display_utils.deprecated)(
                  '`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead.'
                )
                return this.stats || { streamTypes: {}, fontTypes: {} }
              }
            })
          }

          get annotationStorage() {
            return this._transport.annotationStorage
          }

          get numPages() {
            return this._pdfInfo.numPages
          }

          get fingerprints() {
            return this._pdfInfo.fingerprints
          }

          get stats() {
            return this._transport.stats
          }

          get isPureXfa() {
            return !!this._transport._htmlForXfa
          }

          get allXfaHtml() {
            return this._transport._htmlForXfa
          }

          getPage(t) {
            return this._transport.getPage(t)
          }

          getPageIndex(t) {
            return this._transport.getPageIndex(t)
          }

          getDestinations() {
            return this._transport.getDestinations()
          }

          getDestination(t) {
            return this._transport.getDestination(t)
          }

          getPageLabels() {
            return this._transport.getPageLabels()
          }

          getPageLayout() {
            return this._transport.getPageLayout()
          }

          getPageMode() {
            return this._transport.getPageMode()
          }

          getViewerPreferences() {
            return this._transport.getViewerPreferences()
          }

          getOpenAction() {
            return this._transport.getOpenAction()
          }

          getAttachments() {
            return this._transport.getAttachments()
          }

          getJavaScript() {
            return this._transport.getJavaScript()
          }

          getJSActions() {
            return this._transport.getDocJSActions()
          }

          getOutline() {
            return this._transport.getOutline()
          }

          getOptionalContentConfig() {
            return this._transport.getOptionalContentConfig()
          }

          getPermissions() {
            return this._transport.getPermissions()
          }

          getMetadata() {
            return this._transport.getMetadata()
          }

          getMarkInfo() {
            return this._transport.getMarkInfo()
          }

          getData() {
            return this._transport.getData()
          }

          getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise
          }

          cleanup() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return this._transport.startCleanup(t || this.isPureXfa)
          }

          destroy() {
            return this.loadingTask.destroy()
          }

          get loadingParams() {
            return this._transport.loadingParams
          }

          get loadingTask() {
            return this._transport.loadingTask
          }

          saveDocument() {
            this._transport.annotationStorage.size <= 0 &&
              (0, _display_utils.deprecated)(
                'saveDocument called while `annotationStorage` is empty, please use the getData-method instead.'
              )
            return this._transport.saveDocument()
          }

          getFieldObjects() {
            return this._transport.getFieldObjects()
          }

          hasJSActions() {
            return this._transport.hasJSActions()
          }

          getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds()
          }
        }
        exports.PDFDocumentProxy = PDFDocumentProxy
        class PDFPageProxy {
          constructor(t, e, i, r) {
            const s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
            this._pageIndex = t
            this._pageInfo = e
            this._ownerDocument = r
            this._transport = i
            this._stats = s ? new _display_utils.StatTimer() : null
            this._pdfBug = s
            this.commonObjs = i.commonObjs
            this.objs = new PDFObjects()
            this._bitmaps = new Set()
            this.cleanupAfterRender = !1
            this.pendingCleanup = !1
            this._intentStates = new Map()
            this._annotationPromises = new Map()
            this.destroyed = !1
          }

          get pageNumber() {
            return this._pageIndex + 1
          }

          get rotate() {
            return this._pageInfo.rotate
          }

          get ref() {
            return this._pageInfo.ref
          }

          get userUnit() {
            return this._pageInfo.userUnit
          }

          get view() {
            return this._pageInfo.view
          }

          getViewport() {
            const {
              scale: t,
              rotation: e = this.rotate,
              offsetX: i = 0,
              offsetY: r = 0,
              dontFlip: s = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return new _display_utils.PageViewport({
              viewBox: this.view,
              scale: t,
              rotation: e,
              offsetX: i,
              offsetY: r,
              dontFlip: s
            })
          }

          getAnnotations() {
            const { intent: t = 'display' } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            const e = this._transport.getRenderingIntent(t)
            let i = this._annotationPromises.get(e.cacheKey)
            if (!i) {
              i = this._transport.getAnnotations(this._pageIndex, e.renderingIntent)
              this._annotationPromises.set(e.cacheKey, i)
              i = i.then((t) => {
                for (const e of t) {
                  void 0 !== e.titleObj &&
                    Object.defineProperty(e, 'title', {
                      get() {
                        ;(0, _display_utils.deprecated)(
                          '`title`-property on annotation, please use `titleObj` instead.'
                        )
                        return e.titleObj.str
                      }
                    })
                  void 0 !== e.contentsObj &&
                    Object.defineProperty(e, 'contents', {
                      get() {
                        ;(0, _display_utils.deprecated)(
                          '`contents`-property on annotation, please use `contentsObj` instead.'
                        )
                        return e.contentsObj.str
                      }
                    })
                }
                return t
              })
            }
            return i
          }

          getJSActions() {
            return (
              this._jsActionsPromise ||
              (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex))
            )
          }

          async getXfa() {
            let t
            return (
              ((t = this._transport._htmlForXfa) === null || void 0 === t
                ? void 0
                : t.children[this._pageIndex]) || null
            )
          }

          render(t) {
            let e
            let i
            let r
            let {
              canvasContext: s,
              viewport: a,
              intent: n = 'display',
              annotationMode: o = _util.AnnotationMode.ENABLE,
              transform: l = null,
              imageLayer: c = null,
              canvasFactory: d = null,
              background: h = null,
              optionalContentConfigPromise: u = null,
              annotationCanvasMap: p = null,
              pageColors: f = null,
              printAnnotationStorage: g = null
            } = t
            if (
              void 0 !==
              ((e = arguments[0]) === null || void 0 === e ? void 0 : e.renderInteractiveForms)
            ) {
              ;(0, _display_utils.deprecated)(
                'render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead.'
              )
              !0 === arguments[0].renderInteractiveForms &&
                o === _util.AnnotationMode.ENABLE &&
                (o = _util.AnnotationMode.ENABLE_FORMS)
            }
            if (
              void 0 !==
              ((i = arguments[0]) === null || void 0 === i ? void 0 : i.includeAnnotationStorage)
            ) {
              ;(0, _display_utils.deprecated)(
                'render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead.'
              )
              !0 === arguments[0].includeAnnotationStorage &&
                o === _util.AnnotationMode.ENABLE &&
                (o = _util.AnnotationMode.ENABLE_STORAGE)
            }
            this._stats && this._stats.time('Overall')
            const m = this._transport.getRenderingIntent(n, o, g)
            this.pendingCleanup = !1
            u || (u = this._transport.getOptionalContentConfig())
            let v = this._intentStates.get(m.cacheKey)
            if (!v) {
              v = Object.create(null)
              this._intentStates.set(m.cacheKey, v)
            }
            if (v.streamReaderCancelTimeout) {
              clearTimeout(v.streamReaderCancelTimeout)
              v.streamReaderCancelTimeout = null
            }
            const _ = d || new DefaultCanvasFactory({ ownerDocument: this._ownerDocument })
            const b = !!(m.renderingIntent & _util.RenderingIntentFlag.PRINT)
            if (!v.displayReadyCapability) {
              v.displayReadyCapability = (0, _util.createPromiseCapability)()
              v.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }
              this._stats && this._stats.time('Page Request')
              this._pumpOperatorList(m)
            }
            const complete = (t) => {
              v.renderTasks.delete(y)
              ;(this.cleanupAfterRender || b) && (this.pendingCleanup = !0)
              this._tryCleanup()
              if (t) {
                y.capability.reject(t)
                this._abortOperatorList({
                  intentState: v,
                  reason: t instanceof Error ? t : new Error(t)
                })
              } else y.capability.resolve()
              if (this._stats) {
                this._stats.timeEnd('Rendering')
                this._stats.timeEnd('Overall')
              }
            }
            const y = new InternalRenderTask({
              callback: complete,
              params: {
                canvasContext: s,
                viewport: a,
                transform: l,
                imageLayer: c,
                background: h
              },
              objs: this.objs,
              commonObjs: this.commonObjs,
              annotationCanvasMap: p,
              operatorList: v.operatorList,
              pageIndex: this._pageIndex,
              canvasFactory: _,
              useRequestAnimationFrame: !b,
              pdfBug: this._pdfBug,
              pageColors: f
            })
            ;((r = v).renderTasks || (r.renderTasks = new Set())).add(y)
            const A = y.task
            Promise.all([v.displayReadyCapability.promise, u])
              .then((t) => {
                const [e, i] = t
                if (this.pendingCleanup) complete()
                else {
                  this._stats && this._stats.time('Rendering')
                  y.initializeGraphics({ transparency: e, optionalContentConfig: i })
                  y.operatorListChanged()
                }
              })
              .catch(complete)
            return A
          }

          getOperatorList() {
            const {
              intent: t = 'display',
              annotationMode: e = _util.AnnotationMode.ENABLE,
              printAnnotationStorage: i = null
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            const r = this._transport.getRenderingIntent(t, e, i, !0)
            let s
            let a = this._intentStates.get(r.cacheKey)
            if (!a) {
              a = Object.create(null)
              this._intentStates.set(r.cacheKey, a)
            }
            if (!a.opListReadCapability) {
              let n
              s = Object.create(null)
              s.operatorListChanged = function operatorListChanged() {
                if (a.operatorList.lastChunk) {
                  a.opListReadCapability.resolve(a.operatorList)
                  a.renderTasks.delete(s)
                }
              }
              a.opListReadCapability = (0, _util.createPromiseCapability)()
              ;((n = a).renderTasks || (n.renderTasks = new Set())).add(s)
              a.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }
              this._stats && this._stats.time('Page Request')
              this._pumpOperatorList(r)
            }
            return a.opListReadCapability.promise
          }

          streamTextContent() {
            const { disableCombineTextItems: t = !1, includeMarkedContent: e = !1 } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return this._transport.messageHandler.sendWithStream(
              'GetTextContent',
              {
                pageIndex: this._pageIndex,
                combineTextItems: !0 !== t,
                includeMarkedContent: !0 === e
              },
              { highWaterMark: 100, size: (t) => t.items.length }
            )
          }

          getTextContent() {
            const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            if (this._transport._htmlForXfa)
              return this.getXfa().then((t) => _xfa_text.XfaText.textContent(t))
            const e = this.streamTextContent(t)
            return new Promise(function (t, i) {
              const r = e.getReader()
              const s = { items: [], styles: Object.create(null) }
              !(function pump() {
                r.read().then(function (e) {
                  const { value: i, done: r } = e
                  if (r) t(s)
                  else {
                    Object.assign(s.styles, i.styles)
                    s.items.push(...i.items)
                    pump()
                  }
                }, i)
              })()
            })
          }

          getStructTree() {
            return (
              this._structTreePromise ||
              (this._structTreePromise = this._transport.getStructTree(this._pageIndex))
            )
          }

          _destroy() {
            this.destroyed = !0
            const t = []
            for (const e of this._intentStates.values()) {
              this._abortOperatorList({
                intentState: e,
                reason: new Error('Page was destroyed.'),
                force: !0
              })
              if (!e.opListReadCapability)
                for (const i of e.renderTasks) {
                  t.push(i.completed)
                  i.cancel()
                }
            }
            this.objs.clear()
            for (const t of this._bitmaps) t.close()
            this._bitmaps.clear()
            this._annotationPromises.clear()
            this._jsActionsPromise = null
            this._structTreePromise = null
            this.pendingCleanup = !1
            return Promise.all(t)
          }

          cleanup() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            this.pendingCleanup = !0
            return this._tryCleanup(t)
          }

          _tryCleanup() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            if (!this.pendingCleanup) return !1
            for (const { renderTasks: t, operatorList: e } of this._intentStates.values())
              if (t.size > 0 || !e.lastChunk) return !1
            this._intentStates.clear()
            this.objs.clear()
            this._annotationPromises.clear()
            this._jsActionsPromise = null
            this._structTreePromise = null
            t && this._stats && (this._stats = new _display_utils.StatTimer())
            for (const t of this._bitmaps) t.close()
            this._bitmaps.clear()
            this.pendingCleanup = !1
            return !0
          }

          _startRenderPage(t, e) {
            const i = this._intentStates.get(e)
            if (i) {
              this._stats && this._stats.timeEnd('Page Request')
              i.displayReadyCapability && i.displayReadyCapability.resolve(t)
            }
          }

          _renderPageChunk(t, e) {
            for (let i = 0, r = t.length; i < r; i++) {
              e.operatorList.fnArray.push(t.fnArray[i])
              e.operatorList.argsArray.push(t.argsArray[i])
            }
            e.operatorList.lastChunk = t.lastChunk
            e.operatorList.separateAnnots = t.separateAnnots
            for (const t of e.renderTasks) t.operatorListChanged()
            t.lastChunk && this._tryCleanup()
          }

          _pumpOperatorList(t) {
            const { renderingIntent: e, cacheKey: i, annotationStorageMap: r } = t
            const s = this._transport.messageHandler
              .sendWithStream('GetOperatorList', {
                pageIndex: this._pageIndex,
                intent: e,
                cacheKey: i,
                annotationStorage: r
              })
              .getReader()
            const a = this._intentStates.get(i)
            a.streamReader = s
            const pump = () => {
              s.read().then(
                (t) => {
                  const { value: e, done: i } = t
                  if (i) a.streamReader = null
                  else if (!this._transport.destroyed) {
                    this._renderPageChunk(e, a)
                    pump()
                  }
                },
                (t) => {
                  a.streamReader = null
                  if (!this._transport.destroyed) {
                    if (a.operatorList) {
                      a.operatorList.lastChunk = !0
                      for (const t of a.renderTasks) t.operatorListChanged()
                      this._tryCleanup()
                    }
                    if (a.displayReadyCapability) a.displayReadyCapability.reject(t)
                    else {
                      if (!a.opListReadCapability) throw t
                      a.opListReadCapability.reject(t)
                    }
                  }
                }
              )
            }
            pump()
          }

          _abortOperatorList(t) {
            const { intentState: e, reason: i, force: r = !1 } = t
            if (e.streamReader) {
              if (!r) {
                if (e.renderTasks.size > 0) return
                if (i instanceof _display_utils.RenderingCancelledException) {
                  e.streamReaderCancelTimeout = setTimeout(() => {
                    this._abortOperatorList({ intentState: e, reason: i, force: !0 })
                    e.streamReaderCancelTimeout = null
                  }, RENDERING_CANCELLED_TIMEOUT)
                  return
                }
              }
              e.streamReader.cancel(new _util.AbortException(i.message)).catch(() => {})
              e.streamReader = null
              if (!this._transport.destroyed) {
                for (const [t, i] of this._intentStates)
                  if (i === e) {
                    this._intentStates.delete(t)
                    break
                  }
                this.cleanup()
              }
            }
          }

          get stats() {
            return this._stats
          }
        }
        exports.PDFPageProxy = PDFPageProxy
        class LoopbackPort {
          constructor() {
            this._listeners = []
            this._deferred = Promise.resolve()
          }

          postMessage(t, e) {
            const i = { data: structuredClone(t, e) }
            this._deferred.then(() => {
              for (const t of this._listeners) t.call(this, i)
            })
          }

          addEventListener(t, e) {
            this._listeners.push(e)
          }

          removeEventListener(t, e) {
            const i = this._listeners.indexOf(e)
            this._listeners.splice(i, 1)
          }

          terminate() {
            this._listeners.length = 0
          }
        }
        exports.LoopbackPort = LoopbackPort
        const PDFWorkerUtil = { isWorkerDisabled: !1, fallbackWorkerSrc: null, fakeWorkerId: 0 }
        exports.PDFWorkerUtil = PDFWorkerUtil
        if (_is_node.isNodeJS && typeof require === 'function') {
          PDFWorkerUtil.isWorkerDisabled = !0
          PDFWorkerUtil.fallbackWorkerSrc = './pdf.worker.js'
        } else if (typeof document === 'object') {
          let _document
          let _document$currentScri
          const t =
            (_document = document) === null ||
            void 0 === _document ||
            (_document$currentScri = _document.currentScript) === null ||
            void 0 === _document$currentScri
              ? void 0
              : _document$currentScri.src
          t &&
            (PDFWorkerUtil.fallbackWorkerSrc = t.replace(
              /(\.(?:min\.)?js)(\?.*)?$/i,
              '.worker$1$2'
            ))
        }
        PDFWorkerUtil.isSameOrigin = function (t, e) {
          let i
          try {
            i = new URL(t)
            if (!i.origin || i.origin === 'null') return !1
          } catch (t) {
            return !1
          }
          const r = new URL(e, i)
          return i.origin === r.origin
        }
        PDFWorkerUtil.createCDNWrapper = function (t) {
          const e = `importScripts("${t}");`
          return URL.createObjectURL(new Blob([e]))
        }
        class PDFWorker {
          constructor() {
            const {
              name: t = null,
              port: e = null,
              verbosity: i = (0, _util.getVerbosityLevel)()
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            if (e && _classStaticPrivateFieldSpecGet(PDFWorker, PDFWorker, _workerPorts).has(e))
              throw new Error('Cannot use more than one PDFWorker per port.')
            this.name = t
            this.destroyed = !1
            this.verbosity = i
            this._readyCapability = (0, _util.createPromiseCapability)()
            this._port = null
            this._webWorker = null
            this._messageHandler = null
            if (e) {
              _classStaticPrivateFieldSpecGet(PDFWorker, PDFWorker, _workerPorts).set(e, this)
              this._initializeFromPort(e)
            } else this._initialize()
          }

          get promise() {
            return this._readyCapability.promise
          }

          get port() {
            return this._port
          }

          get messageHandler() {
            return this._messageHandler
          }

          _initializeFromPort(t) {
            this._port = t
            this._messageHandler = new _message_handler.MessageHandler('main', 'worker', t)
            this._messageHandler.on('ready', function () {})
            this._readyCapability.resolve()
          }

          _initialize() {
            if (!PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
              let { workerSrc: t } = PDFWorker
              try {
                PDFWorkerUtil.isSameOrigin(window.location.href, t) ||
                  (t = PDFWorkerUtil.createCDNWrapper(new URL(t, window.location).href))
                const e = new Worker(t)
                const i = new _message_handler.MessageHandler('main', 'worker', e)
                const terminateEarly = () => {
                  e.removeEventListener('error', onWorkerError)
                  i.destroy()
                  e.terminate()
                  this.destroyed
                    ? this._readyCapability.reject(new Error('Worker was destroyed'))
                    : this._setupFakeWorker()
                }
                const onWorkerError = () => {
                  this._webWorker || terminateEarly()
                }
                e.addEventListener('error', onWorkerError)
                i.on('test', (t) => {
                  e.removeEventListener('error', onWorkerError)
                  if (this.destroyed) terminateEarly()
                  else if (t) {
                    this._messageHandler = i
                    this._port = e
                    this._webWorker = e
                    this._readyCapability.resolve()
                    i.send('configure', { verbosity: this.verbosity })
                  } else {
                    this._setupFakeWorker()
                    i.destroy()
                    e.terminate()
                  }
                })
                i.on('ready', (t) => {
                  e.removeEventListener('error', onWorkerError)
                  if (this.destroyed) terminateEarly()
                  else
                    try {
                      sendTest()
                    } catch (t) {
                      this._setupFakeWorker()
                    }
                })
                const sendTest = () => {
                  const t = new Uint8Array()
                  i.send('test', t, [t.buffer])
                }
                sendTest()
                return
              } catch (t) {
                ;(0, _util.info)('The worker has been disabled.')
              }
            }
            this._setupFakeWorker()
          }

          _setupFakeWorker() {
            if (!PDFWorkerUtil.isWorkerDisabled) {
              ;(0, _util.warn)('Setting up fake worker.')
              PDFWorkerUtil.isWorkerDisabled = !0
            }
            PDFWorker._setupFakeWorkerGlobal
              .then((t) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error('Worker was destroyed'))
                  return
                }
                const e = new LoopbackPort()
                this._port = e
                const i = `fake${PDFWorkerUtil.fakeWorkerId++}`
                const r = new _message_handler.MessageHandler(`${i}_worker`, i, e)
                t.setup(r, e)
                const s = new _message_handler.MessageHandler(i, `${i}_worker`, e)
                this._messageHandler = s
                this._readyCapability.resolve()
                s.send('configure', { verbosity: this.verbosity })
              })
              .catch((t) => {
                this._readyCapability.reject(
                  new Error(`Setting up fake worker failed: "${t.message}".`)
                )
              })
          }

          destroy() {
            this.destroyed = !0
            if (this._webWorker) {
              this._webWorker.terminate()
              this._webWorker = null
            }
            _classStaticPrivateFieldSpecGet(PDFWorker, PDFWorker, _workerPorts).delete(this._port)
            this._port = null
            if (this._messageHandler) {
              this._messageHandler.destroy()
              this._messageHandler = null
            }
          }

          static fromPort(t) {
            if (t == null || !t.port)
              throw new Error('PDFWorker.fromPort - invalid method signature.')
            return _classStaticPrivateFieldSpecGet(this, PDFWorker, _workerPorts).has(t.port)
              ? _classStaticPrivateFieldSpecGet(this, PDFWorker, _workerPorts).get(t.port)
              : new PDFWorker(t)
          }

          static get workerSrc() {
            if (_worker_options.GlobalWorkerOptions.workerSrc)
              return _worker_options.GlobalWorkerOptions.workerSrc
            if (PDFWorkerUtil.fallbackWorkerSrc !== null) {
              _is_node.isNodeJS ||
                (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.')
              return PDFWorkerUtil.fallbackWorkerSrc
            }
            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')
          }

          static get _mainThreadWorkerMessageHandler() {
            try {
              let t
              return (
                ((t = globalThis.pdfjsWorker) === null || void 0 === t
                  ? void 0
                  : t.WorkerMessageHandler) || null
              )
            } catch (t) {
              return null
            }
          }

          static get _setupFakeWorkerGlobal() {
            const loader = async () => {
              const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler
              if (mainWorkerMessageHandler) return mainWorkerMessageHandler
              if (_is_node.isNodeJS && typeof require === 'function') {
                const worker = eval('require')(this.workerSrc)
                return worker.WorkerMessageHandler
              }
              await (0, _display_utils.loadScript)(this.workerSrc)
              return window.pdfjsWorker.WorkerMessageHandler
            }
            return (0, _util.shadow)(this, '_setupFakeWorkerGlobal', loader())
          }
        }
        exports.PDFWorker = PDFWorker
        var _workerPorts = { writable: !0, value: new WeakMap() }
        PDFWorker.getWorkerSrc = function () {
          ;(0, _display_utils.deprecated)(
            '`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead.'
          )
          return this.workerSrc
        }
        const _docStats = new WeakMap()
        const _pageCache = new WeakMap()
        const _pagePromises = new WeakMap()
        const _metadataPromise = new WeakMap()
        class WorkerTransport {
          constructor(t, e, i, r) {
            _classPrivateFieldInitSpec(this, _docStats, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, _pageCache, { writable: !0, value: new Map() })
            _classPrivateFieldInitSpec(this, _pagePromises, { writable: !0, value: new Map() })
            _classPrivateFieldInitSpec(this, _metadataPromise, { writable: !0, value: null })
            this.messageHandler = t
            this.loadingTask = e
            this.commonObjs = new PDFObjects()
            this.fontLoader = new _font_loader.FontLoader({
              docId: e.docId,
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              ownerDocument: r.ownerDocument,
              styleElement: r.styleElement
            })
            this._params = r
            if (!r.useWorkerFetch) {
              this.CMapReaderFactory = new r.CMapReaderFactory({
                baseUrl: r.cMapUrl,
                isCompressed: r.cMapPacked
              })
              this.StandardFontDataFactory = new r.StandardFontDataFactory({
                baseUrl: r.standardFontDataUrl
              })
            }
            this.destroyed = !1
            this.destroyCapability = null
            this._passwordCapability = null
            this._networkStream = i
            this._fullReader = null
            this._lastProgress = null
            this.downloadInfoCapability = (0, _util.createPromiseCapability)()
            this.setupMessageHandler()
          }

          get annotationStorage() {
            return (0, _util.shadow)(
              this,
              'annotationStorage',
              new _annotation_storage.AnnotationStorage()
            )
          }

          get stats() {
            return _classPrivateFieldGet(this, _docStats)
          }

          getRenderingIntent(t) {
            const e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : _util.AnnotationMode.ENABLE
            const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
            const r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
            let s = _util.RenderingIntentFlag.DISPLAY
            let a = null
            switch (t) {
              case 'any':
                s = _util.RenderingIntentFlag.ANY
                break
              case 'display':
                break
              case 'print':
                s = _util.RenderingIntentFlag.PRINT
                break
              default:
                ;(0, _util.warn)(`getRenderingIntent - invalid intent: ${t}`)
            }
            switch (e) {
              case _util.AnnotationMode.DISABLE:
                s += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE
                break
              case _util.AnnotationMode.ENABLE:
                break
              case _util.AnnotationMode.ENABLE_FORMS:
                s += _util.RenderingIntentFlag.ANNOTATIONS_FORMS
                break
              case _util.AnnotationMode.ENABLE_STORAGE:
                s += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE
                a = (
                  s & _util.RenderingIntentFlag.PRINT &&
                  i instanceof _annotation_storage.PrintAnnotationStorage
                    ? i
                    : this.annotationStorage
                ).serializable
                break
              default:
                ;(0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${e}`)
            }
            r && (s += _util.RenderingIntentFlag.OPLIST)
            return {
              renderingIntent: s,
              cacheKey: `${s}_${_annotation_storage.AnnotationStorage.getHash(a)}`,
              annotationStorageMap: a
            }
          }

          destroy() {
            if (this.destroyCapability) return this.destroyCapability.promise
            this.destroyed = !0
            this.destroyCapability = (0, _util.createPromiseCapability)()
            this._passwordCapability &&
              this._passwordCapability.reject(
                new Error('Worker was destroyed during onPassword callback')
              )
            const t = []
            for (const e of _classPrivateFieldGet(this, _pageCache).values()) t.push(e._destroy())
            _classPrivateFieldGet(this, _pageCache).clear()
            _classPrivateFieldGet(this, _pagePromises).clear()
            this.hasOwnProperty('annotationStorage') && this.annotationStorage.resetModified()
            const e = this.messageHandler.sendWithPromise('Terminate', null)
            t.push(e)
            Promise.all(t).then(() => {
              this.commonObjs.clear()
              this.fontLoader.clear()
              _classPrivateFieldSet(this, _metadataPromise, null)
              this._getFieldObjectsPromise = null
              this._hasJSActionsPromise = null
              this._networkStream &&
                this._networkStream.cancelAllRequests(
                  new _util.AbortException('Worker was terminated.')
                )
              if (this.messageHandler) {
                this.messageHandler.destroy()
                this.messageHandler = null
              }
              this.destroyCapability.resolve()
            }, this.destroyCapability.reject)
            return this.destroyCapability.promise
          }

          setupMessageHandler() {
            const { messageHandler: t, loadingTask: e } = this
            t.on('GetReader', (t, e) => {
              ;(0, _util.assert)(
                this._networkStream,
                'GetReader - no `IPDFStream` instance available.'
              )
              this._fullReader = this._networkStream.getFullReader()
              this._fullReader.onProgress = (t) => {
                this._lastProgress = { loaded: t.loaded, total: t.total }
              }
              e.onPull = () => {
                this._fullReader
                  .read()
                  .then(function (t) {
                    const { value: i, done: r } = t
                    if (r) e.close()
                    else {
                      ;(0, _util.assert)(
                        (0, _util.isArrayBuffer)(i),
                        'GetReader - expected an ArrayBuffer.'
                      )
                      e.enqueue(new Uint8Array(i), 1, [i])
                    }
                  })
                  .catch((t) => {
                    e.error(t)
                  })
              }
              e.onCancel = (t) => {
                this._fullReader.cancel(t)
                e.ready.catch((t) => {
                  if (!this.destroyed) throw t
                })
              }
            })
            t.on('ReaderHeadersReady', (t) => {
              const i = (0, _util.createPromiseCapability)()
              const r = this._fullReader
              r.headersReady.then(() => {
                if (!r.isStreamingSupported || !r.isRangeSupported) {
                  if (this._lastProgress) {
                    let t
                    ;(t = e.onProgress) === null || void 0 === t || t.call(e, this._lastProgress)
                  }
                  r.onProgress = (t) => {
                    let i
                    ;(i = e.onProgress) === null ||
                      void 0 === i ||
                      i.call(e, { loaded: t.loaded, total: t.total })
                  }
                }
                i.resolve({
                  isStreamingSupported: r.isStreamingSupported,
                  isRangeSupported: r.isRangeSupported,
                  contentLength: r.contentLength
                })
              }, i.reject)
              return i.promise
            })
            t.on('GetRangeReader', (t, e) => {
              ;(0, _util.assert)(
                this._networkStream,
                'GetRangeReader - no `IPDFStream` instance available.'
              )
              const i = this._networkStream.getRangeReader(t.begin, t.end)
              if (i) {
                e.onPull = () => {
                  i.read()
                    .then(function (t) {
                      const { value: i, done: r } = t
                      if (r) e.close()
                      else {
                        ;(0, _util.assert)(
                          (0, _util.isArrayBuffer)(i),
                          'GetRangeReader - expected an ArrayBuffer.'
                        )
                        e.enqueue(new Uint8Array(i), 1, [i])
                      }
                    })
                    .catch((t) => {
                      e.error(t)
                    })
                }
                e.onCancel = (t) => {
                  i.cancel(t)
                  e.ready.catch((t) => {
                    if (!this.destroyed) throw t
                  })
                }
              } else e.close()
            })
            t.on('GetDoc', (t) => {
              const { pdfInfo: i } = t
              this._numPages = i.numPages
              this._htmlForXfa = i.htmlForXfa
              delete i.htmlForXfa
              e._capability.resolve(new PDFDocumentProxy(i, this))
            })
            t.on('DocException', function (t) {
              let i
              switch (t.name) {
                case 'PasswordException':
                  i = new _util.PasswordException(t.message, t.code)
                  break
                case 'InvalidPDFException':
                  i = new _util.InvalidPDFException(t.message)
                  break
                case 'MissingPDFException':
                  i = new _util.MissingPDFException(t.message)
                  break
                case 'UnexpectedResponseException':
                  i = new _util.UnexpectedResponseException(t.message, t.status)
                  break
                case 'UnknownErrorException':
                  i = new _util.UnknownErrorException(t.message, t.details)
                  break
                default:
                  ;(0, _util.unreachable)('DocException - expected a valid Error.')
              }
              e._capability.reject(i)
            })
            t.on('PasswordRequest', (t) => {
              this._passwordCapability = (0, _util.createPromiseCapability)()
              if (e.onPassword) {
                const updatePassword = (t) => {
                  t instanceof Error
                    ? this._passwordCapability.reject(t)
                    : this._passwordCapability.resolve({ password: t })
                }
                try {
                  e.onPassword(updatePassword, t.code)
                } catch (t) {
                  this._passwordCapability.reject(t)
                }
              } else this._passwordCapability.reject(new _util.PasswordException(t.message, t.code))
              return this._passwordCapability.promise
            })
            t.on('DataLoaded', (t) => {
              let i
              ;(i = e.onProgress) === null ||
                void 0 === i ||
                i.call(e, { loaded: t.length, total: t.length })
              this.downloadInfoCapability.resolve(t)
            })
            t.on('StartRenderPage', (t) => {
              if (this.destroyed) return
              _classPrivateFieldGet(this, _pageCache)
                .get(t.pageIndex)
                ._startRenderPage(t.transparency, t.cacheKey)
            })
            t.on('commonobj', (e) => {
              let i
              const [r, s, a] = e
              if (!this.destroyed && !this.commonObjs.has(r))
                switch (s) {
                  case 'Font':
                    const e = this._params
                    if ('error' in a) {
                      const t = a.error
                      ;(0, _util.warn)(`Error during font loading: ${t}`)
                      this.commonObjs.resolve(r, t)
                      break
                    }
                    let n = null
                    e.pdfBug &&
                      (i = globalThis.FontInspector) !== null &&
                      void 0 !== i &&
                      i.enabled &&
                      (n = {
                        registerFont(t, e) {
                          globalThis.FontInspector.fontAdded(t, e)
                        }
                      })
                    const o = new _font_loader.FontFaceObject(a, {
                      isEvalSupported: e.isEvalSupported,
                      disableFontFace: e.disableFontFace,
                      ignoreErrors: e.ignoreErrors,
                      onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                      fontRegistry: n
                    })
                    this.fontLoader
                      .bind(o)
                      .catch((e) => t.sendWithPromise('FontFallback', { id: r }))
                      .finally(() => {
                        !e.fontExtraProperties && o.data && (o.data = null)
                        this.commonObjs.resolve(r, o)
                      })
                    break
                  case 'FontPath':
                  case 'Image':
                    this.commonObjs.resolve(r, a)
                    break
                  default:
                    throw new Error(`Got unknown common object type ${s}`)
                }
            })
            t.on('obj', (t) => {
              const [e, i, r, s] = t
              if (this.destroyed) return
              const a = _classPrivateFieldGet(this, _pageCache).get(i)
              if (!a.objs.has(e))
                switch (r) {
                  case 'Image':
                    a.objs.resolve(e, s)
                    const t = 8e6
                    if (s) {
                      let e
                      if (s.bitmap) {
                        const { bitmap: t, width: i, height: r } = s
                        e = i * r * 4
                        a._bitmaps.add(t)
                      } else {
                        let n
                        e = ((n = s.data) === null || void 0 === n ? void 0 : n.length) || 0
                      }
                      e > t && (a.cleanupAfterRender = !0)
                    }
                    break
                  case 'Pattern':
                    a.objs.resolve(e, s)
                    break
                  default:
                    throw new Error(`Got unknown object type ${r}`)
                }
            })
            t.on('DocProgress', (t) => {
              let i
              this.destroyed ||
                (i = e.onProgress) === null ||
                void 0 === i ||
                i.call(e, { loaded: t.loaded, total: t.total })
            })
            t.on('DocStats', (t) => {
              this.destroyed ||
                _classPrivateFieldSet(
                  this,
                  _docStats,
                  Object.freeze({
                    streamTypes: Object.freeze(t.streamTypes),
                    fontTypes: Object.freeze(t.fontTypes)
                  })
                )
            })
            t.on('UnsupportedFeature', this._onUnsupportedFeature.bind(this))
            t.on('FetchBuiltInCMap', (t) =>
              this.destroyed
                ? Promise.reject(new Error('Worker was destroyed.'))
                : this.CMapReaderFactory
                ? this.CMapReaderFactory.fetch(t)
                : Promise.reject(
                    new Error(
                      'CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.'
                    )
                  )
            )
            t.on('FetchStandardFontData', (t) =>
              this.destroyed
                ? Promise.reject(new Error('Worker was destroyed.'))
                : this.StandardFontDataFactory
                ? this.StandardFontDataFactory.fetch(t)
                : Promise.reject(
                    new Error(
                      'StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.'
                    )
                  )
            )
          }

          _onUnsupportedFeature(t) {
            let e
            let i
            const { featureId: r } = t
            this.destroyed ||
              (e = (i = this.loadingTask).onUnsupportedFeature) === null ||
              void 0 === e ||
              e.call(i, r)
          }

          getData() {
            return this.messageHandler.sendWithPromise('GetData', null)
          }

          getPage(t) {
            if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
              return Promise.reject(new Error('Invalid page request.'))
            const e = t - 1
            const i = _classPrivateFieldGet(this, _pagePromises).get(e)
            if (i) return i
            const r = this.messageHandler.sendWithPromise('GetPage', { pageIndex: e }).then((t) => {
              if (this.destroyed) throw new Error('Transport destroyed')
              const i = new PDFPageProxy(
                e,
                t,
                this,
                this._params.ownerDocument,
                this._params.pdfBug
              )
              _classPrivateFieldGet(this, _pageCache).set(e, i)
              return i
            })
            _classPrivateFieldGet(this, _pagePromises).set(e, r)
            return r
          }

          getPageIndex(t) {
            return typeof t !== 'object' ||
              t === null ||
              !Number.isInteger(t.num) ||
              t.num < 0 ||
              !Number.isInteger(t.gen) ||
              t.gen < 0
              ? Promise.reject(new Error('Invalid pageIndex request.'))
              : this.messageHandler.sendWithPromise('GetPageIndex', { num: t.num, gen: t.gen })
          }

          getAnnotations(t, e) {
            return this.messageHandler.sendWithPromise('GetAnnotations', {
              pageIndex: t,
              intent: e
            })
          }

          saveDocument() {
            let t
            let e
            return this.messageHandler
              .sendWithPromise('SaveDocument', {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: this.annotationStorage.serializable,
                filename:
                  (t = (e = this._fullReader) === null || void 0 === e ? void 0 : e.filename) !==
                    null && void 0 !== t
                    ? t
                    : null
              })
              .finally(() => {
                this.annotationStorage.resetModified()
              })
          }

          getFieldObjects() {
            return (
              this._getFieldObjectsPromise ||
              (this._getFieldObjectsPromise = this.messageHandler.sendWithPromise(
                'GetFieldObjects',
                null
              ))
            )
          }

          hasJSActions() {
            return (
              this._hasJSActionsPromise ||
              (this._hasJSActionsPromise = this.messageHandler.sendWithPromise(
                'HasJSActions',
                null
              ))
            )
          }

          getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise('GetCalculationOrderIds', null)
          }

          getDestinations() {
            return this.messageHandler.sendWithPromise('GetDestinations', null)
          }

          getDestination(t) {
            return typeof t !== 'string'
              ? Promise.reject(new Error('Invalid destination request.'))
              : this.messageHandler.sendWithPromise('GetDestination', { id: t })
          }

          getPageLabels() {
            return this.messageHandler.sendWithPromise('GetPageLabels', null)
          }

          getPageLayout() {
            return this.messageHandler.sendWithPromise('GetPageLayout', null)
          }

          getPageMode() {
            return this.messageHandler.sendWithPromise('GetPageMode', null)
          }

          getViewerPreferences() {
            return this.messageHandler.sendWithPromise('GetViewerPreferences', null)
          }

          getOpenAction() {
            return this.messageHandler.sendWithPromise('GetOpenAction', null)
          }

          getAttachments() {
            return this.messageHandler.sendWithPromise('GetAttachments', null)
          }

          getJavaScript() {
            return this.messageHandler.sendWithPromise('GetJavaScript', null)
          }

          getDocJSActions() {
            return this.messageHandler.sendWithPromise('GetDocJSActions', null)
          }

          getPageJSActions(t) {
            return this.messageHandler.sendWithPromise('GetPageJSActions', { pageIndex: t })
          }

          getStructTree(t) {
            return this.messageHandler.sendWithPromise('GetStructTree', { pageIndex: t })
          }

          getOutline() {
            return this.messageHandler.sendWithPromise('GetOutline', null)
          }

          getOptionalContentConfig() {
            return this.messageHandler
              .sendWithPromise('GetOptionalContentConfig', null)
              .then((t) => new _optional_content_config.OptionalContentConfig(t))
          }

          getPermissions() {
            return this.messageHandler.sendWithPromise('GetPermissions', null)
          }

          getMetadata() {
            return (
              _classPrivateFieldGet(this, _metadataPromise) ||
              _classPrivateFieldSet(
                this,
                _metadataPromise,
                this.messageHandler.sendWithPromise('GetMetadata', null).then((t) => {
                  let e
                  let i
                  let r
                  let s
                  return {
                    info: t[0],
                    metadata: t[1] ? new _metadata.Metadata(t[1]) : null,
                    contentDispositionFilename:
                      (e =
                        (i = this._fullReader) === null || void 0 === i ? void 0 : i.filename) !==
                        null && void 0 !== e
                        ? e
                        : null,
                    contentLength:
                      (r =
                        (s = this._fullReader) === null || void 0 === s
                          ? void 0
                          : s.contentLength) !== null && void 0 !== r
                        ? r
                        : null
                  }
                })
              )
            )
          }

          getMarkInfo() {
            return this.messageHandler.sendWithPromise('GetMarkInfo', null)
          }

          async startCleanup() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            await this.messageHandler.sendWithPromise('Cleanup', null)
            if (!this.destroyed) {
              for (const t of _classPrivateFieldGet(this, _pageCache).values()) {
                if (!t.cleanup())
                  throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`)
              }
              this.commonObjs.clear()
              t || this.fontLoader.clear()
              _classPrivateFieldSet(this, _metadataPromise, null)
              this._getFieldObjectsPromise = null
              this._hasJSActionsPromise = null
            }
          }

          get loadingParams() {
            const t = this._params
            return (0, _util.shadow)(this, 'loadingParams', {
              disableAutoFetch: t.disableAutoFetch,
              enableXfa: t.enableXfa
            })
          }
        }
        const _objs = new WeakMap()
        const _ensureObj = new WeakSet()
        class PDFObjects {
          constructor() {
            _classPrivateMethodInitSpec(this, _ensureObj)
            _classPrivateFieldInitSpec(this, _objs, { writable: !0, value: Object.create(null) })
          }

          get(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            if (e) {
              const i = _classPrivateMethodGet(this, _ensureObj, _ensureObj2).call(this, t)
              i.capability.promise.then(() => e(i.data))
              return null
            }
            const i = _classPrivateFieldGet(this, _objs)[t]
            if (i == null || !i.capability.settled)
              throw new Error(`Requesting object that isn't resolved yet ${t}.`)
            return i.data
          }

          has(t) {
            const e = _classPrivateFieldGet(this, _objs)[t]
            return (e == null ? void 0 : e.capability.settled) || !1
          }

          resolve(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            const i = _classPrivateMethodGet(this, _ensureObj, _ensureObj2).call(this, t)
            i.data = e
            i.capability.resolve()
          }

          clear() {
            _classPrivateFieldSet(this, _objs, Object.create(null))
          }
        }
        function _ensureObj2(t) {
          const e = _classPrivateFieldGet(this, _objs)[t]
          return (
            e ||
            (_classPrivateFieldGet(this, _objs)[t] = {
              capability: (0, _util.createPromiseCapability)(),
              data: null
            })
          )
        }
        const _internalRenderTask = new WeakMap()
        class RenderTask {
          constructor(t) {
            _classPrivateFieldInitSpec(this, _internalRenderTask, { writable: !0, value: null })
            _classPrivateFieldSet(this, _internalRenderTask, t)
            this.onContinue = null
          }

          get promise() {
            return _classPrivateFieldGet(this, _internalRenderTask).capability.promise
          }

          cancel() {
            _classPrivateFieldGet(this, _internalRenderTask).cancel()
          }

          get separateAnnots() {
            const { separateAnnots: t } = _classPrivateFieldGet(
              this,
              _internalRenderTask
            ).operatorList
            if (!t) return !1
            const { annotationCanvasMap: e } = _classPrivateFieldGet(this, _internalRenderTask)
            return t.form || (t.canvas && (e == null ? void 0 : e.size) > 0)
          }
        }
        exports.RenderTask = RenderTask
        class InternalRenderTask {
          constructor(t) {
            const {
              callback: e,
              params: i,
              objs: r,
              commonObjs: s,
              annotationCanvasMap: a,
              operatorList: n,
              pageIndex: o,
              canvasFactory: l,
              useRequestAnimationFrame: c = !1,
              pdfBug: d = !1,
              pageColors: h = null
            } = t
            this.callback = e
            this.params = i
            this.objs = r
            this.commonObjs = s
            this.annotationCanvasMap = a
            this.operatorListIdx = null
            this.operatorList = n
            this._pageIndex = o
            this.canvasFactory = l
            this._pdfBug = d
            this.pageColors = h
            this.running = !1
            this.graphicsReadyCallback = null
            this.graphicsReady = !1
            this._useRequestAnimationFrame = !0 === c && typeof window !== 'undefined'
            this.cancelled = !1
            this.capability = (0, _util.createPromiseCapability)()
            this.task = new RenderTask(this)
            this._cancelBound = this.cancel.bind(this)
            this._continueBound = this._continue.bind(this)
            this._scheduleNextBound = this._scheduleNext.bind(this)
            this._nextBound = this._next.bind(this)
            this._canvas = i.canvasContext.canvas
          }

          get completed() {
            return this.capability.promise.catch(function () {})
          }

          initializeGraphics(t) {
            let e
            const { transparency: i = !1, optionalContentConfig: r } = t
            if (this.cancelled) return
            if (this._canvas) {
              if (
                _classStaticPrivateFieldSpecGet(
                  InternalRenderTask,
                  InternalRenderTask,
                  _canvasInUse
                ).has(this._canvas)
              )
                throw new Error(
                  'Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.'
                )
              _classStaticPrivateFieldSpecGet(
                InternalRenderTask,
                InternalRenderTask,
                _canvasInUse
              ).add(this._canvas)
            }
            if (
              this._pdfBug &&
              (e = globalThis.StepperManager) !== null &&
              void 0 !== e &&
              e.enabled
            ) {
              this.stepper = globalThis.StepperManager.create(this._pageIndex)
              this.stepper.init(this.operatorList)
              this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()
            }
            const {
              canvasContext: s,
              viewport: a,
              transform: n,
              imageLayer: o,
              background: l
            } = this.params
            this.gfx = new _canvas.CanvasGraphics(
              s,
              this.commonObjs,
              this.objs,
              this.canvasFactory,
              o,
              r,
              this.annotationCanvasMap,
              this.pageColors
            )
            this.gfx.beginDrawing({ transform: n, viewport: a, transparency: i, background: l })
            this.operatorListIdx = 0
            this.graphicsReady = !0
            this.graphicsReadyCallback && this.graphicsReadyCallback()
          }

          cancel() {
            const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
            this.running = !1
            this.cancelled = !0
            this.gfx && this.gfx.endDrawing()
            this._canvas &&
              _classStaticPrivateFieldSpecGet(
                InternalRenderTask,
                InternalRenderTask,
                _canvasInUse
              ).delete(this._canvas)
            this.callback(
              t ||
                new _display_utils.RenderingCancelledException(
                  `Rendering cancelled, page ${this._pageIndex + 1}`,
                  'canvas'
                )
            )
          }

          operatorListChanged() {
            if (this.graphicsReady) {
              this.stepper && this.stepper.updateOperatorList(this.operatorList)
              this.running || this._continue()
            } else this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound)
          }

          _continue() {
            this.running = !0
            this.cancelled ||
              (this.task.onContinue
                ? this.task.onContinue(this._scheduleNextBound)
                : this._scheduleNext())
          }

          _scheduleNext() {
            this._useRequestAnimationFrame
              ? window.requestAnimationFrame(() => {
                  this._nextBound().catch(this._cancelBound)
                })
              : Promise.resolve().then(this._nextBound).catch(this._cancelBound)
          }

          async _next() {
            if (!this.cancelled) {
              this.operatorListIdx = this.gfx.executeOperatorList(
                this.operatorList,
                this.operatorListIdx,
                this._continueBound,
                this.stepper
              )
              if (this.operatorListIdx === this.operatorList.argsArray.length) {
                this.running = !1
                if (this.operatorList.lastChunk) {
                  this.gfx.endDrawing()
                  this._canvas &&
                    _classStaticPrivateFieldSpecGet(
                      InternalRenderTask,
                      InternalRenderTask,
                      _canvasInUse
                    ).delete(this._canvas)
                  this.callback()
                }
              }
            }
          }
        }
        var _canvasInUse = { writable: !0, value: new WeakSet() }
        const version = '2.16.0'
        exports.version = version
        const build = 'a5460d6'
        exports.build = build
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.PrintAnnotationStorage = e.AnnotationStorage = void 0
        const r = i(1)
        const s = i(131)
        const a = i(135)
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        const n = new WeakSet()
        class AnnotationStorage {
          constructor() {
            !(function _classPrivateMethodInitSpec(t, e) {
              _checkPrivateRedeclaration(t, e)
              e.add(t)
            })(this, n)
            this._storage = new Map()
            this._modified = !1
            this.onSetModified = null
            this.onResetModified = null
            this.onAnnotationEditor = null
          }

          getValue(t, e) {
            const i = this._storage.get(t)
            return void 0 === i ? e : Object.assign(e, i)
          }

          getRawValue(t) {
            return this._storage.get(t)
          }

          remove(t) {
            this._storage.delete(t)
            this._storage.size === 0 && this.resetModified()
            if (typeof this.onAnnotationEditor === 'function') {
              for (const t of this._storage.values()) if (t instanceof s.AnnotationEditor) return
              this.onAnnotationEditor(null)
            }
          }

          setValue(t, e) {
            const i = this._storage.get(t)
            let r = !1
            if (void 0 !== i) {
              for (const [t, s] of Object.entries(e))
                if (i[t] !== s) {
                  r = !0
                  i[t] = s
                }
            } else {
              r = !0
              this._storage.set(t, e)
            }
            r &&
              (function _classPrivateMethodGet(t, e, i) {
                if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                return i
              })(this, n, _setModified2).call(this)
            e instanceof s.AnnotationEditor &&
              typeof this.onAnnotationEditor === 'function' &&
              this.onAnnotationEditor(e.constructor._type)
          }

          has(t) {
            return this._storage.has(t)
          }

          getAll() {
            return this._storage.size > 0 ? (0, r.objectFromMap)(this._storage) : null
          }

          get size() {
            return this._storage.size
          }

          resetModified() {
            if (this._modified) {
              this._modified = !1
              typeof this.onResetModified === 'function' && this.onResetModified()
            }
          }

          get print() {
            return new PrintAnnotationStorage(this)
          }

          get serializable() {
            if (this._storage.size === 0) return null
            const t = new Map()
            for (const [e, i] of this._storage) {
              const r = i instanceof s.AnnotationEditor ? i.serialize() : i
              r && t.set(e, r)
            }
            return t
          }

          static getHash(t) {
            if (!t) return ''
            const e = new a.MurmurHash3_64()
            for (const [i, r] of t) e.update(`${i}:${JSON.stringify(r)}`)
            return e.hexdigest()
          }
        }
        e.AnnotationStorage = AnnotationStorage
        function _setModified2() {
          if (!this._modified) {
            this._modified = !0
            typeof this.onSetModified === 'function' && this.onSetModified()
          }
        }
        const o = new WeakMap()
        class PrintAnnotationStorage extends AnnotationStorage {
          constructor(t) {
            super()
            !(function _classPrivateFieldInitSpec(t, e, i) {
              _checkPrivateRedeclaration(t, e)
              e.set(t, i)
            })(this, o, { writable: !0, value: null })
            _classPrivateFieldSet(this, o, structuredClone(t.serializable))
          }

          get print() {
            ;(0, r.unreachable)('Should not call PrintAnnotationStorage.print')
          }

          get serializable() {
            return (function _classPrivateFieldGet(t, e) {
              return (function _classApplyDescriptorGet(t, e) {
                return e.get ? e.get.call(t) : e.value
              })(t, _classExtractFieldDescriptor(t, e, 'get'))
            })(this, o)
          }
        }
        e.PrintAnnotationStorage = PrintAnnotationStorage
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.AnnotationEditor = void 0
        const r = i(132)
        const s = i(1)
        function _defineProperty(t, e, i) {
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i)
          return t
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          !(function _checkPrivateRedeclaration(t, e) {
            if (e.has(t))
              throw new TypeError('Cannot initialize the same private elements twice on an object')
          })(t, e)
          e.set(t, i)
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        const a = new WeakMap()
        const n = new WeakMap()
        const o = new WeakMap()
        const l = new WeakMap()
        const c = new WeakMap()
        const d = new WeakMap()
        class AnnotationEditor {
          constructor(t) {
            _classPrivateFieldInitSpec(this, a, { writable: !0, value: this.focusin.bind(this) })
            _classPrivateFieldInitSpec(this, n, { writable: !0, value: this.focusout.bind(this) })
            _classPrivateFieldInitSpec(this, o, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, l, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, c, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, d, {
              writable: !0,
              value: AnnotationEditor._zIndex++
            })
            this.constructor === AnnotationEditor &&
              (0, s.unreachable)('Cannot initialize AnnotationEditor.')
            this.parent = t.parent
            this.id = t.id
            this.width = this.height = null
            this.pageIndex = t.parent.pageIndex
            this.name = t.name
            this.div = null
            const [e, i] = this.parent.viewportBaseDimensions
            this.x = t.x / e
            this.y = t.y / i
            this.rotation = this.parent.viewport.rotation
            this.isAttachedToDOM = !1
          }

          static get _defaultLineColor() {
            return (0, s.shadow)(
              this,
              '_defaultLineColor',
              this._colorManager.getHexCode('CanvasText')
            )
          }

          setInBackground() {
            this.div.style.zIndex = 0
          }

          setInForeground() {
            this.div.style.zIndex = _classPrivateFieldGet(this, d)
          }

          focusin(t) {
            _classPrivateFieldGet(this, o)
              ? _classPrivateFieldSet(this, o, !1)
              : this.parent.setSelected(this)
          }

          focusout(t) {
            if (!this.isAttachedToDOM) return
            const e = t.relatedTarget
            if (e == null || !e.closest(`#${this.id}`)) {
              t.preventDefault()
              this.parent.isMultipleSelection || this.commitOrRemove()
            }
          }

          commitOrRemove() {
            this.isEmpty() ? this.remove() : this.commit()
          }

          commit() {
            this.parent.addToAnnotationStorage(this)
          }

          dragstart(t) {
            const e = this.parent.div.getBoundingClientRect()
            this.startX = t.clientX - e.x
            this.startY = t.clientY - e.y
            t.dataTransfer.setData('text/plain', this.id)
            t.dataTransfer.effectAllowed = 'move'
          }

          setAt(t, e, i, r) {
            const [s, a] = this.parent.viewportBaseDimensions
            ;[i, r] = this.screenToPageTranslation(i, r)
            this.x = (t + i) / s
            this.y = (e + r) / a
            this.div.style.left = `${100 * this.x}%`
            this.div.style.top = `${100 * this.y}%`
          }

          translate(t, e) {
            const [i, r] = this.parent.viewportBaseDimensions
            ;[t, e] = this.screenToPageTranslation(t, e)
            this.x += t / i
            this.y += e / r
            this.div.style.left = `${100 * this.x}%`
            this.div.style.top = `${100 * this.y}%`
          }

          screenToPageTranslation(t, e) {
            const { rotation: i } = this.parent.viewport
            switch (i) {
              case 90:
                return [e, -t]
              case 180:
                return [-t, -e]
              case 270:
                return [-e, t]
              default:
                return [t, e]
            }
          }

          setDims(t, e) {
            const [i, r] = this.parent.viewportBaseDimensions
            this.div.style.width = `${(100 * t) / i}%`
            this.div.style.height = `${(100 * e) / r}%`
          }

          getInitialTranslation() {
            return [0, 0]
          }

          render() {
            this.div = document.createElement('div')
            this.div.setAttribute('data-editor-rotation', (360 - this.rotation) % 360)
            this.div.className = this.name
            this.div.setAttribute('id', this.id)
            this.div.setAttribute('tabIndex', 0)
            this.setInForeground()
            this.div.addEventListener('focusin', _classPrivateFieldGet(this, a))
            this.div.addEventListener('focusout', _classPrivateFieldGet(this, n))
            const [t, e] = this.getInitialTranslation()
            this.translate(t, e)
            ;(0, r.bindEvents)(this, this.div, ['dragstart', 'pointerdown'])
            return this.div
          }

          pointerdown(t) {
            const e = r.KeyboardManager.platform.isMac
            if (t.button !== 0 || (t.ctrlKey && e)) t.preventDefault()
            else {
              ;(t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e)
                ? this.parent.toggleSelected(this)
                : this.parent.setSelected(this)
              _classPrivateFieldSet(this, o, !0)
            }
          }

          getRect(t, e) {
            const [i, r] = this.parent.viewportBaseDimensions
            const [s, a] = this.parent.pageDimensions
            const n = (s * t) / i
            const o = (a * e) / r
            const l = this.x * s
            const c = this.y * a
            const d = this.width * s
            const h = this.height * a
            switch (this.rotation) {
              case 0:
                return [l + n, a - c - o - h, l + n + d, a - c - o]
              case 90:
                return [l + o, a - c + n, l + o + h, a - c + n + d]
              case 180:
                return [l - n - d, a - c + o, l - n, a - c + o + h]
              case 270:
                return [l - o - h, a - c - n - d, l - o, a - c - n]
              default:
                throw new Error('Invalid rotation')
            }
          }

          getRectInCurrentCoords(t, e) {
            const [i, r, s, a] = t
            const n = s - i
            const o = a - r
            switch (this.rotation) {
              case 0:
                return [i, e - a, n, o]
              case 90:
                return [i, e - r, o, n]
              case 180:
                return [s, e - r, n, o]
              case 270:
                return [s, e - a, o, n]
              default:
                throw new Error('Invalid rotation')
            }
          }

          onceAdded() {}

          isEmpty() {
            return !1
          }

          enableEditMode() {
            _classPrivateFieldSet(this, c, !0)
          }

          disableEditMode() {
            _classPrivateFieldSet(this, c, !1)
          }

          isInEditMode() {
            return _classPrivateFieldGet(this, c)
          }

          shouldGetKeyboardEvents() {
            return !1
          }

          needsToBeRebuilt() {
            return this.div && !this.isAttachedToDOM
          }

          rebuild() {
            let t
            ;(t = this.div) === null ||
              void 0 === t ||
              t.addEventListener('focusin', _classPrivateFieldGet(this, a))
          }

          serialize() {
            ;(0, s.unreachable)('An editor must be serializable')
          }

          static deserialize(t, e) {
            const i = new this.prototype.constructor({ parent: e, id: e.getNextId() })
            i.rotation = t.rotation
            const [r, s] = e.pageDimensions
            const [a, n, o, l] = i.getRectInCurrentCoords(t.rect, s)
            i.x = a / r
            i.y = n / s
            i.width = o / r
            i.height = l / s
            return i
          }

          remove() {
            this.div.removeEventListener('focusin', _classPrivateFieldGet(this, a))
            this.div.removeEventListener('focusout', _classPrivateFieldGet(this, n))
            this.isEmpty() || this.commit()
            this.parent.remove(this)
          }

          select() {
            let t
            ;(t = this.div) === null || void 0 === t || t.classList.add('selectedEditor')
          }

          unselect() {
            let t
            ;(t = this.div) === null || void 0 === t || t.classList.remove('selectedEditor')
          }

          updateParams(t, e) {}

          disableEditing() {}

          enableEditing() {}

          get propertiesToUpdate() {
            return {}
          }

          get contentDiv() {
            return this.div
          }

          get isEditing() {
            return _classPrivateFieldGet(this, l)
          }

          set isEditing(t) {
            _classPrivateFieldSet(this, l, t)
            if (t) {
              this.parent.setSelected(this)
              this.parent.setActiveEditor(this)
            } else this.parent.setActiveEditor(null)
          }
        }
        e.AnnotationEditor = AnnotationEditor
        _defineProperty(AnnotationEditor, '_colorManager', new r.ColorManager())
        _defineProperty(AnnotationEditor, '_zIndex', 1)
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0
        e.bindEvents = function bindEvents(t, e, i) {
          for (const r of i) e.addEventListener(r, t[r].bind(t))
        }
        e.opacityToHex = function opacityToHex(t) {
          return Math.round(Math.min(255, Math.max(1, 255 * t)))
            .toString(16)
            .padStart(2, '0')
        }
        const r = i(1)
        const s = i(133)
        function _defineProperty(t, e, i) {
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i)
          return t
        }
        function _classPrivateMethodInitSpec(t, e) {
          _checkPrivateRedeclaration(t, e)
          e.add(t)
        }
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          _checkPrivateRedeclaration(t, e)
          e.set(t, i)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        const a = new WeakMap()
        class IdManager {
          constructor() {
            _classPrivateFieldInitSpec(this, a, { writable: !0, value: 0 })
          }

          getId() {
            let t
            let e
            return `${r.AnnotationEditorPrefix}${
              (_classPrivateFieldSet(this, a, ((t = _classPrivateFieldGet(this, a)), (e = t++), t)),
              e)
            }`
          }
        }
        const n = new WeakMap()
        const o = new WeakMap()
        const l = new WeakMap()
        const c = new WeakMap()
        class CommandManager {
          constructor() {
            const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128
            _classPrivateFieldInitSpec(this, n, { writable: !0, value: [] })
            _classPrivateFieldInitSpec(this, o, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, l, { writable: !0, value: void 0 })
            _classPrivateFieldInitSpec(this, c, { writable: !0, value: -1 })
            _classPrivateFieldSet(this, l, t)
          }

          add(t) {
            const {
              cmd: e,
              undo: i,
              mustExec: r,
              type: s = NaN,
              overwriteIfSameType: a = !1,
              keepUndo: d = !1
            } = t
            r && e()
            if (_classPrivateFieldGet(this, o)) return
            const h = { cmd: e, undo: i, type: s }
            if (_classPrivateFieldGet(this, c) === -1) {
              _classPrivateFieldGet(this, n).length > 0 &&
                (_classPrivateFieldGet(this, n).length = 0)
              _classPrivateFieldSet(this, c, 0)
              _classPrivateFieldGet(this, n).push(h)
              return
            }
            if (a && _classPrivateFieldGet(this, n)[_classPrivateFieldGet(this, c)].type === s) {
              d && (h.undo = _classPrivateFieldGet(this, n)[_classPrivateFieldGet(this, c)].undo)
              _classPrivateFieldGet(this, n)[_classPrivateFieldGet(this, c)] = h
              return
            }
            const u = _classPrivateFieldGet(this, c) + 1
            if (u === _classPrivateFieldGet(this, l)) _classPrivateFieldGet(this, n).splice(0, 1)
            else {
              _classPrivateFieldSet(this, c, u)
              u < _classPrivateFieldGet(this, n).length && _classPrivateFieldGet(this, n).splice(u)
            }
            _classPrivateFieldGet(this, n).push(h)
          }

          undo() {
            if (_classPrivateFieldGet(this, c) !== -1) {
              _classPrivateFieldSet(this, o, !0)
              _classPrivateFieldGet(this, n)[_classPrivateFieldGet(this, c)].undo()
              _classPrivateFieldSet(this, o, !1)
              _classPrivateFieldSet(this, c, _classPrivateFieldGet(this, c) - 1)
            }
          }

          redo() {
            if (_classPrivateFieldGet(this, c) < _classPrivateFieldGet(this, n).length - 1) {
              _classPrivateFieldSet(this, c, _classPrivateFieldGet(this, c) + 1)
              _classPrivateFieldSet(this, o, !0)
              _classPrivateFieldGet(this, n)[_classPrivateFieldGet(this, c)].cmd()
              _classPrivateFieldSet(this, o, !1)
            }
          }

          hasSomethingToUndo() {
            return _classPrivateFieldGet(this, c) !== -1
          }

          hasSomethingToRedo() {
            return _classPrivateFieldGet(this, c) < _classPrivateFieldGet(this, n).length - 1
          }

          destroy() {
            _classPrivateFieldSet(this, n, null)
          }
        }
        e.CommandManager = CommandManager
        const d = new WeakSet()
        class KeyboardManager {
          constructor(t) {
            _classPrivateMethodInitSpec(this, d)
            this.buffer = []
            this.callbacks = new Map()
            this.allKeys = new Set()
            const e = KeyboardManager.platform.isMac
            for (const [i, r] of t)
              for (const t of i) {
                const i = t.startsWith('mac+')
                if (e && i) {
                  this.callbacks.set(t.slice(4), r)
                  this.allKeys.add(t.split('+').at(-1))
                } else if (!e && !i) {
                  this.callbacks.set(t, r)
                  this.allKeys.add(t.split('+').at(-1))
                }
              }
          }

          static get platform() {
            const t = typeof navigator !== 'undefined' ? navigator.platform : ''
            return (0, r.shadow)(this, 'platform', {
              isWin: t.includes('Win'),
              isMac: t.includes('Mac')
            })
          }

          exec(t, e) {
            if (!this.allKeys.has(e.key)) return
            const i = this.callbacks.get(_classPrivateMethodGet(this, d, _serialize2).call(this, e))
            if (i) {
              i.bind(t)()
              e.stopPropagation()
              e.preventDefault()
            }
          }
        }
        e.KeyboardManager = KeyboardManager
        function _serialize2(t) {
          t.altKey && this.buffer.push('alt')
          t.ctrlKey && this.buffer.push('ctrl')
          t.metaKey && this.buffer.push('meta')
          t.shiftKey && this.buffer.push('shift')
          this.buffer.push(t.key)
          const e = this.buffer.join('+')
          this.buffer.length = 0
          return e
        }
        const h = new WeakMap()
        class ClipboardManager {
          constructor() {
            _classPrivateFieldInitSpec(this, h, { writable: !0, value: null })
          }

          copy(t) {
            if (t) {
              Array.isArray(t)
                ? _classPrivateFieldSet(
                    this,
                    h,
                    t.map((t) => t.serialize())
                  )
                : _classPrivateFieldSet(this, h, [t.serialize()])
              _classPrivateFieldSet(
                this,
                h,
                _classPrivateFieldGet(this, h).filter((t) => !!t)
              )
              _classPrivateFieldGet(this, h).length === 0 && _classPrivateFieldSet(this, h, null)
            }
          }

          paste() {
            return _classPrivateFieldGet(this, h)
          }

          isEmpty() {
            return _classPrivateFieldGet(this, h) === null
          }

          destroy() {
            _classPrivateFieldSet(this, h, null)
          }
        }
        class ColorManager {
          get _colors() {
            const t = new Map([
              ['CanvasText', null],
              ['Canvas', null]
            ])
            ;(0, s.getColorValues)(t)
            return (0, r.shadow)(this, '_colors', t)
          }

          convert(t) {
            const e = (0, s.getRGB)(t)
            if (!window.matchMedia('(forced-colors: active)').matches) return e
            for (const [t, i] of this._colors)
              if (i.every((t, i) => t === e[i])) return ColorManager._colorsMapping.get(t)
            return e
          }

          getHexCode(t) {
            const e = this._colors.get(t)
            return e ? r.Util.makeHexColor(...e) : t
          }
        }
        e.ColorManager = ColorManager
        _defineProperty(
          ColorManager,
          '_colorsMapping',
          new Map([
            ['CanvasText', [0, 0, 0]],
            ['Canvas', [255, 255, 255]]
          ])
        )
        const u = new WeakMap()
        const p = new WeakMap()
        const f = new WeakMap()
        const g = new WeakMap()
        const m = new WeakMap()
        const v = new WeakMap()
        const _ = new WeakMap()
        const b = new WeakMap()
        const y = new WeakMap()
        const A = new WeakMap()
        const S = new WeakMap()
        const P = new WeakMap()
        const x = new WeakMap()
        const w = new WeakMap()
        const E = new WeakMap()
        const C = new WeakMap()
        const k = new WeakMap()
        const T = new WeakSet()
        const M = new WeakSet()
        const R = new WeakSet()
        const I = new WeakSet()
        const D = new WeakSet()
        const O = new WeakSet()
        const L = new WeakSet()
        const G = new WeakSet()
        const N = new WeakSet()
        class AnnotationEditorUIManager {
          constructor(t, e) {
            _classPrivateMethodInitSpec(this, N)
            _classPrivateMethodInitSpec(this, G)
            _classPrivateMethodInitSpec(this, L)
            _classPrivateMethodInitSpec(this, O)
            _classPrivateMethodInitSpec(this, D)
            _classPrivateMethodInitSpec(this, I)
            _classPrivateMethodInitSpec(this, R)
            _classPrivateMethodInitSpec(this, M)
            _classPrivateMethodInitSpec(this, T)
            _classPrivateFieldInitSpec(this, u, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, p, { writable: !0, value: new Map() })
            _classPrivateFieldInitSpec(this, f, { writable: !0, value: new Map() })
            _classPrivateFieldInitSpec(this, g, { writable: !0, value: new ClipboardManager() })
            _classPrivateFieldInitSpec(this, m, { writable: !0, value: new CommandManager() })
            _classPrivateFieldInitSpec(this, v, { writable: !0, value: 0 })
            _classPrivateFieldInitSpec(this, _, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, b, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, y, { writable: !0, value: new IdManager() })
            _classPrivateFieldInitSpec(this, A, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, S, {
              writable: !0,
              value: r.AnnotationEditorType.NONE
            })
            _classPrivateFieldInitSpec(this, P, { writable: !0, value: new Set() })
            _classPrivateFieldInitSpec(this, x, { writable: !0, value: this.keydown.bind(this) })
            _classPrivateFieldInitSpec(this, w, {
              writable: !0,
              value: this.onEditingAction.bind(this)
            })
            _classPrivateFieldInitSpec(this, E, {
              writable: !0,
              value: this.onPageChanging.bind(this)
            })
            _classPrivateFieldInitSpec(this, C, {
              writable: !0,
              value: {
                isEditing: !1,
                isEmpty: !0,
                hasEmptyClipboard: !0,
                hasSomethingToUndo: !1,
                hasSomethingToRedo: !1,
                hasSelectedEditor: !1
              }
            })
            _classPrivateFieldInitSpec(this, k, { writable: !0, value: null })
            _classPrivateFieldSet(this, k, t)
            _classPrivateFieldSet(this, b, e)
            _classPrivateFieldGet(this, b)._on('editingaction', _classPrivateFieldGet(this, w))
            _classPrivateFieldGet(this, b)._on('pagechanging', _classPrivateFieldGet(this, E))
          }

          destroy() {
            _classPrivateMethodGet(this, M, _removeKeyboardManager2).call(this)
            _classPrivateFieldGet(this, b)._off('editingaction', _classPrivateFieldGet(this, w))
            _classPrivateFieldGet(this, b)._off('pagechanging', _classPrivateFieldGet(this, E))
            for (const t of _classPrivateFieldGet(this, f).values()) t.destroy()
            _classPrivateFieldGet(this, f).clear()
            _classPrivateFieldGet(this, p).clear()
            _classPrivateFieldSet(this, u, null)
            _classPrivateFieldGet(this, P).clear()
            _classPrivateFieldGet(this, g).destroy()
            _classPrivateFieldGet(this, m).destroy()
          }

          onPageChanging(t) {
            const { pageNumber: e } = t
            _classPrivateFieldSet(this, v, e - 1)
          }

          focusMainContainer() {
            _classPrivateFieldGet(this, k).focus()
          }

          keydown(t) {
            let e
            ;((e = this.getActive()) !== null && void 0 !== e && e.shouldGetKeyboardEvents()) ||
              AnnotationEditorUIManager._keyboardManager.exec(this, t)
          }

          onEditingAction(t) {
            ;['undo', 'redo', 'cut', 'copy', 'paste', 'delete', 'selectAll'].includes(t.name) &&
              this[t.name]()
          }

          setEditingState(t) {
            if (t) {
              _classPrivateMethodGet(this, T, _addKeyboardManager2).call(this)
              _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
                isEditing: _classPrivateFieldGet(this, S) !== r.AnnotationEditorType.NONE,
                isEmpty: _classPrivateMethodGet(this, G, _isEmpty2).call(this),
                hasSomethingToUndo: _classPrivateFieldGet(this, m).hasSomethingToUndo(),
                hasSomethingToRedo: _classPrivateFieldGet(this, m).hasSomethingToRedo(),
                hasSelectedEditor: !1,
                hasEmptyClipboard: _classPrivateFieldGet(this, g).isEmpty()
              })
            } else {
              _classPrivateMethodGet(this, M, _removeKeyboardManager2).call(this)
              _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
                isEditing: !1
              })
            }
          }

          registerEditorTypes(t) {
            _classPrivateFieldSet(this, _, t)
            for (const t of _classPrivateFieldGet(this, _))
              _classPrivateMethodGet(this, I, _dispatchUpdateUI2).call(
                this,
                t.defaultPropertiesToUpdate
              )
          }

          getId() {
            return _classPrivateFieldGet(this, y).getId()
          }

          addLayer(t) {
            _classPrivateFieldGet(this, f).set(t.pageIndex, t)
            _classPrivateFieldGet(this, A) ? t.enable() : t.disable()
          }

          removeLayer(t) {
            _classPrivateFieldGet(this, f).delete(t.pageIndex)
          }

          updateMode(t) {
            _classPrivateFieldSet(this, S, t)
            if (t === r.AnnotationEditorType.NONE) {
              this.setEditingState(!1)
              _classPrivateMethodGet(this, O, _disableAll2).call(this)
            } else {
              this.setEditingState(!0)
              _classPrivateMethodGet(this, D, _enableAll2).call(this)
              for (const e of _classPrivateFieldGet(this, f).values()) e.updateMode(t)
            }
          }

          updateToolbar(t) {
            t !== _classPrivateFieldGet(this, S) &&
              _classPrivateFieldGet(this, b).dispatch('switchannotationeditormode', {
                source: this,
                mode: t
              })
          }

          updateParams(t, e) {
            for (const i of _classPrivateFieldGet(this, P)) i.updateParams(t, e)
            for (const i of _classPrivateFieldGet(this, _)) i.updateDefaultParams(t, e)
          }

          getEditors(t) {
            const e = []
            for (const i of _classPrivateFieldGet(this, p).values()) i.pageIndex === t && e.push(i)
            return e
          }

          getEditor(t) {
            return _classPrivateFieldGet(this, p).get(t)
          }

          addEditor(t) {
            _classPrivateFieldGet(this, p).set(t.id, t)
          }

          removeEditor(t) {
            _classPrivateFieldGet(this, p).delete(t.id)
            this.unselect(t)
          }

          setActiveEditor(t) {
            if (_classPrivateFieldGet(this, u) !== t) {
              _classPrivateFieldSet(this, u, t)
              t &&
                _classPrivateMethodGet(this, I, _dispatchUpdateUI2).call(this, t.propertiesToUpdate)
            }
          }

          toggleSelected(t) {
            if (_classPrivateFieldGet(this, P).has(t)) {
              _classPrivateFieldGet(this, P).delete(t)
              t.unselect()
              _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
                hasSelectedEditor: this.hasSelection
              })
            } else {
              _classPrivateFieldGet(this, P).add(t)
              t.select()
              _classPrivateMethodGet(this, I, _dispatchUpdateUI2).call(this, t.propertiesToUpdate)
              _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
                hasSelectedEditor: !0
              })
            }
          }

          setSelected(t) {
            for (const e of _classPrivateFieldGet(this, P)) e !== t && e.unselect()
            _classPrivateFieldGet(this, P).clear()
            _classPrivateFieldGet(this, P).add(t)
            t.select()
            _classPrivateMethodGet(this, I, _dispatchUpdateUI2).call(this, t.propertiesToUpdate)
            _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
              hasSelectedEditor: !0
            })
          }

          isSelected(t) {
            return _classPrivateFieldGet(this, P).has(t)
          }

          unselect(t) {
            t.unselect()
            _classPrivateFieldGet(this, P).delete(t)
            _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
              hasSelectedEditor: this.hasSelection
            })
          }

          get hasSelection() {
            return _classPrivateFieldGet(this, P).size !== 0
          }

          undo() {
            _classPrivateFieldGet(this, m).undo()
            _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
              hasSomethingToUndo: _classPrivateFieldGet(this, m).hasSomethingToUndo(),
              hasSomethingToRedo: !0,
              isEmpty: _classPrivateMethodGet(this, G, _isEmpty2).call(this)
            })
          }

          redo() {
            _classPrivateFieldGet(this, m).redo()
            _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
              hasSomethingToUndo: !0,
              hasSomethingToRedo: _classPrivateFieldGet(this, m).hasSomethingToRedo(),
              isEmpty: _classPrivateMethodGet(this, G, _isEmpty2).call(this)
            })
          }

          addCommands(t) {
            _classPrivateFieldGet(this, m).add(t)
            _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
              hasSomethingToUndo: !0,
              hasSomethingToRedo: !1,
              isEmpty: _classPrivateMethodGet(this, G, _isEmpty2).call(this)
            })
          }

          delete() {
            _classPrivateFieldGet(this, u) && _classPrivateFieldGet(this, u).commitOrRemove()
            if (!this.hasSelection) return
            const t = [..._classPrivateFieldGet(this, P)]
            this.addCommands({
              cmd: () => {
                for (const e of t) e.remove()
              },
              undo: () => {
                for (const e of t) _classPrivateMethodGet(this, L, _addEditorToLayer2).call(this, e)
              },
              mustExec: !0
            })
          }

          copy() {
            _classPrivateFieldGet(this, u) && _classPrivateFieldGet(this, u).commitOrRemove()
            if (this.hasSelection) {
              const t = []
              for (const e of _classPrivateFieldGet(this, P)) e.isEmpty() || t.push(e)
              if (t.length === 0) return
              _classPrivateFieldGet(this, g).copy(t)
              _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
                hasEmptyClipboard: !1
              })
            }
          }

          cut() {
            this.copy()
            this.delete()
          }

          paste() {
            if (_classPrivateFieldGet(this, g).isEmpty()) return
            this.unselectAll()
            const t = _classPrivateFieldGet(this, f).get(_classPrivateFieldGet(this, v))
            const e = _classPrivateFieldGet(this, g)
              .paste()
              .map((e) => t.deserialize(e))
            this.addCommands({
              cmd: () => {
                for (const t of e) _classPrivateMethodGet(this, L, _addEditorToLayer2).call(this, t)
                _classPrivateMethodGet(this, N, _selectEditors2).call(this, e)
              },
              undo: () => {
                for (const t of e) t.remove()
              },
              mustExec: !0
            })
          }

          selectAll() {
            for (const t of _classPrivateFieldGet(this, P)) t.commit()
            _classPrivateMethodGet(this, N, _selectEditors2).call(
              this,
              _classPrivateFieldGet(this, p).values()
            )
          }

          unselectAll() {
            if (_classPrivateFieldGet(this, u)) _classPrivateFieldGet(this, u).commitOrRemove()
            else if (_classPrivateMethodGet(this, N, _selectEditors2).size !== 0) {
              for (const t of _classPrivateFieldGet(this, P)) t.unselect()
              _classPrivateFieldGet(this, P).clear()
              _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
                hasSelectedEditor: !1
              })
            }
          }

          isActive(t) {
            return _classPrivateFieldGet(this, u) === t
          }

          getActive() {
            return _classPrivateFieldGet(this, u)
          }

          getMode() {
            return _classPrivateFieldGet(this, S)
          }
        }
        e.AnnotationEditorUIManager = AnnotationEditorUIManager
        function _addKeyboardManager2() {
          _classPrivateFieldGet(this, k).addEventListener('keydown', _classPrivateFieldGet(this, x))
        }
        function _removeKeyboardManager2() {
          _classPrivateFieldGet(this, k).removeEventListener(
            'keydown',
            _classPrivateFieldGet(this, x)
          )
        }
        function _dispatchUpdateStates2(t) {
          Object.entries(t).some((t) => {
            const [e, i] = t
            return _classPrivateFieldGet(this, C)[e] !== i
          }) &&
            _classPrivateFieldGet(this, b).dispatch('annotationeditorstateschanged', {
              source: this,
              details: Object.assign(_classPrivateFieldGet(this, C), t)
            })
        }
        function _dispatchUpdateUI2(t) {
          _classPrivateFieldGet(this, b).dispatch('annotationeditorparamschanged', {
            source: this,
            details: t
          })
        }
        function _enableAll2() {
          if (!_classPrivateFieldGet(this, A)) {
            _classPrivateFieldSet(this, A, !0)
            for (const t of _classPrivateFieldGet(this, f).values()) t.enable()
          }
        }
        function _disableAll2() {
          this.unselectAll()
          if (_classPrivateFieldGet(this, A)) {
            _classPrivateFieldSet(this, A, !1)
            for (const t of _classPrivateFieldGet(this, f).values()) t.disable()
          }
        }
        function _addEditorToLayer2(t) {
          const e = _classPrivateFieldGet(this, f).get(t.pageIndex)
          e ? e.addOrRebuild(t) : this.addEditor(t)
        }
        function _isEmpty2() {
          if (_classPrivateFieldGet(this, p).size === 0) return !0
          if (_classPrivateFieldGet(this, p).size === 1)
            for (const t of _classPrivateFieldGet(this, p).values()) return t.isEmpty()
          return !1
        }
        function _selectEditors2(t) {
          _classPrivateFieldGet(this, P).clear()
          for (const e of t)
            if (!e.isEmpty()) {
              _classPrivateFieldGet(this, P).add(e)
              e.select()
            }
          _classPrivateMethodGet(this, R, _dispatchUpdateStates2).call(this, {
            hasSelectedEditor: !0
          })
        }
        _defineProperty(
          AnnotationEditorUIManager,
          '_keyboardManager',
          new KeyboardManager([
            [['ctrl+a', 'mac+meta+a'], AnnotationEditorUIManager.prototype.selectAll],
            [['ctrl+c', 'mac+meta+c'], AnnotationEditorUIManager.prototype.copy],
            [['ctrl+v', 'mac+meta+v'], AnnotationEditorUIManager.prototype.paste],
            [['ctrl+x', 'mac+meta+x'], AnnotationEditorUIManager.prototype.cut],
            [['ctrl+z', 'mac+meta+z'], AnnotationEditorUIManager.prototype.undo],
            [
              ['ctrl+y', 'ctrl+shift+Z', 'mac+meta+shift+Z'],
              AnnotationEditorUIManager.prototype.redo
            ],
            [
              [
                'Backspace',
                'alt+Backspace',
                'ctrl+Backspace',
                'shift+Backspace',
                'mac+Backspace',
                'mac+alt+Backspace',
                'mac+ctrl+Backspace',
                'Delete',
                'ctrl+Delete',
                'shift+Delete'
              ],
              AnnotationEditorUIManager.prototype.delete
            ],
            [['Escape', 'mac+Escape'], AnnotationEditorUIManager.prototype.unselectAll]
          ])
        )
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.StatTimer =
          e.RenderingCancelledException =
          e.PixelsPerInch =
          e.PageViewport =
          e.PDFDateString =
          e.DOMStandardFontDataFactory =
          e.DOMSVGFactory =
          e.DOMCanvasFactory =
          e.DOMCMapReaderFactory =
          e.AnnotationPrefix =
            void 0
        e.deprecated = function deprecated(t) {
          console.log(`Deprecated API usage: ${t}`)
        }
        e.getColorValues = function getColorValues(t) {
          const e = document.createElement('span')
          e.style.visibility = 'hidden'
          document.body.append(e)
          for (const i of t.keys()) {
            e.style.color = i
            const r = window.getComputedStyle(e).color
            t.set(i, getRGB(r))
          }
          e.remove()
        }
        e.getCurrentTransform = function getCurrentTransform(t) {
          const { a: e, b: i, c: r, d: s, e: a, f: n } = t.getTransform()
          return [e, i, r, s, a, n]
        }
        e.getCurrentTransformInverse = function getCurrentTransformInverse(t) {
          const { a: e, b: i, c: r, d: s, e: a, f: n } = t.getTransform().invertSelf()
          return [e, i, r, s, a, n]
        }
        e.getFilenameFromUrl = function getFilenameFromUrl(t) {
          const e = t.indexOf('#')
          const i = t.indexOf('?')
          const r = Math.min(e > 0 ? e : t.length, i > 0 ? i : t.length)
          return t.substring(t.lastIndexOf('/', r) + 1, r)
        }
        e.getPdfFilenameFromUrl = function getPdfFilenameFromUrl(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'document.pdf'
          if (typeof t !== 'string') return e
          if (isDataScheme(t)) {
            ;(0, s.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.')
            return e
          }
          const i = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/
          const r = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i
          const a = i.exec(t)
          let n = r.exec(a[1]) || r.exec(a[2]) || r.exec(a[3])
          if (n) {
            n = n[0]
            if (n.includes('%'))
              try {
                n = r.exec(decodeURIComponent(n))[0]
              } catch (t) {}
          }
          return n || e
        }
        e.getRGB = getRGB
        e.getXfaPageViewport = function getXfaPageViewport(t, e) {
          const { scale: i = 1, rotation: r = 0 } = e
          const { width: s, height: a } = t.attributes.style
          const n = [0, 0, parseInt(s), parseInt(a)]
          return new PageViewport({ viewBox: n, scale: i, rotation: r })
        }
        e.isDataScheme = isDataScheme
        e.isPdfFile = function isPdfFile(t) {
          return typeof t === 'string' && /\.pdf$/i.test(t)
        }
        e.isValidFetchUrl = isValidFetchUrl
        e.loadScript = function loadScript(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          return new Promise((i, r) => {
            const s = document.createElement('script')
            s.src = t
            s.onload = function (t) {
              e && s.remove()
              i(t)
            }
            s.onerror = function () {
              r(new Error(`Cannot load script at: ${s.src}`))
            }
            ;(document.head || document.documentElement).append(s)
          })
        }
        const r = i(134)
        var s = i(1)
        function _defineProperty(t, e, i) {
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i)
          return t
        }
        e.AnnotationPrefix = 'pdfjs_internal_id_'
        class PixelsPerInch {}
        e.PixelsPerInch = PixelsPerInch
        _defineProperty(PixelsPerInch, 'CSS', 96)
        _defineProperty(PixelsPerInch, 'PDF', 72)
        _defineProperty(PixelsPerInch, 'PDF_TO_CSS_UNITS', PixelsPerInch.CSS / PixelsPerInch.PDF)
        class DOMCanvasFactory extends r.BaseCanvasFactory {
          constructor() {
            const { ownerDocument: t = globalThis.document } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            super()
            this._document = t
          }

          _createCanvas(t, e) {
            const i = this._document.createElement('canvas')
            i.width = t
            i.height = e
            return i
          }
        }
        e.DOMCanvasFactory = DOMCanvasFactory
        async function fetchData(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          if (isValidFetchUrl(t, document.baseURI)) {
            const i = await fetch(t)
            if (!i.ok) throw new Error(i.statusText)
            return e ? new Uint8Array(await i.arrayBuffer()) : (0, s.stringToBytes)(await i.text())
          }
          return new Promise((i, r) => {
            const a = new XMLHttpRequest()
            a.open('GET', t, !0)
            e && (a.responseType = 'arraybuffer')
            a.onreadystatechange = () => {
              if (a.readyState === XMLHttpRequest.DONE) {
                if (a.status === 200 || a.status === 0) {
                  let t
                  e && a.response
                    ? (t = new Uint8Array(a.response))
                    : !e && a.responseText && (t = (0, s.stringToBytes)(a.responseText))
                  if (t) {
                    i(t)
                    return
                  }
                }
                r(new Error(a.statusText))
              }
            }
            a.send(null)
          })
        }
        class DOMCMapReaderFactory extends r.BaseCMapReaderFactory {
          _fetchData(t, e) {
            return fetchData(t, this.isCompressed).then((t) => ({
              cMapData: t,
              compressionType: e
            }))
          }
        }
        e.DOMCMapReaderFactory = DOMCMapReaderFactory
        class DOMStandardFontDataFactory extends r.BaseStandardFontDataFactory {
          _fetchData(t) {
            return fetchData(t, !0)
          }
        }
        e.DOMStandardFontDataFactory = DOMStandardFontDataFactory
        class DOMSVGFactory extends r.BaseSVGFactory {
          _createSVG(t) {
            return document.createElementNS('http://www.w3.org/2000/svg', t)
          }
        }
        e.DOMSVGFactory = DOMSVGFactory
        class PageViewport {
          constructor(t) {
            let {
              viewBox: e,
              scale: i,
              rotation: r,
              offsetX: s = 0,
              offsetY: a = 0,
              dontFlip: n = !1
            } = t
            this.viewBox = e
            this.scale = i
            this.rotation = r
            this.offsetX = s
            this.offsetY = a
            const o = (e[2] + e[0]) / 2
            const l = (e[3] + e[1]) / 2
            let c
            let d
            let h
            let u
            let p
            let f
            let g
            let m
            r %= 360
            r < 0 && (r += 360)
            switch (r) {
              case 180:
                c = -1
                d = 0
                h = 0
                u = 1
                break
              case 90:
                c = 0
                d = 1
                h = 1
                u = 0
                break
              case 270:
                c = 0
                d = -1
                h = -1
                u = 0
                break
              case 0:
                c = 1
                d = 0
                h = 0
                u = -1
                break
              default:
                throw new Error('PageViewport: Invalid rotation, must be a multiple of 90 degrees.')
            }
            if (n) {
              h = -h
              u = -u
            }
            if (c === 0) {
              p = Math.abs(l - e[1]) * i + s
              f = Math.abs(o - e[0]) * i + a
              g = Math.abs(e[3] - e[1]) * i
              m = Math.abs(e[2] - e[0]) * i
            } else {
              p = Math.abs(o - e[0]) * i + s
              f = Math.abs(l - e[1]) * i + a
              g = Math.abs(e[2] - e[0]) * i
              m = Math.abs(e[3] - e[1]) * i
            }
            this.transform = [
              c * i,
              d * i,
              h * i,
              u * i,
              p - c * i * o - h * i * l,
              f - d * i * o - u * i * l
            ]
            this.width = g
            this.height = m
          }

          clone() {
            const {
              scale: t = this.scale,
              rotation: e = this.rotation,
              offsetX: i = this.offsetX,
              offsetY: r = this.offsetY,
              dontFlip: s = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return new PageViewport({
              viewBox: this.viewBox.slice(),
              scale: t,
              rotation: e,
              offsetX: i,
              offsetY: r,
              dontFlip: s
            })
          }

          convertToViewportPoint(t, e) {
            return s.Util.applyTransform([t, e], this.transform)
          }

          convertToViewportRectangle(t) {
            const e = s.Util.applyTransform([t[0], t[1]], this.transform)
            const i = s.Util.applyTransform([t[2], t[3]], this.transform)
            return [e[0], e[1], i[0], i[1]]
          }

          convertToPdfPoint(t, e) {
            return s.Util.applyInverseTransform([t, e], this.transform)
          }
        }
        e.PageViewport = PageViewport
        class RenderingCancelledException extends s.BaseException {
          constructor(t, e) {
            super(t, 'RenderingCancelledException')
            this.type = e
          }
        }
        e.RenderingCancelledException = RenderingCancelledException
        function isDataScheme(t) {
          const e = t.length
          let i = 0
          for (; i < e && t[i].trim() === ''; ) i++
          return t.substring(i, i + 5).toLowerCase() === 'data:'
        }
        e.StatTimer = class StatTimer {
          constructor() {
            this.started = Object.create(null)
            this.times = []
          }

          time(t) {
            t in this.started && (0, s.warn)(`Timer is already running for ${t}`)
            this.started[t] = Date.now()
          }

          timeEnd(t) {
            t in this.started || (0, s.warn)(`Timer has not been started for ${t}`)
            this.times.push({ name: t, start: this.started[t], end: Date.now() })
            delete this.started[t]
          }

          toString() {
            const t = []
            let e = 0
            for (const t of this.times) {
              const i = t.name
              i.length > e && (e = i.length)
            }
            for (const i of this.times) {
              const r = i.end - i.start
              t.push(`${i.name.padEnd(e)} ${r}ms\n`)
            }
            return t.join('')
          }
        }
        function isValidFetchUrl(t, e) {
          try {
            const { protocol: i } = e ? new URL(t, e) : new URL(t)
            return i === 'http:' || i === 'https:'
          } catch (t) {
            return !1
          }
        }
        let a
        e.PDFDateString = class PDFDateString {
          static toDateObject(t) {
            if (!t || typeof t !== 'string') return null
            a ||
              (a = new RegExp(
                "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
              ))
            const e = a.exec(t)
            if (!e) return null
            const i = parseInt(e[1], 10)
            let r = parseInt(e[2], 10)
            r = r >= 1 && r <= 12 ? r - 1 : 0
            let s = parseInt(e[3], 10)
            s = s >= 1 && s <= 31 ? s : 1
            let n = parseInt(e[4], 10)
            n = n >= 0 && n <= 23 ? n : 0
            let o = parseInt(e[5], 10)
            o = o >= 0 && o <= 59 ? o : 0
            let l = parseInt(e[6], 10)
            l = l >= 0 && l <= 59 ? l : 0
            const c = e[7] || 'Z'
            let d = parseInt(e[8], 10)
            d = d >= 0 && d <= 23 ? d : 0
            let h = parseInt(e[9], 10) || 0
            h = h >= 0 && h <= 59 ? h : 0
            if (c === '-') {
              n += d
              o += h
            } else if (c === '+') {
              n -= d
              o -= h
            }
            return new Date(Date.UTC(i, r, s, n, o, l))
          }
        }
        function getRGB(t) {
          if (t.startsWith('#')) {
            const e = parseInt(t.slice(1), 16)
            return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]
          }
          if (t.startsWith('rgb('))
            return t
              .slice(4, -1)
              .split(',')
              .map((t) => parseInt(t))
          if (t.startsWith('rgba('))
            return t
              .slice(5, -1)
              .split(',')
              .map((t) => parseInt(t))
              .slice(0, 3)
          ;(0, s.warn)(`Not a valid color format: "${t}"`)
          return [0, 0, 0]
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.BaseStandardFontDataFactory =
          e.BaseSVGFactory =
          e.BaseCanvasFactory =
          e.BaseCMapReaderFactory =
            void 0
        const r = i(1)
        class BaseCanvasFactory {
          constructor() {
            this.constructor === BaseCanvasFactory &&
              (0, r.unreachable)('Cannot initialize BaseCanvasFactory.')
          }

          create(t, e) {
            if (t <= 0 || e <= 0) throw new Error('Invalid canvas size')
            const i = this._createCanvas(t, e)
            return { canvas: i, context: i.getContext('2d') }
          }

          reset(t, e, i) {
            if (!t.canvas) throw new Error('Canvas is not specified')
            if (e <= 0 || i <= 0) throw new Error('Invalid canvas size')
            t.canvas.width = e
            t.canvas.height = i
          }

          destroy(t) {
            if (!t.canvas) throw new Error('Canvas is not specified')
            t.canvas.width = 0
            t.canvas.height = 0
            t.canvas = null
            t.context = null
          }

          _createCanvas(t, e) {
            ;(0, r.unreachable)('Abstract method `_createCanvas` called.')
          }
        }
        e.BaseCanvasFactory = BaseCanvasFactory
        class BaseCMapReaderFactory {
          constructor(t) {
            const { baseUrl: e = null, isCompressed: i = !1 } = t
            this.constructor === BaseCMapReaderFactory &&
              (0, r.unreachable)('Cannot initialize BaseCMapReaderFactory.')
            this.baseUrl = e
            this.isCompressed = i
          }

          async fetch(t) {
            const { name: e } = t
            if (!this.baseUrl)
              throw new Error(
                'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
              )
            if (!e) throw new Error('CMap name must be specified.')
            const i = this.baseUrl + e + (this.isCompressed ? '.bcmap' : '')
            const s = this.isCompressed ? r.CMapCompressionType.BINARY : r.CMapCompressionType.NONE
            return this._fetchData(i, s).catch((t) => {
              throw new Error(`Unable to load ${this.isCompressed ? 'binary ' : ''}CMap at: ${i}`)
            })
          }

          _fetchData(t, e) {
            ;(0, r.unreachable)('Abstract method `_fetchData` called.')
          }
        }
        e.BaseCMapReaderFactory = BaseCMapReaderFactory
        class BaseStandardFontDataFactory {
          constructor(t) {
            const { baseUrl: e = null } = t
            this.constructor === BaseStandardFontDataFactory &&
              (0, r.unreachable)('Cannot initialize BaseStandardFontDataFactory.')
            this.baseUrl = e
          }

          async fetch(t) {
            const { filename: e } = t
            if (!this.baseUrl)
              throw new Error(
                'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.'
              )
            if (!e) throw new Error('Font filename must be specified.')
            const i = `${this.baseUrl}${e}`
            return this._fetchData(i).catch((t) => {
              throw new Error(`Unable to load font data at: ${i}`)
            })
          }

          _fetchData(t) {
            ;(0, r.unreachable)('Abstract method `_fetchData` called.')
          }
        }
        e.BaseStandardFontDataFactory = BaseStandardFontDataFactory
        class BaseSVGFactory {
          constructor() {
            this.constructor === BaseSVGFactory &&
              (0, r.unreachable)('Cannot initialize BaseSVGFactory.')
          }

          create(t, e) {
            const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            if (t <= 0 || e <= 0) throw new Error('Invalid SVG dimensions')
            const r = this._createSVG('svg:svg')
            r.setAttribute('version', '1.1')
            if (!i) {
              r.setAttribute('width', `${t}px`)
              r.setAttribute('height', `${e}px`)
            }
            r.setAttribute('preserveAspectRatio', 'none')
            r.setAttribute('viewBox', `0 0 ${t} ${e}`)
            return r
          }

          createElement(t) {
            if (typeof t !== 'string') throw new Error('Invalid SVG element type')
            return this._createSVG(t)
          }

          _createSVG(t) {
            ;(0, r.unreachable)('Abstract method `_createSVG` called.')
          }
        }
        e.BaseSVGFactory = BaseSVGFactory
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.MurmurHash3_64 = void 0
        const r = i(1)
        const s = 3285377520
        const a = 4294901760
        const n = 65535
        e.MurmurHash3_64 = class MurmurHash3_64 {
          constructor(t) {
            this.h1 = t ? 4294967295 & t : s
            this.h2 = t ? 4294967295 & t : s
          }

          update(t) {
            let e
            let i
            if (typeof t === 'string') {
              e = new Uint8Array(2 * t.length)
              i = 0
              for (let r = 0, s = t.length; r < s; r++) {
                const s = t.charCodeAt(r)
                if (s <= 255) e[i++] = s
                else {
                  e[i++] = s >>> 8
                  e[i++] = 255 & s
                }
              }
            } else {
              if (!(0, r.isArrayBuffer)(t))
                throw new Error(
                  'Wrong data format in MurmurHash3_64_update. Input must be a string or array.'
                )
              e = t.slice()
              i = e.byteLength
            }
            const s = i >> 2
            const o = i - 4 * s
            const l = new Uint32Array(e.buffer, 0, s)
            let c = 0
            let d = 0
            let h = this.h1
            let u = this.h2
            const p = 3432918353
            const f = 461845907
            const g = 11601
            const m = 13715
            for (let t = 0; t < s; t++)
              if (1 & t) {
                c = l[t]
                c = ((c * p) & a) | ((c * g) & n)
                c = (c << 15) | (c >>> 17)
                c = ((c * f) & a) | ((c * m) & n)
                h ^= c
                h = (h << 13) | (h >>> 19)
                h = 5 * h + 3864292196
              } else {
                d = l[t]
                d = ((d * p) & a) | ((d * g) & n)
                d = (d << 15) | (d >>> 17)
                d = ((d * f) & a) | ((d * m) & n)
                u ^= d
                u = (u << 13) | (u >>> 19)
                u = 5 * u + 3864292196
              }
            c = 0
            switch (o) {
              case 3:
                c ^= e[4 * s + 2] << 16
              case 2:
                c ^= e[4 * s + 1] << 8
              case 1:
                c ^= e[4 * s]
                c = ((c * p) & a) | ((c * g) & n)
                c = (c << 15) | (c >>> 17)
                c = ((c * f) & a) | ((c * m) & n)
                1 & s ? (h ^= c) : (u ^= c)
            }
            this.h1 = h
            this.h2 = u
          }

          hexdigest() {
            let t = this.h1
            let e = this.h2
            t ^= e >>> 1
            t = ((3981806797 * t) & a) | ((36045 * t) & n)
            e = ((4283543511 * e) & a) | (((2950163797 * ((e << 16) | (t >>> 16))) & a) >>> 16)
            t ^= e >>> 1
            t = ((444984403 * t) & a) | ((60499 * t) & n)
            e = ((3301882366 * e) & a) | (((3120437893 * ((e << 16) | (t >>> 16))) & a) >>> 16)
            t ^= e >>> 1
            const i = (t >>> 0).toString(16)
            const r = (e >>> 0).toString(16)
            return i.padStart(8, '0') + r.padStart(8, '0')
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.FontLoader = e.FontFaceObject = void 0
        const r = i(1)
        class BaseFontLoader {
          constructor(t) {
            const {
              docId: e,
              onUnsupportedFeature: i,
              ownerDocument: s = globalThis.document,
              styleElement: a = null
            } = t
            this.constructor === BaseFontLoader &&
              (0, r.unreachable)('Cannot initialize BaseFontLoader.')
            this.docId = e
            this._onUnsupportedFeature = i
            this._document = s
            this.nativeFontFaces = []
            this.styleElement = null
          }

          addNativeFontFace(t) {
            this.nativeFontFaces.push(t)
            this._document.fonts.add(t)
          }

          insertRule(t) {
            let e = this.styleElement
            if (!e) {
              e = this.styleElement = this._document.createElement('style')
              e.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`
              this._document.documentElement.getElementsByTagName('head')[0].append(e)
            }
            const i = e.sheet
            i.insertRule(t, i.cssRules.length)
          }

          clear() {
            for (const t of this.nativeFontFaces) this._document.fonts.delete(t)
            this.nativeFontFaces.length = 0
            if (this.styleElement) {
              this.styleElement.remove()
              this.styleElement = null
            }
          }

          async bind(t) {
            if (t.attached || t.missingFile) return
            t.attached = !0
            if (this.isFontLoadingAPISupported) {
              const e = t.createNativeFontFace()
              if (e) {
                this.addNativeFontFace(e)
                try {
                  await e.loaded
                } catch (i) {
                  this._onUnsupportedFeature({
                    featureId: r.UNSUPPORTED_FEATURES.errorFontLoadNative
                  })
                  ;(0, r.warn)(`Failed to load font '${e.family}': '${i}'.`)
                  t.disableFontFace = !0
                  throw i
                }
              }
              return
            }
            const e = t.createFontFaceRule()
            if (e) {
              this.insertRule(e)
              if (this.isSyncFontLoadingSupported) return
              await new Promise((i) => {
                const r = this._queueLoadingCallback(i)
                this._prepareFontLoadEvent([e], [t], r)
              })
            }
          }

          _queueLoadingCallback(t) {
            ;(0, r.unreachable)('Abstract method `_queueLoadingCallback`.')
          }

          get isFontLoadingAPISupported() {
            let t
            const e = !((t = this._document) === null || void 0 === t || !t.fonts)
            return (0, r.shadow)(this, 'isFontLoadingAPISupported', e)
          }

          get isSyncFontLoadingSupported() {
            ;(0, r.unreachable)('Abstract method `isSyncFontLoadingSupported`.')
          }

          get _loadTestFont() {
            ;(0, r.unreachable)('Abstract method `_loadTestFont`.')
          }

          _prepareFontLoadEvent(t, e, i) {
            ;(0, r.unreachable)('Abstract method `_prepareFontLoadEvent`.')
          }
        }
        let s
        e.FontLoader = s
        e.FontLoader = s = class GenericFontLoader extends BaseFontLoader {
          constructor(t) {
            super(t)
            this.loadingContext = { requests: [], nextRequestId: 0 }
            this.loadTestFontId = 0
          }

          get isSyncFontLoadingSupported() {
            let t = !1
            if (typeof navigator === 'undefined') t = !0
            else {
              const e = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
              ;(e == null ? void 0 : e[1]) >= 14 && (t = !0)
            }
            return (0, r.shadow)(this, 'isSyncFontLoadingSupported', t)
          }

          _queueLoadingCallback(t) {
            const e = this.loadingContext
            const i = {
              id: `pdfjs-font-loading-${e.nextRequestId++}`,
              done: !1,
              complete: function completeRequest() {
                ;(0, r.assert)(!i.done, 'completeRequest() cannot be called twice.')
                i.done = !0
                for (; e.requests.length > 0 && e.requests[0].done; ) {
                  const t = e.requests.shift()
                  setTimeout(t.callback, 0)
                }
              },
              callback: t
            }
            e.requests.push(i)
            return i
          }

          get _loadTestFont() {
            return (0, r.shadow)(
              this,
              '_loadTestFont',
              atob(
                'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=='
              )
            )
          }

          _prepareFontLoadEvent(t, e, i) {
            function int32(t, e) {
              return (
                (t.charCodeAt(e) << 24) |
                (t.charCodeAt(e + 1) << 16) |
                (t.charCodeAt(e + 2) << 8) |
                (255 & t.charCodeAt(e + 3))
              )
            }
            function spliceString(t, e, i, r) {
              return t.substring(0, e) + r + t.substring(e + i)
            }
            let s
            let a
            const n = this._document.createElement('canvas')
            n.width = 1
            n.height = 1
            const o = n.getContext('2d')
            let l = 0
            const c = `lt${Date.now()}${this.loadTestFontId++}`
            let d = this._loadTestFont
            d = spliceString(d, 976, c.length, c)
            const h = 1482184792
            let u = int32(d, 16)
            for (s = 0, a = c.length - 3; s < a; s += 4) u = (u - h + int32(c, s)) | 0
            s < c.length && (u = (u - h + int32(`${c}XXX`, s)) | 0)
            d = spliceString(d, 16, 4, (0, r.string32)(u))
            const p = `@font-face {font-family:"${c}";src:${`url(data:font/opentype;base64,${btoa(
              d
            )});`}}`
            this.insertRule(p)
            const f = []
            for (const t of e) f.push(t.loadedName)
            f.push(c)
            const g = this._document.createElement('div')
            g.style.visibility = 'hidden'
            g.style.width = g.style.height = '10px'
            g.style.position = 'absolute'
            g.style.top = g.style.left = '0px'
            for (const t of f) {
              const e = this._document.createElement('span')
              e.textContent = 'Hi'
              e.style.fontFamily = t
              g.append(e)
            }
            this._document.body.append(g)
            !(function isFontReady(t, e) {
              l++
              if (l > 30) {
                ;(0, r.warn)('Load test font never loaded.')
                e()
                return
              }
              o.font = `30px ${t}`
              o.fillText('.', 0, 20)
              o.getImageData(0, 0, 1, 1).data[3] > 0
                ? e()
                : setTimeout(isFontReady.bind(null, t, e))
            })(c, () => {
              g.remove()
              i.complete()
            })
          }
        }
        e.FontFaceObject = class FontFaceObject {
          constructor(t, e) {
            const {
              isEvalSupported: i = !0,
              disableFontFace: r = !1,
              ignoreErrors: s = !1,
              onUnsupportedFeature: a,
              fontRegistry: n = null
            } = e
            this.compiledGlyphs = Object.create(null)
            for (const e in t) this[e] = t[e]
            this.isEvalSupported = !1 !== i
            this.disableFontFace = !0 === r
            this.ignoreErrors = !0 === s
            this._onUnsupportedFeature = a
            this.fontRegistry = n
          }

          createNativeFontFace() {
            if (!this.data || this.disableFontFace) return null
            let t
            if (this.cssFontInfo) {
              const e = { weight: this.cssFontInfo.fontWeight }
              this.cssFontInfo.italicAngle &&
                (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`)
              t = new FontFace(this.cssFontInfo.fontFamily, this.data, e)
            } else t = new FontFace(this.loadedName, this.data, {})
            this.fontRegistry && this.fontRegistry.registerFont(this)
            return t
          }

          createFontFaceRule() {
            if (!this.data || this.disableFontFace) return null
            const t = (0, r.bytesToString)(this.data)
            const e = `url(data:${this.mimetype};base64,${btoa(t)});`
            let i
            if (this.cssFontInfo) {
              let t = `font-weight: ${this.cssFontInfo.fontWeight};`
              this.cssFontInfo.italicAngle &&
                (t += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`)
              i = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t}src:${e}}`
            } else i = `@font-face {font-family:"${this.loadedName}";src:${e}}`
            this.fontRegistry && this.fontRegistry.registerFont(this, e)
            return i
          }

          getPathGenerator(t, e) {
            if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e]
            let i
            try {
              i = t.get(`${this.loadedName}_path_${e}`)
            } catch (t) {
              if (!this.ignoreErrors) throw t
              this._onUnsupportedFeature({ featureId: r.UNSUPPORTED_FEATURES.errorFontGetPath })
              ;(0, r.warn)(`getPathGenerator - ignoring character: "${t}".`)
              return (this.compiledGlyphs[e] = function (t, e) {})
            }
            if (this.isEvalSupported && r.FeatureTest.isEvalSupported) {
              const t = []
              for (const e of i) {
                const i = void 0 !== e.args ? e.args.join(',') : ''
                t.push('c.', e.cmd, '(', i, ');\n')
              }
              return (this.compiledGlyphs[e] = new Function('c', 'size', t.join('')))
            }
            return (this.compiledGlyphs[e] = function (t, e) {
              for (const r of i) {
                r.cmd === 'scale' && (r.args = [e, -e])
                t[r.cmd].apply(t, r.args)
              }
            })
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.CanvasGraphics = void 0
        const r = i(133)
        const s = i(1)
        const a = i(138)
        const n = i(139)
        const o = i(3)
        const l = i(140)
        function _classPrivateMethodInitSpec(t, e) {
          !(function _checkPrivateRedeclaration(t, e) {
            if (e.has(t))
              throw new TypeError('Cannot initialize the same private elements twice on an object')
          })(t, e)
          e.add(t)
        }
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        const c = 4096
        const d = o.isNodeJS && typeof Path2D === 'undefined' ? -1 : 1e3
        const h = 16
        class CachedCanvases {
          constructor(t) {
            this.canvasFactory = t
            this.cache = Object.create(null)
          }

          getCanvas(t, e, i) {
            let r
            if (void 0 !== this.cache[t]) {
              r = this.cache[t]
              this.canvasFactory.reset(r, e, i)
            } else {
              r = this.canvasFactory.create(e, i)
              this.cache[t] = r
            }
            return r
          }

          delete(t) {
            delete this.cache[t]
          }

          clear() {
            for (const t in this.cache) {
              const e = this.cache[t]
              this.canvasFactory.destroy(e)
              delete this.cache[t]
            }
          }
        }
        function drawImageAtIntegerCoords(t, e, i, s, a, n, o, l, c, d) {
          const [h, u, p, f, g, m] = (0, r.getCurrentTransform)(t)
          if (u === 0 && p === 0) {
            const r = o * h + g
            const v = Math.round(r)
            const _ = l * f + m
            const b = Math.round(_)
            const y = (o + c) * h + g
            const A = Math.abs(Math.round(y) - v) || 1
            const S = (l + d) * f + m
            const P = Math.abs(Math.round(S) - b) || 1
            t.setTransform(Math.sign(h), 0, 0, Math.sign(f), v, b)
            t.drawImage(e, i, s, a, n, 0, 0, A, P)
            t.setTransform(h, u, p, f, g, m)
            return [A, P]
          }
          if (h === 0 && f === 0) {
            const r = l * p + g
            const v = Math.round(r)
            const _ = o * u + m
            const b = Math.round(_)
            const y = (l + d) * p + g
            const A = Math.abs(Math.round(y) - v) || 1
            const S = (o + c) * u + m
            const P = Math.abs(Math.round(S) - b) || 1
            t.setTransform(0, Math.sign(u), Math.sign(p), 0, v, b)
            t.drawImage(e, i, s, a, n, 0, 0, P, A)
            t.setTransform(h, u, p, f, g, m)
            return [P, A]
          }
          t.drawImage(e, i, s, a, n, o, l, c, d)
          return [Math.hypot(h, u) * c, Math.hypot(p, f) * d]
        }
        class CanvasExtraState {
          constructor(t, e) {
            this.alphaIsShape = !1
            this.fontSize = 0
            this.fontSizeScale = 1
            this.textMatrix = s.IDENTITY_MATRIX
            this.textMatrixScale = 1
            this.fontMatrix = s.FONT_IDENTITY_MATRIX
            this.leading = 0
            this.x = 0
            this.y = 0
            this.lineX = 0
            this.lineY = 0
            this.charSpacing = 0
            this.wordSpacing = 0
            this.textHScale = 1
            this.textRenderingMode = s.TextRenderingMode.FILL
            this.textRise = 0
            this.fillColor = '#000000'
            this.strokeColor = '#000000'
            this.patternFill = !1
            this.fillAlpha = 1
            this.strokeAlpha = 1
            this.lineWidth = 1
            this.activeSMask = null
            this.transferMaps = null
            this.startNewPathAndClipBox([0, 0, t, e])
          }

          clone() {
            const t = Object.create(this)
            t.clipBox = this.clipBox.slice()
            return t
          }

          setCurrentPoint(t, e) {
            this.x = t
            this.y = e
          }

          updatePathMinMax(t, e, i) {
            ;[e, i] = s.Util.applyTransform([e, i], t)
            this.minX = Math.min(this.minX, e)
            this.minY = Math.min(this.minY, i)
            this.maxX = Math.max(this.maxX, e)
            this.maxY = Math.max(this.maxY, i)
          }

          updateRectMinMax(t, e) {
            const i = s.Util.applyTransform(e, t)
            const r = s.Util.applyTransform(e.slice(2), t)
            this.minX = Math.min(this.minX, i[0], r[0])
            this.minY = Math.min(this.minY, i[1], r[1])
            this.maxX = Math.max(this.maxX, i[0], r[0])
            this.maxY = Math.max(this.maxY, i[1], r[1])
          }

          updateScalingPathMinMax(t, e) {
            s.Util.scaleMinMax(t, e)
            this.minX = Math.min(this.minX, e[0])
            this.maxX = Math.max(this.maxX, e[1])
            this.minY = Math.min(this.minY, e[2])
            this.maxY = Math.max(this.maxY, e[3])
          }

          updateCurvePathMinMax(t, e, i, r, a, n, o, l, c, d) {
            const h = s.Util.bezierBoundingBox(e, i, r, a, n, o, l, c)
            if (d) {
              d[0] = Math.min(d[0], h[0], h[2])
              d[1] = Math.max(d[1], h[0], h[2])
              d[2] = Math.min(d[2], h[1], h[3])
              d[3] = Math.max(d[3], h[1], h[3])
            } else this.updateRectMinMax(t, h)
          }

          getPathBoundingBox() {
            const t =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.PathType.FILL
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            const i = [this.minX, this.minY, this.maxX, this.maxY]
            if (t === a.PathType.STROKE) {
              e || (0, s.unreachable)('Stroke bounding box must include transform.')
              const t = s.Util.singularValueDecompose2dScale(e)
              const r = (t[0] * this.lineWidth) / 2
              const a = (t[1] * this.lineWidth) / 2
              i[0] -= r
              i[1] -= a
              i[2] += r
              i[3] += a
            }
            return i
          }

          updateClipFromPath() {
            const t = s.Util.intersect(this.clipBox, this.getPathBoundingBox())
            this.startNewPathAndClipBox(t || [0, 0, 0, 0])
          }

          isEmptyClip() {
            return this.minX === 1 / 0
          }

          startNewPathAndClipBox(t) {
            this.clipBox = t
            this.minX = 1 / 0
            this.minY = 1 / 0
            this.maxX = 0
            this.maxY = 0
          }

          getClippedPathBoundingBox() {
            const t =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.PathType.FILL
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            return s.Util.intersect(this.clipBox, this.getPathBoundingBox(t, e))
          }
        }
        function putBinaryImageData(t, e) {
          const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          if (typeof ImageData !== 'undefined' && e instanceof ImageData) {
            t.putImageData(e, 0, 0)
            return
          }
          const r = e.height
          const a = e.width
          const n = r % h
          const o = (r - n) / h
          const l = n === 0 ? o : o + 1
          const c = t.createImageData(a, h)
          let d
          let u = 0
          const p = e.data
          const f = c.data
          let g
          let m
          let v
          let _
          let b
          let y
          let A
          let S
          if (i)
            switch (i.length) {
              case 1:
                b = i[0]
                y = i[0]
                A = i[0]
                S = i[0]
                break
              case 4:
                b = i[0]
                y = i[1]
                A = i[2]
                S = i[3]
            }
          if (e.kind === s.ImageKind.GRAYSCALE_1BPP) {
            const e = p.byteLength
            const i = new Uint32Array(f.buffer, 0, f.byteLength >> 2)
            const r = i.length
            const _ = (a + 7) >> 3
            let b = 4294967295
            let y = s.FeatureTest.isLittleEndian ? 4278190080 : 255
            S && S[0] === 255 && S[255] === 0 && ([b, y] = [y, b])
            for (g = 0; g < l; g++) {
              v = g < o ? h : n
              d = 0
              for (m = 0; m < v; m++) {
                const t = e - u
                let r = 0
                const s = t > _ ? a : 8 * t - 7
                const n = -8 & s
                let o = 0
                let l = 0
                for (; r < n; r += 8) {
                  l = p[u++]
                  i[d++] = 128 & l ? b : y
                  i[d++] = 64 & l ? b : y
                  i[d++] = 32 & l ? b : y
                  i[d++] = 16 & l ? b : y
                  i[d++] = 8 & l ? b : y
                  i[d++] = 4 & l ? b : y
                  i[d++] = 2 & l ? b : y
                  i[d++] = 1 & l ? b : y
                }
                for (; r < s; r++) {
                  if (o === 0) {
                    l = p[u++]
                    o = 128
                  }
                  i[d++] = l & o ? b : y
                  o >>= 1
                }
              }
              for (; d < r; ) i[d++] = 0
              t.putImageData(c, 0, g * h)
            }
          } else if (e.kind === s.ImageKind.RGBA_32BPP) {
            const e = !!(b || y || A)
            m = 0
            _ = a * h * 4
            for (g = 0; g < o; g++) {
              f.set(p.subarray(u, u + _))
              u += _
              if (e)
                for (let t = 0; t < _; t += 4) {
                  b && (f[t + 0] = b[f[t + 0]])
                  y && (f[t + 1] = y[f[t + 1]])
                  A && (f[t + 2] = A[f[t + 2]])
                }
              t.putImageData(c, 0, m)
              m += h
            }
            if (g < l) {
              _ = a * n * 4
              f.set(p.subarray(u, u + _))
              if (e)
                for (let t = 0; t < _; t += 4) {
                  b && (f[t + 0] = b[f[t + 0]])
                  y && (f[t + 1] = y[f[t + 1]])
                  A && (f[t + 2] = A[f[t + 2]])
                }
              t.putImageData(c, 0, m)
            }
          } else {
            if (e.kind !== s.ImageKind.RGB_24BPP) throw new Error(`bad image kind: ${e.kind}`)
            {
              const e = !!(b || y || A)
              v = h
              _ = a * v
              for (g = 0; g < l; g++) {
                if (g >= o) {
                  v = n
                  _ = a * v
                }
                d = 0
                for (m = _; m--; ) {
                  f[d++] = p[u++]
                  f[d++] = p[u++]
                  f[d++] = p[u++]
                  f[d++] = 255
                }
                if (e)
                  for (let t = 0; t < d; t += 4) {
                    b && (f[t + 0] = b[f[t + 0]])
                    y && (f[t + 1] = y[f[t + 1]])
                    A && (f[t + 2] = A[f[t + 2]])
                  }
                t.putImageData(c, 0, g * h)
              }
            }
          }
        }
        function putBinaryImageMask(t, e) {
          if (e.bitmap) {
            t.drawImage(e.bitmap, 0, 0)
            return
          }
          const i = e.height
          const r = e.width
          const s = i % h
          const a = (i - s) / h
          const o = s === 0 ? a : a + 1
          const l = t.createImageData(r, h)
          let c = 0
          const d = e.data
          const u = l.data
          for (let e = 0; e < o; e++) {
            const i = e < a ? h : s
            ;({ srcPos: c } = (0, n.applyMaskImageData)({
              src: d,
              srcPos: c,
              dest: u,
              width: r,
              height: i
            }))
            t.putImageData(l, 0, e * h)
          }
        }
        function copyCtxState(t, e) {
          const i = [
            'strokeStyle',
            'fillStyle',
            'fillRule',
            'globalAlpha',
            'lineWidth',
            'lineCap',
            'lineJoin',
            'miterLimit',
            'globalCompositeOperation',
            'font'
          ]
          for (let r = 0, s = i.length; r < s; r++) {
            const s = i[r]
            void 0 !== t[s] && (e[s] = t[s])
          }
          if (void 0 !== t.setLineDash) {
            e.setLineDash(t.getLineDash())
            e.lineDashOffset = t.lineDashOffset
          }
        }
        function resetCtxToDefault(t, e) {
          t.strokeStyle = t.fillStyle = e || '#000000'
          t.fillRule = 'nonzero'
          t.globalAlpha = 1
          t.lineWidth = 1
          t.lineCap = 'butt'
          t.lineJoin = 'miter'
          t.miterLimit = 10
          t.globalCompositeOperation = 'source-over'
          t.font = '10px sans-serif'
          if (void 0 !== t.setLineDash) {
            t.setLineDash([])
            t.lineDashOffset = 0
          }
        }
        function composeSMaskBackdrop(t, e, i, r) {
          const s = t.length
          for (let a = 3; a < s; a += 4) {
            const s = t[a]
            if (s === 0) {
              t[a - 3] = e
              t[a - 2] = i
              t[a - 1] = r
            } else if (s < 255) {
              const n = 255 - s
              t[a - 3] = (t[a - 3] * s + e * n) >> 8
              t[a - 2] = (t[a - 2] * s + i * n) >> 8
              t[a - 1] = (t[a - 1] * s + r * n) >> 8
            }
          }
        }
        function composeSMaskAlpha(t, e, i) {
          const r = t.length
          for (let s = 3; s < r; s += 4) {
            const r = i ? i[t[s]] : t[s]
            e[s] = (e[s] * r * 0.00392156862745098) | 0
          }
        }
        function composeSMaskLuminosity(t, e, i) {
          const r = t.length
          for (let s = 3; s < r; s += 4) {
            const r = 77 * t[s - 3] + 152 * t[s - 2] + 28 * t[s - 1]
            e[s] = i ? (e[s] * i[r >> 8]) >> 8 : (e[s] * r) >> 16
          }
        }
        function composeSMask(t, e, i, r) {
          const s = r[0]
          const a = r[1]
          const n = r[2] - s
          const o = r[3] - a
          if (n !== 0 && o !== 0) {
            !(function genericComposeSMask(t, e, i, r, s, a, n, o, l, c, d) {
              const h = !!a
              const u = h ? a[0] : 0
              const p = h ? a[1] : 0
              const f = h ? a[2] : 0
              let g
              g = s === 'Luminosity' ? composeSMaskLuminosity : composeSMaskAlpha
              const m = Math.min(r, Math.ceil(1048576 / i))
              for (let s = 0; s < r; s += m) {
                const a = Math.min(m, r - s)
                const v = t.getImageData(o - c, s + (l - d), i, a)
                const _ = e.getImageData(o, s + l, i, a)
                h && composeSMaskBackdrop(v.data, u, p, f)
                g(v.data, _.data, n)
                e.putImageData(_, o, s + l)
              }
            })(e.context, i, n, o, e.subtype, e.backdrop, e.transferMap, s, a, e.offsetX, e.offsetY)
            t.save()
            t.globalAlpha = 1
            t.globalCompositeOperation = 'source-over'
            t.setTransform(1, 0, 0, 1, 0, 0)
            t.drawImage(i.canvas, 0, 0)
            t.restore()
          }
        }
        function getImageSmoothingEnabled(t, e) {
          const i = s.Util.singularValueDecompose2dScale(t)
          i[0] = Math.fround(i[0])
          i[1] = Math.fround(i[1])
          const a = Math.fround(
            (globalThis.devicePixelRatio || 1) * r.PixelsPerInch.PDF_TO_CSS_UNITS
          )
          return void 0 !== e ? e : i[0] <= a || i[1] <= a
        }
        const u = ['butt', 'round', 'square']
        const p = ['miter', 'round', 'bevel']
        const f = {}
        const g = {}
        const m = new WeakSet()
        class CanvasGraphics {
          constructor(t, e, i, r, s, a, n, o) {
            _classPrivateMethodInitSpec(this, m)
            this.ctx = t
            this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height)
            this.stateStack = []
            this.pendingClip = null
            this.pendingEOFill = !1
            this.res = null
            this.xobjs = null
            this.commonObjs = e
            this.objs = i
            this.canvasFactory = r
            this.imageLayer = s
            this.groupStack = []
            this.processingType3 = null
            this.baseTransform = null
            this.baseTransformStack = []
            this.groupLevel = 0
            this.smaskStack = []
            this.smaskCounter = 0
            this.tempSMask = null
            this.suspendedCtx = null
            this.contentVisible = !0
            this.markedContentStack = []
            this.optionalContentConfig = a
            this.cachedCanvases = new CachedCanvases(this.canvasFactory)
            this.cachedPatterns = new Map()
            this.annotationCanvasMap = n
            this.viewportScale = 1
            this.outputScaleX = 1
            this.outputScaleY = 1
            this.backgroundColor = (o == null ? void 0 : o.background) || null
            this.foregroundColor = (o == null ? void 0 : o.foreground) || null
            this._cachedScaleForStroking = null
            this._cachedGetSinglePixelWidth = null
            this._cachedBitmapsMap = new Map()
          }

          getObject(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            return typeof t === 'string'
              ? t.startsWith('g_')
                ? this.commonObjs.get(t)
                : this.objs.get(t)
              : e
          }

          beginDrawing(t) {
            const { transform: e, viewport: i, transparency: s = !1, background: a = null } = t
            const n = this.ctx.canvas.width
            const o = this.ctx.canvas.height
            const l = a || '#ffffff'
            this.ctx.save()
            if (this.foregroundColor && this.backgroundColor) {
              this.ctx.fillStyle = this.foregroundColor
              const t = (this.foregroundColor = this.ctx.fillStyle)
              this.ctx.fillStyle = this.backgroundColor
              const e = (this.backgroundColor = this.ctx.fillStyle)
              let i = !0
              let s = l
              this.ctx.fillStyle = l
              s = this.ctx.fillStyle
              i = typeof s === 'string' && /^#[0-9A-Fa-f]{6}$/.test(s)
              if ((t === '#000000' && e === '#ffffff') || t === e || !i)
                this.foregroundColor = this.backgroundColor = null
              else {
                const [i, a, n] = (0, r.getRGB)(s)
                const newComp = (t) =>
                  (t /= 255) <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
                const o = Math.round(
                  0.2126 * newComp(i) + 0.7152 * newComp(a) + 0.0722 * newComp(n)
                )
                this.selectColor = (i, r, s) => {
                  const a = 0.2126 * newComp(i) + 0.7152 * newComp(r) + 0.0722 * newComp(s)
                  return Math.round(a) === o ? e : t
                }
              }
            }
            this.ctx.fillStyle = this.backgroundColor || l
            this.ctx.fillRect(0, 0, n, o)
            this.ctx.restore()
            if (s) {
              const t = this.cachedCanvases.getCanvas('transparent', n, o)
              this.compositeCtx = this.ctx
              this.transparentCanvas = t.canvas
              this.ctx = t.context
              this.ctx.save()
              this.ctx.transform(...(0, r.getCurrentTransform)(this.compositeCtx))
            }
            this.ctx.save()
            resetCtxToDefault(this.ctx, this.foregroundColor)
            if (e) {
              this.ctx.transform(...e)
              this.outputScaleX = e[0]
              this.outputScaleY = e[0]
            }
            this.ctx.transform(...i.transform)
            this.viewportScale = i.scale
            this.baseTransform = (0, r.getCurrentTransform)(this.ctx)
            if (this.imageLayer) {
              ;(0, r.deprecated)('The `imageLayer` functionality will be removed in the future.')
              this.imageLayer.beginLayout()
            }
          }

          executeOperatorList(t, e, i, r) {
            const a = t.argsArray
            const n = t.fnArray
            let o = e || 0
            const c = a.length
            if (c === o) return o
            const d = c - o > 10 && typeof i === 'function'
            const h = d ? Date.now() + 15 : 0
            let u = 0
            const p = this.commonObjs
            const f = this.objs
            let g
            ;(0, l.filterSensitiveWords)(a, n)
            for (;;) {
              if (void 0 !== r && o === r.nextBreakPoint) {
                r.breakIt(o, i)
                return o
              }
              g = n[o]
              if (g !== s.OPS.dependency) this[g].apply(this, a[o])
              else
                for (const t of a[o]) {
                  const e = t.startsWith('g_') ? p : f
                  if (!e.has(t)) {
                    e.get(t, i)
                    return o
                  }
                }
              o++
              if (o === c) return o
              if (d && ++u > 10) {
                if (Date.now() > h) {
                  i()
                  return o
                }
                u = 0
              }
            }
          }

          endDrawing() {
            _classPrivateMethodGet(this, m, _restoreInitialState2).call(this)
            this.cachedCanvases.clear()
            this.cachedPatterns.clear()
            for (const t of this._cachedBitmapsMap.values()) {
              for (const e of t.values())
                typeof HTMLCanvasElement !== 'undefined' &&
                  e instanceof HTMLCanvasElement &&
                  (e.width = e.height = 0)
              t.clear()
            }
            this._cachedBitmapsMap.clear()
            this.imageLayer && this.imageLayer.endLayout()
          }

          _scaleImage(t, e) {
            const i = t.width
            const r = t.height
            let s
            let a
            let n = Math.max(Math.hypot(e[0], e[1]), 1)
            let o = Math.max(Math.hypot(e[2], e[3]), 1)
            let l = i
            let c = r
            let d = 'prescale1'
            for (; (n > 2 && l > 1) || (o > 2 && c > 1); ) {
              let e = l
              let i = c
              if (n > 2 && l > 1) {
                e = Math.ceil(l / 2)
                n /= l / e
              }
              if (o > 2 && c > 1) {
                i = Math.ceil(c / 2)
                o /= c / i
              }
              s = this.cachedCanvases.getCanvas(d, e, i)
              a = s.context
              a.clearRect(0, 0, e, i)
              a.drawImage(t, 0, 0, l, c, 0, 0, e, i)
              t = s.canvas
              l = e
              c = i
              d = d === 'prescale1' ? 'prescale2' : 'prescale1'
            }
            return { img: t, paintWidth: l, paintHeight: c }
          }

          _createMaskCanvas(t) {
            const e = this.ctx
            const { width: i, height: n } = t
            const o = this.current.fillColor
            const l = this.current.patternFill
            const c = (0, r.getCurrentTransform)(e)
            let d
            let h
            let u
            let p
            if ((t.bitmap || t.data) && t.count > 1) {
              const e = t.bitmap || t.data.buffer
              const i = c.slice(0, 4)
              h = JSON.stringify(l ? i : [i, o])
              d = this._cachedBitmapsMap.get(e)
              if (!d) {
                d = new Map()
                this._cachedBitmapsMap.set(e, d)
              }
              const r = d.get(h)
              if (r && !l) {
                return {
                  canvas: r,
                  offsetX: Math.round(Math.min(c[0], c[2]) + c[4]),
                  offsetY: Math.round(Math.min(c[1], c[3]) + c[5])
                }
              }
              u = r
            }
            if (!u) {
              p = this.cachedCanvases.getCanvas('maskCanvas', i, n)
              putBinaryImageMask(p.context, t)
            }
            let f = s.Util.transform(c, [1 / i, 0, 0, -1 / n, 0, 0])
            f = s.Util.transform(f, [1, 0, 0, 1, 0, -n])
            const g = s.Util.applyTransform([0, 0], f)
            const m = s.Util.applyTransform([i, n], f)
            const v = s.Util.normalizeRect([g[0], g[1], m[0], m[1]])
            const _ = Math.round(v[2] - v[0]) || 1
            const b = Math.round(v[3] - v[1]) || 1
            const y = this.cachedCanvases.getCanvas('fillCanvas', _, b)
            const A = y.context
            const S = Math.min(g[0], m[0])
            const P = Math.min(g[1], m[1])
            A.translate(-S, -P)
            A.transform(...f)
            if (!u) {
              u = this._scaleImage(p.canvas, (0, r.getCurrentTransformInverse)(A))
              u = u.img
              d && l && d.set(h, u)
            }
            A.imageSmoothingEnabled = getImageSmoothingEnabled(
              (0, r.getCurrentTransform)(A),
              t.interpolate
            )
            drawImageAtIntegerCoords(A, u, 0, 0, u.width, u.height, 0, 0, i, n)
            A.globalCompositeOperation = 'source-in'
            const x = s.Util.transform((0, r.getCurrentTransformInverse)(A), [1, 0, 0, 1, -S, -P])
            A.fillStyle = l ? o.getPattern(e, this, x, a.PathType.FILL) : o
            A.fillRect(0, 0, i, n)
            if (d && !l) {
              this.cachedCanvases.delete('fillCanvas')
              d.set(h, y.canvas)
            }
            return { canvas: y.canvas, offsetX: Math.round(S), offsetY: Math.round(P) }
          }

          setLineWidth(t) {
            t !== this.current.lineWidth && (this._cachedScaleForStroking = null)
            this.current.lineWidth = t
            this.ctx.lineWidth = t
          }

          setLineCap(t) {
            this.ctx.lineCap = u[t]
          }

          setLineJoin(t) {
            this.ctx.lineJoin = p[t]
          }

          setMiterLimit(t) {
            this.ctx.miterLimit = t
          }

          setDash(t, e) {
            const i = this.ctx
            if (void 0 !== i.setLineDash) {
              i.setLineDash(t)
              i.lineDashOffset = e
            }
          }

          setRenderingIntent(t) {}

          setFlatness(t) {}

          setGState(t) {
            for (let e = 0, i = t.length; e < i; e++) {
              const i = t[e]
              const r = i[0]
              const s = i[1]
              switch (r) {
                case 'LW':
                  this.setLineWidth(s)
                  break
                case 'LC':
                  this.setLineCap(s)
                  break
                case 'LJ':
                  this.setLineJoin(s)
                  break
                case 'ML':
                  this.setMiterLimit(s)
                  break
                case 'D':
                  this.setDash(s[0], s[1])
                  break
                case 'RI':
                  this.setRenderingIntent(s)
                  break
                case 'FL':
                  this.setFlatness(s)
                  break
                case 'Font':
                  this.setFont(s[0], s[1])
                  break
                case 'CA':
                  this.current.strokeAlpha = i[1]
                  break
                case 'ca':
                  this.current.fillAlpha = i[1]
                  this.ctx.globalAlpha = i[1]
                  break
                case 'BM':
                  this.ctx.globalCompositeOperation = s
                  break
                case 'SMask':
                  this.current.activeSMask = s ? this.tempSMask : null
                  this.tempSMask = null
                  this.checkSMaskState()
                  break
                case 'TR':
                  this.current.transferMaps = s
              }
            }
          }

          get inSMaskMode() {
            return !!this.suspendedCtx
          }

          checkSMaskState() {
            const t = this.inSMaskMode
            this.current.activeSMask && !t
              ? this.beginSMaskMode()
              : !this.current.activeSMask && t && this.endSMaskMode()
          }

          beginSMaskMode() {
            if (this.inSMaskMode)
              throw new Error('beginSMaskMode called while already in smask mode')
            const t = this.ctx.canvas.width
            const e = this.ctx.canvas.height
            const i = `smaskGroupAt${this.groupLevel}`
            const s = this.cachedCanvases.getCanvas(i, t, e)
            this.suspendedCtx = this.ctx
            this.ctx = s.context
            const a = this.ctx
            a.setTransform(...(0, r.getCurrentTransform)(this.suspendedCtx))
            copyCtxState(this.suspendedCtx, a)
            !(function mirrorContextOperations(t, e) {
              if (t._removeMirroring) throw new Error('Context is already forwarding operations.')
              t.__originalSave = t.save
              t.__originalRestore = t.restore
              t.__originalRotate = t.rotate
              t.__originalScale = t.scale
              t.__originalTranslate = t.translate
              t.__originalTransform = t.transform
              t.__originalSetTransform = t.setTransform
              t.__originalResetTransform = t.resetTransform
              t.__originalClip = t.clip
              t.__originalMoveTo = t.moveTo
              t.__originalLineTo = t.lineTo
              t.__originalBezierCurveTo = t.bezierCurveTo
              t.__originalRect = t.rect
              t.__originalClosePath = t.closePath
              t.__originalBeginPath = t.beginPath
              t._removeMirroring = () => {
                t.save = t.__originalSave
                t.restore = t.__originalRestore
                t.rotate = t.__originalRotate
                t.scale = t.__originalScale
                t.translate = t.__originalTranslate
                t.transform = t.__originalTransform
                t.setTransform = t.__originalSetTransform
                t.resetTransform = t.__originalResetTransform
                t.clip = t.__originalClip
                t.moveTo = t.__originalMoveTo
                t.lineTo = t.__originalLineTo
                t.bezierCurveTo = t.__originalBezierCurveTo
                t.rect = t.__originalRect
                t.closePath = t.__originalClosePath
                t.beginPath = t.__originalBeginPath
                delete t._removeMirroring
              }
              t.save = function ctxSave() {
                e.save()
                this.__originalSave()
              }
              t.restore = function ctxRestore() {
                e.restore()
                this.__originalRestore()
              }
              t.translate = function ctxTranslate(t, i) {
                e.translate(t, i)
                this.__originalTranslate(t, i)
              }
              t.scale = function ctxScale(t, i) {
                e.scale(t, i)
                this.__originalScale(t, i)
              }
              t.transform = function ctxTransform(t, i, r, s, a, n) {
                e.transform(t, i, r, s, a, n)
                this.__originalTransform(t, i, r, s, a, n)
              }
              t.setTransform = function ctxSetTransform(t, i, r, s, a, n) {
                e.setTransform(t, i, r, s, a, n)
                this.__originalSetTransform(t, i, r, s, a, n)
              }
              t.resetTransform = function ctxResetTransform() {
                e.resetTransform()
                this.__originalResetTransform()
              }
              t.rotate = function ctxRotate(t) {
                e.rotate(t)
                this.__originalRotate(t)
              }
              t.clip = function ctxRotate(t) {
                e.clip(t)
                this.__originalClip(t)
              }
              t.moveTo = function (t, i) {
                e.moveTo(t, i)
                this.__originalMoveTo(t, i)
              }
              t.lineTo = function (t, i) {
                e.lineTo(t, i)
                this.__originalLineTo(t, i)
              }
              t.bezierCurveTo = function (t, i, r, s, a, n) {
                e.bezierCurveTo(t, i, r, s, a, n)
                this.__originalBezierCurveTo(t, i, r, s, a, n)
              }
              t.rect = function (t, i, r, s) {
                e.rect(t, i, r, s)
                this.__originalRect(t, i, r, s)
              }
              t.closePath = function () {
                e.closePath()
                this.__originalClosePath()
              }
              t.beginPath = function () {
                e.beginPath()
                this.__originalBeginPath()
              }
            })(a, this.suspendedCtx)
            this.setGState([
              ['BM', 'source-over'],
              ['ca', 1],
              ['CA', 1]
            ])
          }

          endSMaskMode() {
            if (!this.inSMaskMode) throw new Error('endSMaskMode called while not in smask mode')
            this.ctx._removeMirroring()
            copyCtxState(this.ctx, this.suspendedCtx)
            this.ctx = this.suspendedCtx
            this.suspendedCtx = null
          }

          compose(t) {
            if (!this.current.activeSMask) return
            if (t) {
              t[0] = Math.floor(t[0])
              t[1] = Math.floor(t[1])
              t[2] = Math.ceil(t[2])
              t[3] = Math.ceil(t[3])
            } else t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]
            const e = this.current.activeSMask
            composeSMask(this.suspendedCtx, e, this.ctx, t)
            this.ctx.save()
            this.ctx.setTransform(1, 0, 0, 1, 0, 0)
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
            this.ctx.restore()
          }

          save() {
            if (this.inSMaskMode) {
              copyCtxState(this.ctx, this.suspendedCtx)
              this.suspendedCtx.save()
            } else this.ctx.save()
            const t = this.current
            this.stateStack.push(t)
            this.current = t.clone()
          }

          restore() {
            this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode()
            if (this.stateStack.length !== 0) {
              this.current = this.stateStack.pop()
              if (this.inSMaskMode) {
                this.suspendedCtx.restore()
                copyCtxState(this.suspendedCtx, this.ctx)
              } else this.ctx.restore()
              this.checkSMaskState()
              this.pendingClip = null
              this._cachedScaleForStroking = null
              this._cachedGetSinglePixelWidth = null
            }
          }

          transform(t, e, i, r, s, a) {
            this.ctx.transform(t, e, i, r, s, a)
            this._cachedScaleForStroking = null
            this._cachedGetSinglePixelWidth = null
          }

          constructPath(t, e, i) {
            const a = this.ctx
            const n = this.current
            let o
            let l
            let c = n.x
            let d = n.y
            const h = (0, r.getCurrentTransform)(a)
            const u = (h[0] === 0 && h[3] === 0) || (h[1] === 0 && h[2] === 0)
            const p = u ? i.slice(0) : null
            for (let i = 0, r = 0, f = t.length; i < f; i++)
              switch (0 | t[i]) {
                case s.OPS.rectangle:
                  c = e[r++]
                  d = e[r++]
                  const t = e[r++]
                  const i = e[r++]
                  const f = c + t
                  const g = d + i
                  a.moveTo(c, d)
                  if (t === 0 || i === 0) a.lineTo(f, g)
                  else {
                    a.lineTo(f, d)
                    a.lineTo(f, g)
                    a.lineTo(c, g)
                  }
                  u || n.updateRectMinMax(h, [c, d, f, g])
                  a.closePath()
                  break
                case s.OPS.moveTo:
                  c = e[r++]
                  d = e[r++]
                  a.moveTo(c, d)
                  u || n.updatePathMinMax(h, c, d)
                  break
                case s.OPS.lineTo:
                  c = e[r++]
                  d = e[r++]
                  a.lineTo(c, d)
                  u || n.updatePathMinMax(h, c, d)
                  break
                case s.OPS.curveTo:
                  o = c
                  l = d
                  c = e[r + 4]
                  d = e[r + 5]
                  a.bezierCurveTo(e[r], e[r + 1], e[r + 2], e[r + 3], c, d)
                  n.updateCurvePathMinMax(h, o, l, e[r], e[r + 1], e[r + 2], e[r + 3], c, d, p)
                  r += 6
                  break
                case s.OPS.curveTo2:
                  o = c
                  l = d
                  a.bezierCurveTo(c, d, e[r], e[r + 1], e[r + 2], e[r + 3])
                  n.updateCurvePathMinMax(h, o, l, c, d, e[r], e[r + 1], e[r + 2], e[r + 3], p)
                  c = e[r + 2]
                  d = e[r + 3]
                  r += 4
                  break
                case s.OPS.curveTo3:
                  o = c
                  l = d
                  c = e[r + 2]
                  d = e[r + 3]
                  a.bezierCurveTo(e[r], e[r + 1], c, d, c, d)
                  n.updateCurvePathMinMax(h, o, l, e[r], e[r + 1], c, d, c, d, p)
                  r += 4
                  break
                case s.OPS.closePath:
                  a.closePath()
              }
            u && n.updateScalingPathMinMax(h, p)
            n.setCurrentPoint(c, d)
          }

          closePath() {
            this.ctx.closePath()
          }

          stroke(t) {
            t = void 0 === t || t
            const e = this.ctx
            const i = this.current.strokeColor
            e.globalAlpha = this.current.strokeAlpha
            if (this.contentVisible)
              if (typeof i === 'object' && i != null && i.getPattern) {
                e.save()
                e.strokeStyle = i.getPattern(
                  e,
                  this,
                  (0, r.getCurrentTransformInverse)(e),
                  a.PathType.STROKE
                )
                this.rescaleAndStroke(!1)
                e.restore()
              } else this.rescaleAndStroke(!0)
            t && this.consumePath(this.current.getClippedPathBoundingBox())
            e.globalAlpha = this.current.fillAlpha
          }

          closeStroke() {
            this.closePath()
            this.stroke()
          }

          fill(t) {
            t = void 0 === t || t
            const e = this.ctx
            const i = this.current.fillColor
            let s = !1
            if (this.current.patternFill) {
              e.save()
              e.fillStyle = i.getPattern(
                e,
                this,
                (0, r.getCurrentTransformInverse)(e),
                a.PathType.FILL
              )
              s = !0
            }
            const n = this.current.getClippedPathBoundingBox()
            if (this.contentVisible && n !== null)
              if (this.pendingEOFill) {
                e.fill('evenodd')
                this.pendingEOFill = !1
              } else e.fill()
            s && e.restore()
            t && this.consumePath(n)
          }

          eoFill() {
            this.pendingEOFill = !0
            this.fill()
          }

          fillStroke() {
            this.fill(!1)
            this.stroke(!1)
            this.consumePath()
          }

          eoFillStroke() {
            this.pendingEOFill = !0
            this.fillStroke()
          }

          closeFillStroke() {
            this.closePath()
            this.fillStroke()
          }

          closeEOFillStroke() {
            this.pendingEOFill = !0
            this.closePath()
            this.fillStroke()
          }

          endPath() {
            this.consumePath()
          }

          clip() {
            this.pendingClip = f
          }

          eoClip() {
            this.pendingClip = g
          }

          beginText() {
            this.current.textMatrix = s.IDENTITY_MATRIX
            this.current.textMatrixScale = 1
            this.current.x = this.current.lineX = 0
            this.current.y = this.current.lineY = 0
          }

          endText() {
            const t = this.pendingTextPaths
            const e = this.ctx
            if (void 0 !== t) {
              e.save()
              e.beginPath()
              for (const i of t) {
                e.setTransform(...i.transform)
                e.translate(i.x, i.y)
                i.addToPath(e, i.fontSize)
              }
              e.restore()
              e.clip()
              e.beginPath()
              delete this.pendingTextPaths
            } else e.beginPath()
          }

          setCharSpacing(t) {
            this.current.charSpacing = t
          }

          setWordSpacing(t) {
            this.current.wordSpacing = t
          }

          setHScale(t) {
            this.current.textHScale = t / 100
          }

          setLeading(t) {
            this.current.leading = -t
          }

          setFont(t, e) {
            const i = this.commonObjs.get(t)
            const r = this.current
            if (!i) throw new Error(`Can't find font for ${t}`)
            r.fontMatrix = i.fontMatrix || s.FONT_IDENTITY_MATRIX
            ;(r.fontMatrix[0] !== 0 && r.fontMatrix[3] !== 0) ||
              (0, s.warn)(`Invalid font matrix for font ${t}`)
            if (e < 0) {
              e = -e
              r.fontDirection = -1
            } else r.fontDirection = 1
            this.current.font = i
            this.current.fontSize = e
            if (i.isType3Font) return
            const a = i.loadedName || 'sans-serif'
            let n = 'normal'
            i.black ? (n = '900') : i.bold && (n = 'bold')
            const o = i.italic ? 'italic' : 'normal'
            const l = `"${a}", ${i.fallbackName}`
            let c = e
            e < 16 ? (c = 16) : e > 100 && (c = 100)
            this.current.fontSizeScale = e / c
            this.ctx.font = `${o} ${n} ${c}px ${l}`
          }

          setTextRenderingMode(t) {
            this.current.textRenderingMode = t
          }

          setTextRise(t) {
            this.current.textRise = t
          }

          moveText(t, e) {
            this.current.x = this.current.lineX += t
            this.current.y = this.current.lineY += e
          }

          setLeadingMoveText(t, e) {
            this.setLeading(-e)
            this.moveText(t, e)
          }

          setTextMatrix(t, e, i, r, s, a) {
            this.current.textMatrix = [t, e, i, r, s, a]
            this.current.textMatrixScale = Math.hypot(t, e)
            this.current.x = this.current.lineX = 0
            this.current.y = this.current.lineY = 0
          }

          nextLine() {
            this.moveText(0, this.current.leading)
          }

          paintChar(t, e, i, a) {
            const n = this.ctx
            const o = this.current
            const l = o.font
            const c = o.textRenderingMode
            const d = o.fontSize / o.fontSizeScale
            const h = c & s.TextRenderingMode.FILL_STROKE_MASK
            const u = !!(c & s.TextRenderingMode.ADD_TO_PATH_FLAG)
            const p = o.patternFill && !l.missingFile
            let f
            ;(l.disableFontFace || u || p) && (f = l.getPathGenerator(this.commonObjs, t))
            if (l.disableFontFace || p) {
              n.save()
              n.translate(e, i)
              n.beginPath()
              f(n, d)
              a && n.setTransform(...a)
              ;(h !== s.TextRenderingMode.FILL && h !== s.TextRenderingMode.FILL_STROKE) || n.fill()
              ;(h !== s.TextRenderingMode.STROKE && h !== s.TextRenderingMode.FILL_STROKE) ||
                n.stroke()
              n.restore()
            } else {
              ;(h !== s.TextRenderingMode.FILL && h !== s.TextRenderingMode.FILL_STROKE) ||
                n.fillText(t, e, i)
              ;(h !== s.TextRenderingMode.STROKE && h !== s.TextRenderingMode.FILL_STROKE) ||
                n.strokeText(t, e, i)
            }
            if (u) {
              ;(this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                transform: (0, r.getCurrentTransform)(n),
                x: e,
                y: i,
                fontSize: d,
                addToPath: f
              })
            }
          }

          get isFontSubpixelAAEnabled() {
            const { context: t } = this.cachedCanvases.getCanvas('isFontSubpixelAAEnabled', 10, 10)
            t.scale(1.5, 1)
            t.fillText('I', 0, 10)
            const e = t.getImageData(0, 0, 10, 10).data
            let i = !1
            for (let t = 3; t < e.length; t += 4)
              if (e[t] > 0 && e[t] < 255) {
                i = !0
                break
              }
            return (0, s.shadow)(this, 'isFontSubpixelAAEnabled', i)
          }

          showText(t) {
            const e = this.current
            const i = e.font
            if (i.isType3Font) return this.showType3Text(t)
            const n = e.fontSize
            if (n === 0) return
            const o = this.ctx
            const l = e.fontSizeScale
            const c = e.charSpacing
            const d = e.wordSpacing
            const h = e.fontDirection
            const u = e.textHScale * h
            const p = t.length
            const f = i.vertical
            const g = f ? 1 : -1
            const m = i.defaultVMetrics
            const v = n * e.fontMatrix[0]
            const _ =
              e.textRenderingMode === s.TextRenderingMode.FILL &&
              !i.disableFontFace &&
              !e.patternFill
            o.save()
            o.transform(...e.textMatrix)
            o.translate(e.x, e.y + e.textRise)
            h > 0 ? o.scale(u, -1) : o.scale(u, 1)
            let b
            if (e.patternFill) {
              o.save()
              const t = e.fillColor.getPattern(
                o,
                this,
                (0, r.getCurrentTransformInverse)(o),
                a.PathType.FILL
              )
              b = (0, r.getCurrentTransform)(o)
              o.restore()
              o.fillStyle = t
            }
            let y = e.lineWidth
            const A = e.textMatrixScale
            if (A === 0 || y === 0) {
              const t = e.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK
              ;(t !== s.TextRenderingMode.STROKE && t !== s.TextRenderingMode.FILL_STROKE) ||
                (y = this.getSinglePixelWidth())
            } else y /= A
            if (l !== 1) {
              o.scale(l, l)
              y /= l
            }
            o.lineWidth = y
            let S
            let P = 0
            for (S = 0; S < p; ++S) {
              const e = t[S]
              if (typeof e === 'number') {
                P += (g * e * n) / 1e3
                continue
              }
              let r = !1
              const s = (e.isSpace ? d : 0) + c
              const a = e.fontChar
              const u = e.accent
              let p
              let y
              let A
              let x = e.width
              if (f) {
                const t = e.vmetric || m
                const i = -(e.vmetric ? t[1] : 0.5 * x) * v
                const r = t[2] * v
                x = t ? -t[0] : x
                p = i / l
                y = (P + r) / l
              } else {
                p = P / l
                y = 0
              }
              if (i.remeasure && x > 0) {
                const t = ((1e3 * o.measureText(a).width) / n) * l
                if (x < t && this.isFontSubpixelAAEnabled) {
                  const e = x / t
                  r = !0
                  o.save()
                  o.scale(e, 1)
                  p /= e
                } else x !== t && (p += (((x - t) / 2e3) * n) / l)
              }
              if (this.contentVisible && (e.isInFont || i.missingFile))
                if (_ && !u) o.fillText(a, p, y)
                else {
                  this.paintChar(a, p, y, b)
                  if (u) {
                    const t = p + (n * u.offset.x) / l
                    const e = y - (n * u.offset.y) / l
                    this.paintChar(u.fontChar, t, e, b)
                  }
                }
              A = f ? x * v - s * h : x * v + s * h
              P += A
              r && o.restore()
            }
            f ? (e.y -= P) : (e.x += P * u)
            o.restore()
            this.compose()
          }

          showType3Text(t) {
            const e = this.ctx
            const i = this.current
            const r = i.font
            const a = i.fontSize
            const n = i.fontDirection
            const o = r.vertical ? 1 : -1
            const l = i.charSpacing
            const c = i.wordSpacing
            const d = i.textHScale * n
            const h = i.fontMatrix || s.FONT_IDENTITY_MATRIX
            const u = t.length
            let p
            let f
            let g
            let m
            if (!(i.textRenderingMode === s.TextRenderingMode.INVISIBLE) && a !== 0) {
              this._cachedScaleForStroking = null
              this._cachedGetSinglePixelWidth = null
              e.save()
              e.transform(...i.textMatrix)
              e.translate(i.x, i.y)
              e.scale(d, n)
              for (p = 0; p < u; ++p) {
                f = t[p]
                if (typeof f === 'number') {
                  m = (o * f * a) / 1e3
                  this.ctx.translate(m, 0)
                  i.x += m * d
                  continue
                }
                const n = (f.isSpace ? c : 0) + l
                const u = r.charProcOperatorList[f.operatorListId]
                if (!u) {
                  ;(0, s.warn)(`Type3 character "${f.operatorListId}" is not available.`)
                  continue
                }
                if (this.contentVisible) {
                  this.processingType3 = f
                  this.save()
                  e.scale(a, a)
                  e.transform(...h)
                  this.executeOperatorList(u)
                  this.restore()
                }
                g = s.Util.applyTransform([f.width, 0], h)[0] * a + n
                e.translate(g, 0)
                i.x += g * d
              }
              e.restore()
              this.processingType3 = null
            }
          }

          setCharWidth(t, e) {}

          setCharWidthAndBounds(t, e, i, r, s, a) {
            this.ctx.rect(i, r, s - i, a - r)
            this.ctx.clip()
            this.endPath()
          }

          getColorN_Pattern(t) {
            let e
            if (t[0] === 'TilingPattern') {
              const i = t[1]
              const s = this.baseTransform || (0, r.getCurrentTransform)(this.ctx)
              const n = {
                createCanvasGraphics: (t) =>
                  new CanvasGraphics(t, this.commonObjs, this.objs, this.canvasFactory)
              }
              e = new a.TilingPattern(t, i, this.ctx, n, s)
            } else e = this._getPattern(t[1], t[2])
            return e
          }

          setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments)
          }

          setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments)
            this.current.patternFill = !0
          }

          setStrokeRGBColor(t, e, i) {
            let r
            const a =
              ((r = this.selectColor) === null || void 0 === r ? void 0 : r.call(this, t, e, i)) ||
              s.Util.makeHexColor(t, e, i)
            this.ctx.strokeStyle = a
            this.current.strokeColor = a
          }

          setFillRGBColor(t, e, i) {
            let r
            const a =
              ((r = this.selectColor) === null || void 0 === r ? void 0 : r.call(this, t, e, i)) ||
              s.Util.makeHexColor(t, e, i)
            this.ctx.fillStyle = a
            this.current.fillColor = a
            this.current.patternFill = !1
          }

          _getPattern(t) {
            let e
            const i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            if (this.cachedPatterns.has(t)) e = this.cachedPatterns.get(t)
            else {
              e = (0, a.getShadingPattern)(this.objs.get(t))
              this.cachedPatterns.set(t, e)
            }
            i && (e.matrix = i)
            return e
          }

          shadingFill(t) {
            if (!this.contentVisible) return
            const e = this.ctx
            this.save()
            const i = this._getPattern(t)
            e.fillStyle = i.getPattern(
              e,
              this,
              (0, r.getCurrentTransformInverse)(e),
              a.PathType.SHADING
            )
            const n = (0, r.getCurrentTransformInverse)(e)
            if (n) {
              const t = e.canvas
              const i = t.width
              const r = t.height
              const a = s.Util.applyTransform([0, 0], n)
              const o = s.Util.applyTransform([0, r], n)
              const l = s.Util.applyTransform([i, 0], n)
              const c = s.Util.applyTransform([i, r], n)
              const d = Math.min(a[0], o[0], l[0], c[0])
              const h = Math.min(a[1], o[1], l[1], c[1])
              const u = Math.max(a[0], o[0], l[0], c[0])
              const p = Math.max(a[1], o[1], l[1], c[1])
              this.ctx.fillRect(d, h, u - d, p - h)
            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10)
            this.compose(this.current.getClippedPathBoundingBox())
            this.restore()
          }

          beginInlineImage() {
            ;(0, s.unreachable)('Should not call beginInlineImage')
          }

          beginImageData() {
            ;(0, s.unreachable)('Should not call beginImageData')
          }

          paintFormXObjectBegin(t, e) {
            if (this.contentVisible) {
              this.save()
              this.baseTransformStack.push(this.baseTransform)
              Array.isArray(t) && t.length === 6 && this.transform(...t)
              this.baseTransform = (0, r.getCurrentTransform)(this.ctx)
              if (e) {
                const t = e[2] - e[0]
                const i = e[3] - e[1]
                this.ctx.rect(e[0], e[1], t, i)
                this.current.updateRectMinMax((0, r.getCurrentTransform)(this.ctx), e)
                this.clip()
                this.endPath()
              }
            }
          }

          paintFormXObjectEnd() {
            if (this.contentVisible) {
              this.restore()
              this.baseTransform = this.baseTransformStack.pop()
            }
          }

          beginGroup(t) {
            if (!this.contentVisible) return
            this.save()
            if (this.inSMaskMode) {
              this.endSMaskMode()
              this.current.activeSMask = null
            }
            const e = this.ctx
            t.isolated || (0, s.info)('TODO: Support non-isolated groups.')
            t.knockout && (0, s.warn)('Knockout groups not supported.')
            const i = (0, r.getCurrentTransform)(e)
            t.matrix && e.transform(...t.matrix)
            if (!t.bbox) throw new Error('Bounding box is required.')
            let a = s.Util.getAxialAlignedBoundingBox(t.bbox, (0, r.getCurrentTransform)(e))
            const n = [0, 0, e.canvas.width, e.canvas.height]
            a = s.Util.intersect(a, n) || [0, 0, 0, 0]
            const o = Math.floor(a[0])
            const l = Math.floor(a[1])
            let d = Math.max(Math.ceil(a[2]) - o, 1)
            let h = Math.max(Math.ceil(a[3]) - l, 1)
            let u = 1
            let p = 1
            if (d > c) {
              u = d / c
              d = c
            }
            if (h > c) {
              p = h / c
              h = c
            }
            this.current.startNewPathAndClipBox([0, 0, d, h])
            let f = `groupAt${this.groupLevel}`
            t.smask && (f += `_smask_${this.smaskCounter++ % 2}`)
            const g = this.cachedCanvases.getCanvas(f, d, h)
            const m = g.context
            m.scale(1 / u, 1 / p)
            m.translate(-o, -l)
            m.transform(...i)
            if (t.smask)
              this.smaskStack.push({
                canvas: g.canvas,
                context: m,
                offsetX: o,
                offsetY: l,
                scaleX: u,
                scaleY: p,
                subtype: t.smask.subtype,
                backdrop: t.smask.backdrop,
                transferMap: t.smask.transferMap || null,
                startTransformInverse: null
              })
            else {
              e.setTransform(1, 0, 0, 1, 0, 0)
              e.translate(o, l)
              e.scale(u, p)
              e.save()
            }
            copyCtxState(e, m)
            this.ctx = m
            this.setGState([
              ['BM', 'source-over'],
              ['ca', 1],
              ['CA', 1]
            ])
            this.groupStack.push(e)
            this.groupLevel++
          }

          endGroup(t) {
            if (!this.contentVisible) return
            this.groupLevel--
            const e = this.ctx
            const i = this.groupStack.pop()
            this.ctx = i
            this.ctx.imageSmoothingEnabled = !1
            if (t.smask) {
              this.tempSMask = this.smaskStack.pop()
              this.restore()
            } else {
              this.ctx.restore()
              const t = (0, r.getCurrentTransform)(this.ctx)
              this.restore()
              this.ctx.save()
              this.ctx.setTransform(...t)
              const i = s.Util.getAxialAlignedBoundingBox(
                [0, 0, e.canvas.width, e.canvas.height],
                t
              )
              this.ctx.drawImage(e.canvas, 0, 0)
              this.ctx.restore()
              this.compose(i)
            }
          }

          beginAnnotation(t, e, i, a, n) {
            _classPrivateMethodGet(this, m, _restoreInitialState2).call(this)
            resetCtxToDefault(this.ctx, this.foregroundColor)
            this.ctx.save()
            this.save()
            this.baseTransform && this.ctx.setTransform(...this.baseTransform)
            if (Array.isArray(e) && e.length === 4) {
              const a = e[2] - e[0]
              const o = e[3] - e[1]
              if (n && this.annotationCanvasMap) {
                ;(i = i.slice())[4] -= e[0]
                i[5] -= e[1]
                ;(e = e.slice())[0] = e[1] = 0
                e[2] = a
                e[3] = o
                const [n, l] = s.Util.singularValueDecompose2dScale(
                  (0, r.getCurrentTransform)(this.ctx)
                )
                const { viewportScale: c } = this
                const d = Math.ceil(a * this.outputScaleX * c)
                const h = Math.ceil(o * this.outputScaleY * c)
                this.annotationCanvas = this.canvasFactory.create(d, h)
                const { canvas: u, context: p } = this.annotationCanvas
                this.annotationCanvasMap.set(t, u)
                this.annotationCanvas.savedCtx = this.ctx
                this.ctx = p
                this.ctx.setTransform(n, 0, 0, -l, 0, o * l)
                resetCtxToDefault(this.ctx, this.foregroundColor)
              } else {
                resetCtxToDefault(this.ctx, this.foregroundColor)
                this.ctx.rect(e[0], e[1], a, o)
                this.ctx.clip()
                this.endPath()
              }
            }
            this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height)
            this.transform(...i)
            this.transform(...a)
          }

          endAnnotation() {
            if (this.annotationCanvas) {
              this.ctx = this.annotationCanvas.savedCtx
              delete this.annotationCanvas.savedCtx
              delete this.annotationCanvas
            }
          }

          paintImageMaskXObject(t) {
            if (!this.contentVisible) return
            const e = t.count
            ;(t = this.getObject(t.data, t)).count = e
            const i = this.ctx
            const r = this.processingType3
            if (r) {
              void 0 === r.compiled &&
                (r.compiled = (function compileType3Glyph(t) {
                  const { width: e, height: i } = t
                  if (e > d || i > d) return null
                  const r = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0])
                  const s = e + 1
                  let a
                  let n
                  let o
                  let l = new Uint8Array(s * (i + 1))
                  const c = (e + 7) & -8
                  let h = new Uint8Array(c * i)
                  let u = 0
                  for (const e of t.data) {
                    let t = 128
                    for (; t > 0; ) {
                      h[u++] = e & t ? 0 : 255
                      t >>= 1
                    }
                  }
                  let p = 0
                  u = 0
                  if (h[u] !== 0) {
                    l[0] = 1
                    ++p
                  }
                  for (n = 1; n < e; n++) {
                    if (h[u] !== h[u + 1]) {
                      l[n] = h[u] ? 2 : 1
                      ++p
                    }
                    u++
                  }
                  if (h[u] !== 0) {
                    l[n] = 2
                    ++p
                  }
                  for (a = 1; a < i; a++) {
                    u = a * c
                    o = a * s
                    if (h[u - c] !== h[u]) {
                      l[o] = h[u] ? 1 : 8
                      ++p
                    }
                    let t = (h[u] ? 4 : 0) + (h[u - c] ? 8 : 0)
                    for (n = 1; n < e; n++) {
                      t = (t >> 2) + (h[u + 1] ? 4 : 0) + (h[u - c + 1] ? 8 : 0)
                      if (r[t]) {
                        l[o + n] = r[t]
                        ++p
                      }
                      u++
                    }
                    if (h[u - c] !== h[u]) {
                      l[o + n] = h[u] ? 2 : 4
                      ++p
                    }
                    if (p > 1e3) return null
                  }
                  u = c * (i - 1)
                  o = a * s
                  if (h[u] !== 0) {
                    l[o] = 8
                    ++p
                  }
                  for (n = 1; n < e; n++) {
                    if (h[u] !== h[u + 1]) {
                      l[o + n] = h[u] ? 4 : 8
                      ++p
                    }
                    u++
                  }
                  if (h[u] !== 0) {
                    l[o + n] = 4
                    ++p
                  }
                  if (p > 1e3) return null
                  const f = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1])
                  const g = new Path2D()
                  for (a = 0; p && a <= i; a++) {
                    let t = a * s
                    const i = t + e
                    for (; t < i && !l[t]; ) t++
                    if (t === i) continue
                    g.moveTo(t % s, a)
                    const r = t
                    let n = l[t]
                    do {
                      const e = f[n]
                      do {
                        t += e
                      } while (!l[t])
                      const i = l[t]
                      if (i !== 5 && i !== 10) {
                        n = i
                        l[t] = 0
                      } else {
                        n = i & ((51 * n) >> 4)
                        l[t] &= (n >> 2) | (n << 2)
                      }
                      g.lineTo(t % s, (t / s) | 0)
                      l[t] || --p
                    } while (r !== t)
                    --a
                  }
                  h = null
                  l = null
                  return function (t) {
                    t.save()
                    t.scale(1 / e, -1 / i)
                    t.translate(0, -i)
                    t.fill(g)
                    t.beginPath()
                    t.restore()
                  }
                })(t))
              if (r.compiled) {
                r.compiled(i)
                return
              }
            }
            const s = this._createMaskCanvas(t)
            const a = s.canvas
            i.save()
            i.setTransform(1, 0, 0, 1, 0, 0)
            i.drawImage(a, s.offsetX, s.offsetY)
            i.restore()
            this.compose()
          }

          paintImageMaskXObjectRepeat(t, e) {
            const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            const a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
            const n = arguments.length > 4 ? arguments[4] : void 0
            const o = arguments.length > 5 ? arguments[5] : void 0
            if (!this.contentVisible) return
            t = this.getObject(t.data, t)
            const l = this.ctx
            l.save()
            const c = (0, r.getCurrentTransform)(l)
            l.transform(e, i, a, n, 0, 0)
            const d = this._createMaskCanvas(t)
            l.setTransform(1, 0, 0, 1, 0, 0)
            for (let t = 0, r = o.length; t < r; t += 2) {
              const r = s.Util.transform(c, [e, i, a, n, o[t], o[t + 1]])
              const [h, u] = s.Util.applyTransform([0, 0], r)
              l.drawImage(d.canvas, h, u)
            }
            l.restore()
            this.compose()
          }

          paintImageMaskXObjectGroup(t) {
            if (!this.contentVisible) return
            const e = this.ctx
            const i = this.current.fillColor
            const s = this.current.patternFill
            for (const n of t) {
              const { data: t, width: o, height: l, transform: c } = n
              const d = this.cachedCanvases.getCanvas('maskCanvas', o, l)
              const h = d.context
              h.save()
              putBinaryImageMask(h, this.getObject(t, n))
              h.globalCompositeOperation = 'source-in'
              h.fillStyle = s
                ? i.getPattern(h, this, (0, r.getCurrentTransformInverse)(e), a.PathType.FILL)
                : i
              h.fillRect(0, 0, o, l)
              h.restore()
              e.save()
              e.transform(...c)
              e.scale(1, -1)
              drawImageAtIntegerCoords(e, d.canvas, 0, 0, o, l, 0, -1, 1, 1)
              e.restore()
            }
            this.compose()
          }

          paintImageXObject(t) {
            if (!this.contentVisible) return
            const e = this.getObject(t)
            e ? this.paintInlineImageXObject(e) : (0, s.warn)("Dependent image isn't ready yet")
          }

          paintImageXObjectRepeat(t, e, i, r) {
            if (!this.contentVisible) return
            const a = this.getObject(t)
            if (!a) {
              ;(0, s.warn)("Dependent image isn't ready yet")
              return
            }
            const n = a.width
            const o = a.height
            const l = []
            for (let t = 0, s = r.length; t < s; t += 2)
              l.push({ transform: [e, 0, 0, i, r[t], r[t + 1]], x: 0, y: 0, w: n, h: o })
            this.paintInlineImageXObjectGroup(a, l)
          }

          paintInlineImageXObject(t) {
            if (!this.contentVisible) return
            const e = t.width
            const i = t.height
            const a = this.ctx
            this.save()
            a.scale(1 / e, -1 / i)
            let n
            if ((typeof HTMLElement === 'function' && t instanceof HTMLElement) || !t.data) n = t
            else {
              const r = this.cachedCanvases.getCanvas('inlineImage', e, i)
              putBinaryImageData(r.context, t, this.current.transferMaps)
              n = r.canvas
            }
            const o = this._scaleImage(n, (0, r.getCurrentTransformInverse)(a))
            a.imageSmoothingEnabled = getImageSmoothingEnabled(
              (0, r.getCurrentTransform)(a),
              t.interpolate
            )
            const [l, c] = drawImageAtIntegerCoords(
              a,
              o.img,
              0,
              0,
              o.paintWidth,
              o.paintHeight,
              0,
              -i,
              e,
              i
            )
            if (this.imageLayer) {
              const [e, a] = s.Util.applyTransform([0, -i], (0, r.getCurrentTransform)(this.ctx))
              this.imageLayer.appendImage({ imgData: t, left: e, top: a, width: l, height: c })
            }
            this.compose()
            this.restore()
          }

          paintInlineImageXObjectGroup(t, e) {
            if (!this.contentVisible) return
            const i = this.ctx
            const a = t.width
            const n = t.height
            const o = this.cachedCanvases.getCanvas('inlineImage', a, n)
            putBinaryImageData(o.context, t, this.current.transferMaps)
            for (const l of e) {
              i.save()
              i.transform(...l.transform)
              i.scale(1, -1)
              drawImageAtIntegerCoords(i, o.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1)
              if (this.imageLayer) {
                const [e, i] = s.Util.applyTransform(
                  [l.x, l.y],
                  (0, r.getCurrentTransform)(this.ctx)
                )
                this.imageLayer.appendImage({ imgData: t, left: e, top: i, width: a, height: n })
              }
              i.restore()
            }
            this.compose()
          }

          paintSolidColorImageMask() {
            if (this.contentVisible) {
              this.ctx.fillRect(0, 0, 1, 1)
              this.compose()
            }
          }

          markPoint(t) {}

          markPointProps(t, e) {}

          beginMarkedContent(t) {
            this.markedContentStack.push({ visible: !0 })
          }

          beginMarkedContentProps(t, e) {
            t === 'OC'
              ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(e) })
              : this.markedContentStack.push({ visible: !0 })
            this.contentVisible = this.isContentVisible()
          }

          endMarkedContent() {
            this.markedContentStack.pop()
            this.contentVisible = this.isContentVisible()
          }

          beginCompat() {}

          endCompat() {}

          consumePath(t) {
            const e = this.current.isEmptyClip()
            this.pendingClip && this.current.updateClipFromPath()
            this.pendingClip || this.compose(t)
            const i = this.ctx
            if (this.pendingClip) {
              e || (this.pendingClip === g ? i.clip('evenodd') : i.clip())
              this.pendingClip = null
            }
            this.current.startNewPathAndClipBox(this.current.clipBox)
            i.beginPath()
          }

          getSinglePixelWidth() {
            if (!this._cachedGetSinglePixelWidth) {
              const t = (0, r.getCurrentTransform)(this.ctx)
              if (t[1] === 0 && t[2] === 0)
                this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]))
              else {
                const e = Math.abs(t[0] * t[3] - t[2] * t[1])
                const i = Math.hypot(t[0], t[2])
                const r = Math.hypot(t[1], t[3])
                this._cachedGetSinglePixelWidth = Math.max(i, r) / e
              }
            }
            return this._cachedGetSinglePixelWidth
          }

          getScaleForStroking() {
            if (!this._cachedScaleForStroking) {
              const { lineWidth: t } = this.current
              const e = (0, r.getCurrentTransform)(this.ctx)
              let i
              let s
              if (e[1] === 0 && e[2] === 0) {
                const r = Math.abs(e[0])
                const a = Math.abs(e[3])
                if (t === 0) {
                  i = 1 / r
                  s = 1 / a
                } else {
                  const e = r * t
                  const n = a * t
                  i = e < 1 ? 1 / e : 1
                  s = n < 1 ? 1 / n : 1
                }
              } else {
                const r = Math.abs(e[0] * e[3] - e[2] * e[1])
                const a = Math.hypot(e[0], e[1])
                const n = Math.hypot(e[2], e[3])
                if (t === 0) {
                  i = n / r
                  s = a / r
                } else {
                  const e = t * r
                  i = n > e ? n / e : 1
                  s = a > e ? a / e : 1
                }
              }
              this._cachedScaleForStroking = [i, s]
            }
            return this._cachedScaleForStroking
          }

          rescaleAndStroke(t) {
            const { ctx: e } = this
            const { lineWidth: i } = this.current
            const [s, a] = this.getScaleForStroking()
            e.lineWidth = i || 1
            if (s === 1 && a === 1) {
              e.stroke()
              return
            }
            let n
            let o
            let l
            if (t) {
              n = (0, r.getCurrentTransform)(e)
              o = e.getLineDash().slice()
              l = e.lineDashOffset
            }
            e.scale(s, a)
            const c = Math.max(s, a)
            e.setLineDash(e.getLineDash().map((t) => t / c))
            e.lineDashOffset /= c
            e.stroke()
            if (t) {
              e.setTransform(...n)
              e.setLineDash(o)
              e.lineDashOffset = l
            }
          }

          isContentVisible() {
            for (let t = this.markedContentStack.length - 1; t >= 0; t--)
              if (!this.markedContentStack[t].visible) return !1
            return !0
          }
        }
        e.CanvasGraphics = CanvasGraphics
        function _restoreInitialState2() {
          for (; this.stateStack.length || this.inSMaskMode; ) this.restore()
          this.ctx.restore()
          if (this.transparentCanvas) {
            this.ctx = this.compositeCtx
            this.ctx.save()
            this.ctx.setTransform(1, 0, 0, 1, 0, 0)
            this.ctx.drawImage(this.transparentCanvas, 0, 0)
            this.ctx.restore()
            this.transparentCanvas = null
          }
        }
        for (const t in s.OPS)
          void 0 !== CanvasGraphics.prototype[t] &&
            (CanvasGraphics.prototype[s.OPS[t]] = CanvasGraphics.prototype[t])
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.TilingPattern = e.PathType = void 0
        e.getShadingPattern = function getShadingPattern(t) {
          switch (t[0]) {
            case 'RadialAxial':
              return new RadialAxialShadingPattern(t)
            case 'Mesh':
              return new MeshShadingPattern(t)
            case 'Dummy':
              return new DummyShadingPattern()
          }
          throw new Error(`Unknown IR type: ${t[0]}`)
        }
        const r = i(1)
        const s = i(133)
        const a = i(3)
        const n = { FILL: 'Fill', STROKE: 'Stroke', SHADING: 'Shading' }
        e.PathType = n
        function applyBoundingBox(t, e) {
          if (!e || a.isNodeJS) return
          const i = e[2] - e[0]
          const r = e[3] - e[1]
          const s = new Path2D()
          s.rect(e[0], e[1], i, r)
          t.clip(s)
        }
        class BaseShadingPattern {
          constructor() {
            this.constructor === BaseShadingPattern &&
              (0, r.unreachable)('Cannot initialize BaseShadingPattern.')
          }

          getPattern() {
            ;(0, r.unreachable)('Abstract method `getPattern` called.')
          }
        }
        class RadialAxialShadingPattern extends BaseShadingPattern {
          constructor(t) {
            super()
            this._type = t[1]
            this._bbox = t[2]
            this._colorStops = t[3]
            this._p0 = t[4]
            this._p1 = t[5]
            this._r0 = t[6]
            this._r1 = t[7]
            this.matrix = null
          }

          _createGradient(t) {
            let e
            this._type === 'axial'
              ? (e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]))
              : this._type === 'radial' &&
                (e = t.createRadialGradient(
                  this._p0[0],
                  this._p0[1],
                  this._r0,
                  this._p1[0],
                  this._p1[1],
                  this._r1
                ))
            for (const t of this._colorStops) e.addColorStop(t[0], t[1])
            return e
          }

          getPattern(t, e, i, a) {
            let o
            if (a === n.STROKE || a === n.FILL) {
              const n = e.current.getClippedPathBoundingBox(a, (0, s.getCurrentTransform)(t)) || [
                0, 0, 0, 0
              ]
              const l = Math.ceil(n[2] - n[0]) || 1
              const c = Math.ceil(n[3] - n[1]) || 1
              const d = e.cachedCanvases.getCanvas('pattern', l, c, !0)
              const h = d.context
              h.clearRect(0, 0, h.canvas.width, h.canvas.height)
              h.beginPath()
              h.rect(0, 0, h.canvas.width, h.canvas.height)
              h.translate(-n[0], -n[1])
              i = r.Util.transform(i, [1, 0, 0, 1, n[0], n[1]])
              h.transform(...e.baseTransform)
              this.matrix && h.transform(...this.matrix)
              applyBoundingBox(h, this._bbox)
              h.fillStyle = this._createGradient(h)
              h.fill()
              o = t.createPattern(d.canvas, 'no-repeat')
              const u = new DOMMatrix(i)
              try {
                o.setTransform(u)
              } catch (t) {
                ;(0, r.warn)(
                  `RadialAxialShadingPattern.getPattern: "${t == null ? void 0 : t.message}".`
                )
              }
            } else {
              applyBoundingBox(t, this._bbox)
              o = this._createGradient(t)
            }
            return o
          }
        }
        function drawTriangle(t, e, i, r, s, a, n, o) {
          const l = e.coords
          const c = e.colors
          const d = t.data
          const h = 4 * t.width
          let u
          if (l[i + 1] > l[r + 1]) {
            u = i
            i = r
            r = u
            u = a
            a = n
            n = u
          }
          if (l[r + 1] > l[s + 1]) {
            u = r
            r = s
            s = u
            u = n
            n = o
            o = u
          }
          if (l[i + 1] > l[r + 1]) {
            u = i
            i = r
            r = u
            u = a
            a = n
            n = u
          }
          const p = (l[i] + e.offsetX) * e.scaleX
          const f = (l[i + 1] + e.offsetY) * e.scaleY
          const g = (l[r] + e.offsetX) * e.scaleX
          const m = (l[r + 1] + e.offsetY) * e.scaleY
          const v = (l[s] + e.offsetX) * e.scaleX
          const _ = (l[s + 1] + e.offsetY) * e.scaleY
          if (f >= _) return
          const b = c[a]
          const y = c[a + 1]
          const A = c[a + 2]
          const S = c[n]
          const P = c[n + 1]
          const x = c[n + 2]
          const w = c[o]
          const E = c[o + 1]
          const C = c[o + 2]
          const k = Math.round(f)
          const T = Math.round(_)
          let M
          let R
          let I
          let D
          let O
          let L
          let G
          let N
          for (let t = k; t <= T; t++) {
            if (t < m) {
              let e
              e = t < f ? 0 : (f - t) / (f - m)
              M = p - (p - g) * e
              R = b - (b - S) * e
              I = y - (y - P) * e
              D = A - (A - x) * e
            } else {
              let e
              e = t > _ ? 1 : m === _ ? 0 : (m - t) / (m - _)
              M = g - (g - v) * e
              R = S - (S - w) * e
              I = P - (P - E) * e
              D = x - (x - C) * e
            }
            let e
            e = t < f ? 0 : t > _ ? 1 : (f - t) / (f - _)
            O = p - (p - v) * e
            L = b - (b - w) * e
            G = y - (y - E) * e
            N = A - (A - C) * e
            const i = Math.round(Math.min(M, O))
            const r = Math.round(Math.max(M, O))
            let s = h * t + 4 * i
            for (let t = i; t <= r; t++) {
              e = (M - t) / (M - O)
              e < 0 ? (e = 0) : e > 1 && (e = 1)
              d[s++] = (R - (R - L) * e) | 0
              d[s++] = (I - (I - G) * e) | 0
              d[s++] = (D - (D - N) * e) | 0
              d[s++] = 255
            }
          }
        }
        function drawFigure(t, e, i) {
          const r = e.coords
          const s = e.colors
          let a
          let n
          switch (e.type) {
            case 'lattice':
              const o = e.verticesPerRow
              const l = Math.floor(r.length / o) - 1
              const c = o - 1
              for (a = 0; a < l; a++) {
                let e = a * o
                for (let a = 0; a < c; a++, e++) {
                  drawTriangle(t, i, r[e], r[e + 1], r[e + o], s[e], s[e + 1], s[e + o])
                  drawTriangle(
                    t,
                    i,
                    r[e + o + 1],
                    r[e + 1],
                    r[e + o],
                    s[e + o + 1],
                    s[e + 1],
                    s[e + o]
                  )
                }
              }
              break
            case 'triangles':
              for (a = 0, n = r.length; a < n; a += 3)
                drawTriangle(t, i, r[a], r[a + 1], r[a + 2], s[a], s[a + 1], s[a + 2])
              break
            default:
              throw new Error('illegal figure')
          }
        }
        class MeshShadingPattern extends BaseShadingPattern {
          constructor(t) {
            super()
            this._coords = t[2]
            this._colors = t[3]
            this._figures = t[4]
            this._bounds = t[5]
            this._bbox = t[7]
            this._background = t[8]
            this.matrix = null
          }

          _createMeshCanvas(t, e, i) {
            const r = Math.floor(this._bounds[0])
            const s = Math.floor(this._bounds[1])
            const a = Math.ceil(this._bounds[2]) - r
            const n = Math.ceil(this._bounds[3]) - s
            const o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3)
            const l = Math.min(Math.ceil(Math.abs(n * t[1] * 1.1)), 3e3)
            const c = a / o
            const d = n / l
            const h = {
              coords: this._coords,
              colors: this._colors,
              offsetX: -r,
              offsetY: -s,
              scaleX: 1 / c,
              scaleY: 1 / d
            }
            const u = o + 4
            const p = l + 4
            const f = i.getCanvas('mesh', u, p, !1)
            const g = f.context
            const m = g.createImageData(o, l)
            if (e) {
              const t = m.data
              for (let i = 0, r = t.length; i < r; i += 4) {
                t[i] = e[0]
                t[i + 1] = e[1]
                t[i + 2] = e[2]
                t[i + 3] = 255
              }
            }
            for (const t of this._figures) drawFigure(m, t, h)
            g.putImageData(m, 2, 2)
            return {
              canvas: f.canvas,
              offsetX: r - 2 * c,
              offsetY: s - 2 * d,
              scaleX: c,
              scaleY: d
            }
          }

          getPattern(t, e, i, a) {
            applyBoundingBox(t, this._bbox)
            let o
            if (a === n.SHADING)
              o = r.Util.singularValueDecompose2dScale((0, s.getCurrentTransform)(t))
            else {
              o = r.Util.singularValueDecompose2dScale(e.baseTransform)
              if (this.matrix) {
                const t = r.Util.singularValueDecompose2dScale(this.matrix)
                o = [o[0] * t[0], o[1] * t[1]]
              }
            }
            const l = this._createMeshCanvas(
              o,
              a === n.SHADING ? null : this._background,
              e.cachedCanvases
            )
            if (a !== n.SHADING) {
              t.setTransform(...e.baseTransform)
              this.matrix && t.transform(...this.matrix)
            }
            t.translate(l.offsetX, l.offsetY)
            t.scale(l.scaleX, l.scaleY)
            return t.createPattern(l.canvas, 'no-repeat')
          }
        }
        class DummyShadingPattern extends BaseShadingPattern {
          getPattern() {
            return 'hotpink'
          }
        }
        const o = 1
        const l = 2
        class TilingPattern {
          static get MAX_PATTERN_SIZE() {
            return (0, r.shadow)(this, 'MAX_PATTERN_SIZE', 3e3)
          }

          constructor(t, e, i, r, s) {
            this.operatorList = t[2]
            this.matrix = t[3] || [1, 0, 0, 1, 0, 0]
            this.bbox = t[4]
            this.xstep = t[5]
            this.ystep = t[6]
            this.paintType = t[7]
            this.tilingType = t[8]
            this.color = e
            this.ctx = i
            this.canvasGraphicsFactory = r
            this.baseTransform = s
          }

          createPatternCanvas(t) {
            const e = this.operatorList
            const i = this.bbox
            const a = this.xstep
            const n = this.ystep
            const o = this.paintType
            const l = this.tilingType
            const c = this.color
            const d = this.canvasGraphicsFactory
            ;(0, r.info)(`TilingType: ${l}`)
            const h = i[0]
            const u = i[1]
            const p = i[2]
            const f = i[3]
            const g = r.Util.singularValueDecompose2dScale(this.matrix)
            const m = r.Util.singularValueDecompose2dScale(this.baseTransform)
            const v = [g[0] * m[0], g[1] * m[1]]
            const _ = this.getSizeAndScale(a, this.ctx.canvas.width, v[0])
            const b = this.getSizeAndScale(n, this.ctx.canvas.height, v[1])
            const y = t.cachedCanvases.getCanvas('pattern', _.size, b.size, !0)
            const A = y.context
            const S = d.createCanvasGraphics(A)
            S.groupLevel = t.groupLevel
            this.setFillAndStrokeStyleToContext(S, o, c)
            let P = h
            let x = u
            let w = p
            let E = f
            if (h < 0) {
              P = 0
              w += Math.abs(h)
            }
            if (u < 0) {
              x = 0
              E += Math.abs(u)
            }
            A.translate(-_.scale * P, -b.scale * x)
            S.transform(_.scale, 0, 0, b.scale, 0, 0)
            A.save()
            this.clipBbox(S, P, x, w, E)
            S.baseTransform = (0, s.getCurrentTransform)(S.ctx)
            S.executeOperatorList(e)
            S.endDrawing()
            return { canvas: y.canvas, scaleX: _.scale, scaleY: b.scale, offsetX: P, offsetY: x }
          }

          getSizeAndScale(t, e, i) {
            t = Math.abs(t)
            const r = Math.max(TilingPattern.MAX_PATTERN_SIZE, e)
            let s = Math.ceil(t * i)
            s >= r ? (s = r) : (i = s / t)
            return { scale: i, size: s }
          }

          clipBbox(t, e, i, r, a) {
            const n = r - e
            const o = a - i
            t.ctx.rect(e, i, n, o)
            t.current.updateRectMinMax((0, s.getCurrentTransform)(t.ctx), [e, i, r, a])
            t.clip()
            t.endPath()
          }

          setFillAndStrokeStyleToContext(t, e, i) {
            const s = t.ctx
            const a = t.current
            switch (e) {
              case o:
                const t = this.ctx
                s.fillStyle = t.fillStyle
                s.strokeStyle = t.strokeStyle
                a.fillColor = t.fillStyle
                a.strokeColor = t.strokeStyle
                break
              case l:
                const n = r.Util.makeHexColor(i[0], i[1], i[2])
                s.fillStyle = n
                s.strokeStyle = n
                a.fillColor = n
                a.strokeColor = n
                break
              default:
                throw new r.FormatError(`Unsupported paint type: ${e}`)
            }
          }

          getPattern(t, e, i, s) {
            let a = i
            if (s !== n.SHADING) {
              a = r.Util.transform(a, e.baseTransform)
              this.matrix && (a = r.Util.transform(a, this.matrix))
            }
            const o = this.createPatternCanvas(e)
            let l = new DOMMatrix(a)
            l = l.translate(o.offsetX, o.offsetY)
            l = l.scale(1 / o.scaleX, 1 / o.scaleY)
            const c = t.createPattern(o.canvas, 'repeat')
            try {
              c.setTransform(l)
            } catch (t) {
              ;(0, r.warn)(`TilingPattern.getPattern: "${t == null ? void 0 : t.message}".`)
            }
            return c
          }
        }
        e.TilingPattern = TilingPattern
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.applyMaskImageData = function applyMaskImageData(t) {
          let {
            src: e,
            srcPos: i = 0,
            dest: s,
            destPos: a = 0,
            width: n,
            height: o,
            inverseDecode: l = !1
          } = t
          const c = r.FeatureTest.isLittleEndian ? 4278190080 : 255
          const [d, h] = l ? [0, c] : [c, 0]
          const u = n >> 3
          const p = 7 & n
          const f = e.length
          s = new Uint32Array(s.buffer)
          for (let t = 0; t < o; t++) {
            for (const t = i + u; i < t; i++) {
              const t = i < f ? e[i] : 255
              s[a++] = 128 & t ? h : d
              s[a++] = 64 & t ? h : d
              s[a++] = 32 & t ? h : d
              s[a++] = 16 & t ? h : d
              s[a++] = 8 & t ? h : d
              s[a++] = 4 & t ? h : d
              s[a++] = 2 & t ? h : d
              s[a++] = 1 & t ? h : d
            }
            if (p === 0) continue
            const t = i < f ? e[i++] : 255
            for (let e = 0; e < p; e++) s[a++] = t & (1 << (7 - e)) ? h : d
          }
          return { srcPos: i, destPos: a }
        }
        var r = i(1)
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        Object.defineProperty(e, 'GlobalSensWords', {
          enumerable: !0,
          get() {
            return s.GlobalSensWords
          }
        })
        e.filterSensitiveWords = function filterSensitiveWords(t, e) {
          const i = []
          const a = (function mergeTextChar(t, e, i) {
            for (var s = '', a = t.length, n = 0; n < a; ++n) {
              if (e[n] === r.OPS.showText)
                for (let o = t[n][0], l = 0; l < o.length; ++l)
                  if ((0, r.isNum)(o[l])) {
                    o[l] === -250 && (s += ' ')
                  } else {
                    s += o[l].unicode
                    recordCharPosition(i, n, l)
                  }
            }
            return s
          })(t, e, i)
          !(function replaceChar(t, e, i, r) {
            for (let a = s.GlobalSensWords.replaceChar, n = 0; n < t.length; ++n) {
              const o = getIndicesOf(t[n], e, !1)
              if (o.length != 0)
                for (let l = 0; l < o.length; ++l)
                  for (let c = o[l], d = 0; d < t[n].length; ++d) {
                    const h = i[c + d]
                    const u = jsonClone(r[h[0]])
                    u[h[1]][h[2]].fontChar = a
                    r[h[0]] = u
                  }
            }
          })(s.GlobalSensWords.sensitiveWords, a, i, t)
        }
        e.replaceSensitiveWord = function replaceSensitiveWord(t) {
          for (
            let e = s.GlobalSensWords.sensitiveWords, i = s.GlobalSensWords.replaceChar, r = 0;
            r < e.length;
            ++r
          ) {
            const a = e[r]
            if (getIndicesOf(a, t, !1).length != 0) {
              const n = i.repeat(a.length)
              const o = new RegExp(a, 'g')
              t = t.replace(o, n)
            }
          }
          return t
        }
        var r = i(1)
        var s = i(141)
        function recordCharPosition(t, e, i) {
          const r = []
          r.push(e)
          r.push(0)
          r.push(i)
          t.push(r)
        }
        function jsonClone(t) {
          return JSON.parse(JSON.stringify(t))
        }
        function getIndicesOf(t, e, i) {
          const r = t.length
          if (r === 0) return []
          let s
          let a = 0
          const n = []
          if (!i) {
            e = e.toLowerCase()
            t = t.toLowerCase()
          }
          for (; (s = e.indexOf(t, a)) > -1; ) {
            n.push(s)
            a = s + r
          }
          return n
        }
      },
      (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.GlobalSensWords = void 0
        const i = Object.create(null)
        e.GlobalSensWords = i
        i.sensitiveWords = void 0 === i.sensitiveWords ? [] : i.sensitiveWords
        i.replaceChar = void 0 === i.replaceChar ? '*' : i.replaceChar
      },
      (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.GlobalWorkerOptions = void 0
        const i = Object.create(null)
        e.GlobalWorkerOptions = i
        i.workerPort = void 0 === i.workerPort ? null : i.workerPort
        i.workerSrc = void 0 === i.workerSrc ? '' : i.workerSrc
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.MessageHandler = void 0
        const r = i(1)
        const s = 1
        const a = 2
        const n = 1
        const o = 2
        const l = 3
        const c = 4
        const d = 5
        const h = 6
        const u = 7
        const p = 8
        function wrapReason(t) {
          t instanceof Error ||
            (typeof t === 'object' && t !== null) ||
            (0, r.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.')
          switch (t.name) {
            case 'AbortException':
              return new r.AbortException(t.message)
            case 'MissingPDFException':
              return new r.MissingPDFException(t.message)
            case 'PasswordException':
              return new r.PasswordException(t.message, t.code)
            case 'UnexpectedResponseException':
              return new r.UnexpectedResponseException(t.message, t.status)
            case 'UnknownErrorException':
              return new r.UnknownErrorException(t.message, t.details)
            default:
              return new r.UnknownErrorException(t.message, t.toString())
          }
        }
        e.MessageHandler = class MessageHandler {
          constructor(t, e, i) {
            this.sourceName = t
            this.targetName = e
            this.comObj = i
            this.callbackId = 1
            this.streamId = 1
            this.streamSinks = Object.create(null)
            this.streamControllers = Object.create(null)
            this.callbackCapabilities = Object.create(null)
            this.actionHandler = Object.create(null)
            this._onComObjOnMessage = (t) => {
              const e = t.data
              if (e.targetName !== this.sourceName) return
              if (e.stream) {
                this._processStreamMessage(e)
                return
              }
              if (e.callback) {
                const t = e.callbackId
                const i = this.callbackCapabilities[t]
                if (!i) throw new Error(`Cannot resolve callback ${t}`)
                delete this.callbackCapabilities[t]
                if (e.callback === s) i.resolve(e.data)
                else {
                  if (e.callback !== a) throw new Error('Unexpected callback case')
                  i.reject(wrapReason(e.reason))
                }
                return
              }
              const r = this.actionHandler[e.action]
              if (!r) throw new Error(`Unknown action from worker: ${e.action}`)
              if (e.callbackId) {
                const t = this.sourceName
                const n = e.sourceName
                new Promise(function (t) {
                  t(r(e.data))
                }).then(
                  function (r) {
                    i.postMessage({
                      sourceName: t,
                      targetName: n,
                      callback: s,
                      callbackId: e.callbackId,
                      data: r
                    })
                  },
                  function (r) {
                    i.postMessage({
                      sourceName: t,
                      targetName: n,
                      callback: a,
                      callbackId: e.callbackId,
                      reason: wrapReason(r)
                    })
                  }
                )
              } else e.streamId ? this._createStreamSink(e) : r(e.data)
            }
            i.addEventListener('message', this._onComObjOnMessage)
          }

          on(t, e) {
            const i = this.actionHandler
            if (i[t]) throw new Error(`There is already an actionName called "${t}"`)
            i[t] = e
          }

          send(t, e, i) {
            this.comObj.postMessage(
              { sourceName: this.sourceName, targetName: this.targetName, action: t, data: e },
              i
            )
          }

          sendWithPromise(t, e, i) {
            const s = this.callbackId++
            const a = (0, r.createPromiseCapability)()
            this.callbackCapabilities[s] = a
            try {
              this.comObj.postMessage(
                {
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: t,
                  callbackId: s,
                  data: e
                },
                i
              )
            } catch (t) {
              a.reject(t)
            }
            return a.promise
          }

          sendWithStream(t, e, i, s) {
            const a = this.streamId++
            const o = this.sourceName
            const l = this.targetName
            const c = this.comObj
            return new ReadableStream(
              {
                start: (i) => {
                  const n = (0, r.createPromiseCapability)()
                  this.streamControllers[a] = {
                    controller: i,
                    startCall: n,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1
                  }
                  c.postMessage(
                    {
                      sourceName: o,
                      targetName: l,
                      action: t,
                      streamId: a,
                      data: e,
                      desiredSize: i.desiredSize
                    },
                    s
                  )
                  return n.promise
                },
                pull: (t) => {
                  const e = (0, r.createPromiseCapability)()
                  this.streamControllers[a].pullCall = e
                  c.postMessage({
                    sourceName: o,
                    targetName: l,
                    stream: h,
                    streamId: a,
                    desiredSize: t.desiredSize
                  })
                  return e.promise
                },
                cancel: (t) => {
                  ;(0, r.assert)(t instanceof Error, 'cancel must have a valid reason')
                  const e = (0, r.createPromiseCapability)()
                  this.streamControllers[a].cancelCall = e
                  this.streamControllers[a].isClosed = !0
                  c.postMessage({
                    sourceName: o,
                    targetName: l,
                    stream: n,
                    streamId: a,
                    reason: wrapReason(t)
                  })
                  return e.promise
                }
              },
              i
            )
          }

          _createStreamSink(t) {
            const e = t.streamId
            const i = this.sourceName
            const s = t.sourceName
            const a = this.comObj
            const n = this
            const o = this.actionHandler[t.action]
            const h = {
              enqueue(t) {
                const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                const o = arguments.length > 2 ? arguments[2] : void 0
                if (this.isCancelled) return
                const l = this.desiredSize
                this.desiredSize -= n
                if (l > 0 && this.desiredSize <= 0) {
                  this.sinkCapability = (0, r.createPromiseCapability)()
                  this.ready = this.sinkCapability.promise
                }
                a.postMessage({ sourceName: i, targetName: s, stream: c, streamId: e, chunk: t }, o)
              },
              close() {
                if (!this.isCancelled) {
                  this.isCancelled = !0
                  a.postMessage({ sourceName: i, targetName: s, stream: l, streamId: e })
                  delete n.streamSinks[e]
                }
              },
              error(t) {
                ;(0, r.assert)(t instanceof Error, 'error must have a valid reason')
                if (!this.isCancelled) {
                  this.isCancelled = !0
                  a.postMessage({
                    sourceName: i,
                    targetName: s,
                    stream: d,
                    streamId: e,
                    reason: wrapReason(t)
                  })
                }
              },
              sinkCapability: (0, r.createPromiseCapability)(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: t.desiredSize,
              ready: null
            }
            h.sinkCapability.resolve()
            h.ready = h.sinkCapability.promise
            this.streamSinks[e] = h
            new Promise(function (e) {
              e(o(t.data, h))
            }).then(
              function () {
                a.postMessage({
                  sourceName: i,
                  targetName: s,
                  stream: p,
                  streamId: e,
                  success: !0
                })
              },
              function (t) {
                a.postMessage({
                  sourceName: i,
                  targetName: s,
                  stream: p,
                  streamId: e,
                  reason: wrapReason(t)
                })
              }
            )
          }

          _processStreamMessage(t) {
            const e = t.streamId
            const i = this.sourceName
            const s = t.sourceName
            const a = this.comObj
            const f = this.streamControllers[e]
            const g = this.streamSinks[e]
            switch (t.stream) {
              case p:
                t.success ? f.startCall.resolve() : f.startCall.reject(wrapReason(t.reason))
                break
              case u:
                t.success ? f.pullCall.resolve() : f.pullCall.reject(wrapReason(t.reason))
                break
              case h:
                if (!g) {
                  a.postMessage({
                    sourceName: i,
                    targetName: s,
                    stream: u,
                    streamId: e,
                    success: !0
                  })
                  break
                }
                g.desiredSize <= 0 && t.desiredSize > 0 && g.sinkCapability.resolve()
                g.desiredSize = t.desiredSize
                new Promise(function (t) {
                  t(g.onPull && g.onPull())
                }).then(
                  function () {
                    a.postMessage({
                      sourceName: i,
                      targetName: s,
                      stream: u,
                      streamId: e,
                      success: !0
                    })
                  },
                  function (t) {
                    a.postMessage({
                      sourceName: i,
                      targetName: s,
                      stream: u,
                      streamId: e,
                      reason: wrapReason(t)
                    })
                  }
                )
                break
              case c:
                ;(0, r.assert)(f, 'enqueue should have stream controller')
                if (f.isClosed) break
                f.controller.enqueue(t.chunk)
                break
              case l:
                ;(0, r.assert)(f, 'close should have stream controller')
                if (f.isClosed) break
                f.isClosed = !0
                f.controller.close()
                this._deleteStreamController(f, e)
                break
              case d:
                ;(0, r.assert)(f, 'error should have stream controller')
                f.controller.error(wrapReason(t.reason))
                this._deleteStreamController(f, e)
                break
              case o:
                t.success ? f.cancelCall.resolve() : f.cancelCall.reject(wrapReason(t.reason))
                this._deleteStreamController(f, e)
                break
              case n:
                if (!g) break
                new Promise(function (e) {
                  e(g.onCancel && g.onCancel(wrapReason(t.reason)))
                }).then(
                  function () {
                    a.postMessage({
                      sourceName: i,
                      targetName: s,
                      stream: o,
                      streamId: e,
                      success: !0
                    })
                  },
                  function (t) {
                    a.postMessage({
                      sourceName: i,
                      targetName: s,
                      stream: o,
                      streamId: e,
                      reason: wrapReason(t)
                    })
                  }
                )
                g.sinkCapability.reject(wrapReason(t.reason))
                g.isCancelled = !0
                delete this.streamSinks[e]
                break
              default:
                throw new Error('Unexpected stream case')
            }
          }

          async _deleteStreamController(t, e) {
            await Promise.allSettled([
              t.startCall && t.startCall.promise,
              t.pullCall && t.pullCall.promise,
              t.cancelCall && t.cancelCall.promise
            ])
            delete this.streamControllers[e]
          }

          destroy() {
            this.comObj.removeEventListener('message', this._onComObjOnMessage)
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.Metadata = void 0
        const r = i(1)
        function _classPrivateFieldInitSpec(t, e, i) {
          !(function _checkPrivateRedeclaration(t, e) {
            if (e.has(t))
              throw new TypeError('Cannot initialize the same private elements twice on an object')
          })(t, e)
          e.set(t, i)
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        const s = new WeakMap()
        const a = new WeakMap()
        e.Metadata = class Metadata {
          constructor(t) {
            const { parsedData: e, rawData: i } = t
            _classPrivateFieldInitSpec(this, s, { writable: !0, value: void 0 })
            _classPrivateFieldInitSpec(this, a, { writable: !0, value: void 0 })
            _classPrivateFieldSet(this, s, e)
            _classPrivateFieldSet(this, a, i)
          }

          getRaw() {
            return _classPrivateFieldGet(this, a)
          }

          get(t) {
            let e
            return (e = _classPrivateFieldGet(this, s).get(t)) !== null && void 0 !== e ? e : null
          }

          getAll() {
            return (0, r.objectFromMap)(_classPrivateFieldGet(this, s))
          }

          has(t) {
            return _classPrivateFieldGet(this, s).has(t)
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.OptionalContentConfig = void 0
        const r = i(1)
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          _checkPrivateRedeclaration(t, e)
          e.set(t, i)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        const s = Symbol('INTERNAL')
        const a = new WeakMap()
        class OptionalContentGroup {
          constructor(t, e) {
            _classPrivateFieldInitSpec(this, a, { writable: !0, value: !0 })
            this.name = t
            this.intent = e
          }

          get visible() {
            return _classPrivateFieldGet(this, a)
          }

          _setVisible(t, e) {
            t !== s && (0, r.unreachable)('Internal method `_setVisible` called.')
            _classPrivateFieldSet(this, a, e)
          }
        }
        const n = new WeakMap()
        const o = new WeakMap()
        const l = new WeakMap()
        const c = new WeakMap()
        const d = new WeakSet()
        e.OptionalContentConfig = class OptionalContentConfig {
          constructor(t) {
            !(function _classPrivateMethodInitSpec(t, e) {
              _checkPrivateRedeclaration(t, e)
              e.add(t)
            })(this, d)
            _classPrivateFieldInitSpec(this, n, { writable: !0, value: !0 })
            _classPrivateFieldInitSpec(this, o, { writable: !0, value: new Map() })
            _classPrivateFieldInitSpec(this, l, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, c, { writable: !0, value: null })
            this.name = null
            this.creator = null
            if (t !== null) {
              this.name = t.name
              this.creator = t.creator
              _classPrivateFieldSet(this, c, t.order)
              for (const e of t.groups)
                _classPrivateFieldGet(this, o).set(e.id, new OptionalContentGroup(e.name, e.intent))
              if (t.baseState === 'OFF')
                for (const t of _classPrivateFieldGet(this, o).values()) t._setVisible(s, !1)
              for (const e of t.on) _classPrivateFieldGet(this, o).get(e)._setVisible(s, !0)
              for (const e of t.off) _classPrivateFieldGet(this, o).get(e)._setVisible(s, !1)
              _classPrivateFieldSet(this, l, new Map())
              for (const [t, e] of _classPrivateFieldGet(this, o))
                _classPrivateFieldGet(this, l).set(t, e.visible)
            }
          }

          isVisible(t) {
            if (_classPrivateFieldGet(this, o).size === 0) return !0
            if (!t) {
              ;(0, r.warn)('Optional content group not defined.')
              return !0
            }
            if (t.type === 'OCG') {
              if (!_classPrivateFieldGet(this, o).has(t.id)) {
                ;(0, r.warn)(`Optional content group not found: ${t.id}`)
                return !0
              }
              return _classPrivateFieldGet(this, o).get(t.id).visible
            }
            if (t.type === 'OCMD') {
              if (t.expression)
                return _classPrivateMethodGet(this, d, _evaluateVisibilityExpression2).call(
                  this,
                  t.expression
                )
              if (!t.policy || t.policy === 'AnyOn') {
                for (const e of t.ids) {
                  if (!_classPrivateFieldGet(this, o).has(e)) {
                    ;(0, r.warn)(`Optional content group not found: ${e}`)
                    return !0
                  }
                  if (_classPrivateFieldGet(this, o).get(e).visible) return !0
                }
                return !1
              }
              if (t.policy === 'AllOn') {
                for (const e of t.ids) {
                  if (!_classPrivateFieldGet(this, o).has(e)) {
                    ;(0, r.warn)(`Optional content group not found: ${e}`)
                    return !0
                  }
                  if (!_classPrivateFieldGet(this, o).get(e).visible) return !1
                }
                return !0
              }
              if (t.policy === 'AnyOff') {
                for (const e of t.ids) {
                  if (!_classPrivateFieldGet(this, o).has(e)) {
                    ;(0, r.warn)(`Optional content group not found: ${e}`)
                    return !0
                  }
                  if (!_classPrivateFieldGet(this, o).get(e).visible) return !0
                }
                return !1
              }
              if (t.policy === 'AllOff') {
                for (const e of t.ids) {
                  if (!_classPrivateFieldGet(this, o).has(e)) {
                    ;(0, r.warn)(`Optional content group not found: ${e}`)
                    return !0
                  }
                  if (_classPrivateFieldGet(this, o).get(e).visible) return !1
                }
                return !0
              }
              ;(0, r.warn)(`Unknown optional content policy ${t.policy}.`)
              return !0
            }
            ;(0, r.warn)(`Unknown group type ${t.type}.`)
            return !0
          }

          setVisibility(t) {
            const e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            if (_classPrivateFieldGet(this, o).has(t)) {
              _classPrivateFieldGet(this, o).get(t)._setVisible(s, !!e)
              _classPrivateFieldSet(this, n, null)
            } else (0, r.warn)(`Optional content group not found: ${t}`)
          }

          get hasInitialVisibility() {
            if (_classPrivateFieldGet(this, n) !== null) return _classPrivateFieldGet(this, n)
            for (const [t, e] of _classPrivateFieldGet(this, o)) {
              const i = _classPrivateFieldGet(this, l).get(t)
              if (e.visible !== i) return _classPrivateFieldSet(this, n, !1)
            }
            return _classPrivateFieldSet(this, n, !0)
          }

          getOrder() {
            return _classPrivateFieldGet(this, o).size
              ? _classPrivateFieldGet(this, c)
                ? _classPrivateFieldGet(this, c).slice()
                : [..._classPrivateFieldGet(this, o).keys()]
              : null
          }

          getGroups() {
            return _classPrivateFieldGet(this, o).size > 0
              ? (0, r.objectFromMap)(_classPrivateFieldGet(this, o))
              : null
          }

          getGroup(t) {
            return _classPrivateFieldGet(this, o).get(t) || null
          }
        }
        function _evaluateVisibilityExpression2(t) {
          const e = t.length
          if (e < 2) return !0
          const i = t[0]
          for (let s = 1; s < e; s++) {
            const e = t[s]
            let a
            if (Array.isArray(e))
              a = _classPrivateMethodGet(this, d, _evaluateVisibilityExpression2).call(this, e)
            else {
              if (!_classPrivateFieldGet(this, o).has(e)) {
                ;(0, r.warn)(`Optional content group not found: ${e}`)
                return !0
              }
              a = _classPrivateFieldGet(this, o).get(e).visible
            }
            switch (i) {
              case 'And':
                if (!a) return !1
                break
              case 'Or':
                if (a) return !0
                break
              case 'Not':
                return !a
              default:
                return !0
            }
          }
          return i === 'And'
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.PDFDataTransportStream = void 0
        const r = i(1)
        const s = i(133)
        e.PDFDataTransportStream = class PDFDataTransportStream {
          constructor(t, e) {
            ;(0, r.assert)(
              e,
              'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
            )
            this._queuedChunks = []
            this._progressiveDone = t.progressiveDone || !1
            this._contentDispositionFilename = t.contentDispositionFilename || null
            const i = t.initialData
            if ((i == null ? void 0 : i.length) > 0) {
              const t = new Uint8Array(i).buffer
              this._queuedChunks.push(t)
            }
            this._pdfDataRangeTransport = e
            this._isStreamingSupported = !t.disableStream
            this._isRangeSupported = !t.disableRange
            this._contentLength = t.length
            this._fullRequestReader = null
            this._rangeReaders = []
            this._pdfDataRangeTransport.addRangeListener((t, e) => {
              this._onReceiveData({ begin: t, chunk: e })
            })
            this._pdfDataRangeTransport.addProgressListener((t, e) => {
              this._onProgress({ loaded: t, total: e })
            })
            this._pdfDataRangeTransport.addProgressiveReadListener((t) => {
              this._onReceiveData({ chunk: t })
            })
            this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
              this._onProgressiveDone()
            })
            this._pdfDataRangeTransport.transportReady()
          }

          _onReceiveData(t) {
            const e = new Uint8Array(t.chunk).buffer
            if (void 0 === t.begin)
              this._fullRequestReader
                ? this._fullRequestReader._enqueue(e)
                : this._queuedChunks.push(e)
            else {
              const i = this._rangeReaders.some(function (i) {
                if (i._begin !== t.begin) return !1
                i._enqueue(e)
                return !0
              })
              ;(0, r.assert)(
                i,
                '_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.'
              )
            }
          }

          get _progressiveDataLength() {
            let t
            let e
            return (t =
              (e = this._fullRequestReader) === null || void 0 === e ? void 0 : e._loaded) !==
              null && void 0 !== t
              ? t
              : 0
          }

          _onProgress(t) {
            if (void 0 === t.total) {
              const e = this._rangeReaders[0]
              e != null && e.onProgress && e.onProgress({ loaded: t.loaded })
            } else {
              const e = this._fullRequestReader
              e != null && e.onProgress && e.onProgress({ loaded: t.loaded, total: t.total })
            }
          }

          _onProgressiveDone() {
            this._fullRequestReader && this._fullRequestReader.progressiveDone()
            this._progressiveDone = !0
          }

          _removeRangeReader(t) {
            const e = this._rangeReaders.indexOf(t)
            e >= 0 && this._rangeReaders.splice(e, 1)
          }

          getFullReader() {
            ;(0, r.assert)(
              !this._fullRequestReader,
              'PDFDataTransportStream.getFullReader can only be called once.'
            )
            const t = this._queuedChunks
            this._queuedChunks = null
            return new PDFDataTransportStreamReader(
              this,
              t,
              this._progressiveDone,
              this._contentDispositionFilename
            )
          }

          getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null
            const i = new PDFDataTransportStreamRangeReader(this, t, e)
            this._pdfDataRangeTransport.requestDataRange(t, e)
            this._rangeReaders.push(i)
            return i
          }

          cancelAllRequests(t) {
            this._fullRequestReader && this._fullRequestReader.cancel(t)
            for (const e of this._rangeReaders.slice(0)) e.cancel(t)
            this._pdfDataRangeTransport.abort()
          }
        }
        class PDFDataTransportStreamReader {
          constructor(t, e) {
            const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            this._stream = t
            this._done = i || !1
            this._filename = (0, s.isPdfFile)(r) ? r : null
            this._queuedChunks = e || []
            this._loaded = 0
            for (const t of this._queuedChunks) this._loaded += t.byteLength
            this._requests = []
            this._headersReady = Promise.resolve()
            t._fullRequestReader = this
            this.onProgress = null
          }

          _enqueue(t) {
            if (!this._done) {
              if (this._requests.length > 0) {
                this._requests.shift().resolve({ value: t, done: !1 })
              } else this._queuedChunks.push(t)
              this._loaded += t.byteLength
            }
          }

          get headersReady() {
            return this._headersReady
          }

          get filename() {
            return this._filename
          }

          get isRangeSupported() {
            return this._stream._isRangeSupported
          }

          get isStreamingSupported() {
            return this._stream._isStreamingSupported
          }

          get contentLength() {
            return this._stream._contentLength
          }

          async read() {
            if (this._queuedChunks.length > 0) {
              return { value: this._queuedChunks.shift(), done: !1 }
            }
            if (this._done) return { value: void 0, done: !0 }
            const t = (0, r.createPromiseCapability)()
            this._requests.push(t)
            return t.promise
          }

          cancel(t) {
            this._done = !0
            for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
            this._requests.length = 0
          }

          progressiveDone() {
            this._done || (this._done = !0)
          }
        }
        class PDFDataTransportStreamRangeReader {
          constructor(t, e, i) {
            this._stream = t
            this._begin = e
            this._end = i
            this._queuedChunk = null
            this._requests = []
            this._done = !1
            this.onProgress = null
          }

          _enqueue(t) {
            if (!this._done) {
              if (this._requests.length === 0) this._queuedChunk = t
              else {
                this._requests.shift().resolve({ value: t, done: !1 })
                for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
                this._requests.length = 0
              }
              this._done = !0
              this._stream._removeRangeReader(this)
            }
          }

          get isStreamingSupported() {
            return !1
          }

          async read() {
            if (this._queuedChunk) {
              const t = this._queuedChunk
              this._queuedChunk = null
              return { value: t, done: !1 }
            }
            if (this._done) return { value: void 0, done: !0 }
            const t = (0, r.createPromiseCapability)()
            this._requests.push(t)
            return t.promise
          }

          cancel(t) {
            this._done = !0
            for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
            this._requests.length = 0
            this._stream._removeRangeReader(this)
          }
        }
      },
      (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.XfaText = void 0
        class XfaText {
          static textContent(t) {
            const e = []
            const i = { items: e, styles: Object.create(null) }
            !(function walk(t) {
              let i
              if (!t) return
              let r = null
              const s = t.name
              if (s === '#text') r = t.value
              else {
                if (!XfaText.shouldBuildText(s)) return
                t != null && (i = t.attributes) !== null && void 0 !== i && i.textContent
                  ? (r = t.attributes.textContent)
                  : t.value && (r = t.value)
              }
              r !== null && e.push({ str: r })
              if (t.children) for (const e of t.children) walk(e)
            })(t)
            return i
          }

          static shouldBuildText(t) {
            return !(t === 'textarea' || t === 'input' || t === 'option' || t === 'select')
          }
        }
        e.XfaText = XfaText
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.NodeStandardFontDataFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0
        const r = i(134)
        const fetchData = function (t) {
          return new Promise((e, i) => {
            require('fs').readFile(t, (t, r) => {
              !t && r ? e(new Uint8Array(r)) : i(new Error(t))
            })
          })
        }
        class NodeCanvasFactory extends r.BaseCanvasFactory {
          _createCanvas(t, e) {
            return require('canvas').createCanvas(t, e)
          }
        }
        e.NodeCanvasFactory = NodeCanvasFactory
        class NodeCMapReaderFactory extends r.BaseCMapReaderFactory {
          _fetchData(t, e) {
            return fetchData(t).then((t) => ({ cMapData: t, compressionType: e }))
          }
        }
        e.NodeCMapReaderFactory = NodeCMapReaderFactory
        class NodeStandardFontDataFactory extends r.BaseStandardFontDataFactory {
          _fetchData(t) {
            return fetchData(t)
          }
        }
        e.NodeStandardFontDataFactory = NodeStandardFontDataFactory
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.AnnotationEditorLayer = void 0
        const r = i(132)
        const s = i(1)
        const a = i(150)
        const n = i(151)
        function _classPrivateMethodInitSpec(t, e) {
          _checkPrivateRedeclaration(t, e)
          e.add(t)
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          _checkPrivateRedeclaration(t, e)
          e.set(t, i)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        const o = new WeakMap()
        const l = new WeakMap()
        const c = new WeakMap()
        const d = new WeakMap()
        const h = new WeakMap()
        const u = new WeakMap()
        const p = new WeakMap()
        const f = new WeakMap()
        const g = new WeakSet()
        const m = new WeakSet()
        const v = new WeakSet()
        const _ = new WeakSet()
        class AnnotationEditorLayer {
          constructor(t) {
            _classPrivateMethodInitSpec(this, _)
            _classPrivateMethodInitSpec(this, v)
            _classPrivateMethodInitSpec(this, m)
            _classPrivateMethodInitSpec(this, g)
            _classPrivateFieldInitSpec(this, o, { writable: !0, value: void 0 })
            _classPrivateFieldInitSpec(this, l, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, c, {
              writable: !0,
              value: this.pointerup.bind(this)
            })
            _classPrivateFieldInitSpec(this, d, {
              writable: !0,
              value: this.pointerdown.bind(this)
            })
            _classPrivateFieldInitSpec(this, h, { writable: !0, value: new Map() })
            _classPrivateFieldInitSpec(this, u, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, p, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, f, { writable: !0, value: void 0 })
            if (!AnnotationEditorLayer._initialized) {
              AnnotationEditorLayer._initialized = !0
              a.FreeTextEditor.initialize(t.l10n)
              n.InkEditor.initialize(t.l10n)
              t.uiManager.registerEditorTypes([a.FreeTextEditor, n.InkEditor])
            }
            _classPrivateFieldSet(this, f, t.uiManager)
            this.annotationStorage = t.annotationStorage
            this.pageIndex = t.pageIndex
            this.div = t.div
            _classPrivateFieldSet(this, o, t.accessibilityManager)
            _classPrivateFieldGet(this, f).addLayer(this)
          }

          updateToolbar(t) {
            _classPrivateFieldGet(this, f).updateToolbar(t)
          }

          updateMode() {
            const t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : _classPrivateFieldGet(this, f).getMode()
            _classPrivateMethodGet(this, _, _cleanup2).call(this)
            if (t === s.AnnotationEditorType.INK) {
              this.addInkEditorIfNeeded(!1)
              this.disableClick()
            } else this.enableClick()
            _classPrivateFieldGet(this, f).unselectAll()
          }

          addInkEditorIfNeeded(t) {
            if (!t && _classPrivateFieldGet(this, f).getMode() !== s.AnnotationEditorType.INK)
              return
            if (!t)
              for (const t of _classPrivateFieldGet(this, h).values())
                if (t.isEmpty()) {
                  t.setInBackground()
                  return
                }
            _classPrivateMethodGet(this, v, _createAndAddNewEditor2)
              .call(this, { offsetX: 0, offsetY: 0 })
              .setInBackground()
          }

          setEditingState(t) {
            _classPrivateFieldGet(this, f).setEditingState(t)
          }

          addCommands(t) {
            _classPrivateFieldGet(this, f).addCommands(t)
          }

          enable() {
            this.div.style.pointerEvents = 'auto'
            for (const t of _classPrivateFieldGet(this, h).values()) t.enableEditing()
          }

          disable() {
            this.div.style.pointerEvents = 'none'
            for (const t of _classPrivateFieldGet(this, h).values()) t.disableEditing()
          }

          setActiveEditor(t) {
            _classPrivateFieldGet(this, f).getActive() !== t &&
              _classPrivateFieldGet(this, f).setActiveEditor(t)
          }

          enableClick() {
            this.div.addEventListener('pointerdown', _classPrivateFieldGet(this, d))
            this.div.addEventListener('pointerup', _classPrivateFieldGet(this, c))
          }

          disableClick() {
            this.div.removeEventListener('pointerdown', _classPrivateFieldGet(this, d))
            this.div.removeEventListener('pointerup', _classPrivateFieldGet(this, c))
          }

          attach(t) {
            _classPrivateFieldGet(this, h).set(t.id, t)
          }

          detach(t) {
            let e
            _classPrivateFieldGet(this, h).delete(t.id)((e = _classPrivateFieldGet(this, o))) ===
              null ||
              void 0 === e ||
              e.removePointerInTextLayer(t.contentDiv)
          }

          remove(t) {
            _classPrivateFieldGet(this, f).removeEditor(t)
            this.detach(t)
            this.annotationStorage.remove(t.id)
            t.div.style.display = 'none'
            setTimeout(() => {
              t.div.style.display = ''
              t.div.remove()
              t.isAttachedToDOM = !1
              document.activeElement === document.body &&
                _classPrivateFieldGet(this, f).focusMainContainer()
            }, 0)
            _classPrivateFieldGet(this, p) || this.addInkEditorIfNeeded(!1)
          }

          add(t) {
            _classPrivateMethodGet(this, g, _changeParent2).call(this, t)
            _classPrivateFieldGet(this, f).addEditor(t)
            this.attach(t)
            if (!t.isAttachedToDOM) {
              const e = t.render()
              this.div.append(e)
              t.isAttachedToDOM = !0
            }
            this.moveEditorInDOM(t)
            t.onceAdded()
            this.addToAnnotationStorage(t)
          }

          moveEditorInDOM(t) {
            let e
            ;(e = _classPrivateFieldGet(this, o)) === null ||
              void 0 === e ||
              e.moveElementInDOM(this.div, t.div, t.contentDiv, !0)
          }

          addToAnnotationStorage(t) {
            t.isEmpty() ||
              this.annotationStorage.has(t.id) ||
              this.annotationStorage.setValue(t.id, t)
          }

          addOrRebuild(t) {
            t.needsToBeRebuilt() ? t.rebuild() : this.add(t)
          }

          addANewEditor(t) {
            this.addCommands({
              cmd: () => {
                this.addOrRebuild(t)
              },
              undo: () => {
                t.remove()
              },
              mustExec: !0
            })
          }

          addUndoableEditor(t) {
            this.addCommands({
              cmd: () => {
                this.addOrRebuild(t)
              },
              undo: () => {
                t.remove()
              },
              mustExec: !1
            })
          }

          getNextId() {
            return _classPrivateFieldGet(this, f).getId()
          }

          deserialize(t) {
            switch (t.annotationType) {
              case s.AnnotationEditorType.FREETEXT:
                return a.FreeTextEditor.deserialize(t, this)
              case s.AnnotationEditorType.INK:
                return n.InkEditor.deserialize(t, this)
            }
            return null
          }

          setSelected(t) {
            _classPrivateFieldGet(this, f).setSelected(t)
          }

          toggleSelected(t) {
            _classPrivateFieldGet(this, f).toggleSelected(t)
          }

          isSelected(t) {
            return _classPrivateFieldGet(this, f).isSelected(t)
          }

          unselect(t) {
            _classPrivateFieldGet(this, f).unselect(t)
          }

          pointerup(t) {
            const e = r.KeyboardManager.platform.isMac
            if (
              !(t.button !== 0 || (t.ctrlKey && e)) &&
              t.target === this.div &&
              _classPrivateFieldGet(this, u)
            ) {
              _classPrivateFieldSet(this, u, !1)
              _classPrivateFieldGet(this, l)
                ? _classPrivateMethodGet(this, v, _createAndAddNewEditor2).call(this, t)
                : _classPrivateFieldSet(this, l, !0)
            }
          }

          pointerdown(t) {
            const e = r.KeyboardManager.platform.isMac
            if (t.button !== 0 || (t.ctrlKey && e)) return
            if (t.target !== this.div) return
            _classPrivateFieldSet(this, u, !0)
            const i = _classPrivateFieldGet(this, f).getActive()
            _classPrivateFieldSet(this, l, !i || i.isEmpty())
          }

          drop(t) {
            const e = t.dataTransfer.getData('text/plain')
            const i = _classPrivateFieldGet(this, f).getEditor(e)
            if (!i) return
            t.preventDefault()
            t.dataTransfer.dropEffect = 'move'
            _classPrivateMethodGet(this, g, _changeParent2).call(this, i)
            const r = this.div.getBoundingClientRect()
            const s = t.clientX - r.x
            const a = t.clientY - r.y
            i.translate(s - i.startX, a - i.startY)
            this.moveEditorInDOM(i)
            i.div.focus()
          }

          dragover(t) {
            t.preventDefault()
          }

          destroy() {
            let t
            ;((t = _classPrivateFieldGet(this, f).getActive()) === null || void 0 === t
              ? void 0
              : t.parent) === this && _classPrivateFieldGet(this, f).setActiveEditor(null)
            for (const t of _classPrivateFieldGet(this, h).values()) {
              var e
              ;(e = _classPrivateFieldGet(this, o)) === null ||
                void 0 === e ||
                e.removePointerInTextLayer(t.contentDiv)
              t.isAttachedToDOM = !1
              t.div.remove()
              t.parent = null
            }
            this.div = null
            _classPrivateFieldGet(this, h).clear()
            _classPrivateFieldGet(this, f).removeLayer(this)
          }

          render(t) {
            this.viewport = t.viewport
            ;(0, r.bindEvents)(this, this.div, ['dragover', 'drop'])
            this.setDimensions()
            for (const t of _classPrivateFieldGet(this, f).getEditors(this.pageIndex)) this.add(t)
            this.updateMode()
          }

          update(t) {
            this.viewport = t.viewport
            this.setDimensions()
            this.updateMode()
          }

          get scaleFactor() {
            return this.viewport.scale
          }

          get pageDimensions() {
            const [t, e, i, r] = this.viewport.viewBox
            return [i - t, r - e]
          }

          get viewportBaseDimensions() {
            const { width: t, height: e, rotation: i } = this.viewport
            return i % 180 == 0 ? [t, e] : [e, t]
          }

          setDimensions() {
            const { width: t, height: e, rotation: i } = this.viewport
            const r = i % 180 != 0
            const s = `${Math.floor(t)}px`
            const a = `${Math.floor(e)}px`
            this.div.style.width = r ? a : s
            this.div.style.height = r ? s : a
            this.div.setAttribute('data-main-rotation', i)
          }
        }
        e.AnnotationEditorLayer = AnnotationEditorLayer
        function _changeParent2(t) {
          let e
          if (t.parent !== this) {
            this.attach(t)
            t.pageIndex = this.pageIndex((e = t.parent)) === null || void 0 === e || e.detach(t)
            t.parent = this
            if (t.div && t.isAttachedToDOM) {
              t.div.remove()
              this.div.append(t.div)
            }
          }
        }
        function _createNewEditor2(t) {
          switch (_classPrivateFieldGet(this, f).getMode()) {
            case s.AnnotationEditorType.FREETEXT:
              return new a.FreeTextEditor(t)
            case s.AnnotationEditorType.INK:
              return new n.InkEditor(t)
          }
          return null
        }
        function _createAndAddNewEditor2(t) {
          const e = this.getNextId()
          const i = _classPrivateMethodGet(this, m, _createNewEditor2).call(this, {
            parent: this,
            id: e,
            x: t.offsetX,
            y: t.offsetY
          })
          i && this.add(i)
          return i
        }
        function _cleanup2() {
          _classPrivateFieldSet(this, p, !0)
          for (const t of _classPrivateFieldGet(this, h).values()) t.isEmpty() && t.remove()
          _classPrivateFieldSet(this, p, !1)
        }
        !(function _defineProperty(t, e, i) {
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i)
          return t
        })(AnnotationEditorLayer, '_initialized', !1)
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.FreeTextEditor = void 0
        const r = i(1)
        const s = i(132)
        const a = i(131)
        function _classPrivateMethodInitSpec(t, e) {
          _checkPrivateRedeclaration(t, e)
          e.add(t)
        }
        function _defineProperty(t, e, i) {
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i)
          return t
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          _checkPrivateRedeclaration(t, e)
          e.set(t, i)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        const n = new WeakMap()
        const o = new WeakMap()
        const l = new WeakMap()
        const c = new WeakMap()
        const d = new WeakMap()
        const h = new WeakMap()
        const u = new WeakMap()
        const p = new WeakSet()
        const f = new WeakSet()
        const g = new WeakSet()
        const m = new WeakSet()
        class FreeTextEditor extends a.AnnotationEditor {
          constructor(t) {
            super({ ...t, name: 'freeTextEditor' })
            _classPrivateMethodInitSpec(this, m)
            _classPrivateMethodInitSpec(this, g)
            _classPrivateMethodInitSpec(this, f)
            _classPrivateMethodInitSpec(this, p)
            _classPrivateFieldInitSpec(this, n, {
              writable: !0,
              value: this.editorDivBlur.bind(this)
            })
            _classPrivateFieldInitSpec(this, o, {
              writable: !0,
              value: this.editorDivFocus.bind(this)
            })
            _classPrivateFieldInitSpec(this, l, {
              writable: !0,
              value: this.editorDivKeydown.bind(this)
            })
            _classPrivateFieldInitSpec(this, c, { writable: !0, value: void 0 })
            _classPrivateFieldInitSpec(this, d, { writable: !0, value: '' })
            _classPrivateFieldInitSpec(this, h, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, u, { writable: !0, value: void 0 })
            _classPrivateFieldSet(
              this,
              c,
              t.color || FreeTextEditor._defaultColor || a.AnnotationEditor._defaultLineColor
            )
            _classPrivateFieldSet(this, u, t.fontSize || FreeTextEditor._defaultFontSize)
          }

          static initialize(t) {
            this._l10nPromise = new Map(
              ['free_text_default_content', 'editor_free_text_aria_label'].map((e) => [e, t.get(e)])
            )
            const e = getComputedStyle(document.documentElement)
            this._internalPadding = parseFloat(e.getPropertyValue('--freetext-padding'))
          }

          static updateDefaultParams(t, e) {
            switch (t) {
              case r.AnnotationEditorParamsType.FREETEXT_SIZE:
                FreeTextEditor._defaultFontSize = e
                break
              case r.AnnotationEditorParamsType.FREETEXT_COLOR:
                FreeTextEditor._defaultColor = e
            }
          }

          updateParams(t, e) {
            switch (t) {
              case r.AnnotationEditorParamsType.FREETEXT_SIZE:
                _classPrivateMethodGet(this, p, _updateFontSize2).call(this, e)
                break
              case r.AnnotationEditorParamsType.FREETEXT_COLOR:
                _classPrivateMethodGet(this, f, _updateColor2).call(this, e)
            }
          }

          static get defaultPropertiesToUpdate() {
            return [
              [r.AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize],
              [
                r.AnnotationEditorParamsType.FREETEXT_COLOR,
                FreeTextEditor._defaultColor || a.AnnotationEditor._defaultLineColor
              ]
            ]
          }

          get propertiesToUpdate() {
            return [
              [r.AnnotationEditorParamsType.FREETEXT_SIZE, _classPrivateFieldGet(this, u)],
              [r.AnnotationEditorParamsType.FREETEXT_COLOR, _classPrivateFieldGet(this, c)]
            ]
          }

          getInitialTranslation() {
            return [
              -FreeTextEditor._internalPadding * this.parent.scaleFactor,
              -(FreeTextEditor._internalPadding + _classPrivateFieldGet(this, u)) *
                this.parent.scaleFactor
            ]
          }

          rebuild() {
            super.rebuild()
            this.div !== null && (this.isAttachedToDOM || this.parent.add(this))
          }

          enableEditMode() {
            if (!this.isInEditMode()) {
              this.parent.setEditingState(!1)
              this.parent.updateToolbar(r.AnnotationEditorType.FREETEXT)
              super.enableEditMode()
              this.enableEditing()
              this.overlayDiv.classList.remove('enabled')
              this.editorDiv.contentEditable = !0
              this.div.draggable = !1
              this.editorDiv.addEventListener('keydown', _classPrivateFieldGet(this, l))
              this.editorDiv.addEventListener('focus', _classPrivateFieldGet(this, o))
              this.editorDiv.addEventListener('blur', _classPrivateFieldGet(this, n))
            }
          }

          disableEditMode() {
            if (this.isInEditMode()) {
              this.parent.setEditingState(!0)
              super.disableEditMode()
              this.disableEditing()
              this.overlayDiv.classList.add('enabled')
              this.editorDiv.contentEditable = !1
              this.div.draggable = !0
              this.editorDiv.removeEventListener('keydown', _classPrivateFieldGet(this, l))
              this.editorDiv.removeEventListener('focus', _classPrivateFieldGet(this, o))
              this.editorDiv.removeEventListener('blur', _classPrivateFieldGet(this, n))
              this.div.focus()
              this.isEditing = !1
            }
          }

          focusin(t) {
            super.focusin(t)
            t.target !== this.editorDiv && this.editorDiv.focus()
          }

          onceAdded() {
            if (!this.width) {
              this.enableEditMode()
              this.editorDiv.focus()
            }
          }

          isEmpty() {
            return !this.editorDiv || this.editorDiv.innerText.trim() === ''
          }

          remove() {
            this.isEditing = !1
            this.parent.setEditingState(!0)
            super.remove()
          }

          commit() {
            super.commit()
            if (!_classPrivateFieldGet(this, h)) {
              _classPrivateFieldSet(this, h, !0)
              this.parent.addUndoableEditor(this)
            }
            this.disableEditMode()
            _classPrivateFieldSet(
              this,
              d,
              _classPrivateMethodGet(this, g, _extractText2).call(this).trimEnd()
            )
            _classPrivateMethodGet(this, m, _setEditorDimensions2).call(this)
          }

          shouldGetKeyboardEvents() {
            return this.isInEditMode()
          }

          dblclick(t) {
            this.enableEditMode()
            this.editorDiv.focus()
          }

          keydown(t) {
            if (t.target === this.div && t.key === 'Enter') {
              this.enableEditMode()
              this.editorDiv.focus()
            }
          }

          editorDivKeydown(t) {
            FreeTextEditor._keyboardManager.exec(this, t)
          }

          editorDivFocus(t) {
            this.isEditing = !0
          }

          editorDivBlur(t) {
            this.isEditing = !1
          }

          disableEditing() {
            this.editorDiv.setAttribute('role', 'comment')
            this.editorDiv.removeAttribute('aria-multiline')
          }

          enableEditing() {
            this.editorDiv.setAttribute('role', 'textbox')
            this.editorDiv.setAttribute('aria-multiline', !0)
          }

          render() {
            if (this.div) return this.div
            let t
            let e
            if (this.width) {
              t = this.x
              e = this.y
            }
            super.render()
            this.editorDiv = document.createElement('div')
            this.editorDiv.className = 'internal'
            this.editorDiv.setAttribute('id', `${this.id}-editor`)
            this.enableEditing()
            FreeTextEditor._l10nPromise.get('editor_free_text_aria_label').then((t) => {
              let e
              return (e = this.editorDiv) === null || void 0 === e
                ? void 0
                : e.setAttribute('aria-label', t)
            })
            FreeTextEditor._l10nPromise.get('free_text_default_content').then((t) => {
              let e
              return (e = this.editorDiv) === null || void 0 === e
                ? void 0
                : e.setAttribute('default-content', t)
            })
            this.editorDiv.contentEditable = !0
            const { style: i } = this.editorDiv
            i.fontSize = `calc(${_classPrivateFieldGet(this, u)}px * var(--scale-factor))`
            i.color = _classPrivateFieldGet(this, c)
            this.div.append(this.editorDiv)
            this.overlayDiv = document.createElement('div')
            this.overlayDiv.classList.add('overlay', 'enabled')
            this.div.append(this.overlayDiv)
            ;(0, s.bindEvents)(this, this.div, ['dblclick', 'keydown'])
            if (this.width) {
              const [i, r] = this.parent.viewportBaseDimensions
              this.setAt(t * i, e * r, this.width * i, this.height * r)
              for (const t of _classPrivateFieldGet(this, d).split('\n')) {
                const e = document.createElement('div')
                e.append(t ? document.createTextNode(t) : document.createElement('br'))
                this.editorDiv.append(e)
              }
              this.div.draggable = !0
              this.editorDiv.contentEditable = !1
            } else {
              this.div.draggable = !1
              this.editorDiv.contentEditable = !0
            }
            return this.div
          }

          get contentDiv() {
            return this.editorDiv
          }

          static deserialize(t, e) {
            const i = super.deserialize(t, e)
            _classPrivateFieldSet(i, u, t.fontSize)
            _classPrivateFieldSet(i, c, r.Util.makeHexColor(...t.color))
            _classPrivateFieldSet(i, d, t.value)
            return i
          }

          serialize() {
            if (this.isEmpty()) return null
            const t = FreeTextEditor._internalPadding * this.parent.scaleFactor
            const e = this.getRect(t, t)
            const i = a.AnnotationEditor._colorManager.convert(
              getComputedStyle(this.editorDiv).color
            )
            return {
              annotationType: r.AnnotationEditorType.FREETEXT,
              color: i,
              fontSize: _classPrivateFieldGet(this, u),
              value: _classPrivateFieldGet(this, d),
              pageIndex: this.parent.pageIndex,
              rect: e,
              rotation: this.rotation
            }
          }
        }
        e.FreeTextEditor = FreeTextEditor
        function _updateFontSize2(t) {
          const setFontsize = (t) => {
            this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`
            this.translate(0, -(t - _classPrivateFieldGet(this, u)) * this.parent.scaleFactor)
            _classPrivateFieldSet(this, u, t)
            _classPrivateMethodGet(this, m, _setEditorDimensions2).call(this)
          }
          const e = _classPrivateFieldGet(this, u)
          this.parent.addCommands({
            cmd: () => {
              setFontsize(t)
            },
            undo: () => {
              setFontsize(e)
            },
            mustExec: !0,
            type: r.AnnotationEditorParamsType.FREETEXT_SIZE,
            overwriteIfSameType: !0,
            keepUndo: !0
          })
        }
        function _updateColor2(t) {
          const e = _classPrivateFieldGet(this, c)
          this.parent.addCommands({
            cmd: () => {
              _classPrivateFieldSet(this, c, t)
              this.editorDiv.style.color = t
            },
            undo: () => {
              _classPrivateFieldSet(this, c, e)
              this.editorDiv.style.color = e
            },
            mustExec: !0,
            type: r.AnnotationEditorParamsType.FREETEXT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          })
        }
        function _extractText2() {
          const t = this.editorDiv.getElementsByTagName('div')
          if (t.length === 0) return this.editorDiv.innerText
          const e = []
          for (let i = 0, r = t.length; i < r; i++) {
            const r =
              t[i].firstChild(r == null ? void 0 : r.nodeName) === '#text'
                ? e.push(r.data)
                : e.push('')
          }
          return e.join('\n')
        }
        function _setEditorDimensions2() {
          const [t, e] = this.parent.viewportBaseDimensions
          const i = this.div.getBoundingClientRect()
          this.width = i.width / t
          this.height = i.height / e
        }
        _defineProperty(FreeTextEditor, '_freeTextDefaultContent', '')
        _defineProperty(FreeTextEditor, '_l10nPromise', void 0)
        _defineProperty(FreeTextEditor, '_internalPadding', 0)
        _defineProperty(FreeTextEditor, '_defaultColor', null)
        _defineProperty(FreeTextEditor, '_defaultFontSize', 10)
        _defineProperty(
          FreeTextEditor,
          '_keyboardManager',
          new s.KeyboardManager([
            [
              ['ctrl+Enter', 'mac+meta+Enter', 'Escape', 'mac+Escape'],
              FreeTextEditor.prototype.commitOrRemove
            ]
          ])
        )
        _defineProperty(FreeTextEditor, '_type', 'freetext')
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.InkEditor = void 0
        Object.defineProperty(e, 'fitCurve', {
          enumerable: !0,
          get() {
            return a.fitCurve
          }
        })
        const r = i(1)
        const s = i(131)
        var a = i(152)
        const n = i(132)
        function _classPrivateMethodInitSpec(t, e) {
          _checkPrivateRedeclaration(t, e)
          e.add(t)
        }
        function _defineProperty(t, e, i) {
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = i)
          return t
        }
        function _classPrivateFieldInitSpec(t, e, i) {
          _checkPrivateRedeclaration(t, e)
          e.set(t, i)
        }
        function _checkPrivateRedeclaration(t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object')
        }
        function _classStaticPrivateMethodGet(t, e, i) {
          !(function _classCheckPrivateStaticAccess(t, e) {
            if (t !== e) throw new TypeError('Private static access of wrong provenance')
          })(t, e)
          return i
        }
        function _classPrivateFieldSet(t, e, i) {
          !(function _classApplyDescriptorSet(t, e, i) {
            if (e.set) e.set.call(t, i)
            else {
              if (!e.writable) throw new TypeError('attempted to set read only private field')
              e.value = i
            }
          })(t, _classExtractFieldDescriptor(t, e, 'set'), i)
          return i
        }
        function _classPrivateFieldGet(t, e) {
          return (function _classApplyDescriptorGet(t, e) {
            if (e.get) return e.get.call(t)
            return e.value
          })(t, _classExtractFieldDescriptor(t, e, 'get'))
        }
        function _classExtractFieldDescriptor(t, e, i) {
          if (!e.has(t)) throw new TypeError(`attempted to ${i} private field on non-instance`)
          return e.get(t)
        }
        function _classPrivateMethodGet(t, e, i) {
          if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
          return i
        }
        const o = 16
        const l = new WeakMap()
        const c = new WeakMap()
        const d = new WeakMap()
        const h = new WeakMap()
        const u = new WeakMap()
        const p = new WeakMap()
        const f = new WeakMap()
        const g = new WeakMap()
        const m = new WeakMap()
        const v = new WeakMap()
        const _ = new WeakMap()
        const b = new WeakMap()
        const y = new WeakMap()
        const A = new WeakMap()
        const S = new WeakSet()
        const P = new WeakSet()
        const x = new WeakSet()
        const w = new WeakSet()
        const E = new WeakSet()
        const C = new WeakSet()
        const k = new WeakSet()
        const T = new WeakSet()
        const M = new WeakSet()
        const R = new WeakSet()
        const I = new WeakSet()
        const D = new WeakSet()
        const O = new WeakSet()
        const L = new WeakSet()
        const G = new WeakSet()
        const N = new WeakSet()
        const j = new WeakSet()
        const B = new WeakSet()
        const U = new WeakSet()
        const W = new WeakSet()
        const q = new WeakSet()
        const z = new WeakSet()
        class InkEditor extends s.AnnotationEditor {
          constructor(t) {
            super({ ...t, name: 'inkEditor' })
            _classPrivateMethodInitSpec(this, z)
            _classPrivateMethodInitSpec(this, q)
            _classPrivateMethodInitSpec(this, W)
            _classPrivateMethodInitSpec(this, U)
            _classPrivateMethodInitSpec(this, B)
            _classPrivateMethodInitSpec(this, j)
            _classPrivateMethodInitSpec(this, N)
            _classPrivateMethodInitSpec(this, G)
            _classPrivateMethodInitSpec(this, L)
            _classPrivateMethodInitSpec(this, O)
            _classPrivateMethodInitSpec(this, D)
            _classPrivateMethodInitSpec(this, I)
            _classPrivateMethodInitSpec(this, R)
            _classPrivateMethodInitSpec(this, M)
            _classPrivateMethodInitSpec(this, T)
            _classPrivateMethodInitSpec(this, k)
            _classPrivateMethodInitSpec(this, C)
            _classPrivateMethodInitSpec(this, E)
            _classPrivateMethodInitSpec(this, w)
            _classPrivateMethodInitSpec(this, x)
            _classPrivateMethodInitSpec(this, P)
            _classPrivateMethodInitSpec(this, S)
            _classPrivateFieldInitSpec(this, l, { writable: !0, value: 0 })
            _classPrivateFieldInitSpec(this, c, { writable: !0, value: 0 })
            _classPrivateFieldInitSpec(this, d, { writable: !0, value: 0 })
            _classPrivateFieldInitSpec(this, h, {
              writable: !0,
              value: this.canvasPointermove.bind(this)
            })
            _classPrivateFieldInitSpec(this, u, {
              writable: !0,
              value: this.canvasPointerleave.bind(this)
            })
            _classPrivateFieldInitSpec(this, p, {
              writable: !0,
              value: this.canvasPointerup.bind(this)
            })
            _classPrivateFieldInitSpec(this, f, {
              writable: !0,
              value: this.canvasPointerdown.bind(this)
            })
            _classPrivateFieldInitSpec(this, g, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, m, { writable: !0, value: !1 })
            _classPrivateFieldInitSpec(this, v, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, _, { writable: !0, value: null })
            _classPrivateFieldInitSpec(this, b, { writable: !0, value: 0 })
            _classPrivateFieldInitSpec(this, y, { writable: !0, value: 0 })
            _classPrivateFieldInitSpec(this, A, { writable: !0, value: null })
            this.color = t.color || null
            this.thickness = t.thickness || null
            this.opacity = t.opacity || null
            this.paths = []
            this.bezierPath2D = []
            this.currentPath = []
            this.scaleFactor = 1
            this.translationX = this.translationY = 0
            this.x = 0
            this.y = 0
          }

          static initialize(t) {
            this._l10nPromise = new Map(
              ['editor_ink_canvas_aria_label', 'editor_ink_aria_label'].map((e) => [e, t.get(e)])
            )
          }

          static updateDefaultParams(t, e) {
            switch (t) {
              case r.AnnotationEditorParamsType.INK_THICKNESS:
                InkEditor._defaultThickness = e
                break
              case r.AnnotationEditorParamsType.INK_COLOR:
                InkEditor._defaultColor = e
                break
              case r.AnnotationEditorParamsType.INK_OPACITY:
                InkEditor._defaultOpacity = e / 100
            }
          }

          updateParams(t, e) {
            switch (t) {
              case r.AnnotationEditorParamsType.INK_THICKNESS:
                _classPrivateMethodGet(this, S, _updateThickness2).call(this, e)
                break
              case r.AnnotationEditorParamsType.INK_COLOR:
                _classPrivateMethodGet(this, P, _updateColor2).call(this, e)
                break
              case r.AnnotationEditorParamsType.INK_OPACITY:
                _classPrivateMethodGet(this, x, _updateOpacity2).call(this, e)
            }
          }

          static get defaultPropertiesToUpdate() {
            return [
              [r.AnnotationEditorParamsType.INK_THICKNESS, InkEditor._defaultThickness],
              [
                r.AnnotationEditorParamsType.INK_COLOR,
                InkEditor._defaultColor || s.AnnotationEditor._defaultLineColor
              ],
              [
                r.AnnotationEditorParamsType.INK_OPACITY,
                Math.round(100 * InkEditor._defaultOpacity)
              ]
            ]
          }

          get propertiesToUpdate() {
            let t
            return [
              [
                r.AnnotationEditorParamsType.INK_THICKNESS,
                this.thickness || InkEditor._defaultThickness
              ],
              [
                r.AnnotationEditorParamsType.INK_COLOR,
                this.color || InkEditor._defaultColor || s.AnnotationEditor._defaultLineColor
              ],
              [
                r.AnnotationEditorParamsType.INK_OPACITY,
                Math.round(
                  100 *
                    ((t = this.opacity) !== null && void 0 !== t ? t : InkEditor._defaultOpacity)
                )
              ]
            ]
          }

          rebuild() {
            super.rebuild()
            if (this.div !== null) {
              if (!this.canvas) {
                _classPrivateMethodGet(this, I, _createCanvas2).call(this)
                _classPrivateMethodGet(this, D, _createObserver2).call(this)
              }
              if (!this.isAttachedToDOM) {
                this.parent.add(this)
                _classPrivateMethodGet(this, O, _setCanvasDims2).call(this)
              }
              _classPrivateMethodGet(this, q, _fitToContent2).call(this)
            }
          }

          remove() {
            if (this.canvas !== null) {
              this.isEmpty() || this.commit()
              this.canvas.width = this.canvas.height = 0
              this.canvas.remove()
              this.canvas = null
              _classPrivateFieldGet(this, _).disconnect()
              _classPrivateFieldSet(this, _, null)
              super.remove()
            }
          }

          enableEditMode() {
            if (!_classPrivateFieldGet(this, g) && this.canvas !== null) {
              super.enableEditMode()
              this.div.draggable = !1
              this.canvas.addEventListener('pointerdown', _classPrivateFieldGet(this, f))
              this.canvas.addEventListener('pointerup', _classPrivateFieldGet(this, p))
            }
          }

          disableEditMode() {
            if (this.isInEditMode() && this.canvas !== null) {
              super.disableEditMode()
              this.div.draggable = !this.isEmpty()
              this.div.classList.remove('editing')
              this.canvas.removeEventListener('pointerdown', _classPrivateFieldGet(this, f))
              this.canvas.removeEventListener('pointerup', _classPrivateFieldGet(this, p))
            }
          }

          onceAdded() {
            this.div.draggable = !this.isEmpty()
          }

          isEmpty() {
            return (
              this.paths.length === 0 || (this.paths.length === 1 && this.paths[0].length === 0)
            )
          }

          commit() {
            if (!_classPrivateFieldGet(this, g)) {
              super.commit()
              this.isEditing = !1
              this.disableEditMode()
              this.setInForeground()
              _classPrivateFieldSet(this, g, !0)
              this.div.classList.add('disabled')
              _classPrivateMethodGet(this, q, _fitToContent2).call(this, !0)
              this.parent.addInkEditorIfNeeded(!0)
              this.parent.moveEditorInDOM(this)
              this.div.focus()
            }
          }

          focusin(t) {
            super.focusin(t)
            this.enableEditMode()
          }

          canvasPointerdown(t) {
            if (t.button === 0 && this.isInEditMode() && !_classPrivateFieldGet(this, g)) {
              this.setInForeground()
              t.type !== 'mouse' && this.div.focus()
              t.stopPropagation()
              this.canvas.addEventListener('pointerleave', _classPrivateFieldGet(this, u))
              this.canvas.addEventListener('pointermove', _classPrivateFieldGet(this, h))
              _classPrivateMethodGet(this, C, _startDrawing2).call(this, t.offsetX, t.offsetY)
            }
          }

          canvasPointermove(t) {
            t.stopPropagation()
            _classPrivateMethodGet(this, k, _draw2).call(this, t.offsetX, t.offsetY)
          }

          canvasPointerup(t) {
            if (t.button === 0 && this.isInEditMode() && this.currentPath.length !== 0) {
              t.stopPropagation()
              _classPrivateMethodGet(this, R, _endDrawing2).call(this, t)
              this.setInBackground()
            }
          }

          canvasPointerleave(t) {
            _classPrivateMethodGet(this, R, _endDrawing2).call(this, t)
            this.setInBackground()
          }

          render() {
            if (this.div) return this.div
            let t
            let e
            if (this.width) {
              t = this.x
              e = this.y
            }
            super.render()
            InkEditor._l10nPromise.get('editor_ink_aria_label').then((t) => {
              let e
              return (e = this.div) === null || void 0 === e
                ? void 0
                : e.setAttribute('aria-label', t)
            })
            const [i, r, s, a] = _classPrivateMethodGet(this, w, _getInitialBBox2).call(this)
            this.setAt(i, r, 0, 0)
            this.setDims(s, a)
            _classPrivateMethodGet(this, I, _createCanvas2).call(this)
            if (this.width) {
              const [i, r] = this.parent.viewportBaseDimensions
              this.setAt(t * i, e * r, this.width * i, this.height * r)
              _classPrivateFieldSet(this, m, !0)
              _classPrivateMethodGet(this, O, _setCanvasDims2).call(this)
              this.setDims(this.width * i, this.height * r)
              _classPrivateMethodGet(this, M, _redraw2).call(this)
              _classPrivateMethodGet(this, z, _setMinDims2).call(this)
              this.div.classList.add('disabled')
            } else {
              this.div.classList.add('editing')
              this.enableEditMode()
            }
            _classPrivateMethodGet(this, D, _createObserver2).call(this)
            return this.div
          }

          setDimensions(t, e) {
            const i = Math.round(t)
            const r = Math.round(e)
            if (_classPrivateFieldGet(this, b) === i && _classPrivateFieldGet(this, y) === r) return
            _classPrivateFieldSet(this, b, i)
            _classPrivateFieldSet(this, y, r)
            this.canvas.style.visibility = 'hidden'
            if (
              _classPrivateFieldGet(this, l) &&
              Math.abs(_classPrivateFieldGet(this, l) - t / e) > 0.01
            ) {
              e = Math.ceil(t / _classPrivateFieldGet(this, l))
              this.setDims(t, e)
            }
            const [s, a] = this.parent.viewportBaseDimensions
            this.width = t / s
            this.height = e / a
            _classPrivateFieldGet(this, g) &&
              _classPrivateMethodGet(this, L, _setScaleFactor2).call(this, t, e)
            _classPrivateMethodGet(this, O, _setCanvasDims2).call(this)
            _classPrivateMethodGet(this, M, _redraw2).call(this)
            this.canvas.style.visibility = 'visible'
          }

          static deserialize(t, e) {
            const i = super.deserialize(t, e)
            i.thickness = t.thickness
            i.color = r.Util.makeHexColor(...t.color)
            i.opacity = t.opacity
            const [s, a] = e.pageDimensions
            const n = i.width * s
            const h = i.height * a
            const u = e.scaleFactor
            const p = t.thickness / 2
            _classPrivateFieldSet(i, l, n / h)
            _classPrivateFieldSet(i, g, !0)
            _classPrivateFieldSet(i, b, Math.round(n))
            _classPrivateFieldSet(i, y, Math.round(h))
            for (const { bezier: e } of t.paths) {
              const t = []
              i.paths.push(t)
              let r = u * (e[0] - p)
              let s = u * (h - e[1] - p)
              for (let i = 2, a = e.length; i < a; i += 6) {
                const a = u * (e[i] - p)
                const n = u * (h - e[i + 1] - p)
                const o = u * (e[i + 2] - p)
                const l = u * (h - e[i + 3] - p)
                const c = u * (e[i + 4] - p)
                const d = u * (h - e[i + 5] - p)
                t.push([
                  [r, s],
                  [a, n],
                  [o, l],
                  [c, d]
                ])
                r = c
                s = d
              }
              const a = _classStaticPrivateMethodGet(this, InkEditor, _buildPath2D).call(this, t)
              i.bezierPath2D.push(a)
            }
            const f = _classPrivateMethodGet(i, U, _getBbox2).call(i)
            _classPrivateFieldSet(i, d, Math.max(o, f[2] - f[0]))
            _classPrivateFieldSet(i, c, Math.max(o, f[3] - f[1]))
            _classPrivateMethodGet(i, L, _setScaleFactor2).call(i, n, h)
            return i
          }

          serialize() {
            if (this.isEmpty()) return null
            const t = this.getRect(0, 0)
            const e = this.rotation % 180 == 0 ? t[3] - t[1] : t[2] - t[0]
            const i = s.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle)
            return {
              annotationType: r.AnnotationEditorType.INK,
              color: i,
              thickness: this.thickness,
              opacity: this.opacity,
              paths: _classPrivateMethodGet(this, N, _serializePaths2).call(
                this,
                this.scaleFactor / this.parent.scaleFactor,
                this.translationX,
                this.translationY,
                e
              ),
              pageIndex: this.parent.pageIndex,
              rect: t,
              rotation: this.rotation
            }
          }
        }
        e.InkEditor = InkEditor
        function _updateThickness2(t) {
          const e = this.thickness
          this.parent.addCommands({
            cmd: () => {
              this.thickness = t
              _classPrivateMethodGet(this, q, _fitToContent2).call(this)
            },
            undo: () => {
              this.thickness = e
              _classPrivateMethodGet(this, q, _fitToContent2).call(this)
            },
            mustExec: !0,
            type: r.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: !0,
            keepUndo: !0
          })
        }
        function _updateColor2(t) {
          const e = this.color
          this.parent.addCommands({
            cmd: () => {
              this.color = t
              _classPrivateMethodGet(this, M, _redraw2).call(this)
            },
            undo: () => {
              this.color = e
              _classPrivateMethodGet(this, M, _redraw2).call(this)
            },
            mustExec: !0,
            type: r.AnnotationEditorParamsType.INK_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          })
        }
        function _updateOpacity2(t) {
          t /= 100
          const e = this.opacity
          this.parent.addCommands({
            cmd: () => {
              this.opacity = t
              _classPrivateMethodGet(this, M, _redraw2).call(this)
            },
            undo: () => {
              this.opacity = e
              _classPrivateMethodGet(this, M, _redraw2).call(this)
            },
            mustExec: !0,
            type: r.AnnotationEditorParamsType.INK_OPACITY,
            overwriteIfSameType: !0,
            keepUndo: !0
          })
        }
        function _getInitialBBox2() {
          const { width: t, height: e, rotation: i } = this.parent.viewport
          switch (i) {
            case 90:
              return [0, t, t, e]
            case 180:
              return [t, e, t, e]
            case 270:
              return [e, 0, t, e]
            default:
              return [0, 0, t, e]
          }
        }
        function _setStroke2() {
          this.ctx.lineWidth = (this.thickness * this.parent.scaleFactor) / this.scaleFactor
          this.ctx.lineCap = 'round'
          this.ctx.lineJoin = 'round'
          this.ctx.miterLimit = 10
          this.ctx.strokeStyle = `${this.color}${(0, n.opacityToHex)(this.opacity)}`
        }
        function _startDrawing2(t, e) {
          this.isEditing = !0
          if (!_classPrivateFieldGet(this, m)) {
            let i
            _classPrivateFieldSet(this, m, !0)
            _classPrivateMethodGet(this, O, _setCanvasDims2).call(this)
            this.thickness || (this.thickness = InkEditor._defaultThickness)
            this.color ||
              (this.color = InkEditor._defaultColor || s.AnnotationEditor._defaultLineColor)
            ;((i = this.opacity) !== null && void 0 !== i) ||
              (this.opacity = InkEditor._defaultOpacity)
          }
          this.currentPath.push([t, e])
          _classPrivateFieldSet(this, v, null)
          _classPrivateMethodGet(this, E, _setStroke2).call(this)
          this.ctx.beginPath()
          this.ctx.moveTo(t, e)
          _classPrivateFieldSet(this, A, () => {
            if (_classPrivateFieldGet(this, A)) {
              if (_classPrivateFieldGet(this, v)) {
                if (this.isEmpty()) {
                  this.ctx.setTransform(1, 0, 0, 1, 0, 0)
                  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                } else _classPrivateMethodGet(this, M, _redraw2).call(this)
                this.ctx.lineTo(..._classPrivateFieldGet(this, v))
                _classPrivateFieldSet(this, v, null)
                this.ctx.stroke()
              }
              window.requestAnimationFrame(_classPrivateFieldGet(this, A))
            }
          })
          window.requestAnimationFrame(_classPrivateFieldGet(this, A))
        }
        function _draw2(t, e) {
          const [i, r] = this.currentPath.at(-1)
          if (t !== i || e !== r) {
            this.currentPath.push([t, e])
            _classPrivateFieldSet(this, v, [t, e])
          }
        }
        function _stopDrawing2(t, e) {
          this.ctx.closePath()
          _classPrivateFieldSet(this, A, null)
          t = Math.min(Math.max(t, 0), this.canvas.width)
          e = Math.min(Math.max(e, 0), this.canvas.height)
          const [i, r] = this.currentPath.at(-1)
          ;(t === i && e === r) || this.currentPath.push([t, e])
          let s
          if (this.currentPath.length !== 1) s = (0, a.fitCurve)(this.currentPath, 30, null)
          else {
            const i = [t, e]
            s = [[i, i.slice(), i.slice(), i]]
          }
          const n = _classStaticPrivateMethodGet(InkEditor, InkEditor, _buildPath2D).call(
            InkEditor,
            s
          )
          this.currentPath.length = 0
          this.parent.addCommands({
            cmd: () => {
              this.paths.push(s)
              this.bezierPath2D.push(n)
              this.rebuild()
            },
            undo: () => {
              this.paths.pop()
              this.bezierPath2D.pop()
              if (this.paths.length === 0) this.remove()
              else {
                if (!this.canvas) {
                  _classPrivateMethodGet(this, I, _createCanvas2).call(this)
                  _classPrivateMethodGet(this, D, _createObserver2).call(this)
                }
                _classPrivateMethodGet(this, q, _fitToContent2).call(this)
              }
            },
            mustExec: !0
          })
        }
        function _redraw2() {
          if (this.isEmpty()) {
            _classPrivateMethodGet(this, G, _updateTransform2).call(this)
            return
          }
          _classPrivateMethodGet(this, E, _setStroke2).call(this)
          const { canvas: t, ctx: e } = this
          e.setTransform(1, 0, 0, 1, 0, 0)
          e.clearRect(0, 0, t.width, t.height)
          _classPrivateMethodGet(this, G, _updateTransform2).call(this)
          for (const t of this.bezierPath2D) e.stroke(t)
        }
        function _endDrawing2(t) {
          _classPrivateMethodGet(this, T, _stopDrawing2).call(this, t.offsetX, t.offsetY)
          this.canvas.removeEventListener('pointerleave', _classPrivateFieldGet(this, u))
          this.canvas.removeEventListener('pointermove', _classPrivateFieldGet(this, h))
          this.parent.addToAnnotationStorage(this)
        }
        function _createCanvas2() {
          this.canvas = document.createElement('canvas')
          this.canvas.width = this.canvas.height = 0
          this.canvas.className = 'inkEditorCanvas'
          InkEditor._l10nPromise.get('editor_ink_canvas_aria_label').then((t) => {
            let e
            return (e = this.canvas) === null || void 0 === e
              ? void 0
              : e.setAttribute('aria-label', t)
          })
          this.div.append(this.canvas)
          this.ctx = this.canvas.getContext('2d')
        }
        function _createObserver2() {
          _classPrivateFieldSet(
            this,
            _,
            new ResizeObserver((t) => {
              const e = t[0].contentRect
              e.width && e.height && this.setDimensions(e.width, e.height)
            })
          )
          _classPrivateFieldGet(this, _).observe(this.div)
        }
        function _setCanvasDims2() {
          if (!_classPrivateFieldGet(this, m)) return
          const [t, e] = this.parent.viewportBaseDimensions
          this.canvas.width = Math.ceil(this.width * t)
          this.canvas.height = Math.ceil(this.height * e)
          _classPrivateMethodGet(this, G, _updateTransform2).call(this)
        }
        function _setScaleFactor2(t, e) {
          const i = _classPrivateMethodGet(this, W, _getPadding2).call(this)
          const r = (t - i) / _classPrivateFieldGet(this, d)
          const s = (e - i) / _classPrivateFieldGet(this, c)
          this.scaleFactor = Math.min(r, s)
        }
        function _updateTransform2() {
          const t = _classPrivateMethodGet(this, W, _getPadding2).call(this) / 2
          this.ctx.setTransform(
            this.scaleFactor,
            0,
            0,
            this.scaleFactor,
            this.translationX * this.scaleFactor + t,
            this.translationY * this.scaleFactor + t
          )
        }
        function _buildPath2D(t) {
          const e = new Path2D()
          for (let i = 0, r = t.length; i < r; i++) {
            const [r, s, a, n] = t[i]
            i === 0 && e.moveTo(...r)
            e.bezierCurveTo(s[0], s[1], a[0], a[1], n[0], n[1])
          }
          return e
        }
        function _serializePaths2(t, e, i, r) {
          const s = []
          const a = this.thickness / 2
          let n
          let o
          for (const l of this.paths) {
            n = []
            o = []
            for (let s = 0, c = l.length; s < c; s++) {
              const [c, d, h, u] = l[s]
              const p = t * (c[0] + e) + a
              const f = r - t * (c[1] + i) - a
              const g = t * (d[0] + e) + a
              const m = r - t * (d[1] + i) - a
              const v = t * (h[0] + e) + a
              const _ = r - t * (h[1] + i) - a
              const b = t * (u[0] + e) + a
              const y = r - t * (u[1] + i) - a
              if (s === 0) {
                n.push(p, f)
                o.push(p, f)
              }
              n.push(g, m, v, _, b, y)
              _classPrivateMethodGet(this, j, _extractPointsOnBezier2).call(
                this,
                p,
                f,
                g,
                m,
                v,
                _,
                b,
                y,
                4,
                o
              )
            }
            s.push({ bezier: n, points: o })
          }
          return s
        }
        function _extractPointsOnBezier2(t, e, i, r, s, a, n, o, l, c) {
          if (_classPrivateMethodGet(this, B, _isAlmostFlat2).call(this, t, e, i, r, s, a, n, o))
            c.push(n, o)
          else {
            for (let d = 1; d < l - 1; d++) {
              const h = d / l
              const u = 1 - h
              let p = h * t + u * i
              let f = h * e + u * r
              let g = h * i + u * s
              let m = h * r + u * a
              p = h * p + u * g
              f = h * f + u * m
              g = h * g + u * (h * s + u * n)
              m = h * m + u * (h * a + u * o)
              p = h * p + u * g
              f = h * f + u * m
              c.push(p, f)
            }
            c.push(n, o)
          }
        }
        function _isAlmostFlat2(t, e, i, r, s, a, n, o) {
          const l = (3 * i - 2 * t - n) ** 2
          const c = (3 * r - 2 * e - o) ** 2
          const d = (3 * s - t - 2 * n) ** 2
          const h = (3 * a - e - 2 * o) ** 2
          return Math.max(l, d) + Math.max(c, h) <= 10
        }
        function _getBbox2() {
          let t = 1 / 0
          let e = -1 / 0
          let i = 1 / 0
          let s = -1 / 0
          for (const a of this.paths)
            for (const [n, o, l, c] of a) {
              const a = r.Util.bezierBoundingBox(...n, ...o, ...l, ...c)
              t = Math.min(t, a[0])
              i = Math.min(i, a[1])
              e = Math.max(e, a[2])
              s = Math.max(s, a[3])
            }
          return [t, i, e, s]
        }
        function _getPadding2() {
          return _classPrivateFieldGet(this, g)
            ? Math.ceil(this.thickness * this.parent.scaleFactor)
            : 0
        }
        function _fitToContent2() {
          const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          if (this.isEmpty()) return
          if (!_classPrivateFieldGet(this, g)) {
            _classPrivateMethodGet(this, M, _redraw2).call(this)
            return
          }
          const e = _classPrivateMethodGet(this, U, _getBbox2).call(this)
          const i = _classPrivateMethodGet(this, W, _getPadding2).call(this)
          _classPrivateFieldSet(this, d, Math.max(o, e[2] - e[0]))
          _classPrivateFieldSet(this, c, Math.max(o, e[3] - e[1]))
          const r = Math.ceil(i + _classPrivateFieldGet(this, d) * this.scaleFactor)
          const s = Math.ceil(i + _classPrivateFieldGet(this, c) * this.scaleFactor)
          const [a, n] = this.parent.viewportBaseDimensions
          this.width = r / a
          this.height = s / n
          _classPrivateFieldSet(this, l, r / s)
          _classPrivateMethodGet(this, z, _setMinDims2).call(this)
          const h = this.translationX
          const u = this.translationY
          this.translationX = -e[0]
          this.translationY = -e[1]
          _classPrivateMethodGet(this, O, _setCanvasDims2).call(this)
          _classPrivateMethodGet(this, M, _redraw2).call(this)
          _classPrivateFieldSet(this, b, r)
          _classPrivateFieldSet(this, y, s)
          this.setDims(r, s)
          const p = t ? i / this.scaleFactor / 2 : 0
          this.translate(h - this.translationX - p, u - this.translationY - p)
        }
        function _setMinDims2() {
          const { style: t } = this.div
          if (_classPrivateFieldGet(this, l) >= 1) {
            t.minHeight = '16px'
            t.minWidth = `${Math.round(_classPrivateFieldGet(this, l) * o)}px`
          } else {
            t.minWidth = '16px'
            t.minHeight = `${Math.round(o / _classPrivateFieldGet(this, l))}px`
          }
        }
        _defineProperty(InkEditor, '_defaultColor', null)
        _defineProperty(InkEditor, '_defaultOpacity', 1)
        _defineProperty(InkEditor, '_defaultThickness', 1)
        _defineProperty(InkEditor, '_l10nPromise', void 0)
        _defineProperty(InkEditor, '_type', 'ink')
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.fitCurve = void 0
        const r = i(153)
        e.fitCurve = r
      },
      (t) => {
        function fitCubic(t, e, i, r, s) {
          let a
          let n
          let o
          let l
          let c
          let d
          let h
          let u
          let p
          let f
          let g
          let m
          let v
          if (t.length === 2) {
            m = maths.vectorLen(maths.subtract(t[0], t[1])) / 3
            return [
              (a = [
                t[0],
                maths.addArrays(t[0], maths.mulItems(e, m)),
                maths.addArrays(t[1], maths.mulItems(i, m)),
                t[1]
              ])
            ]
          }
          n = (function chordLengthParameterize(t) {
            let e
            let i
            let r
            let s = []
            t.forEach((t, a) => {
              e = a ? i + maths.vectorLen(maths.subtract(t, r)) : 0
              s.push(e)
              i = e
              r = t
            })
            return (s = s.map((t) => t / i))
          })(t)
          ;[a, l, d] = generateAndReport(t, n, n, e, i, s)
          if (l === 0 || l < r) return [a]
          if (l < r * r) {
            o = n
            c = l
            h = d
            for (v = 0; v < 20; v++) {
              o = reparameterize(a, t, o)
              ;[a, l, d] = generateAndReport(t, n, o, e, i, s)
              if (l < r) return [a]
              if (d === h) {
                const t = l / c
                if (t > 0.9999 && t < 1.0001) break
              }
              c = l
              h = d
            }
          }
          g = []
          if ((u = maths.subtract(t[d - 1], t[d + 1])).every((t) => t === 0)) {
            u = maths.subtract(t[d - 1], t[d])
            ;[u[0], u[1]] = [-u[1], u[0]]
          }
          p = maths.normalize(u)
          f = maths.mulItems(p, -1)
          return (g = (g = g.concat(fitCubic(t.slice(0, d + 1), e, p, r, s))).concat(
            fitCubic(t.slice(d), f, i, r, s)
          ))
        }
        function generateAndReport(t, e, i, r, s, a) {
          let n
          let o
          let l
          n = (function generateBezier(t, e, i, r) {
            let s
            let a
            let n
            let o
            let l
            let c
            let d
            let h
            let u
            let p
            let f
            let g
            let m
            let v
            let _
            let b
            let y
            const A = t[0]
            const S = t[t.length - 1]
            s = [A, null, null, S]
            a = maths.zeros_Xx2x2(e.length)
            for (m = 0, v = e.length; m < v; m++) {
              y = 1 - (b = e[m])
              ;(n = a[m])[0] = maths.mulItems(i, 3 * b * (y * y))
              n[1] = maths.mulItems(r, 3 * y * (b * b))
            }
            o = [
              [0, 0],
              [0, 0]
            ]
            l = [0, 0]
            for (m = 0, v = t.length; m < v; m++) {
              b = e[m]
              n = a[m]
              o[0][0] += maths.dot(n[0], n[0])
              o[0][1] += maths.dot(n[0], n[1])
              o[1][0] += maths.dot(n[0], n[1])
              o[1][1] += maths.dot(n[1], n[1])
              _ = maths.subtract(t[m], bezier.q([A, A, S, S], b))
              l[0] += maths.dot(n[0], _)
              l[1] += maths.dot(n[1], _)
            }
            c = o[0][0] * o[1][1] - o[1][0] * o[0][1]
            d = o[0][0] * l[1] - o[1][0] * l[0]
            h = l[0] * o[1][1] - l[1] * o[0][1]
            u = c === 0 ? 0 : h / c
            p = c === 0 ? 0 : d / c
            g = maths.vectorLen(maths.subtract(A, S))
            if (u < (f = 1e-6 * g) || p < f) {
              s[1] = maths.addArrays(A, maths.mulItems(i, g / 3))
              s[2] = maths.addArrays(S, maths.mulItems(r, g / 3))
            } else {
              s[1] = maths.addArrays(A, maths.mulItems(i, u))
              s[2] = maths.addArrays(S, maths.mulItems(r, p))
            }
            return s
          })(t, i, r, s)
          ;[o, l] = (function computeMaxError(t, e, i) {
            let r
            let s
            let a
            let n
            let o
            let l
            let c
            let d
            s = 0
            a = Math.floor(t.length / 2)
            const h = mapTtoRelativeDistances(e, 10)
            for (o = 0, l = t.length; o < l; o++) {
              c = t[o]
              d = find_t(e, i[o], h, 10)
              if ((r = (n = maths.subtract(bezier.q(e, d), c))[0] * n[0] + n[1] * n[1]) > s) {
                s = r
                a = o
              }
            }
            return [s, a]
          })(t, n, e)
          a && a({ bez: n, points: t, params: e, maxErr: o, maxPoint: l })
          return [n, o, l]
        }
        function reparameterize(t, e, i) {
          return i.map((i, r) => newtonRaphsonRootFind(t, e[r], i))
        }
        function newtonRaphsonRootFind(t, e, i) {
          const r = maths.subtract(bezier.q(t, i), e)
          const s = bezier.qprime(t, i)
          const a = maths.mulMatrix(r, s)
          const n =
            maths.sum(maths.squareItems(s)) + 2 * maths.mulMatrix(r, bezier.qprimeprime(t, i))
          return n === 0 ? i : i - a / n
        }
        var mapTtoRelativeDistances = function (t, e) {
          for (var i, r = [0], s = t[0], a = 0, n = 1; n <= e; n++) {
            i = bezier.q(t, n / e)
            a += maths.vectorLen(maths.subtract(i, s))
            r.push(a)
            s = i
          }
          return (r = r.map((t) => t / a))
        }
        function find_t(t, e, i, r) {
          if (e < 0) return 0
          if (e > 1) return 1
          for (var s, a, n, o, l = 1; l <= r; l++)
            if (e <= i[l]) {
              n = (l - 1) / r
              a = l / r
              o = ((e - (s = i[l - 1])) / (i[l] - s)) * (a - n) + n
              break
            }
          return o
        }
        function createTangent(t, e) {
          return maths.normalize(maths.subtract(t, e))
        }
        class maths {
          static zeros_Xx2x2(t) {
            for (var e = []; t--; ) e.push([0, 0])
            return e
          }

          static mulItems(t, e) {
            return t.map((t) => t * e)
          }

          static mulMatrix(t, e) {
            return t.reduce((t, i, r) => t + i * e[r], 0)
          }

          static subtract(t, e) {
            return t.map((t, i) => t - e[i])
          }

          static addArrays(t, e) {
            return t.map((t, i) => t + e[i])
          }

          static addItems(t, e) {
            return t.map((t) => t + e)
          }

          static sum(t) {
            return t.reduce((t, e) => t + e)
          }

          static dot(t, e) {
            return maths.mulMatrix(t, e)
          }

          static vectorLen(t) {
            return Math.hypot(...t)
          }

          static divItems(t, e) {
            return t.map((t) => t / e)
          }

          static squareItems(t) {
            return t.map((t) => t * t)
          }

          static normalize(t) {
            return this.divItems(t, this.vectorLen(t))
          }
        }
        class bezier {
          static q(t, e) {
            const i = 1 - e
            const r = maths.mulItems(t[0], i * i * i)
            const s = maths.mulItems(t[1], 3 * i * i * e)
            const a = maths.mulItems(t[2], 3 * i * e * e)
            const n = maths.mulItems(t[3], e * e * e)
            return maths.addArrays(maths.addArrays(r, s), maths.addArrays(a, n))
          }

          static qprime(t, e) {
            const i = 1 - e
            const r = maths.mulItems(maths.subtract(t[1], t[0]), 3 * i * i)
            const s = maths.mulItems(maths.subtract(t[2], t[1]), 6 * i * e)
            const a = maths.mulItems(maths.subtract(t[3], t[2]), 3 * e * e)
            return maths.addArrays(maths.addArrays(r, s), a)
          }

          static qprimeprime(t, e) {
            return maths.addArrays(
              maths.mulItems(
                maths.addArrays(maths.subtract(t[2], maths.mulItems(t[1], 2)), t[0]),
                6 * (1 - e)
              ),
              maths.mulItems(
                maths.addArrays(maths.subtract(t[3], maths.mulItems(t[2], 2)), t[1]),
                6 * e
              )
            )
          }
        }
        t.exports = function fitCurve(t, e, i) {
          if (!Array.isArray(t)) throw new TypeError('First argument should be an array')
          t.forEach((e) => {
            if (
              !Array.isArray(e) ||
              e.some((t) => typeof t !== 'number') ||
              e.length !== t[0].length
            )
              throw Error(
                'Each point should be an array of numbers. Each point should have the same amount of numbers.'
              )
          })
          if ((t = t.filter((e, i) => i === 0 || !e.every((e, r) => e === t[i - 1][r]))).length < 2)
            return []
          const r = t.length
          const s = createTangent(t[1], t[0])
          const a = createTangent(t[r - 2], t[r - 1])
          return fitCubic(t, s, a, e, i)
        }
        t.exports.fitCubic = fitCubic
        t.exports.createTangent = createTangent
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.AnnotationLayer = void 0
        const r = i(1)
        const s = i(133)
        const a = i(130)
        const n = i(155)
        const o = i(156)
        function _classStaticPrivateMethodGet(t, e, i) {
          !(function _classCheckPrivateStaticAccess(t, e) {
            if (t !== e) throw new TypeError('Private static access of wrong provenance')
          })(t, e)
          return i
        }
        const l = 1e3
        const c = new WeakSet()
        function getRectDims(t) {
          return { width: t[2] - t[0], height: t[3] - t[1] }
        }
        class AnnotationElementFactory {
          static create(t) {
            switch (t.data.annotationType) {
              case r.AnnotationType.LINK:
                return new LinkAnnotationElement(t)
              case r.AnnotationType.TEXT:
                return new TextAnnotationElement(t)
              case r.AnnotationType.WIDGET:
                switch (t.data.fieldType) {
                  case 'Tx':
                    return new TextWidgetAnnotationElement(t)
                  case 'Btn':
                    return t.data.radioButton
                      ? new RadioButtonWidgetAnnotationElement(t)
                      : t.data.checkBox
                      ? new CheckboxWidgetAnnotationElement(t)
                      : new PushButtonWidgetAnnotationElement(t)
                  case 'Ch':
                    return new ChoiceWidgetAnnotationElement(t)
                  case 'Sig':
                    t.data.dest = parent.document
                    return new SigWidgetAnnotationElement(t)
                }
                return new WidgetAnnotationElement(t)
              case r.AnnotationType.POPUP:
                return new PopupAnnotationElement(t)
              case r.AnnotationType.FREETEXT:
                return new FreeTextAnnotationElement(t)
              case r.AnnotationType.LINE:
                return new LineAnnotationElement(t)
              case r.AnnotationType.SQUARE:
                return new SquareAnnotationElement(t)
              case r.AnnotationType.CIRCLE:
                return new CircleAnnotationElement(t)
              case r.AnnotationType.POLYLINE:
                return new PolylineAnnotationElement(t)
              case r.AnnotationType.CARET:
                return new CaretAnnotationElement(t)
              case r.AnnotationType.INK:
                return new InkAnnotationElement(t)
              case r.AnnotationType.POLYGON:
                return new PolygonAnnotationElement(t)
              case r.AnnotationType.HIGHLIGHT:
                return new HighlightAnnotationElement(t)
              case r.AnnotationType.UNDERLINE:
                return new UnderlineAnnotationElement(t)
              case r.AnnotationType.SQUIGGLY:
                return new SquigglyAnnotationElement(t)
              case r.AnnotationType.STRIKEOUT:
                return new StrikeOutAnnotationElement(t)
              case r.AnnotationType.STAMP:
                return new StampAnnotationElement(t)
              case r.AnnotationType.FILEATTACHMENT:
                return new FileAttachmentAnnotationElement(t)
              default:
                return new AnnotationElement(t)
            }
          }
        }
        class AnnotationElement {
          constructor(t) {
            const {
              isRenderable: e = !1,
              ignoreBorder: i = !1,
              createQuadrilaterals: r = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            this.isRenderable = e
            this.data = t.data
            this.layer = t.layer
            this.page = t.page
            this.viewport = t.viewport
            this.linkService = t.linkService
            this.downloadManager = t.downloadManager
            this.imageResourcesPath = t.imageResourcesPath
            this.renderForms = t.renderForms
            this.svgFactory = t.svgFactory
            this.annotationStorage = t.annotationStorage
            this.enableScripting = t.enableScripting
            this.hasJSActions = t.hasJSActions
            this._fieldObjects = t.fieldObjects
            this._mouseState = t.mouseState
            e && (this.container = this._createContainer(i))
            r && (this.quadrilaterals = this._createQuadrilaterals(i))
          }

          _createContainer() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            const e = this.data
            const i = this.page
            const s = this.viewport
            const a = document.createElement('section')
            const { width: n, height: o } = getRectDims(e.rect)
            const [l, c, d, h] = s.viewBox
            const u = d - l
            const p = h - c
            a.setAttribute('data-annotation-id', e.id)
            const f = r.Util.normalizeRect([
              e.rect[0],
              i.view[3] - e.rect[1] + i.view[1],
              e.rect[2],
              i.view[3] - e.rect[3] + i.view[1]
            ])
            if (!t && e.borderStyle.width > 0) {
              a.style.borderWidth = `${e.borderStyle.width}px`
              const t = e.borderStyle.horizontalCornerRadius
              const i = e.borderStyle.verticalCornerRadius
              if (t > 0 || i > 0) {
                const e = `calc(${t}px * var(--scale-factor)) / calc(${i}px * var(--scale-factor))`
                a.style.borderRadius = e
              } else if (this instanceof RadioButtonWidgetAnnotationElement) {
                const t = `calc(${n}px * var(--scale-factor)) / calc(${o}px * var(--scale-factor))`
                a.style.borderRadius = t
              }
              switch (e.borderStyle.style) {
                case r.AnnotationBorderStyleType.SOLID:
                  a.style.borderStyle = 'solid'
                  break
                case r.AnnotationBorderStyleType.DASHED:
                  a.style.borderStyle = 'dashed'
                  break
                case r.AnnotationBorderStyleType.BEVELED:
                  ;(0, r.warn)('Unimplemented border style: beveled')
                  break
                case r.AnnotationBorderStyleType.INSET:
                  ;(0, r.warn)('Unimplemented border style: inset')
                  break
                case r.AnnotationBorderStyleType.UNDERLINE:
                  a.style.borderBottomStyle = 'solid'
              }
              const s = e.borderColor || null
              s
                ? (a.style.borderColor = r.Util.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2]))
                : (a.style.borderWidth = 0)
            }
            a.style.left = `${(100 * (f[0] - l)) / u}%`
            a.style.top = `${(100 * (f[1] - c)) / p}%`
            const { rotation: g } = e
            if (e.hasOwnCanvas || g === 0) {
              a.style.width = `${(100 * n) / u}%`
              a.style.height = `${(100 * o) / p}%`
            } else this.setRotation(g, a)
            return a
          }

          setRotation(t) {
            const e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.container
            const [i, r, s, a] = this.viewport.viewBox
            const n = s - i
            const o = a - r
            const { width: l, height: c } = getRectDims(this.data.rect)
            let d
            let h
            if (t % 180 == 0) {
              d = (100 * l) / n
              h = (100 * c) / o
            } else {
              d = (100 * c) / n
              h = (100 * l) / o
            }
            e.style.width = `${d}%`
            e.style.height = `${h}%`
            e.setAttribute('data-main-rotation', (360 - t) % 360)
          }

          get _commonActions() {
            const setColor = (t, e, i) => {
              const r = i.detail[t]
              i.target.style[e] = n.ColorConverters[`${r[0]}_HTML`](r.slice(1))
            }
            return (0, r.shadow)(this, '_commonActions', {
              display: (t) => {
                const e = t.detail.display % 2 == 1
                this.container.style.visibility = e ? 'hidden' : 'visible'
                this.annotationStorage.setValue(this.data.id, {
                  hidden: e,
                  print: t.detail.display === 0 || t.detail.display === 3
                })
              },
              print: (t) => {
                this.annotationStorage.setValue(this.data.id, { print: t.detail.print })
              },
              hidden: (t) => {
                this.container.style.visibility = t.detail.hidden ? 'hidden' : 'visible'
                this.annotationStorage.setValue(this.data.id, { hidden: t.detail.hidden })
              },
              focus: (t) => {
                setTimeout(() => t.target.focus({ preventScroll: !1 }), 0)
              },
              userName: (t) => {
                t.target.title = t.detail.userName
              },
              readonly: (t) => {
                t.detail.readonly
                  ? t.target.setAttribute('readonly', '')
                  : t.target.removeAttribute('readonly')
              },
              required: (t) => {
                this._setRequired(t.target, t.detail.required)
              },
              bgColor: (t) => {
                setColor('bgColor', 'backgroundColor', t)
              },
              fillColor: (t) => {
                setColor('fillColor', 'backgroundColor', t)
              },
              fgColor: (t) => {
                setColor('fgColor', 'color', t)
              },
              textColor: (t) => {
                setColor('textColor', 'color', t)
              },
              borderColor: (t) => {
                setColor('borderColor', 'borderColor', t)
              },
              strokeColor: (t) => {
                setColor('strokeColor', 'borderColor', t)
              },
              rotation: (t) => {
                const e = t.detail.rotation
                this.setRotation(e)
                this.annotationStorage.setValue(this.data.id, { rotation: e })
              }
            })
          }

          _dispatchEventFromSandbox(t, e) {
            const i = this._commonActions
            for (const r of Object.keys(e.detail)) {
              const s = t[r] || i[r]
              s && s(e)
            }
          }

          _setDefaultPropertiesFromJS(t) {
            if (!this.enableScripting) return
            const e = this.annotationStorage.getRawValue(this.data.id)
            if (!e) return
            const i = this._commonActions
            for (const [r, s] of Object.entries(e)) {
              const a = i[r]
              if (a) {
                a({ detail: { [r]: s }, target: t })
                delete e[r]
              }
            }
          }

          _createQuadrilaterals() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            if (!this.data.quadPoints) return null
            const e = []
            const i = this.data.rect
            for (const i of this.data.quadPoints) {
              this.data.rect = [i[2].x, i[2].y, i[1].x, i[1].y]
              e.push(this._createContainer(t))
            }
            this.data.rect = i
            return e
          }

          _createPopup(t, e) {
            let i = this.container
            if (this.quadrilaterals) {
              t = t || this.quadrilaterals
              i = this.quadrilaterals[0]
            }
            if (!t) {
              ;(t = document.createElement('div')).className = 'popupTriggerArea'
              i.append(t)
            }
            const r = new PopupElement({
              container: i,
              trigger: t,
              color: e.color,
              titleObj: e.titleObj,
              modificationDate: e.modificationDate,
              contentsObj: e.contentsObj,
              richText: e.richText,
              hideWrapper: !0
            }).render()
            r.style.left = '100%'
            i.append(r)
          }

          _renderQuadrilaterals(t) {
            for (const e of this.quadrilaterals) e.className = t
            return this.quadrilaterals
          }

          render() {
            ;(0, r.unreachable)('Abstract method `AnnotationElement.render` called')
          }

          _getElementsByName(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            const i = []
            if (this._fieldObjects) {
              const s = this._fieldObjects[t]
              if (s)
                for (const { page: t, id: a, exportValues: n } of s) {
                  if (t === -1) continue
                  if (a === e) continue
                  const s = typeof n === 'string' ? n : null
                  const o = document.querySelector(`[data-element-id="${a}"]`)
                  !o || c.has(o)
                    ? i.push({ id: a, exportValue: s, domElement: o })
                    : (0, r.warn)(`_getElementsByName - element not allowed: ${a}`)
                }
              return i
            }
            for (const r of document.getElementsByName(t)) {
              const { id: t, exportValue: s } = r
              t !== e && c.has(r) && i.push({ id: t, exportValue: s, domElement: r })
            }
            return i
          }

          static get platform() {
            const t = typeof navigator !== 'undefined' ? navigator.platform : ''
            return (0, r.shadow)(this, 'platform', {
              isWin: t.includes('Win'),
              isMac: t.includes('Mac')
            })
          }
        }
        class LinkAnnotationElement extends AnnotationElement {
          constructor(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
            super(t, {
              isRenderable: !0,
              ignoreBorder: !(e == null || !e.ignoreBorder),
              createQuadrilaterals: !0
            })
            this.isTooltipOnly = t.data.isTooltipOnly
          }

          render() {
            const { data: t, linkService: e } = this
            const i = document.createElement('a')
            i.setAttribute('data-element-id', t.id)
            let r = !1
            if (t.url) {
              e.addLinkAttributes(i, t.url, t.newWindow)
              r = !0
            } else if (t.action) {
              this._bindNamedAction(i, t.action)
              r = !0
            } else if (t.dest) {
              this._bindLink(i, t.dest)
              r = !0
            } else {
              if (
                t.actions &&
                (t.actions.Action || t.actions['Mouse Up'] || t.actions['Mouse Down']) &&
                this.enableScripting &&
                this.hasJSActions
              ) {
                this._bindJSAction(i, t)
                r = !0
              }
              if (t.resetForm) {
                this._bindResetFormAction(i, t.resetForm)
                r = !0
              } else if (this.isTooltipOnly && !r) {
                this._bindLink(i, '')
                r = !0
              }
            }
            if (this.quadrilaterals)
              return this._renderQuadrilaterals('linkAnnotation').map((t, e) => {
                const r = e === 0 ? i : i.cloneNode()
                t.append(r)
                return t
              })
            this.container.className = 'linkAnnotation'
            r && this.container.append(i)
            return this.container
          }

          _bindLink(t, e) {
            t.href = this.linkService.getDestinationHash(e)
            t.onclick = () => {
              e && this.linkService.goToDestination(e)
              return !1
            }
            ;(e || e === '') && (t.className = 'internalLink')
          }

          _bindNamedAction(t, e) {
            t.href = this.linkService.getAnchorUrl('')
            t.onclick = () => {
              this.linkService.executeNamedAction(e)
              return !1
            }
            t.className = 'internalLink'
          }

          _bindJSAction(t, e) {
            t.href = this.linkService.getAnchorUrl('')
            const i = new Map([
              ['Action', 'onclick'],
              ['Mouse Up', 'onmouseup'],
              ['Mouse Down', 'onmousedown']
            ])
            for (const r of Object.keys(e.actions)) {
              const s = i.get(r)
              s &&
                (t[s] = () => {
                  let t
                  ;(t = this.linkService.eventBus) === null ||
                    void 0 === t ||
                    t.dispatch('dispatcheventinsandbox', {
                      source: this,
                      detail: { id: e.id, name: r }
                    })
                  return !1
                })
            }
            t.onclick || (t.onclick = () => !1)
            t.className = 'internalLink'
          }

          _bindResetFormAction(t, e) {
            const i = t.onclick
            i || (t.href = this.linkService.getAnchorUrl(''))
            t.className = 'internalLink'
            if (this._fieldObjects)
              t.onclick = () => {
                i && i()
                const { fields: t, refs: s, include: a } = e
                const n = []
                if (t.length !== 0 || s.length !== 0) {
                  const e = new Set(s)
                  for (const i of t) {
                    const t = this._fieldObjects[i] || []
                    for (const { id: i } of t) e.add(i)
                  }
                  for (const t of Object.values(this._fieldObjects))
                    for (const i of t) e.has(i.id) === a && n.push(i)
                } else for (const t of Object.values(this._fieldObjects)) n.push(...t)
                const o = this.annotationStorage
                const l = []
                for (const t of n) {
                  const { id: e } = t
                  l.push(e)
                  switch (t.type) {
                    case 'text': {
                      const i = t.defaultValue || ''
                      o.setValue(e, { value: i })
                      break
                    }
                    case 'checkbox':
                    case 'radiobutton': {
                      const i = t.defaultValue === t.exportValues
                      o.setValue(e, { value: i })
                      break
                    }
                    case 'combobox':
                    case 'listbox': {
                      const i = t.defaultValue || ''
                      o.setValue(e, { value: i })
                      break
                    }
                    default:
                      continue
                  }
                  const i = document.querySelector(`[data-element-id="${e}"]`)
                  i &&
                    (c.has(i)
                      ? i.dispatchEvent(new Event('resetform'))
                      : (0, r.warn)(`_bindResetFormAction - element not allowed: ${e}`))
                }
                if (this.enableScripting) {
                  let d
                  ;(d = this.linkService.eventBus) === null ||
                    void 0 === d ||
                    d.dispatch('dispatcheventinsandbox', {
                      source: this,
                      detail: { id: 'app', ids: l, name: 'ResetForm' }
                    })
                }
                return !1
              }
            else {
              ;(0, r.warn)(
                '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'
              )
              i || (t.onclick = () => !1)
            }
          }
        }
        class TextAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              )
            })
          }

          render() {
            this.container.className = 'textAnnotation'
            const t = document.createElement('img')
            t.src = `${this.imageResourcesPath}annotation-${this.data.name.toLowerCase()}.svg`
            t.alt = '[{{type}} Annotation]'
            t.dataset.l10nId = 'text_annotation_type'
            t.dataset.l10nArgs = JSON.stringify({ type: this.data.name })
            this.data.hasPopup || this._createPopup(t, this.data)
            this.container.append(t)
            return this.container
          }
        }
        class WidgetAnnotationElement extends AnnotationElement {
          render() {
            this.data.alternativeText && (this.container.title = this.data.alternativeText)
            return this.container
          }

          _getKeyModifier(t) {
            const { isWin: e, isMac: i } = AnnotationElement.platform
            return (e && t.ctrlKey) || (i && t.metaKey)
          }

          _setEventListener(t, e, i, r) {
            e.includes('mouse')
              ? t.addEventListener(e, (t) => {
                  let e
                  ;(e = this.linkService.eventBus) === null ||
                    void 0 === e ||
                    e.dispatch('dispatcheventinsandbox', {
                      source: this,
                      detail: {
                        id: this.data.id,
                        name: i,
                        value: r(t),
                        shift: t.shiftKey,
                        modifier: this._getKeyModifier(t)
                      }
                    })
                })
              : t.addEventListener(e, (t) => {
                  let e
                  ;(e = this.linkService.eventBus) === null ||
                    void 0 === e ||
                    e.dispatch('dispatcheventinsandbox', {
                      source: this,
                      detail: { id: this.data.id, name: i, value: r(t) }
                    })
                })
          }

          _setEventListeners(t, e, i) {
            for (const [s, a] of e) {
              var r
              ;(a === 'Action' || ((r = this.data.actions) !== null && void 0 !== r && r[a])) &&
                this._setEventListener(t, s, a, i)
            }
          }

          _setBackgroundColor(t) {
            const e = this.data.backgroundColor || null
            t.style.backgroundColor =
              e === null ? 'transparent' : r.Util.makeHexColor(e[0], e[1], e[2])
          }

          _setTextStyle(t) {
            const e = ['left', 'center', 'right']
            const { fontColor: i } = this.data.defaultAppearanceData
            const s = this.data.defaultAppearanceData.fontSize || 9
            const a = t.style
            let n
            if (this.data.multiLine) {
              const t = Math.abs(this.data.rect[3] - this.data.rect[1])
              const e = t / (Math.round(t / (r.LINE_FACTOR * s)) || 1)
              n = Math.min(s, Math.round(e / r.LINE_FACTOR))
            } else {
              const t = Math.abs(this.data.rect[3] - this.data.rect[1])
              n = Math.min(s, Math.round(t / r.LINE_FACTOR))
            }
            a.fontSize = `calc(${n}px * var(--scale-factor))`
            a.color = r.Util.makeHexColor(i[0], i[1], i[2])
            this.data.textAlignment !== null && (a.textAlign = e[this.data.textAlignment])
          }

          _setRequired(t, e) {
            e ? t.setAttribute('required', !0) : t.removeAttribute('required')
            t.setAttribute('aria-required', e)
          }
        }
        class TextWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(t) {
            super(t, {
              isRenderable: t.renderForms || (!t.data.hasAppearance && !!t.data.fieldValue)
            })
          }

          setPropertyOnSiblings(t, e, i, r) {
            const s = this.annotationStorage
            for (const a of this._getElementsByName(t.name, t.id)) {
              a.domElement && (a.domElement[e] = i)
              s.setValue(a.id, { [r]: i })
            }
          }

          render() {
            const t = this.annotationStorage
            const e = this.data.id
            this.container.className = 'textWidgetAnnotation'
            let i = null
            if (this.renderForms) {
              const s = t.getValue(e, { value: this.data.fieldValue })
              let a = s.formattedValue || s.value || ''
              const n = t.getValue(e, { charLimit: this.data.maxLen }).charLimit
              n && a.length > n && (a = a.slice(0, n))
              const o = { userValue: a, formattedValue: null, valueOnFocus: '' }
              if (this.data.multiLine) {
                i = document.createElement('textarea')
                i.textContent = a
                this.data.doNotScroll && (i.style.overflowY = 'hidden')
              } else {
                i = document.createElement('input')
                i.type = 'text'
                i.setAttribute('value', a)
                this.data.doNotScroll && (i.style.overflowX = 'hidden')
              }
              c.add(i)
              i.setAttribute('data-element-id', e)
              i.disabled = this.data.readOnly
              i.name = this.data.fieldName
              i.tabIndex = l
              this._setRequired(i, this.data.required)
              n && (i.maxLength = n)
              i.addEventListener('input', (r) => {
                t.setValue(e, { value: r.target.value })
                this.setPropertyOnSiblings(i, 'value', r.target.value, 'value')
              })
              i.addEventListener('resetform', (t) => {
                let e
                const r = (e = this.data.defaultFieldValue) !== null && void 0 !== e ? e : ''
                i.value = o.userValue = r
                o.formattedValue = null
              })
              let blurListener = (t) => {
                const { formattedValue: e } = o
                e != null && (t.target.value = e)
                t.target.scrollLeft = 0
              }
              if (this.enableScripting && this.hasJSActions) {
                let r
                i.addEventListener('focus', (t) => {
                  o.userValue && (t.target.value = o.userValue)
                  o.valueOnFocus = t.target.value
                })
                i.addEventListener('updatefromsandbox', (i) => {
                  const r = {
                    value(i) {
                      let r
                      o.userValue = (r = i.detail.value) !== null && void 0 !== r ? r : ''
                      t.setValue(e, { value: o.userValue.toString() })
                      i.target.value = o.userValue
                    },
                    formattedValue(i) {
                      const { formattedValue: r } = i.detail
                      o.formattedValue = r
                      r != null && i.target !== document.activeElement && (i.target.value = r)
                      t.setValue(e, { formattedValue: r })
                    },
                    selRange(t) {
                      t.target.setSelectionRange(...t.detail.selRange)
                    },
                    charLimit: (i) => {
                      let r
                      const { charLimit: s } = i.detail
                      const { target: a } = i
                      if (s === 0) {
                        a.removeAttribute('maxLength')
                        return
                      }
                      a.setAttribute('maxLength', s)
                      let n = o.userValue
                      if (n && !(n.length <= s)) {
                        n = n.slice(0, s)
                        a.value = o.userValue = n
                        t.setValue(e, { value: n })((r = this.linkService.eventBus)) === null ||
                          void 0 === r ||
                          r.dispatch('dispatcheventinsandbox', {
                            source: this,
                            detail: {
                              id: e,
                              name: 'Keystroke',
                              value: n,
                              willCommit: !0,
                              commitKey: 1,
                              selStart: a.selectionStart,
                              selEnd: a.selectionEnd
                            }
                          })
                      }
                    }
                  }
                  this._dispatchEventFromSandbox(r, i)
                })
                i.addEventListener('keydown', (t) => {
                  let i
                  let r = -1
                  t.key === 'Escape'
                    ? (r = 0)
                    : t.key === 'Enter'
                    ? (r = 2)
                    : t.key === 'Tab' && (r = 3)
                  if (r === -1) return
                  const { value: s } = t.target
                  if (o.valueOnFocus !== s) {
                    o.userValue =
                      s((i = this.linkService.eventBus)) === null ||
                      void 0 === i ||
                      i.dispatch('dispatcheventinsandbox', {
                        source: this,
                        detail: {
                          id: e,
                          name: 'Keystroke',
                          value: s,
                          willCommit: !0,
                          commitKey: r,
                          selStart: t.target.selectionStart,
                          selEnd: t.target.selectionEnd
                        }
                      })
                  }
                })
                const s = blurListener
                blurListener = null
                i.addEventListener('blur', (t) => {
                  const { value: i } = t.target
                  o.userValue = i
                  if (this._mouseState.isDown && o.valueOnFocus !== i) {
                    let r
                    ;(r = this.linkService.eventBus) === null ||
                      void 0 === r ||
                      r.dispatch('dispatcheventinsandbox', {
                        source: this,
                        detail: {
                          id: e,
                          name: 'Keystroke',
                          value: i,
                          willCommit: !0,
                          commitKey: 1,
                          selStart: t.target.selectionStart,
                          selEnd: t.target.selectionEnd
                        }
                      })
                  }
                  s(t)
                })((r = this.data.actions)) !== null &&
                  void 0 !== r &&
                  r.Keystroke &&
                  i.addEventListener('beforeinput', (t) => {
                    let i
                    const { data: r, target: s } = t
                    const { value: a, selectionStart: n, selectionEnd: o } = s
                    let l = n
                    let c = o
                    switch (t.inputType) {
                      case 'deleteWordBackward': {
                        const t = a.substring(0, n).match(/\w*[^\w]*$/)
                        t && (l -= t[0].length)
                        break
                      }
                      case 'deleteWordForward': {
                        const t = a.substring(n).match(/^[^\w]*\w*/)
                        t && (c += t[0].length)
                        break
                      }
                      case 'deleteContentBackward':
                        n === o && (l -= 1)
                        break
                      case 'deleteContentForward':
                        n === o && (c += 1)
                    }
                    t.preventDefault()((i = this.linkService.eventBus)) === null ||
                      void 0 === i ||
                      i.dispatch('dispatcheventinsandbox', {
                        source: this,
                        detail: {
                          id: e,
                          name: 'Keystroke',
                          value: a,
                          change: r || '',
                          willCommit: !1,
                          selStart: l,
                          selEnd: c
                        }
                      })
                  })
                this._setEventListeners(
                  i,
                  [
                    ['focus', 'Focus'],
                    ['blur', 'Blur'],
                    ['mousedown', 'Mouse Down'],
                    ['mouseenter', 'Mouse Enter'],
                    ['mouseleave', 'Mouse Exit'],
                    ['mouseup', 'Mouse Up']
                  ],
                  (t) => t.target.value
                )
              }
              blurListener && i.addEventListener('blur', blurListener)
              if (this.data.comb) {
                const t = (this.data.rect[2] - this.data.rect[0]) / n
                i.classList.add('comb')
                i.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`
              }
            } else {
              i = document.createElement('div')
              i.textContent = this.data.fieldValue
              i.style.verticalAlign = 'middle'
              i.style.display = 'table-cell'
            }
            this._setTextStyle(i)
            this._setBackgroundColor(i)
            this._setDefaultPropertiesFromJS(i)
            this.container.append(i)
            return this.container
          }
        }
        class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(t) {
            super(t, { isRenderable: t.renderForms })
          }

          render() {
            const t = this.annotationStorage
            const e = this.data
            const i = e.id
            let r = t.getValue(i, { value: e.exportValue === e.fieldValue }).value
            if (typeof r === 'string') {
              r = r !== 'Off'
              t.setValue(i, { value: r })
            }
            this.container.className = 'buttonWidgetAnnotation checkBox'
            const s = document.createElement('input')
            c.add(s)
            s.setAttribute('data-element-id', i)
            s.disabled = e.readOnly
            this._setRequired(s, this.data.required)
            s.type = 'checkbox'
            s.name = e.fieldName
            r && s.setAttribute('checked', !0)
            s.setAttribute('exportValue', e.exportValue)
            s.tabIndex = l
            s.addEventListener('change', (r) => {
              const { name: s, checked: a } = r.target
              for (const r of this._getElementsByName(s, i)) {
                const i = a && r.exportValue === e.exportValue
                r.domElement && (r.domElement.checked = i)
                t.setValue(r.id, { value: i })
              }
              t.setValue(i, { value: a })
            })
            s.addEventListener('resetform', (t) => {
              const i = e.defaultFieldValue || 'Off'
              t.target.checked = i === e.exportValue
            })
            if (this.enableScripting && this.hasJSActions) {
              s.addEventListener('updatefromsandbox', (e) => {
                const r = {
                  value(e) {
                    e.target.checked = e.detail.value !== 'Off'
                    t.setValue(i, { value: e.target.checked })
                  }
                }
                this._dispatchEventFromSandbox(r, e)
              })
              this._setEventListeners(
                s,
                [
                  ['change', 'Validate'],
                  ['change', 'Action'],
                  ['focus', 'Focus'],
                  ['blur', 'Blur'],
                  ['mousedown', 'Mouse Down'],
                  ['mouseenter', 'Mouse Enter'],
                  ['mouseleave', 'Mouse Exit'],
                  ['mouseup', 'Mouse Up']
                ],
                (t) => t.target.checked
              )
            }
            this._setBackgroundColor(s)
            this._setDefaultPropertiesFromJS(s)
            this.container.append(s)
            return this.container
          }
        }
        class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(t) {
            super(t, { isRenderable: t.renderForms })
          }

          render() {
            this.container.className = 'buttonWidgetAnnotation radioButton'
            const t = this.annotationStorage
            const e = this.data
            const i = e.id
            let r = t.getValue(i, { value: e.fieldValue === e.buttonValue }).value
            if (typeof r === 'string') {
              r = r !== e.buttonValue
              t.setValue(i, { value: r })
            }
            const s = document.createElement('input')
            c.add(s)
            s.setAttribute('data-element-id', i)
            s.disabled = e.readOnly
            this._setRequired(s, this.data.required)
            s.type = 'radio'
            s.name = e.fieldName
            r && s.setAttribute('checked', !0)
            s.tabIndex = l
            s.addEventListener('change', (e) => {
              const { name: r, checked: s } = e.target
              for (const e of this._getElementsByName(r, i)) t.setValue(e.id, { value: !1 })
              t.setValue(i, { value: s })
            })
            s.addEventListener('resetform', (t) => {
              const i = e.defaultFieldValue
              t.target.checked = i != null && i === e.buttonValue
            })
            if (this.enableScripting && this.hasJSActions) {
              const r = e.buttonValue
              s.addEventListener('updatefromsandbox', (e) => {
                const s = {
                  value: (e) => {
                    const s = r === e.detail.value
                    for (const r of this._getElementsByName(e.target.name)) {
                      const e = s && r.id === i
                      r.domElement && (r.domElement.checked = e)
                      t.setValue(r.id, { value: e })
                    }
                  }
                }
                this._dispatchEventFromSandbox(s, e)
              })
              this._setEventListeners(
                s,
                [
                  ['change', 'Validate'],
                  ['change', 'Action'],
                  ['focus', 'Focus'],
                  ['blur', 'Blur'],
                  ['mousedown', 'Mouse Down'],
                  ['mouseenter', 'Mouse Enter'],
                  ['mouseleave', 'Mouse Exit'],
                  ['mouseup', 'Mouse Up']
                ],
                (t) => t.target.checked
              )
            }
            this._setBackgroundColor(s)
            this._setDefaultPropertiesFromJS(s)
            this.container.append(s)
            return this.container
          }
        }
        class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
          constructor(t) {
            super(t, { ignoreBorder: t.data.hasAppearance })
          }

          render() {
            const t = super.render()
            t.className = 'buttonWidgetAnnotation pushButton'
            this.data.alternativeText && (t.title = this.data.alternativeText)
            const e = t.lastChild
            if (this.enableScripting && this.hasJSActions && e) {
              this._setDefaultPropertiesFromJS(e)
              e.addEventListener('updatefromsandbox', (t) => {
                this._dispatchEventFromSandbox({}, t)
              })
            }
            return t
          }
        }
        class SigWidgetAnnotationElement extends LinkAnnotationElement {
          render() {
            const t = super.render()
            t.className = 'sigWidgetAnnotation'
            return t
          }

          _bindLink(t, e) {
            t.href = ''
            t.name = this.data.fieldName
            this.data.subtype === 'Widget'
              ? t.setAttribute('alg', 'RSA')
              : t.setAttribute('alg', 'SM2')
            t.onclick = () => {
              !(function dispatchCustomEvent(t, e, i) {
                const r = document.createEvent('CustomEvent')
                r.initCustomEvent(t, !0, !0, e)
                i.dispatchEvent(r)
              })(
                'clickSignature',
                {
                  pageIndex: this.page._pageIndex + 1,
                  rect: this.data.rect,
                  fieldName: this.data.fieldName,
                  alg: t.getAttribute('alg')
                },
                e
              )
              return !1
            }
            e && (t.className = 'internalLink')
          }

          _bindNamedAction(t, e) {
            t.href = this.linkService.getAnchorUrl('')
            t.onclick = () => {
              this.linkService.executeNamedAction(e)
              return !1
            }
            t.className = 'internalLink'
          }
        }
        class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
          constructor(t) {
            super(t, { isRenderable: t.renderForms })
          }

          render() {
            this.container.className = 'choiceWidgetAnnotation'
            const t = this.annotationStorage
            const e = this.data.id
            const i = t.getValue(e, { value: this.data.fieldValue })
            const r = document.createElement('select')
            c.add(r)
            r.setAttribute('data-element-id', e)
            r.disabled = this.data.readOnly
            this._setRequired(r, this.data.required)
            r.name = this.data.fieldName
            r.tabIndex = l
            let s = this.data.combo && this.data.options.length > 0
            if (!this.data.combo) {
              r.size = this.data.options.length
              this.data.multiSelect && (r.multiple = !0)
            }
            r.addEventListener('resetform', (t) => {
              const e = this.data.defaultFieldValue
              for (const t of r.options) t.selected = t.value === e
            })
            for (const t of this.data.options) {
              const e = document.createElement('option')
              e.textContent = t.displayValue
              e.value = t.exportValue
              if (i.value.includes(t.exportValue)) {
                e.setAttribute('selected', !0)
                s = !1
              }
              r.append(e)
            }
            let a = null
            if (s) {
              const t = document.createElement('option')
              t.value = ' '
              t.setAttribute('hidden', !0)
              t.setAttribute('selected', !0)
              r.prepend(t)
              a = () => {
                t.remove()
                r.removeEventListener('input', a)
                a = null
              }
              r.addEventListener('input', a)
            }
            const getValue = (t, e) => {
              const i = e ? 'value' : 'textContent'
              const r = t.target.options
              return t.target.multiple
                ? Array.prototype.filter.call(r, (t) => t.selected).map((t) => t[i])
                : r.selectedIndex === -1
                ? null
                : r[r.selectedIndex][i]
            }
            const getItems = (t) => {
              const e = t.target.options
              return Array.prototype.map.call(e, (t) => ({
                displayValue: t.textContent,
                exportValue: t.value
              }))
            }
            if (this.enableScripting && this.hasJSActions) {
              r.addEventListener('updatefromsandbox', (i) => {
                const s = {
                  value(i) {
                    let s
                    ;(s = a) === null || void 0 === s || s()
                    const n = i.detail.value
                    const o = new Set(Array.isArray(n) ? n : [n])
                    for (const t of r.options) t.selected = o.has(t.value)
                    t.setValue(e, { value: getValue(i, !0) })
                  },
                  multipleSelection(t) {
                    r.multiple = !0
                  },
                  remove(i) {
                    const s = r.options
                    const a = i.detail.remove
                    s[a].selected = !1
                    r.remove(a)
                    if (s.length > 0) {
                      Array.prototype.findIndex.call(s, (t) => t.selected) === -1 &&
                        (s[0].selected = !0)
                    }
                    t.setValue(e, { value: getValue(i, !0), items: getItems(i) })
                  },
                  clear(i) {
                    for (; r.length !== 0; ) r.remove(0)
                    t.setValue(e, { value: null, items: [] })
                  },
                  insert(i) {
                    const { index: s, displayValue: a, exportValue: n } = i.detail.insert
                    const o = r.children[s]
                    const l = document.createElement('option')
                    l.textContent = a
                    l.value = n
                    o ? o.before(l) : r.append(l)
                    t.setValue(e, { value: getValue(i, !0), items: getItems(i) })
                  },
                  items(i) {
                    const { items: s } = i.detail
                    for (; r.length !== 0; ) r.remove(0)
                    for (const t of s) {
                      const { displayValue: e, exportValue: i } = t
                      const s = document.createElement('option')
                      s.textContent = e
                      s.value = i
                      r.append(s)
                    }
                    r.options.length > 0 && (r.options[0].selected = !0)
                    t.setValue(e, { value: getValue(i, !0), items: getItems(i) })
                  },
                  indices(i) {
                    const r = new Set(i.detail.indices)
                    for (const t of i.target.options) t.selected = r.has(t.index)
                    t.setValue(e, { value: getValue(i, !0) })
                  },
                  editable(t) {
                    t.target.disabled = !t.detail.editable
                  }
                }
                this._dispatchEventFromSandbox(s, i)
              })
              r.addEventListener('input', (i) => {
                let r
                const s = getValue(i, !0)
                const a = getValue(i, !1)
                t.setValue(e, { value: s })((r = this.linkService.eventBus)) === null ||
                  void 0 === r ||
                  r.dispatch('dispatcheventinsandbox', {
                    source: this,
                    detail: {
                      id: e,
                      name: 'Keystroke',
                      value: a,
                      changeEx: s,
                      willCommit: !0,
                      commitKey: 1,
                      keyDown: !1
                    }
                  })
              })
              this._setEventListeners(
                r,
                [
                  ['focus', 'Focus'],
                  ['blur', 'Blur'],
                  ['mousedown', 'Mouse Down'],
                  ['mouseenter', 'Mouse Enter'],
                  ['mouseleave', 'Mouse Exit'],
                  ['mouseup', 'Mouse Up'],
                  ['input', 'Action']
                ],
                (t) => t.target.checked
              )
            } else
              r.addEventListener('input', function (i) {
                t.setValue(e, { value: getValue(i, !0) })
              })
            this.data.combo && this._setTextStyle(r)
            this._setBackgroundColor(r)
            this._setDefaultPropertiesFromJS(r)
            this.container.append(r)
            return this.container
          }
        }
        class PopupAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              )
            })
          }

          render() {
            this.container.className = 'popupAnnotation'
            if (
              ['Line', 'Square', 'Circle', 'PolyLine', 'Polygon', 'Ink'].includes(
                this.data.parentType
              )
            )
              return this.container
            const t = `[data-annotation-id="${this.data.parentId}"]`
            const e = this.layer.querySelectorAll(t)
            if (e.length === 0) return this.container
            const i = new PopupElement({
              container: this.container,
              trigger: Array.from(e),
              color: this.data.color,
              titleObj: this.data.titleObj,
              modificationDate: this.data.modificationDate,
              contentsObj: this.data.contentsObj,
              richText: this.data.richText
            })
            const s = this.page
            const a = r.Util.normalizeRect([
              this.data.parentRect[0],
              s.view[3] - this.data.parentRect[1] + s.view[1],
              this.data.parentRect[2],
              s.view[3] - this.data.parentRect[3] + s.view[1]
            ])
            const n = a[0] + this.data.parentRect[2] - this.data.parentRect[0]
            const o = a[1]
            const [l, c, d, h] = this.viewport.viewBox
            const u = d - l
            const p = h - c
            this.container.style.left = `${(100 * (n - l)) / u}%`
            this.container.style.top = `${(100 * (o - c)) / p}%`
            this.container.append(i.render())
            return this.container
          }
        }
        class PopupElement {
          constructor(t) {
            this.container = t.container
            this.trigger = t.trigger
            this.color = t.color
            this.titleObj = t.titleObj
            this.modificationDate = t.modificationDate
            this.contentsObj = t.contentsObj
            this.richText = t.richText
            this.hideWrapper = t.hideWrapper || !1
            this.pinned = !1
          }

          render() {
            let t
            let e
            const i = document.createElement('div')
            i.className = 'popupWrapper'
            this.hideElement = this.hideWrapper ? i : this.container
            this.hideElement.hidden = !0
            const a = document.createElement('div')
            a.className = 'popup'
            const n = this.color
            if (n) {
              const t = 0.7 * (255 - n[0]) + n[0]
              const e = 0.7 * (255 - n[1]) + n[1]
              const i = 0.7 * (255 - n[2]) + n[2]
              a.style.backgroundColor = r.Util.makeHexColor(0 | t, 0 | e, 0 | i)
            }
            const l = document.createElement('h1')
            l.dir = this.titleObj.dir
            l.textContent = this.titleObj.str
            a.append(l)
            const c = s.PDFDateString.toDateObject(this.modificationDate)
            if (c) {
              const t = document.createElement('span')
              t.className = 'popupDate'
              t.textContent = '{{date}}, {{time}}'
              t.dataset.l10nId = 'annotation_date_string'
              t.dataset.l10nArgs = JSON.stringify({
                date: c.toLocaleDateString(),
                time: c.toLocaleTimeString()
              })
              a.append(t)
            }
            if (
              (t = this.richText) === null ||
              void 0 === t ||
              !t.str ||
              ((e = this.contentsObj) !== null &&
                void 0 !== e &&
                e.str &&
                this.contentsObj.str !== this.richText.str)
            ) {
              const t = this._formatContents(this.contentsObj)
              a.append(t)
            } else {
              o.XfaLayer.render({ xfaHtml: this.richText.html, intent: 'richText', div: a })
              a.lastChild.className = 'richText popupContent'
            }
            Array.isArray(this.trigger) || (this.trigger = [this.trigger])
            for (const t of this.trigger) {
              t.addEventListener('click', this._toggle.bind(this))
              t.addEventListener('mouseover', this._show.bind(this, !1))
              t.addEventListener('mouseout', this._hide.bind(this, !1))
            }
            a.addEventListener('click', this._hide.bind(this, !0))
            i.append(a)
            return i
          }

          _formatContents(t) {
            const { str: e, dir: i } = t
            const r = document.createElement('p')
            r.className = 'popupContent'
            r.dir = i
            const s = e.split(/(?:\r\n?|\n)/)
            for (let t = 0, e = s.length; t < e; ++t) {
              const i = s[t]
              r.append(document.createTextNode(i))
              t < e - 1 && r.append(document.createElement('br'))
            }
            return r
          }

          _toggle() {
            this.pinned ? this._hide(!0) : this._show(!0)
          }

          _show() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (this.pinned = !0)
            if (this.hideElement.hidden) {
              this.hideElement.hidden = !1
              this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3
            }
          }

          _hide() {
            ;(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) &&
              (this.pinned = !1)
            if (!this.hideElement.hidden && !this.pinned) {
              this.hideElement.hidden = !0
              this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3
            }
          }
        }
        class FreeTextAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
            this.textContent = t.data.textContent
          }

          render() {
            this.container.className = 'freeTextAnnotation'
            if (this.textContent) {
              const t = document.createElement('div')
              t.className = 'annotationTextContent'
              t.setAttribute('role', 'comment')
              for (const e of this.textContent) {
                const i = document.createElement('span')
                i.textContent = e
                t.append(i)
              }
              this.container.append(t)
            }
            this.data.hasPopup || this._createPopup(null, this.data)
            return this.container
          }
        }
        class LineAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
          }

          render() {
            this.container.className = 'lineAnnotation'
            const t = this.data
            const { width: e, height: i } = getRectDims(t.rect)
            const r = this.svgFactory.create(e, i, !0)
            const s = this.svgFactory.createElement('svg:line')
            s.setAttribute('x1', t.rect[2] - t.lineCoordinates[0])
            s.setAttribute('y1', t.rect[3] - t.lineCoordinates[1])
            s.setAttribute('x2', t.rect[2] - t.lineCoordinates[2])
            s.setAttribute('y2', t.rect[3] - t.lineCoordinates[3])
            s.setAttribute('stroke-width', t.borderStyle.width || 1)
            s.setAttribute('stroke', 'transparent')
            s.setAttribute('fill', 'transparent')
            r.append(s)
            this.container.append(r)
            this._createPopup(s, t)
            return this.container
          }
        }
        class SquareAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
          }

          render() {
            this.container.className = 'squareAnnotation'
            const t = this.data
            const { width: e, height: i } = getRectDims(t.rect)
            const r = this.svgFactory.create(e, i, !0)
            const s = t.borderStyle.width
            const a = this.svgFactory.createElement('svg:rect')
            a.setAttribute('x', s / 2)
            a.setAttribute('y', s / 2)
            a.setAttribute('width', e - s)
            a.setAttribute('height', i - s)
            a.setAttribute('stroke-width', s || 1)
            a.setAttribute('stroke', 'transparent')
            a.setAttribute('fill', 'transparent')
            r.append(a)
            this.container.append(r)
            this._createPopup(a, t)
            return this.container
          }
        }
        class CircleAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
          }

          render() {
            this.container.className = 'circleAnnotation'
            const t = this.data
            const { width: e, height: i } = getRectDims(t.rect)
            const r = this.svgFactory.create(e, i, !0)
            const s = t.borderStyle.width
            const a = this.svgFactory.createElement('svg:ellipse')
            a.setAttribute('cx', e / 2)
            a.setAttribute('cy', i / 2)
            a.setAttribute('rx', e / 2 - s / 2)
            a.setAttribute('ry', i / 2 - s / 2)
            a.setAttribute('stroke-width', s || 1)
            a.setAttribute('stroke', 'transparent')
            a.setAttribute('fill', 'transparent')
            r.append(a)
            this.container.append(r)
            this._createPopup(a, t)
            return this.container
          }
        }
        class PolylineAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
            this.containerClassName = 'polylineAnnotation'
            this.svgElementName = 'svg:polyline'
          }

          render() {
            this.container.className = this.containerClassName
            const t = this.data
            const { width: e, height: i } = getRectDims(t.rect)
            const r = this.svgFactory.create(e, i, !0)
            let s = []
            for (const e of t.vertices) {
              const i = e.x - t.rect[0]
              const r = t.rect[3] - e.y
              s.push(`${i},${r}`)
            }
            s = s.join(' ')
            const a = this.svgFactory.createElement(this.svgElementName)
            a.setAttribute('points', s)
            a.setAttribute('stroke-width', t.borderStyle.width || 1)
            a.setAttribute('stroke', 'transparent')
            a.setAttribute('fill', 'transparent')
            r.append(a)
            this.container.append(r)
            this._createPopup(a, t)
            return this.container
          }
        }
        class PolygonAnnotationElement extends PolylineAnnotationElement {
          constructor(t) {
            super(t)
            this.containerClassName = 'polygonAnnotation'
            this.svgElementName = 'svg:polygon'
          }
        }
        class CaretAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
          }

          render() {
            this.container.className = 'caretAnnotation'
            this.data.hasPopup || this._createPopup(null, this.data)
            return this.container
          }
        }
        class InkAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
            this.containerClassName = 'inkAnnotation'
            this.svgElementName = 'svg:polyline'
          }

          render() {
            this.container.className = this.containerClassName
            const t = this.data
            const { width: e, height: i } = getRectDims(t.rect)
            const r = this.svgFactory.create(e, i, !0)
            for (const e of t.inkLists) {
              let i = []
              for (const r of e) {
                const e = r.x - t.rect[0]
                const s = t.rect[3] - r.y
                i.push(`${e},${s}`)
              }
              i = i.join(' ')
              const s = this.svgFactory.createElement(this.svgElementName)
              s.setAttribute('points', i)
              s.setAttribute('stroke-width', t.borderStyle.width || 1)
              s.setAttribute('stroke', 'transparent')
              s.setAttribute('fill', 'transparent')
              this._createPopup(s, t)
              r.append(s)
            }
            this.container.append(r)
            return this.container
          }
        }
        class HighlightAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            })
          }

          render() {
            this.data.hasPopup || this._createPopup(null, this.data)
            if (this.quadrilaterals) return this._renderQuadrilaterals('highlightAnnotation')
            this.container.className = 'highlightAnnotation'
            return this.container
          }
        }
        class UnderlineAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            })
          }

          render() {
            this.data.hasPopup || this._createPopup(null, this.data)
            if (this.quadrilaterals) return this._renderQuadrilaterals('underlineAnnotation')
            this.container.className = 'underlineAnnotation'
            return this.container
          }
        }
        class SquigglyAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            })
          }

          render() {
            this.data.hasPopup || this._createPopup(null, this.data)
            if (this.quadrilaterals) return this._renderQuadrilaterals('squigglyAnnotation')
            this.container.className = 'squigglyAnnotation'
            return this.container
          }
        }
        class StrikeOutAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            })
          }

          render() {
            this.data.hasPopup || this._createPopup(null, this.data)
            if (this.quadrilaterals) return this._renderQuadrilaterals('strikeoutAnnotation')
            this.container.className = 'strikeoutAnnotation'
            return this.container
          }
        }
        class StampAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            let i
            let r
            super(t, {
              isRenderable: !!(
                t.data.hasPopup ||
                ((e = t.data.titleObj) !== null && void 0 !== e && e.str) ||
                ((i = t.data.contentsObj) !== null && void 0 !== i && i.str) ||
                ((r = t.data.richText) !== null && void 0 !== r && r.str)
              ),
              ignoreBorder: !0
            })
          }

          render() {
            this.container.className = 'stampAnnotation'
            this.data.hasPopup || this._createPopup(null, this.data)
            return this.container
          }
        }
        class FileAttachmentAnnotationElement extends AnnotationElement {
          constructor(t) {
            let e
            super(t, { isRenderable: !0 })
            const { filename: i, content: r } = this.data.file
            this.filename = (0, s.getFilenameFromUrl)(i)
            this.content =
              r((e = this.linkService.eventBus)) === null ||
              void 0 === e ||
              e.dispatch('fileattachmentannotation', { source: this, filename: i, content: r })
          }

          render() {
            let t
            let e
            this.container.className = 'fileAttachmentAnnotation'
            const i = document.createElement('div')
            i.className = 'popupTriggerArea'
            i.addEventListener('dblclick', this._download.bind(this))
            !this.data.hasPopup &&
              (((t = this.data.titleObj) !== null && void 0 !== t && t.str) ||
                ((e = this.data.contentsObj) !== null && void 0 !== e && e.str) ||
                this.data.richText) &&
              this._createPopup(i, this.data)
            this.container.append(i)
            return this.container
          }

          _download() {
            let t
            ;(t = this.downloadManager) === null ||
              void 0 === t ||
              t.openOrDownloadData(this.container, this.content, this.filename)
          }
        }
        class AnnotationLayer {
          static render(t) {
            const { annotations: e, div: i, viewport: n, accessibilityManager: o } = t
            _classStaticPrivateMethodGet(this, AnnotationLayer, _setDimensions).call(this, i, n)
            let l = 0
            for (const c of e) {
              if (c.annotationType !== r.AnnotationType.POPUP) {
                const { width: t, height: e } = getRectDims(c.rect)
                if (t <= 0 || e <= 0) continue
              }
              const e = AnnotationElementFactory.create({
                data: c,
                layer: i,
                page: t.page,
                viewport: n,
                linkService: t.linkService,
                downloadManager: t.downloadManager,
                imageResourcesPath: t.imageResourcesPath || '',
                renderForms: !1 !== t.renderForms,
                svgFactory: new s.DOMSVGFactory(),
                annotationStorage: t.annotationStorage || new a.AnnotationStorage(),
                enableScripting: t.enableScripting,
                hasJSActions: t.hasJSActions,
                fieldObjects: t.fieldObjects,
                mouseState: t.mouseState || { isDown: !1 }
              })
              if (e.isRenderable) {
                const t = e.render()
                c.hidden && (t.style.visibility = 'hidden')
                if (Array.isArray(t))
                  for (const e of t) {
                    e.style.zIndex = l++
                    _classStaticPrivateMethodGet(
                      AnnotationLayer,
                      AnnotationLayer,
                      _appendElement
                    ).call(AnnotationLayer, e, c.id, i, o)
                  }
                else {
                  t.style.zIndex = l++
                  e instanceof PopupAnnotationElement
                    ? i.prepend(t)
                    : _classStaticPrivateMethodGet(
                        AnnotationLayer,
                        AnnotationLayer,
                        _appendElement
                      ).call(AnnotationLayer, t, c.id, i, o)
                }
              }
            }
            _classStaticPrivateMethodGet(this, AnnotationLayer, _setAnnotationCanvasMap).call(
              this,
              i,
              t.annotationCanvasMap
            )
          }

          static update(t) {
            const { annotationCanvasMap: e, div: i, viewport: r } = t
            _classStaticPrivateMethodGet(this, AnnotationLayer, _setDimensions).call(this, i, r)
            _classStaticPrivateMethodGet(this, AnnotationLayer, _setAnnotationCanvasMap).call(
              this,
              i,
              e
            )
            i.hidden = !1
          }
        }
        e.AnnotationLayer = AnnotationLayer
        function _appendElement(t, e, i, r) {
          const a = t.firstChild || t
          a.id = `${s.AnnotationPrefix}${e}`
          i.append(t)
          r == null || r.moveElementInDOM(i, t, a, !1)
        }
        function _setDimensions(t, e) {
          const { width: i, height: r, rotation: s } = e
          const { style: a } = t
          const n = s % 180 != 0
          const o = `${Math.floor(i)}px`
          const l = `${Math.floor(r)}px`
          a.width = n ? l : o
          a.height = n ? o : l
          t.setAttribute('data-main-rotation', s)
        }
        function _setAnnotationCanvasMap(t, e) {
          if (e) {
            for (const [i, r] of e) {
              const e = t.querySelector(`[data-annotation-id="${i}"]`)
              if (!e) continue
              const { firstChild: s } = e
              s ? (s.nodeName === 'CANVAS' ? s.replaceWith(r) : s.before(r)) : e.append(r)
            }
            e.clear()
          }
        }
      },
      (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.ColorConverters = void 0
        function makeColorComp(t) {
          return Math.floor(255 * Math.max(0, Math.min(1, t)))
            .toString(16)
            .padStart(2, '0')
        }
        e.ColorConverters = class ColorConverters {
          static CMYK_G(t) {
            const [e, i, r, s] = t
            return ['G', 1 - Math.min(1, 0.3 * e + 0.59 * r + 0.11 * i + s)]
          }

          static G_CMYK(t) {
            const [e] = t
            return ['CMYK', 0, 0, 0, 1 - e]
          }

          static G_RGB(t) {
            const [e] = t
            return ['RGB', e, e, e]
          }

          static G_HTML(t) {
            const [e] = t
            const i = makeColorComp(e)
            return `#${i}${i}${i}`
          }

          static RGB_G(t) {
            const [e, i, r] = t
            return ['G', 0.3 * e + 0.59 * i + 0.11 * r]
          }

          static RGB_HTML(t) {
            const [e, i, r] = t
            return `#${makeColorComp(e)}${makeColorComp(i)}${makeColorComp(r)}`
          }

          static T_HTML() {
            return '#00000000'
          }

          static CMYK_RGB(t) {
            const [e, i, r, s] = t
            return ['RGB', 1 - Math.min(1, e + s), 1 - Math.min(1, r + s), 1 - Math.min(1, i + s)]
          }

          static CMYK_HTML(t) {
            const e = this.CMYK_RGB(t).slice(1)
            return this.RGB_HTML(e)
          }

          static RGB_CMYK(t) {
            const [e, i, r] = t
            const s = 1 - e
            const a = 1 - i
            const n = 1 - r
            return ['CMYK', s, a, n, Math.min(s, a, n)]
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.XfaLayer = void 0
        const r = i(147)
        e.XfaLayer = class XfaLayer {
          static setupStorage(t, e, i, r, s) {
            const a = r.getValue(e, { value: null })
            switch (i.name) {
              case 'textarea':
                a.value !== null && (t.textContent = a.value)
                if (s === 'print') break
                t.addEventListener('input', (t) => {
                  r.setValue(e, { value: t.target.value })
                })
                break
              case 'input':
                if (i.attributes.type === 'radio' || i.attributes.type === 'checkbox') {
                  a.value === i.attributes.xfaOn
                    ? t.setAttribute('checked', !0)
                    : a.value === i.attributes.xfaOff && t.removeAttribute('checked')
                  if (s === 'print') break
                  t.addEventListener('change', (t) => {
                    r.setValue(e, {
                      value: t.target.checked
                        ? t.target.getAttribute('xfaOn')
                        : t.target.getAttribute('xfaOff')
                    })
                  })
                } else {
                  a.value !== null && t.setAttribute('value', a.value)
                  if (s === 'print') break
                  t.addEventListener('input', (t) => {
                    r.setValue(e, { value: t.target.value })
                  })
                }
                break
              case 'select':
                if (a.value !== null)
                  for (const t of i.children)
                    t.attributes.value === a.value && (t.attributes.selected = !0)
                t.addEventListener('input', (t) => {
                  const i = t.target.options
                  const s = i.selectedIndex === -1 ? '' : i[i.selectedIndex].value
                  r.setValue(e, { value: s })
                })
            }
          }

          static setAttributes(t) {
            const { html: e, element: i, storage: r = null, intent: s, linkService: a } = t
            const { attributes: n } = i
            const o = e instanceof HTMLAnchorElement
            n.type === 'radio' && (n.name = `${n.name}-${s}`)
            for (const [t, i] of Object.entries(n))
              if (i != null)
                switch (t) {
                  case 'class':
                    i.length && e.setAttribute(t, i.join(' '))
                    break
                  case 'dataId':
                    break
                  case 'id':
                    e.setAttribute('data-element-id', i)
                    break
                  case 'style':
                    Object.assign(e.style, i)
                    break
                  case 'textContent':
                    e.textContent = i
                    break
                  default:
                    ;(!o || (t !== 'href' && t !== 'newWindow')) && e.setAttribute(t, i)
                }
            o && a.addLinkAttributes(e, n.href, n.newWindow)
            r && n.dataId && this.setupStorage(e, n.dataId, i, r)
          }

          static render(t) {
            const e = t.annotationStorage
            const i = t.linkService
            const s = t.xfaHtml
            const a = t.intent || 'display'
            const n = document.createElement(s.name)
            s.attributes && this.setAttributes({ html: n, element: s, intent: a, linkService: i })
            const o = [[s, -1, n]]
            const l = t.div
            l.append(n)
            if (t.viewport) {
              const e = `matrix(${t.viewport.transform.join(',')})`
              l.style.transform = e
            }
            a !== 'richText' && l.setAttribute('class', 'xfaLayer xfaFont')
            const c = []
            for (; o.length > 0; ) {
              var d
              const [t, s, n] = o.at(-1)
              if (s + 1 === t.children.length) {
                o.pop()
                continue
              }
              const l = t.children[++o.at(-1)[1]]
              if (l === null) continue
              const { name: h } = l
              if (h === '#text') {
                const t = document.createTextNode(l.value)
                c.push(t)
                n.append(t)
                continue
              }
              let u
              u =
                l != null && (d = l.attributes) !== null && void 0 !== d && d.xmlns
                  ? document.createElementNS(l.attributes.xmlns, h)
                  : document.createElement(h)
              n.append(u)
              l.attributes &&
                this.setAttributes({ html: u, element: l, storage: e, intent: a, linkService: i })
              if (l.children && l.children.length > 0) o.push([l, -1, u])
              else if (l.value) {
                const t = document.createTextNode(l.value)
                r.XfaText.shouldBuildText(h) && c.push(t)
                u.append(t)
              }
            }
            for (const t of l.querySelectorAll(
              '.xfaNonInteractive input, .xfaNonInteractive textarea'
            ))
              t.setAttribute('readOnly', !0)
            return { textDivs: c }
          }

          static update(t) {
            const e = `matrix(${t.viewport.transform.join(',')})`
            t.div.style.transform = e
            t.div.hidden = !1
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.TextLayerRenderTask = void 0
        e.renderTextLayer = function renderTextLayer(t) {
          const e = new TextLayerRenderTask({
            textContent: t.textContent,
            textContentStream: t.textContentStream,
            container: t.container,
            viewport: t.viewport,
            textDivs: t.textDivs,
            textContentItemsStr: t.textContentItemsStr,
            enhanceTextSelection: t.enhanceTextSelection
          })
          e._render(t.timeout)
          return e
        }
        const r = i(1)
        const s = i(140)
        const a = i(133)
        const n = 30
        const o = new Map()
        const l = /^\s+$/g
        function appendText(t, e, i, a) {
          const c = document.createElement('span')
          const d = t._enhanceTextSelection
            ? {
                angle: 0,
                canvasWidth: 0,
                hasText: e.str !== '',
                hasEOL: e.hasEOL,
                originalTransform: null,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                scale: 1,
                fontSize: 0
              }
            : { angle: 0, canvasWidth: 0, hasText: e.str !== '', hasEOL: e.hasEOL, fontSize: 0 }
          t._textDivs.push(c)
          e.str = (0, s.replaceSensitiveWord)(e.str)
          const h = r.Util.transform(t._viewport.transform, e.transform)
          let u = Math.atan2(h[1], h[0])
          const p = i[e.fontName]
          p.vertical && (u += Math.PI / 2)
          const f = Math.hypot(h[2], h[3])
          const g =
            f *
            (function getAscent(t, e) {
              const i = o.get(t)
              if (i) return i
              e.save()
              e.font = `30px ${t}`
              const r = e.measureText('')
              let s = r.fontBoundingBoxAscent
              let a = Math.abs(r.fontBoundingBoxDescent)
              if (s) {
                e.restore()
                const i = s / (s + a)
                o.set(t, i)
                return i
              }
              e.strokeStyle = 'red'
              e.clearRect(0, 0, n, n)
              e.strokeText('g', 0, 0)
              let l = e.getImageData(0, 0, n, n).data
              a = 0
              for (let t = l.length - 1 - 3; t >= 0; t -= 4)
                if (l[t] > 0) {
                  a = Math.ceil(t / 4 / n)
                  break
                }
              e.clearRect(0, 0, n, n)
              e.strokeText('A', 0, n)
              l = e.getImageData(0, 0, n, n).data
              s = 0
              for (let t = 0, e = l.length; t < e; t += 4)
                if (l[t] > 0) {
                  s = n - Math.floor(t / 4 / n)
                  break
                }
              e.restore()
              if (s) {
                const e = s / (s + a)
                o.set(t, e)
                return e
              }
              o.set(t, 0.8)
              return 0.8
            })(p.fontFamily, a)
          let m
          let v
          if (u === 0) {
            m = h[4]
            v = h[5] - g
          } else {
            m = h[4] + g * Math.sin(u)
            v = h[5] - g * Math.cos(u)
          }
          c.style.left = `${m}px`
          c.style.top = `${v}px`
          c.style.fontSize = `${f}px`
          c.style.fontFamily = p.fontFamily
          d.fontSize = f
          c.setAttribute('role', 'presentation')
          c.textContent = e.str
          c.dir = e.dir
          t._fontInspectorEnabled && (c.dataset.fontName = e.fontName)
          u !== 0 && (d.angle = u * (180 / Math.PI))
          let _ = !1
          if (e.str.length > 1 || (t._enhanceTextSelection && l.test(e.str))) _ = !0
          else if (e.str !== ' ' && e.transform[0] !== e.transform[3]) {
            const t = Math.abs(e.transform[0])
            const i = Math.abs(e.transform[3])
            t !== i && Math.max(t, i) / Math.min(t, i) > 1.5 && (_ = !0)
          }
          _ &&
            (p.vertical
              ? (d.canvasWidth = e.height * t._viewport.scale)
              : (d.canvasWidth = e.width * t._viewport.scale))
          t._textDivProperties.set(c, d)
          t._textContentStream && t._layoutText(c)
          if (t._enhanceTextSelection && d.hasText) {
            let i = 1
            let s = 0
            if (u !== 0) {
              i = Math.cos(u)
              s = Math.sin(u)
            }
            const a = (p.vertical ? e.height : e.width) * t._viewport.scale
            const n = f
            let o
            let l
            if (u !== 0) {
              o = [i, s, -s, i, m, v]
              l = r.Util.getAxialAlignedBoundingBox([0, 0, a, n], o)
            } else l = [m, v, m + a, v + n]
            t._bounds.push({
              left: l[0],
              top: l[1],
              right: l[2],
              bottom: l[3],
              div: c,
              size: [a, n],
              m: o
            })
          }
        }
        function render(t) {
          if (t._canceled) return
          const e = t._textDivs
          const i = t._capability
          const r = e.length
          if (r > 1e5) {
            t._renderingDone = !0
            i.resolve()
          } else {
            if (!t._textContentStream) for (let i = 0; i < r; i++) t._layoutText(e[i])
            t._renderingDone = !0
            i.resolve()
          }
        }
        function findPositiveMin(t, e, i) {
          let r = 0
          for (let s = 0; s < i; s++) {
            const i = t[e++]
            i > 0 && (r = r ? Math.min(i, r) : i)
          }
          return r
        }
        function expand(t) {
          const e = t._bounds
          const i = t._viewport
          const s = (function expandBounds(t, e, i) {
            const r = i.map(function (t, e) {
              return {
                x1: t.left,
                y1: t.top,
                x2: t.right,
                y2: t.bottom,
                index: e,
                x1New: void 0,
                x2New: void 0
              }
            })
            expandBoundsLTR(t, r)
            const s = new Array(i.length)
            for (const t of r) {
              const e = t.index
              s[e] = { left: t.x1New, top: 0, right: t.x2New, bottom: 0 }
            }
            i.map(function (e, i) {
              const a = s[i]
              const n = r[i]
              n.x1 = e.top
              n.y1 = t - a.right
              n.x2 = e.bottom
              n.y2 = t - a.left
              n.index = i
              n.x1New = void 0
              n.x2New = void 0
            })
            expandBoundsLTR(e, r)
            for (const t of r) {
              const e = t.index
              s[e].top = t.x1New
              s[e].bottom = t.x2New
            }
            return s
          })(i.width, i.height, e)
          for (let i = 0; i < s.length; i++) {
            const a = e[i].div
            const n = t._textDivProperties.get(a)
            if (n.angle === 0) {
              n.paddingLeft = e[i].left - s[i].left
              n.paddingTop = e[i].top - s[i].top
              n.paddingRight = s[i].right - e[i].right
              n.paddingBottom = s[i].bottom - e[i].bottom
              t._textDivProperties.set(a, n)
              continue
            }
            const o = s[i]
            const l = e[i]
            const c = l.m
            const d = c[0]
            const h = c[1]
            const u = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size]
            const p = new Float64Array(64)
            for (let t = 0, e = u.length; t < e; t++) {
              const e = r.Util.applyTransform(u[t], c)
              p[t + 0] = d && (o.left - e[0]) / d
              p[t + 4] = h && (o.top - e[1]) / h
              p[t + 8] = d && (o.right - e[0]) / d
              p[t + 12] = h && (o.bottom - e[1]) / h
              p[t + 16] = h && (o.left - e[0]) / -h
              p[t + 20] = d && (o.top - e[1]) / d
              p[t + 24] = h && (o.right - e[0]) / -h
              p[t + 28] = d && (o.bottom - e[1]) / d
              p[t + 32] = d && (o.left - e[0]) / -d
              p[t + 36] = h && (o.top - e[1]) / -h
              p[t + 40] = d && (o.right - e[0]) / -d
              p[t + 44] = h && (o.bottom - e[1]) / -h
              p[t + 48] = h && (o.left - e[0]) / h
              p[t + 52] = d && (o.top - e[1]) / -d
              p[t + 56] = h && (o.right - e[0]) / h
              p[t + 60] = d && (o.bottom - e[1]) / -d
            }
            const f = 1 + Math.min(Math.abs(d), Math.abs(h))
            n.paddingLeft = findPositiveMin(p, 32, 16) / f
            n.paddingTop = findPositiveMin(p, 48, 16) / f
            n.paddingRight = findPositiveMin(p, 0, 16) / f
            n.paddingBottom = findPositiveMin(p, 16, 16) / f
            t._textDivProperties.set(a, n)
          }
        }
        function expandBoundsLTR(t, e) {
          e.sort(function (t, e) {
            return t.x1 - e.x1 || t.index - e.index
          })
          const i = [
            {
              start: -1 / 0,
              end: 1 / 0,
              boundary: {
                x1: -1 / 0,
                y1: -1 / 0,
                x2: 0,
                y2: 1 / 0,
                index: -1,
                x1New: 0,
                x2New: 0
              }
            }
          ]
          for (const t of e) {
            let e = 0
            for (; e < i.length && i[e].end <= t.y1; ) e++
            let r
            let s
            let a = i.length - 1
            for (; a >= 0 && i[a].start >= t.y2; ) a--
            let n
            let o
            let l = -1 / 0
            for (n = e; n <= a; n++) {
              r = i[n]
              s = r.boundary
              let e
              e =
                s.x2 > t.x1
                  ? s.index > t.index
                    ? s.x1New
                    : t.x1
                  : void 0 === s.x2New
                  ? (s.x2 + t.x1) / 2
                  : s.x2New
              e > l && (l = e)
            }
            t.x1New = l
            for (n = e; n <= a; n++) {
              r = i[n]
              s = r.boundary
              void 0 === s.x2New
                ? s.x2 > t.x1
                  ? s.index > t.index && (s.x2New = s.x2)
                  : (s.x2New = l)
                : s.x2New > l && (s.x2New = Math.max(l, s.x2))
            }
            const c = []
            let d = null
            for (n = e; n <= a; n++) {
              r = i[n]
              s = r.boundary
              const e = s.x2 > t.x2 ? s : t
              if (d === e) c.at(-1).end = r.end
              else {
                c.push({ start: r.start, end: r.end, boundary: e })
                d = e
              }
            }
            if (i[e].start < t.y1) {
              c[0].start = t.y1
              c.unshift({ start: i[e].start, end: t.y1, boundary: i[e].boundary })
            }
            if (t.y2 < i[a].end) {
              c.at(-1).end = t.y2
              c.push({ start: t.y2, end: i[a].end, boundary: i[a].boundary })
            }
            for (n = e; n <= a; n++) {
              r = i[n]
              s = r.boundary
              if (void 0 !== s.x2New) continue
              let t = !1
              for (o = e - 1; !t && o >= 0 && i[o].start >= s.y1; o--) t = i[o].boundary === s
              for (o = a + 1; !t && o < i.length && i[o].end <= s.y2; o++) t = i[o].boundary === s
              for (o = 0; !t && o < c.length; o++) t = c[o].boundary === s
              t || (s.x2New = l)
            }
            Array.prototype.splice.apply(i, [e, a - e + 1, ...c])
          }
          for (const e of i) {
            const i = e.boundary
            void 0 === i.x2New && (i.x2New = Math.max(t, i.x2))
          }
        }
        class TextLayerRenderTask {
          constructor(t) {
            let e
            const {
              textContent: i,
              textContentStream: s,
              container: n,
              viewport: o,
              textDivs: l,
              textContentItemsStr: c,
              enhanceTextSelection: d
            } = t
            d &&
              (0, a.deprecated)(
                'The `enhanceTextSelection` functionality will be removed in the future.'
              )
            this._textContent = i
            this._textContentStream = s
            this._container = n
            this._document = n.ownerDocument
            this._viewport = o
            this._textDivs = l || []
            this._textContentItemsStr = c || []
            this._enhanceTextSelection = !!d
            this._fontInspectorEnabled = !(
              (e = globalThis.FontInspector) === null ||
              void 0 === e ||
              !e.enabled
            )
            this._reader = null
            this._layoutTextLastFontSize = null
            this._layoutTextLastFontFamily = null
            this._layoutTextCtx = null
            this._textDivProperties = new WeakMap()
            this._renderingDone = !1
            this._canceled = !1
            this._capability = (0, r.createPromiseCapability)()
            this._renderTimer = null
            this._bounds = []
            this._devicePixelRatio = globalThis.devicePixelRatio || 1
            this._capability.promise
              .finally(() => {
                this._enhanceTextSelection || (this._textDivProperties = null)
                if (this._layoutTextCtx) {
                  this._layoutTextCtx.canvas.width = 0
                  this._layoutTextCtx.canvas.height = 0
                  this._layoutTextCtx = null
                }
              })
              .catch(() => {})
          }

          get promise() {
            return this._capability.promise
          }

          cancel() {
            this._canceled = !0
            if (this._reader) {
              this._reader.cancel(new r.AbortException('TextLayer task cancelled.')).catch(() => {})
              this._reader = null
            }
            if (this._renderTimer !== null) {
              clearTimeout(this._renderTimer)
              this._renderTimer = null
            }
            this._capability.reject(new Error('TextLayer task cancelled.'))
          }

          _processItems(t, e) {
            for (let i = 0, r = t.length; i < r; i++)
              if (void 0 !== t[i].str) {
                this._textContentItemsStr.push(t[i].str)
                appendText(this, t[i], e, this._layoutTextCtx)
              } else if (
                t[i].type === 'beginMarkedContentProps' ||
                t[i].type === 'beginMarkedContent'
              ) {
                const e = this._container
                this._container = document.createElement('span')
                this._container.classList.add('markedContent')
                t[i].id !== null && this._container.setAttribute('id', `${t[i].id}`)
                e.append(this._container)
              } else
                t[i].type === 'endMarkedContent' && (this._container = this._container.parentNode)
          }

          _layoutText(t) {
            const e = this._textDivProperties.get(t)
            let i = ''
            if (e.canvasWidth !== 0 && e.hasText) {
              const { fontFamily: r } = t.style
              const { fontSize: s } = e
              if (s !== this._layoutTextLastFontSize || r !== this._layoutTextLastFontFamily) {
                this._layoutTextCtx.font = `${s * this._devicePixelRatio}px ${r}`
                this._layoutTextLastFontSize = s
                this._layoutTextLastFontFamily = r
              }
              const { width: a } = this._layoutTextCtx.measureText(t.textContent)
              if (a > 0) {
                const t = (this._devicePixelRatio * e.canvasWidth) / a
                this._enhanceTextSelection && (e.scale = t)
                i = `scaleX(${t})`
              }
            }
            e.angle !== 0 && (i = `rotate(${e.angle}deg) ${i}`)
            if (i.length > 0) {
              this._enhanceTextSelection && (e.originalTransform = i)
              t.style.transform = i
            }
            e.hasText && this._container.append(t)
            if (e.hasEOL) {
              const t = document.createElement('br')
              t.setAttribute('role', 'presentation')
              this._container.append(t)
            }
          }

          _render() {
            const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            const e = (0, r.createPromiseCapability)()
            let i = Object.create(null)
            const s = this._document.createElement('canvas')
            s.height = s.width = n
            this._layoutTextCtx = s.getContext('2d', { alpha: !1 })
            if (this._textContent) {
              const t = this._textContent.items
              const i = this._textContent.styles
              this._processItems(t, i)
              e.resolve()
            } else {
              if (!this._textContentStream)
                throw new Error(
                  'Neither "textContent" nor "textContentStream" parameters specified.'
                )
              {
                const pump = () => {
                  this._reader.read().then((t) => {
                    const { value: r, done: s } = t
                    if (s) e.resolve()
                    else {
                      Object.assign(i, r.styles)
                      this._processItems(r.items, i)
                      pump()
                    }
                  }, e.reject)
                }
                this._reader = this._textContentStream.getReader()
                pump()
              }
            }
            e.promise.then(() => {
              i = null
              t
                ? (this._renderTimer = setTimeout(() => {
                    render(this)
                    this._renderTimer = null
                  }, t))
                : render(this)
            }, this._capability.reject)
          }

          expandTextDivs() {
            const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            if (!this._enhanceTextSelection || !this._renderingDone) return
            if (this._bounds !== null) {
              expand(this)
              this._bounds = null
            }
            const e = []
            const i = []
            for (let r = 0, s = this._textDivs.length; r < s; r++) {
              const s = this._textDivs[r]
              const a = this._textDivProperties.get(s)
              if (a.hasText)
                if (t) {
                  e.length = 0
                  i.length = 0
                  a.originalTransform && e.push(a.originalTransform)
                  if (a.paddingTop > 0) {
                    i.push(`${a.paddingTop}px`)
                    e.push(`translateY(${-a.paddingTop}px)`)
                  } else i.push(0)
                  a.paddingRight > 0 ? i.push(`${a.paddingRight / a.scale}px`) : i.push(0)
                  a.paddingBottom > 0 ? i.push(`${a.paddingBottom}px`) : i.push(0)
                  if (a.paddingLeft > 0) {
                    i.push(`${a.paddingLeft / a.scale}px`)
                    e.push(`translateX(${-a.paddingLeft / a.scale}px)`)
                  } else i.push(0)
                  s.style.padding = i.join(' ')
                  e.length && (s.style.transform = e.join(' '))
                } else {
                  s.style.padding = null
                  s.style.transform = a.originalTransform
                }
            }
          }
        }
        e.TextLayerRenderTask = TextLayerRenderTask
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.SVGGraphics = void 0
        const r = i(133)
        const s = i(1)
        const a = i(3)
        let n = class {
          constructor() {
            ;(0, s.unreachable)('Not implemented: SVGGraphics')
          }
        }
        e.SVGGraphics = n
        {
          const o = { fontStyle: 'normal', fontWeight: 'normal', fillColor: '#000000' }
          const l = 'http://www.w3.org/XML/1998/namespace'
          const c = 'http://www.w3.org/1999/xlink'
          const d = ['butt', 'round', 'square']
          const h = ['miter', 'round', 'bevel']
          const createObjectURL = function (t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
            const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            if (URL.createObjectURL && typeof Blob !== 'undefined' && !i)
              return URL.createObjectURL(new Blob([t], { type: e }))
            const r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
            let s = `data:${e};base64,`
            for (let e = 0, i = t.length; e < i; e += 3) {
              const a = 255 & t[e]
              const n = 255 & t[e + 1]
              const o = 255 & t[e + 2]
              const l = ((3 & a) << 4) | (n >> 4)
              const c = e + 1 < i ? ((15 & n) << 2) | (o >> 6) : 64
              const d = e + 2 < i ? 63 & o : 64
              s += r[a >> 2] + r[l] + r[c] + r[d]
            }
            return s
          }
          const u = (function () {
            const t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])
            const e = new Int32Array(256)
            for (let t = 0; t < 256; t++) {
              let i = t
              for (let t = 0; t < 8; t++)
                i = 1 & i ? 3988292384 ^ ((i >> 1) & 2147483647) : (i >> 1) & 2147483647
              e[t] = i
            }
            function writePngChunk(t, i, r, s) {
              let a = s
              const n = i.length
              r[a] = (n >> 24) & 255
              r[a + 1] = (n >> 16) & 255
              r[a + 2] = (n >> 8) & 255
              r[a + 3] = 255 & n
              a += 4
              r[a] = 255 & t.charCodeAt(0)
              r[a + 1] = 255 & t.charCodeAt(1)
              r[a + 2] = 255 & t.charCodeAt(2)
              r[a + 3] = 255 & t.charCodeAt(3)
              a += 4
              r.set(i, a)
              a += i.length
              const o = (function crc32(t, i, r) {
                let s = -1
                for (let a = i; a < r; a++) {
                  const i = 255 & (s ^ t[a])
                  s = (s >>> 8) ^ e[i]
                }
                return -1 ^ s
              })(r, s + 4, a)
              r[a] = (o >> 24) & 255
              r[a + 1] = (o >> 16) & 255
              r[a + 2] = (o >> 8) & 255
              r[a + 3] = 255 & o
            }
            function deflateSyncUncompressed(t) {
              let e = t.length
              const i = 65535
              const r = Math.ceil(e / i)
              const s = new Uint8Array(2 + e + 5 * r + 4)
              let a = 0
              s[a++] = 120
              s[a++] = 156
              let n = 0
              for (; e > i; ) {
                s[a++] = 0
                s[a++] = 255
                s[a++] = 255
                s[a++] = 0
                s[a++] = 0
                s.set(t.subarray(n, n + i), a)
                a += i
                n += i
                e -= i
              }
              s[a++] = 1
              s[a++] = 255 & e
              s[a++] = (e >> 8) & 255
              s[a++] = 255 & ~e
              s[a++] = ((65535 & ~e) >> 8) & 255
              s.set(t.subarray(n), a)
              a += t.length - n
              const o = (function adler32(t, e, i) {
                let r = 1
                let s = 0
                for (let a = e; a < i; ++a) {
                  r = (r + (255 & t[a])) % 65521
                  s = (s + r) % 65521
                }
                return (s << 16) | r
              })(t, 0, t.length)
              s[a++] = (o >> 24) & 255
              s[a++] = (o >> 16) & 255
              s[a++] = (o >> 8) & 255
              s[a++] = 255 & o
              return s
            }
            function encode(e, i, r, n) {
              const o = e.width
              const l = e.height
              let c
              let d
              let h
              const u = e.data
              switch (i) {
                case s.ImageKind.GRAYSCALE_1BPP:
                  d = 0
                  c = 1
                  h = (o + 7) >> 3
                  break
                case s.ImageKind.RGB_24BPP:
                  d = 2
                  c = 8
                  h = 3 * o
                  break
                case s.ImageKind.RGBA_32BPP:
                  d = 6
                  c = 8
                  h = 4 * o
                  break
                default:
                  throw new Error('invalid format')
              }
              const p = new Uint8Array((1 + h) * l)
              let f = 0
              let g = 0
              for (let t = 0; t < l; ++t) {
                p[f++] = 0
                p.set(u.subarray(g, g + h), f)
                g += h
                f += h
              }
              if (i === s.ImageKind.GRAYSCALE_1BPP && n) {
                f = 0
                for (let t = 0; t < l; t++) {
                  f++
                  for (let t = 0; t < h; t++) p[f++] ^= 255
                }
              }
              const m = new Uint8Array([
                (o >> 24) & 255,
                (o >> 16) & 255,
                (o >> 8) & 255,
                255 & o,
                (l >> 24) & 255,
                (l >> 16) & 255,
                (l >> 8) & 255,
                255 & l,
                c,
                d,
                0,
                0,
                0
              ])
              const v = (function deflateSync(t) {
                if (!a.isNodeJS) return deflateSyncUncompressed(t)
                try {
                  let e
                  e = parseInt(process.versions.node) >= 8 ? t : Buffer.from(t)
                  const i = require('zlib').deflateSync(e, { level: 9 })
                  return i instanceof Uint8Array ? i : new Uint8Array(i)
                } catch (t) {
                  ;(0, s.warn)(`Not compressing PNG because zlib.deflateSync is unavailable: ${t}`)
                }
                return deflateSyncUncompressed(t)
              })(p)
              const _ = t.length + 36 + m.length + v.length
              const b = new Uint8Array(_)
              let y = 0
              b.set(t, y)
              y += t.length
              writePngChunk('IHDR', m, b, y)
              y += 12 + m.length
              writePngChunk('IDATA', v, b, y)
              y += 12 + v.length
              writePngChunk('IEND', new Uint8Array(0), b, y)
              return createObjectURL(b, 'image/png', r)
            }
            return function convertImgDataToPng(t, e, i) {
              return encode(t, void 0 === t.kind ? s.ImageKind.GRAYSCALE_1BPP : t.kind, e, i)
            }
          })()
          class SVGExtraState {
            constructor() {
              this.fontSizeScale = 1
              this.fontWeight = o.fontWeight
              this.fontSize = 0
              this.textMatrix = s.IDENTITY_MATRIX
              this.fontMatrix = s.FONT_IDENTITY_MATRIX
              this.leading = 0
              this.textRenderingMode = s.TextRenderingMode.FILL
              this.textMatrixScale = 1
              this.x = 0
              this.y = 0
              this.lineX = 0
              this.lineY = 0
              this.charSpacing = 0
              this.wordSpacing = 0
              this.textHScale = 1
              this.textRise = 0
              this.fillColor = o.fillColor
              this.strokeColor = '#000000'
              this.fillAlpha = 1
              this.strokeAlpha = 1
              this.lineWidth = 1
              this.lineJoin = ''
              this.lineCap = ''
              this.miterLimit = 0
              this.dashArray = []
              this.dashPhase = 0
              this.dependencies = []
              this.activeClipUrl = null
              this.clipGroup = null
              this.maskId = ''
            }

            clone() {
              return Object.create(this)
            }

            setCurrentPoint(t, e) {
              this.x = t
              this.y = e
            }
          }
          function opListToTree(t) {
            let e = []
            const i = []
            for (const r of t)
              if (r.fn !== 'save') r.fn === 'restore' ? (e = i.pop()) : e.push(r)
              else {
                e.push({ fnId: 92, fn: 'group', items: [] })
                i.push(e)
                e = e.at(-1).items
              }
            return e
          }
          function pf(t) {
            if (Number.isInteger(t)) return t.toString()
            const e = t.toFixed(10)
            let i = e.length - 1
            if (e[i] !== '0') return e
            do {
              i--
            } while (e[i] === '0')
            return e.substring(0, e[i] === '.' ? i : i + 1)
          }
          function pm(t) {
            if (t[4] === 0 && t[5] === 0) {
              if (t[1] === 0 && t[2] === 0)
                return t[0] === 1 && t[3] === 1 ? '' : `scale(${pf(t[0])} ${pf(t[3])})`
              if (t[0] === t[3] && t[1] === -t[2]) {
                return `rotate(${pf((180 * Math.acos(t[0])) / Math.PI)})`
              }
            } else if (t[0] === 1 && t[1] === 0 && t[2] === 0 && t[3] === 1)
              return `translate(${pf(t[4])} ${pf(t[5])})`
            return `matrix(${pf(t[0])} ${pf(t[1])} ${pf(t[2])} ${pf(t[3])} ${pf(t[4])} ${pf(t[5])})`
          }
          let p = 0
          let f = 0
          let g = 0
          e.SVGGraphics = n = class {
            constructor(t, e) {
              const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              ;(0, r.deprecated)(
                'The SVG back-end is no longer maintained and *may* be removed in the future.'
              )
              this.svgFactory = new r.DOMSVGFactory()
              this.current = new SVGExtraState()
              this.transformMatrix = s.IDENTITY_MATRIX
              this.transformStack = []
              this.extraStack = []
              this.commonObjs = t
              this.objs = e
              this.pendingClip = null
              this.pendingEOFill = !1
              this.embedFonts = !1
              this.embeddedFonts = Object.create(null)
              this.cssStyle = null
              this.forceDataSchema = !!i
              this._operatorIdMapping = []
              for (const t in s.OPS) this._operatorIdMapping[s.OPS[t]] = t
            }

            save() {
              this.transformStack.push(this.transformMatrix)
              const t = this.current
              this.extraStack.push(t)
              this.current = t.clone()
            }

            restore() {
              this.transformMatrix = this.transformStack.pop()
              this.current = this.extraStack.pop()
              this.pendingClip = null
              this.tgrp = null
            }

            group(t) {
              this.save()
              this.executeOpTree(t)
              this.restore()
            }

            loadDependencies(t) {
              const e = t.fnArray
              const i = t.argsArray
              for (let t = 0, r = e.length; t < r; t++)
                if (e[t] === s.OPS.dependency)
                  for (const e of i[t]) {
                    const t = e.startsWith('g_') ? this.commonObjs : this.objs
                    const i = new Promise((i) => {
                      t.get(e, i)
                    })
                    this.current.dependencies.push(i)
                  }
              return Promise.all(this.current.dependencies)
            }

            transform(t, e, i, r, a, n) {
              const o = [t, e, i, r, a, n]
              this.transformMatrix = s.Util.transform(this.transformMatrix, o)
              this.tgrp = null
            }

            getSVG(t, e) {
              this.viewport = e
              const i = this._initialize(e)
              return this.loadDependencies(t).then(() => {
                this.transformMatrix = s.IDENTITY_MATRIX
                this.executeOpTree(this.convertOpList(t))
                return i
              })
            }

            convertOpList(t) {
              const e = this._operatorIdMapping
              const i = t.argsArray
              const r = t.fnArray
              const s = []
              for (let t = 0, a = r.length; t < a; t++) {
                const a = r[t]
                s.push({ fnId: a, fn: e[a], args: i[t] })
              }
              return opListToTree(s)
            }

            executeOpTree(t) {
              for (const e of t) {
                const t = e.fn
                const i = e.fnId
                const r = e.args
                switch (0 | i) {
                  case s.OPS.beginText:
                    this.beginText()
                    break
                  case s.OPS.dependency:
                    break
                  case s.OPS.setLeading:
                    this.setLeading(r)
                    break
                  case s.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(r[0], r[1])
                    break
                  case s.OPS.setFont:
                    this.setFont(r)
                    break
                  case s.OPS.showText:
                  case s.OPS.showSpacedText:
                    this.showText(r[0])
                    break
                  case s.OPS.endText:
                    this.endText()
                    break
                  case s.OPS.moveText:
                    this.moveText(r[0], r[1])
                    break
                  case s.OPS.setCharSpacing:
                    this.setCharSpacing(r[0])
                    break
                  case s.OPS.setWordSpacing:
                    this.setWordSpacing(r[0])
                    break
                  case s.OPS.setHScale:
                    this.setHScale(r[0])
                    break
                  case s.OPS.setTextMatrix:
                    this.setTextMatrix(r[0], r[1], r[2], r[3], r[4], r[5])
                    break
                  case s.OPS.setTextRise:
                    this.setTextRise(r[0])
                    break
                  case s.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(r[0])
                    break
                  case s.OPS.setLineWidth:
                    this.setLineWidth(r[0])
                    break
                  case s.OPS.setLineJoin:
                    this.setLineJoin(r[0])
                    break
                  case s.OPS.setLineCap:
                    this.setLineCap(r[0])
                    break
                  case s.OPS.setMiterLimit:
                    this.setMiterLimit(r[0])
                    break
                  case s.OPS.setFillRGBColor:
                    this.setFillRGBColor(r[0], r[1], r[2])
                    break
                  case s.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(r[0], r[1], r[2])
                    break
                  case s.OPS.setStrokeColorN:
                    this.setStrokeColorN(r)
                    break
                  case s.OPS.setFillColorN:
                    this.setFillColorN(r)
                    break
                  case s.OPS.shadingFill:
                    this.shadingFill(r[0])
                    break
                  case s.OPS.setDash:
                    this.setDash(r[0], r[1])
                    break
                  case s.OPS.setRenderingIntent:
                    this.setRenderingIntent(r[0])
                    break
                  case s.OPS.setFlatness:
                    this.setFlatness(r[0])
                    break
                  case s.OPS.setGState:
                    this.setGState(r[0])
                    break
                  case s.OPS.fill:
                    this.fill()
                    break
                  case s.OPS.eoFill:
                    this.eoFill()
                    break
                  case s.OPS.stroke:
                    this.stroke()
                    break
                  case s.OPS.fillStroke:
                    this.fillStroke()
                    break
                  case s.OPS.eoFillStroke:
                    this.eoFillStroke()
                    break
                  case s.OPS.clip:
                    this.clip('nonzero')
                    break
                  case s.OPS.eoClip:
                    this.clip('evenodd')
                    break
                  case s.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask()
                    break
                  case s.OPS.paintImageXObject:
                    this.paintImageXObject(r[0])
                    break
                  case s.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(r[0])
                    break
                  case s.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(r[0])
                    break
                  case s.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(r[0], r[1])
                    break
                  case s.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd()
                    break
                  case s.OPS.closePath:
                    this.closePath()
                    break
                  case s.OPS.closeStroke:
                    this.closeStroke()
                    break
                  case s.OPS.closeFillStroke:
                    this.closeFillStroke()
                    break
                  case s.OPS.closeEOFillStroke:
                    this.closeEOFillStroke()
                    break
                  case s.OPS.nextLine:
                    this.nextLine()
                    break
                  case s.OPS.transform:
                    this.transform(r[0], r[1], r[2], r[3], r[4], r[5])
                    break
                  case s.OPS.constructPath:
                    this.constructPath(r[0], r[1])
                    break
                  case s.OPS.endPath:
                    this.endPath()
                    break
                  case 92:
                    this.group(e.items)
                    break
                  default:
                    ;(0, s.warn)(`Unimplemented operator ${t}`)
                }
              }
            }

            setWordSpacing(t) {
              this.current.wordSpacing = t
            }

            setCharSpacing(t) {
              this.current.charSpacing = t
            }

            nextLine() {
              this.moveText(0, this.current.leading)
            }

            setTextMatrix(t, e, i, r, s, a) {
              const n = this.current
              n.textMatrix = n.lineMatrix = [t, e, i, r, s, a]
              n.textMatrixScale = Math.hypot(t, e)
              n.x = n.lineX = 0
              n.y = n.lineY = 0
              n.xcoords = []
              n.ycoords = []
              n.tspan = this.svgFactory.createElement('svg:tspan')
              n.tspan.setAttributeNS(null, 'font-family', n.fontFamily)
              n.tspan.setAttributeNS(null, 'font-size', `${pf(n.fontSize)}px`)
              n.tspan.setAttributeNS(null, 'y', pf(-n.y))
              n.txtElement = this.svgFactory.createElement('svg:text')
              n.txtElement.append(n.tspan)
            }

            beginText() {
              const t = this.current
              t.x = t.lineX = 0
              t.y = t.lineY = 0
              t.textMatrix = s.IDENTITY_MATRIX
              t.lineMatrix = s.IDENTITY_MATRIX
              t.textMatrixScale = 1
              t.tspan = this.svgFactory.createElement('svg:tspan')
              t.txtElement = this.svgFactory.createElement('svg:text')
              t.txtgrp = this.svgFactory.createElement('svg:g')
              t.xcoords = []
              t.ycoords = []
            }

            moveText(t, e) {
              const i = this.current
              i.x = i.lineX += t
              i.y = i.lineY += e
              i.xcoords = []
              i.ycoords = []
              i.tspan = this.svgFactory.createElement('svg:tspan')
              i.tspan.setAttributeNS(null, 'font-family', i.fontFamily)
              i.tspan.setAttributeNS(null, 'font-size', `${pf(i.fontSize)}px`)
              i.tspan.setAttributeNS(null, 'y', pf(-i.y))
            }

            showText(t) {
              const e = this.current
              const i = e.font
              const r = e.fontSize
              if (r === 0) return
              const a = e.fontSizeScale
              const n = e.charSpacing
              const c = e.wordSpacing
              const d = e.fontDirection
              const h = e.textHScale * d
              const u = i.vertical
              const p = u ? 1 : -1
              const f = i.defaultVMetrics
              const g = r * e.fontMatrix[0]
              let m = 0
              for (const s of t) {
                if (s === null) {
                  m += d * c
                  continue
                }
                if (typeof s === 'number') {
                  m += (p * s * r) / 1e3
                  continue
                }
                const t = (s.isSpace ? c : 0) + n
                const o = s.fontChar
                let l
                let h
                let v
                let _ = s.width
                if (u) {
                  let t
                  const e = s.vmetric || f
                  t = s.vmetric ? e[1] : 0.5 * _
                  t = -t * g
                  const i = e[2] * g
                  _ = e ? -e[0] : _
                  l = t / a
                  h = (m + i) / a
                } else {
                  l = m / a
                  h = 0
                }
                if (s.isInFont || i.missingFile) {
                  e.xcoords.push(e.x + l)
                  u && e.ycoords.push(-e.y + h)
                  e.tspan.textContent += o
                }
                v = u ? _ * g - t * d : _ * g + t * d
                m += v
              }
              e.tspan.setAttributeNS(null, 'x', e.xcoords.map(pf).join(' '))
              u
                ? e.tspan.setAttributeNS(null, 'y', e.ycoords.map(pf).join(' '))
                : e.tspan.setAttributeNS(null, 'y', pf(-e.y))
              u ? (e.y -= m) : (e.x += m * h)
              e.tspan.setAttributeNS(null, 'font-family', e.fontFamily)
              e.tspan.setAttributeNS(null, 'font-size', `${pf(e.fontSize)}px`)
              e.fontStyle !== o.fontStyle && e.tspan.setAttributeNS(null, 'font-style', e.fontStyle)
              e.fontWeight !== o.fontWeight &&
                e.tspan.setAttributeNS(null, 'font-weight', e.fontWeight)
              const v = e.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK
              if (v === s.TextRenderingMode.FILL || v === s.TextRenderingMode.FILL_STROKE) {
                e.fillColor !== o.fillColor && e.tspan.setAttributeNS(null, 'fill', e.fillColor)
                e.fillAlpha < 1 && e.tspan.setAttributeNS(null, 'fill-opacity', e.fillAlpha)
              } else
                e.textRenderingMode === s.TextRenderingMode.ADD_TO_PATH
                  ? e.tspan.setAttributeNS(null, 'fill', 'transparent')
                  : e.tspan.setAttributeNS(null, 'fill', 'none')
              if (v === s.TextRenderingMode.STROKE || v === s.TextRenderingMode.FILL_STROKE) {
                const t = 1 / (e.textMatrixScale || 1)
                this._setStrokeAttributes(e.tspan, t)
              }
              let _ = e.textMatrix
              if (e.textRise !== 0) {
                _ = _.slice()
                _[5] += e.textRise
              }
              e.txtElement.setAttributeNS(null, 'transform', `${pm(_)} scale(${pf(h)}, -1)`)
              e.txtElement.setAttributeNS(l, 'xml:space', 'preserve')
              e.txtElement.append(e.tspan)
              e.txtgrp.append(e.txtElement)
              this._ensureTransformGroup().append(e.txtElement)
            }

            setLeadingMoveText(t, e) {
              this.setLeading(-e)
              this.moveText(t, e)
            }

            addFontStyle(t) {
              if (!t.data)
                throw new Error(
                  'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
                )
              if (!this.cssStyle) {
                this.cssStyle = this.svgFactory.createElement('svg:style')
                this.cssStyle.setAttributeNS(null, 'type', 'text/css')
                this.defs.append(this.cssStyle)
              }
              const e = createObjectURL(t.data, t.mimetype, this.forceDataSchema)
              this.cssStyle.textContent += `@font-face { font-family: "${t.loadedName}"; src: url(${e}); }\n`
            }

            setFont(t) {
              const e = this.current
              const i = this.commonObjs.get(t[0])
              let r = t[1]
              e.font = i
              if (this.embedFonts && !i.missingFile && !this.embeddedFonts[i.loadedName]) {
                this.addFontStyle(i)
                this.embeddedFonts[i.loadedName] = i
              }
              e.fontMatrix = i.fontMatrix || s.FONT_IDENTITY_MATRIX
              let a = 'normal'
              i.black ? (a = '900') : i.bold && (a = 'bold')
              const n = i.italic ? 'italic' : 'normal'
              if (r < 0) {
                r = -r
                e.fontDirection = -1
              } else e.fontDirection = 1
              e.fontSize = r
              e.fontFamily = i.loadedName
              e.fontWeight = a
              e.fontStyle = n
              e.tspan = this.svgFactory.createElement('svg:tspan')
              e.tspan.setAttributeNS(null, 'y', pf(-e.y))
              e.xcoords = []
              e.ycoords = []
            }

            endText() {
              let t
              const e = this.current
              if (
                e.textRenderingMode & s.TextRenderingMode.ADD_TO_PATH_FLAG &&
                (t = e.txtElement) !== null &&
                void 0 !== t &&
                t.hasChildNodes()
              ) {
                e.element = e.txtElement
                this.clip('nonzero')
                this.endPath()
              }
            }

            setLineWidth(t) {
              t > 0 && (this.current.lineWidth = t)
            }

            setLineCap(t) {
              this.current.lineCap = d[t]
            }

            setLineJoin(t) {
              this.current.lineJoin = h[t]
            }

            setMiterLimit(t) {
              this.current.miterLimit = t
            }

            setStrokeAlpha(t) {
              this.current.strokeAlpha = t
            }

            setStrokeRGBColor(t, e, i) {
              this.current.strokeColor = s.Util.makeHexColor(t, e, i)
            }

            setFillAlpha(t) {
              this.current.fillAlpha = t
            }

            setFillRGBColor(t, e, i) {
              this.current.fillColor = s.Util.makeHexColor(t, e, i)
              this.current.tspan = this.svgFactory.createElement('svg:tspan')
              this.current.xcoords = []
              this.current.ycoords = []
            }

            setStrokeColorN(t) {
              this.current.strokeColor = this._makeColorN_Pattern(t)
            }

            setFillColorN(t) {
              this.current.fillColor = this._makeColorN_Pattern(t)
            }

            shadingFill(t) {
              const e = this.viewport.width
              const i = this.viewport.height
              const r = s.Util.inverseTransform(this.transformMatrix)
              const a = s.Util.applyTransform([0, 0], r)
              const n = s.Util.applyTransform([0, i], r)
              const o = s.Util.applyTransform([e, 0], r)
              const l = s.Util.applyTransform([e, i], r)
              const c = Math.min(a[0], n[0], o[0], l[0])
              const d = Math.min(a[1], n[1], o[1], l[1])
              const h = Math.max(a[0], n[0], o[0], l[0])
              const u = Math.max(a[1], n[1], o[1], l[1])
              const p = this.svgFactory.createElement('svg:rect')
              p.setAttributeNS(null, 'x', c)
              p.setAttributeNS(null, 'y', d)
              p.setAttributeNS(null, 'width', h - c)
              p.setAttributeNS(null, 'height', u - d)
              p.setAttributeNS(null, 'fill', this._makeShadingPattern(t))
              this.current.fillAlpha < 1 &&
                p.setAttributeNS(null, 'fill-opacity', this.current.fillAlpha)
              this._ensureTransformGroup().append(p)
            }

            _makeColorN_Pattern(t) {
              return t[0] === 'TilingPattern'
                ? this._makeTilingPattern(t)
                : this._makeShadingPattern(t)
            }

            _makeTilingPattern(t) {
              const e = t[1]
              const i = t[2]
              const r = t[3] || s.IDENTITY_MATRIX
              const [a, n, o, l] = t[4]
              const c = t[5]
              const d = t[6]
              const h = t[7]
              const u = `shading${g++}`
              const [p, f, m, v] = s.Util.normalizeRect([
                ...s.Util.applyTransform([a, n], r),
                ...s.Util.applyTransform([o, l], r)
              ])
              const [_, b] = s.Util.singularValueDecompose2dScale(r)
              const y = c * _
              const A = d * b
              const S = this.svgFactory.createElement('svg:pattern')
              S.setAttributeNS(null, 'id', u)
              S.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse')
              S.setAttributeNS(null, 'width', y)
              S.setAttributeNS(null, 'height', A)
              S.setAttributeNS(null, 'x', `${p}`)
              S.setAttributeNS(null, 'y', `${f}`)
              const P = this.svg
              const x = this.transformMatrix
              const w = this.current.fillColor
              const E = this.current.strokeColor
              const C = this.svgFactory.create(m - p, v - f)
              this.svg = C
              this.transformMatrix = r
              if (h === 2) {
                const t = s.Util.makeHexColor(...e)
                this.current.fillColor = t
                this.current.strokeColor = t
              }
              this.executeOpTree(this.convertOpList(i))
              this.svg = P
              this.transformMatrix = x
              this.current.fillColor = w
              this.current.strokeColor = E
              S.append(C.childNodes[0])
              this.defs.append(S)
              return `url(#${u})`
            }

            _makeShadingPattern(t) {
              typeof t === 'string' && (t = this.objs.get(t))
              switch (t[0]) {
                case 'RadialAxial':
                  const e = `shading${g++}`
                  const i = t[3]
                  let r
                  switch (t[1]) {
                    case 'axial':
                      const i = t[4]
                      const s = t[5]
                      r = this.svgFactory.createElement('svg:linearGradient')
                      r.setAttributeNS(null, 'id', e)
                      r.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse')
                      r.setAttributeNS(null, 'x1', i[0])
                      r.setAttributeNS(null, 'y1', i[1])
                      r.setAttributeNS(null, 'x2', s[0])
                      r.setAttributeNS(null, 'y2', s[1])
                      break
                    case 'radial':
                      const a = t[4]
                      const n = t[5]
                      const o = t[6]
                      const l = t[7]
                      r = this.svgFactory.createElement('svg:radialGradient')
                      r.setAttributeNS(null, 'id', e)
                      r.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse')
                      r.setAttributeNS(null, 'cx', n[0])
                      r.setAttributeNS(null, 'cy', n[1])
                      r.setAttributeNS(null, 'r', l)
                      r.setAttributeNS(null, 'fx', a[0])
                      r.setAttributeNS(null, 'fy', a[1])
                      r.setAttributeNS(null, 'fr', o)
                      break
                    default:
                      throw new Error(`Unknown RadialAxial type: ${t[1]}`)
                  }
                  for (const t of i) {
                    const e = this.svgFactory.createElement('svg:stop')
                    e.setAttributeNS(null, 'offset', t[0])
                    e.setAttributeNS(null, 'stop-color', t[1])
                    r.append(e)
                  }
                  this.defs.append(r)
                  return `url(#${e})`
                case 'Mesh':
                  ;(0, s.warn)('Unimplemented pattern Mesh')
                  return null
                case 'Dummy':
                  return 'hotpink'
                default:
                  throw new Error(`Unknown IR type: ${t[0]}`)
              }
            }

            setDash(t, e) {
              this.current.dashArray = t
              this.current.dashPhase = e
            }

            constructPath(t, e) {
              const i = this.current
              let r = i.x
              let a = i.y
              let n = []
              let o = 0
              for (const i of t)
                switch (0 | i) {
                  case s.OPS.rectangle:
                    r = e[o++]
                    a = e[o++]
                    const t = r + e[o++]
                    const i = a + e[o++]
                    n.push(
                      'M',
                      pf(r),
                      pf(a),
                      'L',
                      pf(t),
                      pf(a),
                      'L',
                      pf(t),
                      pf(i),
                      'L',
                      pf(r),
                      pf(i),
                      'Z'
                    )
                    break
                  case s.OPS.moveTo:
                    r = e[o++]
                    a = e[o++]
                    n.push('M', pf(r), pf(a))
                    break
                  case s.OPS.lineTo:
                    r = e[o++]
                    a = e[o++]
                    n.push('L', pf(r), pf(a))
                    break
                  case s.OPS.curveTo:
                    r = e[o + 4]
                    a = e[o + 5]
                    n.push('C', pf(e[o]), pf(e[o + 1]), pf(e[o + 2]), pf(e[o + 3]), pf(r), pf(a))
                    o += 6
                    break
                  case s.OPS.curveTo2:
                    n.push('C', pf(r), pf(a), pf(e[o]), pf(e[o + 1]), pf(e[o + 2]), pf(e[o + 3]))
                    r = e[o + 2]
                    a = e[o + 3]
                    o += 4
                    break
                  case s.OPS.curveTo3:
                    r = e[o + 2]
                    a = e[o + 3]
                    n.push('C', pf(e[o]), pf(e[o + 1]), pf(r), pf(a), pf(r), pf(a))
                    o += 4
                    break
                  case s.OPS.closePath:
                    n.push('Z')
                }
              n = n.join(' ')
              if (i.path && t.length > 0 && t[0] !== s.OPS.rectangle && t[0] !== s.OPS.moveTo)
                n = i.path.getAttributeNS(null, 'd') + n
              else {
                i.path = this.svgFactory.createElement('svg:path')
                this._ensureTransformGroup().append(i.path)
              }
              i.path.setAttributeNS(null, 'd', n)
              i.path.setAttributeNS(null, 'fill', 'none')
              i.element = i.path
              i.setCurrentPoint(r, a)
            }

            endPath() {
              const t = this.current
              t.path = null
              if (!this.pendingClip) return
              if (!t.element) {
                this.pendingClip = null
                return
              }
              const e = `clippath${p++}`
              const i = this.svgFactory.createElement('svg:clipPath')
              i.setAttributeNS(null, 'id', e)
              i.setAttributeNS(null, 'transform', pm(this.transformMatrix))
              const r = t.element.cloneNode(!0)
              this.pendingClip === 'evenodd'
                ? r.setAttributeNS(null, 'clip-rule', 'evenodd')
                : r.setAttributeNS(null, 'clip-rule', 'nonzero')
              this.pendingClip = null
              i.append(r)
              this.defs.append(i)
              if (t.activeClipUrl) {
                t.clipGroup = null
                for (const t of this.extraStack) t.clipGroup = null
                i.setAttributeNS(null, 'clip-path', t.activeClipUrl)
              }
              t.activeClipUrl = `url(#${e})`
              this.tgrp = null
            }

            clip(t) {
              this.pendingClip = t
            }

            closePath() {
              const t = this.current
              if (t.path) {
                const e = `${t.path.getAttributeNS(null, 'd')}Z`
                t.path.setAttributeNS(null, 'd', e)
              }
            }

            setLeading(t) {
              this.current.leading = -t
            }

            setTextRise(t) {
              this.current.textRise = t
            }

            setTextRenderingMode(t) {
              this.current.textRenderingMode = t
            }

            setHScale(t) {
              this.current.textHScale = t / 100
            }

            setRenderingIntent(t) {}

            setFlatness(t) {}

            setGState(t) {
              for (const [e, i] of t)
                switch (e) {
                  case 'LW':
                    this.setLineWidth(i)
                    break
                  case 'LC':
                    this.setLineCap(i)
                    break
                  case 'LJ':
                    this.setLineJoin(i)
                    break
                  case 'ML':
                    this.setMiterLimit(i)
                    break
                  case 'D':
                    this.setDash(i[0], i[1])
                    break
                  case 'RI':
                    this.setRenderingIntent(i)
                    break
                  case 'FL':
                    this.setFlatness(i)
                    break
                  case 'Font':
                    this.setFont(i)
                    break
                  case 'CA':
                    this.setStrokeAlpha(i)
                    break
                  case 'ca':
                    this.setFillAlpha(i)
                    break
                  default:
                    ;(0, s.warn)(`Unimplemented graphic state operator ${e}`)
                }
            }

            fill() {
              const t = this.current
              if (t.element) {
                t.element.setAttributeNS(null, 'fill', t.fillColor)
                t.element.setAttributeNS(null, 'fill-opacity', t.fillAlpha)
                this.endPath()
              }
            }

            stroke() {
              const t = this.current
              if (t.element) {
                this._setStrokeAttributes(t.element)
                t.element.setAttributeNS(null, 'fill', 'none')
                this.endPath()
              }
            }

            _setStrokeAttributes(t) {
              const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              const i = this.current
              let r = i.dashArray
              e !== 1 &&
                r.length > 0 &&
                (r = r.map(function (t) {
                  return e * t
                }))
              t.setAttributeNS(null, 'stroke', i.strokeColor)
              t.setAttributeNS(null, 'stroke-opacity', i.strokeAlpha)
              t.setAttributeNS(null, 'stroke-miterlimit', pf(i.miterLimit))
              t.setAttributeNS(null, 'stroke-linecap', i.lineCap)
              t.setAttributeNS(null, 'stroke-linejoin', i.lineJoin)
              t.setAttributeNS(null, 'stroke-width', `${pf(e * i.lineWidth)}px`)
              t.setAttributeNS(null, 'stroke-dasharray', r.map(pf).join(' '))
              t.setAttributeNS(null, 'stroke-dashoffset', `${pf(e * i.dashPhase)}px`)
            }

            eoFill() {
              this.current.element &&
                this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd')
              this.fill()
            }

            fillStroke() {
              this.stroke()
              this.fill()
            }

            eoFillStroke() {
              this.current.element &&
                this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd')
              this.fillStroke()
            }

            closeStroke() {
              this.closePath()
              this.stroke()
            }

            closeFillStroke() {
              this.closePath()
              this.fillStroke()
            }

            closeEOFillStroke() {
              this.closePath()
              this.eoFillStroke()
            }

            paintSolidColorImageMask() {
              const t = this.svgFactory.createElement('svg:rect')
              t.setAttributeNS(null, 'x', '0')
              t.setAttributeNS(null, 'y', '0')
              t.setAttributeNS(null, 'width', '1px')
              t.setAttributeNS(null, 'height', '1px')
              t.setAttributeNS(null, 'fill', this.current.fillColor)
              this._ensureTransformGroup().append(t)
            }

            paintImageXObject(t) {
              const e = t.startsWith('g_') ? this.commonObjs.get(t) : this.objs.get(t)
              e
                ? this.paintInlineImageXObject(e)
                : (0, s.warn)(`Dependent image with object ID ${t} is not ready yet`)
            }

            paintInlineImageXObject(t, e) {
              const i = t.width
              const r = t.height
              const s = u(t, this.forceDataSchema, !!e)
              const a = this.svgFactory.createElement('svg:rect')
              a.setAttributeNS(null, 'x', '0')
              a.setAttributeNS(null, 'y', '0')
              a.setAttributeNS(null, 'width', pf(i))
              a.setAttributeNS(null, 'height', pf(r))
              this.current.element = a
              this.clip('nonzero')
              const n = this.svgFactory.createElement('svg:image')
              n.setAttributeNS(c, 'xlink:href', s)
              n.setAttributeNS(null, 'x', '0')
              n.setAttributeNS(null, 'y', pf(-r))
              n.setAttributeNS(null, 'width', `${pf(i)}px`)
              n.setAttributeNS(null, 'height', `${pf(r)}px`)
              n.setAttributeNS(null, 'transform', `scale(${pf(1 / i)} ${pf(-1 / r)})`)
              e ? e.append(n) : this._ensureTransformGroup().append(n)
            }

            paintImageMaskXObject(t) {
              const e = this.current
              const i = t.width
              const r = t.height
              const s = e.fillColor
              e.maskId = `mask${f++}`
              const a = this.svgFactory.createElement('svg:mask')
              a.setAttributeNS(null, 'id', e.maskId)
              const n = this.svgFactory.createElement('svg:rect')
              n.setAttributeNS(null, 'x', '0')
              n.setAttributeNS(null, 'y', '0')
              n.setAttributeNS(null, 'width', pf(i))
              n.setAttributeNS(null, 'height', pf(r))
              n.setAttributeNS(null, 'fill', s)
              n.setAttributeNS(null, 'mask', `url(#${e.maskId})`)
              this.defs.append(a)
              this._ensureTransformGroup().append(n)
              this.paintInlineImageXObject(t, a)
            }

            paintFormXObjectBegin(t, e) {
              Array.isArray(t) &&
                t.length === 6 &&
                this.transform(t[0], t[1], t[2], t[3], t[4], t[5])
              if (e) {
                const t = e[2] - e[0]
                const i = e[3] - e[1]
                const r = this.svgFactory.createElement('svg:rect')
                r.setAttributeNS(null, 'x', e[0])
                r.setAttributeNS(null, 'y', e[1])
                r.setAttributeNS(null, 'width', pf(t))
                r.setAttributeNS(null, 'height', pf(i))
                this.current.element = r
                this.clip('nonzero')
                this.endPath()
              }
            }

            paintFormXObjectEnd() {}

            _initialize(t) {
              const e = this.svgFactory.create(t.width, t.height)
              const i = this.svgFactory.createElement('svg:defs')
              e.append(i)
              this.defs = i
              const r = this.svgFactory.createElement('svg:g')
              r.setAttributeNS(null, 'transform', pm(t.transform))
              e.append(r)
              this.svg = r
              return e
            }

            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const t = this.svgFactory.createElement('svg:g')
                t.setAttributeNS(null, 'clip-path', this.current.activeClipUrl)
                this.svg.append(t)
                this.current.clipGroup = t
              }
              return this.current.clipGroup
            }

            _ensureTransformGroup() {
              if (!this.tgrp) {
                this.tgrp = this.svgFactory.createElement('svg:g')
                this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix))
                this.current.activeClipUrl
                  ? this._ensureClipGroup().append(this.tgrp)
                  : this.svg.append(this.tgrp)
              }
              return this.tgrp
            }
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.PDFNodeStream = void 0
        const r = i(1)
        const s = i(160)
        const a = require('fs')
        const n = require('http')
        const o = require('https')
        const l = require('url')
        const c = /^file:\/\/\/[a-zA-Z]:\//
        e.PDFNodeStream = class PDFNodeStream {
          constructor(t) {
            this.source = t
            this.url = (function parseUrl(t) {
              const e = l.parse(t)
              if (e.protocol === 'file:' || e.host) return e
              if (/^[a-z]:[/\\]/i.test(t)) return l.parse(`file:///${t}`)
              e.host || (e.protocol = 'file:')
              return e
            })(t.url)
            this.isHttp = this.url.protocol === 'http:' || this.url.protocol === 'https:'
            this.isFsUrl = this.url.protocol === 'file:'
            this.httpHeaders = (this.isHttp && t.httpHeaders) || {}
            this._fullRequestReader = null
            this._rangeRequestReaders = []
          }

          get _progressiveDataLength() {
            let t
            let e
            return (t =
              (e = this._fullRequestReader) === null || void 0 === e ? void 0 : e._loaded) !==
              null && void 0 !== t
              ? t
              : 0
          }

          getFullReader() {
            ;(0, r.assert)(
              !this._fullRequestReader,
              'PDFNodeStream.getFullReader can only be called once.'
            )
            this._fullRequestReader = this.isFsUrl
              ? new PDFNodeStreamFsFullReader(this)
              : new PDFNodeStreamFullReader(this)
            return this._fullRequestReader
          }

          getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null
            const i = this.isFsUrl
              ? new PDFNodeStreamFsRangeReader(this, t, e)
              : new PDFNodeStreamRangeReader(this, t, e)
            this._rangeRequestReaders.push(i)
            return i
          }

          cancelAllRequests(t) {
            this._fullRequestReader && this._fullRequestReader.cancel(t)
            for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t)
          }
        }
        class BaseFullReader {
          constructor(t) {
            this._url = t.url
            this._done = !1
            this._storedError = null
            this.onProgress = null
            const e = t.source
            this._contentLength = e.length
            this._loaded = 0
            this._filename = null
            this._disableRange = e.disableRange || !1
            this._rangeChunkSize = e.rangeChunkSize
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0)
            this._isStreamingSupported = !e.disableStream
            this._isRangeSupported = !e.disableRange
            this._readableStream = null
            this._readCapability = (0, r.createPromiseCapability)()
            this._headersCapability = (0, r.createPromiseCapability)()
          }

          get headersReady() {
            return this._headersCapability.promise
          }

          get filename() {
            return this._filename
          }

          get contentLength() {
            return this._contentLength
          }

          get isRangeSupported() {
            return this._isRangeSupported
          }

          get isStreamingSupported() {
            return this._isStreamingSupported
          }

          async read() {
            await this._readCapability.promise
            if (this._done) return { value: void 0, done: !0 }
            if (this._storedError) throw this._storedError
            const t = this._readableStream.read()
            if (t === null) {
              this._readCapability = (0, r.createPromiseCapability)()
              return this.read()
            }
            this._loaded += t.length
            this.onProgress && this.onProgress({ loaded: this._loaded, total: this._contentLength })
            return { value: new Uint8Array(t).buffer, done: !1 }
          }

          cancel(t) {
            this._readableStream ? this._readableStream.destroy(t) : this._error(t)
          }

          _error(t) {
            this._storedError = t
            this._readCapability.resolve()
          }

          _setReadableStream(t) {
            this._readableStream = t
            t.on('readable', () => {
              this._readCapability.resolve()
            })
            t.on('end', () => {
              t.destroy()
              this._done = !0
              this._readCapability.resolve()
            })
            t.on('error', (t) => {
              this._error(t)
            })
            !this._isStreamingSupported &&
              this._isRangeSupported &&
              this._error(new r.AbortException('streaming is disabled'))
            this._storedError && this._readableStream.destroy(this._storedError)
          }
        }
        class BaseRangeReader {
          constructor(t) {
            this._url = t.url
            this._done = !1
            this._storedError = null
            this.onProgress = null
            this._loaded = 0
            this._readableStream = null
            this._readCapability = (0, r.createPromiseCapability)()
            const e = t.source
            this._isStreamingSupported = !e.disableStream
          }

          get isStreamingSupported() {
            return this._isStreamingSupported
          }

          async read() {
            await this._readCapability.promise
            if (this._done) return { value: void 0, done: !0 }
            if (this._storedError) throw this._storedError
            const t = this._readableStream.read()
            if (t === null) {
              this._readCapability = (0, r.createPromiseCapability)()
              return this.read()
            }
            this._loaded += t.length
            this.onProgress && this.onProgress({ loaded: this._loaded })
            return { value: new Uint8Array(t).buffer, done: !1 }
          }

          cancel(t) {
            this._readableStream ? this._readableStream.destroy(t) : this._error(t)
          }

          _error(t) {
            this._storedError = t
            this._readCapability.resolve()
          }

          _setReadableStream(t) {
            this._readableStream = t
            t.on('readable', () => {
              this._readCapability.resolve()
            })
            t.on('end', () => {
              t.destroy()
              this._done = !0
              this._readCapability.resolve()
            })
            t.on('error', (t) => {
              this._error(t)
            })
            this._storedError && this._readableStream.destroy(this._storedError)
          }
        }
        function createRequestOptions(t, e) {
          return {
            protocol: t.protocol,
            auth: t.auth,
            host: t.hostname,
            port: t.port,
            path: t.path,
            method: 'GET',
            headers: e
          }
        }
        class PDFNodeStreamFullReader extends BaseFullReader {
          constructor(t) {
            super(t)
            const handleResponse = (e) => {
              if (e.statusCode === 404) {
                const t = new r.MissingPDFException(`Missing PDF "${this._url}".`)
                this._storedError = t
                this._headersCapability.reject(t)
                return
              }
              this._headersCapability.resolve()
              this._setReadableStream(e)
              const getResponseHeader = (t) => this._readableStream.headers[t.toLowerCase()]
              const { allowRangeRequests: i, suggestedLength: a } = (0,
              s.validateRangeRequestCapabilities)({
                getResponseHeader,
                isHttp: t.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              })
              this._isRangeSupported = i
              this._contentLength = a || this._contentLength
              this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader)
            }
            this._request = null
            this._url.protocol === 'http:'
              ? (this._request = n.request(
                  createRequestOptions(this._url, t.httpHeaders),
                  handleResponse
                ))
              : (this._request = o.request(
                  createRequestOptions(this._url, t.httpHeaders),
                  handleResponse
                ))
            this._request.on('error', (t) => {
              this._storedError = t
              this._headersCapability.reject(t)
            })
            this._request.end()
          }
        }
        class PDFNodeStreamRangeReader extends BaseRangeReader {
          constructor(t, e, i) {
            super(t)
            this._httpHeaders = {}
            for (const e in t.httpHeaders) {
              const i = t.httpHeaders[e]
              void 0 !== i && (this._httpHeaders[e] = i)
            }
            this._httpHeaders.Range = `bytes=${e}-${i - 1}`
            const handleResponse = (t) => {
              if (t.statusCode !== 404) this._setReadableStream(t)
              else {
                const t = new r.MissingPDFException(`Missing PDF "${this._url}".`)
                this._storedError = t
              }
            }
            this._request = null
            this._url.protocol === 'http:'
              ? (this._request = n.request(
                  createRequestOptions(this._url, this._httpHeaders),
                  handleResponse
                ))
              : (this._request = o.request(
                  createRequestOptions(this._url, this._httpHeaders),
                  handleResponse
                ))
            this._request.on('error', (t) => {
              this._storedError = t
            })
            this._request.end()
          }
        }
        class PDFNodeStreamFsFullReader extends BaseFullReader {
          constructor(t) {
            super(t)
            let e = decodeURIComponent(this._url.path)
            c.test(this._url.href) && (e = e.replace(/^\//, ''))
            a.lstat(e, (t, i) => {
              if (t) {
                t.code === 'ENOENT' && (t = new r.MissingPDFException(`Missing PDF "${e}".`))
                this._storedError = t
                this._headersCapability.reject(t)
              } else {
                this._contentLength = i.size
                this._setReadableStream(a.createReadStream(e))
                this._headersCapability.resolve()
              }
            })
          }
        }
        class PDFNodeStreamFsRangeReader extends BaseRangeReader {
          constructor(t, e, i) {
            super(t)
            let r = decodeURIComponent(this._url.path)
            c.test(this._url.href) && (r = r.replace(/^\//, ''))
            this._setReadableStream(a.createReadStream(r, { start: e, end: i - 1 }))
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.createResponseStatusError = function createResponseStatusError(t, e) {
          if (t === 404 || (t === 0 && e.startsWith('file:')))
            return new r.MissingPDFException(`Missing PDF "${e}".`)
          return new r.UnexpectedResponseException(
            `Unexpected server response (${t}) while retrieving PDF "${e}".`,
            t
          )
        }
        e.extractFilenameFromHeader = function extractFilenameFromHeader(t) {
          const e = t('Content-Disposition')
          if (e) {
            let t = (0, s.getFilenameFromContentDispositionHeader)(e)
            if (t.includes('%'))
              try {
                t = decodeURIComponent(t)
              } catch (t) {}
            if ((0, a.isPdfFile)(t)) return t
          }
          return null
        }
        e.validateRangeRequestCapabilities = function validateRangeRequestCapabilities(t) {
          const { getResponseHeader: e, isHttp: i, rangeChunkSize: r, disableRange: s } = t
          const a = { allowRangeRequests: !1, suggestedLength: void 0 }
          const n = parseInt(e('Content-Length'), 10)
          if (!Number.isInteger(n)) return a
          a.suggestedLength = n
          if (n <= 2 * r) return a
          if (s || !i) return a
          if (e('Accept-Ranges') !== 'bytes') return a
          if ((e('Content-Encoding') || 'identity') !== 'identity') return a
          a.allowRangeRequests = !0
          return a
        }
        e.validateResponseStatus = function validateResponseStatus(t) {
          return t === 200 || t === 206
        }
        var r = i(1)
        var s = i(161)
        var a = i(133)
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.getFilenameFromContentDispositionHeader =
          function getFilenameFromContentDispositionHeader(t) {
            let e = !0
            let i = toParamRegExp('filename\\*', 'i').exec(t)
            if (i) {
              i = i[1]
              let t = rfc2616unquote(i)
              t = unescape(t)
              t = rfc5987decode(t)
              t = rfc2047decode(t)
              return fixupEncoding(t)
            }
            i = (function rfc2231getparam(t) {
              const e = []
              let i
              const r = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig')
              for (; (i = r.exec(t)) !== null; ) {
                let [, t, r, s] = i
                t = parseInt(t, 10)
                if (t in e) {
                  if (t === 0) break
                } else e[t] = [r, s]
              }
              const s = []
              for (let t = 0; t < e.length && t in e; ++t) {
                let [i, r] = e[t]
                r = rfc2616unquote(r)
                if (i) {
                  r = unescape(r)
                  t === 0 && (r = rfc5987decode(r))
                }
                s.push(r)
              }
              return s.join('')
            })(t)
            if (i) {
              return fixupEncoding(rfc2047decode(i))
            }
            i = toParamRegExp('filename', 'i').exec(t)
            if (i) {
              i = i[1]
              let t = rfc2616unquote(i)
              t = rfc2047decode(t)
              return fixupEncoding(t)
            }
            function toParamRegExp(t, e) {
              return new RegExp(
                `(?:^|;)\\s*${t}\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`,
                e
              )
            }
            function textdecode(t, i) {
              if (t) {
                if (!/^[\x00-\xFF]+$/.test(i)) return i
                try {
                  const s = new TextDecoder(t, { fatal: !0 })
                  const a = (0, r.stringToBytes)(i)
                  i = s.decode(a)
                  e = !1
                } catch (t) {}
              }
              return i
            }
            function fixupEncoding(t) {
              if (e && /[\x80-\xff]/.test(t)) {
                t = textdecode('utf-8', t)
                e && (t = textdecode('iso-8859-1', t))
              }
              return t
            }
            function rfc2616unquote(t) {
              if (t.startsWith('"')) {
                const e = t.slice(1).split('\\"')
                for (let t = 0; t < e.length; ++t) {
                  const i = e[t].indexOf('"')
                  if (i !== -1) {
                    e[t] = e[t].slice(0, i)
                    e.length = t + 1
                  }
                  e[t] = e[t].replace(/\\(.)/g, '$1')
                }
                t = e.join('"')
              }
              return t
            }
            function rfc5987decode(t) {
              const e = t.indexOf("'")
              if (e === -1) return t
              return textdecode(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ''))
            }
            function rfc2047decode(t) {
              return !t.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(t)
                ? t
                : t.replace(
                    /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                    function (t, e, i, r) {
                      if (i === 'q' || i === 'Q')
                        return textdecode(
                          e,
                          (r = (r = r.replace(/_/g, ' ')).replace(
                            /=([0-9a-fA-F]{2})/g,
                            function (t, e) {
                              return String.fromCharCode(parseInt(e, 16))
                            }
                          ))
                        )
                      try {
                        r = atob(r)
                      } catch (t) {}
                      return textdecode(e, r)
                    }
                  )
            }
            return ''
          }
        var r = i(1)
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.PDFNetworkStream = void 0
        const r = i(1)
        const s = i(160)
        class NetworkManager {
          constructor(t) {
            const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            this.url = t
            this.isHttp = /^https?:/i.test(t)
            this.httpHeaders = (this.isHttp && e.httpHeaders) || Object.create(null)
            this.withCredentials = e.withCredentials || !1
            this.getXhr =
              e.getXhr ||
              function NetworkManager_getXhr() {
                return new XMLHttpRequest()
              }
            this.currXhrId = 0
            this.pendingRequests = Object.create(null)
          }

          requestRange(t, e, i) {
            const r = { begin: t, end: e }
            for (const t in i) r[t] = i[t]
            return this.request(r)
          }

          requestFull(t) {
            return this.request(t)
          }

          request(t) {
            const e = this.getXhr()
            const i = this.currXhrId++
            const r = (this.pendingRequests[i] = { xhr: e })
            e.open('GET', this.url)
            e.withCredentials = this.withCredentials
            for (const t in this.httpHeaders) {
              const i = this.httpHeaders[t]
              void 0 !== i && e.setRequestHeader(t, i)
            }
            if (this.isHttp && 'begin' in t && 'end' in t) {
              e.setRequestHeader('Range', `bytes=${t.begin}-${t.end - 1}`)
              r.expectedStatus = 206
            } else r.expectedStatus = 200
            e.responseType = 'arraybuffer'
            t.onError &&
              (e.onerror = function (i) {
                t.onError(e.status)
              })
            e.onreadystatechange = this.onStateChange.bind(this, i)
            e.onprogress = this.onProgress.bind(this, i)
            r.onHeadersReceived = t.onHeadersReceived
            r.onDone = t.onDone
            r.onError = t.onError
            r.onProgress = t.onProgress
            e.send(null)
            return i
          }

          onProgress(t, e) {
            let i
            const r = this.pendingRequests[t]
            r && ((i = r.onProgress) === null || void 0 === i || i.call(r, e))
          }

          onStateChange(t, e) {
            const i = this.pendingRequests[t]
            if (!i) return
            const s = i.xhr
            if (s.readyState >= 2 && i.onHeadersReceived) {
              i.onHeadersReceived()
              delete i.onHeadersReceived
            }
            if (s.readyState !== 4) return
            if (!(t in this.pendingRequests)) return
            delete this.pendingRequests[t]
            if (s.status === 0 && this.isHttp) {
              let a
              ;(a = i.onError) === null || void 0 === a || a.call(i, s.status)
              return
            }
            const n = s.status || 200
            if (!(n === 200 && i.expectedStatus === 206) && n !== i.expectedStatus) {
              let o
              ;(o = i.onError) === null || void 0 === o || o.call(i, s.status)
              return
            }
            const l = (function getArrayBuffer(t) {
              const e = t.response
              return typeof e !== 'string' ? e : (0, r.stringToBytes)(e).buffer
            })(s)
            if (n === 206) {
              const t = s.getResponseHeader('Content-Range')
              const e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t)
              i.onDone({ begin: parseInt(e[1], 10), chunk: l })
            } else if (l) i.onDone({ begin: 0, chunk: l })
            else {
              let c
              ;(c = i.onError) === null || void 0 === c || c.call(i, s.status)
            }
          }

          getRequestXhr(t) {
            return this.pendingRequests[t].xhr
          }

          isPendingRequest(t) {
            return t in this.pendingRequests
          }

          abortRequest(t) {
            const e = this.pendingRequests[t].xhr
            delete this.pendingRequests[t]
            e.abort()
          }
        }
        e.PDFNetworkStream = class PDFNetworkStream {
          constructor(t) {
            this._source = t
            this._manager = new NetworkManager(t.url, {
              httpHeaders: t.httpHeaders,
              withCredentials: t.withCredentials
            })
            this._rangeChunkSize = t.rangeChunkSize
            this._fullRequestReader = null
            this._rangeRequestReaders = []
          }

          _onRangeRequestReaderClosed(t) {
            const e = this._rangeRequestReaders.indexOf(t)
            e >= 0 && this._rangeRequestReaders.splice(e, 1)
          }

          getFullReader() {
            ;(0, r.assert)(
              !this._fullRequestReader,
              'PDFNetworkStream.getFullReader can only be called once.'
            )
            this._fullRequestReader = new PDFNetworkStreamFullRequestReader(
              this._manager,
              this._source
            )
            return this._fullRequestReader
          }

          getRangeReader(t, e) {
            const i = new PDFNetworkStreamRangeRequestReader(this._manager, t, e)
            i.onClosed = this._onRangeRequestReaderClosed.bind(this)
            this._rangeRequestReaders.push(i)
            return i
          }

          cancelAllRequests(t) {
            let e
            ;(e = this._fullRequestReader) === null || void 0 === e || e.cancel(t)
            for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t)
          }
        }
        class PDFNetworkStreamFullRequestReader {
          constructor(t, e) {
            this._manager = t
            const i = {
              onHeadersReceived: this._onHeadersReceived.bind(this),
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            }
            this._url = e.url
            this._fullRequestId = t.requestFull(i)
            this._headersReceivedCapability = (0, r.createPromiseCapability)()
            this._disableRange = e.disableRange || !1
            this._contentLength = e.length
            this._rangeChunkSize = e.rangeChunkSize
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0)
            this._isStreamingSupported = !1
            this._isRangeSupported = !1
            this._cachedChunks = []
            this._requests = []
            this._done = !1
            this._storedError = void 0
            this._filename = null
            this.onProgress = null
          }

          _onHeadersReceived() {
            const t = this._fullRequestId
            const e = this._manager.getRequestXhr(t)
            const getResponseHeader = (t) => e.getResponseHeader(t)
            const { allowRangeRequests: i, suggestedLength: r } = (0,
            s.validateRangeRequestCapabilities)({
              getResponseHeader,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            })
            i && (this._isRangeSupported = !0)
            this._contentLength = r || this._contentLength
            this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader)
            this._isRangeSupported && this._manager.abortRequest(t)
            this._headersReceivedCapability.resolve()
          }

          _onDone(t) {
            if (t)
              if (this._requests.length > 0) {
                this._requests.shift().resolve({ value: t.chunk, done: !1 })
              } else this._cachedChunks.push(t.chunk)
            this._done = !0
            if (!(this._cachedChunks.length > 0)) {
              for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
              this._requests.length = 0
            }
          }

          _onError(t) {
            this._storedError = (0, s.createResponseStatusError)(t, this._url)
            this._headersReceivedCapability.reject(this._storedError)
            for (const t of this._requests) t.reject(this._storedError)
            this._requests.length = 0
            this._cachedChunks.length = 0
          }

          _onProgress(t) {
            let e
            ;(e = this.onProgress) === null ||
              void 0 === e ||
              e.call(this, {
                loaded: t.loaded,
                total: t.lengthComputable ? t.total : this._contentLength
              })
          }

          get filename() {
            return this._filename
          }

          get isRangeSupported() {
            return this._isRangeSupported
          }

          get isStreamingSupported() {
            return this._isStreamingSupported
          }

          get contentLength() {
            return this._contentLength
          }

          get headersReady() {
            return this._headersReceivedCapability.promise
          }

          async read() {
            if (this._storedError) throw this._storedError
            if (this._cachedChunks.length > 0) {
              return { value: this._cachedChunks.shift(), done: !1 }
            }
            if (this._done) return { value: void 0, done: !0 }
            const t = (0, r.createPromiseCapability)()
            this._requests.push(t)
            return t.promise
          }

          cancel(t) {
            this._done = !0
            this._headersReceivedCapability.reject(t)
            for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
            this._requests.length = 0
            this._manager.isPendingRequest(this._fullRequestId) &&
              this._manager.abortRequest(this._fullRequestId)
            this._fullRequestReader = null
          }
        }
        class PDFNetworkStreamRangeRequestReader {
          constructor(t, e, i) {
            this._manager = t
            const r = {
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            }
            this._url = t.url
            this._requestId = t.requestRange(e, i, r)
            this._requests = []
            this._queuedChunk = null
            this._done = !1
            this._storedError = void 0
            this.onProgress = null
            this.onClosed = null
          }

          _close() {
            let t
            ;(t = this.onClosed) === null || void 0 === t || t.call(this, this)
          }

          _onDone(t) {
            const e = t.chunk
            if (this._requests.length > 0) {
              this._requests.shift().resolve({ value: e, done: !1 })
            } else this._queuedChunk = e
            this._done = !0
            for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
            this._requests.length = 0
            this._close()
          }

          _onError(t) {
            this._storedError = (0, s.createResponseStatusError)(t, this._url)
            for (const t of this._requests) t.reject(this._storedError)
            this._requests.length = 0
            this._queuedChunk = null
          }

          _onProgress(t) {
            if (!this.isStreamingSupported) {
              let e
              ;(e = this.onProgress) === null || void 0 === e || e.call(this, { loaded: t.loaded })
            }
          }

          get isStreamingSupported() {
            return !1
          }

          async read() {
            if (this._storedError) throw this._storedError
            if (this._queuedChunk !== null) {
              const t = this._queuedChunk
              this._queuedChunk = null
              return { value: t, done: !1 }
            }
            if (this._done) return { value: void 0, done: !0 }
            const t = (0, r.createPromiseCapability)()
            this._requests.push(t)
            return t.promise
          }

          cancel(t) {
            this._done = !0
            for (const t of this._requests) t.resolve({ value: void 0, done: !0 })
            this._requests.length = 0
            this._manager.isPendingRequest(this._requestId) &&
              this._manager.abortRequest(this._requestId)
            this._close()
          }
        }
      },
      (t, e, i) => {
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.PDFFetchStream = void 0
        const r = i(1)
        const s = i(160)
        function createFetchOptions(t, e, i) {
          return {
            method: 'GET',
            headers: t,
            signal: i.signal,
            mode: 'cors',
            credentials: e ? 'include' : 'same-origin',
            redirect: 'follow'
          }
        }
        function createHeaders(t) {
          const e = new Headers()
          for (const i in t) {
            const r = t[i]
            void 0 !== r && e.append(i, r)
          }
          return e
        }
        e.PDFFetchStream = class PDFFetchStream {
          constructor(t) {
            this.source = t
            this.isHttp = /^https?:/i.test(t.url)
            this.httpHeaders = (this.isHttp && t.httpHeaders) || {}
            this._fullRequestReader = null
            this._rangeRequestReaders = []
          }

          get _progressiveDataLength() {
            let t
            let e
            return (t =
              (e = this._fullRequestReader) === null || void 0 === e ? void 0 : e._loaded) !==
              null && void 0 !== t
              ? t
              : 0
          }

          getFullReader() {
            ;(0, r.assert)(
              !this._fullRequestReader,
              'PDFFetchStream.getFullReader can only be called once.'
            )
            this._fullRequestReader = new PDFFetchStreamReader(this)
            return this._fullRequestReader
          }

          getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null
            const i = new PDFFetchStreamRangeReader(this, t, e)
            this._rangeRequestReaders.push(i)
            return i
          }

          cancelAllRequests(t) {
            this._fullRequestReader && this._fullRequestReader.cancel(t)
            for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t)
          }
        }
        class PDFFetchStreamReader {
          constructor(t) {
            this._stream = t
            this._reader = null
            this._loaded = 0
            this._filename = null
            const e = t.source
            this._withCredentials = e.withCredentials || !1
            this._contentLength = e.length
            this._headersCapability = (0, r.createPromiseCapability)()
            this._disableRange = e.disableRange || !1
            this._rangeChunkSize = e.rangeChunkSize
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0)
            this._abortController = new AbortController()
            this._isStreamingSupported = !e.disableStream
            this._isRangeSupported = !e.disableRange
            this._headers = createHeaders(this._stream.httpHeaders)
            const i = e.url
            fetch(
              i,
              createFetchOptions(this._headers, this._withCredentials, this._abortController)
            )
              .then((t) => {
                if (!(0, s.validateResponseStatus)(t.status))
                  throw (0, s.createResponseStatusError)(t.status, i)
                this._reader = t.body.getReader()
                this._headersCapability.resolve()
                const getResponseHeader = (e) => t.headers.get(e)
                const { allowRangeRequests: e, suggestedLength: a } = (0,
                s.validateRangeRequestCapabilities)({
                  getResponseHeader,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                })
                this._isRangeSupported = e
                this._contentLength = a || this._contentLength
                this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader)
                !this._isStreamingSupported &&
                  this._isRangeSupported &&
                  this.cancel(new r.AbortException('Streaming is disabled.'))
              })
              .catch(this._headersCapability.reject)
            this.onProgress = null
          }

          get headersReady() {
            return this._headersCapability.promise
          }

          get filename() {
            return this._filename
          }

          get contentLength() {
            return this._contentLength
          }

          get isRangeSupported() {
            return this._isRangeSupported
          }

          get isStreamingSupported() {
            return this._isStreamingSupported
          }

          async read() {
            await this._headersCapability.promise
            const { value: t, done: e } = await this._reader.read()
            if (e) return { value: t, done: e }
            this._loaded += t.byteLength
            this.onProgress && this.onProgress({ loaded: this._loaded, total: this._contentLength })
            return { value: new Uint8Array(t).buffer, done: !1 }
          }

          cancel(t) {
            this._reader && this._reader.cancel(t)
            this._abortController.abort()
          }
        }
        class PDFFetchStreamRangeReader {
          constructor(t, e, i) {
            this._stream = t
            this._reader = null
            this._loaded = 0
            const a = t.source
            this._withCredentials = a.withCredentials || !1
            this._readCapability = (0, r.createPromiseCapability)()
            this._isStreamingSupported = !a.disableStream
            this._abortController = new AbortController()
            this._headers = createHeaders(this._stream.httpHeaders)
            this._headers.append('Range', `bytes=${e}-${i - 1}`)
            const n = a.url
            fetch(
              n,
              createFetchOptions(this._headers, this._withCredentials, this._abortController)
            )
              .then((t) => {
                if (!(0, s.validateResponseStatus)(t.status))
                  throw (0, s.createResponseStatusError)(t.status, n)
                this._readCapability.resolve()
                this._reader = t.body.getReader()
              })
              .catch(this._readCapability.reject)
            this.onProgress = null
          }

          get isStreamingSupported() {
            return this._isStreamingSupported
          }

          async read() {
            await this._readCapability.promise
            const { value: t, done: e } = await this._reader.read()
            if (e) return { value: t, done: e }
            this._loaded += t.byteLength
            this.onProgress && this.onProgress({ loaded: this._loaded })
            return { value: new Uint8Array(t).buffer, done: !1 }
          }

          cancel(t) {
            this._reader && this._reader.cancel(t)
            this._abortController.abort()
          }
        }
      }
    ]
    const __webpack_module_cache__ = {}
    function __w_pdfjs_require__(t) {
      const e = __webpack_module_cache__[t]
      if (void 0 !== e) return e.exports
      const i = (__webpack_module_cache__[t] = { exports: {} })
      __webpack_modules__[t](i, i.exports, __w_pdfjs_require__)
      return i.exports
    }
    const __webpack_exports__ = {}
    ;(() => {
      const t = __webpack_exports__
      Object.defineProperty(t, '__esModule', { value: !0 })
      Object.defineProperty(t, 'AnnotationEditorLayer', {
        enumerable: !0,
        get() {
          return s.AnnotationEditorLayer
        }
      })
      Object.defineProperty(t, 'AnnotationEditorParamsType', {
        enumerable: !0,
        get() {
          return e.AnnotationEditorParamsType
        }
      })
      Object.defineProperty(t, 'AnnotationEditorType', {
        enumerable: !0,
        get() {
          return e.AnnotationEditorType
        }
      })
      Object.defineProperty(t, 'AnnotationEditorUIManager', {
        enumerable: !0,
        get() {
          return a.AnnotationEditorUIManager
        }
      })
      Object.defineProperty(t, 'AnnotationLayer', {
        enumerable: !0,
        get() {
          return n.AnnotationLayer
        }
      })
      Object.defineProperty(t, 'AnnotationMode', {
        enumerable: !0,
        get() {
          return e.AnnotationMode
        }
      })
      Object.defineProperty(t, 'CMapCompressionType', {
        enumerable: !0,
        get() {
          return e.CMapCompressionType
        }
      })
      Object.defineProperty(t, 'GlobalSensWords', {
        enumerable: !0,
        get() {
          return u.GlobalSensWords
        }
      })
      Object.defineProperty(t, 'GlobalWorkerOptions', {
        enumerable: !0,
        get() {
          return o.GlobalWorkerOptions
        }
      })
      Object.defineProperty(t, 'InvalidPDFException', {
        enumerable: !0,
        get() {
          return e.InvalidPDFException
        }
      })
      Object.defineProperty(t, 'LoopbackPort', {
        enumerable: !0,
        get() {
          return i.LoopbackPort
        }
      })
      Object.defineProperty(t, 'MissingPDFException', {
        enumerable: !0,
        get() {
          return e.MissingPDFException
        }
      })
      Object.defineProperty(t, 'OPS', {
        enumerable: !0,
        get() {
          return e.OPS
        }
      })
      Object.defineProperty(t, 'PDFDataRangeTransport', {
        enumerable: !0,
        get() {
          return i.PDFDataRangeTransport
        }
      })
      Object.defineProperty(t, 'PDFDateString', {
        enumerable: !0,
        get() {
          return r.PDFDateString
        }
      })
      Object.defineProperty(t, 'PDFWorker', {
        enumerable: !0,
        get() {
          return i.PDFWorker
        }
      })
      Object.defineProperty(t, 'PasswordResponses', {
        enumerable: !0,
        get() {
          return e.PasswordResponses
        }
      })
      Object.defineProperty(t, 'PermissionFlag', {
        enumerable: !0,
        get() {
          return e.PermissionFlag
        }
      })
      Object.defineProperty(t, 'PixelsPerInch', {
        enumerable: !0,
        get() {
          return r.PixelsPerInch
        }
      })
      Object.defineProperty(t, 'RenderingCancelledException', {
        enumerable: !0,
        get() {
          return r.RenderingCancelledException
        }
      })
      Object.defineProperty(t, 'SVGGraphics', {
        enumerable: !0,
        get() {
          return d.SVGGraphics
        }
      })
      Object.defineProperty(t, 'UNSUPPORTED_FEATURES', {
        enumerable: !0,
        get() {
          return e.UNSUPPORTED_FEATURES
        }
      })
      Object.defineProperty(t, 'UnexpectedResponseException', {
        enumerable: !0,
        get() {
          return e.UnexpectedResponseException
        }
      })
      Object.defineProperty(t, 'Util', {
        enumerable: !0,
        get() {
          return e.Util
        }
      })
      Object.defineProperty(t, 'VerbosityLevel', {
        enumerable: !0,
        get() {
          return e.VerbosityLevel
        }
      })
      Object.defineProperty(t, 'XfaLayer', {
        enumerable: !0,
        get() {
          return h.XfaLayer
        }
      })
      Object.defineProperty(t, 'build', {
        enumerable: !0,
        get() {
          return i.build
        }
      })
      Object.defineProperty(t, 'createPromiseCapability', {
        enumerable: !0,
        get() {
          return e.createPromiseCapability
        }
      })
      Object.defineProperty(t, 'createValidAbsoluteUrl', {
        enumerable: !0,
        get() {
          return e.createValidAbsoluteUrl
        }
      })
      Object.defineProperty(t, 'getDocument', {
        enumerable: !0,
        get() {
          return i.getDocument
        }
      })
      Object.defineProperty(t, 'getFilenameFromUrl', {
        enumerable: !0,
        get() {
          return r.getFilenameFromUrl
        }
      })
      Object.defineProperty(t, 'getPdfFilenameFromUrl', {
        enumerable: !0,
        get() {
          return r.getPdfFilenameFromUrl
        }
      })
      Object.defineProperty(t, 'getXfaPageViewport', {
        enumerable: !0,
        get() {
          return r.getXfaPageViewport
        }
      })
      Object.defineProperty(t, 'isPdfFile', {
        enumerable: !0,
        get() {
          return r.isPdfFile
        }
      })
      Object.defineProperty(t, 'loadScript', {
        enumerable: !0,
        get() {
          return r.loadScript
        }
      })
      Object.defineProperty(t, 'renderTextLayer', {
        enumerable: !0,
        get() {
          return c.renderTextLayer
        }
      })
      Object.defineProperty(t, 'shadow', {
        enumerable: !0,
        get() {
          return e.shadow
        }
      })
      Object.defineProperty(t, 'version', {
        enumerable: !0,
        get() {
          return i.version
        }
      })
      var e = __w_pdfjs_require__(1)
      var i = __w_pdfjs_require__(129)
      var r = __w_pdfjs_require__(133)
      var s = __w_pdfjs_require__(149)
      var a = __w_pdfjs_require__(132)
      var n = __w_pdfjs_require__(154)
      var o = __w_pdfjs_require__(142)
      const l = __w_pdfjs_require__(3)
      var c = __w_pdfjs_require__(157)
      var d = __w_pdfjs_require__(158)
      var h = __w_pdfjs_require__(156)
      var u = __w_pdfjs_require__(141)
      if (l.isNodeJS) {
        const { PDFNodeStream: t } = __w_pdfjs_require__(159)
        ;(0, i.setPDFNetworkStreamFactory)((e) => new t(e))
      } else {
        const { PDFNetworkStream: t } = __w_pdfjs_require__(162)
        const { PDFFetchStream: e } = __w_pdfjs_require__(163)
        ;(0, i.setPDFNetworkStreamFactory)((i) =>
          (0, r.isValidFetchUrl)(i.url) ? new e(i) : new t(i)
        )
      }
    })()
    return __webpack_exports__
  })()
)
